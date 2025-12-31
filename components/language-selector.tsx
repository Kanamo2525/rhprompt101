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

function cleanupGoogleTranslate() {
  // 1. Remove all Google Translate iframes
  const iframes = document.querySelectorAll(
    'iframe[src*="translate.google"], iframe.goog-te-menu-frame, iframe.goog-te-banner-frame',
  )
  iframes.forEach((iframe) => iframe.remove())

  // 2. Remove Google Translate elements
  const gtElements = document.querySelectorAll(
    "#google_translate_element, .goog-te-gadget, .goog-te-banner-frame, .skiptranslate",
  )
  gtElements.forEach((el) => {
    if (el.id === "google_translate_element") {
      el.innerHTML = "" // Clear but keep the container
    }
  })

  // 3. Remove translated classes from HTML
  const html = document.documentElement
  html.classList.remove("translated-ltr", "translated-rtl")
  html.removeAttribute("lang")

  // 4. Reset body styles that Google Translate may have added
  document.body.style.removeProperty("top")
  document.body.style.removeProperty("position")

  // 5. Remove any Google Translate script tags to force reload
  const scripts = document.querySelectorAll('script[src*="translate.google"]')
  scripts.forEach((script) => script.remove())

  // 6. Clear Google Translate global variables
  if (typeof window !== "undefined") {
    // @ts-ignore
    delete window.google?.translate
    // @ts-ignore
    delete window.googleTranslateElementInit
  }
}

function clearAllGoogleTranslateCookies() {
  const hostname = window.location.hostname
  const rootDomain = hostname.split(".").slice(-2).join(".")

  const domains = [
    "",
    hostname,
    `.${hostname}`,
    hostname.replace(/^www\./, ""),
    `.${hostname.replace(/^www\./, "")}`,
    rootDomain,
    `.${rootDomain}`,
  ]

  const paths = ["/", "", "/fr", "/en", "/es", "/de", "/it", "/pt", "/nl", "/ru", "/zh-CN", "/ja", "/ar"]
  const cookieNames = ["googtrans", "googtrans-b"]

  cookieNames.forEach((name) => {
    domains.forEach((domain) => {
      paths.forEach((path) => {
        const domainPart = domain ? `; domain=${domain}` : ""
        const pathPart = `; path=${path || "/"}`
        // Set to expired date
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${pathPart}${domainPart}`
        // Also try with secure flag
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${pathPart}${domainPart}; secure`
      })
    })
  })

  // Also try localStorage and sessionStorage cleanup
  try {
    const keysToRemove: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (key.includes("google") || key.includes("translate"))) {
        keysToRemove.push(key)
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key))

    const sessionKeysToRemove: string[] = []
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i)
      if (key && (key.includes("google") || key.includes("translate"))) {
        sessionKeysToRemove.push(key)
      }
    }
    sessionKeysToRemove.forEach((key) => sessionStorage.removeItem(key))
  } catch (e) {
    // Ignore storage access errors
  }
}

function setGoogleTranslateCookie(langCode: string) {
  // First clean everything
  clearAllGoogleTranslateCookies()

  if (langCode === "fr") {
    return // Just clear cookies for French (original)
  }

  const cookieValue = `/fr/${langCode}`
  const maxAge = 31536000 // 1 year
  const hostname = window.location.hostname
  const rootDomain = hostname.split(".").slice(-2).join(".")

  const domains = ["", hostname, `.${hostname}`, rootDomain, `.${rootDomain}`]

  // Set cookie on all possible domains
  domains.forEach((domain) => {
    const domainPart = domain ? `; domain=${domain}` : ""
    document.cookie = `googtrans=${cookieValue}; path=/; max-age=${maxAge}${domainPart}; SameSite=Lax`
  })
}

function getLanguageFromCookie(): string {
  const match = document.cookie.match(/googtrans=\/fr\/([^;]+)/)
  return match ? match[1] : "fr"
}

function detectCurrentLanguage(): string {
  // 1. Check if page is translated via class
  const html = document.documentElement
  const isTranslated = html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")

  // 2. Check combo value
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement
  if (combo && combo.value && combo.value !== "fr") {
    return combo.value
  }

  // 3. Check cookie
  const cookieLang = getLanguageFromCookie()
  if (isTranslated && cookieLang !== "fr") {
    return cookieLang
  }

  // 4. If not translated, return French
  if (!isTranslated) {
    return "fr"
  }

  return cookieLang
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isOpen, setIsOpen] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Detect initial language
    const detected = detectCurrentLanguage()
    setCurrentLang(detected)

    // Mark as ready after a short delay
    const readyTimeout = setTimeout(() => setIsReady(true), 1500)

    // Periodic sync
    const interval = setInterval(() => {
      const detected = detectCurrentLanguage()
      setCurrentLang((prev) => (detected !== prev ? detected : prev))
    }, 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(readyTimeout)
    }
  }, [])

  const handleChangeLanguage = useCallback(
    (langCode: string) => {
      if (langCode === currentLang || isChanging) return

      setIsChanging(true)
      setIsOpen(false)

      // Step 1: Clean up all Google Translate state
      cleanupGoogleTranslate()

      // Step 2: Clear all cookies
      clearAllGoogleTranslateCookies()

      // Step 3: Set new cookie if not French
      if (langCode !== "fr") {
        setGoogleTranslateCookie(langCode)
      }

      // Step 4: Force a hard reload without cache
      // Using location.href assignment instead of reload() for cleaner state
      setTimeout(() => {
        // Add a cache-busting parameter to ensure fresh load
        const url = new URL(window.location.href)
        url.searchParams.set("_gtlang", langCode)
        url.searchParams.set("_t", Date.now().toString())
        window.location.href = url.toString()
      }, 150)
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
