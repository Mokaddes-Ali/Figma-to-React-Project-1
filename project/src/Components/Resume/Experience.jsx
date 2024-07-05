import React from 'react';
import { FaBriefcase, FaCode, FaCamera, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experienceData = [
  { id: 1, title: 'Frontend Developer', description: 'Company A', icon: <FaCode /> },
  { id: 2, title: 'Photographer', description: 'Company B', icon: <FaCamera /> },
  { id: 3, title: 'Graphic Designer', description: 'Company C', icon: <FaPalette /> },
];

const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold flex items-center"><FaBriefcase className="mr-2" /> Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            className="p-4 rounded-lg shadow-lg bg-gray-200"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold flex items-center">{exp.icon} <span className="ml-2">{exp.title}</span></h3>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
