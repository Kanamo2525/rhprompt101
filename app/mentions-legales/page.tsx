import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mentions Légales | RH.Prompt101.fr",
  description: "Mentions légales et informations juridiques concernant le site RH.Prompt101.fr",
}

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Édition du site</h2>
          <p className="mb-2">
            Le site RH.Prompt101.fr est édité par la société Prompt101, entreprise spécialisée dans les solutions
            d'intelligence artificielle pour les professionnels RH.
          </p>
          <p className="mb-2">
            <strong>Siège social :</strong> [Adresse à compléter]
          </p>
          <p className="mb-2">
            <strong>SIRET :</strong> [Numéro SIRET à compléter]
          </p>
          <p className="mb-2">
            <strong>Directeur de la publication :</strong> [Nom du directeur de publication à compléter]
          </p>
          <p className="mb-2">
            <strong>Contact :</strong>{" "}
            <a href="mailto:contact@prompt101.fr" className="text-blue-600 hover:underline">
              contact@prompt101.fr
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
          <p className="mb-2">Le site RH.Prompt101.fr est hébergé par la société Vercel Inc.</p>
          <p className="mb-2">
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
          <p className="mb-2">
            <strong>Site web :</strong>{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p className="mb-2">
            L'ensemble du contenu présent sur le site RH.Prompt101.fr, incluant sans limitation les textes, graphiques,
            logos, icônes, images, clips audio, téléchargements numériques, et compilations de données, est la propriété
            exclusive de Prompt101 ou de ses fournisseurs de contenu et est protégé par les lois françaises et
            internationales relatives à la propriété intellectuelle.
          </p>
          <p className="mb-2">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
            de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Prompt101. Cette
            représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par
            les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
          <p className="mb-2">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles
            vous concernant.
          </p>
          <p className="mb-2">
            Ces droits peuvent être exercés en nous contactant à l'adresse email suivante :{" "}
            <a href="mailto:contact@prompt101.fr" className="text-blue-600 hover:underline">
              contact@prompt101.fr
            </a>
          </p>
          <p className="mb-2">
            Nous nous engageons à protéger vos données personnelles et à les traiter avec la plus grande
            confidentialité. Pour plus d'informations sur la façon dont nous traitons vos données, veuillez consulter
            notre{" "}
            <Link href="/politique-de-confidentialite" className="text-blue-600 hover:underline">
              Politique de Confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p className="mb-2">
            Le site RH.Prompt101.fr peut utiliser des cookies pour améliorer l'expérience utilisateur. Un cookie est un
            petit fichier texte stocké sur votre ordinateur qui permet d'enregistrer des informations relatives à votre
            navigation sur notre site.
          </p>
          <p className="mb-2">
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti lorsqu'un cookie est envoyé.
            Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies sont
            désactivés.
          </p>
          <p className="mb-2">
            La gestion des cookies est assurée par Axeptio, qui vous permet de donner ou retirer votre consentement à
            tout moment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Liens hypertextes</h2>
          <p className="mb-2">
            Le site RH.Prompt101.fr peut contenir des liens hypertextes vers d'autres sites internet. Nous n'avons pas
            la possibilité de vérifier le contenu des sites ainsi visités, et n'assumons donc aucune responsabilité
            quant aux risques éventuels de contenus illicites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation de responsabilité</h2>
          <p className="mb-2">
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis à
            jour. Cependant, des erreurs ou omissions peuvent survenir. Prompt101 ne pourra être tenu responsable pour
            tout dommage direct ou indirect résultant de l'accès à son site web ou de l'utilisation des informations et
            services disponibles sur ce site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Droit applicable et juridiction compétente</h2>
          <p className="mb-2">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Modification des mentions légales</h2>
          <p className="mb-2">
            Prompt101 se réserve le droit de modifier les présentes mentions légales à tout moment. L'utilisateur est
            donc invité à les consulter régulièrement.
          </p>
          <p className="mb-2">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
