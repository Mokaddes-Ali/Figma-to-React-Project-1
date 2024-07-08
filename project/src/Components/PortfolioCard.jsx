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
    Languages : Photoshop, Figma
    Preview : Www.Envato.Com
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.  
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur.
    `;

  return (
    <div className="overflow-hidden">
      <div className="ml-5 w-[260px] h-[190px] hover:w-[270px]  hover:h-[200px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full m-3 h-full rounded-3xl object-cover cursor-pointer transition-transform duration-500"
          onClick={() => setShowDetails(true)}
        />
      </div>
      <div className="p-4">
        <h3 
          className="text-lg font-semibold cursor-pointer dark:text-white"
          onClick={() => setShowDetails(true)}
        >
          {title}
        </h3>
        <p className="text-gray-700 dark:text-zinc-400">{description}</p>
      </div>

      {showDetails && (
        <motion.div
          className = "fixed inset-52 bg-none flex items-center justify-center z-50 p-4"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 w-[900px] p-7 h-[350px] mt-40 ml-40 dark:text-white shadow-lg rounded-lg max-w-lg mx-auto overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{title}</h2>
              <button 
                onClick={() => setShowDetails(false)} 
                className="text-gray-600 dark:text-white dark:bg-blue-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-50 overflow-y-auto dark:bg-gray-800">
              <p className="text-gray-700 dark:text-white ">{detailsText}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
