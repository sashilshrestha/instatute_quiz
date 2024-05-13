import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/Error';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Categories from '../pages/Categories';
import Quiz from '../pages/Quiz';
import QuizTimeout from '../pages/QuizTimeout';
import Profile from '../pages/Profile';
import ProfileCard from '../pages/ProfileCard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
        children: [
          {
            path: ':categoryId',
            element: <Quiz />,
          },
        ],
      }, 
      {
        path: 'profile',
        element: <Profile/>,
      },
      {
        path: 'profilecard',
        element: <ProfileCard/>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: 'timeout',
    element: <QuizTimeout />,
  },
  
]);
