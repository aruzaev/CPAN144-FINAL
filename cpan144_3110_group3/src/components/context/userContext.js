import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Holds the user object for an authenticated user
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks whether the user is authenticated

  useEffect(() => {
    // Function to check user's authentication status
    const fetchUser = async () => {
      try {
        const response = await axios.get("/account", { withCredentials: true });
        if (response.data) {
          setUser(response.data); // Set the user data if authenticated
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array ensures this runs once on component mount

  const logout = async () => {
    try {
      await axios.post("/logout", {}, { withCredentials: true });
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
}
