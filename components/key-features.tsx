"use client"

import { BookOpen, Target, Zap } from "lucide-react"
import { TranslatableText } from "./translatable-text"

export function KeyFeatures() {
  const features = [
    {
      name: "Catalogue de Prompts RH",
      description:
        "Une bibliothèque structurée de prompts hautement optimisés pour chaque domaine RH, prêts à l'emploi et continuellement enrichis par notre communauté d'experts.",
      icon: BookOpen,
    },
    {
      name: "Matrice d'opportunités",
      description:
        "Un tableau analytique croisant cas d'usage, techniques avancées et types d'opportunités pour construire votre stratégie d'implémentation de l'IA générative.",
      icon: Target,
    },
    {
      name: "Guide IA pour RH",
      description:
        "Un ouvrage stratégique complet détaillant méthodologies, cas d'usage et trajectoires d'implémentation pour transformer votre fonction RH par l'IA générative.",
      icon: Zap,
    },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            <TranslatableText>Ressources stratégiques</TranslatableText>
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <TranslatableText>Trois piliers essentiels pour votre transformation RH</TranslatableText>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            <TranslatableText>
              Des ressources méthodiquement conçues pour accélérer votre maîtrise de l'IA générative en contexte RH
            </TranslatableText>
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    <TranslatableText>{feature.name}</TranslatableText>
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <TranslatableText>{feature.description}</TranslatableText>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
