import Link from "next/link"
import { ExternalLink } from "lucide-react"
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
                <div className="text-3xl font-bold text-blue-600">302</div>
                <div className="mt-2 text-sm font-medium text-gray-500">Pages</div>
              </div>
              <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                <div className="text-3xl font-bold text-blue-600">19</div>
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
                href="https://prompt101.aflip.in/guideIARH.html"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulter le guide
                <ExternalLink className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative">
            <div className="relative lg:pl-10">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-lg relative bg-white p-1 transform -rotate-1">
                <Image
                  src="/images/guide-cover-ia-rh.jpeg"
                  width={400}
                  height={520}
                  alt="Couverture du livre: Le Guide de l'IA Générative pour les RH par Kristy Anamoutou"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-4 right-4 w-80 h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <h3 className="text-2xl font-bold text-gray-900">Table des matières (Aperçu)</h3>
          <div className="mt-6 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="font-semibold text-blue-700">PARTIE 1: FONDAMENTAUX ET ÉTAT DE L'ART</h4>
              <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                <li>Chap. 1: Comprendre l'IA générative</li>
                <li>Chap. 2: La fondation data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">PARTIE 2: LA MATRICE D'OPPORTUNITÉ</h4>
              <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                <li>Chap. 3: Cartographie des opportunités</li>
                <li>Chap. 4-7: Automatisation, Assistance, Augmentation, Avant-garde</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700">PARTIE 3: TECHNIQUES DE PROMPTING</h4>
              <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                <li>Chap. 8: Techniques fondamentales</li>
                <li>Chap. 9: Techniques avancées</li>
                <li>Chap. 10: Techniques spécialisées</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">PARTIE 4: APPLICATIONS PRATIQUES</h4>
              <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                <li>Chap. 11-14: Recrutement, Formation, Gestion des talents, Support RH</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700">PARTIE 5: MISE EN ŒUVRE ET GOUVERNANCE</h4>
              <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                <li>Chap. 15: Stratégie d'adoption</li>
                <li>Chap. 16: Éthique et conformité</li>
                <li>Chap. 17-19: Gestion du changement, Ressources, Agents IA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700">CONCLUSION ET RESSOURCES</h4>
              <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                <li>Perspectives d'avenir</li>
                <li>Bibliothèque de prompts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
