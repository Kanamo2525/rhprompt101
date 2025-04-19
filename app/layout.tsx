import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RH.Prompt101.fr - L'IA au service des professionnels RH",
  description:
    "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
