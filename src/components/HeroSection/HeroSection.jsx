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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 18000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (Math.abs(swipeDistance) > 50) {
      swipeDistance > 0 ? nextSlide() : prevSlide();
    }
  };

  const activeSlide = slidesData[currentSlide];

  return (
    <section 
      className="relative bg-[#F9F5F0] py-8 md:py-16 px-4 md:px-6 lg:px-12 xl:px-24 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] md:min-h-[600px] lg:min-h-[780px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Versão Mobile - Ordem ajustada */}
      <div className="md:hidden w-full flex flex-col items-center">
        {/* Container da Imagem com Setas */}
        <div className="relative w-full flex justify-center mb-6">
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <div className="relative w-48 h-[300px] sm:w-56 sm:h-[350px]">
            {slidesData.map((slide, index) => (
              <img 
                key={index} 
                src={slide.imageUrl} 
                alt={slide.title} 
                className={`absolute inset-0 w-full h-full rounded-lg shadow-2xl drop-shadow-lg transition-opacity duration-600 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Texto */}
        <div className="w-full text-center mb-6">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4 leading-tight">
            {activeSlide.title}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {activeSlide.description}
          </p>
        </div>

        {/* Botão */}
        <a 
          href="#" 
          className="inline-block bg-transparent border-4 border-[#D3BFA0] text-[#A07C43] font-semibold py-2 px-6 rounded hover:bg-[#D3BFA0] hover:text-white transition-colors duration-300 mb-4"
        >
          {activeSlide.buttonText}
        </a>

        {/* "Deslize para navegar" */}
        <div className="text-gray-500 text-xs mb-4">
          <span className="animate-pulse">← Deslize para navegar →</span>
        </div>

        {/* Pontos */}
        <div className="flex space-x-2">
          {slidesData.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)} 
              className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index ? 'bg-amber-500' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Versão Desktop - EXATAMENTE IGUAL AO CÓDIGO ORIGINAL */}
      <div className="hidden md:flex w-full">
        {/* Previous Button */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-colors focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={28} className="text-gray-700" />
        </button>

        {/* Slide Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 z-0 pl-80">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            {activeSlide.title.split(' ').map((word, index, arr) => (
              <React.Fragment key={index}>
                {word}
                {index < arr.length -1 && index === Math.floor(arr.length / 2) -1 && <br className="hidden lg:block"/>}
                {index < arr.length -1 && ' '}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed text-base lg:text-lg">
            {activeSlide.description}
          </p>
          <a href="#" className="inline-block bg-transparent border-4 border-[#D3BFA0] text-[#A07C43] font-semibold py-3 px-15 rounded hover:bg-[#D3BFA0] hover:text-white transition-colors duration-300">
            {activeSlide.buttonText}
          </a>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center z-0">
          <div className="relative w-72 h-[450px] lg:w-80 lg:h-[500px] xl:w-96 xl:h-[600px]">
            {slidesData.map((slide, index) => (
              <img 
                key={index} 
                src={slide.imageUrl} 
                alt={slide.title} 
                className={`absolute inset-0 w-full h-full rounded-lg shadow-2xl drop-shadow-lg transition-opacity duration-600 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={nextSlide} 
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-colors focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight size={28} className="text-gray-700" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slidesData.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)} 
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-amber-500' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;