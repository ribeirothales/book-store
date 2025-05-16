import React from 'react';
import minhaImagemHero3 from '../../assets/book3.jpg';

const BestSellingBook = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Book Image */}
        <div className="lg:w-2/5 flex justify-center lg:justify-start">
          {/* Placeholder for Book Image - ensure it matches template's style */}
          <div className="w-72 h-[450px] sm:w-80 sm:h-[500px] lg:w-[380px] lg:h-[580px] bg-cream rounded-lg shadow-xl flex items-center justify-center">
            <img src="/placeholder-bestselling-book.jpg" alt="Best Selling Book" className="w-full h-full object-contain p-8"/>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-3/5 text-center lg:text-left">
          {/* The small text "By Timbur Hood" is part of the main title in the template image, not a separate subtitle */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-heading-text mb-4 lg:mb-6 leading-tight">
            Faça acontecer II
          </h2>
          <p className="text-lg text-light-text mb-4 font-medium">
            Por Antônio André
          </p>
          <p className="text-light-text mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg">
            Trata-se de uma obra que apresenta informações úteis aos empreendedores e àqueles que desejam empreender, pois vai desde a criação até a gestão de uma empresa. Apresenta linguagem acessível e uma estruturação que facilita a leitura.
          </p>
          <p className="text-3xl lg:text-4xl font-bold text-brand mb-6 lg:mb-8">R$ 40,00</p>
          <a href="#" className="inline-block bg-black text-white font-semibold py-3.5 px-10 rounded hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider">
            Comprar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingBook;

