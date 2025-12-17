import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { RandomImage } from "@/components/random-image"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Articles & Blog RH - Analyses sur l'IA générative en ressources humaines",
  description:
    "Découvrez nos analyses approfondies et réflexions sur l'impact de l'IA générative dans les ressources humaines. Transformation RH, compétences, mesure d'impact et stratégie.",
  keywords: [
    "blog RH IA",
    "articles intelligence artificielle RH",
    "transformation RH",
    "compétences RH augmenté",
    "impact IA RH",
    "analyses RH",
  ],
  openGraph: {
    title: "Articles & Blog RH - Analyses IA générative",
    description: "Analyses approfondies sur l'IA générative en ressources humaines",
    url: "https://rh.prompt101.fr/article",
  },
}

const articles = [
  {
    id: "transformation-rh-ia",
    title: "La transformation des RH par l'IA générative",
    description:
      "Une analyse stratégique des opportunités et défis de l'IA générative dans la fonction ressources humaines.",
    image: "https://picsum.photos/seed/hr-tech/800/600",
    author: "Kristy Anamoutou",
    date: "20 Avril 2025",
    readTime: "12 min de lecture",
  },
  {
    id: "competences-rh-augmente",
    title: "Les compétences clés du RH augmenté par l'IA",
    description:
      "Comment les professionnels RH peuvent développer les compétences nécessaires pour tirer parti de l'IA générative.",
    image: "/images/enhancing-key-skills.jpeg",
    author: "Kristy Anamoutou",
    date: "22 Avril 2025",
    readTime: "15 min de lecture",
  },
  {
    id: "impact-ia-rh",
    title: "Mesurer l'impact de l'IA générative en RH",
    description:
      "Au-delà des promesses, la nécessité d'une évaluation systémique pour démontrer la valeur de l'IA en RH.",
    image: "https://picsum.photos/seed/ai-impact/800/600",
    author: "Kristy Anamoutou",
    date: "25 Avril 2025",
    readTime: "14 min de lecture",
  },
]

export default function ArticlesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog RH Prompt101",
    description: "Analyses et réflexions sur l'IA générative en ressources humaines",
    url: "https://rh.prompt101.fr/article",
    publisher: {
      "@type": "Organization",
      name: "Prompt101",
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      url: `https://rh.prompt101.fr/article/${article.id}`,
      datePublished: article.date,
      author: {
        "@type": "Person",
        name: article.author,
      },
      image: article.image,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-black">Articles</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez nos analyses et réflexions sur l'impact de l'IA générative dans le domaine des ressources
                humaines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    <RandomImage
                      alt={article.title}
                      seed={article.id}
                      fixedImageUrl={
                        article.id === "competences-rh-augmente" ? "/images/enhancing-key-skills.jpeg" : undefined
                      }
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-black">{article.title}</CardTitle>
                    <CardDescription className="flex items-center text-sm">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 line-clamp-3">{article.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/article/${article.id}`} className="w-full">
                      <Button variant="outline" className="w-full bg-transparent">
                        Lire l'article
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
