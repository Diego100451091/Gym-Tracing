import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth.api.js";

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

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const login = async (user) => {
    try {
      const response = await loginRequest(user);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
    }
  };

  useEffect(() => {
    if(error.length > 0) {
      const timer = setTimeout(() => {
        setError([])
      }, 3000)
      return () => clearTimeout(timer);
    }
  }, [error])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        signup,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
