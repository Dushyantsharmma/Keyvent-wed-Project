import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/sections/Home';
import Venues from './components/sections/Venues';
import Photography from './components/sections/Photography';
import Decorators from './components/sections/Decorators';
import Makeover from './components/sections/Makeover';
import Entertainers from './components/sections/Entertainers';
import Gifts from './components/sections/Gifts';
import Destination from './components/sections/Destination';
import Specials from './components/sections/Specials';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

import * as siteData from './data/siteData';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'venues':
        return <Venues venuesData={siteData.venues} />;
      case 'photography':
        return <Photography photographersData={siteData.photographers} />;
      case 'decorators':
        return <Decorators decoratorsData={siteData.decorators} />;
      case 'makeover':
        return <Makeover makeoverData={siteData.makeoverArtists} />;
      case 'entertainers':
        return <Entertainers entertainersData={siteData.entertainers} />;
      case 'gifts':
        return <Gifts giftsData={siteData.returnGifts} />;
      case 'destination':
        return <Destination destinationData={siteData.destinations} />;
      case 'specials':
        return <Specials specialsData={siteData.specialPackages} setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="font-sans bg-background text-dark-text min-h-screen">
      <Header 
        navItems={siteData.navigationItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        {renderSection()}
      </main>
      <Footer 
        navItems={siteData.navigationItems}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default App;