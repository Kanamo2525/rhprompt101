import type { Metadata } from "next"
import ClientMatricePage from "./client"

// Metadata for matrice page
export const metadata: Metadata = {
  title: "Matrice d'Opportunités IA pour les RH - Cartographie des cas d'usage",
  description:
    "Explorez notre matrice interactive des opportunités IA en RH. Automatisation, Assistance, Augmentation et Avant-garde : 25+ cas d'usage avec techniques de prompting recommandées.",
  keywords: [
    "matrice opportunités IA RH",
    "cas d'usage IA RH",
    "automatisation RH",
    "assistance IA RH",
    "augmentation RH",
    "techniques prompting",
    "cartographie IA",
  ],
  openGraph: {
    title: "Matrice d'Opportunités IA pour les RH",
    description: "Cartographie interactive des cas d'usage IA en ressources humaines",
    url: "https://rh.prompt101.fr/matrice",
  },
}

export default function MatricePage() {
  return <ClientMatricePage />
}
