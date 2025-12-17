import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/test-translation"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/test-translation"],
      },
    ],
    sitemap: "https://rh.prompt101.fr/sitemap.xml",
  }
}
