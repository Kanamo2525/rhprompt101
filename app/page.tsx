"use client"

import { Hero } from "@/components/hero"
import { KeyFeatures } from "@/components/key-features"
import { CataloguePreview } from "@/components/catalogue-preview"
import { MatrixPreview } from "@/components/matrix-preview"
import { GuidePreview } from "@/components/guide-preview"
import { BlogPreview } from "@/components/blog-preview"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <KeyFeatures />
      <CataloguePreview />
      <MatrixPreview />
      <GuidePreview />
      <BlogPreview />
      <CallToAction />
      <Footer />
    </div>
  )
}
