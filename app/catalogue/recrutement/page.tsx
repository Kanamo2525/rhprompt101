"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, BookOpen, Users, FileText, Mail, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function RecrutementPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Recrutement & Acquisition
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour transformer votre processus de recrutement et d'acquisition de talents
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour le recrutement</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour optimiser chaque étape de votre processus de
                recrutement
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="redaction-offres"
                title="Rédaction avancée d'offres d'emploi"
                description="Créez des offres d'emploi engageantes, attractives et conformes au RGPD qui reflètent authentiquement votre culture d'entreprise."
                techniques={["Template Filling", "Few-Shot", "Expert Role-Playing", "Chain-of-Thought"]}
                icon={<FileText className="h-6 w-6 text-blue-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es Talent Branding Specialist senior en cabinet RH international. Tes annonces respectent rigoureusement les bonnes pratiques RGPD, sont engageantes, attractives, et reflètent authentiquement la culture employeur. »

USER :  
1. Complète précisément ce gabarit standardisé en adaptant ton style à la tonalité indiquée (start-up ou corporate), en intégrant obligatoirement les éléments contextuels fournis :  

## Présentation de l'entreprise (≤70 mots, storytelling engageant)  
## Mission du poste (liste ou paragraphe court adapté au style)  
## Responsabilités clés (3 à 5 points marquants)  
## Compétences requises  
| Must-have | Nice-to-have |  
|-----------|--------------|  
| …         | …            |  
## Valeur ajoutée employeur (EVP attractive, ciblée)  
## Message Diversité & Inclusion (inclusif, authentique)  
## Call-to-Action (clair, incitatif)

2. Contexte obligatoire : Intitulé : « [INTITULÉ] », Entreprise : « [ENTREPRISE] », Secteur : « [SECTEUR] », Lieu : « [LIEU] », Tonalité : « [START-UP/CORPORATE] ».  

3. Style rédactionnel démontré par deux exemples précis :  
- « Développeur·euse Full-Stack » en style start-up, missions en bullet points dynamiques.  
- « Responsable Paie » en style corporate, missions en paragraphe structuré.

4. Avant ta réponse finale prête à publier (sans Markdown, ≤320 mots), explique succinctement (≤60 mots) ta logique stylistique (Chain-of-Thought).`}
              />

              <PromptCard
                id="preparation-entretiens"
                title="Préparation structurée d'entretiens RH"
                description="Générez des questions d'entretien pertinentes basées sur les compétences critiques pour évaluer efficacement les candidats."
                techniques={["Generated Knowledge", "Chain-of-Thought", "Few-Shot"]}
                icon={<Users className="h-6 w-6 text-indigo-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Interview Designer certifié expert en évaluation par compétences. »

USER :
Pour le poste : « [INTITULÉ] » :
1. Génère une liste raisonnée des 6 compétences critiques alignées sur les tendances métier 2025 (max 80 mots, Generated Knowledge).
2. Pour chaque compétence, fournis :
- 3 questions ouvertes spécifiques,
- Une justification concise (≤25 mots),
- Un critère objectif d'excellence mesurable.
3. Présente clairement le tout dans un tableau structuré en Markdown.
4. Introduis ta réponse par une justification synthétique en deux phrases (Chain-of-Thought) précisant ta logique de sélection des compétences selon l'évolution métier.`}
              />

              <PromptCard
                id="evaluation-cv"
                title="Évaluation objective automatisée des CV"
                description="Analysez et évaluez objectivement un grand nombre de CV selon des critères pondérés pour identifier les meilleurs candidats."
                techniques={["Contextual Augmentation", "Reflexive CoT", "Chain-of-Thought"]}
                icon={<BookOpen className="h-6 w-6 text-green-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es Talent Scout data-driven, impartial, expert en présélection automatisée des candidats. »

USER :  
Voici 50 CV anonymisés au format JSON. Contexte recrutement :  
- Poste : « [INTITULÉ] »
- Critères pondérés précisément :
  1. Compétences techniques – 30 %
  2. Expérience secteur – 25 %
  3. Soft skills clés – 20 %
  4. Langues – 15 %
  5. Publications / certifications – 10 %

Instructions impératives :
1. Explique brièvement ta stratégie de notation (≤50 mots, Chain-of-Thought initial).
2. Évalue chaque CV avec un score de 0 à 100 en précisant clairement ta justification (≤35 mots, Reflexive CoT).
3. Fourni un classement clair du top 10 candidats.
4. Conclus ta réponse par une analyse critique : « Biais potentiels identifiés et actions correctrices préconisées » (Contextual Augmentation).
5. Format de sortie : JSON Lines structuré précisément.`}
              />

              <PromptCard
                id="communication-candidats"
                title="Communication personnalisée aux candidats"
                description="Créez des communications personnalisées et empathiques pour les candidats à différentes étapes du processus de recrutement."
                techniques={["Template Filling", "One-Shot", "Iterative Prompting"]}
                icon={<Mail className="h-6 w-6 text-amber-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es Candidate Experience Manager spécialisé en marque employeur. »

USER :  
Voici le template email à remplir précisément (≤150 mots), avec un ton empathique et professionnel :  

Objet : [OBJET]  
Bonjour [Prénom],  
Merci d'avoir consacré du temps à votre candidature pour le poste [INTITULÉ].  
[PARAGRAPHE PERSONNALISÉ : reconnaissance spécifique de l'entretien ou candidature]  
Cependant, nous avons décidé de poursuivre avec un autre profil.  
[SUGGESTIONS D'AMÉLIORATION spécifiques, pertinentes et actionnables]  
Restons connectés, suivez nos opportunités ici : [LIEN].  
Bien cordialement,  
[Signature]

Processus itératif :
- Propose d'abord 3 variantes qualitatives du paragraphe personnalisé, attends la sélection utilisateur avant de compléter l'email final (Iterative Prompting).`}
              />

              <PromptCard
                id="sourcing-candidats"
                title="Stratégie avancée de sourcing candidat"
                description="Développez une stratégie complète de sourcing pour identifier et approcher les candidats passifs sur différentes plateformes."
                techniques={["Multi-Prompting", "Generated Knowledge", "Least-to-Most"]}
                icon={<Search className="h-6 w-6 text-purple-600" />}
                opportunityType="Assistance"
                prompt={`Étape 1 – Opportunités : « Liste précisément 15 requêtes Boolean avancées pour identifier des [INTITULÉ] en région [RÉGION] (LinkedIn, GitHub) avec synonymes métier. »

Étape 2 – Personae : « Défini rigoureusement 3 personae types ciblés : compétences critiques, motivations professionnelles, et canaux de veille privilégiés (Generated Knowledge). »

Étape 3 – Message InMail : « Écris pour chaque persona un InMail attractif (≤120 mots), style dynamique, intégrant clairement notre USP : [USP ENTREPRISE]. »

Étape 4 – Fusion & Synthèse (Least-to-Most) : « À partir des outputs précédents, élabore un playbook complet de sourcing :
- Checklist hebdomadaire des requêtes,
- Scripts structurés d'approche personnalisée,
- KPIs précis et cadence optimale de relances.
Présente ce playbook sous forme numérotée et facile à utiliser par un recruteur. »`}
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
                        Recrutement et acquisition de talents
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rédaction d'offres d'emploi</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Few-Shot</li>
                          <li>One-Shot</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Tâche répétitive standardisée pouvant être effectuée avec peu d'intervention humaine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Préparation d'entretiens</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Few-Shot</li>
                          <li>Chain-of-Thought</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide les recruteurs à élaborer de meilleures questions tout en conservant leur jugement
                        professionnel
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Optimisation du tri des CV</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Chain-of-Thought</li>
                          <li>RCT</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Traitement standardisé d'un grand volume de données avec critères prédéfinis
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Communication candidat</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>One-Shot</li>
                          <li>RCT</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Génération de messages standardisés adaptés à différentes étapes du processus
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sourcing de candidats</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Generated Knowledge</li>
                          <li>Multi-Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide à la recherche et à l'identification de talents potentiels tout en gardant contrôle humain
                      </td>
                    </tr>
                  </tbody>
                </table>
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
