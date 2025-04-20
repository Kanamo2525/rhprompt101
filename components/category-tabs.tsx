"use client"

import { useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CategoryMatrix from "@/components/category-matrix"

export default function CategoryTabs({ casUsageData = [] }) {
  // Extraire les catégories uniques des données
  const categories = useMemo(() => {
    if (!casUsageData || casUsageData.length === 0) return []

    // Obtenir les catégories uniques
    const uniqueCategories = [...new Set(casUsageData.map((item) => item.category))]

    // Filtrer pour n'inclure que les catégories demandées
    const requestedCategories = [
      "Gestion des talents et mobilité interne",
      "Administration et processus RH",
      "Santé et bien-être au travail",
    ]

    // Retourner uniquement les catégories demandées qui existent dans les données
    return uniqueCategories.filter((cat) => requestedCategories.includes(cat))
  }, [casUsageData])

  // Créer un ID valide pour les onglets à partir du nom de la catégorie
  const getCategoryId = (category) => {
    return category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Tabs defaultValue={categories.length > 0 ? getCategoryId(categories[0]) : ""} className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-6">
          {categories.map((category) => (
            <TabsTrigger key={getCategoryId(category)} value={getCategoryId(category)} className="text-sm md:text-base">
              {category.length > 25 ? `${category.substring(0, 25)}...` : category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={getCategoryId(category)} value={getCategoryId(category)}>
            <div className="p-1">
              <CategoryMatrix category={category} casUsageData={casUsageData} />
            </div>
          </TabsContent>
        ))}

        {categories.length === 0 && <div className="text-center py-8 text-gray-500">Aucune catégorie disponible</div>}
      </Tabs>
    </div>
  )
}
