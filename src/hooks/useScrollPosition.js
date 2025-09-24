// src/components/common/Header.jsx

import React, { useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition'; // Import the hook
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = ({ navItems, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition(); // Use the hook here
  const isScrolled = scrollY > 50;

  // ... rest of your Header component logic
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* ... rest of your JSX */}
    </header>
  );
};

export default Header;