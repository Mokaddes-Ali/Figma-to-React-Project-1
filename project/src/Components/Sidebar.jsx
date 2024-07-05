import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../assets/Images/parson-img-1.webp';
import { FaCalendarDays } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="w-72 h-[750px] bg-white rounded-2xl shadow-xl text-black dark:bg-black dark:text-white flex flex-col items-center p-4">
      <img src= {image} alt="Profile" className="w-48 h-52 rounded-3xl mt-4" />
      <h1 className="mt-4 text-2xl font-bold">Monalisa Ashley </h1>
      <p className="mt-2 text-center">Ui/Ux Designer</p>
      
      <div className="mt-8 flex space-x-6 ">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
          <FaInstagram size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FaLinkedin size={30} />
        </a>
      </div>

      <div className="mt-6 space-y-8">
        <div className="flex items-center space-x-2">
          <FaEnvelope size={30}  className="text-cyan-300" />
          <span>your.email@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone  size={30} className='text-pink-300' />
          <span>(123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt size={30} className="text-cyan-300"/>
          <span>Your Location</span>
        </div>
        <div className="flex items-center space-x-2">
        <FaCalendarDays size={30} className="text-orange-200"/>
          <span>January 1, 1990</span>
        </div>
      </div>
      <Link to="/cv.pdf" target="_blank" className="mt-12 flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-full hover:bg-gray-500 dark:hover:bg-gray-500">
        <FaDownload className='text-white text-xl' />
        <span className='text-white'>Download CV</span>
      </Link>
    </div>
  );
};

export default Sidebar;
