import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/Error';
import Dashboard from '../pages/Dashboard';
import Documentation from '../pages/Documentation';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
        path: 'documentation',
        element: <Documentation />,
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
