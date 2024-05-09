import React from 'react';

const Questions = ({ sendDataToParent, data, selectedIdx, timeRemaining }) => {
  const handleClick = (item) => {
    sendDataToParent(item);
  };

  return (
    <div>
      <h1
        className="text-3xl text-bold mb-6 font-bold mt-8"
        dangerouslySetInnerHTML={{ __html: data.question }}
      ></h1>
      <div className="w-full rounded-lg space-y-6">
        <div className="flex items-center justify-between"></div>
        <div className="text-lg font-medium text-gray-900 dark:text-gray-100"></div>
        <div className="grid grid-cols-1 gap-4">
          {data.options.map((item, idx) => (
            <button
              className={`btn btn-primary rounded-lg py-3 px-4 transition-all text-lg text-left flex justify-start text-white hover:!text-white hover:!bg-primary ${
                selectedIdx !== idx &&
                'btn-outline border-gray-500 !text-gray-600'
              }`}
              onClick={() => handleClick(idx)}
              dangerouslySetInnerHTML={{ __html: ` ${idx + 1}) ${item}` }}
              key={idx}
            ></button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Time remaining: {timeRemaining}s
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
