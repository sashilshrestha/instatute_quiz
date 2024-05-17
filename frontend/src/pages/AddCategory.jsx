import React from 'react';
import { useState } from 'react';
import Alert from '../components/Alert';
import Loading from '../components/Loading';

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const [alert, setAlert] = useState(false);
  const [isLoading, setLoading] = useState(false);

  let item = { name: category };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let result = await fetch('http://127.0.0.1:8000/api/quiz/subjects/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (!result.ok) {
        throw new Error('Subject addition failed');
      }
      if (result.ok) {
        setLoading(false);
        setAlert(true);
      }
      result = await result.json();
      setCategory('');
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setAlert(false);
      setCategory('');
    }, 1000);
  };

  if (isLoading)
    return (
      <div className="relative w-full h-64">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
          <Loading />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300  .bg-gray-500">
      {alert && (
        <Alert>
          <div
            role="alert"
            className="bg-green-700 px-4 text-white !py-2 absolute bottom-5 right-2 w-max text-sm flex gap-1 items-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Category Added Successfully</span>
          </div>
        </Alert>
      )}
      <div className="bg-white-100 dark:bg-gray-100 shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className=" text-2xl font-bold mb-6 dark:text-black-500 text-left">
          Add Category
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="block text-sm font-bold text-gray-700 dark:text-black-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                id="name"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-green-500"
              type="submit"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
