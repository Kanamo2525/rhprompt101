import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { KeyFeatures } from "@/components/key-features"
import { CataloguePreview } from "@/components/catalogue-preview"
import { MatrixPreview } from "@/components/matrix-preview"
import { GuidePreview } from "@/components/guide-preview"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <KeyFeatures />
        <CataloguePreview />
        <MatrixPreview />
        <GuidePreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
