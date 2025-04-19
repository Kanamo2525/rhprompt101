import Link from "next/link"

export function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          <span className="block">Prêt à transformer votre fonction RH?</span>
          <span className="block text-indigo-200">Rejoignez la communauté des leaders RH augmentés.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="https://prompt101.fr/proposer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Proposer un prompt
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="/guide/acheter"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Achetez le guide papier
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
