// src/components/Portfolio.jsx
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const cards = [
    { id: 1, category: 'Mockup', image: 'path/to/image1.jpg', title: 'Mockup 1' },
    { id: 2, category: 'Graphic Design', image: 'path/to/image2.jpg', title: 'Graphic Design 1' },
    { id: 3, category: 'Logo', image: 'path/to/image3.jpg', title: 'Logo 1' },
    { id: 4, category: 'Mockup', image: 'path/to/image4.jpg', title: 'Mockup 2' },
    { id: 5, category: 'Graphic Design', image: 'path/to/image5.jpg', title: 'Graphic Design 2' },
    { id: 6, category: 'Logo', image: 'path/to/image6.jpg', title: 'Logo 2' },
    { id: 7, category: 'Mockup', image: 'path/to/image7.jpg', title: 'Mockup 3' },
    { id: 8, category: 'Graphic Design', image: 'path/to/image8.jpg', title: 'Graphic Design 3' },
    { id: 9, category: 'Logo', image: 'path/to/image9.jpg', title: 'Logo 3' },
    { id: 10, category: 'Mockup', image: 'path/to/image10.jpg', title: 'Mockup 4' },
    { id: 11, category: 'Graphic Design', image: 'path/to/image11.jpg', title: 'Graphic Design 4' },
  ];

  const filteredCards = filter === 'All' ? cards : cards.filter(card => card.category === filter);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button onClick={() => setFilter('All')} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">All</button>
        <button onClick={() => setFilter('Mockup')} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Mockup</button>
        <button onClick={() => setFilter('Graphic Design')} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Graphic Design</button>
        <button onClick={() => setFilter('Logo')} className="px-4 py-2 bg-blue-500 text-white rounded">Logo</button>
      </div>
      <Slider {...settings}>
        {filteredCards.map(card => (
          <div key={card.id} className="p-2">
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p>{card.category}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
