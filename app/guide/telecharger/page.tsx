import TelechargerClientPage from "./TelechargerClientPage"

export const metadata = {
  title: "Télécharger le Guide IA pour RH - Gratuit | RH.Prompt101.fr",
  description:
    "Téléchargez gratuitement notre guide complet de 280 pages sur l'IA générative pour RH. PDF gratuit avec matrice d'opportunités, techniques de prompting et stratégie de mise en œuvre.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function TelechargerPage() {
  return <TelechargerClientPage />
}
