import React from 'react'
import Education from './Education'
import Experience from './Experience'
import WorkingSkills from './WorkingSkills'
import Knowledge from './Knowledge'

export default function Resum() {
  return (
    <div className='container mx-auto bg-white dark:bg-black dark:text-white rounded-3xl shadow-lg border-zinc-50 h-[850px] w-[900px]'>
    {/* left side of resume section */}
      <div className='flex flex-row'>
        <div>
        <Education />
        </div>
        <div>
        <Experience />
        </div>
        </div>

    {/* Right side of resume section */}
        <div className='flex flex-row'>
        <div>
        <WorkingSkills />
        </div>
        <div>
        <Knowledge />
        </div>
        </div>
        </div>
       
  )
}
