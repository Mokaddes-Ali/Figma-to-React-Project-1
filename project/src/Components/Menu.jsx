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
    <div className="relative bg-white rounded shadow-lg">
      <button 
        onClick={toggleMenu} 
        className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>
      
      <div 
        className={`absolute right-0 py-2 w-screen container mt-10 mx-auto text-orange-900 bg-white rounded shadow-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link to="/About" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>About</Link>
        <Link to="/Resume" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Resume</Link>
        <Link to="/works" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Works</Link>
        <Link to="/Blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Blogs</Link>
        <Link to="/Contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Contact</Link>
      </div>
    </div>
  );
};

export default Menu;
