import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import ServiceCard from '../common/ServiceCard';

const Gifts = ({ giftsData }) => {
  return (
    <SectionWrapper
      id="gifts"
      title="Thoughtful Return Gifts"
      subtitle="Show your appreciation with our curated collection of elegant and memorable return gifts."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {giftsData.map((gift, index) => (
          <ServiceCard key={index} item={gift} type="gifts" />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gifts;