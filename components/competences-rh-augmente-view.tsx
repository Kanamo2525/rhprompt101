"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import Link from "next/link"
import { ArticleImage } from "@/components/ui/article-image"
import { ArticleSchema } from "@/components/article-schema"
import { usePathname } from "next/navigation"
import { ArticleHeading } from "./article-heading"

export function CompetencesRhAugmenteView() {
  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : pathname

  // Track scroll position to highlight the current section in the table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2[id], h3[id]")
      let currentSection = ""

      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < 100) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Add structured data for SEO
  const articleTitle = "Les compétences clés du RH augmenté par l'IA"
  const articleDescription =
    "Comment les professionnels RH peuvent développer les compétences nécessaires pour tirer parti de l'IA générative."
  const articleImageUrl = "/images/enhancing-key-skills.jpeg"

  return (
    <div className="bg-white min-h-screen">
      {/* Schema.org structured data */}
      <ArticleSchema
        title={articleTitle}
        description={articleDescription}
        datePublished="2025-04-22"
        authorName="Kristy Anamoutou"
        authorImage="/images/kristy-anamoutou.jpeg"
        imageUrl={articleImageUrl}
        url={fullUrl}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-0 lg:max-w-screen-md py-10">
        {/* Article header */}
        <ArticleHeading level={1} className="mb-4 tracking-tight">
          Les compétences clés du RH augmenté par l'IA
        </ArticleHeading>

        {/* Replace avatar div here */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="/images/kristy-anamoutou.jpeg" alt="Kristy Anamoutou" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-medium text-black">Kristy Anamoutou</div>
            <div className="text-gray-500 text-sm">22 Avril 2025 · 15 min de lecture</div>
          </div>
        </div>

        {/* Table of contents - visible on larger screens */}
        <div className="hidden lg:block fixed right-4 top-32 w-64 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Sommaire</h4>
          <nav className="space-y-2 text-sm">
            <a
              href="#introduction"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "introduction" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Introduction
            </a>
            <a
              href="#reconfiguration"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "reconfiguration" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              La reconfiguration du territoire professionnel RH
            </a>
            <a
              href="#meta-competences"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "meta-competences" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Les méta-compétences du RH augmenté
            </a>
            <a
              href="#taxonomie"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "taxonomie" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              La taxonomie des compétences en prompting
            </a>
            <a
              href="#profils"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "profils" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              L'émergence de nouveaux profils hybrides
            </a>
            <a
              href="#developpement"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "developpement" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Le développement systématique des compétences
            </a>
            <a
              href="#transformation"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "transformation" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              La transformation identitaire
            </a>
            <a
              href="#conclusion"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "conclusion" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Conclusion
            </a>
          </nav>
        </div>

        {/* Article content */}
        <article className="prose prose-lg max-w-none text-black">
          <ArticleHeading level={2} id="introduction" className="scroll-mt-20 mt-8 mb-4">
            Réinventer l'expertise humaine à l'ère de l'intelligence artificielle générative
          </ArticleHeading>
          <p className="text-black">
            À l'aube de cette transformation que constitue l'IA générative, la fonction Ressources Humaines se
            trouve à un carrefour décisif. Ce n'est pas simplement un nouvel outil qui s'offre à elle, mais bien une
            reconfiguration fondamentale de son essence et de sa contribution stratégique. En 2025, alors que de nombreux
            départements RH ont déjà intégré l'IA dans leurs processus et réalisent des premiers gains de productivité
            , la question n'est plus de savoir <em>si</em> cette transformation aura lieu, mais{" "}
            <em>comment</em> les professionnels RH peuvent se réinventer pour l'orchestrer.
          </p>
          <p className="text-black">
            Cette métamorphose nous invite à repenser les compétences qui définiront le RH de demain. Non pas comme une
            simple adaptation technique, mais comme une réinvention identitaire profonde. Car l'enjeu véritable
            transcende largement la maîtrise d'outils – il touche à notre conception même de l'expertise humaine dans un
            monde augmenté par l'intelligence artificielle.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection%20%285%29-yVAyMv85yjVtAzOqLTnvV2uGQbCaQe.png"
            alt="Les compétences du RH augmenté"
            width={700}
            height={700}
            caption="Transformation du RH à l'Ère de l'IA"
          />

          <ArticleHeading level={2} id="reconfiguration" className="scroll-mt-20 mt-8 mb-4">
            I. La reconfiguration du territoire professionnel RH
          </ArticleHeading>
          <p className="text-black">
            L'émergence de l'IA générative provoque un mouvement tectonique dans le paysage des responsabilités RH. Ce
            séisme redessine les contours de la profession selon trois dynamiques simultanées.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            L'obsolescence programmée des tâches opérationnelles
          </ArticleHeading>
          <p className="text-black">
            Le premier mouvement, le plus visible, concerne l'automatisation progressive des activités standardisées.
            Les données sont éloquentes : 65% des tâches administratives documentaires pourraient désormais être
            automatisées, tandis que la rédaction procédurale (offres d'emploi, contrats types, communications
            standardisées) s'effectue en quelques secondes plutôt qu'en heures.
          </p>
          <p className="text-black">
            Cette obsolescence ne constitue pas une menace, mais une libération. Elle signale l'érosion des activités à
            faible valeur ajoutée qui, historiquement, ont consumé l'essentiel du temps et de l'énergie des équipes RH.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            La transformation qualitative des fonctions traditionnelles
          </ArticleHeading>
          <p className="text-black">
            Le deuxième mouvement, plus subtil, concerne la métamorphose des fonctions traditionnelles. Les missions
            perdurent mais leur nature se transforme radicalement :
          </p>
          <ul>
            <li className="text-black">
              L'analyse RH évolue de la description rétrospective à la prospective stratégique
            </li>
            <li className="text-black">
              Le recrutement passe de l'évaluation procédurale à l'orchestration d'expériences candidates
            </li>
            <li className="text-black">
              La formation se transforme de la production de contenus standardisés à l'architecture d'écosystèmes
              apprenants
            </li>
            <li className="text-black">La gestion administrative devient ingénierie de processus augmentés</li>
          </ul>
          <p className="text-black">
            Cette transformation qualitative exige non pas l'abandon des expertises existantes, mais leur
            reconfiguration fondamentale.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            L'émergence de nouveaux territoires professionnels
          </ArticleHeading>
          <p className="text-black">
            Le troisième mouvement, peut-être le plus fascinant, concerne l'apparition de territoires professionnels
            inédits. Ces espaces d'expertise émergents n'existaient tout simplement pas dans les référentiels
            traditionnels :
          </p>
          <ul>
            <li className="text-black">Éthique appliquée de l'IA en contexte RH</li>
            <li className="text-black">Ingénierie des interactions humain-IA</li>
            <li className="text-black">Conception d'architectures décisionnelles augmentées</li>
            <li className="text-black">Orchestration d'écosystèmes d'intelligence collective</li>
          </ul>
          <p className="text-black">
            Ces nouveaux territoires ne sont pas de simples extensions du domaine existant – ils constituent des champs
            d'expertise fondamentalement nouveaux qui exigent des compétences hybrides à l'intersection des sciences
            humaines, du design et de la technologie.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection%20%284%29-2FMC0XtVDvZvKBvwWURlSUKbEZ5Y6x.png"
            alt="Évolution du RH augmenté"
            width={700}
            height={500}
            caption="Évolution du RH augmenté: de procédural à personnalisé"
          />

          <ArticleHeading level={2} id="meta-competences" className="scroll-mt-20 mt-8 mb-4">
            II. Les méta-compétences du RH augmenté
          </ArticleHeading>
          <p className="text-black">
            Au-delà des compétences techniques spécifiques, trois méta-compétences émergent comme fondamentalement
            distinctives du RH augmenté. Ces capacités transcendantes redéfinissent l'expertise RH à l'ère de
            l'intelligence artificielle.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection-Ghkz1agVWiiWV1k8vpsSaCAZ5Iowgr.png"
            alt="Méta-compétences du RH augmenté"
            width={700}
            height={500}
            caption="Les trois méta-compétences fondamentales du RH augmenté"
          />

          <ArticleHeading level={3} className="mt-6 mb-3">
            La pensée systémique augmentée
          </ArticleHeading>
          <p className="text-black">
            La première méta-compétence concerne la capacité à appréhender les interconnexions complexes entre
            dimensions humaines, organisationnelles et technologiques. Cette pensée systémique augmentée permet de :
          </p>
          <ul>
            <li className="text-black">Modéliser les dynamiques sociotechniques dans leur globalité</li>
            <li className="text-black">Analyser les boucles de rétroaction et effets d'amplification</li>
            <li className="text-black">Anticiper les conséquences non intentionnelles des transformations</li>
            <li className="text-black">Concevoir des interventions à effet de levier maximal</li>
          </ul>
          <p className="text-black">
            Cette compétence transcende la vision fragmentée traditionnelle pour embrasser une perspective holistique où
            chaque intervention est pensée dans son impact écosystémique global. Elle s'apparente à ce que Peter Senge
            nommait la "cinquième discipline", mais augmentée par les capacités analytiques de l'IA.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            L'intelligence collaborative hybride
          </ArticleHeading>
          <p className="text-black">
            La deuxième méta-compétence concerne l'aptitude à orchestrer la collaboration optimale entre intelligences
            humaines et artificielles. Cette capacité d'hybridation cognitive permet de :
          </p>
          <ul>
            <li className="text-black">Concevoir des interfaces cognitives humain-IA optimisées</li>
            <li className="text-black">Calibrer les équilibres décisionnels entre algorithmes et jugement humain</li>
            <li className="text-black">Faciliter les dynamiques créatives augmentées par l'IA</li>
            <li className="text-black">Développer des modèles opératoires symbiotiques plutôt que substitutifs</li>
          </ul>
          <p className="text-black">
            Cette compétence se situe à l'avant-garde de ce que certains chercheurs nomment la "cognition distribuée".
            Elle transforme le professionnel RH en architecte d'écosystèmes où intelligences humaines et artificielles
            se renforcent mutuellement plutôt que de se concurrencer.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Le leadership transformationnel éthique
          </ArticleHeading>
          <p className="text-black">
            La troisième méta-compétence concerne la capacité à guider les transformations organisationnelles tout en
            garantissant leur alignement éthique. Ce leadership augmenté permet de :
          </p>
          <ul>
            <li className="text-black">Articuler explicitement valeurs humaines et potentialités technologiques</li>
            <li className="text-black">Établir une gouvernance participative des systèmes sociotechniques</li>
            <li className="text-black">Réguler les tensions inhérentes aux transformations profondes</li>
            <li className="text-black">Assurer l'inclusivité et l'équité des dispositifs augmentés</li>
          </ul>
          <p className="text-black">
            Cette compétence positionne le professionnel RH comme gardien de l'humanité au cœur des transformations
            technologiques. Elle incarne ce que le philosophe Hans Jonas nommait le "principe responsabilité" appliqué à
            l'ère de l'intelligence artificielle.
          </p>

          <ArticleHeading level={2} id="taxonomie" className="scroll-mt-20 mt-8 mb-4">
            III. La taxonomie des compétences en prompting
          </ArticleHeading>
          <p className="text-black">
            Au cœur de ces méta-compétences se trouve une capacité technique fondamentale : la maîtrise du prompting.
            Cette compétence, comparable à ce que fut l'utilisation du pack Office dans les années 2000, s'articule autour de
            quatre niveaux de maîtrise qui correspondent à des seuils qualitatifs distincts.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection%20%281%29-RIiMCsWcugebFh7CrHaPdoEFXib4S4.png"
            alt="Hiérarchie de la Maîtrise du Prompting"
            width={700}
            height={600}
            caption="Les quatre niveaux de maîtrise du prompting en RH"
          />

          <ArticleHeading level={3} className="mt-6 mb-3">
            Niveau 1 : L'utilisateur fonctionnel
          </ArticleHeading>
          <p className="text-black">
            Le premier niveau correspond à la capacité à formuler des requêtes simples et directes, en utilisant
            principalement les techniques Zero-Shot et One-Shot Prompting. L'utilisateur fonctionnel comprend les
            principes d'instruction claire et peut automatiser des tâches répétitives ou générer des contenus
            standardisés.
          </p>
          <p className="text-black">
            À ce niveau, le professionnel RH peut déjà réaliser des gains d'efficience significatifs : génération
            d'offres d'emploi, production de communications standards, synthèse d'informations basiques. C'est la porte
            d'entrée indispensable qui permet de libérer du temps pour des tâches à plus forte valeur ajoutée.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Niveau 2 : Le praticien méthodique
          </ArticleHeading>
          <p className="text-black">
            Le deuxième niveau correspond à la maîtrise de techniques structurées comme le Few-Shot Prompting et le
            Template Filling. Le praticien méthodique sait adapter les prompts selon le contexte et itérer pour affiner
            les résultats progressivement.
          </p>
          <p className="text-black">
            À ce niveau, le professionnel RH peut développer une assistance analytique sophistiquée : personnalisation
            modérée de parcours collaborateurs, analyse de données d'engagement, préparation méthodique d'entretiens
            structurés. Ces capacités correspondent au quadrant "Assistance" de la matrice d'opportunités, optimisant
            les processus existants sans les transformer radicalement.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Niveau 3 : L'expert contextuel
          </ArticleHeading>
          <p className="text-black">
            Le troisième niveau correspond à l'application fluide de techniques avancées comme le RCT (Rôle, Contexte,
            Tâche), le Chain-of-Thought et le Contextual Augmentation. L'expert contextuel intègre profondément le
            contexte organisationnel dans ses prompts et adapte finement les interactions aux spécificités métier.
          </p>
          <p className="text-black">
            À ce niveau, le professionnel RH entre véritablement dans le quadrant "Augmentation" : co-création de
            parcours d'apprentissage hautement personnalisés, conception d'expériences d'intégration
            transformationnelles, élaboration de stratégies d'engagement innovantes. C'est ici que l'IA devient un
            véritable partenaire créatif plutôt qu'un simple outil.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Niveau 4 : L'architecte systémique
          </ArticleHeading>
          <p className="text-black">
            Le quatrième niveau correspond à l'orchestration de techniques multiples et à la conception de systèmes
            prompts interdépendants. L'architecte systémique optimise continuellement ses approches basées sur l'analyse
            des patterns d'interaction et développe une compréhension métacognitive des processus collaboratifs
            humain-IA.
          </p>
          <p className="text-black">
            À ce niveau, le professionnel RH explore le quadrant "Avant-Garde" : innovation disruptive, reconception
            paradigmatique des approches RH, création de systèmes sociotechniques inédits. Cette maîtrise permet
            d'inventer de nouvelles modalités de gestion du capital humain plutôt que simplement d'optimiser l'existant.
          </p>

          <ArticleHeading level={2} id="profils" className="scroll-mt-20 mt-8 mb-4">
            IV. L'émergence de nouveaux profils hybrides
          </ArticleHeading>
          <p className="text-black">
            Cette reconfiguration des compétences s'incarne progressivement dans l'émergence de nouveaux profils
            professionnels hybrides. Ces "archétypes" du RH augmenté préfigurent la cristallisation institutionnelle de
            la transformation en cours.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection%20%282%29-l0CxElWKGKLS9E5mMqkgTqyJg0Xc5t.png"
            alt="Rôles RH Augmentés et Compétences"
            width={700}
            height={600}
            caption="Les quatre profils émergents du RH augmenté par l'IA"
          />

          <ArticleHeading level={3} className="mt-6 mb-3">
            L'architecte RH augmenté
          </ArticleHeading>
          <p className="text-black">
            Positionné au niveau de la direction RH et des comités stratégiques, ce profil conçoit les systèmes
            sociotechniques RH et gouverne la transformation organisationnelle. Ses compétences distinctives incluent la
            vision systémique, le design organisationnel, l'éthique appliquée et le leadership transformationnel.
          </p>
          <p className="text-black">
            L'architecte RH augmenté incarne parfaitement la fusion entre vision stratégique traditionnelle et maîtrise
            des potentialités transformationnelles de l'IA. Il redéfinit fondamentalement l'expérience collaborateur à
            travers le prisme des possibilités augmentées.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            L'orchestrateur d'expériences collaborateurs
          </ArticleHeading>
          <p className="text-black">
            Situé à l'interface entre RH et métiers, ce profil conçoit et déploie des expériences collaborateurs
            personnalisées et augmentées. Ses compétences distinctives incluent le design thinking, la psychologie
            augmentée, les data sciences appliquées et la facilitation complexe.
          </p>
          <p className="text-black">
            L'orchestrateur transcende les silos traditionnels (recrutement, formation, engagement) pour créer un
            continuum d'expérience fluide et cohérent tout au long du cycle de vie collaborateur, optimisé par
            l'intelligence artificielle.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            L'ingénieur de processus RH augmentés
          </ArticleHeading>
          <p className="text-black">
            Positionné dans les centres d'expertise RH, ce profil conçoit et optimise les processus intégrant dimensions
            humaines et IA. Ses compétences distinctives incluent la modélisation de processus complexes, la
            programmation avancée, l'ergonomie cognitive et l'anthropologie organisationnelle.
          </p>
          <p className="text-black">
            L'ingénieur de processus RH augmentés représente l'évolution naturelle des experts fonctionnels
            traditionnels, transformant leur maîtrise technique en capacité d'orchestration augmentée.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Le facilitateur d'intelligence collective
          </ArticleHeading>
          <p className="text-black">
            Évoluant au sein des communautés de pratique et réseaux transversaux, ce profil amplifie les capacités
            collectives via l'orchestration humain-IA. Ses compétences distinctives incluent l'animation de réseaux, la
            curation de connaissances, le design collaboratif et le prompting stratégique.
          </p>
          <p className="text-black">
            Le facilitateur d'intelligence collective incarne la dimension la plus sociale de la transformation, créant
            les conditions d'une intelligence augmentée distribuée plutôt que centralisée.
          </p>

          <ArticleHeading level={2} id="developpement" className="scroll-mt-20 mt-8 mb-4">
            V. Le développement systématique des compétences
          </ArticleHeading>
          <p className="text-black">
            Comment développer méthodiquement ces nouvelles compétences ? L'analyse des organisations performantes
            révèle une approche structurée articulée autour de quatre piliers complémentaires.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection%20%283%29-1jfrOoeVC2sictC2BspSyWjPWr3LwM.png"
            alt="Parcours de formation séquentiel"
            width={700}
            height={500}
            caption="Parcours de développement des compétences en IA pour les professionnels RH"
          />

          <ArticleHeading level={3} className="mt-6 mb-3">
            Le parcours de formation séquentiel
          </ArticleHeading>
          <p className="text-black">
            Un curriculum progressif permet une montée en compétence cohérente à travers les différents niveaux de
            maîtrise. Ce parcours s'articule typiquement en modules de 3 à 4 semaines chacun :
          </p>
          <ul>
            <li className="text-black">
              Module 1 : Fondamentaux conceptuels et techniques de base (Zero-Shot, One-Shot)
            </li>
            <li className="text-black">
              Module 2 : Techniques intermédiaires et cas d'application RH (Few-Shot, Template Filling)
            </li>
            <li className="text-black">
              Module 3 : Approches avancées et intégration contextuelle (RCT, Chain-of-Thought)
            </li>
            <li className="text-black">Module 4 : Orchestration systémique et innovation méthodologique</li>
          </ul>
          <p className="text-black">
            Chaque module alterne apprentissage théorique, démonstrations guidées, pratique encadrée et application en
            contexte réel. Cette progression graduelle respecte les seuils cognitifs d'adaptation et permet une
            appropriation durable.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            La communauté de pratique institutionnalisée
          </ArticleHeading>
          <p className="text-black">
            L'établissement d'un réseau d'apprentissage entre pairs transcende l'approche traditionnelle de formation
            pour instaurer une dynamique d'intelligence collective autour de l'IA. Cette communauté remplit trois
            fonctions essentielles :
          </p>
          <ul>
            <li className="text-black">Mutualisation des expérimentations et apprentissages</li>
            <li className="text-black">Soutien psychosocial face à l'incertitude</li>
            <li className="text-black">Production de normes et standards émergents</li>
          </ul>
          <p className="text-black">
            Cette dimension sociale de l'apprentissage s'avère particulièrement cruciale face à l'anxiété identitaire
            que peut susciter la transformation.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            La bibliothèque organisationnelle de prompts
          </ArticleHeading>
          <p className="text-black">
            La constitution d'un référentiel partagé et commenté de prompts efficaces permet d'accélérer
            considérablement la courbe d'apprentissage collective. Cette bibliothèque :
          </p>
          <ul>
            <li className="text-black">Catégorise les prompts par domaine fonctionnel et objectif</li>
            <li className="text-black">Documente le contexte d'utilisation et les résultats obtenus</li>
            <li className="text-black">Propose des variantes et optimisations pour différents cas d'usage</li>
            <li className="text-black">Évolue selon un processus de curation collaborative</li>
          </ul>
          <p className="text-black">
            Ce dispositif de capitalisation cognitive représente bien plus qu'un simple recueil technique – il constitue
            une externalisation de l'intelligence collective augmentée de l'organisation.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            La pratique réflexive institutionnalisée
          </ArticleHeading>
          <p className="text-black">
            L'instauration de routines organisationnelles favorisant l'analyse métacognitive des pratiques constitue un
            facteur critique d'amélioration continue. Ces pratiques incluent :
          </p>
          <ul>
            <li className="text-black">Sessions d'analyse comparative des approches de prompting</li>
            <li className="text-black">Retours d'expérience structurés sur les cas complexes</li>
            <li className="text-black">Documentation systématique des innovations méthodologiques</li>
            <li className="text-black">Challenges collaboratifs d'optimisation des prompts existants</li>
          </ul>
          <p className="text-black">
            Cette dimension réflexive transforme chaque expérience d'utilisation en opportunité d'apprentissage
            collectif, créant un cercle vertueux d'amélioration continue.
          </p>

          <ArticleHeading level={2} id="transformation" className="scroll-mt-20 mt-8 mb-4">
            VI. La transformation identitaire : au-delà des compétences
          </ArticleHeading>
          <p className="text-black">
            Au-delà des compétences techniques et organisationnelles, la transformation la plus profonde touche à
            l'identité même du professionnel RH. Cette métamorphose identitaire s'articule autour de cinq évolutions
            paradigmatiques qui définissent le RH augmenté de 2030.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Les%20compe%CC%81tences%20cle%CC%81s%20du%20RH%20augmente%CC%81%20par%20l%27IA%20-%20visual%20selection%20%284%29-2FMC0XtVDvZvKBvwWURlSUKbEZ5Y6x.png"
            alt="Évolution du RH augmenté"
            width={700}
            height={600}
            caption="Les cinq évolutions paradigmatiques du RH augmenté"
          />

          <ArticleHeading level={3} className="mt-6 mb-3">
            Du procédural au conceptuel
          </ArticleHeading>
          <p className="text-black">
            La première évolution concerne le passage d'une logique procédurale à une posture conceptuelle. Le RH
            augmenté n'est plus exécutant de procédures standardisées mais concepteur d'expériences humaines
            significatives et d'architectures relationnelles innovantes.
          </p>
          <p className="text-black">
            Cette évolution correspond à un déplacement fondamental d'une vision mécaniste du travail vers une approche
            organique, où les processus ne sont plus figés mais adaptables et centrés sur l'expérience humaine.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            De l'opérationnel au stratégique
          </ArticleHeading>
          <p className="text-black">
            La deuxième évolution concerne l'élévation du positionnement RH dans la hiérarchie décisionnelle. Libéré des
            contraintes administratives, le RH augmenté devient architecte du capital humain et social, influençant
            directement les orientations fondamentales de l'organisation.
          </p>
          <p className="text-black">
            Cette évolution transforme la fonction RH de centre de coût en créateur de valeur stratégique, avec une
            représentation systématique dans les instances dirigeantes et un impact mesurable sur la performance
            globale.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Du fragmenté au systémique
          </ArticleHeading>
          <p className="text-black">
            La troisième évolution concerne la dissolution des silos fonctionnels traditionnels. Les frontières entre
            recrutement, formation, performance et autres sous-domaines s'estompent au profit d'une approche intégrative
            centrée sur le cycle de vie collaborateur dans sa globalité.
          </p>
          <p className="text-black">
            Cette évolution transcende la spécialisation excessive qui a caractérisé la professionnalisation RH des
            dernières décennies, pour revenir à une vision holistique augmentée par les capacités intégratives de l'IA.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            Du réactif à l'anticipatif
          </ArticleHeading>
          <p className="text-black">
            La quatrième évolution concerne le rapport au temps et à l'action. La libération capacitaire couplée aux
            outils d'analyse prédictive permet un basculement d'une posture réactive à une approche anticipative des
            transformations de l'environnement de travail.
          </p>
          <p className="text-black">
            Cette évolution positionne la fonction RH comme radar stratégique de l'organisation, captant les signaux
            faibles et orchestrant les adaptations nécessaires avant même la matérialisation complète des tendances
            émergentes.
          </p>

          <ArticleHeading level={3} className="mt-6 mb-3">
            De la standardisation à la personnalisation
          </ArticleHeading>
          <p className="text-black">
            La cinquième évolution concerne le passage d'une logique industrielle standardisée à une approche hautement
            personnalisée. L'IA générative permet enfin de résoudre le dilemme historique entre standardisation
            nécessaire et personnalisation souhaitée.
          </p>
          <p className="text-black">
            Cette évolution répond à une attente sociétale profonde d'individualisation de l'expérience professionnelle,
            tout en maintenant la cohérence organisationnelle grâce à une orchestration algorithmique sophistiquée.
          </p>

          <ArticleHeading level={2} id="conclusion" className="scroll-mt-20 mt-8 mb-4">
            Conclusion : Le RH comme architecte de l'avenir du travail
          </ArticleHeading>
          <p className="text-black">
            À l'horizon 2030, la fonction RH "augmentée" ne sera pas simplement une version optimisée de l'existant,
            mais une réinvention fondamentale de sa nature et de sa contribution à l'organisation. Cette métamorphose la
            positionnera comme architecte de l'avenir du travail, navigant à l'interface critique entre technologie,
            organisation et humanité.
          </p>
          <p className="text-black">
            Le développement des compétences évoquées dans cet article ne constitue pas une simple adaptation technique,
            mais l'émergence d'une nouvelle identité professionnelle. Une identité où le RH devient gardien de
            l'humanité au cœur de la transformation technologique, orchestrateur de la symbiose entre intelligence
            humaine et artificielle.
          </p>
          <p className="text-black">
            Cette transformation ne diminue pas la valeur du professionnel RH – elle la réinvente et la démultiplie.
            Dans un monde où l'automatisation progresse inexorablement, la fonction RH augmentée par l'IA incarnera plus
            que jamais l'intelligence relationnelle, contextuelle et éthique qui demeure l'apanage irréductible de
            l'humain.
          </p>
          <p className="text-black">
            La question cruciale pour chaque professionnel RH n'est donc pas "Comment survivre à l'IA ?" mais "Comment
            réinventer mon expertise pour orchestrer cette transformation ?". Car paradoxalement, plus l'intelligence
            artificielle progresse, plus la fonction ressources humaines devient stratégiquement incontournable – à
            condition d'embrasser sa métamorphose plutôt que de s'y opposer.
          </p>
          <p className="text-black">
            Le futur appartient aux responsables RH augmentés qui sauront incarner cette transformation paradigmatique – non comme
            une menace à leur identité professionnelle, mais comme son accomplissement le plus élevé.
          </p>
        </article>

        {/* Replace author info div here */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <img src="/images/kristy-anamoutou.jpeg" alt="Kristy Anamoutou" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-lg text-black">Kristy Anamoutou</div>
              <div className="text-gray-600 mt-1">
                Chief Technology & Product Officer ⎮ Operations, Products, and Services powered by intelligence: human,
                collective, and artificial ✨.
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-xl mb-6 text-black">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Link href="/article" className="hover:underline">
                <h4 className="font-semibold text-lg mb-2 text-black">La transformation des RH par l'IA générative</h4>
                <p className="text-gray-600">
                  Une analyse stratégique des opportunités et défis de l'IA générative dans la fonction ressources
                  humaines
                </p>
              </Link>
            </div>
            <div>
              <Link href="/article/impact-ia-rh" className="hover:underline">
                <h4 className="font-semibold text-lg mb-2 text-black">Mesurer l'impact de l'IA générative en RH</h4>
                <p className="text-gray-600">
                  Au-delà des promesses, la nécessité d'une évaluation systémique pour démontrer la valeur de l'IA en RH
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Retour en haut"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
