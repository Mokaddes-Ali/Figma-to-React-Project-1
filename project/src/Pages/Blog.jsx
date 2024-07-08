import React from 'react'
import Sidebar from '../Components/Sidebar'
import BlogSection from '../Components/BlogSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Blog() {
  return (
    <div>
      <Navbar />
    <div className='container mx-auto'>
        <div className="flex flex-row">
      {/* Left of section */}
      <div className='ml-14'>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <div className='h-[1100px] w-[830px] ml-14 p-4 rounded-2xl shadow-lg bg-white dark:bg-black'>
        {/* heading contact */}
        <div className='flex m-4 mb-6 font-sans'>
      <h1 className="text-4xl font-semibold text-left dark:text-white">Blog</h1>
      <span className="bg-blue-700 h-1 w-40 mt-6 ml-8 block"></span>
      </div>
      <BlogSection />
      <div className='-ml-4 mt-5'>
        <Footer />
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
