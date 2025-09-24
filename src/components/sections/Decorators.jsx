import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import ServiceCard from '../common/ServiceCard';

const Decorators = ({ decoratorsData }) => {
    const themes = [
        { name: "Royal Palace", emoji: "👑" },
        { name: "Garden Party", emoji: "🌸" },
        { name: "Beach Vibes", emoji: "🏖️" },
        { name: "Vintage Charm", emoji: "🕊️" }
    ];

  return (
    <SectionWrapper
      id="decorators"
      title="Breathtaking Decor"
      subtitle="Transforming venues into magical spaces that reflect your unique love story."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {decoratorsData.map((decorator, index) => (
          <ServiceCard key={index} item={decorator} type="decorators" />
        ))}
      </div>
      
      <div>
        <h3 className="text-3xl font-serif text-center text-primary mb-8">Popular Decoration Themes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {themes.map((theme) => (
                <div key={theme.name} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl border border-gray-100 transition-shadow duration-300 cursor-pointer">
                    <div className="text-5xl mb-3">{theme.emoji}</div>
                    <div className="font-bold text-primary text-lg">{theme.name}</div>
                </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Decorators;