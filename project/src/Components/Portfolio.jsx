import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import { AiOutlineAppstore, AiOutlinePicture, AiOutlineStar } from 'react-icons/ai';
import image1 from '../assets/Images/image1.webp';
import image2 from '../assets/Images/image2.webp';
import image3 from '../assets/Images/image3.webp';
import image4 from '../assets/Images/image4.webp';
import image5 from '../assets/Images/image5.webp';
import image6 from '../assets/Images/image6.webp';
import Footer from './Footer';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const cards = [
    { id: 1, category: 'Mockup', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1' },
    { id: 2, category: 'Mockup', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2' },
    { id: 3, category: 'Mockup', image: image3, title: 'Mockup Design 1', description: 'Description for Mockup Design 1'},
    { id: 4, category: 'Mockup', image: image4, title: 'Mockup Design 2', description: 'Description for Mockup Design 2'},
    { id: 5, category: 'Graphic Design', image: image2, title: 'Graphic Design 1', description: 'Description for Graphic Design 1' },
    { id: 6, category: 'Graphic Design', image: image3, title: 'Graphic Design 2', description: 'Description for Graphic Design 2'},
    { id: 7, category: 'Graphic Design', image: image4, title: 'Graphic Design 2', description: 'Description for Graphic Design 2' },
    { id: 8, category: 'Logo', image: image1, title: 'Logo Design 1', description: 'Description for Logo Design 1'},
    { id: 9, category: 'Logo', image: image3, title: 'Logo Design 1', description: 'Description for Logo Design 1'},
    { id: 10, category: 'Logo', image: image5, title: 'Logo Design 1', description: 'Description for Logo Design 1'},
    { id: 11, category: 'All', image: image6, title: 'Additional Design', description: 'Description for Additional Design'},
    { id: 12, category: 'All', image: image5, title: 'Another Design', description: 'Description for Another Design'},
  ];

  const getFilteredCards = () => {
    switch (activeCategory) {
      case 'All':
        return cards.slice(0, 6);
      case 'Mockup':
        return cards.filter(card => card.category === 'Mockup').slice(0, 4);
      case 'Graphic Design':
        return cards.filter(card => card.category === 'Graphic Design').slice(0, 3);
      case 'Logo':
        return cards.filter(card => card.category === 'Logo').slice(0, 3);
      default:
        return cards;
    }
  };

  const filteredCards = getFilteredCards();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto py-8 px-14 -mt-10 h-[1020px] bg-white shadow-lg rounded-2xl dark:bg-black dark:text-white">
        <div className="flex justify-between items-center mb-5 ml-44 ">
        <div className="flex justify-center space-x-1 sm:space-x-4 flex-wrap">
          <div
            onClick={() => setActiveCategory('All')}
            className={`px-2 py-2 rounded mb-2 cursor-pointer ${activeCategory === 'All' ? ' text-blue-700 dark:text-blue-700' : ' text-gray-700 dark:text-gray-300'}`}
          >
          All
          </div>
          <div
            onClick={() => setActiveCategory('Mockup')}
            className={`px-4 py-2 rounded mb-2 cursor-pointer ${activeCategory === 'Mockup' ? 'text-blue-700 dark:text-blue-700' : 'text-gray-700 dark:text-gray-300'}`}
          >
         Mockup
          </div>
          <div
            onClick={() => setActiveCategory('Graphic Design')}
            className={`px-4 py-2 rounded mb-2 cursor-pointer ${activeCategory === 'Graphic Design' ? 'text-blue-700 dark:text-blue-700' : 'text-gray-700 dark:text-gray-300'}`}
          >
         Graphic Design
          </div>
          <div
            onClick={() => setActiveCategory('Logo')}
            className={`px-4 py-2 rounded mb-2 cursor-pointer ${activeCategory === 'Logo' ? 'text-blue-700 dark:text-blue-700' : 'text-gray-700 dark:text-gray-300'}`}
          >
             Logo
          </div>
        </div>
      </div>
      <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-">
        <AnimatePresence>
          {filteredCards.map(card => (
            <motion.div
            className='bg-white dark:bg-slate-900 rounded-2xl shadow-lg  w-[340px] h-[270px] '
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
      <div className='-ml-14 mt-4'>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
