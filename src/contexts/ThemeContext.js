import React, { useContext, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = ThemeContext({
    isDark: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#5" },
  });

  const toggleTheme = (isDark) => {
    setTheme({ ...theme, isDark: !isDark });
  };

  return (
    <ThemeContext.Provider value={([theme, setTheme], toggleTheme)}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;

export const ThemeContextConsumer = ThemeContext.Consumer;
