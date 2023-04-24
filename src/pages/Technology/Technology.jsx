import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./technology.css";

const Technology = () => {
  return (
    <div className='technology'>
      <div className="container">
        <h3>003 space Launch 101</h3>
        <div className='nav__btn__container'>
          <NavLink to="01" className="nav_btn">1</NavLink>
          <NavLink to="02" className="nav_btn">2</NavLink>
          <NavLink to="03" className="nav_btn">3</NavLink>
        </div>
        
        <Outlet />
      </div>
    </div>
  )
}

export default Technology