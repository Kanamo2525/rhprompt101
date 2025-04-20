"use client"

import { useState, useEffect } from "react"

interface RandomImageProps {
  alt: string
  className?: string
  seed?: string
  width?: number
  height?: number
  fixedImageUrl?: string
}

export function RandomImage({
  alt,
  className = "w-full h-full object-cover",
  seed = Math.random().toString(36).substring(7),
  width = 800,
  height = 600,
  fixedImageUrl,
}: RandomImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(
    fixedImageUrl || `https://picsum.photos/seed/${seed}/${width}/${height}`,
  )
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Précharger l'image
    const img = new Image()
    img.src = imageUrl
    img.onload = () => setIsLoading(false)
    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
    }
  }, [imageUrl])

  // Générer une nouvelle image aléatoire en cas d'erreur
  const handleError = () => {
    if (fixedImageUrl) {
      // Si une URL fixe était utilisée et a échoué, utiliser une image aléatoire
      const newSeed = Math.random().toString(36).substring(7)
      setImageUrl(`https://picsum.photos/seed/${newSeed}/${width}/${height}`)
    } else {
      // Sinon, essayer une autre image aléatoire
      const newSeed = Math.random().toString(36).substring(7)
      setImageUrl(`https://picsum.photos/seed/${newSeed}/${width}/${height}`)
    }
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={hasError ? "/placeholder.svg" : imageUrl}
        alt={alt}
        className={className}
        onError={handleError}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  )
}
