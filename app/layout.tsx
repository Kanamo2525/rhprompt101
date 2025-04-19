import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RH.Prompt101.fr - L'IA au service des professionnels RH",
  description:
    "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés pour le recrutement, la formation et la gestion des talents.",
  keywords:
    "IA RH, prompts RH, intelligence artificielle ressources humaines, IA générative RH, transformation RH, recrutement IA, formation IA, gestion talents IA",
  alternates: {
    canonical: "https://rh.prompt101.fr",
    languages: {
      "fr-FR": "https://rh.prompt101.fr",
    },
  },
  openGraph: {
    title: "Prompt101 RH : Maîtrisez l'IA générative pour transformer votre fonction RH",
    description:
      "Guide stratégique, techniques avancées de prompting et matrice d'opportunités pour RH. Transformez votre département avec l'IA générative - du recrutement à la formation, de l'automatisation à l'augmentation.",
    url: "https://rh.prompt101.fr",
    siteName: "Prompt101 RH",
    images: [
      {
        url: "https://rh.prompt101.fr/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Prompt101 RH - L'IA au service de la transformation RH",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt101 RH : Maîtrisez l'IA générative pour transformer votre fonction RH",
    description:
      "Guide stratégique, techniques avancées de prompting et matrice d'opportunités pour RH. Transformez votre fonction avec l'IA générative.",
    images: ["https://rh.prompt101.fr/images/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "à_remplacer_par_votre_code_de_vérification_google",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="fr-FR" href="https://rh.prompt101.fr" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RH.Prompt101.fr",
              url: "https://rh.prompt101.fr",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://rh.prompt101.fr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              description:
                "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés.",
              publisher: {
                "@type": "Organization",
                name: "Prompt101",
                logo: {
                  "@type": "ImageObject",
                  url: "https://rh.prompt101.fr/images/logo.png",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
