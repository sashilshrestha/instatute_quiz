import React from 'react';
import { Link } from 'react-router-dom';
import TopScoreBoard from './TopScoreBoard';
const Dashboard = () => {
  return (
    <>
      <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="">
            <div className="w-72 ">
              <button type="button" className="invisible">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden">
                <div className="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"></div>
                <div className="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
                  <div className="flex flex-col lg:flex-row py-2">
                    <div className="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
                      <ul className="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">
                          Today
                        </li>
                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">
                          Yesterday
                        </li>
                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">
                          Last 7 days
                        </li>
                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">
                          Last 30 days
                        </li>
                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">
                          This month
                        </li>
                        <li className="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 hover:text-blue-700">
                          Last month
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 md:pl-2 pr-2 lg:pr-1">
                      <div className="w-full md:w-[297px] md:min-w-[297px]">
                        <div className="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                          <div className="flex-none">
                            <button
                              type="button"
                              className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 19.5L8.25 12l7.5-7.5"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-1 items-center space-x-1.5">
                            <div className="w-1/2">
                              <button
                                type="button"
                                className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                              >
                                Apr
                              </button>
                            </div>
                            <div className="w-1/2">
                              <button
                                type="button"
                                className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                              >
                                2024
                              </button>
                            </div>
                          </div>
                          <div className="flex-none">
                            <button
                              type="button"
                              className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                          <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                            <div className="tracking-wide text-gray-500 text-center">
                              Sun
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Mon
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Tue
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Wed
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Thu
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Fri
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Sat
                            </div>
                          </div>
                          <div className="grid grid-cols-7 gap-y-0.5 my-1">
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              31
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              4
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              5
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              6
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              7
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              8
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              9
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              10
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              11
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              12
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              13
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              14
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              15
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              16
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              17
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              18
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              19
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              20
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              21
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              22
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              23
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              24
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              25
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10  bg-blue-500 text-white font-medium rounded-full"
                            >
                              26
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              27
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              28
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              29
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              30
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              4
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              5
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              6
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              7
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              8
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              9
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              10
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              11
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-500 h-7 w-1 rounded-full hidden md:block bg-blue-500"></div>
                      </div>
                      <div className="w-full md:w-[297px] md:min-w-[297px]">
                        <div className="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                          <div className="flex-none">
                            <button
                              type="button"
                              className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 19.5L8.25 12l7.5-7.5"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex flex-1 items-center space-x-1.5">
                            <div className="w-1/2">
                              <button
                                type="button"
                                className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                              >
                                May
                              </button>
                            </div>
                            <div className="w-1/2">
                              <button
                                type="button"
                                className="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                              >
                                2024
                              </button>
                            </div>
                          </div>
                          <div className="flex-none">
                            <button
                              type="button"
                              className="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                          <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                            <div className="tracking-wide text-gray-500 text-center">
                              Sun
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Mon
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Tue
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Wed
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Thu
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Fri
                            </div>
                            <div className="tracking-wide text-gray-500 text-center">
                              Sat
                            </div>
                          </div>
                          <div className="grid grid-cols-7 gap-y-0.5 my-1">
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              28
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              29
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              30
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              4
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              5
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              6
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              7
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              8
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              9
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              10
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              11
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              12
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              13
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              14
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              15
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              16
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              17
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              18
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              19
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              20
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              21
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              22
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              23
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              24
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              25
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              26
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              27
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              28
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              29
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              30
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                            >
                              31
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              4
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              5
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              6
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              7
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                            >
                              8
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right ">
           {/* <div className="dropdown dropdown-bottom dropdown-end  ml-2">
              <label
                tabIndex="0"
                className="btn btn-ghost btn-sm normal-case btn-square "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                    Email Digests
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      ></path>
                    </svg>
                    Download
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure dark:text-slate-300 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  ></path>
                </svg>
              </div>
              <div className="text-primary">New Users</div>
              <div className="stat-value">34.7k</div>
              <div className="stat-desc  font-bold text-green-700 dark:text-green-300">
                ↗︎ 2300 (22%)
              </div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure dark:text-slate-300 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title dark:text-slate-300">Total Sales</div>
              <div className="stat-value dark:text-slate-300 text-primary">
                $34,545
              </div>
              <div className="stat-desc  ">Current month</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure dark:text-slate-300 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  ></path>
                </svg>
              </div>
              <div className="stat-title dark:text-slate-300">
                Pending Leads
              </div>
              <div className="stat-value dark:text-slate-300 text-primary">
                450
              </div>
              <div className="stat-desc  ">50 in hot leads</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure dark:text-slate-300 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title dark:text-slate-300">Active Users</div>
              <div className="stat-value dark:text-slate-300 text-primary">
                5.6k
              </div>
              <div className="stat-desc  font-bold text-rose-500 dark:text-red-400">
                ↙ 300 (18%)
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Start */}
        <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6 hidden">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Amount to be Collected</div>
              <div className="stat-value">$25,600</div>
              <div className="stat-actions">
                <button className="btn btn-xs">View Users</button>
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Cash in hand</div>
              <div className="stat-value">$5,600</div>
              <div className="stat-actions">
                <button className="btn btn-xs">View Members</button>
              </div>
            </div>
          </div>
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-figure invisible md:visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
              <div className="stat-figure invisible md:visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value">2.6M</div>
              <div className="stat-desc">14% more than last month</div>
            </div>
          </div>
        </div>
        {/* Hidden End */}

        {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
          <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
            <div className="text-xl font-semibold ">User Signup Source</div>
            <div className="divider mt-2"></div>
            <div className="h-full w-full pb-6 bg-base-100">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="normal-case">Source</th>
                      <th className="normal-case">No of Users</th>
                      <th className="normal-case">Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Facebook Ads</td>
                      <td>26,345</td>
                      <td>10.2%</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Google Ads</td>
                      <td>21,341</td>
                      <td>11.7%</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Instagram Ads</td>
                      <td>34,379</td>
                      <td>12.4%</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>Affiliates</td>
                      <td>12,359</td>
                      <td>20.9%</td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>Organic</td>
                      <td>10,345</td>
                      <td>10.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
            <div className="text-xl font-semibold ">Orders by Category</div>
            <div className="divider mt-2"></div>
            <div className="h-full w-full pb-6 bg-base-100"></div>
          </div>
        </div> */}
        <div className="h-16"></div>
        <TopScoreBoard></TopScoreBoard>
      </main>
    </>
  );
};

export default Dashboard;
