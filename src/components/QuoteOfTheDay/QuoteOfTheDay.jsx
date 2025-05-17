import React from 'react';

const QuoteOfTheDay = () => {
  return (
    <section className="bg-[#eedcce] py-16 lg:py-24 px-6 md:px-12 lg:px-24 text-center">
      <div className="container mx-auto max-w-3xl relative">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 w-20 bg-brand"></span>
        {/* The title "Quote of the day" is visually part of the blockquote in the template, not a separate heading */}
        <blockquote className="text-3xl lg:text-4xl font-serif text-heading-text mb-6 lg:mb-8 relative pt-8">
          <p className="leading-relaxed">
            “Com uma linguagem simples, procuro demonstrar que, seguindo algumas premissas básicas, isso é possível. Entendendo seus gastos, conversando com a família e praticando diariamente, em pouco tempo sua situação atual se modificará. ”
          </p>
        </blockquote>
        <cite className="text-light-text font-medium not-italic text-base lg:text-lg">Antônio André</cite>
      </div>
    </section>
  );
};

export default QuoteOfTheDay;

