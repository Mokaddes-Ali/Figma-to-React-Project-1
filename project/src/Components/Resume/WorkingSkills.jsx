import React from 'react';

const ProgressBar = ({ percent, color }) => (
  <div className="w-44 mb-2">
    <div className="w-[350px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const WorkingSkills = () => (
  <div>
    <h1 className="text-2xl font-extrabold mb-2 -mt-3">Working Skills</h1>
  <div className="flex flex-col gap-2" style={{ width: '180px' }}>
    <p className='flex'>WebDesign <span className='ml-60'>85%</span></p>
    <ProgressBar percent={85} color="bg-blue-500" />
    <p className='flex'>MobileApp <span className='ml-60'>55%</span></p>
    <ProgressBar percent={55} color="bg-orange-300" />
    <p className='flex'>Illustrator <span className='ml-60'>65%</span></p>
    <ProgressBar percent={65} color="bg-red-500" />
    <p className='flex'>Photoshop <span className='ml-60'>72%</span></p>
    <ProgressBar percent={72} color="bg-green-500" />
  </div>
  </div>
);

export default WorkingSkills;
