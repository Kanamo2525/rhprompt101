interface TranslationResponse {
  translatedText: string
  detectedSourceLanguage?: string
}

interface TranslationRequest {
  text: string
  targetLanguage: string
  sourceLanguage?: string
}

export class TranslationService {
  private static instance: TranslationService
  private cache: Map<string, string> = new Map()

  private constructor() {}

  static getInstance(): TranslationService {
    if (!TranslationService.instance) {
      TranslationService.instance = new TranslationService()
    }
    return TranslationService.instance
  }

  private getCacheKey(text: string, targetLanguage: string, sourceLanguage?: string): string {
    return `${sourceLanguage || "auto"}-${targetLanguage}-${text.substring(0, 100)}`
  }

  async translateText({
    text,
    targetLanguage,
    sourceLanguage = "fr",
  }: TranslationRequest): Promise<TranslationResponse> {
    const cacheKey = this.getCacheKey(text, targetLanguage, sourceLanguage)

    if (this.cache.has(cacheKey)) {
      return { translatedText: this.cache.get(cacheKey)! }
    }

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          targetLanguage,
          sourceLanguage,
        }),
      })

      if (!response.ok) {
        throw new Error("Translation failed")
      }

      const result: TranslationResponse = await response.json()
      this.cache.set(cacheKey, result.translatedText)

      return result
    } catch (error) {
      console.error("Translation error:", error)
      return { translatedText: text } // Fallback to original text
    }
  }

  async translateMultiple(requests: TranslationRequest[]): Promise<TranslationResponse[]> {
    const promises = requests.map((request) => this.translateText(request))
    return Promise.all(promises)
  }

  clearCache(): void {
    this.cache.clear()
  }
}

export const translationService = TranslationService.getInstance()
