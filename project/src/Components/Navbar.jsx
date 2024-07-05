import React from 'react';
import { Link } from 'react-router-dom';
import Darkmode from './Darkmode';
import Menu from './Menu';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center w-screen dark:bg-slate-300">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-white text-xl dark:text-gray-200">MyApp</h1>
        <div className = "ml-[1050px]" >
        <Darkmode  />
        </div>
        <div className="ml-[50px]">
        <Menu />
        </div>
      </div>
      <div className="flex items-center space-x-4">
      </div>
    </nav>
  );
};

export default Navbar;
