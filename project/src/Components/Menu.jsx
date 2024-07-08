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
        className="text-white bg-blue-700 w-[48px] h-[48px] rounded-full text-center"
      >
        {isOpen ? <FaTimes size="12px" /> : <FaBars size="12px" />}
      </button>

      <div
        className={`absolute right-0 mt-5 py-2 w-[1185px] bg-white dark:bg-slate-900 rounded-lg shadow-xl ${isOpen ? 'block' : 'hidden'}`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={`flex items-center pl-10 py-3  text-sm hover:text-blue-700 dark:text-white  dark:hover:text-blue-700 gap-3 ${activeLink === index ? 'text-blue-700' : 'text-black'}`}
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