import React from 'react';
import BookCard from '../shared/BookCard/BookCard';

// Placeholder data for featured books - using more descriptive placeholders
const featuredBooksData = [
  { id: 'fb1', title: 'Simple Way Of Piece Life', author: 'Armor Ramsey', price: '40.00', originalPrice: null, imageUrl: '/placeholder-featured-1.jpg' },
  { id: 'fb2', title: 'Great Travel At Desert', author: 'Sanchit Howdy', price: '38.00', originalPrice: null, imageUrl: '/placeholder-featured-2.jpg' },
  { id: 'fb3', title: 'The Lady Beauty Scarlett', author: 'Arthur Doyle', price: '45.00', originalPrice: null, imageUrl: '/placeholder-featured-3.jpg' },
  { id: 'fb4', title: 'Once Upon A Time', author: 'Klien Marry', price: '35.00', originalPrice: null, imageUrl: '/placeholder-featured-4.jpg' },
];

const FeaturedBooks = () => {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-light-text text-sm tracking-wider uppercase mb-2">Livros</p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-heading-text mb-12 lg:mb-16">
          em promoção!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12 lg:mb-16">
          {featuredBooksData.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              originalPrice={book.originalPrice}
              imageUrl={book.imageUrl}
              showCartButton={true} // Or based on template's design for this section
            />
          ))}
        </div>
        <a href="#" className="inline-block bg-transparent border-2 border-brand-light text-brand font-semibold py-3 px-10 rounded hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 text-sm uppercase tracking-wider">
          View all products &rarr;
        </a>
      </div>
    </section>
  );
};

export default FeaturedBooks;

