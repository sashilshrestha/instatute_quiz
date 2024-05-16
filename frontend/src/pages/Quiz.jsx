import { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Loading from '../components/Loading';
import Questions from '../components/Questions';
import Finish from './Finish';
import Alert from '../components/Alert';
import ProgressBar from '../components/ProgressBar';
import { BASE_URL } from '../consts/consts';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  selectedOption: null,
  score: 0,
  categoryNum: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'active',
      };
    case 'categoryNum':
      return {
        ...state,
        categoryNum: action.payload,
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

    case 'setScore':
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      throw new Error('Action Unknown');
  }
};

const Quiz = () => {
  const [
    { status, questions, index, selectedOption, score, categoryNum },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [showAlert, setShowAlert] = useState(false);

  const { categoryId } = useParams();

  const navigate = useNavigate();

  const [secondsLeft, setSecondsLeft] = useState(600);

  const setScore = () => {
    if (questions[index].answer === selectedOption)
      dispatch({ type: 'setScore', payload: 10 });
  };

  const nextBtn = async () => {
    const userInfo = localStorage.getItem('user-info');

    const userId = JSON.parse(userInfo).data.userId;
    if (index === 9) dispatch({ type: 'lastQuestion' });

    if (selectedOption !== null) {
      dispatch({ type: 'nextQuestion' });
      setScore();
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
    dispatch({ type: 'selectOption', payload: null });

    if (index + 1 === questions.length) {
      const item = {
        userId,
        subjectId: categoryNum,
        totalScores: score,
        totalQuestions: 10,
      };
      try {
        let result = await fetch('http://127.0.0.1:8000/api/quiz/userQuiz/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(item),
        });
        if (!result.ok) {
          throw new Error('Scoring failed');
        }
        if (result.ok) {
        }
        result = await result.json();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formattedTime = format(new Date(0, 0, 0, 0, 0, secondsLeft), 'mm:ss');

  const fetchTriviaData = async () => {
    try {
      const endPoint = BASE_URL + '/quiz/distributeQuestions/';
      const response = await fetch(`${endPoint}${categoryId}/`);
      const previewData = await response.json();

      dispatch({ type: 'dataReceived', payload: previewData.data.questions });
      dispatch({
        type: 'categoryNum',
        payload: previewData.data.subject['_id'],
      });
    } catch (error) {
      dispatch({ type: 'dataFailed' });
    }
  };

  useEffect(() => {
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
      {status === 'loading' && (
        <div className="relative w-full h-64">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
            <Loading />
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="w-1/2 h-fit">
          {status === 'active' && (
            <main className="flex flex-col items-left justify-center">
              <div className="flex justify-start gap-2 mb-2">
                Questions{' '}
                <p className="font-bold">
                  {index + 1}/{questions.length}
                </p>
              </div>
              <ProgressBar rate={((index + 1) / questions.length) * 100} />
              <Questions
                data={questions[index]}
                sendDataToParent={(option) =>
                  dispatch({ type: 'selectOption', payload: option })
                }
                selectedIdx={selectedOption}
                timeRemaining={formattedTime}
                increaseScore={(option) => {
                  dispatch({ type: 'setScore', payload: option });
                }}
              />
            </main>
          )}
          {status === 'active' && (
            <div className="flex justify-end">
              <button className="btn-secondary btn" onClick={nextBtn}>
                {index + 1 < questions.length ? 'Next' : 'Finish'}
              </button>
            </div>
          )}
          {status === 'finished' && (
            <Finish score={score} totalScore={questions.length * 10} />
          )}
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
