import React from 'react';

const ArticleCard = ({ title, date, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Placeholder for Article Image */}
      <div className={`w-full h-48 bg-gray-200 ${!imageUrl && 'flex items-center justify-center text-gray-400'}`}>
        {imageUrl ? <img src={imageUrl} alt={title} className="w-full h-full object-cover"/> : 'No Image'}
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-500 mb-1">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">{title}</h3>
        <a href={link} className="text-amber-600 hover:text-amber-700 font-medium text-sm">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;

