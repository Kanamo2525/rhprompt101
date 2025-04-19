import Link from "next/link"
import { ArrowRight, Compass, Grid, Eye, MessageCircle } from "lucide-react"

export function CataloguePreview() {
  const categories = [
    {
      id: "recrutement",
      title: "Recrutement & Acquisition",
      icon: <Compass className="h-5 w-5" />,
      count: 5,
      prompts: [
        "Rédaction d'offres d'emploi percutantes",
        "Questionnaire d'entretien structuré",
        "Stratégie de sourcing multi-canal",
      ],
      color: "bg-blue-50 text-blue-700",
    },
    {
      id: "formation",
      title: "Formation & Développement",
      icon: <Grid className="h-5 w-5" />,
      count: 4,
      prompts: [
        "Création de parcours d'apprentissage personnalisés",
        "Génération de contenus pédagogiques innovants",
        "Système d'évaluation des compétences",
      ],
      color: "bg-purple-50 text-purple-700",
    },
    {
      id: "talents",
      title: "Gestion des Talents",
      icon: <Eye className="h-5 w-5" />,
      count: 4,
      prompts: [
        "Détection des hauts potentiels",
        "Plans de développement individualisés",
        "Stratégies de rétention ciblées",
      ],
      color: "bg-green-50 text-green-700",
    },
    {
      id: "support",
      title: "Support RH & Relations Collaborateurs",
      icon: <MessageCircle className="h-5 w-5" />,
      count: 4,
      prompts: [
        "Chatbots RH pour questions fréquentes",
        "Documentation administrative automatisée",
        "Analyse de climat social",
      ],
      color: "bg-amber-50 text-amber-700",
    },
  ]

  return (
    <section id="catalogue" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Catalogue de Prompts RH</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explorez notre bibliothèque de prompts optimisés, organisés par domaines fonctionnels, pour transformer vos
            pratiques RH.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </p>
                  <div className="block mt-4">
                    <p className="text-sm font-medium text-gray-500">{category.count} prompts disponibles</p>
                    <ul className="mt-2 space-y-2">
                      {category.prompts.map((prompt, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                          <span className="ml-1 text-sm text-gray-700">{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/catalogue/${category.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Explorer cette catégorie
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/catalogue"
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Voir toutes les catégories
            <ArrowRight className="ml-3 -mr-1 h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </div>
    </section>
  )
}
