import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ image, title, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const detailsText = `
    Aura Dione
    Project : Website
    Client : Envato
    Languages : Photoshop, Figma
    Preview : Www.Envato.Com
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.

    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur.
  `;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <div className="relative w-full h-2/3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover cursor-pointer transition-transform duration-500"
          onClick={() => setShowDetails(true)}
        />
      </div>
      <div className="p-4">
        <h3 
          className="text-lg font-semibold cursor-pointer"
          onClick={() => setShowDetails(true)}
        >
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>

      {showDetails && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg max-w-lg mx-auto w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{title}</h2>
              <button 
                onClick={() => setShowDetails(false)} 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-50 overflow-y-auto">
              <p className="text-gray-700">{detailsText}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
