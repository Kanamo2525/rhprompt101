import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { KeyFeatures } from "@/components/key-features"
import { CataloguePreview } from "@/components/catalogue-preview"
import { MatrixPreview } from "@/components/matrix-preview"
import { GuidePreview } from "@/components/guide-preview"
import { BlogPreview } from "@/components/blog-preview"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "RH.Prompt101.fr - Transformez votre fonction RH avec l'IA générative",
  description:
    "Plateforme de référence pour les RH : 50+ prompts IA optimisés, matrice d'opportunités, guide stratégique de 280 pages et techniques de prompting avancées pour transformer votre fonction RH.",
  keywords: [
    "prompts RH",
    "IA ressources humaines",
    "recrutement IA",
    "formation IA",
    "gestion talents IA",
    "transformation RH",
    "ChatGPT RH",
    "prompting RH",
    "automatisation RH",
    "guide IA RH",
    "matrice opportunités IA",
  ],
}

export default function Home() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce qu'un prompt IA pour les RH ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un prompt IA pour les RH est une instruction optimisée permettant d'utiliser l'intelligence artificielle générative pour automatiser ou améliorer des tâches RH comme la rédaction d'offres d'emploi, la préparation d'entretiens, ou l'analyse de CV.",
        },
      },
      {
        "@type": "Question",
        name: "Comment l'IA peut-elle transformer la fonction RH ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'IA générative transforme les RH à travers quatre types d'opportunités : Automatisation (tâches répétitives), Assistance (aide à la décision), Augmentation (co-création), et Avant-garde (innovation). Notre matrice d'opportunités identifie 25+ cas d'usage concrets.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de prompts sont disponibles sur RH.Prompt101.fr ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La plateforme propose plus de 50 prompts optimisés couvrant 7 catégories RH : recrutement, formation, gestion des talents, onboarding, administration, bien-être et support RH. Tous les prompts sont prêts à l'emploi et documentés.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="homepage-faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navigation />
      <main>
        <Hero />
        <section aria-labelledby="features-heading">
          <KeyFeatures />
        </section>
        <section aria-labelledby="catalogue-heading">
          <CataloguePreview />
        </section>
        <section aria-labelledby="matrix-heading">
          <MatrixPreview />
        </section>
        <section aria-labelledby="blog-heading">
          <BlogPreview />
        </section>
        <section aria-labelledby="guide-heading">
          <GuidePreview />
        </section>
        <section aria-labelledby="cta-heading">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  )
}
