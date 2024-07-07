import React from 'react';
import ContactSection from '../Components/ContactSection';
import Sidebar from '../Components/Sidebar';


const Contact = () => {
  return (
    <div className="container mx-auto mt-20">
        <div className="flex flex-row">
      {/* Left of section */}
      <div className='ml-14'>
        <Sidebar className="" />
      </div>
      {/* Right of the About Section */}
      <div>
      <ContactSection />
      </div>
    </div>
    </div>
  );
};

export default Contact;
