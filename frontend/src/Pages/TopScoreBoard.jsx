export default function TopScoreBoard() {
    return(
        <div className="bg-gradient-to-b from-yellow-100 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 animate-bounce">
              🎉 Global Top Score Ranking 🎉
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Celebrating the best of the best in our quiz competitions!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 font-medium">
                  <th className="py-3 px-4 text-left">🏆 Rank</th>
                  <th className="py-3 px-4 text-left">🎖️ Username</th>
                  <th className="py-3 px-4 text-left">🏅 Quiz Category</th>
                  <th className="py-3 px-4 text-left">📅 Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-green-500 font-bold">
                    1st
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-blue-500 font-bold">
                    Tracy
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-yellow-500 font-bold">
                    Mathematics
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-pink-500 font-bold">
                    2024-05-07
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-green-500 font-bold">
                    2nd
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-blue-500 font-bold">
                    Kamala
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-yellow-500 font-bold">
                    Science
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-pink-500 font-bold">
                    2024-04-21
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-green-500 font-bold">
                    3rd
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-blue-500 font-bold">
                    Amal
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-yellow-500 font-bold">
                    History
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-pink-500 font-bold">
                    2024-03-15
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-green-500 font-bold">
                    4th
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-blue-500 font-bold">
                    kamal
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-yellow-500 font-bold">
                    Geography
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-pink-500 font-bold">
                    2024-02-28
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-green-500 font-bold">
                    5th
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-blue-500 font-bold">
                    Nimala
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-yellow-500 font-bold">
                    Entertainment
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-pink-500 font-bold">
                    2024-01-12
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-green-500 font-bold">
                    1st
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-blue-500 font-bold">
                    Kalpani
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-yellow-500 font-bold">
                    Geography
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-gray-200 animate-pulse text-pink-500 font-bold">
                    2024-01-12
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}