import React, { createContext } from "react";

export const Context = createContext();

export class Provider extends React.Component {
  state = {
    isEnglish: true,
    isDark: true, //in this time, I don't use it
    isOpen: false,
    toJapanese: this.toJapanese,
    toEnglish: this.toEnglish,
    openNav: this.openNav,
    closeNav: this.closeNav,
  };
  constructor() {
    super();
    this.toEnglish = this.toEnglish.bind(this);
    this.toJapanese = this.toJapanese.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toEnglish() {
    console.log(this.state.isEnglish);
    this.setState({
      isEnglish: true,
    });
  }
  toJapanese() {
    console.log(this.state.isEnglish);
    this.setState({
      isEnglish: false,
    });
  }
  openNav() {
    this.setState({
      isOpen: true,
    });
  }
  closeNav() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <>
        <Context.Provider
          value={{
            isEnglish: this.state.isEnglish,
            isDark: this.state.isDark,
            isOpen: this.state.isOpen,
            toJapanese: this.toJapanese,
            toEnglish: this.toEnglish,
            openNav: this.openNav,
            closeNav: this.closeNav,
          }}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  }
}

export const Consumer = Context.Consumer;
