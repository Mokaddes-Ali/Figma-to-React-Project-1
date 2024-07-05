import React from 'react'
import Portfolio from '../Components/Portfolio';
import Sidebar from '../Components/Sidebar';

export default function Works() {
  return (
    <div>
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
  )
}
