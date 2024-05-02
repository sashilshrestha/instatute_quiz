import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    // Log email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div class="min-h-screen bg-base-200 flex items-center">
      <div class="card mx-auto w-full max-w-5xl  shadow-xl">
        <div class="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div class="">
            <div class="hero min-h-full rounded-l-xl bg-base-200">
              <div class="hero-content py-12">
                <div class="max-w-md">
                  <h1 class="text-3xl text-center font-bold ">
                    <img
                      src="/logo192.png"
                      class="w-12 inline-block mr-2 mask mask-circle"
                      alt="dashwind-logo"
                    />
                    DashWind
                  </h1>
                  <div class="text-center mt-12">
                    <img
                      src="./intro.png"
                      alt="Dashwind Admin Template"
                      class="w-48 inline-block"
                    />
                  </div>
                  <h1 class="text-2xl mt-8 font-bold">
                    Admin Dashboard Starter Kit
                  </h1>
                  <p class="py-2 mt-4">
                    ✓ <span class="font-semibold">Light/dark asdsad</span> mode
                    toggle
                  </p>
                  <p class="py-2 ">
                    ✓ <span class="font-semibold">Redux toolkit</span> and other
                    utility libraries configured
                  </p>
                  <p class="py-2">
                    ✓{' '}
                    <span class="font-semibold">Calendar, Modal, Sidebar </span>{' '}
                    components
                  </p>
                  <p class="py-2  ">
                    ✓ User-friendly{' '}
                    <span class="font-semibold">documentation</span>
                  </p>
                  <p class="py-2  mb-4">
                    ✓ <span class="font-semibold">Daisy UI</span> components,{' '}
                    <span class="font-semibold">Tailwind CSS</span> support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-24 px-10">
            <h2 class="text-2xl font-semibold mb-2 text-center">Register</h2>
            <form>
              <div class="mb-4">
                <div class="form-control w-full mt-4">
                  <label class="label">
                    <span class="label-text text-base-content undefined">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    class="input  input-bordered w-full "
                    value=""
                  />
                </div>
                <div class="form-control w-full mt-4">
                  <label class="label">
                    <span class="label-text text-base-content undefined">
                      Email Id
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    class="input  input-bordered w-full "
                    value="admin"
                  />
                </div>
                <div class="form-control w-full mt-4">
                  <label class="label">
                    <span class="label-text text-base-content undefined">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    class="input  input-bordered w-full "
                    value="admin"
                  />
                </div>
              </div>
              <p class="text-center  text-error mt-8"></p>
              <button type="submit" class="btn mt-2 w-full btn-primary">
                Register
              </button>
              <div class="text-center mt-4">
                Already have an account?{' '}
                <a href="/login">
                  <span class="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
