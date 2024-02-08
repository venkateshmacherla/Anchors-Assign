import React from 'react';
import { TbGridDots } from "react-icons/tb";
import '../styles/style.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="icon-container">
        <TbGridDots className="icon" />
      </div>
      <div className="text-container">
        <span className="text">ANONYMOUS</span>
      </div>
    </div>
  );
}

export default NavBar;