import { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Loading from '../components/Loading';
import Questions from '../components/Questions';
import Finish from './Finish';
import Alert from '../components/Alert';
import ProgressBar from '../components/ProgressBar';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  selectedOption: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'active',
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
      const nextIndex = state.index + 1;
      if (state.selectedOption === null) {
        return {
          ...state,
          status: 'selectOneOption',
        };
      }
      if (nextIndex >= state.questions.length) {
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
    case 'lastQuestion':
      return {
        ...state,
        status: 'lastQuestion',
      };

    case 'selectOption':
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      throw new Error('Action Unknown');
  }
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const rearrangeAnswers = (correctAnswer, incorrectAnswers) => {
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  return shuffleArray(allAnswers);
};

const Quiz = () => {
  const [{ status, questions, index, selectedOption }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [showAlert, setShowAlert] = useState(false);

  const { categoryId } = useParams();

  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(600);

  const nextBtn = () => {
    if (index === 9) dispatch({ type: 'lastQuestion' });

    if (selectedOption !== null) {
      dispatch({ type: 'nextQuestion' });
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
    dispatch({ type: 'selectOption', payload: null });
  };

  const formattedTime = format(new Date(0, 0, 0, 0, 0, secondsLeft), 'mm:ss');

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&type=multiple&category=${categoryId}`
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

        dispatch({ type: 'dataReceived', payload: organizedData });
      } catch (error) {
        dispatch({ type: 'dataFailed' });
      }
    };

    fetchTriviaData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (secondsLeft === 0) {
      navigate('/timeout', { replace: true });
    }

    return () => clearInterval(timer); // Cleanup on unmount
  }, [navigate, secondsLeft]);
  return (
    <main
      className={`px-4 md:px-8 py-12 md:py-10 bg-gray-50 flex flex-1 flex-col gap-5 ${
        status === 'finished' && 'justify-center'
      }`}
    >
      <div className="flex justify-center">
        <div className="w-1/2 h-fit">
          {status === 'loading' && <Loading />}

          {status === 'active' && (
            <main className="flex flex-col items-left justify-center">
              <div className="flex justify-start gap-2 mb-2">
                Questions{' '}
                <p className="font-bold">
                  {index + 1}/{questions.length}
                </p>
              </div>
              <ProgressBar rate={((index + 1) / 10) * 100} />
              <Questions
                data={questions[index]}
                sendDataToParent={(option) =>
                  dispatch({ type: 'selectOption', payload: option })
                }
                selectedIdx={selectedOption}
                timeRemaining={formattedTime}
              />
            </main>
          )}
          {status === 'active' && (
            <div className="flex justify-end">
              <button className="btn-secondary btn" onClick={nextBtn}>
                {index <= 8 ? 'Next' : 'Finish'}
              </button>
            </div>
          )}
          {status === 'finished' && <Finish />}

          {showAlert && (
            <Alert>
              <div
                role="alert"
                className="alert alert-error !py-2 absolute bottom-5 right-2 w-max text-sm flex gap-1 items-center rounded-md"
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
                <span>Please select one option.</span>
              </div>
            </Alert>
          )}
        </div>
      </div>
    </main>
  );
};

export default Quiz;
