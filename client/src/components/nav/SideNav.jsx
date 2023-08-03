import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ActionButton from "../ActionButton";
import NavLink from "./NavLink";

const SideNav = ({ authenticatedPages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();

  const toggleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div>
      <button
        className="text-primary-light text-lg font-medium "
        onClick={toggleIsOpen}
      >
        <i className={"fas " + (isOpen ? "fa-times" : "fa-bars ")}></i>
      </button>

      <div
        className={
          "absolute top-12 left-0 w-full h-screen backdrop-blur-sm bg-gray-800 bg-opacity-40 z-[-1] " +
          (isOpen ? "" : "hidden")
        }
      ></div>
      <nav
        className={
          "absolute top-12 left-0 w-9/12 max-w-[16rem] h-[100dvh] flex flex-col justify-between bg-white shadow-md pt-6 px-6 pb-20 transition-all " +
          (isOpen ? "translate-x-0" : "-translate-x-[150%]")
        }
      >
        
        <ul className={"flex flex-col gap-3 pl-3"}>
          {Object.values(authenticatedPages).map((page, index) => {
            return <NavLink type="mobile" page={page} key={index} />;
          })}
        </ul>

        <div className="flex flex-col gap-3 border-t-2 border-gray-200 pt-4">
          <div className="w-full flex gap-5 items-center">
            {user.image ? (
              <img
                src={user.image}
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <i className="fas fa-user-circle text-3xl text-gray-400"></i>
            )}
            <label className="text-xs text-gray-400 font-medium">
              {user.username}
              <br />
              {user.email}
            </label>
          </div>

          <ul className="flex flex-col gap-3 pl-3">
            <NavLink
              type="mobile"
              page={{
                path: "/profile",
                title: "Profile",
                icon: "fa-regular fa-user",
              }}
            />

            <NavLink
              type="mobile"
              page={{
                path: "/settings",
                title: "Settings",
                icon: "fa-regular fa-cog",
              }}
            />
          </ul>

          <ActionButton
            size="small"
            customClass="text-sm w-full"
            onClick={logout}
          >
            <i
              className="
                fas fa-sign-out-alt"
            ></i>
            Logout
          </ActionButton>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
