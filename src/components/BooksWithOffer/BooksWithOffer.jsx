import React from 'react';
import BookCard from '../shared/BookCard/BookCard';

// Placeholder data for books with offer - ensure data matches template structure
const booksWithOfferData = [
  { id: 'bwo1', title: 'Simple Way Of Piece Life', author: 'Armor Ramsey', price: '40.00', originalPrice: '50.00', imageUrl: '/placeholder-offer-1.jpg' },
  { id: 'bwo2', title: 'Great Travel At Desert', author: 'Sanchit Howdy', price: '38.00', originalPrice: '30.00', imageUrl: '/placeholder-offer-2.jpg' }, // Price should be less than originalPrice
  { id: 'bwo3', title: 'The Lady Beauty Scarlett', author: 'Arthur Doyle', price: '45.00', originalPrice: '35.00', imageUrl: '/placeholder-offer-3.jpg' }, // Price should be less than originalPrice
  { id: 'bwo4', title: 'Way Of Happiness', author: 'Ananda Kumar', price: '35.00', originalPrice: '42.00', imageUrl: '/placeholder-offer-4.jpg' },
  // Add more if the template shows more than 4, or adjust the grid accordingly
];

const BooksWithOffer = () => {
  return (
    <section className="bg-cream py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-light-text text-sm tracking-wider uppercase mb-2">Grab your opportunity</p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-heading-text mb-12 lg:mb-16">
          Books With Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12 lg:mb-16">
          {booksWithOfferData.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price} 
              originalPrice={book.originalPrice} // Pass originalPrice to BookCard
              imageUrl={book.imageUrl}
              showCartButton={true} // Or based on template's design for this section
            />
          ))}
        </div>
        {/* The template does not show a "View All Products" button in this section, so it's removed. 
           If it were present, it would be styled like other similar buttons. */}
      </div>
    </section>
  );
};

export default BooksWithOffer;

