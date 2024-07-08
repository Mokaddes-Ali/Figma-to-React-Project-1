import React from 'react'
import Resum from '../Components/Resume/Resum';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function Resume() {
  return (
    <div>
      <Navbar />
    <div className='container mx-auto mt-20'>
        <div className="flex flex-row">
      {/* Left of section */}
      <div className='ml-12'>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <div className='ml-14'>
    <Resum />
    </div>
    </div>
    </div>
    </div>
  )
}
