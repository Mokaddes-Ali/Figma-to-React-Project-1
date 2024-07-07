import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import { AiOutlineAppstore, AiOutlinePicture, AiOutlineStar } from 'react-icons/ai';
import image1 from '../assets/Images/image1.webp';
import image2 from '../assets/Images/image1.webp';
import image3 from '../assets/Images/image1.webp';
import image4 from '../assets/Images/image1.webp';
import image5 from '../assets/Images/image1.webp';
import image6 from '../assets/Images/image1.webp';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const cards = [
    { id: 1, category: 'Mockup', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1', height: '300px', width: '250px' },
    { id: 2, category: 'Mockup', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2', height: '320px', width: '260px' },
    { id: 3, category: 'Graphic Design', image: image3, title: 'Graphic Design 1', description: 'Description for Graphic Design 1', height: '280px', width: '240px' },
    { id: 4, category: 'Graphic Design', image: image4, title: 'Graphic Design 2', description: 'Description for Graphic Design 2', height: '340px', width: '270px' },
    { id: 5, category: 'Logo', image: image5, title: 'Logo Design 1', description: 'Description for Logo Design 1', height: '310px', width: '260px' },
    { id: 6, category: 'Logo', image: image6, title: 'Logo Design 2', description: 'Description for Logo Design 2', height: '300px', width: '250px' },
  ];

  const filteredCards = activeCategory === 'All'
    ? cards
    : cards.filter(card => card.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto py-8 px-4 dark:bg-black dark:text-white">
      <div className="flex justify-between items-center mb-8">
        <div className="flex justify-center space-x-2 sm:space-x-4 flex-wrap">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded mb-2 ${activeCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
          >
            <AiOutlineAppstore className="inline-block mr-2" /> All
          </button>
          <button
            onClick={() => setActiveCategory('Mockup')}
            className={`px-4 py-2 rounded mb-2 ${activeCategory === 'Mockup' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
          >
            <AiOutlinePicture className="inline-block mr-2" /> Mockup
          </button>
          <button
            onClick={() => setActiveCategory('Graphic Design')}
            className={`px-4 py-2 rounded mb-2 ${activeCategory === 'Graphic Design' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
          >
            <AiOutlineStar className="inline-block mr-2" /> Graphic Design
          </button>
          <button
            onClick={() => setActiveCategory('Logo')}
            className={`px-4 py-2 rounded mb-2 ${activeCategory === 'Logo' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
          >
            <AiOutlineStar className="inline-block mr-2" /> Logo
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredCards.map(card => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            >
              <PortfolioCard 
                key={card.id} 
                image={card.image} 
                title={card.title} 
                description={card.description}
                height={card.height}
                width={card.width}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
