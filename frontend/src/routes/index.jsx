import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
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

const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check if the user is logged in
  // Get data from localStorage
  const userInfo = localStorage.getItem('user-info');
  console.log('checked');
  return true;

  // Check if userInfo exists
  if (userInfo) {
    const userInfoObj = JSON.parse(userInfo);

    if (userInfoObj.message === 'SUCCESS') return true;
  } else {
    return true;
  }
};

const ProtectedRoute = ({ element, ...rest }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return React.cloneElement(element, rest);
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <ProtectedRoute element={<Dashboard />} />,
      },
      {
        path: 'categories',
        element: <ProtectedRoute element={<Categories />} />,
      },
      {
        path: 'quiz',
        element: <ProtectedRoute element={<Quiz />} />,
        children: [
          {
            path: ':categoryId',
            element: <ProtectedRoute element={<Quiz />} />,
          },
        ],
      },
      {
        path: 'profile',
        element: <ProtectedRoute element={<Profile />} />,
      },
      {
        path: 'profilecard',
        element: <ProtectedRoute element={<ProfileCard />} />,
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
