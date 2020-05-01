import React from 'react';
import { Link } from 'react-router-dom';

export default function SideDrawer() {
  return (
    <div>
      <nav className="side-drawer">
        <Link to="/">Home</Link>

        <Link to="/works">Works</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
