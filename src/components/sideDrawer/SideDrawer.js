import React from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";
import { Consumer } from "../Context";

const SideDrawer = (props) => {
  let navClass = "side-drawer";
  if (props.isOpen) {
    navClass = "side-drawer open";
  }
  return (
    <Consumer>
      {({ closeNav, isOpen }) => (
        <>
          {console.log(props.isOpen)}
          <div className={navClass}>
            <ul>
              <div>
                <Link to="/" onClick={closeNav}>
                  Home
                </Link>
              </div>

              <div>
                <Link to="/works" onClick={closeNav}>
                  Works
                </Link>
              </div>

              <div>
                <Link to="/about" onClick={closeNav}>
                  About
                </Link>
              </div>

              <div>
                <Link to="/contact" onClick={closeNav}>
                  Contact
                </Link>
              </div>
            </ul>
            <i className="ui x icon" onClick={closeNav}></i>
          </div>
        </>
      )}
    </Consumer>
  );
};

export default SideDrawer;
