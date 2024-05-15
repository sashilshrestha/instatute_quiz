import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Loading from '../components/Loading';
import { BASE_URL } from '../consts/consts';

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const endPoint = BASE_URL + '/quiz/subjects/';
        const response = await fetch(endPoint);
        const previewData = await response.json();
        setCategories(previewData.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      }
    };

    fetchCategory();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) document.getElementById('my_modal_1').showModal();
  }, [showModal]);

  if (isLoading)
    return (
      <div className="relative w-full h-64">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
          <Loading />
        </div>
      </div>
    );

  return (
    <main className="w-full mx-auto px-4 md:px-8 py-12 md:py-10 bg-gray-50">
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
                className="card bg-gray-50 border-2 hover:border-primary rounded-lg overflow-hidden hover:scale-105 transition-all mt-2 cursor-pointer hover:bg-primary hover:text-white hover:shadow-lg flex justify-center"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="p-6 flex flex-col items-center gap-4">
                  <h3 className="text-lg font-semibold text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
      {showModal && (
        <Modal
          category={selectedCategory}
          closeModal={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
