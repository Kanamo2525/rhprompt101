"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
]

export function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage, isTranslating } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
        disabled={isTranslating}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {currentLang.flag} {currentLang.name}
        </span>
        <span className="sm:hidden">{currentLang.flag}</span>
        <ChevronDown className="h-4 w-4" />
        {isTranslating && <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-600"></div>}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                  currentLanguage === language.code ? "bg-blue-50 text-blue-700" : "text-gray-700"
                }`}
              >
                <span className="mr-3">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
