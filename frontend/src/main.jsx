import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import Login from './Login.jsx';
import Register from './Register.jsx';
import './index.css';
import Home from './Pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Register />
    {/* <App /> */}
  </React.StrictMode>
);
