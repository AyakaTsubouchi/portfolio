import React from 'react';
import { Link } from 'react-router-dom';

export default function SideDrawer() {
  return (
    <div>
      <nav className="side-drawer">
        <Link to="/portfolio/">Home</Link>

        <Link to="/portfolio/works">Works</Link>

        <Link to="/portfolio/about">About</Link>

        <Link to="/portfolio/contact">Contact</Link>
      </nav>
    </div>
  );
}
