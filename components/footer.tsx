import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} prompt101.fr. Licence Creative Commons.
            <br className="md:hidden" />
            <span className="md:ml-1">Par Kristy Anamoutou</span>
            <span className="mx-1 hidden md:inline">•</span>
            <span className="flex items-center gap-1 md:inline-flex">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/by-nc-nd-EPX4LonDe6vspEk3PX5lqJKcx0KHJm.png"
                alt="Licence Creative Commons BY-NC-ND"
                width={80}
                height={28}
                className="inline-block"
              />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="text-sm text-muted-foreground hover:text-foreground">
            Politique de confidentialité
          </Link>
          <Link
            href="https://github.com/Kanamo2525"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kanamo/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
