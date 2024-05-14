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
import AddCategory from '../pages/AddCategory';
import AddQuestions from '../pages/AddQuestions';

const isAuthenticated = () => {
  const userInfo = localStorage.getItem('user-info');
  // Check if userInfo exists and contains valid information
  return userInfo !== null && userInfo !== undefined && userInfo !== '';
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
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
      {
        path: 'add-categories',
        element: <ProtectedRoute element={<AddCategory />} />,
      },
      {
        path: 'add-questions',
        element: <ProtectedRoute element={<AddQuestions />} />,
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
