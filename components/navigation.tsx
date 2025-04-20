"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/catalogue" && pathname?.startsWith("/catalogue")) return true
    if (path === "/matrice" && pathname?.startsWith("/matrice")) return true
    if (path === "/guide" && pathname?.startsWith("/guide")) return true
    if (path === "/article" && pathname?.startsWith("/article")) return true
    return path === pathname
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-blue-700 font-bold text-xl">RH</span>
                <span className="text-gray-800 font-bold text-xl ml-0.5">.PROMPT</span>
                <span className="text-gray-500 font-bold text-xl">101.FR</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/catalogue"
                className={`${isActive("/catalogue") ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Catalogue de Prompts
              </Link>
              <Link
                href="/matrice"
                className={`${isActive("/matrice") ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Matrice d'Opportunités
              </Link>
              <Link
                href="/guide"
                className={`${isActive("/guide") ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Guide IA pour RH
              </Link>
              <Link
                href="/article"
                className={`${isActive("/article") ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Articles
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="https://prompt101.fr/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Espace Prompt101.fr
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
