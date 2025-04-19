"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, Mail, Users, FileText } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Onboarding & Intégration
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour transformer l'expérience d'accueil et d'intégration de vos nouveaux
                collaborateurs
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour l'onboarding</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour optimiser chaque étape du processus
                d'intégration de vos nouveaux collaborateurs
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="emails-bienvenue"
                title="Emails de bienvenue"
                description="Créez des emails de bienvenue chaleureux, engageants et conformes au RGPD pour accueillir vos nouveaux collaborateurs."
                techniques={["Template Filling", "One-Shot"]}
                icon={<Mail className="h-6 w-6 text-blue-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es Onboarding Communication Specialist dans un grand groupe français. Ton style est chaleureux, engageant, concis et aligné avec les standards RGPD. »

USER :
Complète le template email suivant, qui servira à accueillir systématiquement chaque nouvel arrivant. Adopte une tonalité professionnelle et accueillante, tout en respectant strictement la limite maximale de 150 mots.

Template :
Objet : [OBJET ATTRACTIF]
Bonjour [PRÉNOM],

Bienvenue chez [ENTREPRISE] en tant que [POSTE] !
[PHRASE PERSONNALISÉE de reconnaissance : expérience ou compétence particulière mentionnée lors du recrutement]

Votre arrivée est prévue le [DATE], et nous vous attendons à [HEURE & LIEU DE RENDEZ-VOUS].
[PRÉCISIONS PRATIQUES : interlocuteur, documents à apporter, accès outils]

Nous avons hâte de débuter cette aventure ensemble !

À très bientôt,
[Signature]

Instructions complémentaires :
- Produis directement une réponse prête à l'envoi (One-Shot).
- Vérifie que le texte final ne révèle aucune information sensible.`}
              />

              <PromptCard
                id="programmes-integration"
                title="Programmes d'intégration personnalisés"
                description="Co-créez des programmes d'intégration personnalisés et complets pour les 30 premiers jours de vos nouveaux collaborateurs."
                techniques={["RCT", "Contextual Augmentation"]}
                icon={<Users className="h-6 w-6 text-indigo-600" />}
                opportunityType="Augmentation"
                prompt={`SYSTEM : « Tu es Onboarding Experience Designer, spécialisé dans la personnalisation des parcours d'intégration au sein d'entreprises françaises. »

USER :
En considérant les informations contextuelles ci-dessous sur le collaborateur nouvellement recruté, co-crée un programme d'intégration personnalisé complet pour ses 30 premiers jours.

Contexte à utiliser impérativement :
- Poste occupé : [POSTE]
- Département : [DÉPARTEMENT]
- Expérience antérieure du collaborateur : [EXPÉRIENCE ANTÉRIEURE]
- Compétences clés à renforcer : [COMPÉTENCES CLÉS]
- Objectifs d'intégration : [OBJECTIFS D'INTÉGRATION]

Instructions impératives :
1. Résume en 50 mots maximum ton raisonnement initial (Reflexive Chain-of-Thought) pour personnaliser efficacement ce parcours.
2. Produis un programme structuré en 4 semaines :
   - Actions spécifiques et adaptées chaque semaine.
   - Interactions clés à prévoir (mentors, équipes, managers).
   - Objectifs précis et mesurables pour chaque période.
3. Termine avec un paragraphe de « Contextual Augmentation » explicitant comment ajuster le programme en cas d'évolution rapide des besoins identifiés chez le collaborateur.`}
              />

              <PromptCard
                id="documentation-accueil"
                title="Documentation d'accueil automatisée"
                description="Générez une documentation d'accueil claire, exhaustive et conforme au RGPD pour vos nouveaux collaborateurs."
                techniques={["Template Filling"]}
                icon={<FileText className="h-6 w-6 text-green-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es Documentation Automation Expert dans une direction RH française. Tes documents sont clairs, exhaustifs, accessibles et conformes aux règles RGPD. »

USER :
Complète ce gabarit standardisé de documentation d'accueil destiné aux nouveaux collaborateurs. Assure-toi que le texte final nécessite un minimum d'intervention humaine ultérieure et soit immédiatement diffusable.

Gabarit obligatoire :
Titre : Guide d'accueil pour [POSTE] chez [ENTREPRISE]

Section 1 : Mot de bienvenue (accueillant, ≤60 mots)

Section 2 : Informations pratiques
- Lieu de travail : [LIEU]
- Horaires : [HORAIRES]
- Contacts utiles : [CONTACTS]
- Accès aux outils numériques : [OUTILS]

Section 3 : Présentation synthétique de l'équipe (≤80 mots, dynamique)

Section 4 : Checklist d'intégration standardisée (5 points-clés)

Section 5 : Ressources et liens utiles (intranet, formation, supports internes)

Instructions complémentaires :
- Vérifie rigoureusement que le contenu automatisé ne divulgue aucune donnée personnelle non autorisée.
- Rédige une version finale prête à l'usage, sans nécessité de reformulation additionnelle.`}
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
                        Onboarding et intégration
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Emails de bienvenue</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>One-Shot</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Communication standardisée qui peut être automatisée avec minimal ajustement
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Programmes d'intégration</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Augmentation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>RCT</li>
                          <li>Contextual Augmentation</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Co-création de parcours personnalisés adaptés aux besoins spécifiques de chaque collaborateur
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Documentation d'accueil</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Few-Shot</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Production de documents standardisés avec peu d'intervention humaine
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantages de l'IA pour l'onboarding</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Personnalisation à grande échelle</h4>
                  <p className="text-gray-700">
                    L'IA permet de personnaliser l'expérience d'intégration pour chaque collaborateur tout en maintenant
                    une cohérence globale, même pour les entreprises accueillant un grand nombre de nouveaux talents
                    simultanément.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-indigo-700 mb-3">Réduction de la charge administrative</h4>
                  <p className="text-gray-700">
                    En automatisant la création de documents et communications standardisés, les équipes RH peuvent se
                    concentrer sur les interactions humaines à forte valeur ajoutée plutôt que sur les tâches
                    répétitives.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">
                    Amélioration de l'expérience collaborateur
                  </h4>
                  <p className="text-gray-700">
                    Des communications plus pertinentes et des parcours d'intégration mieux adaptés augmentent le
                    sentiment d'appartenance et accélèrent la montée en compétence des nouveaux collaborateurs.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Conformité et cohérence</h4>
                  <p className="text-gray-700">
                    L'utilisation de prompts optimisés garantit que toutes les communications et documents respectent
                    les normes RGPD et maintiennent une cohérence avec l'identité et les valeurs de l'entreprise.
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
