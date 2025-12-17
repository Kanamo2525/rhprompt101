import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PromptCard } from "@/components/prompt-card"
import { CategorySchema } from "@/components/category-schema"
import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Users, FileText, Mail, Search } from "lucide-react"
import Script from "next/script"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "9 Prompts IA Recrutement - Rédaction d'offres, sourcing, entretiens | RH.Prompt101.fr",
  description:
    "9 prompts d'IA prêts à l'emploi pour optimiser votre recrutement : rédaction d'offres engageantes, sourcing innovant, préparation d'entretiens structurés, évaluation objective de CV et communication candidats.",
  keywords: [
    "prompts recrutement IA",
    "rédaction offres emploi IA",
    "sourcing candidats IA",
    "entretiens structurés",
    "évaluation CV automatisée",
    "communication candidats",
    "acquisition talents IA",
    "ChatGPT recrutement",
    "template offre emploi",
    "questions entretien IA",
  ],
  openGraph: {
    title: "9 Prompts IA pour Recrutement et Acquisition de Talents",
    description: "Optimisez votre processus de recrutement avec des prompts d'IA spécialisés",
    url: "https://rh.prompt101.fr/catalogue/recrutement",
    images: [
      {
        url: "https://rh.prompt101.fr/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RecrutementPage() {
  const categoryName = "Recrutement & Acquisition de Talents"
  const categoryDescription =
    "Optimisez votre processus de recrutement avec des prompts spécialisés pour attirer et sélectionner les meilleurs talents."
  const categoryUrl = "https://rh.prompt101.fr/catalogue/recrutement"
  const promptCount = 9

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Prompts IA pour le Recrutement et Acquisition de Talents",
    description: categoryDescription,
    numberOfItems: promptCount,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Rédaction avancée d'offres d'emploi",
        description:
          "Créez des offres d'emploi engageantes, attractives et conformes au RGPD qui reflètent authentiquement votre culture d'entreprise.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Préparation structurée d'entretiens RH",
        description:
          "Générez des questions d'entretien pertinentes basées sur les compétences critiques pour évaluer efficacement les candidats.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Évaluation objective automatisée des CV",
        description:
          "Analysez et évaluez objectivement un grand nombre de CV selon des critères pondérés pour identifier les meilleurs candidats.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="recrutement-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CategorySchema
        categoryName={categoryName}
        categoryDescription={categoryDescription}
        categoryUrl={categoryUrl}
        promptCount={promptCount}
      />
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Catalogue", href: "/catalogue" },
              { label: "Recrutement & Acquisition", href: "/catalogue/recrutement" },
            ]}
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Prompts IA pour le {categoryName}</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            {categoryDescription} Découvrez nos 9 prompts optimisés pour révolutionner vos pratiques de recrutement.
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
          <PromptCard
            id="redaction-offres-captivantes"
            title="Rédaction d'offres d'emploi captivantes"
            description="Créez des offres d'emploi engageantes qui attirent les meilleurs talents en mettant en avant votre culture d'entreprise et les opportunités de développement."
            techniques={["Template Filling"]}
            icon={<FileText className="h-6 w-6 text-blue-600" />}
            opportunityType="Automatisation"
            prompt={`Technique : Template Filling | Quadrant : Automatisation | Complexité : Modérée

Rédige une offre d'emploi pour un poste de [intitulé du poste] au sein de notre entreprise [secteur/taille/culture]. 

Structure l'offre selon ce template :

TITRE ACCROCHEUR : [Titre engageant qui va au-delà du simple intitulé de poste]

INTRODUCTION : [Paragraphe présentant la mission et l'impact du poste, utilisant un ton qui reflète notre culture d'entreprise]

À PROPOS DE NOUS : [Présentation concise et distinctive de l'entreprise, sa mission et ses valeurs]

MISSIONS PRINCIPALES :
- [Mission 1 formulée avec un verbe d'action et son impact]
- [Mission 2 formulée avec un verbe d'action et son impact]
- [Mission 3 formulée avec un verbe d'action et son impact]
- [Mission 4 formulée avec un verbe d'action et son impact]
- [Mission 5 formulée avec un verbe d'action et son impact]

PROFIL RECHERCHÉ :
- Expérience : [Expérience requise, formulée de manière inclusive]
- Compétences essentielles : [3-5 compétences véritablement indispensables]
- Compétences appréciées : [2-3 compétences souhaitables mais non bloquantes]
- Qualités personnelles : [3-4 soft skills pertinentes pour le poste et la culture]

CE QUE NOUS OFFRONS :
- [Avantage attractif 1]
- [Avantage attractif 2]
- [Avantage attractif 3]
- [Avantage attractif 4]

PROCESSUS DE RECRUTEMENT : [Description des étapes du processus, transparente et engageante]

Assure-toi que l'offre soit inclusive, évite les biais de genre, met l'accent sur l'impact et les opportunités de développement plutôt que sur les contraintes, et reflète authentiquement notre culture d'entreprise [description spécifique de la culture].`}
          />

          <PromptCard
            id="strategie-sourcing"
            title="Stratégie de sourcing innovante pour profils pénuriques"
            description="Développez des stratégies de sourcing innovantes pour attirer des profils rares et difficiles à recruter sur des marchés compétitifs."
            techniques={["Expert Role-Playing", "Multi-Prompting"]}
            icon={<Search className="h-6 w-6 text-purple-600" />}
            opportunityType="Assistance"
            prompt={`Technique : Expert Role-Playing + Multi-Prompting | Quadrant : Assistance | Complexité : Élevée

Tu es un expert en talent acquisition spécialisé dans le sourcing innovant de profils pénuriques, avec 15 ans d'expérience dans des marchés compétitifs.

Notre entreprise cherche à recruter [nombre] [profil spécifique] dans [contexte géographique/sectoriel]. Ce profil est particulièrement difficile à attirer en raison de [facteurs spécifiques].

Première partie - Analyse stratégique :
Analyse les dynamiques actuelles du marché pour ce type de profil :
- Facteurs de motivation qui distinguent ces candidats
- Canaux de sourcing conventionnels et leurs limitations
- Communautés spécifiques où ces talents se rassemblent
- Approches innovantes qui émergent pour atteindre ces profils

Deuxième partie - Plan d'action :
Développe une stratégie de sourcing en 30 jours qui transcende les approches conventionnelles :
1. Canaux prioritaires avec approche spécifique pour chacun
2. Messages différenciants adaptés à ce profil (ton, contenu, format)
3. Stratégie d'activation des collaborateurs comme ambassadeurs ciblés
4. Tactiques d'approche directe (séquencement, personnalisation)
5. Méthodes d'évaluation adaptées à ce type de profil

Troisième partie - Mesure d'efficacité :
Propose des indicateurs pertinents pour évaluer l'efficacité de cette stratégie.`}
          />

          <PromptCard
            id="guide-entretien"
            title="Guide d'entretien structuré basé sur les compétences"
            description="Créez des guides d'entretien structurés pour évaluer objectivement les candidats sur les compétences clés requises pour le poste."
            techniques={["Chain-of-Thought", "RCT"]}
            icon={<Users className="h-6 w-6 text-green-600" />}
            opportunityType="Assistance"
            prompt={`Technique : Chain-of-Thought + RCT | Quadrant : Assistance | Complexité : Élevée

En tant que spécialiste des méthodes d'entretien structuré, tu conçois un guide d'entretien pour évaluer les candidats au poste de [intitulé du poste] dans notre contexte de [description du contexte organisationnel].

Développe ce guide d'entretien en procédant méthodiquement :

1. Identifie d'abord les 5 compétences clés requises pour exceller dans ce rôle, en précisant pour chacune :
   - Sa définition précise dans notre contexte
   - Son importance relative (critique/importante/souhaitable)
   - Les comportements observables qui démontrent sa maîtrise

2. Pour chaque compétence, crée 2 questions comportementales (STAR) qui permettent d'évaluer objectivement le niveau de maîtrise :
   - Une question sur une expérience passée révélatrice
   - Une question situationnelle liée aux défis spécifiques du poste

3. Élabore une échelle d'évaluation à 5 niveaux pour chaque compétence :
   - Décris les comportements observables à chaque niveau
   - Inclus des exemples concrets de réponses correspondant à chaque niveau
   - Ajoute des questions de relance pour approfondir si nécessaire

4. Conçois une section d'évaluation de l'adéquation culturelle :
   - Questions révélant l'alignement avec nos valeurs [liste des valeurs]
   - Grille d'interprétation des réponses

5. Propose une structure d'entretien chronologique optimale :
   - Séquence logique des questions
   - Durée recommandée pour chaque section
   - Conseils pour les transitions entre thèmes

6. Fournis des recommandations pour minimiser les biais d'évaluation.`}
          />

          <PromptCard
            id="analyse-cv"
            title="Analyse approfondie de CV"
            description="Analysez objectivement les CV des candidats en fonction des critères spécifiques du poste et des priorités de recrutement."
            techniques={["Contextual Augmentation"]}
            icon={<FileText className="h-6 w-6 text-amber-600" />}
            opportunityType="Assistance"
            prompt={`Technique : Contextual Augmentation | Quadrant : Assistance | Complexité : Modérée

En tenant compte de la description de poste suivante :
[Insérer description complète du poste]

Et des priorités spécifiques de notre recrutement :
[Insérer critères prioritaires, contexte d'équipe, défis spécifiques]

Analyse de façon approfondie ce CV :
[Insérer CV complet]

Ta réponse doit inclure :

1. SYNTHÈSE EXÉCUTIVE :
   Une évaluation globale de l'adéquation du candidat (sur 10) avec justification concise

2. ANALYSE DÉTAILLÉE :
   - Compétences techniques : évaluation point par point vs nos exigences
   - Expérience pertinente : analyse qualitative des réalisations alignées avec nos besoins
   - Parcours professionnel : cohérence et progression, indicateurs de performance
   - Formation et certifications : pertinence et actualité
   - Signaux d'alerte potentiels : lacunes, incohérences ou questions à explorer

3. RECOMMANDATIONS D'ENTRETIEN :
   - Décision recommandée (rejeter/entretien téléphonique/entretien complet)
   - Questions spécifiques à poser pour clarifier les zones d'incertitude
   - Aspects à approfondir en priorité lors de l'entretien

4. POTENTIEL ÉLARGI :
   Si ce candidat n'est pas adapté pour ce poste spécifique, identifie d'autres postes dans l'organisation qui pourraient correspondre à son profil.`}
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
      </main>
      <Footer />
    </div>
  )
}
