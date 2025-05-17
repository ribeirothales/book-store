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
    <footer className="bg-[#eedcce] py-10 px-6 text-gray-700 text-center flex flex-col items-center space-y-10">
      
      {/* Logo */}
      <div className="text-3xl font-serif font-bold text-gray-800">
        Antônio André
      </div>

      {/* Footer Links */}
      <div className="flex flex-col items-center space-y-8">
        {Object.entries(footerSections).map(([title, links]) => (
          <div key={title}>
            <h5 className="font-semibold text-gray-800 mb-2 text-lg">{title}</h5>
            <ul className="space-y-1">
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

      {/* Social Media */}
      <div className="flex space-x-6 justify-center">
        {socialLinks.map(social => (
          <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-brand transition-colors">
            <social.icon size={20} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Antônio André. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
