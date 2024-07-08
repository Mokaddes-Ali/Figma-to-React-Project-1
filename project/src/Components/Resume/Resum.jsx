import React from 'react'
import Education from './Education'
import Experience from './Experience'
import WorkingSkills from './WorkingSkills'
import Knowledge from './Knowledge'

export default function Resum() {
  return (
    <div className='container mx-auto bg-white dark:bg-black dark:text-white rounded-3xl shadow-lg border-zinc-50 h-[850px] w-[835px]'>
    {/* heading contact */}
    <div className='flex pl-12 pt-10 font-sans'>
      <h1 className="text-4xl font-bold text-black text-left dark:text-white">Resume
      </h1>
      <span className="bg-blue-700 h-1 w-40 mt-6 ml-8 block"></span>
      </div>
    {/* left side of resume section */}
      <div className='flex flex-row space-x-12 '>
        <div className='pl-12 pt-10'>
        <Education />
        </div>
        <div className='pl-12 pt-10'>
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
