import React from 'react';
import { Search, User, ShoppingCart, Menu, X, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    'Mapa do site': ['Home', 'Livros', 'Quem sou', 'Blog', 'Minha conta', 'Contato'],
    // 'Discover': ['Home', 'Shop', 'Pages', 'Blog', 'Categories'],
    'Minha conta': ['Entrar', 'Meu carrinho', 'Lista de desejos'],
    'Contato': ['antonioandre@gmail.com', '21 9754-7538',],
  };

    const socialLinks = [
      { icon: Facebook, href: '#', label: 'Facebook' },
      { icon: Linkedin, href: '#', label: 'Linkedin' },
      { icon: Youtube, href: '#', label: 'Youtube' },
      { icon: Instagram, href: '#', label: 'Instagram' }, 
    ];

  return (
    <footer className="bg-[#eedcce] py-5 px-6 md:px-12 lg:px-24 text-gray-700">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Slogan */}
          <div className="lg:col-span-1 mb-8 md:mb-0">
            <div className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Antônio André
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h5 className="font-semibold text-gray-800 mb-4 text-lg">{title}</h5>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Social Media */}
        <div className="border-t border-gray-300 pt-2 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Antônio André. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-6">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-brand transition-colors">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

