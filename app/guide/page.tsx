import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight, BookOpen, BarChart2, Compass, Users, Brain, CheckCircle, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Guide de l'IA pour les RH
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Un ouvrage stratégique pour transformer votre fonction RH par l'IA générative
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">L'Art du Prompting pour les RH</h2>
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
                    <div className="text-3xl font-bold text-blue-600">18</div>
                    <div className="mt-2 text-sm font-medium text-gray-500">Chapitres stratégiques</div>
                  </div>
                  <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">5</div>
                    <div className="mt-2 text-sm font-medium text-gray-500">Parties principales</div>
                  </div>
                  <div className="bg-white shadow rounded-lg px-5 py-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">11</div>
                    <div className="mt-2 text-sm font-medium text-gray-500">Techniques de prompting</div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="https://prompt101.aflip.in/guideIARH.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Consulter le guide
                    <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.thebookedition.com/fr/l-ia-generative-pour-les-rh-p-419084.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Acheter la version papier
                    <ShoppingCart className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 relative">
                <div className="relative lg:pl-10">
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-lg relative bg-white p-4 transform -rotate-1">
                    <Image
                      src="/images/guide-cover-ia-rh.jpeg"
                      width={400}
                      height={520}
                      alt="Couverture du guide 'Le Guide de l'IA Générative pour les RH' par Kristy Anamoutou, montrant des astronautes marchant dans un paysage futuriste."
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 w-80 h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg transform rotate-3 -z-10"></div>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-bold text-gray-900">Structure du guide</h3>
              <div className="mt-6 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-blue-700">PARTIE 1: FONDAMENTAUX ET ÉTAT DE L'ART</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-blue-500">•</span>
                      <span className="ml-1">Chapitre 1: Comprendre l'IA générative pour les RH</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-blue-500">•</span>
                      <span className="ml-1">Chapitre 2: La fondation data – Prérequis stratégique</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700">PARTIE 2: LA MATRICE D'OPPORTUNITÉ</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                      <span className="ml-1">Chapitre 3: Cartographie des opportunités RH</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                      <span className="ml-1">Chapitre 4: Automatisation - Transcender les processus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                      <span className="ml-1">Chapitre 5: Assistance - Améliorer l'efficacité</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                      <span className="ml-1">Chapitre 6: Augmentation - Cocréer avec l'IA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                      <span className="ml-1">Chapitre 7: Avant-garde - Créer de nouvelles solutions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">PARTIE 3: TECHNIQUES DE PROMPTING</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-purple-500">•</span>
                      <span className="ml-1">Chapitre 8: Les techniques fondamentales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-purple-500">•</span>
                      <span className="ml-1">Chapitre 9: Les techniques avancées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-purple-500">•</span>
                      <span className="ml-1">Chapitre 10: Les techniques spécialisées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-purple-500">•</span>
                      <span className="ml-1">Considérations éthiques et gouvernance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">PARTIE 4: APPLICATIONS PRATIQUES</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">•</span>
                      <span className="ml-1">Chapitre 11: Recrutement et acquisition de talents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">•</span>
                      <span className="ml-1">Chapitre 12: Formation et développement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">•</span>
                      <span className="ml-1">Chapitre 13: Gestion des talents et mobilité</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">•</span>
                      <span className="ml-1">Chapitre 14: Support RH et administration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700">PARTIE 5: MISE EN ŒUVRE ET GOUVERNANCE</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-amber-500">•</span>
                      <span className="ml-1">Chapitre 15: Stratégie d'adoption de l'IA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-amber-500">•</span>
                      <span className="ml-1">Chapitre 16: Éthique et conformité</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-amber-500">•</span>
                      <span className="ml-1">Chapitre 17: Gestion du changement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-amber-500">•</span>
                      <span className="ml-1">Chapitre 18: Ressources et boîte à outils</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-amber-500">•</span>
                      <span className="ml-1">Chapitre 19: Agents IA et IA Agentique</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">CONCLUSION ET RESSOURCES</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">•</span>
                      <span className="ml-1">Conclusion et perspectives d'avenir</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">•</span>
                      <span className="ml-1">Tendances émergentes de l'IA en RH</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">•</span>
                      <span className="ml-1">Bibliothèque de prompts RH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Chapitres clés</h3>
                <p className="mt-2 text-gray-500">Découvrez les chapitres essentiels du guide</p>
              </div>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">
                      La matrice d'opportunité de l'IA générative en RH
                    </h4>
                  </div>
                  <p className="text-gray-500">
                    Découvrez comment positionner vos initiatives RH dans les quatre quadrants stratégiques :
                    Automatisation, Assistance, Augmentation et Avant-garde. Une approche structurée pour identifier les
                    cas d'usage à fort potentiel.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <BarChart2 className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Les techniques de prompting pour professionnels RH
                    </h4>
                  </div>
                  <p className="text-gray-500">
                    Maîtrisez 11 techniques de prompting essentielles, des fondamentales (Zero-Shot, Few-Shot) aux
                    avancées (Chain-of-Thought, RCT) et spécialisées (Generated Knowledge, Multi-Prompting) pour
                    optimiser vos résultats.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Compass className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Applications pratiques par domaine RH</h4>
                  </div>
                  <p className="text-gray-500">
                    Des cas d'usage concrets et des prompts optimisés pour chaque domaine RH : recrutement, formation,
                    gestion des talents et support administratif. Inclut des cas pratiques et tableaux de bord.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Éthique et conformité</h4>
                  </div>
                  <p className="text-gray-500">
                    Aborde les enjeux juridiques (RGPD, AI Act), la protection des données RH, la gouvernance et la
                    transparence envers les collaborateurs pour une utilisation responsable de l'IA en RH.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Gestion du changement</h4>
                  </div>
                  <p className="text-gray-500">
                    Stratégies pour préparer les équipes RH à l'IA générative, développer les compétences en prompting
                    et accompagner l'évolution du métier RH à l'ère de l'intelligence artificielle.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Ressources et boîte à outils</h4>
                  </div>
                  <p className="text-gray-500">
                    Une bibliothèque de prompts RH prêts à l'emploi, une grille d'évaluation des outils d'IA, un
                    calendrier d'implémentation type et une liste de vérification avant déploiement.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center">
                  <Link
                    href="https://prompt101.aflip.in/guideIARH.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Consulter le guide
                    <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.thebookedition.com/fr/l-ia-generative-pour-les-rh-p-419084.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 sm:mt-0 sm:ml-4 inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Acheter la version papier
                    <ShoppingCart className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
