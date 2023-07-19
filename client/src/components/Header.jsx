import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo-orange.svg";

function Header({ title }) {
  return (
    <header className="bg-white font-bold w-full h-12 fixed top-0 left-0 flex justify-between items-center gap-2 px-5 z-50 shadow-md">
      <div className="bg-white h-full flex items-center">
        <img className="h-[60%] aspect-square" src={logo} alt="Logo" />
        <h1 className="text-primary-light text-lg ml-2">{title}</h1>
      </div>
      <Nav />
    </header>
  );
}

const Nav = () => {
  const { isLoading, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const authenticatedPages = {
    0: {
      path: "/new-training",
      title: "New training",
      icon: "fa-regular fa-calendar-plus",
    },
    1: {
      path: "/create-workout",
      title: "Workout creator",
      icon: "fa-regular fa-folder-plus",
    },
    2: {
      path: "/workouts",
      title: "Workouts",
      icon: "fa-regular fa-folder-open",
    },
    3: {
      path: "/progress",
      title: "Progress",
      icon: "fa-solid fa-chart-line",
    },
  };

  const unauthenticatedPages = {
    0: {
      path: "/login",
      title: "Login",
    },
    1: {
      path: "/register",
      title: "Sign up",
    },
  };

  const toggleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  if (isLoading) return;

  if (!isAuthenticated)
    return (
      <nav className="">
        <ul className="flex gap-5">
          {Object.values(unauthenticatedPages).map((page, index) => {
            return (
              <li className="" key={index}>
                <button
                  className="small-button text-white text-lg font-medium bg-primary-light"
                  onClick={() => navigate(page.path)}
                >
                  {page.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );

  return (
    <>
      <nav className="">
        <ul className="normal-nav hidden lg:flex gap-6">
          {Object.values(authenticatedPages).map((page, index) => {
            return (
              <li className="border-b-2 border-gray-400 px-3 hover:border-primary-light" key={index}>
                <button
                  className="text-gray-400 text-sm font-medium hover:text-primary-light"
                  onClick={() => navigate(page.path)}
                >
                  {page.title}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="flex lg:hidden text-primary-light text-lg font-medium "
          onClick={toggleIsOpen}
        >
          <i className={"fas " + (isOpen ? "fa-times" : "fa-bars ")}></i>
        </button>

        <ul
          className={
            "flex lg:hidden absolute w-full top-12 right-0 flex-col gap-2 bg-white shadow-md py-3 px-5 rounded-b-md transition-all z-[-1] -translate-y-[150%] " +
            (isOpen ? "translate-y-0" : "")
          }
        >
          {Object.values(authenticatedPages).map((page, index) => {
            return (
              <li className="" key={index} onClick={() => navigate(page.path)}>
                <button className="flex items-center gap-4 text-gray-400 text-lg font-medium hover:text-primary-light">
                  <i className={"fas " + page.icon}></i>
                  {page.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
