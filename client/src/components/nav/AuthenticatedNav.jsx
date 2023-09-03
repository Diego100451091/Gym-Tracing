import { useState } from "react";
import DesktopNav from "./DesktopNav";
import SideNav from "./SideNav";

const AuthenticatedNav = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const authenticatedPages = {
    0: {
      path: "/workout-record",
      title: "New workout record",
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

  window.addEventListener("resize", () =>
    setIsDesktop(window.innerWidth > 1024)
  );

  return isDesktop ? (
    <DesktopNav authenticatedPages={authenticatedPages} />
  ) : (
    <SideNav authenticatedPages={authenticatedPages} />
  );
};

export default AuthenticatedNav;
