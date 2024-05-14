import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../consts/consts';

const AddQuestions = () => {
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState(null);
  const [options, setOptions] = useState(['', '', '', '']);
  const [question, setQuestions] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  // "subjectId":"663e2994c4aeecd7b20b1cd7",
  //   "options":["A","B","C","B"],
  //   "question":"Choose asd ewrewr?",
  //   "answer":2

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleRadioChange = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      subjectId: categoryId,
      options,
      question,
      answer: selectedOptionIndex,
    };
    try {
      let result = await fetch(
        'http://127.0.0.1:8000/api/quiz/questionBanks/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      if (!result.ok) {
        throw new Error('Question addition failed');
      }
      if (result.ok) {
        // setAlert(true);
      }
      result = await result.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const endPoint = BASE_URL + '/quiz/subjects/';
        const response = await fetch(endPoint);
        const previewData = await response.json();
        setCategories(previewData.data);
        console.log(previewData);
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      }
    };

    fetchCategory();
  }, []);
  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create Quiz</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form to create a new quiz.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                className="input"
                value={categoryId}
                onChange={handleCategoryChange}
              >
                {categories &&
                  categories.map((item) => (
                    <option value={item['_id']} key={item['_id']}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Question
            </label>
            <textarea
              id="description"
              placeholder="Enter quiz question"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              onChange={(e) => setQuestions(e.target.value)}
            ></textarea>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Quiz Options</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {options.map((option, index) => (
                <div className="space-y-2" key={index}>
                  <label
                    htmlFor={`option${index + 1}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Option {index + 1}
                  </label>
                  <input
                    id={`option${index + 1}`}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder={`Enter option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Correct Answer
              </label>

              {options.map((item, index) => (
                <div className="flex items-center gap-2">
                  <input
                    id={`option${index + 1}-radio`}
                    type="radio"
                    name="correct-answer"
                    value={index}
                    checked={selectedOptionIndex === index}
                    onChange={() => handleRadioChange(index)}
                  />
                  <label htmlFor={`option${index + 1}-radio`}>
                    Option {index + 1}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-primary w-full" type="submit">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestions;
