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

export const metadata: Metadata = {
  title: "RH.Prompt101.fr - Transformez votre fonction RH avec l'IA générative",
  description:
    "Découvrez comment optimiser vos processus RH grâce à notre catalogue de prompts spécialisés, notre matrice d'opportunités et notre guide stratégique.",
  keywords: "prompts RH, IA ressources humaines, recrutement IA, formation IA, gestion talents IA, transformation RH",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
