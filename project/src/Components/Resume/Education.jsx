import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';


const educationData = [
  { id: 1, title: "2021-2023", description: "Ph.D In Horriblensess - University,,",heading:"Los Angeles, CA", color: 'bg-blue-100' },
  { id: 2, title: "2017-2021", description: "Computer Science - Imperialize,", heading:"Technical Institute", color: 'bg-green-50' },
  { id: 3, title: "2015-2017", description: "Graphic Designer - Web Graphy,,", heading:"Los Angeles, CA", color: 'bg-red-50' },
];

const Education = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold flex items-center"><FaGraduationCap className="mr-2 text-gray-500 text-[50px] dark:text-blue-700" /> Education</h2>
      <div className="mt-4 h-52 w-96 space-y-4">
        {educationData.map((edu) => (
          <motion.div
            key={edu.id}
            className={`p-4 rounded-lg shadow-lg h-[120px] dark:bg-gray-900 text-white ${edu.color}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-sm text-black dark:text-white">{edu.title}</h3>
            <p className="text-xl font-bold text-black dark:text-white">{edu.description}</p>
            <p className="text-xl font-sm text-black dark:text-white">{edu.heading}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
