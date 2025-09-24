import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import ServiceCard from '../common/ServiceCard';

const Entertainers = ({ entertainersData }) => {
  return (
    <SectionWrapper
      id="entertainers"
      title="Unforgettable Entertainment"
      subtitle="From live bands to captivating performances, keep your guests enchanted throughout the celebration."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entertainersData.map((entertainer, index) => (
          <ServiceCard key={index} item={entertainer} type="entertainers" />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Entertainers;