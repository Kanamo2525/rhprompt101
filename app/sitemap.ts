import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rh.prompt101.fr"
  const currentDate = new Date().toISOString()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/catalogue`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/matrice`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide/telecharger`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/article`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ]

  const categories = [
    { slug: "recrutement", priority: 0.9 },
    { slug: "formation", priority: 0.85 },
    { slug: "talents", priority: 0.85 },
    { slug: "onboarding", priority: 0.8 },
    { slug: "administration", priority: 0.75 },
    { slug: "bien-etre", priority: 0.8 },
    { slug: "support", priority: 0.75 },
  ]

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/catalogue/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: category.priority,
  }))

  const articles = [
    { slug: "transformation-rh-ia", priority: 0.85 },
    { slug: "competences-rh-augmente", priority: 0.85 },
    { slug: "impact-ia-rh", priority: 0.8 },
  ]

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: article.priority,
  }))

  return [...staticPages, ...categoryPages, ...articlePages]
}
