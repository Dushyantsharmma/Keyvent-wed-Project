import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import ServiceCard from '../common/ServiceCard';

const Venues = ({ venuesData }) => {
  return (
    <SectionWrapper
      id="venues"
      title="Exquisite Venues"
      subtitle="Discover the most beautiful and romantic venues for your special day."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(venuesData || []).map((venue, index) => (
          <ServiceCard key={index} item={venue} type="venues" />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
          View All Venues
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Venues;