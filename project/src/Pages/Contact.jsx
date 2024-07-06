import React from 'react';
import ContactSection from '../Components/ContactSection';
import Sidebar from '../Components/Sidebar';


const Contact = () => {
  return (
    <div className="container mx-auto">
        <div className="flex flex-row">
      {/* Left of section */}
      <div>
        <Sidebar />
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
