import React from 'react';
import BookCard from '../shared/BookCard/BookCard';
import minhaImagemHero1 from '../../assets/book.jpg';
import minhaImagemHero2 from '../../assets/book2.jpg';
import minhaImagemHero3 from '../../assets/book3.jpg';

// Placeholder data for featured books - using more descriptive placeholders
const featuredBooksData = [
  { id: 'fb1', title: 'Faça acontecer', author: 'Antônio André', price: '40,00', originalPrice: null, imageUrl: minhaImagemHero1 },
  { id: 'fb2', title: 'Do luto à vida', author: 'Antônio André', price: '38,00', originalPrice: null, imageUrl: minhaImagemHero2 },
  { id: 'fb3', title: 'Faça acontecer II', author: 'Antônio André', price: '45,00', originalPrice: null, imageUrl: minhaImagemHero3 },
  // { id: 'fb4', title: 'Once Upon A Time', author: 'Antônio André', price: '35.00', originalPrice: null, imageUrl: '/placeholder-featured-4.jpg' },
];

const FeaturedBooks = () => {
  return (
    <section className="bg-[#eedcce] py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-light-text text-sm tracking-wider uppercase mb-2">Livros</p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-heading-text mb-12 lg:mb-16">
          Lançamentos
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
        {/* opção de ver mais produtos */}
        {/* <a href="#" className="inline-block bg-transparent border-2 border-brand-light text-brand font-semibold py-3 px-10 rounded hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 text-sm uppercase tracking-wider">
          View all products &rarr;
        </a> */}
      </div>
    </section>
  );
};

export default FeaturedBooks;

