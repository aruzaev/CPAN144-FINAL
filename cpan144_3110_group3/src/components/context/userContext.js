import axios from "axios";
import { createContext, useState, useEffect } from "react";

// this component sets the user for the website if logged in

export const UserContext = createContext({});
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/account").then(({ data }) => {
        setUser(data);
      });
    }
  });
  return (
    <UserContext.Provider value={(user, setUser)}>
      {children}
    </UserContext.Provider>
  );
}
