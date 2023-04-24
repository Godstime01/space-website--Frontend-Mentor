import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./crew.css";

const Crew = () => {
  return (
    <div className='crew'>
    <div className="container">
      <h3>02 meet your crew</h3>
      <div className='crew__nav__container'>
        <NavLink to="01" className="crew_btn"></NavLink>
        <NavLink to="02" className="crew_btn"></NavLink>
        <NavLink to="03" className="crew_btn"></NavLink>
        <NavLink to="04" className="crew_btn"></NavLink>
      </div>
      
      <Outlet />
    </div>
  </div>
  )
}

export default Crew