import React from 'react';
import { FaPaintBrush, FaMobileAlt, FaCamera, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
      <p className="mb-4 text-center">
        This is a brief introduction about yourself. Here you can share your background, interests, and what drives you.
      </p>
      <p className="mb-12 text-center">
        Feel free to elaborate on your professional journey and personal experiences that have shaped you into who you are today.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaPaintBrush size={40} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p>Creating intuitive and beautiful user interfaces and experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaMobileAlt size={40} className="text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p>Developing mobile applications that provide seamless user experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaCamera size={40} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Photography</h3>
          <p>Capturing moments and creating visual stories through photography.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaCode size={40} className="text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Building responsive and dynamic websites tailored to client needs.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
