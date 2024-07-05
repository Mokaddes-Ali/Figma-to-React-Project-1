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
    { image: 'path/to/image1.jpg', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'path/to/image2.jpg', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'path/to/image1.jpg', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'path/to/image2.jpg', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'path/to/image1.jpg', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'path/to/image2.jpg', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'path/to/image1.jpg', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'path/to/image2.jpg', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'path/to/image1.jpg', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'path/to/image2.jpg', title: 'Blog Title 2', description: 'Blog description 2' },
    { image: 'path/to/image1.jpg', title: 'Blog Title 1', description: 'Blog description 1' },
    { image: 'path/to/image2.jpg', title: 'Blog Title 2', description: 'Blog description 2' },
    // Add more blog data here...
  ];

  return (
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
  );
};

export default BlogSection;
