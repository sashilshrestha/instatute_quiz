import React from 'react';

function QuizTimeoutPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Time's Up!</h1>
            <p className="text-gray-600 dark:text-gray-400">Your time to complete the quiz has expired.</p>
            <div className="flex items-center justify-center">
              <div className="text-6xl font-bold text-red-500 dark:text-red-400 animate-pulse">
                <span id="timer">60</span>
              </div>
              <span className="text-gray-600 dark:text-gray-400 ml-2">seconds</span>
            </div>
            <button className="inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-400">
              Go to Summary Page
            </button>
          </div>
        </div>
      </div>
    );
}
export default QuizTimeoutPage;
