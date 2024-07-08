import React from 'react';
import Darkmode from './Darkmode';
import Menu from './Menu';
import logo from '../assets/Images/logo-2.webp';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" flex md:flex md:flex-rows justify-between items-center pt-8">
      <div className="flex items-center ml-[87px] mt-10 mb-10">
        <NavLink to="/Home">
      <img src= {logo} alt="Logo" className="h-9 mr-2" />
      </NavLink>
        <div className = "ml-[860px]" >
        <Darkmode  />
        </div>
        <div className="ml-5">
        <Menu />
        </div>
      </div>
      <div className="flex items-center space-x-4">
      </div>
    </div>
  );
};

export default Navbar;
