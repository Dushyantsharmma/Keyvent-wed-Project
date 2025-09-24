import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import ServiceCard from '../common/ServiceCard';
import { CheckCircle } from 'lucide-react';

const Photography = ({ photographersData }) => {
  const includedItems = [
    "Pre-wedding shoot", "Ceremony coverage", "Reception photography", "Candid moments",
    "Cinematic videos", "Drone shots", "Same-day highlights", "Professional editing"
  ];

  return (
    <SectionWrapper
      id="photography"
      title="Timeless Photography"
      subtitle="Capturing the moments that matter most with artistic vision and professionalism."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {photographersData.map((photographer, index) => (
          <ServiceCard key={index} item={photographer} type="photography" />
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
        <h3 className="text-3xl font-serif text-center text-primary mb-8">What's Included in Our Packages</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {includedItems.map((item, i) => (
            <div key={i} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
              <span className="text-light-text text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Photography;