"use client"

import { useState, useEffect, useCallback, useRef } from "react"
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

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isOpen, setIsOpen] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const detectCurrentLanguage = useCallback(() => {
    // First try to read from the Google Translate combo
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (combo && combo.value) {
      return combo.value
    }

    // Then check the cookie
    const match = document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/)
    if (match && match[1]) {
      return match[1]
    }

    // Check if page has been translated
    const html = document.documentElement
    if (html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")) {
      // Try to get from combo again after a small delay
      if (combo && combo.value) {
        return combo.value
      }
    }

    return "fr"
  }, [])

  const waitForGoogleTranslate = useCallback((): Promise<HTMLSelectElement | null> => {
    return new Promise((resolve) => {
      let attempts = 0
      const maxAttempts = 50 // 10 seconds max

      const check = () => {
        attempts++
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement

        // Check if combo exists AND has options loaded
        if (combo && combo.options && combo.options.length > 1) {
          resolve(combo)
          return
        }

        if (attempts < maxAttempts) {
          setTimeout(check, 200)
        } else {
          resolve(null)
        }
      }

      check()
    })
  }, [])

  useEffect(() => {
    setIsClient(true)

    const init = async () => {
      // Detect initial language
      setCurrentLang(detectCurrentLanguage())

      // Wait for Google Translate to be ready
      const combo = await waitForGoogleTranslate()
      if (combo) {
        setIsReady(true)
        setCurrentLang(combo.value || "fr")

        // Monitor for external changes to the combo
        const observer = new MutationObserver(() => {
          const newLang = detectCurrentLanguage()
          setCurrentLang(newLang || "fr")
        })

        observer.observe(combo, { attributes: true, attributeFilter: ["value"] })

        return () => observer.disconnect()
      }
    }

    init()

    // Periodic check for language changes
    checkIntervalRef.current = setInterval(() => {
      const detected = detectCurrentLanguage()
      setCurrentLang((prev) => (detected !== prev ? detected : prev))
    }, 2000)

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
    }
  }, [detectCurrentLanguage, waitForGoogleTranslate])

  const handleChangeLanguage = useCallback(
    async (langCode: string) => {
      if (langCode === currentLang || isChanging) return

      setIsChanging(true)
      setIsOpen(false)

      try {
        // If reverting to French (original), restore original page
        if (langCode === "fr") {
          // Find and click the "Show original" option or reset
          const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
          if (combo) {
            // Setting to empty string restores original
            combo.value = ""
            combo.dispatchEvent(new Event("change", { bubbles: true }))
          }

          // Clear cookies
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`

          setCurrentLang("fr")
          setIsChanging(false)

          // If the page doesn't revert, reload
          setTimeout(() => {
            const html = document.documentElement
            if (html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")) {
              window.location.reload()
            }
          }, 1000)

          return
        }

        // For other languages, use the Google Translate combo
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement

        if (combo) {
          // Set the value and trigger change event
          combo.value = langCode
          combo.dispatchEvent(new Event("change", { bubbles: true }))

          // Update local state
          setCurrentLang(langCode)

          // Wait a bit then check if translation was applied
          setTimeout(() => {
            const html = document.documentElement
            const isTranslated = html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")

            if (!isTranslated) {
              // Fallback: set cookie and reload
              const cookieValue = `/fr/${langCode}`
              document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`
              document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}; max-age=31536000`
              window.location.reload()
            }

            setIsChanging(false)
          }, 1500)
        } else {
          // Combo not found, use cookie method and reload
          const cookieValue = `/fr/${langCode}`
          document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`
          document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}; max-age=31536000`
          window.location.reload()
        }
      } catch (error) {
        console.error("[v0] Translation error:", error)
        setIsChanging(false)
      }
    },
    [currentLang, isChanging],
  )

  const getCurrentLanguageData = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0]
  }

  if (!isClient) {
    return <div className="h-10 w-32 bg-gray-100 rounded-lg animate-pulse" />
  }

  const currentLanguageData = getCurrentLanguageData()

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={isChanging}
          className="h-10 px-3 text-sm font-medium border-2 border-primary/30 bg-white hover:border-primary hover:bg-primary/5 transition-all duration-200 shadow-sm rounded-lg"
          aria-label={`Langue actuelle: ${currentLanguageData.name}. Cliquez pour changer de langue.`}
        >
          {isChanging ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin text-primary" />
          ) : (
            <Globe className="h-4 w-4 mr-2 text-primary" />
          )}
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="text-lg leading-none">{currentLanguageData.flag}</span>
            <span className="font-semibold">{currentLanguageData.nativeName}</span>
          </span>
          <span className="sm:hidden text-lg">{currentLanguageData.flag}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border-2 border-gray-200 shadow-xl rounded-xl p-1.5 z-[9999]"
        sideOffset={8}
      >
        <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-1">
          Choisir une langue
        </div>

        {languages.map((lang) => {
          const isSelected = currentLang === lang.code
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              disabled={isChanging}
              className={`
                cursor-pointer py-3 px-3 rounded-lg my-0.5 text-sm font-medium transition-all duration-150
                flex items-center
                ${isSelected ? "bg-primary/10 text-primary border border-primary/20" : "hover:bg-gray-100 text-gray-700"}
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
