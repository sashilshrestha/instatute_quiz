import React, { useState } from 'react';
import Logo from '../../public/Logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
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
                    onChange={updateEmail}
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
                    onChange={updatePassword}
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
