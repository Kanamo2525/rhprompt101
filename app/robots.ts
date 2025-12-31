import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/test-translation", "/_next/", "/scripts/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/test-translation"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/images/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/test-translation"],
      },
      // GPTBot (OpenAI/ChatGPT search)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Claude-Web (Anthropic)
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/"],
      },
      // Google AI (Gemini, AI Overview)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/"],
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
    ],
    sitemap: "https://rh.prompt101.fr/sitemap.xml",
    host: "https://rh.prompt101.fr",
  }
}
