import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = ThemeContext();
  return <button onChange={toggleTheme}>Change Theme</button>;
};
export default ThemeToggle;
