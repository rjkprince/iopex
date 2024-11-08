import UserTable from "./component/UserTable";
import ThemeToggle from "./component/ThemeToggle";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const {theme}=useContext(UserContext)
  return (
    <div className="App" data-theme={theme}>
      
        <ThemeToggle />
        <UserTable />
    </div>
  );
}

export default App;
