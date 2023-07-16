import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth.api.js";

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

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      console.log(response.data);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
