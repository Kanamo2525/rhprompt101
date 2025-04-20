"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, Download, ZoomIn, ZoomOut } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Couleurs pour chaque type d'opportunité
const opportunityColors = {
  Automatisation: "#1a73e8",
  "Avant-Garde": "#9c27b0",
  Assistance: "#f39c12",
  Augmentation: "#4caf50",
}

// Descriptions pour chaque quadrant
const quadrantDescriptions = {
  Automatisation: "Optimisation des processus transactionnels",
  "Avant-Garde": "Transformation paradigmatique",
  Assistance: "Amplification des capacités analytiques",
  Augmentation: "Co-création RH-IA personnalisée",
}

// Descriptions détaillées pour les tooltips des quadrants
const quadrantTooltips = {
  Automatisation:
    "Tâches répétitives à fort volume et faible complexité. L'IA remplace entièrement l'humain pour des processus standardisés, réduisant les coûts et les erreurs tout en libérant du temps pour des activités à plus forte valeur ajoutée.",
  "Avant-Garde":
    "Innovation disruptive combinant automatisation élevée et forte augmentation des capacités. Ces cas d'usage transforment radicalement les processus RH traditionnels et créent de nouvelles possibilités auparavant inenvisageables.",
  Assistance:
    "Aide à la décision et analyse de données. L'IA assiste les professionnels RH dans leurs tâches analytiques sans les remplacer, améliorant la qualité et la rapidité des analyses tout en laissant le contrôle à l'humain.",
  Augmentation:
    "Collaboration humain-IA personnalisée. L'IA amplifie les capacités humaines pour des tâches complexes et créatives, permettant aux professionnels RH de développer des solutions sur mesure avec un niveau de personnalisation élevé.",
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

export default function CategoryMatrix({ category, casUsageData = [] }) {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  // Filtrer les données par catégorie
  const filteredData = useMemo(() => {
    if (!casUsageData || casUsageData.length === 0) {
      return []
    }

    // Filtrer par catégorie
    const filtered = casUsageData.filter((item) => item.category === category)

    // Appliquer le placement forcé dans les quadrants
    return filtered.map((item) => {
      // S'assurer que x et y sont des nombres valides
      const x = Number.parseFloat(item.x) || Math.random() * 50 + 25
      const y = Number.parseFloat(item.y) || Math.random() * 50 + 25

      const baseItem = {
        id: item.id || `${Math.random().toString(36).substr(2, 9)}`,
        category: item.category,
        usageCase: item.usageCase,
        opportunityType: item.opportunityType,
        x: Math.min(Math.max(x, 0), 100), // Limiter entre 0 et 100
        y: Math.min(Math.max(y, 0), 100), // Limiter entre 0 et 100
        promptingTechniques: item.promptingTechniques || [],
        justification: item.justification || "",
      }

      // Forcer le placement dans le bon quadrant
      return enforceQuadrantPlacement(baseItem)
    })
  }, [casUsageData, category])

  const handleZoom = (direction) => {
    if (direction === "in") {
      setZoomLevel((prev) => Math.min(prev + 0.1, 2))
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
    }
  }

  const exportAsSVG = () => {
    const svg = document.getElementById(`matrix-${category.replace(/\s+/g, "-").toLowerCase()}`)
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `matrix-${category.replace(/\s+/g, "-").toLowerCase()}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  // Get items for each quadrant
  const getQuadrantItems = (items, quadrant) => {
    return items.filter((item) => item.opportunityType === quadrant)
  }

  // Si aucune donnée n'est disponible pour cette catégorie
  if (filteredData.length === 0) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">Aucune donnée disponible pour cette catégorie.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <TooltipProvider>
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
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
            <Button variant="outline" size="sm" onClick={exportAsSVG}>
              <Download className="h-4 w-4 mr-1" />
              Exporter SVG
            </Button>
          </div>

          <div
            className="relative w-full aspect-[3/2] border-2 border-gray-300 rounded-md overflow-hidden"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
          >
            <svg
              id={`matrix-${category.replace(/\s+/g, "-").toLowerCase()}`}
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Background */}
              <rect width="800" height="600" fill="white" />

              {/* Title */}
              <text x="400" y="40" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle">
                {category}
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

              {/* Plot the items */}
              {filteredData.map((item) => {
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
            </svg>

            {/* Interactive overlay for hover effects */}
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
          </div>

          {/* Cas d'usage par quadrant */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-1">
                AUTOMATISATION
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 text-blue-600 cursor-help">
                      <Info className="h-3 w-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-white p-2 max-w-xs border border-blue-200 shadow-lg rounded-md"
                  >
                    <p className="text-xs">{quadrantTooltips["Automatisation"]}</p>
                  </TooltipContent>
                </Tooltip>
              </h4>
              <ul className="text-sm space-y-1">
                {getQuadrantItems(filteredData, "Automatisation").map((item) => (
                  <li key={item.id}>• {item.usageCase}</li>
                ))}
                {getQuadrantItems(filteredData, "Automatisation").length === 0 && (
                  <li className="text-gray-500 italic">Aucun cas d'usage</li>
                )}
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-600 mb-2 flex items-center gap-1">
                AVANT-GARDE
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-purple-100 text-purple-600 cursor-help">
                      <Info className="h-3 w-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-white p-2 max-w-xs border border-purple-200 shadow-lg rounded-md"
                  >
                    <p className="text-xs">{quadrantTooltips["Avant-Garde"]}</p>
                  </TooltipContent>
                </Tooltip>
              </h4>
              <ul className="text-sm space-y-1">
                {getQuadrantItems(filteredData, "Avant-Garde").map((item) => (
                  <li key={item.id}>• {item.usageCase}</li>
                ))}
                {getQuadrantItems(filteredData, "Avant-Garde").length === 0 && (
                  <li className="text-gray-500 italic">Aucun cas d'usage</li>
                )}
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-600 mb-2 flex items-center gap-1">
                ASSISTANCE
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-100 text-orange-600 cursor-help">
                      <Info className="h-3 w-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-white p-2 max-w-xs border border-orange-200 shadow-lg rounded-md"
                  >
                    <p className="text-xs">{quadrantTooltips["Assistance"]}</p>
                  </TooltipContent>
                </Tooltip>
              </h4>
              <ul className="text-sm space-y-1">
                {getQuadrantItems(filteredData, "Assistance").map((item) => (
                  <li key={item.id}>• {item.usageCase}</li>
                ))}
                {getQuadrantItems(filteredData, "Assistance").length === 0 && (
                  <li className="text-gray-500 italic">Aucun cas d'usage</li>
                )}
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-600 mb-2 flex items-center gap-1">
                AUGMENTATION
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-100 text-green-600 cursor-help">
                      <Info className="h-3 w-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-white p-2 max-w-xs border border-green-200 shadow-lg rounded-md"
                  >
                    <p className="text-xs">{quadrantTooltips["Augmentation"]}</p>
                  </TooltipContent>
                </Tooltip>
              </h4>
              <ul className="text-sm space-y-1">
                {getQuadrantItems(filteredData, "Augmentation").map((item) => (
                  <li key={item.id}>• {item.usageCase}</li>
                ))}
                {getQuadrantItems(filteredData, "Augmentation").length === 0 && (
                  <li className="text-gray-500 italic">Aucun cas d'usage</li>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
