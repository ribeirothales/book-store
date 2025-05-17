import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const mainNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'Livros', href: '#' },
    { name: 'Quem sou', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Minha conta', href: '#' },
    { name: 'Contato', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'Linkedin' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Instagram, href: '#', label: 'Instagram' }, 
  ];

  return (
    <div className="bg-[#F9F5F0] sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-200/80 py-1 px-6 md:px-12 lg:px-24 hidden lg:flex items-center justify-between text-20 text-light-text">
        <div className="flex items-center space-x-6">
          {socialLinks.map(social => (
            <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-brand transition-colors">
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-10">
          <a href="#" className="hover:text-brand transition-colors flex items-center">
            <User size={26} className="mr-1" /> Entrar
          </a>
          <a href="#" className="hover:text-brand transition-colors flex items-center">
            <ShoppingCart size={26} className="mr-1" /> Carrinho: (0 R$)
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-serif font-bold text-heading-text">
          <a href="#">Antônio André</a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-15">
          {mainNavLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-dark-text hover:text-[#A07C43] transition-colors font-medium text-[20px]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Comprar Button (Desktop) & Mobile Menu Icon */}
        <div className="flex items-center">
          <a href="#" className="hidden lg:inline-block bg-transparent border-2 border-brand text-[#A07C43] font-semibold py-2 px-5 rounded hover:bg-[#A07C43] hover:text-white transition-colors duration-300 text-20">
            Grátis
          </a>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-4">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-dark-text focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#F9F5F0] shadow-lg py-4 px-6 z-40 border-t border-gray-200">
          {/* Mobile Top Bar items */}
          <div className="flex flex-col space-y-3 mb-4 pb-4 border-b border-gray-200">
            <a href="#" className="text-light-text hover:text-brand transition-colors flex items-center"><User size={18} className="mr-2"/> Minha conta</a>
            <a href="#" className="text-light-text hover:text-brand transition-colors flex items-center"><ShoppingCart size={18} className="mr-2"/> Carrinho: (0 R$)</a>
            
          </div>
          
          <nav className="flex flex-col space-y-3 mb-4">
            {mainNavLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-dark-text hover:text-brand transition-colors font-medium py-1"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a href="#" className="w-full text-center bg-[#A07C43] border-2 border-brand text-white font-semibold py-2.5 px-5 rounded hover:bg-brand-light hover:border-brand-light hover:text-dark-text transition-colors duration-300 text-sm">
            Baixe grátis
          </a>
          <div className="flex justify-center space-x-4 mt-6">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} aria-label={social.label} className="text-light-text hover:text-brand transition-colors">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

