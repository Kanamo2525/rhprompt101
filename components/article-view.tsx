"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import Link from "next/link"
import { ArticleImage } from "@/components/ui/article-image"
import { ArticleSchema } from "@/components/article-schema"
import { usePathname } from "next/navigation"

export function ArticleView() {
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
  const articleTitle = "La transformation des RH par l'IA générative : une analyse stratégique"
  const articleDescription =
    "Une analyse stratégique des opportunités et défis de l'IA générative dans la fonction ressources humaines."
  const articleImageUrl = "/images/transformation-rh-ia.png"

  return (
    <div className="bg-white">
      {/* Schema.org structured data */}
      <ArticleSchema
        title={articleTitle}
        description={articleDescription}
        datePublished="2025-04-20"
        authorName="Kristy Anamoutou"
        authorImage="/images/kristy-anamoutou.jpeg"
        imageUrl={articleImageUrl}
        url={fullUrl}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-0 lg:max-w-screen-md py-10">
        {/* Article header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-black">
          La transformation des RH par l'IA générative : une analyse stratégique
        </h1>

        <div className="flex items-center space-x-4 mb-8">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="/images/kristy-anamoutou.jpeg" alt="Kristy Anamoutou" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-medium text-black">Kristy Anamoutou</div>
            <div className="text-gray-500 text-sm">20 Avril 2025 · 12 min de lecture</div>
          </div>
        </div>

        {/* Table of contents - visible on larger screens */}
        <div className="hidden lg:block fixed right-4 top-32 w-64 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Sommaire</h4>
          <nav className="space-y-2 text-sm" aria-label="Sommaire de l'article">
            <a
              href="#premices"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "premices" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Les prémices d'une transformation
            </a>
            <a
              href="#diagonale"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "diagonale" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              La diagonale stratégique
            </a>
            <a
              href="#analyse"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "analyse" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Analyse fonctionnelle
            </a>
            <a
              href="#correlation"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "correlation" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              La corrélation techniques-opportunités
            </a>
            <a
              href="#strates"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "strates" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Les trois strates de la transformation
            </a>
            <a
              href="#implications"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "implications" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Les implications stratégiques
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
        <article className="prose prose-lg max-w-none">
          <h2 id="premices" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            Les prémices d'une transformation
          </h2>
          <p>
            L'analyse détaillée du tableau croisé des cas d'usage de l'IA générative en ressources humaines révèle non
            pas une simple évolution technologique, mais les prémices d'une transformation structurelle profonde de la
            fonction RH. Cette cartographie méthodique des 26 cas d'usage, classés selon notre matrice d'opportunités
            (Automatisation, Assistance, Augmentation, Avant-Garde), offre un observatoire privilégié des dynamiques
            émergentes qui redessinent le contour des ressources humaines contemporaines.
          </p>
          <p>
            Le premier constat est révélateur : la distribution actuelle des cas d'usage est fortement déséquilibrée
            avec 10 cas d'Automatisation (38%), 9 cas d'Assistance (35%), 5 cas d'Augmentation (19%) et seulement 2 cas
            d'Avant-Garde (8%).
          </p>
          <p>
            Cette asymétrie n'est pas anodine – elle traduit une approche encore majoritairement instrumentale de l'IA
            générative, perçue comme un levier d'efficience opérationnelle plutôt que comme un catalyseur de
            transformation paradigmatique.
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection-KPNniM6dOreofluoYlLg5mqkd6zIfB.png"
              alt="Répartition des cas d'usage RH"
              width={700}
              height={400}
              caption="Répartition des cas d'usage de l'IA générative en RH par type d'opportunité"
            />
          </figure>

          <h2 id="diagonale" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            La diagonale stratégique : du déploiement tactique à la transformation systémique
          </h2>
          <p>
            La répartition observée constitue ce que nous pourrions appeler une "diagonale stratégique" : un déploiement
            qui commence naturellement par les quadrants à plus faible intensité transformationnelle (Automatisation et
            Assistance) avant de progresser vers les territoires à plus fort potentiel disruptif (Augmentation et
            Avant-Garde).
          </p>
          <p>
            Cette trajectoire, loin d'être arbitraire, obéit à une logique d'apprentissage organisationnel. Les premiers
            succès dans les quadrants d'Automatisation et d'Assistance – réduction des délais de recrutement,
            amélioration de la qualité des communications, optimisation des processus administratifs – créent le capital
            confiance nécessaire pour explorer progressivement les territoires plus ambitieux de la co-création et de
            l'innovation radicale.
          </p>
          <p>
            Néanmoins, cette progression naturelle comporte un risque stratégique majeur : celui de confiner l'IA
            générative dans une fonction purement utilitaire. Les organisations qui resteraient prisonnières des
            quadrants inférieurs de la matrice passeraient à côté de la véritable révolution que constitue la
            réinvention fondamentale des modalités de gestion du capital humain.
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection%20%281%29-ADvsjlnTybnB7Clpn1rLTv9TCtT6eq.png"
              alt="Diagonale stratégique de la transformation RH par l'IA"
              width={700}
              height={700}
              caption="Diagonale stratégique de la transformation RH par l'IA"
            />
          </figure>

          <h2 id="analyse" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            Analyse fonctionnelle : les territoires inégaux de la transformation
          </h2>
          <p>
            L'examen des différents domaines fonctionnels RH fait apparaître des disparités significatives dans
            l'adoption des technologies génératives :
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection%20%282%29-1P0BHacmxE6yDUr8KFYIFAnXKTkke6.png"
              alt="Révolutionner les RH avec l'IA Générative"
              width={700}
              height={400}
              caption="Révolutionner les RH avec l'IA Générative pour l'Efficience et l'Innovation"
            />
          </figure>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">Le recrutement</h3>
          <p>
            Domaine précurseur avec une présence forte dans l'Automatisation (rédaction d'offres, tri des CV) et
            l'Assistance (préparation d'entretiens, sourcing), mais encore timide dans les quadrants supérieurs. Cette
            concentration sur l'efficience reflète la pression opérationnelle qui caractérise ce domaine, mais laisse
            inexploitées les opportunités de réinvention du paradigme même de l'acquisition de talents.
          </p>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">La formation et le développement</h3>
          <p>
            Secteur le plus équilibré, avec une présence dans les quatre quadrants, témoignant d'une maturité numérique
            supérieure et d'une ouverture à l'expérimentation. Cette avance peut s'expliquer par la nature même de ce
            domaine, traditionnellement plus perméable à l'innovation pédagogique et technologique.
          </p>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">L'administration RH</h3>
          <p>
            Concentration quasi-exclusive dans l'Automatisation, reflétant une vision encore largement transactionnelle
            de ces fonctions. Cette focalisation, si elle génère des gains d'efficience immédiats, risque de perpétuer
            une conception réductrice du rôle administratif des RH.
          </p>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">La santé et le bien-être au travail</h3>
          <p>
            Présence significative dans les quadrants d'Augmentation et d'Assistance, révélant une compréhension
            intuitive que ces domaines, profondément humains, nécessitent une approche collaborative plutôt que
            substitutive de l'IA.
          </p>

          <p>
            Cette hétérogénéité sectorielle n'est pas neutre : elle dessine en filigrane les contours d'une fonction RH
            à deux vitesses, où certains domaines embrassent pleinement le potentiel transformationnel de l'IA
            générative tandis que d'autres restent enfermés dans une logique d'optimisation incrémentale.
          </p>

          <h2 id="correlation" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            La corrélation techniques-opportunités : une sophistication croissante
          </h2>
          <p>
            L'analyse des techniques de prompting privilégiées selon les quadrants révèle une progression méthodologique
            significative :
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection%20%283%29-ABIkgsrYaUJ1LaVGlDIyYWXyikRu7r.png"
              alt="Techniques de prompting par type d'opportunité"
              width={700}
              height={400}
              caption="Techniques de prompting recommandées par type d'opportunité"
            />
          </figure>

          <ul>
            <li>
              Les cas d'Automatisation s'appuient majoritairement sur des techniques structurantes et simples (Template
              Filling, Zero-Shot, One-Shot)
            </li>
            <li>
              Les cas d'Assistance mobilisent des approches plus sophistiquées (Chain-of-Thought, Generated Knowledge)
            </li>
            <li>
              Les cas d'Augmentation recourent à des méthodes interactives et contextuelles (RCT, Iterative Prompting,
              Multi-Prompting)
            </li>
            <li>Les cas d'Avant-Garde privilégient les techniques spécialisées (Expert Role-Playing)</li>
          </ul>

          <p>
            Cette progression technique n'est pas simplement corrélative – elle est causale.{" "}
            <strong>
              La maîtrise des techniques avancées de prompting constitue un prérequis à l'exploration des quadrants
              supérieurs de notre matrice.
            </strong>{" "}
            En d'autres termes, l'accès aux territoires de la transformation profonde est conditionné par l'acquisition
            de compétences techniques sophistiquées.
          </p>
          <p>
            Cette observation a des implications stratégiques majeures :{" "}
            <strong>
              le développement des compétences en prompting avancé devient un investissement critique pour les
              organisations souhaitant exploiter pleinement le potentiel transformationnel de l'IA générative.
            </strong>{" "}
            Les organisations qui négligeraient cette dimension se condamneraient à rester dans les quadrants inférieurs
            de notre matrice, quelle que soit l'ambition de leur vision stratégique.
          </p>

          <h2 id="strates" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            Les trois strates de la transformation RH par l'IA générative
          </h2>
          <p>
            Au-delà de la simple classification des cas d'usage, notre analyse révèle trois strates distinctes de
            transformation que les organisations traversent successivement :
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection%20%286%29-ZewwuCIfEbdnBOsu3K3uh5riyqDQfJ.png"
              alt="Hiérarchie de la Transformation RH par l'IA"
              width={700}
              height={700}
              caption="Hiérarchie de la Transformation RH par l'IA"
            />
          </figure>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            1. La strate opérationnelle : l'efficience augmentée
          </h3>
          <p>
            Cette première couche, correspondant principalement aux quadrants d'Automatisation et d'Assistance, se
            caractérise par l'optimisation des processus existants. L'IA générative y joue un rôle d'amplificateur
            d'efficience : accélération des délais, réduction des coûts, amélioration de la qualité.
          </p>
          <p>
            Les bénéfices sont tangibles et rapides : les estimations du BCG suggèrent des gains de productivité allant
            jusqu'à 40% sur certains processus RH, illustrés par des cas comme la rédaction automatisée d'offres
            d'emploi ou la synthèse d'entretiens. Cette strate, bien que fondamentale, reste essentiellement une
            amélioration du système existant plutôt qu'une refonte.
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection%20%284%29-ubvRAmn2lAzui8IHSVLlSDyy3sAMTf.png"
              alt="Optimisation des processus RH avec l'IA"
              width={700}
              height={600}
              caption="Optimisation des processus RH avec l'IA"
            />
          </figure>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            2. La strate expérientielle : la personnalisation à grande échelle
          </h3>
          <p>
            Cette deuxième couche, correspondant principalement au quadrant d'Augmentation, marque un saut qualitatif
            significatif. L'IA générative ne se contente plus d'optimiser l'existant – elle permet de créer des
            expériences radicalement personnalisées à une échelle jusqu'alors inaccessible.
          </p>
          <p>
            Les programmes d'intégration sur mesure, les parcours d'apprentissage adaptatifs ou les plans de carrière
            individualisés illustrent cette capacité nouvelle à concilier personnalisation profonde et déploiement à
            grande échelle. Cette strate transforme fondamentalement l'expérience collaborateur, remplaçant l'uniformité
            des processus standardisés par une approche véritablement centrée sur l'individu.
          </p>

          <figure className="my-8">
            <ArticleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analyse%20des%20cas%20d%E2%80%99usages%20au%20sein%20de%20la%20matrice%20-%20visual%20selection%20%285%29-sI1WW3EioA6bcYBPGtAm0Yo9cuwQUs.png"
              alt="Cycle de personnalisation de l'IA générative"
              width={700}
              height={700}
              caption="Cycle de personnalisation de l'IA générative"
            />
          </figure>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            3. La strate paradigmatique : la réinvention des modèles
          </h3>
          <p>
            Cette troisième couche, correspondant au quadrant d'Avant-Garde et à certains cas avancés d'Augmentation,
            représente la transformation la plus profonde. L'IA générative ne se contente plus d'améliorer ou de
            personnaliser – elle permet de réimaginer fondamentalement les approches de gestion du capital humain.
          </p>
          <p>
            La création autonome de nouveaux formats pédagogiques, les stratégies inédites d'engagement et de
            fidélisation, ou les systèmes prédictifs de développement des talents illustrent cette capacité à
            transcender les paradigmes établis. Cette strate, encore émergente, porte en elle le potentiel de redéfinir
            radicalement la fonction RH.
          </p>

          <h2 id="implications" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            Les implications stratégiques pour les leaders RH
          </h2>
          <p>
            Notre analyse fait émerger quatre impératifs stratégiques pour les leaders RH souhaitant naviguer
            efficacement dans cette transformation :
          </p>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            1. Adopter une approche de portefeuille équilibré
          </h3>
          <p>
            La tentation est grande de concentrer les investissements sur les cas d'usage d'Automatisation et
            d'Assistance, qui offrent les retours les plus rapides et les moins risqués. Cette approche, bien que
            compréhensible à court terme, serait stratégiquement myope.
          </p>
          <p>Un portefeuille d'initiatives équilibré devrait inclure :</p>
          <ul>
            <li>40-50% de cas d'Automatisation pour l'efficience opérationnelle</li>
            <li>30-35% de cas d'Assistance pour l'amélioration décisionnelle</li>
            <li>15-20% de cas d'Augmentation pour l'innovation expérientielle</li>
            <li>5-10% de cas d'Avant-Garde pour l'exploration paradigmatique</li>
          </ul>
          <p>
            Cette distribution garantit simultanément des gains d'efficience immédiats et la préparation des
            transformations futures.
          </p>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            2. Investir stratégiquement dans les compétences de prompting avancé
          </h3>
          <p>
            Notre analyse révèle clairement que la sophistication technique en matière de prompting constitue le
            véritable goulot d'étranglement pour accéder aux quadrants supérieurs de notre matrice. Les organisations
            qui investiront stratégiquement dans le développement de ces compétences acquerront un avantage
            concurrentiel significatif.
          </p>
          <p>Cet investissement devrait prendre trois formes complémentaires :</p>
          <ul>
            <li>
              Formation intensive des professionnels RH aux techniques avancées (Chain-of-Thought, Multi-Prompting, RCT)
            </li>
            <li>Création de bibliothèques organisationnelles de prompts réutilisables et optimisés</li>
            <li>Développement de communautés de pratique internes pour accélérer le transfert de compétences</li>
          </ul>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            3. Repenser les architectures organisationnelles RH
          </h3>
          <p>
            La transformation par l'IA générative ne peut s'opérer pleinement dans les architectures organisationnelles
            traditionnelles. Les structures RH compartimentées, hiérarchiques et procédurales sont mal adaptées à
            l'exploitation optimale de ces nouvelles capacités.
          </p>
          <p>Les leaders RH doivent envisager de nouvelles configurations organisationnelles :</p>
          <ul>
            <li>Création d'équipes multidisciplinaires intégrant expertise RH et compétences techniques</li>
            <li>Mise en place de "labs d'innovation RH" dédiés à l'exploration des quadrants supérieurs</li>
            <li>
              Développement de modèles opérationnels agiles permettant l'expérimentation rapide et l'itération continue
            </li>
          </ul>

          <h3 className="font-semibold mt-6 text-xl text-black mb-3">
            4. Articuler une vision transformationnelle claire
          </h3>
          <p>
            La technologie seule ne suffit pas à transformer la fonction RH. Les leaders doivent articuler une vision
            transformationnelle claire qui donne sens et direction à ces évolutions.
          </p>
          <p>Cette vision doit répondre à trois questions fondamentales :</p>
          <ul>
            <li>Quelle valeur distinctive la fonction RH augmentée par l'IA va-t-elle créer pour l'organisation ?</li>
            <li>Comment cette transformation va-t-elle redéfinir l'identité professionnelle des équipes RH ?</li>
            <li>
              Quels nouveaux paradigmes de gestion du capital humain cette évolution va-t-elle permettre d'explorer ?
            </li>
          </ul>

          <h2 id="conclusion" className="scroll-mt-20 text-2xl font-bold text-black mt-8 mb-4">
            Conclusion : Au-delà de l'efficience, l'enjeu de la réinvention
          </h2>
          <p>
            Le tableau des cas d'usages RH révèle que nous sommes à l'aube d'une transformation profonde de la fonction
            ressources humaines. Au-delà des gains d'efficience immédiats, qui dominent actuellement le paysage des
            implémentations, c'est bien la réinvention fondamentale des approches de gestion du capital humain qui
            constitue l'enjeu véritable.
          </p>
          <p>
            Les organisations qui sauront naviguer cette transformation en adoptant une vision équilibrée, en
            investissant dans les compétences critiques, en repensant leurs structures et en articulant une vision
            ambitieuse, ne se contenteront pas d'optimiser leur fonction RH – elles la réinventeront.
          </p>
          <p>
            Dans un contexte où le capital humain constitue plus que jamais l'avantage concurrentiel décisif, cette
            réinvention pourrait bien représenter l'un des leviers de transformation organisationnelle les plus
            significatifs de la décennie à venir. La véritable question n'est donc pas de savoir si les RH seront
            transformées par l'IA générative, mais quelle place les leaders RH choisiront d'occuper dans cette
            transformation inéluctable – spectateurs ou architectes du changement.
          </p>
        </article>

        {/* Author info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <img src="/images/kristy-anamoutou.jpeg" alt="Kristy Anamoutou" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-lg text-black">Kristy Anamoutou</div>
              <div className="text-gray-600 mt-1">
                Chief Technology & Product Officer ⎮ Operations, Products, and Services powered by intelligence: human,
                collective, and artificial ✨
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-xl mb-6 text-black">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Link href="/article/competences-rh-augmente" className="hover:underline">
                <h4 className="font-semibold text-lg mb-2 text-black">Les compétences clés du RH augmenté par l'IA</h4>
                <p className="text-gray-600">
                  Comment les professionnels RH peuvent développer les compétences nécessaires pour tirer parti de l'IA
                  générative
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
