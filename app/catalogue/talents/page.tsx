"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, Users, FileText, GitBranch, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function TalentsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Gestion des Talents & Mobilité
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour identifier, développer et fidéliser vos talents avec des parcours professionnels
                personnalisés
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour la gestion des talents</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour optimiser l'identification des talents, la
                mobilité interne et le développement de carrière
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="matching-competences"
                title="Matching de compétences"
                description="Identifiez les meilleures correspondances entre les compétences des collaborateurs et les postes ouverts dans votre organisation."
                techniques={["Chain-of-Thought", "Contextual Augmentation"]}
                icon={<Users className="h-6 w-6 text-purple-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Talent Mobility Advisor, spécialiste RH en identification analytique de correspondances compétences/postes tout en préservant strictement la décision finale humaine. »

USER :  
Sur la base des profils collaborateurs anonymisés fournis ci-dessous et du poste ouvert suivant :
- Intitulé du poste : [INTITULÉ POSTE]
- Compétences requises essentielles : [COMPÉTENCES REQUISES]
- Critères secondaires appréciés : [COMPÉTENCES SOUHAITÉES]

Procédure obligatoire :
1. Explique succinctement (≤60 mots) ta stratégie analytique initiale pour identifier les meilleures correspondances (Chain-of-Thought explicite).
2. Établis précisément une sélection analytique des 5 meilleurs candidats potentiels avec justification individuelle claire (≤40 mots par candidat).
3. Fournis une recommandation argumentée finale (≤50 mots) soulignant explicitement les points qui nécessitent validation humaine finale.`}
              />

              <PromptCard
                id="plans-carriere"
                title="Plans de carrière individualisés"
                description="Créez des plans de carrière personnalisés et co-construits pour accompagner le développement professionnel de vos collaborateurs."
                techniques={["Reflexive CoT (RCT)", "Iterative Prompting"]}
                icon={<GitBranch className="h-6 w-6 text-green-600" />}
                opportunityType="Augmentation"
                prompt={`SYSTEM : « Tu es Career Development Consultant, expert en mobilité interne et conception itérative de parcours professionnels individualisés avec une forte dimension humaine. »

USER :  
Crée un plan de carrière personnalisé co-construit spécifiquement pour le collaborateur décrit ci-dessous.

Contexte obligatoire :
- Poste actuel : [POSTE ACTUEL]
- Aspirations professionnelles : [ASPIRATIONS]
- Compétences actuelles : [COMPÉTENCES]
- Axes prioritaires de développement : [AXES DE DÉVELOPPEMENT]

Procédure impérative (Iterative Prompting) :
Étape 1 : Propose 3 scénarios initiaux distincts de parcours professionnels possibles, avec pour chaque scénario :
- Objectifs clairs et réalistes
- Étapes intermédiaires concrètes (formation, expérience, mentoring)
- Horizon temporel recommandé

Étape 2 (après sélection utilisateur) :
- Affine le scénario sélectionné en intégrant précisément un raisonnement réflexif (RCT, ≤60 mots) soulignant comment ce parcours répond spécifiquement aux aspirations individuelles et contraintes contextuelles du collaborateur.
- Indique explicitement quels aspects du parcours nécessitent une validation humaine complémentaire.`}
              />

              <PromptCard
                id="synthese-entretiens"
                title="Synthèse automatisée d'entretiens RH"
                description="Générez des synthèses analytiques standardisées à partir des transcriptions d'entretiens RH pour faciliter le suivi et la prise de décision."
                techniques={["Chain-of-Thought", "Generated Knowledge"]}
                icon={<FileText className="h-6 w-6 text-blue-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es HR Analytics Specialist, expert dans le traitement automatisé des entretiens RH pour produire des synthèses standardisées, fiables, et opérationnelles avec intervention humaine minimale. »

USER :  
Sur la base de la transcription complète d'entretien RH suivante [TRANSCRIPTION ENTRETIEN FOURNIE], génère automatiquement une synthèse analytique standardisée structurée selon ce modèle obligatoire :

- Identification synthétique des points forts observés (3 points maximum)
- Identification précise des axes d'amélioration potentiels (3 points maximum)
- Recommandations concrètes immédiates (formation, accompagnement, mobilité interne)

Procédure obligatoire :
1. Explique très succinctement ta logique analytique initiale de traitement des informations (Chain-of-Thought, ≤50 mots).
2. Utilise explicitement ton savoir métier issu des meilleures pratiques RH actuelles (Generated Knowledge) pour justifier tes recommandations.
3. Vérifie que ta synthèse finale ne contienne aucune donnée sensible ou subjective nécessitant impérativement validation humaine approfondie.`}
              />

              <PromptCard
                id="detection-hauts-potentiels"
                title="Détection des hauts potentiels"
                description="Identifiez objectivement les collaborateurs à haut potentiel dans votre organisation grâce à une analyse multicritère rigoureuse."
                techniques={["Generated Knowledge", "Multi-Prompting"]}
                icon={<Star className="h-6 w-6 text-amber-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Talent Identification Expert en charge de la détection rigoureuse et objective des hauts potentiels dans une grande organisation, en appui à une décision finale strictement humaine. »

USER :  
À partir des données collaborateur anonymisées suivantes [DONNÉES COLLABORATEUR], applique une procédure rigoureuse de détection des talents à haut potentiel :

Procédure Multi-Prompting obligatoire :

Prompt A (« Critères RH avancés ») :
- Génère précisément 5 critères actualisés (Generated Knowledge) permettant une détection fiable et objective des hauts potentiels en 2025.
- Justifie succinctement chaque critère en ≤30 mots.

Prompt B (« Analyse du profil ») :
- Évalue explicitement le collaborateur selon chacun des critères établis précédemment :
  - Indique le niveau d'adéquation (élevé/moyen/faible).
  - Fournis une justification courte et analytique (≤30 mots par critère).

Prompt C (« Synthèse de recommandation ») :
- Établis une synthèse claire et argumentée, identifiant précisément si le profil correspond aux critères d'un haut potentiel.
- Indique explicitement (≤50 mots) quels aspects spécifiques requièrent une validation ou une appréciation humaine complémentaire avant toute décision finale.`}
              />
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Matrice d'opportunités</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Catégorie RH
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Cas d'usage RH
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Type d'opportunité
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Techniques de prompting recommandées
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Justification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={4}>
                        Gestion des talents et mobilité interne
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Matching de compétences</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Contextual Augmentation</li>
                          <li>Chain-of-Thought</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Outil d'aide à la décision pour identifier les meilleures correspondances tout en gardant
                        validation humaine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Plans de carrière</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Augmentation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>RCT</li>
                          <li>Iterative Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Co-création de nouveaux parcours professionnels personnalisés avec forte implication humaine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Synthèse d'entretiens</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Chain-of-Thought</li>
                          <li>Generated Knowledge</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Traitement standardisé d'informations verbales avec minimal contrôle humain
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Détection des hauts potentiels
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Generated Knowledge</li>
                          <li>Multi-Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Outil d'aide à la décision pour identifier les talents, jugement final reste humain
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bénéfices pour la gestion des talents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Objectivité renforcée</h4>
                  <p className="text-gray-700">
                    L'utilisation de l'IA pour l'analyse des compétences et la détection des talents permet de réduire
                    les biais inconscients et d'assurer une évaluation plus objective, tout en laissant la décision
                    finale aux professionnels RH.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Personnalisation à l'échelle</h4>
                  <p className="text-gray-700">
                    Les prompts permettent de créer des plans de carrière véritablement personnalisés pour chaque
                    collaborateur, même dans les grandes organisations, favorisant ainsi l'engagement et la fidélisation
                    des talents.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Efficacité opérationnelle</h4>
                  <p className="text-gray-700">
                    L'automatisation des tâches répétitives comme la synthèse d'entretiens permet aux équipes RH de se
                    concentrer sur les aspects stratégiques de la gestion des talents et d'accélérer les processus de
                    mobilité interne.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Approche éthique et humaine</h4>
                  <p className="text-gray-700">
                    Les prompts sont conçus pour préserver systématiquement le jugement humain dans la prise de décision
                    finale, garantissant ainsi une approche éthique et responsable de la gestion des talents.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Processus de gestion des talents augmenté par l'IA
              </h3>
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-around">
                  <div className="bg-gray-50 px-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Identification des talents</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Utilisation de l'IA pour analyser objectivement les compétences et détecter les hauts potentiels
                    selon des critères actualisés.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Analyse des opportunités</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Matching intelligent entre les profils des collaborateurs et les postes ouverts ou à pourvoir dans
                    l'organisation.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Co-création de parcours</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Élaboration collaborative de plans de carrière personnalisés avec plusieurs scénarios d'évolution
                    possibles.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Suivi et adaptation</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Synthèse automatisée des entretiens et ajustement continu des parcours en fonction de l'évolution
                    des compétences et aspirations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/catalogue"
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Retour au catalogue
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PromptCard({ id, title, description, techniques, icon, opportunityType, prompt }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const opportunityColors = {
    Automatisation: "bg-blue-100 text-blue-800 border-blue-300",
    Assistance: "bg-purple-100 text-purple-800 border-purple-300",
    Augmentation: "bg-green-100 text-green-800 border-green-300",
    "Avant-Garde": "bg-amber-100 text-amber-800 border-amber-300",
  }

  return (
    <div id={id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${opportunityColors[opportunityType]}`}>
            {opportunityType}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Techniques utilisées:</h4>
          <div className="flex flex-wrap gap-2">
            {techniques.map((technique) => (
              <span
                key={technique}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {technique}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-50 rounded-md p-4 mb-4 overflow-auto max-h-64">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">{prompt}</pre>
          </div>
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 p-2 rounded-md bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Copier le prompt"
          >
            {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {copied ? "Copié !" : "Copier le prompt"}
            {copied ? <Check className="ml-2 h-4 w-4" /> : <Copy className="ml-2 h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
