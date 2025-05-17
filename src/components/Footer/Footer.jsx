import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    'Mapa do site': ['Home', 'Livros', 'Quem sou', 'Blog', 'Minha conta', 'Contato'],
    'Minha conta': ['Entrar', 'Meu carrinho', 'Lista de desejos'],
    'Contato': ['antonioandre@gmail.com', '21 9754-7538'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'Linkedin' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#eedcce] py-10 px-6 md:px-12 lg:px-24 text-gray-700">
      <div>
        {/* Grid de conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          
          {/* Logo */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <div className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Antônio André
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="flex flex-col items-center md:items-start">
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

        {/* Copyright e Social Media */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Antônio André. All Rights Reserved.
          </p>
          <div className="flex space-x-6 justify-center">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-brand transition-colors">
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
