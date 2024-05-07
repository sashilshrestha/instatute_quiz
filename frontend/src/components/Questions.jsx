import React from 'react';

const Questions = ({ sendDataToParent, data, selectedIdx }) => {
  const handleClick = (item) => {
    sendDataToParent(item);
  };

  return (
    <div>
      {/* <h1 className="text-2xl text-bold mb-6 font-bold">{data.question}</h1>
      <div className="flex flex-col gap-4">
        {data.options.map((item, idx) => (
          <div
            className={`btn-primary btn justify-start ${
              selectedIdx === idx && 'btn-secondary'
            }`}
            onClick={() => handleClick(idx)}
          >
            {item}
          </div>
        ))}
      </div> */}
      <main className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl text-bold mb-6 font-bold">{data.question}</h1>
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>3 / 10</span>
            </div>
          </div>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100"></div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg py-3 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Paris
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg py-3 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              London
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg py-3 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Berlin
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg py-3 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Madrid
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Time remaining: 30s
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 px-6 transition-colors">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questions;
