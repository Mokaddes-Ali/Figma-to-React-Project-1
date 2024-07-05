import React from 'react';
import { FaPaintBrush, FaMobileAlt, FaCamera, FaCode } from 'react-icons/fa';
import Sidebar from './Sidebar';
import ima from "../assets/Images/parson-img-1.webp"

const About = () => {
  return (
    <div className="flex flex-row">
      {/* Left of section */}
      <div>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
    <div className="p-8 m-12 rounded-lg shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-left">About Me</h1>
      <p className="mb-4 text-left">
      I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
       I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p className="mb-12 text-left">
        Feel free to elaborate on your professional journey and personal experiences that have shaped you into who you are today.
        Feel free to elaborate on your professional journey and personal experiences that have shaped you into who you are today.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center text-center">
          <div className="card-icon ">
          <FaPaintBrush size={40} className="text-blue-500 mb-4" />
          </div>
          <div className="text-left space-y-3 ml-4">
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p>Creating intuitive and beautiful user interfaces and experiences.Creating intuitive and beautiful user interfaces and experiences</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center text-center">
          <div>
          <FaMobileAlt size={40} className="text-green-500 mb-4" />
          </div>
          <div className="text-left space-y-3 ml-4" >
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p>Developing mobile applications that provide seamless user experiences.
          Developing mobile applications that provide seamless user experiences.
          </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex  items-center text-center">
        <div>
          <FaCamera size={40} className="text-red-500 mb-4" />
          </div>
          <div className="text-left space-y-3 ml-4">
          <h3 className="text-xl font-bold mb-2">Photography</h3>
          <p>Capturing moments and creating visual stories through photography.
          Capturing moments and creating visual stories through photography
          </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center text-center">
        <div>
          <FaCode size={40} className="text-purple-500 mb-4" />
          </div>
          <div className="text-left space-y-3 ml-4">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Building responsive and dynamic websites tailored to client needs.
          Building responsive and dynamic websites tailored to client needs.
          </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
