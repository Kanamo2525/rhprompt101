import { type NextRequest, NextResponse } from "next/server"

interface TranslateRequest {
  text: string
  targetLanguage: string
  sourceLanguage?: string
}

// Mock translation service for development/fallback
const mockTranslations: Record<string, Record<string, string>> = {
  en: {
    "L'IA au service de la transformation RH": "AI at the service of HR transformation",
    "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés pour maximiser votre impact stratégique.":
      "The reference platform to transform your HR function through methodically optimized generative AI prompts to maximize your strategic impact.",
    "Explorer le catalogue": "Explore the catalog",
    "Consulter le guide": "View the guide",
    "Catalogue de Prompts RH": "HR Prompts Catalog",
    "Matrice d'opportunités": "Opportunity Matrix",
    "Guide IA pour RH": "AI Guide for HR",
    "Une bibliothèque structurée de prompts hautement optimisés pour chaque domaine RH, prêts à l'emploi et continuellement enrichis par notre communauté d'experts.":
      "A structured library of highly optimized prompts for each HR domain, ready to use and continuously enriched by our community of experts.",
    "Un tableau analytique croisant cas d'usage, techniques avancées et types d'opportunités pour construire votre stratégie d'implémentation de l'IA générative.":
      "An analytical table crossing use cases, advanced techniques and types of opportunities to build your generative AI implementation strategy.",
    "Un ouvrage stratégique complet détaillant méthodologies, cas d'usage et trajectoires d'implémentation pour transformer votre fonction RH par l'IA générative.":
      "A comprehensive strategic work detailing methodologies, use cases and implementation trajectories to transform your HR function through generative AI.",
    "Parcourir le catalogue": "Browse the catalog",
    "Explorer la matrice": "Explore the matrix",
    "Télécharger le guide": "Download the guide",
  },
  es: {
    "L'IA au service de la transformation RH": "La IA al servicio de la transformación de RRHH",
    "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés pour maximiser votre impact stratégique.":
      "La plataforma de referencia para transformar su función de RRHH a través de prompts de IA generativa metódicamente optimizados para maximizar su impacto estratégico.",
    "Explorer le catalogue": "Explorar el catálogo",
    "Consulter le guide": "Ver la guía",
    "Catalogue de Prompts RH": "Catálogo de Prompts de RRHH",
    "Matrice d'opportunités": "Matriz de oportunidades",
    "Guide IA pour RH": "Guía de IA para RRHH",
  },
  de: {
    "L'IA au service de la transformation RH": "KI im Dienst der HR-Transformation",
    "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés pour maximiser votre impact stratégique.":
      "Die Referenzplattform zur Transformation Ihrer HR-Funktion durch methodisch optimierte generative KI-Prompts zur Maximierung Ihrer strategischen Wirkung.",
    "Explorer le catalogue": "Katalog erkunden",
    "Consulter le guide": "Leitfaden ansehen",
    "Catalogue de Prompts RH": "HR-Prompts-Katalog",
    "Matrice d'opportunités": "Chancen-Matrix",
    "Guide IA pour RH": "KI-Leitfaden für HR",
  },
}

function getMockTranslation(text: string, targetLanguage: string): string {
  const translations = mockTranslations[targetLanguage]
  if (translations && translations[text]) {
    return translations[text]
  }

  // Simple fallback transformation for demonstration
  if (targetLanguage === "en") {
    return text.replace(/RH/g, "HR").replace(/IA/g, "AI")
  }

  return text
}

export async function POST(request: NextRequest) {
  try {
    const { text, targetLanguage, sourceLanguage = "fr" }: TranslateRequest = await request.json()

    if (!text || !targetLanguage) {
      return NextResponse.json({ error: "Text and target language are required" }, { status: 400 })
    }

    // If target language is the same as source, return original text
    if (targetLanguage === sourceLanguage) {
      return NextResponse.json({
        translatedText: text,
        detectedSourceLanguage: sourceLanguage,
      })
    }

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY

    // Try Google Translate API first if API key is available
    if (apiKey) {
      try {
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

        if (response.ok) {
          const data = await response.json()
          const translatedText = data.data.translations[0].translatedText
          const detectedSourceLanguage = data.data.translations[0].detectedSourceLanguage

          return NextResponse.json({
            translatedText,
            detectedSourceLanguage,
          })
        } else {
          console.warn(`Google Translate API returned ${response.status}, falling back to mock translation`)
        }
      } catch (error) {
        console.warn("Google Translate API error, falling back to mock translation:", error)
      }
    }

    // Fallback to mock translation
    const translatedText = getMockTranslation(text, targetLanguage)

    return NextResponse.json({
      translatedText,
      detectedSourceLanguage: sourceLanguage,
      isMockTranslation: true,
    })
  } catch (error) {
    console.error("Translation API error:", error)
    return NextResponse.json({ error: "Translation failed" }, { status: 500 })
  }
}
