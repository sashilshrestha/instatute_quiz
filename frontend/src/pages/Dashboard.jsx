import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopScoreBoard from "./TopScoreBoard";
import axios from "axios";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardDetails, setDashboardDetails] = useState({
    totalCategories: 0,
    totalQuizWithQuestions: 0,
    totalQuestions: 0,
    userTotalScore: 0,
    totalMarks: 0,
    subjectHighest: 0,
  });

  useEffect(() => {
    // Get the canvas element
    if (isLoading) return;

    function drawPieChart(value, maxValue) {
      const canvas = document.getElementById("progressChart");

      canvas.width = 150; // Set the width of the canvas
      canvas.height = 150; // Set the height of the canvas

      var progressChart = new Chart(canvas, {
        type: "doughnut",
        data: {
          labels: ["Total Attempted Questions", "Total Correct Answers"],
          datasets: [
            {
              data: [value, maxValue - value],
              backgroundColor: ["#45aeee", "#ededed"],
            },
          ],
        },
        options: {
          aspectRatio: 1.8,

          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              backgroundColor: function (context) {
                return context.dataset.backgroundColor;
              },
              display: function (context) {
                var dataset = context.dataset;
                var value = dataset.data[context.dataIndex];
                return value > 0;
              },
              color: "white",
            },
            legend: {
              title: {
                padding: 50,
              },
            },
          },
        },
      });
    }

    console.log(dashboardDetails);

    drawPieChart(dashboardDetails.userTotalScore, dashboardDetails.totalMarks);
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const userDetails = localStorage.getItem("user-info") ?? null;
        const parsedUserDetails = JSON.parse(userDetails);

        console.log(parsedUserDetails.data.userId);

        const endPoint = `http://127.0.0.1:8000/api/quiz/userQuiz/dashboard/${parsedUserDetails.data.userId}/`;
        const response = await axios.get(endPoint, {
          "Content-Type": "application/json",
        });

        setDashboardDetails(response.data.data);
      } catch (err) {
        //
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-gray-50">
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
              <div className="stat-title">Quizes</div>
              <div className="stat-value">
                {isLoading ? "..." : dashboardDetails.totalQuizWithQuestions}
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
              <div className="stat-title">Questions</div>
              <div className="stat-value">
                {isLoading ? "..." : dashboardDetails.totalQuizWithQuestions}
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
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Categories</div>
              <div className="stat-value">
                {isLoading ? "..." : dashboardDetails.totalCategories}
              </div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Quiz Scores</div>
              <div className="stat-value">
                {isLoading ? "..." : dashboardDetails.userTotalScore}
              </div>
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-4 w-full gap-6">
          <div className="card w-2/4 p-6 bg-base-100 shadow-xl mt-6">
            <div className="text-xl font-bold">Success Rate</div>
            <div className="divider mt-2"></div>

            <canvas id="progressChart"></canvas>
          </div>

          <div className="card w-3/4 p-6 bg-base-100 shadow-xl mt-6">
            <div className="text-xl font-bold">
              🎉 Individual Top Score Ranking
            </div>
            <div className="divider mt-2"></div>
            <div className="h-full w-full bg-base-100">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead className="text-md">
                    <tr>
                      <th>🏆 Rank</th>
                      <th className="normal-case">🎖️ Category</th>
                      <th className="normal-case">🏅 Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      "Loading.."
                    ) : !dashboardDetails.subjectHighest.length ? (
                      <p style={{ textAlign: "center" }}>
                        You have not enrolled in any quiz.
                      </p>
                    ) : (
                      dashboardDetails.subjectHighest.map(
                        (subject, subjectIndex) => {
                          return (
                            <tr key={subjectIndex}>
                              <th>{subjectIndex + 1}</th>
                              <td>{subject.subject.name}</td>
                              <td>{subject.highestMarks}</td>
                            </tr>
                          );
                        }
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16"></div>
      </main>
    </>
  );
};

export default Dashboard;
