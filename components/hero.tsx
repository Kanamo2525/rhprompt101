"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { TranslatableText } from "./translatable-text"

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <TranslatableText as="span" className="block xl:inline">
                  L'IA au service
                </TranslatableText>{" "}
                <TranslatableText as="span" className="block text-yellow-400 xl:inline">
                  de la transformation RH
                </TranslatableText>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <TranslatableText>
                  La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative
                  méthodiquement optimisés pour maximiser votre impact stratégique.
                </TranslatableText>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/catalogue"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    <TranslatableText>Explorer le catalogue</TranslatableText>
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="https://prompt101.aflip.in/guideIARH.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    <TranslatableText>Consulter le guide</TranslatableText>
                    <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/hr-technology.jpeg"
          alt="HR Technology"
        />
      </div>
    </div>
  )
}
