import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">L'IA au service</span>
            <span className="block text-indigo-200">de la transformation RH</span>
          </h1>
          <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative
            méthodiquement optimisés pour maximiser votre impact stratégique.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/catalogue"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Explorer le catalogue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="/guide"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Télécharger le guide
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
