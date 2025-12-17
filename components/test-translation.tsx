"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function TestTranslation() {
  const [currentCookie, setCurrentCookie] = useState<string>("")
  const [currentLang, setCurrentLang] = useState<string>("fr")

  useEffect(() => {
    const cookies = document.cookie.split(";")
    const googtransCookie = cookies.find((c) => c.trim().startsWith("googtrans="))
    if (googtransCookie) {
      const value = googtransCookie.split("=")[1]
      setCurrentCookie(value)

      // Extraire la langue du cookie (format: /fr/en)
      const parts = value.split("/")
      if (parts.length === 3) {
        setCurrentLang(parts[2] || "fr")
      }
    }
  }, [])

  const testLanguage = (langCode: string, langName: string) => {
    const cookieValue = langCode === "fr" ? "/fr/fr" : `/fr/${langCode}`
    const domain = window.location.hostname

    document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}; max-age=31536000`

    // Recharger immédiatement
    window.location.reload()
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Test de Traduction
          <CheckCircle className="h-5 w-5 text-green-500" />
        </CardTitle>
        <CardDescription>Testez le changement de langue avec plusieurs langues</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Langue actuelle:</span>
            <Badge variant="default" className="text-sm">
              {currentLang.toUpperCase()}
            </Badge>
          </div>

          {currentCookie && (
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cookie Google Translate:</span>
              <Badge variant="outline" className="font-mono text-xs">
                {currentCookie || "(aucun)"}
              </Badge>
            </div>
          )}
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium mb-2">Texte de test:</p>
          <p className="text-sm">
            Bonjour ! Ceci est un texte de test pour vérifier que la traduction fonctionne correctement. Ce texte
            devrait être traduit dans la langue sélectionnée.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium mb-3">Testez différentes langues:</p>
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={() => testLanguage("fr", "Français")} variant="outline" size="sm">
              🇫🇷 Français
            </Button>
            <Button onClick={() => testLanguage("en", "English")} variant="outline" size="sm">
              🇬🇧 English
            </Button>
            <Button onClick={() => testLanguage("es", "Español")} variant="outline" size="sm">
              🇪🇸 Español
            </Button>
            <Button onClick={() => testLanguage("de", "Deutsch")} variant="outline" size="sm">
              🇩🇪 Deutsch
            </Button>
            <Button onClick={() => testLanguage("it", "Italiano")} variant="outline" size="sm">
              🇮🇹 Italiano
            </Button>
            <Button onClick={() => testLanguage("pt", "Português")} variant="outline" size="sm">
              🇵🇹 Português
            </Button>
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-2 bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Instructions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cliquez sur une langue pour tester la traduction</li>
            <li>La page se rechargera automatiquement pour appliquer la traduction</li>
            <li>Vous pouvez aussi utiliser le sélecteur de langue dans la navigation</li>
            <li>Le cookie Google Translate est enregistré pour 1 an</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
