import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="text-white rounded-full h-14 w-14 bg-blue-700 dark:bg-blue-700 "
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='h-[18px] -ml-0 border-none' />
      </button>
      
      <div 
        className={`absolute w-[1100px] right-0 py-2 container mt-10 mx-auto text-orange-900 bg-white rounded shadow-lg dark:bg-gray-900  ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul>
        <li><Link to="/About" className="{({ isActive }) => classNames('text-inherit', {'text-red-500': isActive,})} px-4 py-2 text-gray-800  dark:text-white dark:hover:text-blue-700" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/Resume" className="{({ isActive }) => classNames('text-inherit', {'text-red-500': isActive,})} px-4 py-2 text-gray-800 dark:text-white  dark:hover:text-blue-700" onClick={toggleMenu}>Resume</Link></li>
        <li><Link to="/works" className="{({ isActive }) => classNames('text-inherit', {'text-red-500': isActive,})} px-4 py-2 text-gray-800 dark:text-white  dark:hover:text-blue-700 " onClick={toggleMenu}>Works</Link></li>
        <li><Link to="/Blog"  className=" {({ isActive }) => classNames('text-inherit', {'text-red-500': isActive,})} px-4 py-2 text-gray-800 dark:text-white dark:hover:text-blue-700 " onClick={toggleMenu}>Blogs</Link></li>
        <li><Link to="/Contact" className=" {({ isActive }) => classNames('text-inherit', {'text-red-500': isActive,})} px-4 py-2 text-gray-800 dark:text-white  dark:hover:text-blue-700" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
