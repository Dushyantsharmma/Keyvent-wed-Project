import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = ({ navItems, setActiveSection }) => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">Keyvent</h3>
            <p className="text-gray-300 mb-6">Events with Elegance. Crafting unforgettable memories since 2020.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4">Services</h4>
            <ul className="space-y-2">
              {navItems.slice(1, 7).map(item => (
                <li key={item.id}><a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); setActiveSection(item.id); }} className="text-gray-300 hover:text-secondary transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); setActiveSection('about'); }} className="text-gray-300 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#specials" onClick={(e) => { e.preventDefault(); setActiveSection('specials'); }} className="text-gray-300 hover:text-secondary transition-colors">Packages</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }} className="text-gray-300 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-secondary" /> +91 98765 43210</li>
              <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-secondary" /> hello@keyvent.com</li>
              <li className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-secondary" /> Connaught Place, New Delhi</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-800 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Keyvent. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;