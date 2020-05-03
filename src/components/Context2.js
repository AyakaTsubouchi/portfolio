import React, { createContext, useReducer } from "react";

export const Context = createContext();
const initialState = {
  isEnglish: true,
  isDark: true, //in this time, I don't use it
  isOpen: false,
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ENGLISH":
      return {
        isEnglish: true,
      };
    case "JAPANESE":
      return {
        isEnglish: false,
      };
    case "DARK":
      return {
        isDark: true,
      };
    case "LIGHT":
      return {
        isDark: false,
      };
    default:
      throw new Error();
  }
};

export const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
