import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { thowSimpleError } from "../alerts/AlertProvider.jsx";

/**
 * Custom hook that handles the authentication logic for the sign in form
 * @returns {Object} signin
 */
export const useSignAuthentication = () => {
  const { signup, isAuthenticated, error: registerError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/workouts");
  }, [isAuthenticated]);

  useEffect(() => {
    if (registerError.length > 0)
      thowSimpleError("Register errors", registerError.join("<br>"));
  }, [registerError]);

  return { signup };
};
