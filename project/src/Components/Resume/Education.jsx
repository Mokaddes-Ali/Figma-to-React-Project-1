import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  { id: 1, title: "Bachelor's Degree", description: "University A", color: 'bg-blue-500' },
  { id: 2, title: "Master's Degree", description: "University B", color: 'bg-green-500' },
  { id: 3, title: "PhD", description: "University C", color: 'bg-red-500' },
];

const Education = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold flex items-center"><FaGraduationCap className="mr-2" /> Education</h2>
      <div className="mt-4 space-y-4">
        {educationData.map((edu) => (
          <motion.div
            key={edu.id}
            className={`p-4 rounded-lg shadow-lg text-white ${edu.color}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
