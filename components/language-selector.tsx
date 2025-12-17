"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
]

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getLanguageFromCookie = () => {
    if (typeof document === "undefined") return "fr"

    const cookies = document.cookie.split(";")
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=")
      if (name === "googtrans") {
        const parts = decodeURIComponent(value).split("/")
        if (parts.length >= 3) {
          const targetLang = parts[2]
          return targetLang && targetLang !== "auto" ? targetLang : "fr"
        }
      }
    }
    return "fr"
  }

  const changeLanguage = (langCode: string) => {
    if (typeof window === "undefined") return

    console.log("[v0] Changing language to:", langCode)

    const cookieValue = `/auto/${langCode}`
    const domain = window.location.hostname
    const path = "/"
    const maxAge = 31536000 // 1 year

    const cookiesToClear = ["googtrans", "googtrans"]
    cookiesToClear.forEach((name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain};`
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=.${domain};`
    })

    document.cookie = `googtrans=${cookieValue}; path=${path}; max-age=${maxAge}`
    document.cookie = `googtrans=${cookieValue}; path=${path}; domain=${domain}; max-age=${maxAge}`

    console.log("[v0] Cookies set, reloading page")

    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  useEffect(() => {
    if (isClient) {
      const detectedLang = getLanguageFromCookie()
      console.log("[v0] Detected language from cookie:", detectedLang)
      setCurrentLang(detectedLang)
    }
  }, [isClient])

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0]
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="flex items-center">
      <div id="google_translate_element" className="hidden" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-3 text-sm font-medium border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors bg-transparent"
          >
            <Globe className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">
              {getCurrentLanguage().flag} {getCurrentLanguage().name}
            </span>
            <span className="sm:hidden">{getCurrentLanguage().flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-white border-2 border-gray-200 shadow-lg">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`cursor-pointer py-2.5 px-3 text-sm font-medium transition-colors ${
                currentLang === lang.code ? "bg-blue-100 text-blue-900" : "hover:bg-gray-100"
              }`}
            >
              <span className="mr-2 text-base">{lang.flag}</span>
              <span className="flex-1">{lang.name}</span>
              {currentLang === lang.code && <span className="ml-2 text-blue-600">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
