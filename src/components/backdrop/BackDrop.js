import React from "react";
import "./backdrop.css";
import { Consumer } from "../../contexts/Context";

export default function BackDrop() {
  return (
    <Consumer>
      {({ closeNav, isOpen }) => (
        <>
          <div className="backdrop" style={{ width: isOpen ? "100%" : 0 }} />
        </>
      )}
    </Consumer>
  );
}
