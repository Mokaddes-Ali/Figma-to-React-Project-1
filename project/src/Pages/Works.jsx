import React from 'react'
import Portfolio from '../Components/Portfolio';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function Works() {
  return (
  <div>
    <Navbar />
    <div className='container mx-auto mt-5'>
       <div className="flex flex-row">
      {/* Left of section */}
      <div className='ml-14'>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <div className='bg-white shadow-lg rounded-2xl dark:bg-black h-[600px] w-[830px]  ml-14'>
          {/* heading contact */}
      <div className='flex m-12 font-sans'>
      <h1 className="text-4xl font-semibold mb-4 text-left dark:text-white">Portfolio</h1>
      <span className="bg-blue-700 h-1 w-36 mt-6 ml-8 block"></span>
      </div>
      <Portfolio />
    </div>
    </div>
    </div>
    </div>
  )
}
