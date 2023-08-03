import { useNavigate } from "react-router-dom";
import ActionButton from "../ActionButton";

const UnAuthenticatedNav = () => {
  const navigate = useNavigate();
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

  return (
    <nav className="">
      <ul className="flex gap-5">
        {Object.values(unauthenticatedPages).map((page, index) => {
          return (
            <li className="" key={index}>
              <ActionButton
                size="small"
                customClass="text-lg font-medium "
                onClick={() => navigate(page.path)}
              >
                {page.title}
              </ActionButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UnAuthenticatedNav;
