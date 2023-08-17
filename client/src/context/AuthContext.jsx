import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.api.js";
import { throwSimpleError } from "../alerts/AlertProvider.jsx";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const saveUser = (data) => {
    setUser(data);
    setIsAuthenticated(true);
    setIsLoading(false);
  };

  const resetUser = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      saveUser(response.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        throwSimpleError(
          "Connection error",
          "There was an error connecting with the server"
        );
      }
      resetUser();
    }
  };

  const login = async (user) => {
    try {
      const response = await loginRequest(user);
      saveUser(response.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        throwSimpleError(
          "Connection error",
          "There was an error connecting with the server"
        );
      }
      resetUser();
    }
  };

  const logout = () => {
    Cookies.remove("token");
    resetUser();
  };

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    async function verifyToken() {
      const cookies = Cookies.get();
      if (!cookies.token) return resetUser();

      try {
        const response = await verifyTokenRequest();
        if (!response.data) return resetUser();

        console.log(response.data);
        return saveUser(response.data);
      } catch (error) {
        console.log(error);
        return resetUser();
      }
    }
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        signup,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
