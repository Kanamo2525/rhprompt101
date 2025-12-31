"use client"

import { useState, useEffect, useCallback } from "react"
import { Globe, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "fr", name: "Français", nativeName: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", nativeName: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", nativeName: "Português", flag: "🇵🇹" },
  { code: "nl", name: "Nederlands", nativeName: "Nederlands", flag: "🇳🇱" },
  { code: "ru", name: "Русский", nativeName: "Русский", flag: "🇷🇺" },
  { code: "zh-CN", name: "中文", nativeName: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", nativeName: "العربية", flag: "🇸🇦" },
]

function changeLanguageViaCombo(langCode: string): boolean {
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
  if (!combo) return false

  // Set value and trigger change
  combo.value = langCode
  combo.dispatchEvent(new Event("change", { bubbles: true }))
  return true
}

function detectCurrentLanguage(): string {
  // Check combo value first (most reliable)
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
  if (combo && combo.value) {
    return combo.value === "" ? "fr" : combo.value
  }

  // Check cookie as fallback
  const match = document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/)
  if (match) return match[1]

  return "fr"
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isOpen, setIsOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Wait for Google Translate to be ready
    const checkReady = () => {
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
      if (combo) {
        setIsReady(true)
        setCurrentLang(detectCurrentLanguage())
        return true
      }
      return false
    }

    // Check immediately
    if (checkReady()) return

    // Check periodically
    const interval = setInterval(() => {
      if (checkReady()) {
        clearInterval(interval)
      }
    }, 500)

    // Timeout after 10 seconds - mark as ready anyway
    const timeout = setTimeout(() => {
      setIsReady(true)
      clearInterval(interval)
    }, 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      const detected = detectCurrentLanguage()
      if (detected !== currentLang) {
        setCurrentLang(detected)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isClient, currentLang])

  const handleChangeLanguage = useCallback(
    (langCode: string) => {
      if (langCode === currentLang) return
      setIsOpen(false)

      const success = changeLanguageViaCombo(langCode)

      if (success) {
        // Update state immediately
        setCurrentLang(langCode)
      } else {
        // Fallback: set cookie and reload
        const cookieValue = langCode === "fr" ? "" : `/fr/${langCode}`
        if (cookieValue) {
          document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`
        } else {
          document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"
        }
        window.location.reload()
      }
    },
    [currentLang],
  )

  const getCurrentLanguageData = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0]
  }

  if (!isClient) {
    return <div className="h-10 w-32 bg-muted rounded-lg animate-pulse" />
  }

  const currentLanguageData = getCurrentLanguageData()

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-10 px-3 text-sm font-medium border-2 border-primary/30 bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200 shadow-sm rounded-lg"
          aria-label={`Langue actuelle: ${currentLanguageData.name}. Cliquez pour changer de langue.`}
        >
          <Globe className="h-4 w-4 mr-2 text-primary" />
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="text-lg leading-none">{currentLanguageData.flag}</span>
            <span className="font-semibold">{currentLanguageData.nativeName}</span>
          </span>
          <span className="sm:hidden text-lg">{currentLanguageData.flag}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-background border-2 border-border shadow-xl rounded-xl p-1.5 z-[9999]"
        sideOffset={8}
      >
        <div className="px-3 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border mb-1">
          Choisir une langue
        </div>

        {languages.map((lang) => {
          const isSelected = currentLang === lang.code
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={`
                cursor-pointer py-3 px-3 rounded-lg my-0.5 text-sm font-medium transition-all duration-150
                flex items-center
                ${isSelected ? "bg-primary/10 text-primary border border-primary/20" : "hover:bg-muted text-foreground"}
              `}
            >
              <span className="mr-3 text-xl leading-none">{lang.flag}</span>
              <span className="flex-1 font-semibold">{lang.nativeName}</span>
              {isSelected && <Check className="h-5 w-5 ml-2 text-primary" strokeWidth={3} />}
            </DropdownMenuItem>
          )
        })}

        {!isReady && (
          <div className="px-3 py-2.5 text-xs text-amber-700 bg-amber-50 rounded-lg mt-2 flex items-center gap-2 border border-amber-200">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>Chargement du traducteur...</span>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
