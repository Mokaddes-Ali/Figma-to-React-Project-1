import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Web Design', percentage: 80 },
  { name: 'Mobile App', percentage: 70 },
  { name: 'Illustrator', percentage: 90 },
  { name: 'Photoshop', percentage: 85 },
];

const WorkingSkills = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Working Skills</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default WorkingSkills;
