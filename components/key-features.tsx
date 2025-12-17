import Link from "next/link"
import { ArrowRight, BookOpen, BarChart2, BookMarked } from "lucide-react"

export function KeyFeatures() {
  return (
    <div className="bg-white py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">RESSOURCES STRATÉGIQUES</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Trois piliers essentiels pour votre transformation RH
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-5 rounded-lg shadow-lg border border-gray-100">
              <div className="flex justify-center items-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Catalogue de Prompts RH</h3>
              <p className="mt-2 text-gray-500">
                Une bibliothèque structurée de prompts hautement optimisés pour chaque domaine RH, prêts à l'emploi et
                continuellement enrichis par notre communauté d'experts.
              </p>
              <Link
                href="/catalogue"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Parcourir le catalogue
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-5 rounded-lg shadow-lg border border-gray-100">
              <div className="flex justify-center items-center w-12 h-12 bg-indigo-100 rounded-md mb-4">
                <BarChart2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Matrice d'opportunités</h3>
              <p className="mt-2 text-gray-500">
                Un tableau analytique croisant cas d'usage, techniques avancées et types d'opportunités pour construire
                votre stratégie d'implémentation de l'IA générative.
              </p>
              <Link
                href="/matrice"
                className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Explorer la matrice
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-5 rounded-lg shadow-lg border border-gray-100">
              <div className="flex justify-center items-center w-12 h-12 bg-purple-100 rounded-md mb-4">
                <BookMarked className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Guide IA pour RH</h3>
              <p className="mt-2 text-gray-500">
                Un ouvrage stratégique complet détaillant méthodologies, cas d'usage et trajectoires d'implémentation
                pour transformer votre fonction RH par l'IA générative.
              </p>
              <Link
                href="/guide"
                className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800"
              >
                Télécharger le guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
