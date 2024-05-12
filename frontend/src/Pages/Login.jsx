import React, { useState } from 'react';
import Logo from '../../public/Logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const submitForm = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Email:', email);
    console.log('Password:', password);
    login(); // Call login function after form submission
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/user/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    // Navigate to /dashboard after successful login
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="card mx-auto w-full max-w-2xl shadow-xl">
        <div className="bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <div className="flex justify-center items-center mb-8">
              <img src={Logo} alt="" className="w-24" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <div className={`form-control w-full`}>
                  <label className="label">
                    Email / UserName
                    <span className={'label-text text-base-content'}></span>
                  </label>
                  <input
                    type={'text'}
                    value={email}
                    placeholder={''}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className={`form-control w-full`}>
                  <label className="label">
                    Password
                    <span className={'label-text text-base-content'}></span>
                  </label>
                  <input
                    type={'password'}
                    value={password}
                    placeholder={''}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <button type="submit" className={'btn mt-2 w-full btn-primary'}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
