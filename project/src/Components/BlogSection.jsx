import React, { useState } from 'react';
import Modal from 'react-modal';
import image1 from '../assets/Images/blog-img-1.webp';
import image2 from '../assets/Images/blog-img-2.webp';
import image3 from '../assets/Images/blog-img-3.webp';
import image4 from '../assets/Images/blog-img-4.webp';

const cardSets = [
  [
    {
      image: image1,
      title: '27 April. Inspiration',
      text: 'How To Own Your Audience By Creating An Email List',
      detailedText: 'Detailed text for Card Title 2.',
      color: 'bg-red-100',
    },
    {
      image: image2,
      title: '27 April. Inspiration',
      text: 'How To Own Your Audience By Creating An Email List',
      detailedText: 'Detailed text for Card Title 2.',
      color: 'bg-orange-100',
    },
    {
      image: image3,
      title: '27 April. Inspiration',
      text: 'How To Own Your Audience By Creating An Email List',
      detailedText: 'Detailed text for Card Title 3.',
      color: 'bg-blue-100',
    },
    {
      image: image4,
      title: '27 April. Inspiration',
      text: 'How To Own Your Audience By Creating An Email List',
      detailedText: 'Detailed text for Card Title 4.',
      color: 'bg-slate-200'
    },
  ],
  [
    {
      image: image4,
      title: '27 April. Inspiration',
      text: 'How To Own Your Audience By Creating An Email List',
      detailedText: 'Detailed text for Card Title 5.',
      color: 'bg-green-100'
    },
    {
      image: image3,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText: 'Detailed text for Card Title 6.',
      color: 'bg-slate-300'
    },
    {
      image: image1,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText: 'Detailed text for Card Title 7.',
      color: 'bg-yellow-100'
    },
    {
      image: image2,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText: 'Detailed text for Card Title 8.',
      color: 'bg-amber-300'
    },
  ],
  [
    {
      image: image2,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText: 'Detailed text for Card Title 9.',
      color: 'bg-red-100',
    },
    {
      image: image4,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText: 'Detailed text for Card Title 10.',
      color: 'bg-orange-200',
    },
    {
      image: image1,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText: 'Detailed text for Card Title 11.',
      color: 'bg-indigo-100',
    },
    {
      image: image3,
      title: '27 April. Inspiration',
      text: 'This is a description of the card content.',
      detailedText:  'Detailed text for Card Title 12.',
      color: 'bg-indigo-200',
    },
  ],
];

const BlogSection = () => {
  const [activeSet, setActiveSet] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [darkMode, setDarkMode] = useState(false);


  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCard(null);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className='container mx-auto p-4 dark:bg-black dark:text-white bg-white text-gray-900'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardSets[activeSet].map((card, index) => (
           <div key={index} className={`rounded-lg shadow-md p-4 ${card.color} ${darkMode ? 'text-white dark:bg-red-700' : 'text-gray-900 dark:bg-black'}`}>
            <img
              src={card.image}
              alt={card.title}
              className="w-68 h-64 ml-5 rounded-2xl hover:w-76 hover:h-80 cursor-pointe"
              onClick={() => openModal(card)}
            />
            <h3 className="mt-4 ml-5 text-md text-gray-500 dark:text-gray-400">{card.title}</h3>
            <p className="mt-3 ml-5 mb-3 text-black text-bold text-xl cursor-pointer hover:text-blue-700 dark:text-white" onClick={() => openModal(card)}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14 space-x-2">
        <div
          className={`w-3 h-3 flex items-center justify-center rounded-full ${activeSet === 0 ? 'bg-blue-800 dark:bg-blue-800 ' : 'bg-black dark:bg-white '}`}
          onClick={() => setActiveSet(0)}
        />
        <div
          className={`w-3 h-3 flex items-center justify-center rounded-full ${activeSet === 1 ? 'bg-blue-700 dark:bg-blue-800 ' : 'bg-black dark:bg-white '}`}
          onClick={() => setActiveSet(1)}
        />
        <div
          className={`w-3 h-3 flex items-center justify-center rounded-full dark:bg-white ${activeSet === 2 ? 'bg-blue-800 dark:bg-blue-800 ' : 'bg-black dark:bg-white '}`}
          onClick={() => setActiveSet(2)}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Blog Post Modal"
        className="fixed bg-white p-8 inset-44 h-80 overflow-auto shadow-lg rounded-lg mx-4 my-12"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedCard && (
          <div>
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={closeModal}>
              Close
            </button>
            <p className="text-gray-600 mb-2">27 April Inspiration</p>
            <h3 className="text-xl font-semibold mb-2">How To Own Your Audience By Creating An Email List.</h3>
            <p className="text-gray-600 mb-4">{selectedCard.detailedText}</p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.
            </p>
            <div className="mt-8">
              <h4 className="text-lg font-semibold">Comment</h4>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Rafia Ana</span> - 15 min ago
              </p>
              <p className="text-gray-600 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?
              </p>
              <button className="text-blue-500">Reply</button>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold">Leave A Reply</h4>
              <textarea className="w-full h-24 p-2 border rounded-lg mt-2" placeholder="Write comment"></textarea>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2">Comment</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BlogSection;
