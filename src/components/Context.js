import React, { createContext } from 'react';

export const Context = createContext();

export class Provider extends React.Component {
  state = {
    isEnglish: false,
    isDark: true, //in this time, I don't use it
  };
  constructor() {
    super();
    this.toEnglish = this.toEnglish.bind(this);
    this.toJapanese = this.toJapanese.bind(this);
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
  render() {
    return (
      <>
        <Context.Provider
          value={{
            isEnglish: this.state.isEnglish,
            isDark: this.state.isDark,
            toJapanese: this.toJapanese,
            toEnglish: this.toEnglish,
          }}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  }
}

export const Consumer = Context.Consumer;
