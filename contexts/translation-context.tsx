"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface TranslationContextType {
  currentLanguage: string
  setCurrentLanguage: (language: string) => void
  isTranslating: boolean
  setIsTranslating: (translating: boolean) => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("fr")
  const [isTranslating, setIsTranslating] = useState(false)

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language")
    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // Save language preference
  useEffect(() => {
    localStorage.setItem("preferred-language", currentLanguage)
  }, [currentLanguage])

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        isTranslating,
        setIsTranslating,
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
