import React from 'react'
import BlogSection from '../Components/BlogSection'
import Sidebar from '../Components/Sidebar'

export default function Blog() {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-row">
      {/* Left of section */}
      <div>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <div>
      <BlogSection />
      </div>
      </div>
    </div>
  )
}
