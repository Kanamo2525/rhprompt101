import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { ArticleView } from "@/components/article-view"
import { CompetencesRhAugmenteView } from "@/components/competences-rh-augmente-view"
import { ImpactIaRhView } from "@/components/impact-ia-rh-view"
import type { Metadata } from "next"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

const articles = {
  "transformation-rh-ia": {
    title: "La transformation des RH par l'IA générative : une analyse stratégique",
    description:
      "Une analyse stratégique des opportunités et défis de l'IA générative dans la fonction ressources humaines.",
    component: ArticleView,
  },
  "competences-rh-augmente": {
    title: "Les compétences clés du RH augmenté par l'IA",
    description:
      "Comment les professionnels RH peuvent développer les compétences nécessaires pour tirer parti de l'IA générative.",
    component: CompetencesRhAugmenteView,
  },
  "impact-ia-rh": {
    title:
      "Mesurer l'impact de l'IA générative en RH : Au-delà des promesses, la nécessité d'une évaluation systémique",
    description:
      "Comment évaluer rigoureusement l'impact de l'IA générative en RH avec un cadre multidimensionnel intégrant efficience opérationnelle, valeur qualitative, et transformation organisationnelle.",
    component: ImpactIaRhView,
  },
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: "Article non trouvé - RH.Prompt101.fr",
      description: "L'article que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${article.title} - RH.Prompt101.fr`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  const ArticleComponent = article.component

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ArticleComponent />
      <Footer />
    </div>
  )
}
