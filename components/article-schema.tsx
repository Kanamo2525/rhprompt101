import Script from "next/script"

interface ArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  authorName: string
  authorImage: string
  imageUrl: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  authorName,
  authorImage,
  imageUrl,
  url,
}: ArticleSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      image: authorImage,
    },
    publisher: {
      "@type": "Organization",
      name: "RH.Prompt101.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://rh.prompt101.fr/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
