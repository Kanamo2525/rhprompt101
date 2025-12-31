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

function clearAllGoogleTranslateCookies() {
  const domains = [
    "",
    window.location.hostname,
    `.${window.location.hostname}`,
    window.location.hostname.replace(/^www\./, ""),
    `.${window.location.hostname.replace(/^www\./, "")}`,
  ]

  domains.forEach((domain) => {
    const domainPart = domain ? `; domain=${domain}` : ""
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainPart}`
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${domainPart}`
  })
}

function setGoogleTranslateCookie(langCode: string) {
  const cookieValue = langCode === "fr" ? "" : `/fr/${langCode}`
  const maxAge = langCode === "fr" ? 0 : 31536000

  const domains = ["", window.location.hostname, `.${window.location.hostname}`]

  if (langCode === "fr") {
    clearAllGoogleTranslateCookies()
  } else {
    domains.forEach((domain) => {
      const domainPart = domain ? `; domain=${domain}` : ""
      document.cookie = `googtrans=${cookieValue}; path=/; max-age=${maxAge}${domainPart}`
    })
  }
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isOpen, setIsOpen] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const lastAttemptRef = useRef<string | null>(null)

  const detectCurrentLanguage = useCallback(() => {
    // First check the actual Google Translate state via combo
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (combo && combo.value && combo.value !== "") {
      return combo.value
    }

    // Check if page is translated
    const html = document.documentElement
    const isTranslated = html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")

    if (!isTranslated) {
      return "fr"
    }

    // Fallback to cookie
    const match = document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/)
    if (match && match[1]) {
      return match[1]
    }

    return "fr"
  }, [])

  const waitForGoogleTranslate = useCallback((): Promise<HTMLSelectElement | null> => {
    return new Promise((resolve) => {
      let attempts = 0
      const maxAttempts = 100

      const check = () => {
        attempts++
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement

        if (combo && combo.options && combo.options.length > 1) {
          resolve(combo)
          return
        }

        if (attempts < maxAttempts) {
          setTimeout(check, 100)
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
      const detected = detectCurrentLanguage()
      setCurrentLang(detected)

      const combo = await waitForGoogleTranslate()
      if (combo) {
        setIsReady(true)
        const comboLang = combo.value || detectCurrentLanguage()
        setCurrentLang(comboLang || "fr")
      }
    }

    init()

    const interval = setInterval(() => {
      const detected = detectCurrentLanguage()
      setCurrentLang((prev) => (detected !== prev ? detected : prev))

      // Check if Google Translate became ready
      if (!isReady) {
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (combo && combo.options && combo.options.length > 1) {
          setIsReady(true)
        }
      }
    }, 500)

    return () => clearInterval(interval)
  }, [detectCurrentLanguage, waitForGoogleTranslate, isReady])

  const handleChangeLanguage = useCallback(
    async (langCode: string) => {
      if (langCode === currentLang || isChanging) return
      if (lastAttemptRef.current === langCode) return

      setIsChanging(true)
      setIsOpen(false)
      lastAttemptRef.current = langCode

      console.log("[v0] Changing language from", currentLang, "to", langCode)

      try {
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement

        // Reverting to French (original language)
        if (langCode === "fr") {
          console.log("[v0] Reverting to original French")
          clearAllGoogleTranslateCookies()

          if (combo) {
            // Try to restore original by selecting empty option
            combo.value = ""
            combo.dispatchEvent(new Event("change", { bubbles: true }))

            // Also try firing input event
            combo.dispatchEvent(new Event("input", { bubbles: true }))
          }

          // Check if translation was removed
          setTimeout(() => {
            const html = document.documentElement
            const stillTranslated =
              html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")

            if (stillTranslated) {
              console.log("[v0] Page still translated, reloading")
              window.location.reload()
            } else {
              console.log("[v0] Successfully reverted to French")
              setCurrentLang("fr")
              setIsChanging(false)
              lastAttemptRef.current = null
            }
          }, 800)

          return
        }

        // Translating to another language
        if (combo && combo.options.length > 1) {
          console.log("[v0] Using combo to translate to", langCode)

          // Check if the target language exists in options
          let optionExists = false
          for (let i = 0; i < combo.options.length; i++) {
            if (combo.options[i].value === langCode) {
              optionExists = true
              break
            }
          }

          if (optionExists) {
            // Set the cookie first
            setGoogleTranslateCookie(langCode)

            // Then change the combo
            combo.value = langCode

            // Fire multiple events to ensure it triggers
            combo.dispatchEvent(new Event("change", { bubbles: true }))

            // Use a small delay and check
            setTimeout(() => {
              const html = document.documentElement
              const isTranslated =
                html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")
              const newLang = detectCurrentLanguage()

              console.log("[v0] After combo change - isTranslated:", isTranslated, "detected:", newLang)

              if (newLang === langCode) {
                console.log("[v0] Successfully changed to", langCode)
                setCurrentLang(langCode)
                setIsChanging(false)
                lastAttemptRef.current = null
              } else {
                // Combo didn't work, force reload with cookie
                console.log("[v0] Combo change failed, reloading with cookie")
                window.location.reload()
              }
            }, 1200)
          } else {
            // Language not in combo, use cookie and reload
            console.log("[v0] Language not in combo options, using cookie reload")
            setGoogleTranslateCookie(langCode)
            window.location.reload()
          }
        } else {
          // Combo not ready, use cookie and reload
          console.log("[v0] Combo not ready, using cookie reload")
          setGoogleTranslateCookie(langCode)
          window.location.reload()
        }
      } catch (error) {
        console.error("[v0] Translation error:", error)
        // Fallback: set cookie and reload
        setGoogleTranslateCookie(langCode)
        window.location.reload()
      }
    },
    [currentLang, isChanging, detectCurrentLanguage],
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
