import React, { useState } from 'react';
import BookCard from '../shared/BookCard/BookCard';

// Placeholder data for popular books - ensure data matches template structure
const popularBooksData = [
  { id: 'pb1', title: 'Portrait photography', author: 'Adam Silber', price: '40.00', category: 'All Genre', imageUrl: '/placeholder-popular-1.jpg', originalPrice: null },
  { id: 'pb2', title: 'Once upon a time', author: 'Klien Marry', price: '35.00', category: 'Adventure', imageUrl: '/placeholder-popular-2.jpg', originalPrice: null },
  { id: 'pb3', title: 'Tips of simple lifestyle', author: 'Bratt Smith', price: '40.00', category: 'Technology', imageUrl: '/placeholder-popular-3.jpg', originalPrice: null },
  { id: 'pb4', title: 'Just felt from outside', author: 'Nicole Wilson', price: '40.00', category: 'Business', imageUrl: '/placeholder-popular-4.jpg', originalPrice: null },
  { id: 'pb5', title: 'Peaceful Enlightment', author: 'Marmik Lama', price: '40.00', category: 'Romantic', imageUrl: '/placeholder-popular-5.jpg', originalPrice: null },
  { id: 'pb6', title: 'Great travel at desert', author: 'Sanchit Howdy', price: '40.00', category: 'Adventure', imageUrl: '/placeholder-popular-6.jpg', originalPrice: null },
  { id: 'pb7', title: 'Life among the pirates', author: 'Armor Ramsey', price: '40.00', category: 'Fictional', imageUrl: '/placeholder-popular-7.jpg', originalPrice: null },
  { id: 'pb8', title: 'Simple way of piece life', author: 'Armor Ramsey', price: '40.00', category: 'All Genre', imageUrl: '/placeholder-popular-8.jpg', originalPrice: null },
];

const categories = ['All Genre', 'Business', 'Technology', 'Romantic', 'Adventure', 'Fictional'];

const PopularBooks = () => {
  const [activeCategory, setActiveCategory] = useState('All Genre');

  const filteredBooks = activeCategory === 'All Genre'
    ? popularBooksData
    : popularBooksData.filter(book => book.category === activeCategory);

  return (
    <section className="bg-cream py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-light-text text-sm tracking-wider uppercase mb-2">Some quality items</p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-heading-text mb-10 lg:mb-12">
          Popular Books
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 md:gap-x-5 mb-10 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded font-medium text-sm transition-all duration-300 ease-in-out focus:outline-none
                ${activeCategory === category
                  ? 'bg-brand text-white shadow-md'
                  : 'bg-transparent text-light-text hover:text-brand hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredBooks.slice(0, 8).map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              originalPrice={book.originalPrice}
              imageUrl={book.imageUrl}
              showCartButton={true} // Consistent with FeaturedBooks, adjust if template differs
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;

