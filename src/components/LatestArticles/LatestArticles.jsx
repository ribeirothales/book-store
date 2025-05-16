import React from 'react';
import ArticleCard from '../shared/ArticleCard/ArticleCard';

// Placeholder data for latest articles
const latestArticlesData = [
  {
    title: 'Reading Books Always Makes The Moments Happy',
    date: 'July 21, 2024',
    imageUrl: '', // Placeholder, will be replaced or use a default
    link: '#',
  },
  {
    title: 'Reading Books Always Makes The Moments Happy',
    date: 'July 22, 2024',
    imageUrl: '',
    link: '#',
  },
  {
    title: 'Reading Books Always Makes The Moments Happy',
    date: 'July 23, 2024',
    imageUrl: '',
    link: '#',
  },
];

const LatestArticles = () => {
  return (
    <section className="bg-cream py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 mb-1 text-sm">READ OUR ARTICLES</p>
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-10">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticlesData.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              date={article.date}
              imageUrl={article.imageUrl}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

