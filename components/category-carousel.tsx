"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CategoryMatrix from "@/components/category-matrix"

export default function CategoryCarousel({ casUsageData = [] }) {
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

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1))
  }

  if (categories.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">Aucune catégorie disponible</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{categories[currentIndex]}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={goToPrevious} className="flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Précédent
          </Button>
          <Button variant="outline" size="sm" onClick={goToNext} className="flex items-center">
            Suivant
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out">
          <CategoryMatrix category={categories[currentIndex]} casUsageData={casUsageData} />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {categories.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à la catégorie ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
