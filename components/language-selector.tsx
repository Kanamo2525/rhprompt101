"use client"

import { useEffect, useState, useCallback } from "react"
import { Globe, Check, Loader2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
]

function TransitionOverlay({ isVisible, targetLanguage }: { isVisible: boolean; targetLanguage: string }) {
  if (!isVisible) return null

  const lang = languages.find((l) => l.code === targetLanguage) || languages[0]

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card shadow-lg border">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <div className="flex items-center gap-3">
          <span className="text-3xl">{lang.flag}</span>
          <span className="text-lg font-medium">{lang.label}</span>
        </div>
        <p className="text-sm text-muted-foreground">Traduction en cours...</p>
      </div>
    </div>
  )
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetLang, setTargetLang] = useState("fr")

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/)
    if (match && match[1]) {
      setCurrentLang(match[1])
    }
  }, [])

  const handleLanguageChange = useCallback(
    (langCode: string) => {
      if (langCode === currentLang) return

      setTargetLang(langCode)
      setIsTransitioning(true)

      // Small delay to ensure overlay is visible before reload
      setTimeout(() => {
        // Try to use the Google Translate combo directly
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement

        if (langCode === "fr") {
          // Reset to original language
          const domains = ["", window.location.hostname, "." + window.location.hostname]

          const parts = window.location.hostname.split(".")
          if (parts.length > 2) {
            const parentDomain = parts.slice(-2).join(".")
            domains.push("." + parentDomain)
            domains.push(parentDomain)
          }

          domains.forEach((domain) => {
            const domainPart = domain ? `; domain=${domain}` : ""
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainPart}`
          })

          setCurrentLang("fr")
          window.location.reload()
          return
        }

        // For other languages
        if (selectElement && selectElement.options.length > 1) {
          selectElement.value = langCode
          selectElement.dispatchEvent(new Event("change", { bubbles: true }))
          setCurrentLang(langCode)
          setTimeout(() => setIsTransitioning(false), 500)
        } else {
          // Fallback: set cookie and reload
          const cookieValue = `/fr/${langCode}`
          const domains = ["", window.location.hostname]

          const parts = window.location.hostname.split(".")
          if (parts.length > 2) {
            const parentDomain = parts.slice(-2).join(".")
            domains.push("." + parentDomain)
          }

          domains.forEach((domain) => {
            const domainPart = domain ? `; domain=${domain}` : ""
            document.cookie = `googtrans=${cookieValue}; path=/${domainPart}`
          })

          setCurrentLang(langCode)
          window.location.reload()
        }
      }, 100)
    },
    [currentLang],
  )

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0]

  return (
    <>
      <TransitionOverlay isVisible={isTransitioning} targetLanguage={targetLang} />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3 gap-2 border-2 border-primary/30 hover:border-primary bg-transparent"
          >
            <Globe className="h-4 w-4" />
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="hidden sm:inline font-medium">{currentLanguage.label}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 z-[9999]">
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b mb-1">
            Choisir une langue
          </div>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-2 cursor-pointer ${
                currentLang === lang.code ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {currentLang === lang.code && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
