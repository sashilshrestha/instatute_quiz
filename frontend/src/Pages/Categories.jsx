import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    document.getElementById('my_modal_1').showModal();
  };

  return (
    <main className="w-full mx-auto px-4 md:px-8 py-12 md:py-10">
      <div className="space-y-6 md:space-y-8">
        <div className="text-center bg-primary p-8 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Quiz Categories
          </h1>
          <p className="text-gray-100  mt-2 md:text-lg">
            Explore a wide range of quiz categories to test your knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories &&
            categories.map((category, index) => (
              <div
                key={index}
                className="card bg-base-100 rounded-lg overflow-hidden hover:scale-105 transition-all border mt-2 cursor-pointer hover:bg-primary hover:text-white hover:shadow-lg flex justify-center"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="p-6 flex flex-col items-center gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Modal category={selectedCategory} />
    </main>
  );
}
