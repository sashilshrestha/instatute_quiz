import React from 'react';
import { useState } from 'react';

const ProfilePage=() =>{
  // Define state variables for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Define handleChange function to update state when input values change
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
    

      const endPoint = BASE_URL + 'url'
  
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-green-500 sm:text-sm"
                id="name"
                placeholder="Enter your name"
                type="text"
                value={userDetails.name}
                onChange={(e) => handleChange(e, 'name')}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-green-500 sm:text-sm"
                id="email"
                placeholder="Enter your email"
                type="email"
                value={userDetails.email}
                onChange={(e) => handleChange(e, 'email')}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="new-password">
                New Password
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-green-500 sm:text-sm"
                id="new-password"
                placeholder="Enter a new password"
                type="password"
                value={userDetails.newPassword}
                onChange={(e) => handleChange(e, 'newPassword')}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-indigo-500 focus:border-green-500 sm:text-sm"
                id="confirm-password"
                placeholder="Confirm your new password"
                type="password"
                value={userDetails.confirmPassword}
                onChange={(e) => handleChange(e, 'confirmPassword')}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit" // Change type to submit for form submission
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
