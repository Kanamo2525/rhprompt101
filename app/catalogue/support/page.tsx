"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, MessageCircle, FileText, BarChart2, Mail, HeartPulse, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Support RH & Relations Collaborateurs
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour améliorer la communication, l'engagement et le support quotidien aux
                collaborateurs
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour le support RH</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour automatiser les réponses aux questions
                fréquentes, générer des documents administratifs et améliorer la communication interne
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="chatbots-rh"
                title="Chatbots RH pour réponses fréquentes"
                description="Automatisez les réponses aux questions fréquentes des collaborateurs avec un chatbot RH précis et conforme au RGPD."
                techniques={["Few-Shot", "Iterative Prompting", "Zero-Shot"]}
                icon={<MessageCircle className="h-6 w-6 text-blue-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es un assistant RH virtuel (Chatbot RH) entraîné à répondre automatiquement, précisément, et clairement aux questions fréquentes des collaborateurs en entreprise, nécessitant très peu d'intervention humaine ultérieure. »

USER :  
À partir des deux exemples de questions-réponses RH ci-dessous (Few-Shot) :

1. « Comment consulter mon solde de congés ? »  
Réponse : « Vous pouvez consulter votre solde de congés directement depuis votre espace personnel sur notre intranet, sous l'onglet « Mes congés ». »

2. « Quelle est la procédure pour déclarer un arrêt maladie ? »  
Réponse : « Pour déclarer un arrêt maladie, envoyez votre certificat médical sous 48h à [ADRESSE MAIL RH] et informez votre manager directement. »

Procédure Iterative Prompting obligatoire :
Étape 1 : Produis trois variantes précises et concises de réponses automatisées pour cette nouvelle question fréquente :
« [NOUVELLE QUESTION COLLABORATEUR] ».

Étape 2 (après sélection utilisateur) :  
- Finalise une réponse prête à être intégrée directement au chatbot RH.
- Vérifie explicitement qu'elle respecte les principes de confidentialité et RGPD.`}
              />

              <PromptCard
                id="documentation-administrative"
                title="Documentation administrative automatisée"
                description="Générez automatiquement des documents administratifs RH standardisés et personnalisés pour chaque collaborateur."
                techniques={["Template Filling", "Contextual Augmentation"]}
                icon={<FileText className="h-6 w-6 text-green-600" />}
                opportunityType="Automatisation"
                prompt={`SYSTEM : « Tu es HR Documentation Specialist, expert en automatisation et standardisation des documents administratifs RH avec une contextualisation précise, efficace et conforme au RGPD. »

USER :  
Complète précisément ce gabarit standardisé pour générer automatiquement le document administratif suivant :

Type de document : [ATTESTATION, CONTRAT, AVENANT, etc.]

Gabarit obligatoire :
- Intitulé clair du document : [INTITULÉ]
- Nom et prénom du collaborateur : [NOM, PRÉNOM]
- Poste occupé : [POSTE]
- Date effective : [DATE]
- Conditions particulières : [CONDITIONS OPTIONNELLES]
- Signature autorisée : [SIGNATAIRE RH]

Procédure obligatoire (Contextual Augmentation) :
- Contextualise précisément le document final selon les éléments spécifiques du collaborateur tout en respectant la standardisation.
- Vérifie systématiquement qu'aucune information sensible non autorisée ne soit intégrée automatiquement.`}
              />

              <PromptCard
                id="analyse-climat-social"
                title="Analyse de climat social et interprétation des données"
                description="Analysez les résultats d'enquêtes d'engagement et obtenez des recommandations concrètes pour améliorer le climat social."
                techniques={["Generated Knowledge", "Multi-Prompting"]}
                icon={<BarChart2 className="h-6 w-6 text-purple-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Employee Engagement Analyst, spécialiste en analyse approfondie du climat social en entreprise, apportant une aide à la décision fondée sur les données, tout en laissant la validation finale aux décideurs RH. »

USER :  
À partir des résultats d'enquête d'engagement anonymisés fournis ici [DONNÉES ENQUÊTE] :

Procédure Multi-Prompting obligatoire :

Prompt A (« Cadre analytique ») :
- Génère précisément (Generated Knowledge) 4 axes clés pertinents pour interpréter l'engagement collaborateur en contexte actuel (2025).
- Justifie brièvement chaque axe (≤30 mots par axe).

Prompt B (« Diagnostic ») :
- Évalue explicitement les résultats fournis selon chaque axe précédemment identifié.
- Fournis pour chaque axe un constat analytique clair (forces/faiblesses, ≤40 mots chacun).

Prompt C (« Recommandations à valider humainement ») :
- Établis précisément 3 recommandations opérationnelles ciblées pour améliorer significativement le climat social.
- Indique explicitement les points spécifiques nécessitant un jugement humain complémentaire pour validation avant mise en œuvre.`}
              />

              <PromptCard
                id="communication-interne"
                title="Communication interne assistée"
                description="Rédigez des communications internes efficaces et adaptées à votre public cible tout en gardant le contrôle sur le message."
                techniques={["RCT", "One-Shot"]}
                icon={<Mail className="h-6 w-6 text-amber-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Internal Communication Advisor, assistant expert en rédaction de communications internes claires et efficaces tout en laissant le contrôle final du message et du ton aux responsables RH. »

USER :  
Aide-moi à rédiger directement (One-Shot) une communication interne sur le sujet suivant :

Contexte obligatoire :
- Sujet : [SUJET COMMUNICATION]
- Objectifs précis du message : [OBJECTIFS]
- Tonalité requise : [FORMELLE, POSITIVE, EMPATHIQUE, INFORMATIVE]
- Public interne cible précis : [DÉPARTEMENTS, POSTES, etc.]

Procédure RCT impérative :
- Produis une version finale directement utilisable (≤180 mots), claire, structurée et alignée avec la tonalité précisée.
- Inclus explicitement en conclusion (RCT, ≤50 mots) une brève réflexion sur les choix rédactionnels effectués et souligne quels aspects du message nécessitent explicitement une validation humaine finale avant diffusion.`}
              />

              <PromptCard
                id="diagnostic-climat-social"
                title="Diagnostic de climat social approfondi"
                description="Analysez en profondeur les résultats de vos enquêtes d'engagement pour identifier les leviers d'amélioration prioritaires."
                techniques={["Generated Knowledge", "Chain-of-Thought"]}
                icon={<BarChart2 className="h-6 w-6 text-blue-600" />}
                opportunityType="Assistance"
                prompt={`Technique : Generated Knowledge + Chain-of-Thought | Quadrant : Assistance | Complexité : Élevée

Avant d'analyser les données de notre enquête d'engagement, établis une synthèse des connaissances actuelles sur :
1. Les principales dimensions de l'engagement et leur impact relatif sur la performance
2. Les corrélations établies entre indicateurs d'engagement et métriques business
3. Les patterns d'évolution typiques dans des contextes de transformation similaires
4. Les méthodologies d'analyse différenciée par segments démographiques et organisationnels

Maintenant, en tenant compte de ces connaissances et des résultats de notre enquête :
[Insérer données quantitatives : scores par dimension, évolutions, benchmarks]
[Insérer sélection de verbatims représentatifs]

Réalise une analyse approfondie en procédant méthodiquement :

1. Analyse quantitative multidimensionnelle
   - Identification des points forts et axes d'amélioration principaux
   - Analyse des évolutions significatives par rapport à la période précédente
   - Segmentation révélatrice (par département, ancienneté, niveau, etc.)
   - Détection des corrélations significatives entre dimensions

2. Analyse qualitative des verbatims
   - Extraction des thématiques récurrentes
   - Analyse de sentiment par thématique
   - Identification des irritants critiques vs améliorations remarquées
   - Mise en perspective avec les résultats quantitatifs

3. Diagnostic intégré
   - Triangulation des données quantitatives et qualitatives
   - Hiérarchisation des enjeux par impact et actionnabilité
   - Analyse des causes racines potentielles
   - Identification des leviers systémiques

4. Recommandations stratégiques
   - Actions prioritaires avec impact attendu
   - Interventions différenciées par segment si pertinent
   - Mécanismes de suivi et d'évaluation
   - Communication des résultats et du plan d'action`}
              />

              <PromptCard
                id="programme-bien-etre"
                title="Conception d'un programme de bien-être holistique"
                description="Développez un programme complet de bien-être qui adresse les dimensions physique, mentale et sociale de la santé au travail."
                techniques={["RCT", "Multi-Prompting"]}
                icon={<HeartPulse className="h-6 w-6 text-purple-600" />}
                opportunityType="Augmentation"
                prompt={`Technique : RCT + Multi-Prompting | Quadrant : Augmentation | Complexité : Élevée

En tant qu'expert en bien-être organisationnel et santé au travail, tu interviens dans notre contexte spécifique [secteur/taille/enjeux/contraintes] pour concevoir un programme de bien-être holistique réellement impactant.

Prompt 1 - Diagnostic et stratégie :
Analyse notre situation actuelle [insérer données : indicateurs de santé, absentéisme, turnover, RPS identifiés], identifie les axes prioritaires d'intervention, et développe un cadre stratégique global aligné avec notre culture organisationnelle et nos contraintes budgétaires.

Prompt 2 - Bien-être physique :
Développe un volet complet d'initiatives favorisant la santé physique, incluant prévention, activité physique, nutrition et ergonomie. Pour chaque initiative, détaille objectifs spécifiques, modalités pratiques, ressources nécessaires et métriques d'évaluation.

Prompt 3 - Bien-être mental et émotionnel :
Conçois un écosystème de soutien à la santé mentale combinant sensibilisation, prévention, détection précoce et accompagnement. Détaille les approches à déployer, leur séquencement, et les points d'attention spécifiques à notre secteur.

Prompt 4 - Bien-être social et organisationnel :
Propose des interventions systémiques adressant les déterminants organisationnels du bien-être : pratiques managériales, organisation du travail, collaboration, inclusion. Inclus des recommandations pour l'évolution de notre culture et de nos processus.

Prompt 5 - Gouvernance et implémentation :
Développe un modèle de gouvernance du programme, un plan d'implémentation séquencé, une stratégie de communication engageante, et un framework d'évaluation de l'impact permettant l'amélioration continue.`}
              />

              <PromptCard
                id="analyse-juridique"
                title="Analyse juridique et conformité RH"
                description="Obtenez une analyse juridique complète sur des questions spécifiques de droit social et de conformité RH."
                techniques={["Expert Role-Playing", "Generated Knowledge"]}
                icon={<Shield className="h-6 w-6 text-green-600" />}
                opportunityType="Assistance"
                prompt={`Technique : Expert Role-Playing + Generated Knowledge | Quadrant : Assistance | Complexité : Élevée

Tu es un expert juridique spécialisé en droit social français et conformité RH, avec 15 ans d'expérience dans l'accompagnement d'entreprises de notre secteur [secteur d'activité].

Avant d'analyser notre question spécifique, synthétise les principales sources légales et jurisprudentielles pertinentes concernant [thématique juridique précise - ex: télétravail, temps de travail, restructuration...].

Sur la base de ce cadre juridique et de notre situation spécifique :
[Insérer description détaillée de la situation, contexte et enjeux]

Réalise une analyse juridique complète qui :

1. CADRE JURIDIQUE APPLICABLE
   - Textes législatifs et réglementaires précisément applicables
   - Jurisprudence pertinente et récente
   - Accords de branche ou conventionnels spécifiques
   - Évolutions réglementaires anticipées

2. ANALYSE DE CONFORMITÉ
   - Évaluation de notre conformité actuelle point par point
   - Identification des zones de risque spécifiques
   - Hiérarchisation des enjeux par niveau de risque
   - Analyse des potentielles conséquences (sanctions, contentieux)

3. RECOMMANDATIONS PRATIQUES
   - Actions correctives priorisées par urgence et impact
   - Adaptations documentaires nécessaires (avec propositions concrètes)
   - Procédures de mise en conformité recommandées
   - Mesures préventives à implémenter

4. STRATÉGIE D'IMPLÉMENTATION
   - Séquencement recommandé des actions
   - Points d'attention spécifiques à notre contexte
   - Modalités de communication appropriées
   - Mécanismes de contrôle continu

Ta réponse doit être à la fois rigoureuse juridiquement et accessible pour des professionnels RH non-juristes, en distinguant clairement les obligations légales strictes des recommandations de bonnes pratiques.`}
              />

              <PromptCard
                id="chatbot-rh"
                title="Conception d'un chatbot RH intelligent"
                description="Concevez un chatbot RH efficace pour répondre aux questions fréquentes des collaborateurs et améliorer l'expérience utilisateur."
                techniques={["Chain-of-Thought", "Template Filling"]}
                icon={<MessageCircle className="h-6 w-6 text-amber-600" />}
                opportunityType="Automatisation"
                prompt={`Technique : Chain-of-Thought + Template Filling | Quadrant : Automatisation | Complexité : Modérée

Développe la conception détaillée d'un chatbot RH intelligent pour notre organisation en procédant méthodiquement :

1. Analyse des besoins et cas d'usage prioritaires
   - Identifie les types de requêtes à fort volume et faible complexité adaptées à l'automatisation
   - Évalue les parcours utilisateurs actuels pour ces demandes (points de friction, délais)
   - Détermine la valeur ajoutée potentielle (gain de temps, accessibilité, expérience)

2. Architecture conversationnelle
   - Établis l'arborescence logique des conversations principales
   - Conçois les flux de dialogue pour chaque catégorie de demande
   - Prévois les mécanismes d'escalade vers l'humain
   - Détermine la "personnalité" du chatbot alignée avec notre culture

3. Base de connaissances structurée
   Pour chaque thématique RH prioritaire, utilise ce template :

   THÉMATIQUE : [Nom de la thématique]
   
   QUESTIONS FRÉQUENTES :
   - [Question 1 formulée comme la poserait un collaborateur]
   - [Question 2 formulée comme la poserait un collaborateur]
   - [Question 3 formulée comme la poserait un collaborateur]
   
   RÉPONSES STANDARDS :
   - [Réponse 1 claire, concise et complète]
   - [Réponse 2 claire, concise et complète]
   - [Réponse 3 claire, concise et complète]
   
   VARIANTES DE FORMULATION :
   - [Reformulations possibles de la question 1]
   - [Reformulations possibles de la question 2]
   - [Reformulations possibles de la question 3]
   
   ARBORESCENCE DÉCISIONNELLE :
   - [Condition 1] → [Action/Réponse spécifique]
   - [Condition 2] → [Action/Réponse spécifique]
   
   ESCALADE :
   - Critères de transfert à un humain
   - Informations à collecter avant escalade
   - Message de transition approprié

4. Stratégie d'implémentation et d'amélioration continue
   - Approche de déploiement progressif
   - Mécanismes de feedback et apprentissage
   - Métriques de performance à suivre
   - Processus de mise à jour des connaissances`}
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
                        Support RH et relations collaborateurs
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Chatbots RH</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Zero-Shot</li>
                          <li>Few-Shot</li>
                          <li>Iterative Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Système de réponse automatique pour questions fréquentes avec peu d'intervention humaine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Documentation administrative
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatisation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Template Filling</li>
                          <li>Contextual Augmentation</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Génération de documents standardisés pouvant être automatisée
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Analyse de climat social</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Generated Knowledge</li>
                          <li>Multi-Prompting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide à l'interprétation des données d'engagement avec jugement humain pour les décisions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Communication interne</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>RCT</li>
                          <li>One-Shot</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide à la rédaction tout en maintenant le contrôle sur le message et la tonalité
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Améliorer l'expérience collaborateur</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Réactivité accrue</h4>
                  <p className="text-gray-700">
                    Les chatbots RH permettent de répondre instantanément aux questions fréquentes des collaborateurs,
                    24h/24 et 7j/7, améliorant ainsi considérablement leur expérience et leur satisfaction.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Personnalisation à l'échelle</h4>
                  <p className="text-gray-700">
                    L'automatisation contextuelle permet de générer des documents et des communications personnalisés
                    pour chaque collaborateur, tout en maintenant une cohérence globale et en respectant les standards.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Prise de décision éclairée</h4>
                  <p className="text-gray-700">
                    L'analyse des données d'engagement permet d'identifier précisément les leviers d'amélioration du
                    climat social et de mettre en place des actions ciblées qui répondent aux attentes des
                    collaborateurs.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Communication transparente</h4>
                  <p className="text-gray-700">
                    Des communications internes claires, cohérentes et adaptées au public cible renforcent la confiance
                    des collaborateurs et favorisent leur engagement, tout en préservant l'authenticité du message.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Équilibre entre automatisation et dimension humaine
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Ce qui peut être automatisé</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Réponses aux questions fréquentes et récurrentes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Génération de documents administratifs standardisés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Analyse préliminaire des données d'engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Première ébauche des communications internes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Suivi des demandes et rappels automatiques</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Ce qui reste humain</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span>Gestion des situations complexes ou sensibles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span>Validation finale des recommandations stratégiques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span>Adaptation du ton et du message aux contextes spécifiques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span>Accompagnement personnalisé des collaborateurs en difficulté</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span>Médiation et résolution des conflits interpersonnels</span>
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
