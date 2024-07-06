import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutSliee = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  const images = [
    'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-4.png&w=384&q=75',
    'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75',
    'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-2.png&w=384&q=75',
    'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-4.png&w=384&q=75',
    'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75',
    'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-2.png&w=384&q=75',  
];

  return (
    <div className="container mx-auto py-8 mt-4">
     <h1 className="text-2xl text-center mb-10 mt-10 text-black font-semibold">Clinet</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img src={image} alt={`Slide ${index + 1}`} className="w-24 h-16 rounded-2xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutSliee;
