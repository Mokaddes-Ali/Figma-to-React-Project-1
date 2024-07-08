import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaDownload } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import image from '../assets/Images/parson-img-1.webp';
import { FaCalendarDays } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="w-72 h-[800px] bg-white rounded-2xl shadow-xl text-black dark:bg-black dark:text-white flex flex-col items-center p-4">
      <img src= {image} alt="Profile" className="w-52 h-52 rounded-3xl mt-7" />
      <h1 className="mt-5 text-2xl font-bold">Monalisa Ashley </h1>
      <p className="mt-3 text-center">Ui/Ux Designer</p>
      
      <div className="mt-8 flex space-x-7 ">
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
      <a
      href="cv.pdf"
      download
      className="flex items-center px-6 py-3 mt-6 -ml-12 bg-rose-500 text-white rounded-full hover:bg-rose-400 hover:text-black dark:hover:text-white dark:hover:bg-slate-500 transition duration-300"
    >
      <FiDownload className="mr-2" />
      Download Cv
    </a>
    </div>
  );
};

export default Sidebar;
