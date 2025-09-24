import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import ServiceCard from '../common/ServiceCard';

const Makeover = ({ makeoverData }) => {
  const processSteps = [
    { step: "Trial Session", icon: "🎨", desc: "Perfect your desired look" },
    { step: "Skin Prep", icon: "✨", desc: "Create a radiant base" },
    { step: "Makeup Magic", icon: "💄", desc: "Flawless, lasting application" },
    { step: "Final Touch", icon: "👸", desc: "Ensure you are picture perfect" }
  ];

  return (
    <SectionWrapper
      id="makeover"
      title="Radiant Beauty"
      subtitle="Our expert makeover artists will ensure you look and feel absolutely stunning on your big day."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {makeoverData.map((artist, index) => (
          <ServiceCard key={index} item={artist} type="makeover" />
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
        <h3 className="text-3xl font-serif text-center text-primary mb-8">Our Bridal Makeover Process</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((process) => (
            <div key={process.step} className="text-center">
              <div className="text-5xl mb-4">{process.icon}</div>
              <h4 className="font-bold text-primary text-lg mb-2">{process.step}</h4>
              <p className="text-light-text text-sm">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Makeover;