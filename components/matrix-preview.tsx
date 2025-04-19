import Link from "next/link"

export function MatrixPreview() {
  return (
    <section id="matrice" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Matrice d'Opportunités IA</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Un outil analytique pour construire votre feuille de route d'implémentation de l'IA générative en RH
          </p>
        </div>

        <div className="mt-10 bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
            <h3 className="text-lg leading-6 font-medium">Tableau croisé cas d'usage, techniques et opportunités</h3>
            <p className="mt-1 max-w-2xl text-sm text-indigo-100">
              Explorer les liens stratégiques et construire votre trajectoire de transformation
            </p>
          </div>
          <div className="border-t border-gray-200 p-6">
            <div className="relative overflow-hidden h-64 rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-sm z-10">
                <h3 className="text-lg font-medium text-gray-900">Visualisation interactive</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Tableau croisé interactif avec filtres dynamiques, tri et analyse visuelle
                </p>
                <Link
                  href="/matrice"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Explorer la matrice complète
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-70"></div>
              <div className="absolute inset-0 opacity-10"></div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">Automatisation</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">10</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <span className="sr-only">Cas d'usage</span>
                          cas d'usage
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">Assistance</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">9</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <span className="sr-only">Cas d'usage</span>
                          cas d'usage
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">Augmentation</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">5</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <span className="sr-only">Cas d'usage</span>
                          cas d'usage
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">Avant-Garde</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">2</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <span className="sr-only">Cas d'usage</span>
                          cas d'usage
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
