import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import minhaImagemHero1 from '../../assets/book.jpg';
import minhaImagemHero2 from '../../assets/book2.jpg';

const slidesData = [
  {
    title: 'Do luto à vida',
    description: 'Do Luto à Vida é uma tocante e profunda história sobre amor, tempo e a inevitável realidade da morte. Uma reflexão sobre como o amor verdadeiro persiste, mesmo quando a vida nos desafia a seguir em frente. Uma leitura essencial para aqueles que buscam compreender a profundidade do amor e a força para recomeçar após as perdas mais dolorosas.',
    imageUrl: minhaImagemHero1,
    author: 'Sanchit Howdy',
    buttonText: 'BAIXE GRÁTIS',
  },
  {
    title: 'Faça acontecer',
    description: 'Mudando suas atitudes no presente, você, com certeza, mudará sua história no futuro. Este pequeno livro, não fará de você um milionário. Ele foi concebido com o intuito de mostrar que com disciplina e perseverança qualquer pessoa que possui uma renda fixa mensal tem condições de obter o equilíbrio financeiro.',
    imageUrl: minhaImagemHero2,
    author: 'Timbur Hood',
    buttonText: 'BAIXE GRÁTIS',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  // Automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 18000);
    return () => clearInterval(slideInterval);
  }, []);

  // Touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Minimum swipe distance (in pixels) to trigger slide change
    const minSwipeDistance = 50;
    const swipeDistance = touchEndX.current - touchStartX.current;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped right, go to previous slide
        prevSlide();
      } else {
        // Swiped left, go to next slide
        nextSlide();
      }
    }
  };

  const activeSlide = slidesData[currentSlide];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#F9F5F0] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 min-h-[calc(100vh-80px)] md:min-h-[600px] lg:min-h-[780px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-12">
          {/* Slide Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              {activeSlide.title.split(' ').map((word, index, arr) => (
                <React.Fragment key={index}>
                  {word}
                  {index < arr.length - 1 && index === Math.floor(arr.length / 2) - 1 && <br className="hidden lg:block" />}
                  {index < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h1>
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                {activeSlide.description}
              </p>
              <a 
                href="#" 
                className="inline-block bg-transparent border-4 border-[#D3BFA0] text-[#A07C43] font-semibold py-2 sm:py-3 px-6 sm:px-8 md:px-10 rounded hover:bg-[#D3BFA0] hover:text-white transition-colors duration-300"
              >
                {activeSlide.buttonText}
              </a>
            </div>
          </div>

          {/* Image Container with Navigation Arrows */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative flex items-center justify-center w-full">
              {/* Left Arrow - Positioned closer to the image */}
              <button 
                onClick={prevSlide} 
                className="absolute left-4 sm:left-8 md:left-12 z-20 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition-colors focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>
              
              {/* Book Cover Image */}
              <div className="relative w-52 h-[300px] sm:w-56 sm:h-[320px] md:w-60 md:h-[350px] lg:w-[280px] lg:h-[400px] xl:w-[320px] xl:h-[450px]">
                {slidesData.map((slide, index) => (
                  <img 
                    key={index} 
                    src={slide.imageUrl} 
                    alt={slide.title} 
                    className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-2xl drop-shadow-lg transition-opacity duration-600 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
              
              {/* Right Arrow - Positioned closer to the image */}
              <button 
                onClick={nextSlide} 
                className="absolute right-4 sm:right-8 md:right-12 z-20 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition-colors focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe Indicator for Mobile - Only visible on small screens */}
      <div className="sm:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs flex items-center">
        <span className="animate-pulse">← Deslize para navegar →</span>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slidesData.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-amber-500' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
