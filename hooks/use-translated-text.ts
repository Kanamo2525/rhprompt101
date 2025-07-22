"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/contexts/translation-context"

export function useTranslatedText(originalText: string) {
  const [translatedText, setTranslatedText] = useState(originalText)
  const { translateText, currentLanguage } = useTranslation()

  useEffect(() => {
    if (currentLanguage === "fr") {
      setTranslatedText(originalText)
      return
    }

    let isCancelled = false

    const performTranslation = async () => {
      try {
        const result = await translateText(originalText)
        if (!isCancelled) {
          setTranslatedText(result)
        }
      } catch (error) {
        console.error("Translation failed:", error)
        if (!isCancelled) {
          setTranslatedText(originalText)
        }
      }
    }

    performTranslation()

    return () => {
      isCancelled = true
    }
  }, [originalText, translateText, currentLanguage])

  return translatedText
}
