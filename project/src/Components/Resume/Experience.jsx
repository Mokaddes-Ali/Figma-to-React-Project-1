import React from 'react';
import { FaBriefcase, FaCode, FaCamera, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experienceData = [
  { id: 1, title: '2019 - Present', description: 'Sr. Software Tester', icon: 'Google Inc.' },
  { id: 2, title: '2015-2017', description: 'Cr. Web Developer', icon: 'Creative Gigs' },
  { id: 3, title: '2014 - 2015', description: 'Company C', icon: 'ib-themes ltd.' },
];

const Experience = () => {
  return (
    <section className='-ml-16'>
      <h2 className="text-2xl font-bold flex items-center"><FaBriefcase className=" text-gray-500 text-[40px] mr-5 dark:text-blue-700" /> Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            className="p-4 rounded-lg h-28 w-80 dark:bg-slate-900 shadow-lg bg-gray-200"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             <span className="ml-2 text-left">{exp.title}</span>
            <p className="text-xl font-semibold text-left">{exp.description}</p>
            <h3 >{exp.icon} </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
