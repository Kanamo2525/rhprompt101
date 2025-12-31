"use client"

import { useEffect, useState, useCallback } from "react"
import { Globe, Check } from "lucide-react"
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

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void
      }
    }
    googleTranslateElementInit: () => void
  }
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isReady, setIsReady] = useState(false)

  const triggerTranslation = useCallback((langCode: string) => {
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (selectElement) {
      selectElement.value = langCode
      selectElement.dispatchEvent(new Event("change", { bubbles: true }))
      setCurrentLang(langCode)
      return true
    }
    return false
  }, [])

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,es,de,it,pt,nl,ru,zh-CN,ja,ar",
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element",
      )

      // Wait for the select to be ready
      const checkReady = setInterval(() => {
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (selectElement) {
          setIsReady(true)
          clearInterval(checkReady)

          // Get current language from the select
          const currentValue = selectElement.value
          if (currentValue) {
            setCurrentLang(currentValue)
          }
        }
      }, 100)

      // Timeout after 5 seconds
      setTimeout(() => clearInterval(checkReady), 5000)
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }

    // Get language from cookie if exists
    const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/)
    if (match && match[1]) {
      setCurrentLang(match[1])
    }
  }, [])

  const handleLanguageChange = (langCode: string) => {
    if (langCode === currentLang) return

    if (langCode === "fr") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";"
      // Also clear on parent domain for subdomains
      const parts = window.location.hostname.split(".")
      if (parts.length > 2) {
        const parentDomain = parts.slice(-2).join(".")
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + parentDomain + ";"
      }
      setCurrentLang("fr")
      window.location.reload()
    } else {
      if (!triggerTranslation(langCode)) {
        // If select not ready, set cookie and reload
        document.cookie = `googtrans=/fr/${langCode}; path=/;`
        document.cookie = `googtrans=/fr/${langCode}; path=/; domain=${window.location.hostname};`
        // Also set on parent domain for subdomains
        const parts = window.location.hostname.split(".")
        if (parts.length > 2) {
          const parentDomain = parts.slice(-2).join(".")
          document.cookie = `googtrans=/fr/${langCode}; path=/; domain=.${parentDomain};`
        }
        window.location.reload()
      }
    }
  }

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0]

  return (
    <>
      <div id="google_translate_element" className="fixed opacity-0 pointer-events-none -z-50 top-0 left-0" />

      {/* Custom dropdown */}
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

      <style jsx global>{`
        .goog-te-banner-frame,
        .skiptranslate,
        #goog-gt-tt,
        .goog-te-balloon-frame,
        .goog-te-menu-frame,
        .goog-te-gadget,
        .goog-te-spinner-pos,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-te-ftab-float {
          display: none !important;
          visibility: hidden !important;
        }
        body {
          top: 0 !important;
          position: static !important;
        }
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
        #google_translate_element {
          height: 0 !important;
          overflow: hidden !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd {
          display: none !important;
        }
      `}</style>
    </>
  )
}
