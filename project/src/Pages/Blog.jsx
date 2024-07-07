import React from 'react'
import Sidebar from '../Components/Sidebar'
import BlogSection from '../Components/BlogSection'

export default function Blog() {
  return (
    <div className='container mx-auto mt-20'>
        <div className="flex flex-row">
      {/* Left of section */}
      <div>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <BlogSection />
      </div>
    </div>
  )
}
