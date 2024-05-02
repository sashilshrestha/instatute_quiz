import React from 'react';

export default function Categories({ categories }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-2">
          {categories &&
            categories.trivia_categories.map((category, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-lg">
                  <img
                    alt={category.name}
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={category.image}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {category.name}
                    </h2>
                    <p className="text-gray-500">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
