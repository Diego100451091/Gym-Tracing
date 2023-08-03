import { useNavigate, useLocation } from "react-router-dom";

const NavLink = ({ page, type }) => {
  const location = useLocation();
  const active = location.pathname === page.path;
  const navigate = useNavigate();

  const styles = {
    desktop: `text-sm px-3 hover:border-primary-light hover:text-primary-light ${
      active
        ? "text-primary-light font-bold border-primary-light border-b-[3px] cursor-default"
        : "text-gray-400 font-medium border-transparent border-b-2 cursor-pointer"
    }`,
    mobile: `flex items-center gap-4 text-md hover:text-primary-light ${
      active
        ? "text-primary-light font-bold cursor-default"
        : "text-gray-400 font-medium cursor-pointer"
    }`,
  };

  return (
    <li>
      <a
        href=""
        className={styles[type]}
        onClick={(e) => {
          e.preventDefault();
          navigate(page.path);
        }}
      >
        {type === "mobile" ? <i className={"fas " + page.icon}></i> : null}
        {page.title}
      </a>
    </li>
  );
};

export default NavLink;
