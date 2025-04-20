"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Info, Download, ZoomIn, ZoomOut, Grid, FileText } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Types pour notre structure de données
type OpportunityItem = {
  id: string
  category: string
  usageCase: string
  opportunityType: string
  x: number // Potentiel d'augmentation (0-100)
  y: number // Potentiel d'automatisation (0-100)
  promptingTechniques: string[]
  justification: string
}

// Remplacer les données de démonstration pour s'assurer que chaque point est dans le bon quadrant
const demoData = [
  {
    id: "1",
    category: "Recrutement",
    usageCase: "Rédaction d'offres d'emploi",
    opportunityType: "Automatisation",
    x: 30, // Faible potentiel d'augmentation
    y: 85, // Fort potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Tâche répétitive à fort volume",
  },
  {
    id: "2",
    category: "Recrutement",
    usageCase: "Optimisation du tri des CV",
    opportunityType: "Automatisation",
    x: 25, // Faible potentiel d'augmentation
    y: 80, // Fort potentiel d'automatisation
    promptingTechniques: ["Zero-Shot", "Few-Shot"],
    justification: "Processus standardisé à fort volume",
  },
  {
    id: "3",
    category: "Formation",
    usageCase: "Création de contenus de formation",
    opportunityType: "Avant-Garde",
    x: 75, // Fort potentiel d'augmentation
    y: 85, // Fort potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Transformation des méthodes pédagogiques",
  },
  {
    id: "4",
    category: "Formation",
    usageCase: "Contenus interactifs",
    opportunityType: "Avant-Garde",
    x: 80, // Fort potentiel d'augmentation
    y: 75, // Fort potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Innovation dans l'apprentissage",
  },
  {
    id: "5",
    category: "Recrutement",
    usageCase: "Préparation d'entretiens",
    opportunityType: "Assistance",
    x: 30, // Faible potentiel d'augmentation
    y: 30, // Faible potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Aide à la décision",
  },
  {
    id: "6",
    category: "Recrutement",
    usageCase: "Sourcing de candidats",
    opportunityType: "Assistance",
    x: 35, // Faible potentiel d'augmentation
    y: 40, // Faible potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Amplification des capacités analytiques",
  },
  {
    id: "7",
    category: "Onboarding",
    usageCase: "Programmes d'intégration",
    opportunityType: "Augmentation",
    x: 70, // Fort potentiel d'augmentation
    y: 30, // Faible potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Co-création personnalisée",
  },
  {
    id: "8",
    category: "Onboarding",
    usageCase: "Parcours d'apprentissage personnalisés",
    opportunityType: "Augmentation",
    x: 75, // Fort potentiel d'augmentation
    y: 35, // Faible potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Personnalisation avancée",
  },
  {
    id: "9",
    category: "Bien-être",
    usageCase: "Engagement des collaborateurs",
    opportunityType: "Augmentation",
    x: 80, // Fort potentiel d'augmentation
    y: 40, // Faible potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Personnalisation des interactions",
  },
  {
    id: "10",
    category: "Bien-être",
    usageCase: "Fidélisation des talents",
    opportunityType: "Augmentation",
    x: 85, // Fort potentiel d'augmentation
    y: 35, // Faible potentiel d'automatisation
    promptingTechniques: ["Chain-of-Thought", "Few-Shot"],
    justification: "Approche sur mesure",
  },
]

// Définir les descriptions des quadrants
const quadrantDescriptions = {
  Automatisation: "Optimisation des tâches répétitives",
  "Avant-Garde": "Transformation et innovation RH",
  Assistance: "Aide à la décision et support",
  Augmentation: "Amélioration des capacités humaines",
}

// Définir les couleurs pour chaque type d'opportunité
const opportunityColors = {
  Automatisation: "#1a73e8", // Blue
  "Avant-Garde": "#9c27b0", // Purple
  Assistance: "#f39c12", // Orange
  Augmentation: "#4caf50", // Green
}

// Définir les tooltips pour chaque quadrant
const quadrantTooltips = {
  Automatisation:
    "Concentrez-vous sur les tâches manuelles et répétitives qui peuvent être automatisées pour gagner en efficacité.",
  "Avant-Garde": "Explorez les nouvelles technologies et approches pour transformer radicalement les pratiques RH.",
  Assistance:
    "Utilisez l'IA pour aider les employés à prendre des décisions éclairées et à améliorer leur performance.",
  Augmentation:
    "Exploitez l'IA pour améliorer les compétences et les capacités des employés, en les rendant plus efficaces et performants.",
}

// Ajouter une fonction pour forcer le placement des points selon leur type d'opportunité
const enforceQuadrantPlacement = (item) => {
  const updatedItem = { ...item }

  // Forcer les coordonnées selon le type d'opportunité
  switch (updatedItem.opportunityType) {
    case "Automatisation":
      // Quadrant en haut à gauche: x faible (0-50), y élevé (50-100)
      updatedItem.x = Math.min(Math.max(updatedItem.x, 5), 45)
      updatedItem.y = Math.min(Math.max(updatedItem.y, 55), 95)
      break
    case "Avant-Garde":
      // Quadrant en haut à droite: x élevé (50-100), y élevé (50-100)
      updatedItem.x = Math.min(Math.max(updatedItem.x, 55), 95)
      updatedItem.y = Math.min(Math.max(updatedItem.y, 55), 95)
      break
    case "Assistance":
      // Quadrant en bas à gauche: x faible (0-50), y faible (0-50)
      updatedItem.x = Math.min(Math.max(updatedItem.x, 5), 45)
      updatedItem.y = Math.min(Math.max(updatedItem.y, 5), 45)
      break
    case "Augmentation":
      // Quadrant en bas à droite: x élevé (50-100), y faible (0-50)
      updatedItem.x = Math.min(Math.max(updatedItem.x, 55), 95)
      updatedItem.y = Math.min(Math.max(updatedItem.y, 5), 45)
      break
  }

  return updatedItem
}

export default function OpportunityMatrix({ casUsageData = [] }) {
  // Utiliser les données de démonstration si aucune donnée n'est fournie
  const data = useMemo(() => {
    if (!casUsageData || casUsageData.length === 0) {
      return demoData
    }

    // Vérifier que les données fournies ont le bon format
    try {
      return casUsageData.map((item, index) => {
        // S'assurer que x et y sont des nombres valides
        const x = Number.parseFloat(item.x) || Math.random() * 50 + 25
        const y = Number.parseFloat(item.y) || Math.random() * 50 + 25

        const baseItem = {
          id: item.id || `${index}`,
          category: item.category || "Non catégorisé",
          usageCase: item.usageCase || "Cas d'usage non spécifié",
          opportunityType: item.opportunityType || "Automatisation",
          x: Math.min(Math.max(x, 0), 100), // Limiter entre 0 et 100
          y: Math.min(Math.max(y, 0), 100), // Limiter entre 0 et 100
          promptingTechniques: item.promptingTechniques || [],
          justification: item.justification || "",
        }

        // Forcer le placement dans le bon quadrant
        return enforceQuadrantPlacement(baseItem)
      })
    } catch (error) {
      console.error("Erreur lors du traitement des données:", error)
      return demoData.map((item) => enforceQuadrantPlacement(item))
    }
  }, [casUsageData])

  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredItem, setHoveredItem] = useState<OpportunityItem | null>(null)
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  const [isEmptyTemplate, setIsEmptyTemplate] = useState<boolean>(false)

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))]
    return uniqueCategories
  }, [data])

  const filteredData = useMemo(() => {
    if (activeCategory === "all") {
      return data
    }
    return data.filter((item) => item.category === activeCategory)
  }, [data, activeCategory])

  const handleZoom = (direction: "in" | "out") => {
    if (direction === "in") {
      setZoomLevel((prev) => Math.min(prev + 0.1, 2))
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
    }
  }

  const toggleTemplateMode = () => {
    setIsEmptyTemplate((prev) => !prev)
  }

  const exportAsSVG = () => {
    const svg = document.getElementById("matrix-container")
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "opportunity_matrix.svg"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  // Define quadrant boundaries
  const midX = 50
  const midY = 50

  // Get items for each quadrant
  const getQuadrantItems = (
    items: OpportunityItem[],
    quadrant: "Automatisation" | "Avant-Garde" | "Assistance" | "Augmentation",
  ) => {
    return items.filter((item) => item.opportunityType === quadrant)
  }

  return (
    <TooltipProvider>
      <Card className="w-full max-w-5xl mx-auto mb-12">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-2">Matrice d'opportunités IA pour les RH</h2>
          <p className="text-center text-muted-foreground italic mb-6">
            Visualisation des cas d'usage par potentiel d'automatisation et d'augmentation
          </p>

          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full">
              <TabsTrigger value="all">Toutes les catégories</TabsTrigger>
              <TabsTrigger value="Recrutement et acquisition de talents">Recrutement</TabsTrigger>
              <TabsTrigger value="Onboarding et intégration">Onboarding</TabsTrigger>
              <TabsTrigger value="Formation et développement des compétences">Formation</TabsTrigger>
              <TabsTrigger value="Gestion des talents et mobilité interne">Talents</TabsTrigger>
              <TabsTrigger value="Support RH et relations collaborateurs">Support RH</TabsTrigger>
              <TabsTrigger value="Administration et processus RH">Administration</TabsTrigger>
              <TabsTrigger value="Santé et bien-être au travail">Bien-être</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap justify-between gap-2 mb-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleZoom("out")}>
                <ZoomOut className="h-4 w-4 mr-1" />
                Zoom -
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleZoom("in")}>
                <ZoomIn className="h-4 w-4 mr-1" />
                Zoom +
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={toggleTemplateMode}>
                {isEmptyTemplate ? (
                  <>
                    <Grid className="h-4 w-4 mr-1" />
                    Afficher les cas d'usage
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-1" />
                    Version vierge
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={exportAsSVG}>
                <Download className="h-4 w-4 mr-1" />
                Exporter SVG
              </Button>
            </div>
          </div>

          <div
            className="relative w-full aspect-[3/2] max-w-3xl mx-auto border-2 border-gray-300 rounded-md overflow-hidden"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
          >
            <svg
              id="matrix-container"
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Background */}
              <rect width="800" height="600" fill="white" />

              {/* Title */}
              <text x="400" y="40" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle">
                Matrice d'opportunités IA pour les RH
                {isEmptyTemplate ? " - Version vierge" : ""}
              </text>

              {/* Matrix outline */}
              <rect x="100" y="100" width="600" height="400" fill="none" stroke="#ccc" strokeWidth="2" />

              {/* Matrix quadrants */}
              <rect
                x="100"
                y="100"
                width="300"
                height="200"
                fill="#e6f7ff"
                stroke="#ccc"
                strokeWidth="1"
                opacity="0.7"
              />
              <rect
                x="400"
                y="100"
                width="300"
                height="200"
                fill="#f0e6ff"
                stroke="#ccc"
                strokeWidth="1"
                opacity="0.7"
              />
              <rect
                x="100"
                y="300"
                width="300"
                height="200"
                fill="#fff2e6"
                stroke="#ccc"
                strokeWidth="1"
                opacity="0.7"
              />
              <rect
                x="400"
                y="300"
                width="300"
                height="200"
                fill="#e6ffe6"
                stroke="#ccc"
                strokeWidth="1"
                opacity="0.7"
              />

              {/* Axes labels */}
              <text
                x="70"
                y="300"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                transform="rotate(-90, 70, 300)"
              >
                Potentiel d'automatisation
              </text>
              <text x="400" y="540" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle">
                Potentiel d'augmentation
              </text>

              {/* Arrows for axes */}
              <line x1="100" y1="500" x2="100" y2="80" stroke="#333" strokeWidth="2" />
              <polygon points="100,80 95,90 105,90" fill="#333" />

              <line x1="100" y1="500" x2="720" y2="500" stroke="#333" strokeWidth="2" />
              <polygon points="720,500 710,495 710,505" fill="#333" />

              {/* Label for high/low */}
              <text x="90" y="120" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="end">
                Élevé
              </text>
              <text x="90" y="480" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="end">
                Faible
              </text>
              <text x="120" y="520" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="start">
                Faible
              </text>
              <text x="680" y="520" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="end">
                Élevé
              </text>

              {/* Quadrant titles */}
              <text
                x="250"
                y="130"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
                fill="#1a73e8"
              >
                AUTOMATISATION
              </text>
              <text x="250" y="150" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#333">
                {quadrantDescriptions["Automatisation"]}
              </text>

              <text
                x="550"
                y="130"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
                fill="#9c27b0"
              >
                AVANT-GARDE
              </text>
              <text x="550" y="150" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#333">
                {quadrantDescriptions["Avant-Garde"]}
              </text>

              <text
                x="250"
                y="330"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
                fill="#f39c12"
              >
                ASSISTANCE
              </text>
              <text x="250" y="350" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#333">
                {quadrantDescriptions["Assistance"]}
              </text>

              <text
                x="550"
                y="330"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4caf50"
              >
                AUGMENTATION
              </text>
              <text x="550" y="350" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#333">
                {quadrantDescriptions["Augmentation"]}
              </text>

              {/* Plot the items - only if not in empty template mode */}
              {!isEmptyTemplate &&
                filteredData.map((item) => {
                  // Vérifier que x et y sont des nombres valides
                  const itemX = typeof item.x === "number" ? item.x : 50
                  const itemY = typeof item.y === "number" ? item.y : 50

                  // Calculate position based on x and y values (0-100)
                  const posX = 100 + (itemX / 100) * 600
                  const posY = 100 + ((100 - itemY) / 100) * 400 // Invert Y axis

                  // Determine color based on quadrant
                  const color = opportunityColors[item.opportunityType] || "#666"

                  return (
                    <g key={item.id}>
                      <circle cx={posX} cy={posY} r={hoveredItem?.id === item.id ? "7" : "5"} fill={color} />
                      {hoveredItem?.id === item.id && (
                        <g>
                          <rect
                            x={posX + 10}
                            y={posY - 30}
                            width="220"
                            height="60"
                            fill="white"
                            stroke={color}
                            strokeWidth="1"
                            rx="4"
                            opacity="0.95"
                          />
                          <text
                            x={posX + 20}
                            y={posY - 10}
                            fontFamily="Arial, sans-serif"
                            fontSize="12"
                            fontWeight="bold"
                          >
                            {item.usageCase}
                          </text>
                          <text x={posX + 20} y={posY + 5} fontFamily="Arial, sans-serif" fontSize="10">
                            {item.category}
                          </text>
                          <text
                            x={posX + 20}
                            y={posY + 20}
                            fontFamily="Arial, sans-serif"
                            fontSize="10"
                            fill={color}
                            fontWeight="bold"
                          >
                            {item.opportunityType}
                          </text>
                        </g>
                      )}
                    </g>
                  )
                })}

              {/* Grid lines for empty template to help with positioning */}
              {isEmptyTemplate && (
                <>
                  {/* Vertical grid lines */}
                  <line x1="250" y1="100" x2="250" y2="500" stroke="#ccc" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="400" y1="100" x2="400" y2="500" stroke="#ccc" strokeWidth="1" />
                  <line x1="550" y1="100" x2="550" y2="500" stroke="#ccc" strokeWidth="1" strokeDasharray="5,5" />

                  {/* Horizontal grid lines */}
                  <line x1="100" y1="200" x2="700" y2="200" stroke="#ccc" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="100" y1="300" x2="700" y2="300" stroke="#ccc" strokeWidth="1" />
                  <line x1="100" y1="400" x2="700" y2="400" stroke="#ccc" strokeWidth="1" strokeDasharray="5,5" />

                  {/* Percentage labels */}
                  <text x="95" y="200" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="end">
                    75%
                  </text>
                  <text x="95" y="300" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="end">
                    50%
                  </text>
                  <text x="95" y="400" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="end">
                    25%
                  </text>
                  <text x="250" y="515" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle">
                    25%
                  </text>
                  <text x="400" y="515" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle">
                    50%
                  </text>
                  <text x="550" y="515" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle">
                    75%
                  </text>
                </>
              )}
            </svg>

            {/* Interactive overlay for hover effects - only if not in empty template mode */}
            {!isEmptyTemplate && (
              <div className="absolute inset-0">
                {filteredData.map((item) => {
                  // Vérifier que x et y sont des nombres valides
                  const itemX = typeof item.x === "number" ? item.x : 50
                  const itemY = typeof item.y === "number" ? item.y : 50

                  // Calculate position based on x and y values (0-100)
                  const posX = (itemX / 100) * 100 + "%"
                  const posY = ((100 - itemY) / 100) * 100 + "%"

                  return (
                    <div
                      key={item.id}
                      className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ left: posX, top: posY }}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                    />
                  )
                })}
              </div>
            )}
          </div>

          {/* Legend - only show if not in empty template mode */}
          {!isEmptyTemplate && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: opportunityColors["Automatisation"] }}
                  ></div>
                  <span className="text-sm ml-2">Automatisation: {quadrantDescriptions["Automatisation"]}</span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: opportunityColors["Avant-Garde"] }}
                  ></div>
                  <span className="text-sm ml-2">Avant-Garde: {quadrantDescriptions["Avant-Garde"]}</span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: opportunityColors["Assistance"] }}
                  ></div>
                  <span className="text-sm ml-2">Assistance: {quadrantDescriptions["Assistance"]}</span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: opportunityColors["Augmentation"] }}
                  ></div>
                  <span className="text-sm ml-2">Augmentation: {quadrantDescriptions["Augmentation"]}</span>
                </div>
              </div>

              {/* Quadrant details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-blue-600 flex items-center gap-2">
                      AUTOMATISATION
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 cursor-help">
                            <Info className="h-3 w-3" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-white p-3 max-w-xs border border-blue-200 shadow-lg rounded-md"
                        >
                          <p className="text-sm">{quadrantTooltips["Automatisation"]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {getQuadrantItems(filteredData, "Automatisation").map((item) => (
                        <li key={item.id} className="text-sm">
                          • {item.usageCase}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-purple-600 flex items-center gap-2">
                      AVANT-GARDE
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-600 cursor-help">
                            <Info className="h-3 w-3" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-white p-3 max-w-xs border border-purple-200 shadow-lg rounded-md"
                        >
                          <p className="text-sm">{quadrantTooltips["Avant-Garde"]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {getQuadrantItems(filteredData, "Avant-Garde").map((item) => (
                        <li key={item.id} className="text-sm">
                          • {item.usageCase}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-orange-600 flex items-center gap-2">
                      ASSISTANCE
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-600 cursor-help">
                            <Info className="h-3 w-3" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-white p-3 max-w-xs border border-orange-200 shadow-lg rounded-md"
                        >
                          <p className="text-sm">{quadrantTooltips["Assistance"]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {getQuadrantItems(filteredData, "Assistance").map((item) => (
                        <li key={item.id} className="text-sm">
                          • {item.usageCase}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-green-600 flex items-center gap-2">
                      AUGMENTATION
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 cursor-help">
                            <Info className="h-3 w-3" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-white p-3 max-w-xs border border-green-200 shadow-lg rounded-md"
                        >
                          <p className="text-sm">{quadrantTooltips["Augmentation"]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {getQuadrantItems(filteredData, "Augmentation").map((item) => (
                        <li key={item.id} className="text-sm">
                          • {item.usageCase}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Instructions for empty template */}
          {isEmptyTemplate && (
            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Comment utiliser cette matrice</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Téléchargez la matrice vierge en cliquant sur le bouton "Exporter SVG"</li>
                <li>
                  Utilisez un logiciel d'édition d'images ou de SVG (comme Figma, Adobe Illustrator, ou même PowerPoint)
                </li>
                <li>
                  Placez vos propres cas d'usage sur la matrice en fonction de leur potentiel d'automatisation (axe
                  vertical) et d'augmentation (axe horizontal)
                </li>
                <li>Analysez la répartition de vos cas d'usage pour identifier les opportunités stratégiques</li>
              </ol>
              <p className="mt-4 text-sm text-gray-600">
                Pour revenir à la version complète avec les exemples, cliquez sur le bouton "Afficher les cas d'usage".
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
