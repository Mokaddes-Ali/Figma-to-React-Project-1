import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'typeface-roboto-slab';
import Footer from './Footer';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  
  const [activeFields, setActiveFields] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFieldClick = (fieldName) => {
    setActiveFields({ ...activeFields, [fieldName]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Form data submitted:', formData);

  
    setShowSuccessMessage(true);
    setFormData({ name: '', email: '', message: '' }); 
    setActiveFields({ name: false, email: false, message: false }); 
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/contact'); 
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-2xl text-black ml-14 mr-5 w-[830px] h-[829px] dark:bg-black dark:text-white">
      
      {/* heading contact */}
      <div className='flex m-12 font-sans'>
      <h1 className="text-4xl font-semibold mb-4 text-left">Contact</h1>
      <span className="bg-blue-700 h-1 w-36 mt-6 ml-8 block"></span>
      </div>
      {/* Contact card */}
      <div className="bg-slate-100 dark:bg-gray-700 m-10 dark:text-white shadow-lg rounded-2xl  h-[560px] w-[750px] ml-10 mr-10">
        <h1 className="text-2xl text-gray-800 dark:text-white pl-8 pt-5">I'm Always Open To Discussing Produuct</h1>
        <h2 className="text-2xl font-bold text-black pl-8 pt-3 dark:text-white">design work or partnerships.</h2>
      <form onSubmit={handleSubmit} className="space-y-4 m-8">
        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`block text-lg  ${activeFields.name ? 'text-red-500 h-14' : ''}`}
            >
              Name*
            </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange}
              onClick={() => handleFieldClick('name')}
              className={`block outline-none border-b w-[580px] ${activeFields.name ? 'border-red-500' : 'border-gray-900'} bg-transparent h-5 sm:h-15 transition duration-300 transform origin-top text-sm`}
              required 
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className={`block  text-lg ${activeFields.email ? 'text-blue-500 h-14' : ''}`}
            >
              Email*
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange}
              onClick={() => handleFieldClick('email')}
              className={`block outline-none w-[580px] border-b ${activeFields.email ? 'border-blue-500 h-20' : 'border-gray-900'} bg-transparent h-5 sm:h-15 transition duration-300 transform origin-top text-sm`}
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4">
          <div>
            <label
              htmlFor="message"
              className={`block text-lg ${activeFields.message ? 'text-orange-500 h-20' : ''}`}
            >
              Message*
            </label>
            <textarea 
              name="message" 
              id="message" 
              value={formData.message} 
              onChange={handleChange}
              onClick={() => handleFieldClick('message')}
              className={`block w-[580px] outline-none border-b ${activeFields.message ? 'border-orange-500' : 'border-gray-900'} bg-transparent h-5 sm:h-5 transition duration-300 transform origin-top text-sm`}
              rows="4" 
              required 
            />
          </div>
        </div>
        {/* Contact Button */}
        <div className="flex">
          <button 
            type="submit"
            className="bg-slate-100 border-black border mt-8 text-black hover:bg-blue-700 hover:text-white transition-colors duration-300 px-10 py-3 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 transform translate-y-0 bg-green-500 text-white p-4 rounded-md shadow-md transition-all duration-500 ease-in-out">
          <p className="font-semibold">Success!</p>
          <p>Your form has been submitted successfully.</p>
        </div>
      )}
      <div className="-ml-4">
      <Footer />
      </div>
      </div>
  );
};

export default ContactSection;
