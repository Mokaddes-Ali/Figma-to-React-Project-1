import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import { FaRegFileAlt, FaBlogger } from "react-icons/fa";

const Menu = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All'); // Initialize with a default category

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const filteredCards = activeCategory === 'All'
    ? cards
    : cards.filter(card => card.category === activeCategory);

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="text-white rounded-full h-14 w-14 bg-blue-700 dark:bg-blue-700"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='h-[18px] -ml-0 border-none' />
      </button>
      
      <div 
        className={`absolute w-[1100px] h-56 right-0 py-2 container mt-5 mx-auto text-orange-900 bg-white rounded shadow-lg dark:bg-gray-900 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className=' ml-3'>
          <li>
            <NavLink 
              to="/About" 
              className={`px-4 py-2 rounded mb-2 ${activeCategory === 'About' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`} 
              onClick={() => { setActiveCategory('About'); toggleMenu(); }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Resume" 
              className={`px-4 py-2 rounded mb-2 ${activeCategory === 'Resume' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`} 
              onClick={() => { setActiveCategory('Resume'); toggleMenu(); }}
            >
              <span><FaRegFileAlt className='mt-1' /></span> Resume
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Works" 
              className="px-4 py-2 text-gray-800 dark:text-white dark:hover:text-blue-700 flex text-lg gap-2" 
              onClick={() => { setActiveCategory('Works'); toggleMenu(); }}
            >
              <span><PiSuitcaseSimpleBold className='mt-1' /></span> Works
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Blog" 
              className="px-4 py-2 text-gray-800 dark:text-white dark:hover:text-blue-700 flex text-lg gap-2" 
              onClick={() => { setActiveCategory('Blog'); toggleMenu(); }}
            >
              <span><FaBlogger className='mt-1' /></span> Blogs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Contact" 
              className="px-4 py-2 -mt-2 -ml-1 flex text-gray-800 dark:text-white dark:hover:text-blue-700 text-lg gap-2" 
              onClick={() => { setActiveCategory('Contact'); toggleMenu(); }}
            >
              <span><IoMdContact className='mt-1' /></span> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
