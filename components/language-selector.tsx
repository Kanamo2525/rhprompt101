"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")

  const getLanguageFromCookie = () => {
    const cookies = document.cookie.split(";")
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=")
      if (name === "googtrans") {
        // Format du cookie: /fr/en (de français vers anglais)
        const parts = value.split("/")
        if (parts.length === 3) {
          return parts[2] || "fr"
        }
      }
    }
    return "fr"
  }

  const changeLanguage = (langCode: string) => {
    // Définir les cookies Google Translate
    const domain = window.location.hostname
    const cookieValue = langCode === "fr" ? "/fr/fr" : `/fr/${langCode}`

    // Supprimer les anciens cookies
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`

    // Définir les nouveaux cookies
    document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}; max-age=31536000`

    // Recharger la page immédiatement
    window.location.reload()
  }

  useEffect(() => {
    const detectedLang = getLanguageFromCookie()
    setCurrentLang(detectedLang)
  }, [])

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0]
  }

  return (
    <div className="flex items-center">
      <div id="google_translate_element" className="hidden" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 px-2 text-sm">
            <Globe className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">
              {getCurrentLanguage().flag} {getCurrentLanguage().name}
            </span>
            <span className="sm:hidden">{getCurrentLanguage().flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`cursor-pointer ${currentLang === lang.code ? "bg-accent" : ""}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
