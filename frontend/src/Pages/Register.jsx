import React, { useReducer, useState } from 'react';
import Logo from '../../public/Logo.png';
import axios from 'axios';
import { BASE_URL } from '../consts/consts';

const Register = () => {
  const [userDetails,setUserDetails] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [isLoading,setIsLoading] = useState(false); 
  
  const handleChange = (e, field)=>{
    const {name,value} = e.target;
console.log(name, value)

    setUserDetails({
      ...userDetails,
      [field]: value
    })
  }

  const handleSubmit = async(e) => {
    try{
      e.preventDefault();

      setIsLoading(true)
    

      const endPoint = BASE_URL + '/user/register'
  
      await axios.post(endPoint,userDetails,{
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      window.location.reload();
    }
    catch(err){
      console.log(err.message);
    }
    finally{
      setIsLoading(false)
    }
  };


  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-2xl shadow-xl">
        <div className="bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <div className="flex justify-center items-center mb-8">
              <img src={Logo} alt="" className="w-24" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Registration Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className={`form-control w-full`}>
                  <label className="label">
                    <span className={'label-text text-base-content '}>
                      Fullname
                    </span>
                  </label>
                  <input
                    type='text'
                    value={userDetails.fullName}
                    onChange={(e) => handleChange (e, 'fullName')}
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
                    type='text'
                    value={userDetails.email}
                    onChange={(e) => handleChange (e, 'email')}
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
                    type='password'
                    value={userDetails.password}
                    onChange={(e) => handleChange (e, 'password')}
                    className="input  input-bordered w-full "
                  />
                </div>
              </div>

              {
                isLoading ? <p>Loading</p> : (
                  <button type="submit" className={'btn mt-2 w-full btn-primary'}>
                  Register
                </button>
                )
              }

             
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
