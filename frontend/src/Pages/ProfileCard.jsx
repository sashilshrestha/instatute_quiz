import React from 'react';
import { useNavigate } from 'react-router-dom';

function card(){
 const navigate=useNavigate();

const user={
  email :'abc@gmail.com',
  fullname :'srinath Ganeshan'

}

    return (

      <main className="flex flex-col items-center gap-6 py-8 md:py-12 lg:py-16 bg-white-900  dark:bg-grey-300">
      <h1 className="text-3xl font-bold">Profile Details Page</h1>
      
      {/* <label tabindex="2" className="btn btn-ghost h-1 w-1 avatar">
      <div className="w-100 rounded-full">
      <img src="https://ssu.org.au/wp-content/uploads/2022/04/PXL_20221117_064752468.PORTRAIT2.jpg"alt="profile" className="w-10 h-5">
      </img>
      </div>
      </label> */}

      {/* <Avatar className =" dark:text-black 100  bg-gray-300" size={90}> */}
        {user.fullname.split(" ").map(word => word.charAt(0).toUpperCase()).join("")}
      {/* </Avatar> */}

      <h1 className="text-2xm font-bold text-gray-900 dark:text-black-100">student@swinburne</h1>

      <div className="flex flex-col items-center gap-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-[auto_1fr] items-center gap-6">
        
        <div className="grid gap-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl font-bold">{user.fullname}</h1>
            <p className="text-black-100 dark:text-black-100">{user.email}</p>
          </div>
         
        </div>
      </div>
      <div className="grid gap-2 text-center">
        <p className="text-sm leading-relaxed text-white-100 dark:text-black 100">
          Hi,! I'm a user of the Quiz App. I enjoy taking quizzes and testing my knowledge.
        </p>
        <div className="flex items-center justify-center gap-2">
        <div className="mt-6">
         
         <button onClick={() => {navigate('/Profile')}}
           className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           type="submit" 
          
         >
           Edit
         </button>
       </div>
         
        </div>
      </div>
    </div>
    </main>

    );
  }
export default card;