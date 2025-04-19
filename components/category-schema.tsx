import Script from "next/script"

interface CategorySchemaProps {
  categoryName: string
  categoryDescription: string
  categoryUrl: string
  promptCount: number
}

export function CategorySchema({ categoryName, categoryDescription, categoryUrl, promptCount }: CategorySchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} - Prompts RH pour l'IA générative`,
    description: categoryDescription,
    url: categoryUrl,
    numberOfItems: promptCount,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: `Prompts d'IA pour ${categoryName}`,
          description: `Collection de prompts optimisés pour ${categoryName.toLowerCase()} avec l'IA générative`,
        },
      ],
    },
  }

  return (
    <Script
      id={`schema-${categoryName.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
