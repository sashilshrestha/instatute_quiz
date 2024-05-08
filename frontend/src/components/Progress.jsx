import React from 'react';

const Progress = () => {
  return (
    <div className="w-full">
      <div className="relative h-2 w-full rounded-full bg-gray-500 ">
        <div
          aria-label="Progress"
          className="absolute left-0 top-0 h-full w-[44%] rounded-full bg-primary"
        ></div>
      </div>
    </div>
  );
};

export default Progress;
