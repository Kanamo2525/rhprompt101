import { TestTranslation } from "@/components/test-translation"

export const metadata = {
  title: "Test de Traduction - RH.Prompt101.fr",
  description: "Page de test pour vérifier le bon fonctionnement de Google Translate",
}

export default function TestTranslationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Test de la Fonctionnalité de Traduction</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cette page permet de vérifier que Google Translate fonctionne correctement et que le changement de langue
            s'effectue sans erreur.
          </p>
        </div>

        <TestTranslation />

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contenu de Test Multilingue</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Ressources Humaines</h3>
              <p className="text-gray-700 leading-relaxed">
                Les ressources humaines sont un élément crucial de toute organisation. Elles englobent la gestion des
                talents, le recrutement, la formation et le développement des employés.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Intelligence Artificielle</h3>
              <p className="text-gray-700 leading-relaxed">
                L'intelligence artificielle révolutionne le monde du travail. Elle permet d'automatiser les tâches
                répétitives et d'améliorer la prise de décision dans les entreprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
