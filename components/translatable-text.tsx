"use client"
import { useTranslatedText } from "@/hooks/use-translated-text"
import { useTranslation } from "@/contexts/translation-context"

interface TranslatableTextProps {
  children: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function TranslatableText({ children, className, as: Component = "span" }: TranslatableTextProps) {
  const translatedText = useTranslatedText(children)
  const { isTranslating } = useTranslation()

  return <Component className={`${className} ${isTranslating ? "opacity-70" : ""}`}>{translatedText}</Component>
}
