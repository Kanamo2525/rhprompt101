import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
// Ajouter l'import pour MessageCircle
import { ArrowRight, Compass, Grid, Eye, Users, BookOpen, Brain, HeartPulse, MessageCircle } from "lucide-react"

export default function CataloguePage() {
  const categories = [
    {
      id: "recrutement",
      title: "Recrutement & Acquisition",
      icon: <Compass className="h-5 w-5" />,
      count: 9,
      description:
        "Optimisez votre processus de recrutement avec des prompts spécialisés pour attirer et sélectionner les meilleurs talents.",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "formation",
      title: "Formation & Développement",
      icon: <Grid className="h-5 w-5" />,
      count: 8,
      description:
        "Créez des parcours d'apprentissage personnalisés et des contenus pédagogiques innovants pour développer vos équipes.",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      id: "talents",
      title: "Gestion des Talents",
      icon: <Eye className="h-5 w-5" />,
      count: 8,
      description:
        "Identifiez et développez vos hauts potentiels avec des stratégies de rétention et des plans de carrière sur mesure.",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      id: "onboarding",
      title: "Onboarding & Intégration",
      icon: <Users className="h-5 w-5" />,
      count: 8,
      description:
        "Facilitez l'intégration des nouveaux collaborateurs avec des programmes d'accueil personnalisés et efficaces.",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      id: "administration",
      title: "Administration RH",
      icon: <BookOpen className="h-5 w-5" />,
      count: 9,
      description: "Automatisez vos tâches administratives et optimisez vos processus RH pour gagner en efficacité.",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      id: "engagement",
      title: "Engagement & Culture",
      icon: <Brain className="h-5 w-5" />,
      count: 0,
      description:
        "Renforcez votre culture d'entreprise et l'engagement de vos collaborateurs avec des stratégies innovantes.",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      id: "bien-etre",
      title: "Bien-être & QVT",
      icon: <HeartPulse className="h-5 w-5" />,
      count: 6,
      description:
        "Améliorez la qualité de vie au travail et le bien-être de vos collaborateurs avec des approches personnalisées.",
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      id: "support",
      title: "Support RH & Relations Collaborateurs",
      icon: <MessageCircle className="h-5 w-5" />,
      count: 8,
      description:
        "Optimisez la communication interne et le support quotidien aux collaborateurs avec des outils d'IA adaptés.",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Catalogue de Prompts RH
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Explorez notre bibliothèque complète de prompts optimisés pour transformer votre fonction RH
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                      >
                        {category.icon}
                        <span className="ml-2">{category.title}</span>
                      </div>
                      <div className="block mt-4">
                        <p className="text-sm font-medium text-gray-500">{category.count} prompts disponibles</p>
                        <p className="mt-3 text-base text-gray-500">{category.description}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/catalogue/${category.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Explorer cette catégorie
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
