import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/shared/logo.svg";
import open from "../../assets/images/shared/icon-hamburger.svg";
import close from "../../assets/images/shared/icon-close.svg";
import "./navbar.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? close : open;


  return (
    <nav className='navbar'>
      <img src={logo} alt="" />

      <div className="navlinks" style={{ display: isOpen ? 'flex' : 'none' }} >
        <NavLink to="/" className="nav__link">
          <span>01</span>
          <span>Home</span>
        </NavLink>

        <NavLink to="destination" className="nav__link">
          <span>02</span>
          <span>Destination</span>
        </NavLink>

        <NavLink to="crew" className="nav__link">
          <span>03</span>
          <span>Crew</span>
        </NavLink>

        <NavLink to="technology" className="nav__link">
          <span>04</span>
          <span>Technology</span>
        </NavLink>


      </div>

      <button className='toggle__btn' onClick={() => setIsOpen(!isOpen)}>
        <img src={icon} alt="" />
      </button>
    </nav>
  )
}

export default Navbar;