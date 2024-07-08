import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaFileAlt, FaBriefcase, FaBook,FaEnvelope  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
    setIsOpen(false);
  };

  const links = [
    { to: '/about', text: 'About', icon: <FaUser /> },
    { to: '/resume', text: 'Resume', icon: <FaFileAlt /> },
    { to: '/works', text: 'Works', icon: <FaBriefcase /> },
    { to: '/blog', text: 'Blogs', icon: <FaBook /> },
    { to: '/contact', text: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white bg-blue-700 w-[60px] h-[60px] rounded-full text-center"
      >
        {isOpen ? <FaTimes size="20px" /> : <FaBars size="20px" />}
      </button>

      <div
        className={`absolute right-0 mt-6 py-2 w-[1180px] bg-white dark:bg-black dark:text-white rounded-lg shadow-xl ${isOpen ? 'block' : 'hidden'}`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={`flex items-center px-4 py-2 text-gray-700 text-xl gap-3 hover:text-blue-700 ${activeLink === index ? 'text-blue-600' : ''}`}
            onClick={() => handleNavLinkClick(index)}
          >
            <span className="mr-2">{link.icon}</span>
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
