"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, FileText, BarChart2, Brain, ClipboardCheck, GitMerge } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Administration & Processus RH
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour automatiser et optimiser vos processus administratifs RH complexes
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour l'administration RH</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour automatiser les tâches administratives
                complexes et optimiser les processus RH dans les grandes organisations
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="automatisation-administrative"
                title="Automatisation administrative avancée"
                description="Générez automatiquement des contrats et avenants complexes conformes aux exigences réglementaires françaises et RGPD."
                techniques={["Template Filling", "Zero-Shot", "Contextual Augmentation"]}
                icon={<FileText className="h-6 w-6 text-blue-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es un HR Operations Automation Expert, spécialisé dans l'automatisation de documents administratifs complexes pour une grande organisation. Tes productions sont précises, conformes aux exigences réglementaires françaises et RGPD, et immédiatement utilisables sans révision majeure. »

USER :  
Génère automatiquement le document administratif suivant avec zéro intervention ultérieure :

Type de document : [Contrat/Avenant/Convention spécifique]  
Profil du collaborateur : [Cadre dirigeant/Expatrié/Collaborateur sous convention particulière]  
Conditions particulières complexes obligatoires à intégrer :  
- [CONDITION 1, ex. clauses de mobilité internationale]  
- [CONDITION 2, ex. rémunération variable avec calcul complexe]  
- [CONDITION 3, ex. régime spécifique d'horaires ou d'astreinte]

Procédure impérative :
- Remplis intégralement ce gabarit précis en tenant compte des spécificités réglementaires et internes de l'organisation, sans nécessiter de vérification manuelle ultérieure.
- Vérifie explicitement que toutes les clauses soient conformes au droit du travail français, RGPD, et aux politiques internes.

Cas d'usage typique :
Automatisation immédiate de contrats complexes (dirigeants, mobilité internationale, expatriation) avec garanties réglementaires.`}
              />

              <PromptCard
                id="tableaux-bord"
                title="Tableaux de bord RH dynamiques et prédictifs"
                description="Créez automatiquement des tableaux de bord RH avancés avec des indicateurs quantitatifs et qualitatifs prédictifs."
                techniques={["Template Filling", "Zero-Shot", "Generated Knowledge"]}
                icon={<BarChart2 className="h-6 w-6 text-green-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es HR Data Reporting Specialist, expert en génération automatique de tableaux de bord RH avancés pour des grandes entreprises françaises avec des structures organisationnelles complexes. »

USER :  
Crée automatiquement et directement exploitable (Zero-Shot) un tableau de bord RH structuré selon le template suivant :

- Thème du rapport : [Turnover, Absentéisme, Mobilité interne, Formation continue]  
- Fréquence de génération : [Mensuelle/Trimestrielle]  
- Niveau organisationnel concerné : [Groupe/Filiale/Département spécifique]  
- Indicateurs RH clés obligatoires (Generated Knowledge) :
   - 3 indicateurs quantitatifs essentiels  
   - 2 indicateurs qualitatifs prédictifs d'évolution  
- Recommandations automatisées issues de l'analyse prédictive des tendances (≤50 mots).

Procédure impérative :
- Remplis intégralement ce modèle en assurant la cohérence analytique des données.
- Vérifie que les données générées respectent strictement les principes de confidentialité (RGPD).

Cas d'usage typique :
Rapports automatisés sur le turnover et l'absentéisme prédictifs pour comités exécutifs et directions RH de grands groupes.`}
              />

              <PromptCard
                id="bi-people"
                title='BI "People" – Analyse assistée avancée'
                description="Obtenez une analyse approfondie des données RH pour la gestion prévisionnelle des emplois et des compétences (GPEC)."
                techniques={["Chain-of-Thought", "Generated Knowledge", "Multi-Prompting"]}
                icon={<Brain className="h-6 w-6 text-purple-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es HR People Analytics Consultant, spécialisé dans l'analyse avancée des données RH pour une grande organisation avec des enjeux complexes en gestion prévisionnelle des emplois et des compétences (GPEC). »

USER :  
À partir des données RH anonymisées ci-dessous [Données RH complexes fournies] :

Procédure Multi-Prompting impérative :

Prompt A (« Cadre analytique avancé ») :
- Identifie précisément (Generated Knowledge) 4 enjeux RH prioritaires actuels (2025) à traiter grâce à une analyse People Analytics approfondie.
- Justifie brièvement chaque enjeu en ≤30 mots.

Prompt B (« Analyse approfondie ») :
- Pour chacun des enjeux identifiés, produis une analyse structurée (Chain-of-Thought) :
   - Diagnostic clair des tendances observées.
   - Projection prédictive sur 12 à 24 mois.
   - Facteurs critiques à surveiller (≤40 mots par enjeu).

Prompt C (« Aide à la prise de décision humaine ») :
- Présente explicitement 3 recommandations stratégiques issues de ton analyse.
- Précise clairement (≤50 mots) quels éléments spécifiques nécessitent impérativement une validation humaine finale avant toute action opérationnelle.

Cas d'usage typique :
Assistance décisionnelle RH complexe, comme l'analyse prédictive en matière de GPEC, succession, ou planification stratégique des effectifs.`}
              />

              <PromptCard
                id="audit-conformite"
                title="Audit automatisé de conformité réglementaire RH"
                description="Réalisez des audits de conformité RH automatisés pour vérifier le respect des réglementations françaises et RGPD."
                techniques={["Template Filling", "Contextual Augmentation", "Zero-Shot"]}
                icon={<ClipboardCheck className="h-6 w-6 text-blue-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es HR Compliance Audit Automation Expert, spécialisé en audit automatisé des processus RH réglementaires complexes pour de grandes organisations françaises. »

USER :  
Réalise immédiatement et automatiquement (Zero-Shot) un audit de conformité RH selon le gabarit précis suivant :

- Périmètre audité : [Paie, Formation, Gestion des temps, RGPD]  
- Période concernée : [DATE DE DÉBUT – DATE DE FIN]  
- Points de contrôle obligatoires : [5 points de contrôle précis, ex. conformité fiches de paie, validité formations obligatoires, gestion des temps travaillés]

Pour chaque point de contrôle :
- Statut précis de conformité (conforme/non conforme/risque identifié)
- Description succincte du risque identifié (≤40 mots)
- Recommandation automatisée corrective (≤50 mots)

Instructions complémentaires :
- Contextualise précisément les résultats selon le secteur d'activité et les pratiques internes spécifiques.
- Vérifie explicitement que les résultats automatisés respectent strictement les normes françaises, RGPD, et internes.

Cas d'usage typique :
Audit automatisé de conformité RGPD ou réglementaire (formation obligatoire, temps de travail, paie) pour des entreprises à forte complexité organisationnelle (multisites, multi-entités).`}
              />

              <PromptCard
                id="processus-validation"
                title="Processus automatisé de validation RH complexe (workflows)"
                description="Automatisez et optimisez les workflows RH complexes pour les demandes de formation, mobilité interne ou télétravail."
                techniques={["Template Filling", "Iterative Prompting", "Chain-of-Thought"]}
                icon={<GitMerge className="h-6 w-6 text-amber-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es HR Workflow Automation Specialist, expert dans l'automatisation et l'optimisation de workflows RH complexes dans des grandes entreprises françaises. »

USER :  
Automatise précisément le processus de validation RH suivant :

- Type de workflow RH : [Demandes de formation, validation de mobilité interne, validation télétravail complexe]  
- Acteurs concernés : [Manager, Responsable RH, Comités de validation]  
- Conditions de validation spécifiques : [Critères complexes d'éligibilité ou validation hiérarchique multiple]

Procédure Iterative Prompting :
Étape 1 : Propose 2 scénarios automatisés précis de workflows RH avec schéma clair d'étapes de validation.
Étape 2 (après sélection utilisateur) :
- Finalise le scénario choisi en expliquant clairement ta logique de structuration du processus (Chain-of-Thought ≤60 mots).
- Vérifie explicitement que le workflow final respecte rigoureusement les règles internes et légales, nécessitant une intervention humaine minimale.

Cas d'usage typique :
Workflows automatisés pour demandes complexes (mobilité internationale, formation longue durée, gestion de carrière senior) dans des structures organisationnelles matricielles.`}
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={5}>
                        Administration et processus RH
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Automatisation administrative
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Zero-Shot</li>
                          <li>Contextual Augmentation</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Remplacement de tâches répétitives et standardisées avec intervention minimale
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tableaux de bord RH</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Zero-Shot</li>
                          <li>Generated Knowledge</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Génération automatique de rapports standardisés basés sur des données
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BI "People"</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Chain-of-Thought</li>
                          <li>Generated Knowledge</li>
                          <li>Multi-Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide à l'analyse des données RH tout en conservant l'interprétation finale humaine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Audit de conformité réglementaire
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Contextual Augmentation</li>
                          <li>Zero-Shot</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Vérification automatisée de la conformité aux réglementations avec intervention minimale
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Processus de validation RH complexe
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Iterative Prompting</li>
                          <li>Chain-of-Thought</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Optimisation des workflows complexes avec validation humaine minimale
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation digitale des processus RH</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Efficacité opérationnelle</h4>
                  <p className="text-gray-700">
                    L'automatisation des tâches administratives complexes permet de réduire considérablement le temps
                    consacré aux processus répétitifs, libérant ainsi les équipes RH pour des missions à plus forte
                    valeur ajoutée.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Conformité réglementaire</h4>
                  <p className="text-gray-700">
                    Les prompts optimisés garantissent que tous les documents et processus générés respectent
                    rigoureusement les exigences légales et réglementaires françaises, notamment le RGPD, réduisant
                    ainsi les risques juridiques.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Aide à la décision</h4>
                  <p className="text-gray-700">
                    L'analyse prédictive des données RH permet d'anticiper les tendances et d'identifier les enjeux
                    stratégiques, offrant ainsi aux décideurs RH des insights précieux pour orienter leurs actions.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Standardisation des processus</h4>
                  <p className="text-gray-700">
                    L'automatisation des workflows RH complexes assure une cohérence et une standardisation des
                    processus à travers l'organisation, tout en permettant une personnalisation contextuelle lorsque
                    nécessaire.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Évolution de la fonction RH grâce à l'automatisation
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
                  <h4 className="font-medium text-blue-700">Automatisation des tâches</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Libération des équipes RH des tâches administratives répétitives grâce à l'automatisation des
                    documents et processus standardisés.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Analyse prédictive</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Utilisation des données RH pour anticiper les tendances et prendre des décisions stratégiques
                    éclairées en matière de gestion des talents.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Conformité proactive</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Mise en place d'audits automatisés réguliers pour garantir la conformité réglementaire et anticiper
                    les risques juridiques.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700">Partenariat stratégique</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Transformation de la fonction RH en partenaire stratégique de l'entreprise, contribuant directement
                    à la performance et à la croissance.
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
