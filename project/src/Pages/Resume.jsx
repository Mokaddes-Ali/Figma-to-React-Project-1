import React from 'react'
import Resum from '../Components/Resume/Resum';
import Sidebar from '../Components/Sidebar';

export default function Resume() {
  return (
    <div>
        <div className="flex flex-row">
      {/* Left of section */}
      <div>
        <Sidebar />
      </div>
      {/* Right of the About Section */}
      <div>
    <Resum />
    </div>
    </div>
    </div>
  )
}
