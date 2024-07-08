import React from 'react';
import Darkmode from './Darkmode';
import Menu from './Menu';
import logo from '../assets/Images/logo-2.webp';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" flex md:flex md:flex-rows justify-between items-center pt-8">
      <div className="flex items-center ml-[87px] mt-10 mb-10">
      <a 
          href="https://bostami-bootstrap-nextjs.vercel.app/#demo" 
          rel="noopener noreferrer"
          className="button-link"
        >
          <img src= {logo} alt="Logo" className="h-9 mr-2" />
        </a>
        <div className = "ml-[870px]" >
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