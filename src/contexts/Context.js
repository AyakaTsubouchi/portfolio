import React, { createContext } from "react";

export const Context = createContext();

export class Provider extends React.Component {
  state = {
    isEnglish: true,
    isDark: true, //in this time, I don't use it
    isOpen: false,
  };

  toEnglish = () => {
    this.setState({
      isEnglish: true,
    });
  };
  toJapanese = () => {
    this.setState({
      isEnglish: false,
    });
  };
  openNav = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeNav = () => {
    this.setState({
      isOpen: false,
    });
  };

  render = () => {
    return (
      <>
        <Context.Provider
          value={{
            ...this.state,
            toJapanese: this.toJapanese,
            toEnglish: this.toEnglish,
            openNav: this.openNav,
            closeNav: this.closeNav,
          }}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  };
}

export const Consumer = Context.Consumer;
