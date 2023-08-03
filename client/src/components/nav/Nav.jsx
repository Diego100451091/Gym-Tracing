import { useAuth } from "../../context/AuthContext";
import AuthenticatedNav from "./AuthenticatedNav";
import UnauthenticatedNav from "./UnauthenticatedNav";

const Nav = () => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) return;

  if (!isAuthenticated) return <UnauthenticatedNav />;

  return <AuthenticatedNav />;
};

export default Nav;
