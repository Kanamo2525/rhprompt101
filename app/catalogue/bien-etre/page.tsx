"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, Users, Shield, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function BienEtrePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Bien-être & QVT
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour améliorer la santé, le bien-être et la qualité de vie au travail de vos
                collaborateurs
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour le bien-être au travail</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour co-créer des stratégies innovantes
                d'engagement, de prévention des risques et de fidélisation des talents
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="engagement-collaborateurs"
                title="Engagement des collaborateurs : Stratégies innovantes co-créées"
                description="Développez des stratégies innovantes pour renforcer durablement l'engagement des collaborateurs dans votre organisation."
                techniques={["Multi-Prompting", "Expert Role-Playing", "Generated Knowledge"]}
                icon={<Users className="h-6 w-6 text-green-600" />}
                opportunityType="Augmentation"
                prompt={`SYSTEM : « Tu es Chief Engagement Strategist, expert en santé et bien-être au travail, spécialisé dans la co-création de stratégies innovantes pour renforcer durablement l'engagement des collaborateurs au sein de grandes organisations françaises. »

USER :  
Développe, en plusieurs étapes précises (Multi-Prompting), une stratégie innovante d'engagement collaborateur co-créée en intégrant systématiquement les éléments contextuels suivants :

Contexte obligatoire :
- Secteur d'activité : [SECTEUR]
- Taille de l'organisation : [NOMBRE COLLABORATEURS]
- Problématique spécifique à résoudre : [EX : baisse motivation, turnover élevé, désengagement lié au télétravail]

Procédure impérative :

Prompt A (« Diagnostic approfondi ») :
- En tant qu'expert (Expert Role-Playing), réalise un diagnostic rapide mais précis (≤60 mots) sur les causes potentielles de désengagement spécifiques à l'organisation décrite.

Prompt B (« Axes d'innovation ») :
- Génère précisément 3 axes innovants (Generated Knowledge) pour améliorer significativement l'engagement, en tenant compte des tendances actuelles (2025).
- Justifie chaque axe brièvement (≤30 mots chacun).

Prompt C (« Stratégie opérationnelle ») :
- Développe concrètement la stratégie finale en intégrant explicitement chacun des axes innovants précédemment validés.
- Indique clairement les éléments nécessitant impérativement une validation humaine avant mise en œuvre (≤50 mots).

Cas d'usage typique :
Développement stratégique de l'engagement collaborateurs sur des problématiques complexes (nouveaux modes de travail hybride, culture d'entreprise, réorganisation).`}
              />

              <PromptCard
                id="prevention-risques"
                title="Prévention des risques psychosociaux (RPS)"
                description="Élaborez des plans de prévention des risques psychosociaux rigoureux et adaptés à votre contexte organisationnel."
                techniques={["Chain-of-Thought", "RCT (Reflexive Chain-of-Thought)"]}
                icon={<Shield className="h-6 w-6 text-purple-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Expert Santé & Prévention RPS, spécialisé dans l'accompagnement des grandes organisations françaises pour l'élaboration rigoureuse de plans de prévention des risques psychosociaux. Ta démarche est analytique, prudente et éthique, avec supervision humaine obligatoire sur tous les aspects sensibles. »

USER :  
Sur la base du contexte organisationnel détaillé ci-dessous :

Contexte impératif :
- Secteur : [SECTEUR]
- Situation spécifique ou sensible identifiée : [EX : augmentation des arrêts maladie liés au stress, burnout, difficultés relationnelles accrues]
- Données RH fournies : [DONNÉES ANONYMISÉES : absentéisme, enquêtes internes, signalements internes]

Procédure impérative :

1. Explique succinctement ta méthode analytique initiale pour identifier précisément les principaux facteurs de risque (Chain-of-Thought, ≤60 mots).

2. Propose explicitement un plan opérationnel de prévention structuré (actions immédiates, moyen-terme, long-terme) :
   - Actions concrètes proposées pour chaque horizon temporel
   - Indicateurs précis de suivi d'efficacité

3. Termine par un paragraphe réflexif (RCT, ≤60 mots) précisant clairement quels aspects sensibles nécessitent impérativement une validation humaine approfondie avant toute action concrète.

Cas d'usage typique :
Planification avancée et rigoureuse des interventions préventives en matière de santé mentale, burnout et gestion du stress au travail.`}
              />

              <PromptCard
                id="fidelisation-talents"
                title="Fidélisation des talents : Stratégies de rétention innovantes"
                description="Co-créez des stratégies innovantes de fidélisation et de rétention des talents adaptées à votre contexte organisationnel."
                techniques={["Generated Knowledge", "Multi-Prompting"]}
                icon={<Star className="h-6 w-6 text-amber-600" />}
                opportunityType="Augmentation"
                prompt={`SYSTEM : « Tu es Talent Retention Innovation Advisor, expert dans la co-création de stratégies innovantes de fidélisation et de rétention des talents dans les grandes organisations françaises, combinant expertise humaine et intelligence artificielle avancée. »

USER :  
En tenant compte précisément du contexte organisationnel spécifique fourni :

Contexte obligatoire :
- Secteur : [SECTEUR]
- Types de talents à fidéliser prioritairement : [HAUTS POTENTIELS, EXPERTS TECHNIQUES, CADRES SUPÉRIEURS]
- Défis de fidélisation identifiés : [EX : attrition élevée, concurrence marché, insatisfaction carrière]

Procédure Multi-Prompting impérative :

Prompt A (« Diagnostic généré ») :
- Génère explicitement (Generated Knowledge) 3 principales raisons probables expliquant les difficultés actuelles à retenir les talents clés dans ce contexte organisationnel spécifique.
- Justifie brièvement chacune (≤30 mots).

Prompt B (« Axes innovants de rétention ») :
- Propose précisément 3 axes stratégiques innovants en réponse directe au diagnostic précédent, alignés avec les meilleures pratiques et tendances futures (horizon 2025).
- Justifie chaque axe (≤30 mots chacun).

Prompt C (« Stratégie finale de fidélisation co-créée ») :
- Élaborer une stratégie finale structurée intégrant les axes précédemment sélectionnés.
- Identifie clairement les points nécessitant impérativement une validation ou adaptation humaine finale avant la mise en œuvre opérationnelle (≤50 mots).

Cas d'usage typique :
Développement stratégique et opérationnel avancé pour retenir des profils critiques dans des environnements fortement concurrentiels (secteur technologique, consulting, finance).`}
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={3}>
                        Santé et bien-être au travail
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Engagement des collaborateurs
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Augmentation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Multi-Prompting</li>
                          <li>Expert Role-Playing</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Co-création de nouvelles stratégies d'engagement en collaboration entre IA et humains
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Prévention des risques</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Chain-of-Thought</li>
                          <li>RCT</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide à l'élaboration de plans de prévention avec forte supervision humaine sur un sujet sensible
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fidélisation des talents</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Augmentation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Generated Knowledge</li>
                          <li>Multi-Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Co-création de nouvelles stratégies de rétention innovantes en partenariat humain-IA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">L'IA au service du bien-être au travail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Co-création stratégique</h4>
                  <p className="text-gray-700">
                    L'IA permet de co-créer des stratégies innovantes d'engagement et de bien-être en combinant
                    l'expertise humaine et les capacités analytiques de l'intelligence artificielle, offrant ainsi des
                    approches plus complètes et adaptées.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Analyse prédictive des risques</h4>
                  <p className="text-gray-700">
                    Grâce à l'analyse des données RH, l'IA peut aider à identifier précocement les signaux faibles de
                    risques psychosociaux et proposer des actions préventives ciblées, tout en maintenant une
                    supervision humaine essentielle.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Personnalisation à grande échelle</h4>
                  <p className="text-gray-700">
                    L'IA permet de développer des stratégies de fidélisation et d'engagement personnalisées pour
                    différentes catégories de collaborateurs, même dans les grandes organisations, tout en maintenant
                    une cohérence globale.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Éthique et supervision humaine</h4>
                  <p className="text-gray-700">
                    Les prompts sont conçus pour garantir une approche éthique et responsable, en identifiant
                    systématiquement les aspects qui nécessitent une validation humaine, particulièrement sur des sujets
                    sensibles comme la santé mentale.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Approche holistique du bien-être au travail</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Engagement et sens</h4>
                  <p className="text-gray-600">
                    Développez des stratégies qui donnent du sens au travail et renforcent l'engagement des
                    collaborateurs en alignant leurs aspirations personnelles avec les objectifs de l'organisation.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Co-création de la culture d'entreprise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Alignement des valeurs individuelles et collectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Reconnaissance et valorisation des contributions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Prévention et santé</h4>
                  <p className="text-gray-600">
                    Mettez en place des dispositifs de prévention des risques psychosociaux et de promotion de la santé
                    mentale et physique adaptés aux spécificités de votre organisation.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Détection précoce des signaux faibles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Plans de prévention multi-niveaux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Suivi et adaptation continue des dispositifs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Fidélisation et épanouissement</h4>
                  <p className="text-gray-600">
                    Créez un environnement propice à l'épanouissement professionnel et personnel de vos collaborateurs
                    pour favoriser leur fidélisation et leur développement à long terme.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Parcours de développement personnalisés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Équilibre vie professionnelle-vie personnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span className="text-sm text-gray-500">Environnement de travail inspirant et adaptatif</span>
                    </li>
                  </ul>
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
