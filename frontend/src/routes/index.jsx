import {
  createBrowserRouter,
  createRoutesFromChildren,
  Link,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Categories from "../Pages/Categories";
import Quiz from "../Pages/Quiz";
import QuizTimeout from "../Pages/QuizTimeout";
import Profile from "../Pages/Profile";
import ProfileCard from "../Pages/ProfileCard";
import Sidebar from "../components/Sidebar";

const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check if the user is logged in
  // Get data from localStorage
  const token = localStorage.getItem("user-info");

  return !!token;
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

const Router = () => {
  const routes = createRoutesFromChildren(
    <Route path="*" element={<ProjectRoute />} />
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

const RouteNavigation = () => {
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
            <Link to="/categories">
              <button className="btn btn-primary btn-sm normal-case">
                Lets Play Quiz
              </button>
            </Link>
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
                  <Link to="/Profilecard">Profile Details</Link>
                </li>
                <div className="divider mt-0 mb-0"></div>

                <li className="justify-between">
                  <Link to="/Profile">Profile settings</Link>
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
    </div>
  );
};

const ProjectRoute = () => (
  <Routes>
    <Route
      element={
        <ProtectedRoute>
          <RouteNavigation />
        </ProtectedRoute>
      }
    >
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz/:categoryId" element={<Quiz />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profilecard" element={<ProfileCard />} />
    </Route>
    <Route element={<RouteNavigation />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/timeout" element={<QuizTimeout />} />
    </Route>
  </Routes>
);

export default Router;
