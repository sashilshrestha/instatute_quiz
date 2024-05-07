import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/Error';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Categories from '../pages/Categories';
import Quiz from '../pages/Quiz';

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
]);
