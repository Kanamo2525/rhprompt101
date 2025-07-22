"use client"

import { useTranslatedText } from "@/hooks/use-translated-text"
import type { JSX } from "react"

interface TranslatableTextProps {
  children: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function TranslatableText({ children, className = "", as: Component = "span" }: TranslatableTextProps) {
  const { translatedText, isLoading } = useTranslatedText(children)

  return (
    <Component className={className}>
      {isLoading ? (
        <span className="inline-flex items-center">
          {children}
          <span className="ml-2 animate-pulse text-blue-500">...</span>
        </span>
      ) : (
        translatedText
      )}
    </Component>
  )
}
