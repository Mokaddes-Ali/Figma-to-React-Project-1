import React from 'react'
import Portfolio from '../Components/Portfolio';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function Works() {
  return (
  <div>
    <Navbar />
    <div className='container mx-auto mt-20'>
       <div className="flex flex-row">
      {/* Left of section */}
      <div>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <div>
      <Portfolio />
    </div>
    </div>
    </div>
    </div>
  )
}
