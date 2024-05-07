import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const TriviaApp = () => {
  const [triviaData, setTriviaData] = useState(null);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        const response = await fetch(
          // 'https://opentdb.com/api.php?amount=10&type=multiple'
          'https://opentdb.com/api_category.php'
        );
        const data = await response.json();
        setTriviaData(data);
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      }
    };

    fetchTriviaData();
  }, []);

  return (
    <div className="drawer  lg:drawer-open">
      <input
        id="left-sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
          <div className="flex-1">
            <label
              htmlFor="left-sidebar-drawer"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 inline-block w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </label>
            <h1 className="text-2xl font-semibold ml-2"></h1>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end ml-4">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    alt="profile"
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="justify-between">
                  <a href="/app/settings-profile">Profile Settings</a>
                </li>
                <li className="">
                  <a href="/app/settings-billing">Bill History</a>
                </li>
                <div className="divider mt-0 mb-0"></div>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <Sidebar />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Let's Begin !</h3>
          <p className="py-4">
            You are about to start the /Category/ quiz. Please note that you cannot go back
            once you start. Make sure you are ready to begin.
          </p>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="text-right font-medium">Total Questions:</span>
              <span>25</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="text-right font-medium">Total Time:</span>
              <span>60 minutes</span>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary mr-3">Start Quiz</button>
              <button className="btn btn-outline">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TriviaApp;
