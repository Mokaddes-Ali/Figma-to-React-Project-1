import React from 'react';

const knowledgeData = [
  'HTML & CSS',
  'JavaScript',
  'React',
  'Node.js',
  'SQL',
  'Git',
  'APIs',
];

const Knowledge = () => {
  return (
    <section>
      <h2 className="text-2xl font-extrabold ">Knowledge</h2>
      <div className="mt-4 h-8 w-88 grid grid-cols-3 gap-4">
        {knowledgeData.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-gray-100 dark:bg-zinc-700 rounded-lg shadow"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Knowledge;
