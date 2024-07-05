import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col items-center p-4 dark:bg-slate-600">
      <img src="path-to-your-image.jpg" alt="Profile" className="w-32 h-32 rounded-full mt-4" />
      <h1 className="mt-4 text-xl font-semibold">Your Name</h1>
      <p className="mt-2 text-center">Your short bio goes here. This is a text description.</p>
      
      <div className="mt-4 flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>your.email@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <span>(123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <span>Your Location</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaBirthdayCake />
          <span>January 1, 1990</span>
        </div>
      </div>

      <Link to="/cv.pdf" target="_blank" className="mt-6 flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-full">
        <FaDownload />
        <span>Download CV</span>
      </Link>
    </div>
  );
};

export default Sidebar;
