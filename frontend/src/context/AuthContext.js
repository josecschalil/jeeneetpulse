"use client";
import { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // You can load user authentication state from localStorage, cookies, etc.
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
      // Fetch user details here if needed
      setUserDetails({ id: "123", name: "John Doe" }); // Example user data
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
