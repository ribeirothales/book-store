import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <section 
      className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/placeholder-newsletter-bg.jpg')" }} // Replace with actual or better placeholder
    >
      <div className="container mx-auto max-w-xl text-center bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-heading-text mb-3">
          Subscribe our newsletter
        </h2>
        <p className="text-light-text mb-8 text-base lg:text-lg">
          Enter your email address to subscribe to this blog and receive notifications of new posts by email
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto flex-grow p-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-light focus:border-brand-light transition-shadow duration-200 text-sm"
            required
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="bg-brand text-white font-semibold py-3.5 px-8 rounded-md hover:bg-brand-light hover:text-heading-text transition-all duration-300 w-full sm:w-auto text-sm uppercase tracking-wider shadow-md hover:shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;

