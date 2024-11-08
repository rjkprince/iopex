import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState("light");
  return (
    <UserContext.Provider value={{ users, setUsers, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
