import React from 'react';
import { FaPaintBrush, FaMobileAlt, FaCamera, FaCode } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { IoRemoveOutline } from "react-icons/io5";
import AboutSliede from './AboutSliede';

const AboutCard = () => {
  return (
    <div className="flex flex-row">
      {/* Left of section */}
      <div className='h-screen'>
        <Sidebar className="" />
      </div>
      {/* Right of the About Section */}
    <div className="rounded-2xl bg-white dark:bg-black dark:text-white shadow-md text-gray-800 w-[1000px] ">
      <h1 className="text-3xl font-bold mb-6 text-left flex">About Me <span className="mt-2"><IoRemoveOutline className='text-8xl -mt-9 -ml-4' /></span></h1>
      <p className="mb-8 text-left -mt-8">
      I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
       I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p className="mb-12 text-left">
        Feel free to elaborate on your professional journey and personal experiences that have shaped you into who you are today.
        Feel free to elaborate on your professional you into who you are today.
      </p>
      
      <h2 className="text-2xl font-semibold mb-6 left -mt-3 ">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-lime-100 dark:bg-black dark:text-white p-4 rounded-lg shadow-md flex items-center text-center">
          <div className="card-icon ">
          <FaPaintBrush size={30} className="text-blue-500 -mt-16 hover:scroll-p-7" />
          </div>
          <div className="text-left space-y-3 ml-4">
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p>Creating intuitive and beautiful user interfaces and experiences.Creating intuitive and beautiful user interfaces and experiences</p>
          </div>
        </div>
        <div className="bg-gray-300 dark:bg-black dark:text-white p-4 rounded-lg shadow-md flex items-center text-center">
          <div>
          <FaMobileAlt size={40} className="text-green-500 -mt-16" />
          </div>
          <div className="text-left space-y-3 ml-4" >
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p>Developing mobile applications that provide seamless user experiences.
          Developing mobile applications that provide seamless user experiences.
          </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-black dark:text-white p-4 rounded-lg shadow-md flex  items-center text-center">
        <div>
          <FaCamera size={40} className="text-red-500 -mt-16" />
          </div>
          <div className="text-left space-y-3 ml-4">
          <h3 className="text-xl font-bold mb-2">Photography</h3>
          <p>Capturing moments and creating visual stories through photography.
          Capturing moments and creating visual stories through photography
          </p>
          </div>
        </div>
        <div className="bg-violet-300 dark:bg-black dark:text-white p-4 rounded-lg shadow-md flex items-center text-center">
        <div>
          <FaCode size={40} className="text-purple-500 -mt-16" />
          </div>
          <div className="text-left space-y-3 ml-4">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Building responsive and dynamic websites tailored to client needs.
          Building responsive and dynamic websites tailored to client needs.
          </p>
          </div>
        </div>
      </div>
      <div>
        <AboutSliede />
      </div>
    </div>
    </div>
  );
};

export default AboutCard;
