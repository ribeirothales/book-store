import React from 'react';

const QuoteOfTheDay = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-12 lg:px-24 text-center">
      <div className="container mx-auto max-w-3xl relative">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 w-20 bg-brand"></span>
        {/* The title "Quote of the day" is visually part of the blockquote in the template, not a separate heading */}
        <blockquote className="text-3xl lg:text-4xl font-serif text-heading-text mb-6 lg:mb-8 relative pt-8">
          <p className="leading-relaxed">
            “The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”
          </p>
        </blockquote>
        <cite className="text-light-text font-medium not-italic text-base lg:text-lg">Dr. Seuss</cite>
      </div>
    </section>
  );
};

export default QuoteOfTheDay;

