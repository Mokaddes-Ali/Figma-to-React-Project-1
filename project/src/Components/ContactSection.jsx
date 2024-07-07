import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form data submitted:', formData);

    // Show success message
    setShowSuccessMessage(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form data (optional)
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/Contact'); // Redirect after success message (optional)
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <div className="container mx-auto p-4 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <h2 className="text-2xl mb-2">We would love to hear from you</h2>
      <h2 className="text-2xl mb-6">Please fill out the form below</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-0">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-0">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-0">
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea 
              name="message" 
              id="message" 
              value={formData.message} 
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
              rows="4" 
              required 
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            type="submit"
            className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 transform translate-y-0 bg-green-500 text-white p-4 rounded-md shadow-md transition-all duration-500 ease-in-out">
          <p className="font-semibold">Success!</p>
          <p>Your form has been submitted successfully.</p>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
