import React from 'react';
import { ShoppingCart } from 'lucide-react'; // Assuming lucide-react is installed

const BookCard = ({ title, author, price, originalPrice, imageUrl, showCartButton = true }) => {
  return (
    <div className="bg-white group text-center transition-all duration-300 ease-in-out hover:shadow-2xl rounded-md overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-72 sm:h-80 md:h-96 bg-cream flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-contain p-4 transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-light-text">
            No Image
          </div>
        )}
        {showCartButton && (
          <button 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-brand text-white text-xs uppercase font-semibold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-light focus:outline-none whitespace-nowrap"
            onClick={(e) => { e.stopPropagation(); alert('Added to cart: ' + title); }}
          >
            <ShoppingCart size={14} className="inline mr-1.5" /> Add to Cart
          </button>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-semibold text-heading-text mb-1 leading-tight min-h-[2.5em]">
          <a href="#" className="hover:text-brand transition-colors">{title}</a>
        </h3>
        <p className="text-sm text-light-text mb-2">{author}</p>
        <div className="mt-auto">
          {originalPrice && (
            <span className="text-sm text-light-text line-through mr-2">${originalPrice}</span>
          )}
          <span className="text-xl font-bold text-brand">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

