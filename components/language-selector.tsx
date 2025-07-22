"use client"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/contexts/translation-context"

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export function LanguageSelector() {
  const { currentLanguage, setLanguage, isTranslating } = useTranslation()

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 min-w-[120px] bg-transparent"
          disabled={isTranslating}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLang.flag} {currentLang.name}
          </span>
          <span className="sm:hidden">{currentLang.flag}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={`flex items-center gap-2 ${currentLanguage === language.code ? "bg-blue-50 text-blue-700" : ""}`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
            {currentLanguage === language.code && <span className="ml-auto text-blue-600">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
