import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { ArticleView } from "@/components/article-view"
import { CompetencesRhAugmenteView } from "@/components/competences-rh-augmente-view"
import { ImpactIaRhView } from "@/components/impact-ia-rh-view"
import type { Metadata } from "next"
import Script from "next/script"

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
    image: "/images/hr-technology.jpeg",
    author: "Kristy Anamoutou",
    datePublished: "2025-04-20",
    dateModified: "2025-04-20",
  },
  "competences-rh-augmente": {
    title: "Les compétences clés du RH augmenté par l'IA",
    description:
      "Comment les professionnels RH peuvent développer les compétences nécessaires pour tirer parti de l'IA générative.",
    component: CompetencesRhAugmenteView,
    image: "/images/enhancing-key-skills.jpeg",
    author: "Kristy Anamoutou",
    datePublished: "2025-04-22",
    dateModified: "2025-04-22",
  },
  "impact-ia-rh": {
    title:
      "Mesurer l'impact de l'IA générative en RH : Au-delà des promesses, la nécessité d'une évaluation systémique",
    description:
      "Comment évaluer rigoureusement l'impact de l'IA générative en RH avec un cadre multidimensionnel intégrant efficience opérationnelle, valeur qualitative, et transformation organisationnelle.",
    component: ImpactIaRhView,
    image: "/images/measuring-ai-impact.jpeg",
    author: "Kristy Anamoutou",
    datePublished: "2025-04-25",
    dateModified: "2025-04-25",
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
    title: `${article.title} | RH.Prompt101.fr`,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      images: [
        {
          url: `https://rh.prompt101.fr${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      url: `https://rh.prompt101.fr/article/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`https://rh.prompt101.fr${article.image}`],
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://rh.prompt101.fr${article.image}`,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Prompt101",
      logo: {
        "@type": "ImageObject",
        url: "https://rh.prompt101.fr/images/opengraph-image.png",
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rh.prompt101.fr/article/${slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <ArticleComponent />
      <Footer />
    </div>
  )
}
