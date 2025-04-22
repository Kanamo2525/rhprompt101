import Link from "next/link"
import { Download } from "lucide-react"
import Image from "next/image"

export function GuidePreview() {
  return (
    <section id="guide" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Guide de l'IA pour les RH</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Un ouvrage de référence pour les leaders RH souhaitant intégrer l'IA générative dans leur stratégie de
              transformation. Une méthodologie structurée pour maximiser votre impact organisationnel.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                <div className="text-3xl font-bold text-blue-600">280</div>
                <div className="mt-2 text-sm font-medium text-gray-500">Pages</div>
              </div>
              <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                <div className="text-3xl font-bold text-blue-600">12</div>
                <div className="mt-2 text-sm font-medium text-gray-500">Chapitres stratégiques</div>
              </div>
              <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                <div className="text-3xl font-bold text-blue-600">26</div>
                <div className="mt-2 text-sm font-medium text-gray-500">Cas d'usage détaillés</div>
              </div>
              <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                <div className="text-3xl font-bold text-blue-600">11</div>
                <div className="mt-2 text-sm font-medium text-gray-500">Techniques de prompting</div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/guides/bibliotheque-prompts-rh.pdf"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                download="Bibliotheque-Prompts-RH-Prompt101.pdf"
              >
                Télécharger gratuitement
                <Download className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative">
            <div className="relative lg:pl-10">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-lg relative bg-white p-4 transform -rotate-1">
                <Image
                  src="/placeholder.svg?height=520&width=400"
                  width={400}
                  height={520}
                  alt="Couverture du guide"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">L'Art du Prompting pour les RH</h3>
                    <p className="text-gray-300 text-sm mt-1">Guide stratégique 2025</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-blue-600 rounded-full py-2 px-4 text-white text-xs font-bold shadow-lg transform rotate-12">
                  Édition 2025
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-80 h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <h3 className="text-2xl font-bold text-gray-900">Table des matières</h3>
          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="font-semibold text-blue-700">PARTIE 1: FONDAMENTAUX ET ÉTAT DE L'ART</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">•</span>
                  <span className="ml-1">Comprendre l'IA générative pour les RH</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">•</span>
                  <span className="ml-1">Le prompting, un nouveau langage à maîtriser</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">PARTIE 2: LA MATRICE D'OPPORTUNITÉ</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                  <span className="ml-1">Cartographie des opportunités RH</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                  <span className="ml-1">Les quatre quadrants stratégiques</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700">PARTIE 3: TECHNIQUES DE PROMPTING</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">•</span>
                  <span className="ml-1">Les techniques fondamentales</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">•</span>
                  <span className="ml-1">Les techniques avancées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
