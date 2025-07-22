import { type NextRequest, NextResponse } from "next/server"

interface TranslateRequest {
  text: string
  targetLanguage: string
  sourceLanguage?: string
}

export async function POST(request: NextRequest) {
  try {
    const { text, targetLanguage, sourceLanguage = "fr" }: TranslateRequest = await request.json()

    if (!text || !targetLanguage) {
      return NextResponse.json({ error: "Text and target language are required" }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Google Cloud API key not configured" }, { status: 500 })
    }

    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
        source: sourceLanguage,
        format: "text",
      }),
    })

    if (!response.ok) {
      throw new Error(`Google Translate API error: ${response.status}`)
    }

    const data = await response.json()
    const translatedText = data.data.translations[0].translatedText
    const detectedSourceLanguage = data.data.translations[0].detectedSourceLanguage

    return NextResponse.json({
      translatedText,
      detectedSourceLanguage,
    })
  } catch (error) {
    console.error("Translation API error:", error)
    return NextResponse.json({ error: "Translation failed" }, { status: 500 })
  }
}
