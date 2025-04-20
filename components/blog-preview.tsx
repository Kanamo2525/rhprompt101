import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const articles = [
  {
    id: "transformation-rh-ia",
    title: "La transformation des RH par l'IA générative",
    description:
      "Une analyse stratégique des opportunités et défis de l'IA générative dans la fonction ressources humaines.",
    image: "/images/hr-technology.jpeg",
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
    image: "/images/measuring-ai-impact.jpeg",
    author: "Kristy Anamoutou",
    date: "25 Avril 2025",
    readTime: "14 min de lecture",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Derniers articles</h2>
          <p className="text-black max-w-2xl mx-auto">
            Découvrez nos analyses et réflexions sur l'impact de l'IA générative dans le domaine des ressources
            humaines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden relative bg-gray-100">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-black">{article.title}</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-600">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-black line-clamp-3">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/article/${article.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Lire l'article
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/article">
            <Button variant="default">Voir tous les articles</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
