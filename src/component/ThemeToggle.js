import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(UserContext);

  return (
    <div>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={(e) => {
          console.log(e.target.checked);
          if (e.target.checked) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <span className="text-lg">{theme}</span>
    </div>
  );
}
