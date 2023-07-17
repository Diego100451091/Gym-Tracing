import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { throwSimpleError, throwTemporalError } from "../alerts/AlertProvider.jsx";

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
      throwSimpleError("Register errors", registerError.join("<br>"));
  }, [registerError]);

  return { signup };
};

export const useLoginAuthentication = () => {
  const { login, isAuthenticated, error: loginError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/workouts");
  }, [isAuthenticated]);

  useEffect(() => {
    if (loginError.length > 0)
      throwTemporalError(loginError.join("<br>"));
  }, [loginError]);

  return { login };
}
