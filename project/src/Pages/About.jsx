import React from 'react';
import AboutSection from '../Components/AboutSection';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto  mt-5">
      <AboutSection />
    </div>
    </div>
  );
};

export default About;
