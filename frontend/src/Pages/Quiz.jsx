import { useState, useEffect, useReducer } from 'react';
import Loading from '../components/Loading';
import Questions from '../components/Questions';

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  index: 2,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
      };
    case 'nextQuestion':
      // Move to the next question
      const nextIndex = state.index + 1;
      if (nextIndex >= state.questions.length) {
        // If there are no more questions, change status to 'finished'
        return {
          ...state,
          status: 'finished',
        };
      } else {
        return {
          ...state,
          index: nextIndex,
        };
      }

    default:
      throw new Error('Action Unknown');
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function rearrangeAnswers(correctAnswer, incorrectAnswers) {
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  return shuffleArray(allAnswers);
}

const Quiz = () => {
  const [{ status, questions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [receivedFromChild, setReceievedFromChild] = useState(null);
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        const response = await fetch(
          'https://opentdb.com/api.php?amount=10&type=multiple'
        );
        const data = await response.json();

        const organizedData = data.results.map((item) => {
          return {
            ...item,
            options: rearrangeAnswers(
              item.correct_answer,
              item.incorrect_answers
            ),
          };
        });
        console.log(organizedData);

        dispatch({ type: 'dataReceived', payload: organizedData });
      } catch (error) {
        dispatch({ type: 'dataFailed' });
      }
    };

    fetchTriviaData();
  }, []);

  const nextBtn = () => {
    dispatch({ type: 'nextQuestion' });
    setAnswerList((data) => [...data, receivedFromChild]);
  };

  return (
    <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200 justify-center flex">
      <div className="w-1/2">
        {status === 'loading' && <Loading />}

        {status === 'ready' && (
          <div>
            <button onClick={() => dispatch({ type: 'start' })}>
              Start Now
            </button>
          </div>
        )}
        {status === 'active' && (
          <Questions
            data={questions[index]}
            sendDataToParent={(option) => setReceievedFromChild(option)}
            selectedIdx={receivedFromChild}
          />
        )}
        {status === 'active' && (
          <div className="flex justify-end">
            <button className="btn-secondary btn mt-4 " onClick={nextBtn}>
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Quiz;
