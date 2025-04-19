"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState, useMemo } from "react"
import { Search, ChevronDown, ChevronUp, Info } from "lucide-react"

// Données
const casUsageData = [
  {
    category: "Recrutement et acquisition de talents",
    usageCase: "Rédaction d'offres d'emploi",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "Few-Shot", "One-Shot"],
    justification: "Tâche répétitive standardisée pouvant être effectuée avec peu d'intervention humaine",
  },
  {
    category: "Recrutement et acquisition de talents",
    usageCase: "Préparation d'entretiens",
    opportunityType: "Assistance",
    promptingTechniques: ["Few-Shot", "Chain-of-Thought"],
    justification:
      "Aide les recruteurs à élaborer de meilleures questions tout en conservant leur jugement professionnel",
  },
  {
    category: "Recrutement et acquisition de talents",
    usageCase: "Optimisation du tri des CV",
    opportunityType: "Automatisation",
    promptingTechniques: ["Chain-of-Thought", "RCT"],
    justification: "Traitement standardisé d'un grand volume de données avec critères prédéfinis",
  },
  {
    category: "Recrutement et acquisition de talents",
    usageCase: "Communication candidat",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "One-Shot", "RCT"],
    justification: "Génération de messages standardisés adaptés à différentes étapes du processus",
  },
  {
    category: "Recrutement et acquisition de talents",
    usageCase: "Sourcing de candidats",
    opportunityType: "Assistance",
    promptingTechniques: ["Generated Knowledge", "Multi-Prompting"],
    justification: "Aide à la recherche et à l'identification de talents potentiels tout en gardant contrôle humain",
  },
  {
    category: "Onboarding et intégration",
    usageCase: "Emails de bienvenue",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "One-Shot"],
    justification: "Communication standardisée qui peut être automatisée avec minimal ajustement",
  },
  {
    category: "Onboarding et intégration",
    usageCase: "Programmes d'intégration",
    opportunityType: "Augmentation",
    promptingTechniques: ["RCT", "Contextual Augmentation"],
    justification: "Co-création de parcours personnalisés adaptés aux besoins spécifiques de chaque collaborateur",
  },
  {
    category: "Onboarding et intégration",
    usageCase: "Documentation d'accueil",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "Few-Shot"],
    justification: "Production de documents standardisés avec peu d'intervention humaine",
  },
  {
    category: "Formation et développement des compétences",
    usageCase: "Création de contenus de formation",
    opportunityType: "Avant-Garde",
    promptingTechniques: ["Expert Role-Playing", "Few-Shot"],
    justification: "Création de nouveaux contenus pédagogiques originaux avec supervision minimale",
  },
  {
    category: "Formation et développement des compétences",
    usageCase: "Parcours d'apprentissage personnalisés",
    opportunityType: "Augmentation",
    promptingTechniques: ["Generated Knowledge", "Chain-of-Thought"],
    justification: "Co-création de nouvelles approches d'apprentissage adaptées aux besoins individuels",
  },
  {
    category: "Formation et développement des compétences",
    usageCase: "Évaluation des compétences",
    opportunityType: "Assistance",
    promptingTechniques: ["Chain-of-Thought", "RCT"],
    justification: "Aide à l'analyse et au diagnostic tout en gardant le jugement humain au centre",
  },
  {
    category: "Formation et développement des compétences",
    usageCase: "Contenus interactifs",
    opportunityType: "Avant-Garde",
    promptingTechniques: ["Few-Shot", "Expert Role-Playing"],
    justification: "Création autonome de nouvelles formes d'exercices et d'interactions pédagogiques",
  },
  {
    category: "Gestion des talents et mobilité interne",
    usageCase: "Matching de compétences",
    opportunityType: "Assistance",
    promptingTechniques: ["Contextual Augmentation", "Chain-of-Thought"],
    justification:
      "Outil d'aide à la décision pour identifier les meilleures correspondances tout en gardant validation humaine",
  },
  {
    category: "Gestion des talents et mobilité interne",
    usageCase: "Plans de carrière",
    opportunityType: "Augmentation",
    promptingTechniques: ["RCT", "Iterative Prompting"],
    justification: "Co-création de nouveaux parcours professionnels personnalisés avec forte implication humaine",
  },
  {
    category: "Gestion des talents et mobilité interne",
    usageCase: "Synthèse d'entretiens",
    opportunityType: "Automatisation",
    promptingTechniques: ["Chain-of-Thought", "Generated Knowledge"],
    justification: "Traitement standardisé d'informations verbales avec minimal contrôle humain",
  },
  {
    category: "Gestion des talents et mobilité interne",
    usageCase: "Détection des hauts potentiels",
    opportunityType: "Assistance",
    promptingTechniques: ["Generated Knowledge", "Multi-Prompting"],
    justification: "Outil d'aide à la décision pour identifier les talents, jugement final reste humain",
  },
  {
    category: "Support RH et relations collaborateurs",
    usageCase: "Chatbots RH",
    opportunityType: "Automatisation",
    promptingTechniques: ["Zero-Shot", "Few-Shot", "Iterative Prompting"],
    justification: "Système de réponse automatique pour questions fréquentes avec peu d'intervention humaine",
  },
  {
    category: "Support RH et relations collaborateurs",
    usageCase: "Documentation administrative",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "Contextual Augmentation"],
    justification: "Génération de documents standardisés pouvant être automatisée",
  },
  {
    category: "Support RH et relations collaborateurs",
    usageCase: "Analyse de climat social",
    opportunityType: "Assistance",
    promptingTechniques: ["Generated Knowledge", "Multi-Prompting"],
    justification: "Aide à l'interprétation des données d'engagement avec jugement humain pour les décisions",
  },
  {
    category: "Support RH et relations collaborateurs",
    usageCase: "Communication interne",
    opportunityType: "Assistance",
    promptingTechniques: ["RCT", "One-Shot"],
    justification: "Aide à la rédaction tout en maintenant le contrôle sur le message et la tonalité",
  },
  {
    category: "Administration et processus RH",
    usageCase: "Automatisation administrative",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "Zero-Shot"],
    justification: "Remplacement de tâches répétitives et standardisées avec intervention minimale",
  },
  {
    category: "Administration et processus RH",
    usageCase: "Tableaux de bord RH",
    opportunityType: "Automatisation",
    promptingTechniques: ["Template Filling", "Zero-Shot"],
    justification: "Génération automatique de rapports standardisés basés sur des données",
  },
  {
    category: "Administration et processus RH",
    usageCase: 'BI "People"',
    opportunityType: "Assistance",
    promptingTechniques: ["Chain-of-Thought", "Generated Knowledge"],
    justification: "Aide à l'analyse des données RH tout en conservant l'interprétation finale humaine",
  },
  {
    category: "Santé et bien-être au travail",
    usageCase: "Engagement des collaborateurs",
    opportunityType: "Augmentation",
    promptingTechniques: ["Multi-Prompting", "Expert Role-Playing"],
    justification: "Co-création de nouvelles stratégies d'engagement en collaboration entre IA et humains",
  },
  {
    category: "Santé et bien-être au travail",
    usageCase: "Prévention des risques",
    opportunityType: "Assistance",
    promptingTechniques: ["Chain-of-Thought", "RCT"],
    justification: "Aide à l'élaboration de plans de prévention avec forte supervision humaine sur un sujet sensible",
  },
  {
    category: "Santé et bien-être au travail",
    usageCase: "Fidélisation des talents",
    opportunityType: "Augmentation",
    promptingTechniques: ["Generated Knowledge", "Multi-Prompting"],
    justification: "Co-création de nouvelles stratégies de rétention innovantes en partenariat humain-IA",
  },
]

const opportunityColors = {
  Automatisation: "bg-blue-100 text-blue-800 border-blue-300",
  Assistance: "bg-purple-100 text-purple-800 border-purple-300",
  Augmentation: "bg-green-100 text-green-800 border-green-300",
  "Avant-Garde": "bg-amber-100 text-amber-800 border-amber-300",
}

const opportunityIcons = {
  Automatisation: "↻",
  Assistance: "↗",
  Augmentation: "⇑",
  "Avant-Garde": "✧",
}

// Tooltip Component
const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-flex">
      <div
        className="cursor-help flex items-center"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 -top-2 left-full ml-2 w-64 transform -translate-y-full p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
          {content}
          <div className="absolute left-0 top-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )
}

// Badge Component
const Badge = ({ text, colorClass }) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>{text}</span>
)

// Technique Badge Component
const TechniqueBadge = ({ technique }) => {
  const techniques = {
    "Template Filling": "bg-blue-50 text-blue-700 border border-blue-200",
    "Few-Shot": "bg-indigo-50 text-indigo-700 border border-indigo-200",
    "One-Shot": "bg-purple-50 text-purple-700 border border-purple-200",
    "Zero-Shot": "bg-violet-50 text-violet-700 border border-violet-200",
    "Chain-of-Thought": "bg-red-50 text-red-700 border border-red-200",
    RCT: "bg-orange-50 text-orange-700 border border-orange-200",
    "Generated Knowledge": "bg-amber-50 text-amber-700 border border-amber-200",
    "Multi-Prompting": "bg-yellow-50 text-yellow-700 border border-yellow-200",
    "Expert Role-Playing": "bg-lime-50 text-lime-700 border border-lime-200",
    "Contextual Augmentation": "bg-green-50 text-green-700 border border-green-200",
    "Iterative Prompting": "bg-emerald-50 text-emerald-700 border border-emerald-200",
  }

  return (
    <span
      className={`inline-block px-2 py-1 text-xs rounded-md mr-1 mb-1 ${techniques[technique] || "bg-gray-100 text-gray-700 border border-gray-200"}`}
    >
      {technique}
    </span>
  )
}

export default function MatricePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    opportunityType: "",
  })
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  })

  // Unique categories and opportunity types for filters
  const categories = [...new Set(casUsageData.map((item) => item.category))]
  const opportunityTypes = [...new Set(casUsageData.map((item) => item.opportunityType))]

  // Sort and Filter Data
  const sortedAndFilteredData = useMemo(() => {
    let filteredData = [...casUsageData]

    // Apply search
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase()
      filteredData = filteredData.filter(
        (item) =>
          item.usageCase.toLowerCase().includes(lowerSearchTerm) ||
          item.category.toLowerCase().includes(lowerSearchTerm) ||
          item.opportunityType.toLowerCase().includes(lowerSearchTerm) ||
          item.promptingTechniques.some((technique) => technique.toLowerCase().includes(lowerSearchTerm)),
      )
    }

    // Apply filters
    if (filters.category) {
      filteredData = filteredData.filter((item) => item.category === filters.category)
    }
    if (filters.opportunityType) {
      filteredData = filteredData.filter((item) => item.opportunityType === filters.opportunityType)
    }

    // Apply sorting
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1
        }
        return 0
      })
    }

    return filteredData
  }, [casUsageData, searchTerm, filters, sortConfig])

  // Sorting handler
  const requestSort = (key) => {
    let direction = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  // Count items by opportunity type
  const countByOpportunity = useMemo(() => {
    const counts = {
      Automatisation: 0,
      Assistance: 0,
      Augmentation: 0,
      "Avant-Garde": 0,
    }

    casUsageData.forEach((item) => {
      counts[item.opportunityType]++
    })

    return counts
  }, [casUsageData])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Matrice d'Opportunités IA
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-100">
                Un outil analytique pour construire votre feuille de route d'implémentation de l'IA générative en RH
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-7xl mx-auto my-8">
          {/* Header & Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Matrice d'opportunités IA pour les RH</h2>
            <p className="text-blue-100 mb-6">
              Cartographie des cas d'usage, techniques de prompting et types d'opportunités
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {Object.entries(countByOpportunity).map(([type, count]) => (
                <div key={type} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{type}</span>
                    <span className="text-2xl font-bold">{count}</span>
                  </div>
                  <div className="text-xs text-blue-100 mt-1">
                    {Math.round((count / casUsageData.length) * 100)}% des cas d'usage
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un cas d'usage..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <select
                  className="block px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                >
                  <option value="">Toutes les catégories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  className="block px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.opportunityType}
                  onChange={(e) => setFilters({ ...filters, opportunityType: e.target.value })}
                >
                  <option value="">Tous les types d'opportunité</option>
                  {opportunityTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("category")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Catégorie RH</span>
                      {sortConfig.key === "category" &&
                        (sortConfig.direction === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("usageCase")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Cas d'usage</span>
                      {sortConfig.key === "usageCase" &&
                        (sortConfig.direction === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("opportunityType")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Type d'opportunité</span>
                      {sortConfig.key === "opportunityType" &&
                        (sortConfig.direction === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Techniques recommandées
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center space-x-1">
                      <span>Justification</span>
                      <Tooltip content="Raison principale du classement dans ce type d'opportunité">
                        <Info size={14} className="text-gray-400" />
                      </Tooltip>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedAndFilteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.usageCase}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span
                          className={`flex items-center justify-center w-6 h-6 mr-2 rounded-full font-bold ${opportunityColors[item.opportunityType]}`}
                        >
                          {opportunityIcons[item.opportunityType]}
                        </span>
                        <Badge text={item.opportunityType} colorClass={opportunityColors[item.opportunityType]} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap">
                        {item.promptingTechniques.map((technique, i) => (
                          <TechniqueBadge key={i} technique={technique} />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-md">{item.justification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Légende des types d'opportunité
            </h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(opportunityColors).map(([type, colorClass]) => (
                <div key={type} className="flex items-center">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 font-bold ${colorClass}`}
                  >
                    {opportunityIcons[type]}
                  </span>
                  <span className="text-sm text-gray-700">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
