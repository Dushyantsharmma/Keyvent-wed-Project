import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { CheckCircle } from 'lucide-react';

const PackageCard = ({ pkg, setActiveSection }) => (
  <div className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border ${pkg.popular ? 'border-secondary' : 'border-gray-100'} relative flex flex-col`}>
    {pkg.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">
        Most Popular
      </div>
    )}
    
    <div className="text-6xl text-center my-4">{pkg.image}</div>
    <h3 className="text-2xl font-serif text-primary mb-3 text-center">{pkg.name}</h3>
    
    <div className="text-center mb-6">
      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
      <span className="text-light-text line-through ml-2">{pkg.originalPrice}</span>
      <p className="text-green-600 font-semibold">Save {pkg.savings}</p>
    </div>
    
    <div className="space-y-3 mb-6 flex-grow">
      {pkg.includes.map((item, i) => (
        <div key={i} className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span className="text-light-text">{item}</span>
        </div>
      ))}
    </div>
    
    <button onClick={() => setActiveSection('contact')} className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${pkg.popular ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-secondary text-primary hover:bg-yellow-500'}`}>
      Choose Package
    </button>
  </div>
);

const Specials = ({ specialsData, setActiveSection }) => {
  return (
    <SectionWrapper
      id="specials"
      title="Exclusive Packages"
      subtitle="Curated packages offering exceptional value without compromising on elegance."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialsData.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} setActiveSection={setActiveSection} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Specials;
