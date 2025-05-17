import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesIcons from './components/ServicesIcons/ServicesIcons';
import FeaturedBooks from './components/FeaturedBooks/FeaturedBooks';
import BestSellingBook from './components/BestSellingBook/BestSellingBook';
import PopularBooks from './components/PopularBooks/PopularBooks';
import QuoteOfTheDay from './components/QuoteOfTheDay/QuoteOfTheDay';
import BooksWithOffer from './components/BooksWithOffer/BooksWithOffer';
import NewsletterSubscribe from './components/NewsletterSubscribe/NewsletterSubscribe';
import LatestArticles from './components/LatestArticles/LatestArticles';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import './index.css'; // Contém as diretivas do Tailwind e estilos globais

function App() {
  return (
    <div className="font-sans bg-cream text-gray-800">
      <Header />
      <HeroSection />
      {/* <ServicesIcons /> */}
      <FeaturedBooks />
      <BestSellingBook />
      {/* <PopularBooks /> */}
      <QuoteOfTheDay />
      {/* <BooksWithOffer /> */}
      <NewsletterSubscribe />
      {/* <LatestArticles /> */}
      {/* <DownloadApp /> */}
      <Footer />
    </div>
  );
}

export default App;

