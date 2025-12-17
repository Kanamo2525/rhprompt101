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
    creator: "@prompt101",
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
  category: "Technology",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
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
        <link rel="alternate" hrefLang="fr-FR" href="https://rh.prompt101.fr" />
        {/* Hide Google Translate Bar and UI elements */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Hide Google Translate Bar and UI elements */
            body { 
              top: 0 !important; 
              position: static !important;
            }
            .goog-te-banner-frame { 
              display: none !important; 
              visibility: hidden !important;
            }
            .goog-te-banner-frame.skiptranslate { 
              display: none !important; 
            }
            body > .skiptranslate {
              display: none !important;
            }
            .skiptranslate iframe { 
              display: none !important; 
              visibility: hidden !important;
              height: 0 !important;
            }
            body.translated-ltr, body.translated-rtl { 
              top: 0 !important; 
            }
            #google_translate_element {
              display: none !important;
            }
            .goog-te-gadget {
              display: none !important;
            }
            #goog-gt-tt, .goog-te-balloon-frame {
              display: none !important;
            }
            .goog-text-highlight {
              background: none !important;
              box-shadow: none !important;
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div id="google_translate_element" style={{ display: "none" }} />
          {children}
        </ThemeProvider>

        <Script
          id="google-translate-script"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="beforeInteractive"
        />

        <Script
          id="google-translate-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                if (typeof google !== 'undefined' && google.translate) {
                  new google.translate.TranslateElement({
                    pageLanguage: 'fr',
                    includedLanguages: 'en,es,de,it,pt,nl,ru,zh-CN,ja,ar',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                    multilanguagePage: true
                  }, 'google_translate_element');
                  console.log('[v0] Google Translate initialized');
                }
              }
              
              // Auto-init if script is already loaded
              if (typeof google !== 'undefined' && google.translate) {
                googleTranslateElementInit();
              }
            `,
          }}
        />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RH.Prompt101.fr",
              alternateName: "Prompt101 RH",
              url: "https://rh.prompt101.fr",
              description:
                "La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement optimisés.",
              publisher: {
                "@type": "Organization",
                name: "Prompt101",
                logo: {
                  "@type": "ImageObject",
                  url: "https://rh.prompt101.fr/images/opengraph-image.png",
                  width: 1200,
                  height: 630,
                },
                sameAs: ["https://www.linkedin.com/company/prompt101"],
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://rh.prompt101.fr/catalogue?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: "fr-FR",
              audience: {
                "@type": "Audience",
                audienceType: "Professionnels des ressources humaines",
              },
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
              name: "Prompt101",
              url: "https://rh.prompt101.fr",
              logo: "https://rh.prompt101.fr/images/opengraph-image.png",
              description: "Plateforme de formation et ressources sur l'IA générative pour les RH",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["French", "English"],
              },
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              knowsAbout: [
                "Intelligence Artificielle",
                "Ressources Humaines",
                "Prompting",
                "IA Générative",
                "Transformation Digitale RH",
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
