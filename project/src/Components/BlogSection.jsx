import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from './BlogCard';

const BlogSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const blogs = [
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-1.png&w=640&q=75', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-2.png&w=640&q=75', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-3.png&w=640&q=75', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-4.png&w=640&q=75', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-1.png&w=640&q=75', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-2.png&w=640&q=75', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-3.png&w=640&q=75', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-4.png&w=640&q=75', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-1.png&w=640&q=75', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-2.png&w=640&q=75', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-3.png&w=640&q=75', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fblog-img-4.png&w=640&q=75', title: 'Blog Title 2', description: 'Blog description 2' },
   
    // Add more blog data here...
  ];

  return (
    <div>
     <div className="container mx-auto py-8">
     <h1 className="text-3xl font-bold text-center mb-6">Blog Section</h1>
     <Slider {...settings}>
       {blogs.map((blog, index) => (
         <div key={index} className="px-2">
           <BlogCard {...blog} />
         </div>
       ))}
     </Slider>
   </div>
   </div>
  );
};

export default BlogSection;
