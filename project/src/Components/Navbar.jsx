import React from 'react';
import Darkmode from './Darkmode';
import Menu from './Menu';
import logo from '../assets/Images/logo-2.webp';

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center w-screen">
      <div className="flex items-center ml-32 mt-16 mb-10">
      <img src= {logo} alt="Logo" className="h-9 mr-2" />
        
        <div className = "ml-[820px]" >
        <Darkmode  />
        </div>
        <div className="ml-[10px]">
        <Menu />
        </div>
      </div>
      <div className="flex items-center space-x-4">
      </div>
    </nav>
  );
};

export default Navbar;
