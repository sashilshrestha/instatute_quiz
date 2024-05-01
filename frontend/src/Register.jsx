import React, { useState } from 'react';
 
const Register = () => {
  const [Firstname, SetFirstname] = useState('');
  const [Lastname, SetLastname] = useState('');
  const [Username, SetUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const submitForm = (e) => {
    e.preventDefault();
 
    //Log email and password
    console.log('Firstname:', Firstname);
    console.log('Lastname:', Lastname)
    console.log('Username:', Username);
    console.log('email:', email);
    console.log('password', password);
 
    //Reset form fields
    SetFirstname('');
    SetLastname('');
    SetUsername('');
    setEmail('');
    setPassword('');
   
  };

  const updateFirstname = (e) => {
    SetFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    SetLastname(e.target.value);
  };

  const updateUsername = (e) => {
    SetUsername(e.target.value);
  };
 
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
 
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <div className="hero min-h-full rounded-l-xl bg-base-200">
              <div className="hero-content py-12">
                <div className="max-w-md">
                  <h1 className="text-3xl text-center font-bold ">
                    <img
                      src="frontend/s.png"
                      className="w-12 inline-block mr-2 mask mask-circle"
                      alt="dashwind-logo"
                    />
                    DashWind
                  </h1>
 
                  <div className="text-center mt-12">
                    <img
                      src="frontend/s.png"
                      alt="Dashwind Admin Template"
                      className="w-48 inline-block"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Registration Form
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">

              <div className={`form-control w-full`}>
                  <label className="label">
                    <span className={'label-text text-base-content '}>
                      Firstname
                    </span>
                  </label>
                  <input
                    type={'Firstname'}
                    value={Firstname}
                    onChange={updateFirstname}
                    className="input  input-bordered w-full "
                  />
                </div>

                <div className={`form-control w-full`}>
                  <label className="label">
                    <span className={'label-text text-base-content '}>
                      Lastname
                    </span>
                  </label>
                  <input
                    type={'Lastname'}
                    value={Lastname}
                    onChange={updateLastname}
                    className="input  input-bordered w-full "
                  />
                </div>

              <div className={`form-control w-full`}>
                  <label className="label">
                    <span className={'label-text text-base-content '}>
                      Username
                    </span>
                  </label>
                  <input
                    type={'Username'}
                    value={Username}
                    onChange={updateUsername}
                    className="input  input-bordered w-full "
                  />
                </div>
                <div className={`form-control w-full`}>
                  <label className="label">
                    <span className={'label-text text-base-content '}>
                      Email Id
                    </span>
                  </label>
                  <input
                    type={'text'}
                    value={email}
                    onChange={updateEmail}
                    className="input  input-bordered w-full "
                  />
                </div>
                <div className={`form-control w-full`}>
                  <label className="label">
                    <span className={'label-text text-base-content '}>
                      Password
                    </span>
                  </label>
                  <input
                    type={'password'}
                    value={password}
                    onChange={updatePassword}
                    className="input  input-bordered w-full "
                  />
                </div>
              </div>
 
              <button type="submit" className={'btn mt-2 w-full btn-primary'}>
                Register
              </button>
 
              <div className="text-center mt-4">
                Already have an account?{' '}
                 {/* <Link to="/login">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
                  </span>
                </Link>  */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Register;