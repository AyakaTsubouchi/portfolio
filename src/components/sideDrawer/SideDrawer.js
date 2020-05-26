import React from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";
import { Consumer } from "../../contexts/Context";

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
                <Link to="/portfolio" onClick={closeNav}>
                  Home
                </Link>
              </div>

              <div>
                <Link to="/portfolio/works" onClick={closeNav}>
                  Works
                </Link>
              </div>

              <div>
                <Link to="/portfolio/about" onClick={closeNav}>
                  About
                </Link>
              </div>

              <div>
                <Link to="/portfolio/contact" onClick={closeNav}>
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
