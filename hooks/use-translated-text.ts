"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { translationService } from "@/lib/translation-service"

export function useTranslatedText(originalText: string) {
  const { currentLanguage, setIsTranslating } = useTranslation()
  const [translatedText, setTranslatedText] = useState(originalText)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const performTranslation = async () => {
      if (currentLanguage === "fr" || !originalText.trim()) {
        setTranslatedText(originalText)
        return
      }

      setIsLoading(true)
      setIsTranslating(true)

      try {
        const result = await translationService.translateText({
          text: originalText,
          targetLanguage: currentLanguage,
          sourceLanguage: "fr",
        })

        setTranslatedText(result.translatedText)
      } catch (error) {
        console.error("Translation failed:", error)
        setTranslatedText(originalText) // Fallback to original text
      } finally {
        setIsLoading(false)
        setIsTranslating(false)
      }
    }

    performTranslation()
  }, [originalText, currentLanguage, setIsTranslating])

  return { translatedText, isLoading }
}
