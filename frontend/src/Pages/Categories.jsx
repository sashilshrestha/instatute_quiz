import { useEffect, useState } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        const response = await fetch('https://opentdb.com/api_category.php');
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      }
    };

    fetchTriviaData();
  }, []);
  return (
    // <section classNameName="text-gray-600 body-font">
    //   <div classNameName="container px-5 py-24 mx-auto">
    //     <div classNameName="flex flex-wrap -m-2">
    //       {categories &&
    //         categories.trivia_categories.map((category, index) => (
    //           <div key={index} classNameName="p-2 lg:w-1/3 md:w-1/2 w-full ">
    //             <div classNameName="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-lg">
    //               <img
    //                 alt={category.name}
    //                 classNameName="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
    //                 src={category.image}
    //               />
    //               <div classNameName="flex-grow">
    //                 <h2 classNameName="text-gray-900 title-font font-medium">
    //                   {category.name}
    //                 </h2>
    //                 <p classNameName="text-gray-500">{category.description}</p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </section>
    // <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {categories &&
    //       categories.map((category, index) => (
    //         <div
    //           className="card w-full p-6 bg-base-100"
    //           key={category.id}
    //         >
    //           <div className="text-xl font-semibold ">{category.name}</div>
    //         </div>
    //       ))}
    //   </div>
    //   <div className="h-16"></div>
    // </main>
    <main className="w-full mx-auto px-4 md:px-8 py-12 md:py-10">
      <div className="space-y-6 md:space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Quiz Categories</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 md:text-lg">
            Explore a wide range of quiz categories to test your knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories &&
            categories.map((category, index) => (
              <div className="card bg-base-100 rounded-lg overflow-hidden hover:shadow-lg transition-all shadow-xl mt-2 cursor-pointer">
                <div className="p-6 flex flex-col items-center gap-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm md:text-base">
                    Test your knowledge of classic literature, authors, and
                  </p>
                  <button
                    className="btn btn-primary btn-outline hover:scale-105 transition-all"
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    Take Quiz
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
