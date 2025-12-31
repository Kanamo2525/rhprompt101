import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rh.prompt101.fr"),
  title: {
    default: "RH.Prompt101.fr - Transformez votre fonction RH avec l'IA générative",
    template: "%s | RH.Prompt101.fr",
  },
  description:
    "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés pour le recrutement, la formation et la gestion des talents.",
  keywords: [
    "IA RH",
    "prompts RH",
    "intelligence artificielle ressources humaines",
    "IA générative RH",
    "transformation RH",
    "recrutement IA",
    "formation IA",
    "gestion talents IA",
    "ChatGPT RH",
    "prompting RH",
    "automatisation RH",
    "digitalisation RH",
    "innovation RH",
    "technologie RH",
  ],
  authors: [{ name: "Kristy Anamoutou" }],
  creator: "Prompt101",
  publisher: "Prompt101",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://rh.prompt101.fr",
    languages: {
      "fr-FR": "https://rh.prompt101.fr",
      en: "https://rh.prompt101.fr",
      es: "https://rh.prompt101.fr",
      de: "https://rh.prompt101.fr",
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
    creator: "@prompt101",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
    // yandex: "votre-code-yandex",
    // bing: "votre-code-bing",
  },
  category: "Technology",
  other: {
    "ai-content-declaration": "human-created",
    "content-language": "fr-FR",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4F46E5" },
    { media: "(prefers-color-scheme: dark)", color: "#4F46E5" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="preconnect" href="https://translate.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="alternate" hrefLang="fr" href="https://rh.prompt101.fr" />
        <link rel="alternate" hrefLang="en" href="https://rh.prompt101.fr" />
        <link rel="alternate" hrefLang="es" href="https://rh.prompt101.fr" />
        <link rel="alternate" hrefLang="de" href="https://rh.prompt101.fr" />
        <link rel="alternate" hrefLang="x-default" href="https://rh.prompt101.fr" />

        <link rel="canonical" href="https://rh.prompt101.fr" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            html, body { top: 0 !important; position: static !important; margin-top: 0 !important; }
            .goog-te-banner-frame, body > .skiptranslate:not(#google_translate_element) { display: none !important; }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div id="google_translate_element" aria-hidden="true" />
          {children}
        </ThemeProvider>

        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                try {
                  new google.translate.TranslateElement({
                    pageLanguage: 'fr',
                    includedLanguages: 'en,es,de,it,pt,nl,ru,zh-CN,ja,ar',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                    multilanguagePage: true
                  }, 'google_translate_element');
                  
                  // Dispatch custom event when ready
                  setTimeout(function() {
                    window.dispatchEvent(new CustomEvent('googleTranslateReady'));
                  }, 500);
                } catch(e) {
                  console.error('[v0] Google Translate init error:', e);
                }
              }
              window.googleTranslateElementInit = googleTranslateElementInit;
            `,
          }}
        />

        <Script
          id="google-translate-script"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://rh.prompt101.fr/#website",
              name: "RH.Prompt101.fr",
              alternateName: ["Prompt101 RH", "Prompt101 Ressources Humaines"],
              url: "https://rh.prompt101.fr",
              description:
                "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés.",
              publisher: {
                "@id": "https://rh.prompt101.fr/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://rh.prompt101.fr/catalogue?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: ["fr-FR", "en", "es", "de"],
            }),
          }}
        />

        <Script
          id="organization-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://rh.prompt101.fr/#organization",
              name: "Prompt101",
              url: "https://rh.prompt101.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://rh.prompt101.fr/images/opengraph-image.png",
                width: 1200,
                height: 630,
              },
              description: "Plateforme de formation et ressources sur l'IA générative pour les RH",
              founder: {
                "@type": "Person",
                name: "Kristy Anamoutou",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["French", "English", "Spanish", "German"],
              },
              areaServed: [
                { "@type": "Country", name: "France" },
                { "@type": "Country", name: "Belgium" },
                { "@type": "Country", name: "Switzerland" },
                { "@type": "Country", name: "Canada" },
              ],
              knowsAbout: [
                "Intelligence Artificielle",
                "Ressources Humaines",
                "Prompting",
                "IA Générative",
                "Transformation Digitale RH",
                "ChatGPT pour RH",
                "Recrutement IA",
              ],
              sameAs: ["https://www.linkedin.com/company/prompt101"],
            }),
          }}
        />

        <Script
          id="software-application-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "RH.Prompt101.fr",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              description: "Plateforme de prompts IA optimisés pour les professionnels RH",
              featureList: [
                "50+ prompts RH optimisés",
                "Matrice d'opportunités IA",
                "Guide stratégique de 280 pages",
                "Techniques de prompting avancées",
              ],
            }),
          }}
        />

        <Script id="axeptio-script" strategy="afterInteractive">
          {`
            window.axeptioSettings = {
              clientId: "6805bc59b269673e20789919",
              cookiesVersion: "prompt101-fr-EU",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                }
              }
            };
            
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
          `}
        </Script>
      </body>
    </html>
  )
}
