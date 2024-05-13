import React from 'react';
import { useState } from 'react';
import { notification } from 'antd';

const ProfilePage=() =>{
  
  const [userDetails, setUserDetails] = useState({
    name: "srinath",
    email: "srinath@gmail.com",
    newPassword: "",
    confirmPassword: ""
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
      if (userDetails.newPassword !== userDetails.confirmPassword) {
        notification.error({ message: 'Passwords do not match' });
        return;
      }
      if (userDetails.newPassword.length < 6) {
        notification.error({ message: 'Password must be at least 6 characters long' });
        return;
      }
      const endPoint = BASE_URL + '/user/profile'
  
      await axios.post(endPoint,userDetails,{
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      if(response){
        notification.success({message:'Profile changes updated'})
        
      }
      window.location.reload();
    }
    catch(err){
      console.log(err.message);
      notification.error({message: err})
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300  .bg-gray-500">
      <div className="bg-white-100 dark:bg-gray-100 shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className=" text-2xl font-bold mb-6 dark:text-black-500 text-center">User Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-black-600" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                id="name"
              
                type="text"
                value={userDetails.name} 
                onChange={(e) => handleChange(e, 'name')}
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-black-500" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                id="email"
               
                type="email"
                value={userDetails.email}
                onChange={(e) => handleChange(e, 'email')}
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-black-500" htmlFor="new-password">
                New Password
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                id="new-password"
                
                type="password"
                value={userDetails.newPassword}
                onChange={(e) => handleChange(e, 'newPassword')}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-black-500" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-500 sm:text-sm"
                id="confirm-password"
                //placeholder="Confirm your new password"
                type="password"
                value={userDetails.confirmPassword}
                onChange={(e) => handleChange(e, 'confirmPassword')}
              />
              {userDetails.newPassword !== userDetails.confirmPassword && userDetails.confirmPassword && (
             <p className="text-red-500">Password mismatch</p>
              )}
            </div>
          </div>
          <div className="mt-6">
         
            <button 
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-green-500"
              type="submit" 
               // Change type to submit for form submission
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
