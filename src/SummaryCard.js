// SummaryCard.js
import React from 'react';

function SummaryCard({ title, summary, link }) {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {summary}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 transition-colors duration-200">Read More</a>
      </div>
    </div>
  );
}

export default SummaryCard;
