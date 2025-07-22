"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translationService } from "@/lib/translation-service"

interface TranslationContextType {
  currentLanguage: string
  isTranslating: boolean
  setLanguage: (language: string) => void
  translateText: (text: string) => Promise<string>
  resetToOriginal: () => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

interface TranslationProviderProps {
  children: ReactNode
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("fr")
  const [isTranslating, setIsTranslating] = useState(false)

  const setLanguage = useCallback((language: string) => {
    setCurrentLanguage(language)
  }, [])

  const translateText = useCallback(
    async (text: string): Promise<string> => {
      if (currentLanguage === "fr" || !text.trim()) {
        return text
      }

      try {
        setIsTranslating(true)
        const result = await translationService.translateText({
          text,
          targetLanguage: currentLanguage,
          sourceLanguage: "fr",
        })
        return result.translatedText
      } catch (error) {
        console.error("Translation error:", error)
        return text
      } finally {
        setIsTranslating(false)
      }
    },
    [currentLanguage],
  )

  const resetToOriginal = useCallback(() => {
    setCurrentLanguage("fr")
    translationService.clearCache()
  }, [])

  const value: TranslationContextType = {
    currentLanguage,
    isTranslating,
    setLanguage,
    translateText,
    resetToOriginal,
  }

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}
