"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, BookOpen, Users, FileText, Lightbulb, BarChart2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Formation & Développement
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Prompts optimisés pour transformer vos approches pédagogiques et développer les compétences de vos
                collaborateurs
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Prompts optimisés pour la formation</h2>
              <p className="mt-4 text-lg text-gray-500">
                Des prompts avancés utilisant des techniques de pointe pour créer des contenus pédagogiques innovants et
                personnaliser les parcours d'apprentissage
              </p>
            </div>

            <div className="space-y-16">
              <PromptCard
                id="creation-contenus"
                title="Création de contenus de formation originaux"
                description="Créez des contenus pédagogiques complets, originaux et immédiatement exploitables pour vos formations."
                techniques={["Expert Role-Playing", "Few-Shot"]}
                icon={<BookOpen className="h-6 w-6 text-amber-600" />}
                opportunityType="Avant-Garde"
                prompt={`SYSTEM : « Tu es un Ingénieur pédagogique senior reconnu, spécialisé en conception de formations innovantes adaptées à un public professionnel exigeant. Tes contenus pédagogiques sont originaux, interactifs, et directement opérationnels. »

USER :  
Crée un contenu pédagogique complet, original et immédiatement exploitable sur le sujet suivant : « [SUJET DE LA FORMATION] ».

Exigences obligatoires :
- Durée du module : [DURÉE, ex. 90 minutes]
- Public cible précis : [POSTES/FONCTIONS ciblées]
- Objectifs pédagogiques précis (3 maximum) : [OBJECTIFS]
- Format de livraison : [PRÉSENTIEL/DIGITAL/HYBRIDE]

Procédure Few-Shot :
Base-toi explicitement sur ces deux exemples réussis pour structurer ton contenu :
1. Module interactif « Gestion de crise opérationnelle » (présentiel, 2h)
2. Module digital « Leadership à distance » (digital, 60 min)

Produis impérativement :
- Un déroulé pédagogique clair, structuré chronologiquement.
- Des séquences pédagogiques interactives (au minimum 3 activités).
- Ressources complémentaires (exercices, cas pratiques ou quiz).

Conclusion :
Avant de fournir ta réponse finale, explique brièvement (≤50 mots) ta stratégie pédagogique et les choix spécifiques retenus (Expert Role-Playing + Chain-of-Thought).`}
              />

              <PromptCard
                id="parcours-apprentissage"
                title="Parcours d'apprentissage personnalisés"
                description="Concevez des parcours d'apprentissage sur mesure adaptés aux besoins spécifiques de chaque collaborateur."
                techniques={["Generated Knowledge", "Chain-of-Thought"]}
                icon={<Users className="h-6 w-6 text-green-600" />}
                opportunityType="Augmentation"
                prompt={`SYSTEM : « Tu es Learning Experience Architect spécialiste de la conception individualisée des parcours de développement des compétences pour cadres et collaborateurs en entreprise. »

USER :  
Conçois un parcours d'apprentissage personnalisé spécifiquement adapté au collaborateur décrit ci-dessous.

Contexte indispensable à prendre en compte :
- Poste actuel : [POSTE]
- Niveau de compétence actuel : [NIVEAU DE COMPÉTENCE : débutant/intermédiaire/avancé]
- Objectif d'apprentissage individuel : [OBJECTIF]
- Modalités préférentielles d'apprentissage : [e-learning, coaching, présentiel, blended learning]
- Contraintes particulières (temps disponible, charge de travail) : [CONTRAINTES]

Étapes obligatoires :
1. Génère une analyse raisonnée (max 60 mots) expliquant les besoins d'apprentissage spécifiques à ce profil (Generated Knowledge).
2. Structure clairement un parcours personnalisé sur 4 semaines, détaillant précisément chaque semaine :
   - Objectifs pédagogiques intermédiaires explicites.
   - Activités d'apprentissage concrètes (ressources, formats, interactions).
   - Méthodes pour mesurer la progression du collaborateur.
3. Explique succinctement (Chain-of-Thought, ≤50 mots) comment ce parcours répond précisément aux besoins individuels identifiés initialement.`}
              />

              <PromptCard
                id="evaluation-competences"
                title="Évaluation des compétences en accompagnement humain"
                description="Analysez les résultats d'évaluation de compétences et formulez des recommandations pertinentes tout en valorisant le jugement humain."
                techniques={["Chain-of-Thought", "Reflexive CoT (RCT)"]}
                icon={<FileText className="h-6 w-6 text-purple-600" />}
                opportunityType="Assistance"
                prompt={`SYSTEM : « Tu es Consultant senior en Évaluation des Compétences, spécialisé dans le diagnostic RH avec une approche analytique et bienveillante qui valorise le jugement humain. »

USER :
Aide-moi à analyser les résultats d'évaluation de compétences suivants pour un collaborateur :

Contexte fourni :
- Poste évalué : [POSTE]
- Compétences évaluées : [LISTE DES COMPÉTENCES]
- Résultats obtenus (scores quantitatifs, feedback qualitatifs) : [DONNÉES]

Procédure obligatoire :
1. Explique clairement (≤60 mots) ta méthode initiale d'analyse des résultats (Chain-of-Thought explicite).
2. Pour chaque compétence évaluée, fournis :
   - Diagnostic analytique clair (forces, axes d'amélioration).
   - Recommandation RH opérationnelle concrète (formation, accompagnement, actions spécifiques).
3. Termine avec un paragraphe réflexif (RCT, ≤60 mots) expliquant comment ton analyse respecte et soutient une prise de décision finale reposant sur le jugement humain.`}
              />

              <PromptCard
                id="contenus-interactifs"
                title="Conception avancée de contenus interactifs pédagogiques"
                description="Créez des activités pédagogiques interactives originales et engageantes pour vos formations."
                techniques={["Few-Shot", "Expert Role-Playing"]}
                icon={<Lightbulb className="h-6 w-6 text-amber-600" />}
                opportunityType="Avant-Garde"
                prompt={`SYSTEM : « Tu es Learning Innovation Designer expert reconnu en pédagogie interactive et gamifiée, habitué à créer des activités d'apprentissage inédites et engageantes pour adultes en milieu professionnel. »

USER :
Imagine une nouvelle activité pédagogique interactive originale pour la formation suivante :

Contexte obligatoire :
- Thème de la formation : [THÈME]
- Objectif pédagogique précis : [OBJECTIF]
- Format de formation : [DIGITAL/PRÉSENTIEL/HYBRIDE]
- Durée de l'activité : [DURÉE, ex. 30 min]
- Taille du groupe cible : [TAILLE GROUPE]

Procédure Few-Shot :
Inspire-toi explicitement de ces deux exemples d'activités interactives reconnues :
1. Jeu de rôle digital collaboratif pour la gestion de conflits (online, 45 min).
2. Escape game pédagogique en présentiel sur la cybersécurité (présentiel, 60 min).

Livrables impératifs :
- Description détaillée de l'activité (scénario pédagogique précis).
- Instructions claires pour l'animateur/formateur (déroulement, animation, feedback).
- Critères précis d'évaluation de l'efficacité pédagogique de l'activité.

Conclusion :
Avant ta réponse finale, explicite en 50 mots maximum ta logique créative et les mécanismes pédagogiques innovants retenus (Expert Role-Playing + Chain-of-Thought).`}
              />

              <PromptCard
                id="module-formation"
                title="Conception d'un module de formation immersif"
                description="Créez des modules de formation innovants et immersifs basés sur les principes d'apprentissage des adultes et les neurosciences."
                techniques={["RCT", "Few-Shot"]}
                icon={<BookOpen className="h-6 w-6 text-blue-600" />}
                opportunityType="Augmentation"
                prompt={`Technique : RCT + Few-Shot | Quadrant : Augmentation | Complexité : Élevée

En tant que concepteur pédagogique expert en apprentissage expérientiel pour adultes, tu conçois un module de formation innovant sur [compétence/thématique] pour [profil des apprenants].

Tu as notamment conçu les modules suivants qui ont reçu des évaluations exceptionnelles :

EXEMPLE 1 : MODULE "FEEDBACK CONSTRUCTIF"
Objectifs : Transformer la culture du feedback dans l'organisation
Approche : Apprentissage par immersion progressive
Innovation pédagogique : Simulation vidéo interactive avec pratique graduelle
Structure :
1. Immersion émotionnelle : vidéo-témoignages d'impact du feedback
2. Cadre conceptuel minimaliste : modèle COIN en 4 étapes
3. Démonstration commentée de cas réels (succès et échecs)
4. Pratique progressive : feedback simulé avec complexité croissante
5. Application contextualisée : plan d'action personnalisé
6. Suivi d'implémentation : micro-pratiques hebdomadaires

EXEMPLE 2 : MODULE "PRISE DE DÉCISION AGILE"
[Structure similaire avec détails spécifiques à ce thème]

En t'inspirant de ces exemples réussis mais en innovant pour notre contexte spécifique, conçois un module de formation sur [thématique] qui :

1. Transforme profondément la pratique plutôt que simplement transmettre des connaissances
2. Intègre les principes d'apprentissage adulte (expérientiel, pertinence immédiate, autonomie)
3. Alterne séquences courtes de concepts et pratique extensive
4. Incorpore des éléments de neurosciences de l'apprentissage (espacé, multimodal, émotionnel)
5. Prévoit les obstacles d'implémentation et les adresse proactivement
6. Inclut des mécanismes de transfert et d'application post-formation

Présente ton design pédagogique complet avec séquencement, activités spécifiques, supports nécessaires et méthodes d'évaluation de l'impact.`}
              />

              <PromptCard
                id="parcours-developpement"
                title="Parcours de développement personnalisé"
                description="Créez des parcours de développement sur mesure qui combinent différentes modalités d'apprentissage adaptées aux besoins spécifiques de chaque collaborateur."
                techniques={["Contextual Augmentation", "Chain-of-Thought"]}
                icon={<Users className="h-6 w-6 text-purple-600" />}
                opportunityType="Augmentation"
                prompt={`Technique : Contextual Augmentation + Chain-of-Thought | Quadrant : Augmentation | Complexité : Très élevée

En tenant compte du profil développemental suivant :
[Insérer données : évaluation des compétences actuelles, aspirations, préférences d'apprentissage, contraintes]

Et de notre contexte organisationnel :
[Insérer données : compétences critiques, opportunités internes, ressources disponibles]

Développe un parcours personnalisé de développement pour cette personne en procédant méthodiquement :

1. Analyse d'abord l'écart entre compétences actuelles et objectifs de développement
   - Identifie les zones de force à capitaliser
   - Détermine les compétences prioritaires à développer
   - Évalue le potentiel de progression dans chaque domaine

2. Élabore une stratégie développementale sur 12 mois avec progression logique
   - Séquence les compétences à développer selon leur interdépendance
   - Alterne entre consolidation de forces et développement de nouvelles capacités
   - Intègre des moments de réflexion et d'intégration

3. Pour chaque compétence prioritaire, conçois un mix d'approches développementales
   - Formations formelles (avec modalités adaptées aux préférences d'apprentissage)
   - Expériences pratiques (projets, responsabilités élargies, missions transverses)
   - Apprentissage social (mentorat, communautés de pratique, peer learning)
   - Ressources auto-dirigées (lectures, podcasts, MOOC sélectionnés)

4. Définis des jalons développementaux avec indicateurs de progression
   - Métriques objectives d'acquisition des compétences
   - Modalités de feedback et d'ajustement
   - Célébration des progrès et reconnaissance

5. Anticipe les obstacles potentiels et propose des stratégies préventives

Présente ce plan sous forme de roadmap visuelle et de plan d'action détaillé adaptés au style d'apprentissage préférentiel de la personne.`}
              />

              <PromptCard
                id="evaluation-competences"
                title="Évaluation multimodale des compétences"
                description="Développez des systèmes d'évaluation des compétences qui combinent différentes méthodes pour une mesure précise et objective."
                techniques={["Generated Knowledge", "RCT"]}
                icon={<BarChart2 className="h-6 w-6 text-green-600" />}
                opportunityType="Assistance"
                prompt={`Technique : Generated Knowledge + RCT | Quadrant : Assistance | Complexité : Élevée

Tu es un expert en évaluation et développement des compétences, spécialisé dans les approches multimodales qui capturent avec précision les capacités réelles en contexte professionnel.

Avant de concevoir le système d'évaluation, génère une synthèse des connaissances actuelles sur :
1. Les limites des méthodes traditionnelles d'évaluation des compétences
2. Les facteurs déterminants de validité prédictive des évaluations
3. Les approches multimodales démontrant la plus forte corrélation avec la performance réelle
4. Les méthodes efficaces pour minimiser les biais d'évaluation

Sur la base de ces connaissances, conçois un système complet d'évaluation pour la compétence [compétence spécifique] dans notre contexte [contexte organisationnel].

Ce système doit inclure :

1. DÉFINITION OPÉRATIONNELLE
   - Décomposition de la compétence en composantes observables
   - Niveaux de maîtrise clairement différenciés avec comportements associés
   - Différenciation contextuelle (comment cette compétence se manifeste dans différents rôles)

2. PROTOCOLE D'ÉVALUATION MULTIMODALE
   - Méthodes d'auto-évaluation structurée
   - Évaluations situationnelles (simulation, mise en situation)
   - Observations en contexte réel
   - Approches basées sur les résultats/productions
   - Évaluations 360° calibrées

3. OUTILS SPÉCIFIQUES
   - Grilles d'observation avec indicateurs comportementaux
   - Scénarios de simulation avec critères d'évaluation
   - Questionnaires calibrés pour l'auto-évaluation et l'évaluation par les pairs

4. PROCESSUS D'INTÉGRATION ET D'INTERPRÉTATION
   - Pondération des différentes modalités d'évaluation
   - Méthodes de triangulation des résultats
   - Cadre d'interprétation contextualisé

5. MÉCANISMES DE FEEDBACK DÉVELOPPEMENTAL
   - Format et structure des retours
   - Connexion aux opportunités de développement
   - Suivi longitudinal des progrès`}
              />

              <PromptCard
                id="analyse-impact"
                title="Analyse d'impact de formation"
                description="Évaluez l'impact réel de vos programmes de formation sur la performance individuelle et organisationnelle."
                techniques={["Multi-Prompting"]}
                icon={<FileText className="h-6 w-6 text-amber-600" />}
                opportunityType="Assistance"
                prompt={`Technique : Multi-Prompting | Quadrant : Assistance | Complexité : Élevée

Je souhaite analyser l'impact complet de notre programme de formation [nom du programme] sur l'organisation. J'ai besoin d'une approche qui dépasse les métriques de satisfaction pour capturer la valeur transformationnelle réelle.

Prompt 1 - Cadre d'évaluation multiniveau :
Développe un cadre d'évaluation complet qui capture l'impact de notre formation à quatre niveaux : réaction des participants, acquisition de compétences, application en situation de travail, et impact organisationnel. Pour chaque niveau, propose des métriques spécifiques, quantitatives et qualitatives, adaptées à notre secteur [secteur d'activité].

Prompt 2 - Méthodologie de collecte de données :
Conçois une méthodologie rigoureuse pour collecter les données d'impact à chaque niveau. Inclus un calendrier optimal de collecte (immédiat, court terme, moyen terme, long terme), les outils spécifiques à utiliser, et des stratégies pour maximiser la participation et la fiabilité des données.

Prompt 3 - Calcul du ROI formatif :
Propose une méthodologie de calcul du retour sur investissement qui intègre à la fois les bénéfices tangibles (productivité, qualité, rétention) et intangibles (engagement, culture, marque employeur). Inclus une approche d'isolation des effets de la formation par rapport à d'autres variables.

Prompt 4 - Visualisation et storytelling des résultats :
Suggère un format de présentation des résultats qui combine rigueur analytique et impact narratif pour différentes audiences (direction, managers, participants). Comment transformer les données en insights actionnables qui démontrent la valeur stratégique du développement des compétences?`}
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
                        Formation et développement des compétences
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Création de contenus de formation
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Avant-Garde</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Expert Role-Playing</li>
                          <li>Few-Shot</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Création de nouveaux contenus pédagogiques originaux avec supervision minimale
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Parcours d'apprentissage personnalisés
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Augmentation</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Generated Knowledge</li>
                          <li>Chain-of-Thought</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Co-création de nouvelles approches d'apprentissage adaptées aux besoins individuels
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Évaluation des compétences</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Assistance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Chain-of-Thought</li>
                          <li>RCT</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Aide à l'analyse et au diagnostic tout en gardant le jugement humain au centre
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Contenus interactifs</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Avant-Garde</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Few-Shot</li>
                          <li>Expert Role-Playing</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Création autonome de nouvelles formes d'exercices et d'interactions pédagogiques
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Techniques de prompting pour la formation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Expert Role-Playing</h4>
                  <p className="text-gray-700">
                    Cette technique consiste à demander à l'IA d'adopter le rôle d'un expert en pédagogie ou en
                    formation. Elle permet d'obtenir des contenus de haute qualité qui reflètent les meilleures
                    pratiques du domaine et une approche professionnelle.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Few-Shot</h4>
                  <p className="text-gray-700">
                    En fournissant quelques exemples de ce que vous attendez, vous guidez l'IA vers le format et le
                    style souhaités. Cette technique est particulièrement efficace pour obtenir des contenus
                    pédagogiques cohérents et alignés avec vos standards.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Generated Knowledge</h4>
                  <p className="text-gray-700">
                    Cette technique permet à l'IA de générer des connaissances spécifiques basées sur son apprentissage.
                    Elle est particulièrement utile pour analyser les besoins d'apprentissage et proposer des parcours
                    adaptés aux profils des collaborateurs.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Chain-of-Thought & RCT</h4>
                  <p className="text-gray-700">
                    Ces techniques encouragent l'IA à expliquer son raisonnement étape par étape. Elles sont
                    essentielles pour l'évaluation des compétences, où la transparence du processus d'analyse est
                    cruciale pour la prise de décision finale par les professionnels RH.
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
