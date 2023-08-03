import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ActionButton from "../ActionButton";
import NavLink from "./NavLink";

const DesktopNav = ({ authenticatedPages }) => {
  const { logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const openProfileMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 5000);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <ul className="flex gap-6">
          {Object.values(authenticatedPages).map((page, index) => {
            return <NavLink type="desktop" page={page} key={index} />;
          })}
        </ul>
      </nav>
      
      <div className="relative h-full aspect-square flex justify-center items-center">
        <button
          onClick={openProfileMenu}
          className="flex items-center justify-center h-[60%] aspect-square rounded-full bg-white shadow-md hover:shadow-lg"
        >
          {user.image ? (
            <img
              src={user.image}
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <i className="fas fa-user-circle text-3xl text-gray-400"></i>
          )}
        </button>

        <div
          className={
            "absolute top-full right-0 w-48 hover:translate-x-0 bg-white py-4 px-8 shadow-md rounded-b-md flex flex-col gap-3 transition-all " +
            (isOpen ? "translate-x-0" : "translate-x-52")
          }
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-900 font-medium">
              Hi {user.username}!
            </label>
          </div>
          <ul className="flex flex-col gap-3">
            <NavLink
              type="mobile"
              page={{
                path: "/profile",
                title: "Profile",
                icon: "fa-regular fa-user",
              }}
              customClass="w-full"
            />

            <NavLink
              type="mobile"
              page={{
                path: "/settings",
                title: "Settings",
                icon: "fa-regular fa-cog",
              }}
              customClass="w-full"
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
      </div>
    </>
  );
};

export default DesktopNav;
