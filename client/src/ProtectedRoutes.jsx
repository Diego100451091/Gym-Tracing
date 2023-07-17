import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import Loading from "./components/Loading.jsx";

function ProtectedRoutes() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  if (!isLoading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoutes;
