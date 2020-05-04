import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./toolbar.css";
import { Context } from "../../contexts/Context";

const Toolbar = (props) => {
  const { toJapanese, toEnglish, openNav } = useContext(Context);

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_lang">
          <ul>
            <li onClick={toJapanese}>JPN</li>

            <li onClick={toEnglish}>ENG</li>
          </ul>
        </div>

        <i className="bars icon" onClick={openNav}></i>
        <div className="toolbar_navigation-items">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
