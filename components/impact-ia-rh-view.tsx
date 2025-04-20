"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronUp, Download, Maximize, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArticleImage } from "@/components/ui/article-image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Dans la partie initiale du fichier, ajoutons le schéma structuré
import { ArticleSchema } from "@/components/article-schema"
import { usePathname } from "next/navigation"
import { ArticleHeading } from "./article-heading"

export function ImpactIaRhView() {
  const pathname = usePathname()
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : pathname

  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [tableZoom, setTableZoom] = useState<Record<string, number>>({})

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

  // Function to download table as CSV
  const downloadTableAsCSV = (tableId: string) => {
    const table = document.getElementById(tableId)
    if (!table) return

    const rows = table.querySelectorAll("tr")
    const csv = []

    for (let i = 0; i < rows.length; i++) {
      const row = []
      const cols = rows[i].querySelectorAll("td, th")

      for (let j = 0; j < cols.length; j++) {
        // Replace any commas in the cell text to avoid CSV parsing issues
        const text = cols[j].textContent?.replace(/,/g, ";") || ""
        // Wrap in quotes to handle multi-line content
        row.push(`"${text}"`)
      }

      csv.push(row.join(","))
    }

    const csvContent = csv.join("\n")
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)

    link.setAttribute("href", url)
    link.setAttribute("download", `${tableId}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to handle table zoom
  const handleTableZoom = (tableId: string, direction: "in" | "out") => {
    setTableZoom((prev) => {
      const currentZoom = prev[tableId] || 1
      let newZoom = currentZoom

      if (direction === "in" && currentZoom < 1.5) {
        newZoom = currentZoom + 0.1
      } else if (direction === "out" && currentZoom > 0.7) {
        newZoom = currentZoom - 0.1
      }

      return { ...prev, [tableId]: newZoom }
    })
  }

  // Enhanced table component with zoom and download capabilities
  const EnhancedTable = ({ id, title, children }: { id: string; title?: string; children: React.ReactNode }) => {
    const zoom = tableZoom[id] || 1

    return (
      <div className="my-8 overflow-hidden">
        {title && <h4 className="text-lg font-semibold mb-2">{title}</h4>}
        <div className="border rounded-lg">
          <div className="bg-gray-50 p-2 flex justify-between items-center border-b">
            <span className="text-sm font-medium text-gray-700">{title || id}</span>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => handleTableZoom(id, "out")}>
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Réduire</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => handleTableZoom(id, "in")}>
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Agrandir</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => downloadTableAsCSV(id)}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Télécharger CSV</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw]">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">{title || id}</h3>
                    <div className="overflow-auto max-h-[70vh]">
                      <div className="transform-gpu" style={{ transform: `scale(1.2)`, transformOrigin: "top left" }}>
                        {children}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" onClick={() => downloadTableAsCSV(id)}>
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger CSV
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div
              className="transform-gpu transition-transform duration-200"
              style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Schema.org structured data */}
      <ArticleSchema
        title="Mesurer l'impact de l'IA générative en RH : Au-delà des promesses, la nécessité d'une évaluation systémique"
        description="Comment évaluer rigoureusement l'impact de l'IA générative en RH avec un cadre multidimensionnel intégrant efficience opérationnelle, valeur qualitative, et transformation organisationnelle."
        datePublished="2025-04-25"
        authorName="Kristy Anamoutou"
        authorImage="/images/kristy-anamoutou.jpeg"
        imageUrl="/images/measuring-ai-impact.jpeg"
        url={fullUrl}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-0 lg:max-w-screen-md py-10">
        {/* Article header */}
        <ArticleHeading level={1} className="mb-4 tracking-tight">
          Mesurer l'impact de l'IA générative en RH : Au-delà des promesses, la nécessité d'une évaluation systémique
        </ArticleHeading>

        {/* Article header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="/images/kristy-anamoutou.jpeg" alt="Kristy Anamoutou" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-medium text-black">Kristy Anamoutou</div>
            <div className="text-gray-500 text-sm">25 Avril 2025 · 14 min de lecture</div>
          </div>
        </div>

        {/* Table of contents - visible on larger screens */}
        <div className="hidden lg:block fixed right-4 top-32 w-64 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Sommaire</h4>
          <nav className="space-y-2 text-sm">
            <a
              href="#mirage-metrique"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "mirage-metrique" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Du mirage métrique à l'évaluation transformationnelle
            </a>
            <a
              href="#cadre-evaluation"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "cadre-evaluation" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Un cadre d'évaluation à la hauteur des transformations
            </a>
            <a
              href="#methodologie"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "methodologie" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Une méthodologie d'évaluation scientifique
            </a>
            <a
              href="#tableaux-bord"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "tableaux-bord" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Tableaux de bord différenciés
            </a>
            <a
              href="#cas-formation"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "cas-formation" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              La formation : un cas d'application
            </a>
            <a
              href="#communiquer"
              className={`block py-1 border-l-2 pl-3 transition-colors ${activeSection === "communiquer" ? "border-black text-black font-medium" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
            >
              Communiquer stratégiquement sur les résultats
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
          <p className="lead italic text-black">
            Dans un monde où l'enthousiasme technologique précède souvent la démonstration de valeur, l'évaluation
            rigoureuse de l'impact de l'IA générative en ressources humaines devient un impératif stratégique. Entre
            réduction des coûts et transformation paradigmatique, comment construire une méthodologie d'évaluation à la
            hauteur des enjeux?
          </p>

          <ArticleHeading level={2} id="mirage-metrique" className="scroll-mt-20">
            Du mirage métrique à l'évaluation transformationnelle
          </ArticleHeading>
          <p className="text-black">
            La tentation est grande, face à l'IA générative, de répliquer les approches évaluatives traditionnelles –
            économies réalisées, temps gagné, volumes traités. Cette perspective, bien que nécessaire, s'avère
            dramatiquement insuffisante. Elle occulte la nature profondément transformationnelle de ces technologies qui
            ne se contentent pas d'optimiser l'existant, mais reconfigurèrent fondamentalement la pratique RH elle-même.
          </p>
          <p className="text-black">
            L'histoire des transformations technologiques majeures nous enseigne une leçon invariable : les
            organisations qui extraient le maximum de valeur ne sont pas celles qui mesurent avec le plus de précision
            l'amélioration d'indicateurs traditionnels, mais celles qui perçoivent et évaluent la métamorphose
            qualitative des possibles qu'elles engendrent.
          </p>
          <p className="text-black">
            Comme l'expliquait brillamment le philosophe des techniques Gilbert Simondon, toute technologie
            véritablement disruptive ne se limite jamais à faire mieux ce qui existait déjà – elle rend possible ce qui
            était auparavant inconcevable. La véritable mesure d'impact doit capturer cette dimension d'ouverture
            paradigmatique.
          </p>

          <ArticleHeading level={2} id="cadre-evaluation" className="scroll-mt-20">
            Un cadre d'évaluation à la hauteur des transformations
          </ArticleHeading>
          <p className="text-black">
            L'analyse des organisations pionnières révèle une approche évaluative multidimensionnelle qui transcende les
            métriques opérationnelles simples. Ce cadre intègre quatre dimensions complémentaires qui, ensemble,
            permettent d'appréhender l'impact systémique de l'IA générative en RH.
          </p>

          <ArticleHeading level={3} className="font-semibold mt-6">
            1. Efficience opérationnelle quantifiable
          </ArticleHeading>
          <p className="text-black">
            Cette dimension, la plus immédiatement mesurable, concerne l'optimisation des ressources et la productivité
            directe :
          </p>
          <ul>
            <li>
              <strong>Réduction des temps de traitement</strong> (ex: génération d'offres d'emploi -75% chez Segula
              Technologies)
            </li>
            <li>
              <strong>Économies budgétaires directes</strong> (ex: réduction des coûts de recrutement -30% selon BCG)
            </li>
            <li>
              <strong>Volumétrie traitée</strong> (ex: screening CV multiplié par 5)
            </li>
            <li>
              <strong>Ratio d'automatisation des tâches</strong> (ex: 44% des processus administratifs)
            </li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            2. Valeur qualitative générée
          </ArticleHeading>
          <p className="text-black">
            Cette dimension, plus subtile mais stratégiquement décisive, concerne l'amélioration de la qualité des
            livrables et services RH :
          </p>
          <ul>
            <li>
              <strong>Personnalisation accrue</strong> (ex: amélioration de l'indicateur de pertinence formation +70%)
            </li>
            <li>
              <strong>Consistance des processus</strong> (ex: réduction de la variabilité des entretiens -40%)
            </li>
            <li>
              <strong>Satisfaction des parties prenantes</strong> (ex: NPS des managers +25pts)
            </li>
            <li>
              <strong>Profondeur analytique</strong> (ex: augmentation des insights actionnables +65%)
            </li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            3. Redistribution de la valeur temps
          </ArticleHeading>
          <p className="text-black">
            Cette dimension transformationnelle concerne la réallocation des capacités humaines vers des activités à
            plus forte valeur ajoutée :
          </p>
          <ul>
            <li>
              <strong>Temps consacré au conseil stratégique</strong> (ex: augmentation de 16% à 38%)
            </li>
            <li>
              <strong>Capacité d'accompagnement personnalisé</strong> (ex: doublement du temps d'interaction directe)
            </li>
            <li>
              <strong>Investissement en innovation RH</strong> (ex: création de labs d'expérimentation)
            </li>
            <li>
              <strong>Développement professionnel</strong> (ex: augmentation de 8h/mois/personne)
            </li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            4. Impact organisationnel systémique
          </ArticleHeading>
          <p className="text-black">
            Cette dimension, la plus stratégique, concerne la contribution aux objectifs fondamentaux de l'organisation
            :
          </p>
          <ul>
            <li>
              <strong>Vitesse d'adaptation organisationnelle</strong> (ex: réduction de 40% du temps de déploiement des
              transformations)
            </li>
            <li>
              <strong>Rétention des talents</strong> (ex: amélioration de 4pts du taux de rétention)
            </li>
            <li>
              <strong>Engagement collaborateur</strong> (ex: progression de +7pts sur l'indice d'engagement)
            </li>
            <li>
              <strong>Attractivité employeur</strong> (ex: augmentation de 35% des candidatures spontanées)
            </li>
          </ul>

          <p className="text-black">
            La puissance de ce cadre réside moins dans chaque mesure isolée que dans leur articulation systémique. Les
            organisations performantes construisent progressivement une chaîne d'impact depuis l'efficience
            opérationnelle jusqu'aux résultats stratégiques, validant ainsi la contribution fondamentale de l'IA
            générative à la création de valeur organisationnelle.
          </p>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesurer%20l%E2%80%99impact%20de%20l%E2%80%99IA%20ge%CC%81ne%CC%81rative%20en%20RH%20_%20au-dela%CC%80%20des%20promesses%2C%20la%20ne%CC%81cessite%CC%81%20d%E2%80%99une%20e%CC%81valuation%20syste%CC%81mique%20-%20visual%20selection-oLUrX8rdsw6AayRShXSWY0xzNJuZkT.png"
            alt="Cadre d'évaluation de l'impact de l'IA en RH"
            width={700}
            height={500}
            caption="Les quatre dimensions d'évaluation de l'impact de l'IA générative en RH"
          />

          <ArticleHeading level={2} id="methodologie" className="scroll-mt-20">
            Une méthodologie d'évaluation scientifique plutôt qu'anecdotique
          </ArticleHeading>
          <p className="text-black">
            La crédibilité des gains revendiqués repose fondamentalement sur la rigueur méthodologique de leur
            évaluation. Trop souvent, l'enthousiasme technologique engendre des affirmations d'impact fondées sur des
            anecdotes plutôt que sur une méthodologie robuste. Une approche véritablement scientifique s'articule autour
            de quatre principes fondamentaux :
          </p>

          <ArticleHeading level={3} className="font-semibold mt-6">
            1. Établissement de baselines robustes
          </ArticleHeading>
          <ul>
            <li>Documentation détaillée des processus avant transformation</li>
            <li>Collecte systématique des métriques opérationnelles sur période significative</li>
            <li>Cartographie qualitative des pratiques et perceptions</li>
            <li>Analyse des coûts directs et indirects complets</li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            2. Approche expérimentale contrôlée
          </ArticleHeading>
          <ul>
            <li>Déploiements par phases avec groupes témoins quand possible</li>
            <li>Contrôle méthodique des variables contextuelles</li>
            <li>Tests A/B sur processus comparables</li>
            <li>Analyses contrefactuelles documentées</li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            3. Triangulation méthodologique
          </ArticleHeading>
          <ul>
            <li>Combinaison de données quantitatives et qualitatives</li>
            <li>Croisement des perspectives (utilisateurs, bénéficiaires, parties prenantes)</li>
            <li>Mesures directes et indirectes</li>
            <li>Évaluations subjectives et objectives</li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            4. Temporalité adaptée aux effets mesurés
          </ArticleHeading>
          <ul>
            <li>Mesures immédiates pour l'efficience opérationnelle</li>
            <li>Évaluations à moyen terme pour les transformations qualitatives</li>
            <li>Analyses longitudinales pour les impacts systémiques</li>
            <li>Réévaluations périodiques pour capturer les effets d'apprentissage</li>
          </ul>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesurer%20l%E2%80%99impact%20de%20l%E2%80%99IA%20ge%CC%81ne%CC%81rative%20en%20RH%20_%20au-dela%CC%80%20des%20promesses%2C%20la%20ne%CC%81cessite%CC%81%20d%E2%80%99une%20e%CC%81valuation%20syste%CC%81mique%20-%20visual%20selection%20%281%29-yxfCyhBKnwEjoEtWvkH8YX0sa1jMXT.png"
            alt="Méthodologie d'évaluation scientifique"
            width={700}
            height={500}
            caption="Approche méthodologique pour une évaluation scientifique de l'impact de l'IA"
          />

          <ArticleHeading level={2} id="tableaux-bord" className="scroll-mt-20">
            Tableaux de bord différenciés selon les quadrants d'opportunité
          </ArticleHeading>
          <p className="text-black">
            L'évaluation pertinente d'une initiative d'IA générative dépend fondamentalement de son positionnement
            stratégique. Notre matrice d'opportunités identifie quatre quadrants – Automatisation, Assistance,
            Augmentation, Avant-Garde – chacun impliquant des critères d'évaluation distincts reflétant leurs finalités
            stratégiques différenciées.
          </p>

          <ArticleHeading level={3} className="font-semibold mt-6">
            Quadrant Automatisation : L'excellence opérationnelle
          </ArticleHeading>
          <EnhancedTable id="tableau-automatisation" title="Quadrant Automatisation : L'excellence opérationnelle">
            <table id="tableau-automatisation" className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Métriques fondamentales
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Indicateurs de performance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Benchmark de référence
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Efficience</td>
                  <td className="px-6 py-4 text-black">Réduction du temps de traitement</td>
                  <td className="px-6 py-4 text-black">50-70% pour les tâches standardisées</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Consistance</td>
                  <td className="px-6 py-4 text-black">Taux d'erreur avant/après</td>
                  <td className="px-6 py-4 text-black">Réduction {">"}80% des erreurs d'exécution</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Volumétrie</td>
                  <td className="px-6 py-4 text-black">Capacité de traitement maximale</td>
                  <td className="px-6 py-4 text-black">Multiplication par 3-5 des volumes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">ROI opérationnel</td>
                  <td className="px-6 py-4 text-black">Libération de capacité RH</td>
                  <td className="px-6 py-4 text-black">25-35% du temps réorienté</td>
                </tr>
              </tbody>
            </table>
          </EnhancedTable>

          <ArticleHeading level={3} className="font-semibold mt-6">
            Quadrant Assistance : L'excellence analytique et décisionnelle
          </ArticleHeading>
          <EnhancedTable id="tableau-assistance" title="Quadrant Assistance : L'excellence analytique et décisionnelle">
            <table id="tableau-assistance" className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Métriques fondamentales
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Indicateurs de performance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Benchmark de référence
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Pertinence</td>
                  <td className="px-6 py-4 text-black">Taux d'adoption par les professionnels RH</td>
                  <td className="px-6 py-4 text-black">{">"}70% d'adoption volontaire</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Contextualisation</td>
                  <td className="px-6 py-4 text-black">Utilité perçue des recommandations</td>
                  <td className="px-6 py-4 text-black">Amélioration de 40-60% de la satisfaction</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Accessibilité</td>
                  <td className="px-6 py-4 text-black">Temps de formation à la maîtrise</td>
                  <td className="px-6 py-4 text-black">{"<"}5h pour maîtrise fonctionnelle</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Complémentarité</td>
                  <td className="px-6 py-4 text-black">Impact sur la qualité décisionnelle</td>
                  <td className="px-6 py-4 text-black">30-40% d'amélioration des décisions</td>
                </tr>
              </tbody>
            </table>
          </EnhancedTable>

          <ArticleHeading level={3} className="font-semibold mt-6">
            Quadrant Augmentation : L'excellence transformationnelle
          </ArticleHeading>
          <EnhancedTable id="tableau-augmentation" title="Quadrant Augmentation : L'excellence transformationnelle">
            <table id="tableau-augmentation" className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Métriques fondamentales
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Indicateurs de performance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Benchmark de référence
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Personnalisation</td>
                  <td className="px-6 py-4 text-black">Degré de granularité adaptative</td>
                  <td className="px-6 py-4 text-black">Facteur x10-x100 vs approche standard</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Co-création</td>
                  <td className="px-6 py-4 text-black">Émergence de solutions inédites</td>
                  <td className="px-6 py-4 text-black">25-40% de solutions non anticipées</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Innovation</td>
                  <td className="px-6 py-4 text-black">Indices d'innovation des solutions</td>
                  <td className="px-6 py-4 text-black">Génération de brevets/méthodes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Engagement</td>
                  <td className="px-6 py-4 text-black">Impact sur expérience collaborateur</td>
                  <td className="px-6 py-4 text-black">+15-25pts Net Promoter Score</td>
                </tr>
              </tbody>
            </table>
          </EnhancedTable>

          <ArticleHeading level={3} className="font-semibold mt-6">
            Quadrant Avant-Garde : L'excellence disruptive
          </ArticleHeading>
          <EnhancedTable id="tableau-avant-garde" title="Quadrant Avant-Garde : L'excellence disruptive">
            <table id="tableau-avant-garde" className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Métriques fondamentales
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Indicateurs de performance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Benchmark de référence
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Disruption</td>
                  <td className="px-6 py-4 text-black">Potentiel de redéfinition procédurale</td>
                  <td className="px-6 py-4 text-black">Création de nouveaux standards</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Scalabilité</td>
                  <td className="px-6 py-4 text-black">Capacité de généralisation</td>
                  <td className="px-6 py-4 text-black">Adoption cross-divisions {">"}50%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Adaptabilité</td>
                  <td className="px-6 py-4 text-black">Flexibilité aux contextes émergents</td>
                  <td className="px-6 py-4 text-black">Auto-adaptation sans recodage</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Avantage compétitif</td>
                  <td className="px-6 py-4 text-black">Différentiation sur marché talents</td>
                  <td className="px-6 py-4 text-black">Positionnement pionnier reconnu</td>
                </tr>
              </tbody>
            </table>
          </EnhancedTable>

          <ArticleHeading level={2} id="cas-formation" className="scroll-mt-20">
            La formation : un cas d'application révélateur
          </ArticleHeading>
          <p className="text-black">
            Le domaine de la formation illustre parfaitement la nécessité d'une approche évaluative multidimensionnelle.
            Dans ce secteur, les organisations performantes ont développé un tableau de bord intégré qui permet de
            capturer la valeur holistique créée par l'IA générative.
          </p>

          <EnhancedTable id="tableau-formation" title="Tableau de bord intégré pour la formation">
            <table id="tableau-formation" className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Catégorie de métriques
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Indicateurs clés
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Source des données
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Benchmark cible
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Efficience opérationnelle</td>
                  <td className="px-6 py-4 text-black">
                    • Temps de production pédagogique
                    <br />• Coût par heure de formation
                    <br />• Ratio personnalisation/ressources
                  </td>
                  <td className="px-6 py-4 text-black">
                    Données projets
                    <br />
                    Données financières
                    <br />
                    Analytics formation
                  </td>
                  <td className="px-6 py-4 text-black">50-70% d'amélioration vs processus traditionnels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Efficacité pédagogique</td>
                  <td className="px-6 py-4 text-black">
                    • Taux d'acquisition des compétences
                    <br />• Profondeur d'apprentissage
                    <br />• Taux de transfert en situation
                  </td>
                  <td className="px-6 py-4 text-black">
                    Évaluations
                    <br />
                    Observations
                    <br />
                    Entretiens managers
                  </td>
                  <td className="px-6 py-4 text-black">25-40% d'amélioration vs formats standardisés</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Expérience apprenant</td>
                  <td className="px-6 py-4 text-black">
                    • Engagement (temps, interactions)
                    <br />• Satisfaction NPS
                    <br />• Auto-efficacité perçue
                  </td>
                  <td className="px-6 py-4 text-black">
                    LMS analytics
                    <br />
                    Enquêtes
                    <br />
                    Données comportementales
                  </td>
                  <td className="px-6 py-4 text-black">
                    NPS {">"} 45
                    <br />
                    Engagement +40% vs formations traditionnelles
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Impact organisationnel</td>
                  <td className="px-6 py-4 text-black">
                    • Évolution des indicateurs de performance
                    <br />• Contribution aux objectifs stratégiques
                    <br />• ROI formatif
                  </td>
                  <td className="px-6 py-4 text-black">
                    KPIs business
                    <br />
                    Enquêtes climat
                    <br />
                    Analyses longitudinales
                  </td>
                  <td className="px-6 py-4 text-black">
                    ROI {">"} 300%
                    <br />
                    Impact mesurable sur KPIs métier
                  </td>
                </tr>
              </tbody>
            </table>
          </EnhancedTable>

          <p className="text-black">
            Cette approche intégrée permet de démontrer non seulement les gains d'efficience (réduction de 70% du temps
            de conception pédagogique), mais également l'amélioration qualitative (score d'applicabilité perçue de 4,7/5
            vs 3,2/5 pour les formations traditionnelles) et l'impact transformationnel (amélioration mesurée des
            compétences de +29%).
          </p>

          <ArticleHeading level={2} id="communiquer" className="scroll-mt-20">
            Communiquer stratégiquement sur les résultats
          </ArticleHeading>
          <p className="text-black">
            La mesure rigoureuse des impacts ne suffit pas – encore faut-il les valoriser efficacement auprès des
            parties prenantes. Les organisations performantes développent une stratégie de communication différenciée :
          </p>

          <ArticleHeading level={3} className="font-semibold mt-6">
            1. Segmentation stratégique des audiences
          </ArticleHeading>

          <EnhancedTable id="tableau-communication" title="Stratégie de communication par audience">
            <table id="tableau-communication" className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Partie prenante
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Focus prioritaire
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Métriques privilégiées
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Format optimal
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Direction générale</td>
                  <td className="px-6 py-4 text-black">Contribution stratégique</td>
                  <td className="px-6 py-4 text-black">
                    Impact organisationnel
                    <br />
                    ROI quantifié
                  </td>
                  <td className="px-6 py-4 text-black">
                    Synthèse exécutive
                    <br />
                    Visualisations
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Managers opérationnels</td>
                  <td className="px-6 py-4 text-black">Bénéfices concrets</td>
                  <td className="px-6 py-4 text-black">
                    Gains de temps
                    <br />
                    Amélioration qualitative
                  </td>
                  <td className="px-6 py-4 text-black">Cas d'usage concrets</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Équipes RH</td>
                  <td className="px-6 py-4 text-black">Évolution du rôle</td>
                  <td className="px-6 py-4 text-black">
                    Valorisation professionnelle
                    <br />
                    Nouvelles compétences
                  </td>
                  <td className="px-6 py-4 text-black">Parcours transformation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Collaborateurs</td>
                  <td className="px-6 py-4 text-black">Expérience utilisateur</td>
                  <td className="px-6 py-4 text-black">
                    Personnalisation
                    <br />
                    Accessibilité services
                  </td>
                  <td className="px-6 py-4 text-black">Démonstrations interactives</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">Partenaires sociaux</td>
                  <td className="px-6 py-4 text-black">Éthique et gouvernance</td>
                  <td className="px-6 py-4 text-black">
                    Transparence processus
                    <br />
                    Impact sur l'emploi
                  </td>
                  <td className="px-6 py-4 text-black">Documentation complète</td>
                </tr>
              </tbody>
            </table>
          </EnhancedTable>

          <ArticleHeading level={3} className="font-semibold mt-6">
            2. Narration transformationnelle
          </ArticleHeading>
          <p className="text-black">
            La construction d'un récit cohérent transcendant les chiffres bruts donne sens à la transformation :
          </p>
          <ul>
            <li>Articulation autour d'une vision aspirationnelle claire</li>
            <li>Mise en perspective historique et évolutive</li>
            <li>Personnification à travers des parcours individuels</li>
            <li>Équilibre entre résultats tangibles et potentiel futur</li>
          </ul>

          <ArticleHeading level={3} className="font-semibold mt-6">
            3. Matérialisation expérientielle
          </ArticleHeading>
          <p className="text-black">
            La traduction des gains abstraits en expériences concrètes facilite l'appropriation :
          </p>
          <ul>
            <li>Démonstrations immersives avant/après</li>
            <li>Visualisations d'impact dynamiques</li>
            <li>Témoignages authentiques multi-niveaux</li>
            <li>Célébration ritualisée des étapes franchies</li>
          </ul>

          <ArticleImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesurer%20l%E2%80%99impact%20de%20l%E2%80%99IA%20ge%CC%81ne%CC%81rative%20en%20RH%20_%20au-dela%CC%80%20des%20promesses%2C%20la%20ne%CC%81cessite%CC%81%20d%E2%80%99une%20e%CC%81valuation%20syste%CC%81mique%20-%20visual%20selection%20%282%29-O5KcV9hIaCV4fomuPMBYd16Kq7SiEA.png"
            alt="Stratégies de communication efficaces"
            width={700}
            height={500}
            caption="Les trois niveaux de la stratégie de communication des résultats d'impact de l'IA en RH"
          />

          <ArticleHeading level={2} id="conclusion" className="scroll-mt-20">
            Conclusion : Vers une culture de l'évaluation transformationnelle
          </ArticleHeading>
          <p className="text-black">
            L'IA générative en RH ne représente pas simplement une évolution technologique, mais bien une mutation
            paradigmatique de la fonction ressources humaines. Son évaluation exige donc une approche qui transcende les
            métriques conventionnelles pour capturer sa dimension transformationnelle.
          </p>
          <p className="text-black">
            Les organisations qui réussissent cette évaluation partagent trois caractéristiques fondamentales :
          </p>
          <ol>
            <li>
              Elles <strong>adoptent une vision multidimensionnelle de la valeur</strong>, intégrant efficience
              opérationnelle, transformation qualitative, redistribution des capacités et impact systémique
            </li>
            <li>
              Elles <strong>déploient une méthodologie rigoureuse d'évaluation</strong>, avec baselines robustes,
              approche expérimentale et temporalité adaptée
            </li>
            <li>
              Elles <strong>articulent une narration stratégique cohérente</strong>, communiquant différemment selon les
              parties prenantes tout en maintenant une vision d'ensemble
            </li>
          </ol>
          <p className="text-black">
            Dans un contexte où le déploiement de l'IA générative s'accélère, la capacité à mesurer rigoureusement et
            communiquer stratégiquement sur sa valeur constituera un différenciateur concurrentiel majeur. Car comme le
            soulignait W. Edward Deming, "ce qui ne se mesure pas, ne s'améliore pas" – à condition de mesurer ce qui compte vraiment.
          </p>

          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              Cet article s'inspire des recherches menées pour l'élaboration du "Guide pratique de l'IA pour les
              RH", synthétisant les meilleures pratiques des organisations pionnières dans l'intégration de l'IA
              générative au sein de leur fonction ressources humaines.
            </p>
          </div>
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
              <Link href="/article" className="hover:underline">
                <h4 className="font-semibold text-lg mb-2 text-black">La transformation des RH par l'IA générative</h4>
                <p className="text-gray-600">
                  Une analyse stratégique des opportunités et défis de l'IA générative dans la fonction ressources
                  humaines
                </p>
              </Link>
            </div>
            <div>
              <Link href="/article/competences-rh-augmente" className="hover:underline">
                <h4 className="font-semibold text-lg mb-2 text-black">Les compétences clés du RH augmenté par l'IA</h4>
                <p className="text-gray-600">
                  Comment les professionnels RH peuvent développer les compétences nécessaires pour tirer parti de l'IA
                  générative
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
