import type React from "react"
import { cn } from "@/lib/utils"

interface ArticleHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  id?: string
}

export function ArticleHeading({ level = 2, children, className, id, ...props }: ArticleHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const styles = {
    1: "text-3xl md:text-4xl font-bold text-black",
    2: "text-2xl font-bold text-black mt-8 mb-4 scroll-mt-20",
    3: "text-xl font-semibold text-black mt-6 mb-3",
    4: "text-lg font-semibold text-black mt-4 mb-2",
    5: "text-base font-semibold text-black mt-3 mb-1",
    6: "text-sm font-semibold text-black mt-2 mb-1",
  }

  return (
    <Tag id={id} className={cn(styles[level], className)} {...props}>
      {children}
    </Tag>
  )
}
