"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function TelechargerClientPage() {
  const router = useRouter()

  useEffect(() => {
    // Déclencher le téléchargement du PDF automatiquement
    const link = document.createElement("a")
    link.href = "/guides/bibliotheque-prompts-rh.pdf"
    link.download = "Bibliotheque-Prompts-RH-Prompt101.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Rediriger vers la page d'accueil après une courte pause
    const timeout = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <Loader2 size={48} className="animate-spin text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Téléchargement en cours...</h1>
        <p className="text-gray-600 mb-8">
          Votre téléchargement devrait commencer automatiquement. Si ce n'est pas le cas,
          <a
            href="/guides/bibliotheque-prompts-rh.pdf"
            download
            className="text-blue-600 hover:text-blue-800 font-medium mx-1"
          >
            cliquez ici
          </a>
          pour télécharger manuellement.
        </p>
        <p className="text-sm text-gray-500">Vous serez redirigé vers la page d'accueil dans quelques secondes...</p>
      </div>
    </div>
  )
}
