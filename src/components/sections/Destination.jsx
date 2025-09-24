import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { CheckCircle } from 'lucide-react';

const DestinationCard = ({ item }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
    <div className="text-6xl text-center mb-4">{item.image}</div>
    <h3 className="text-2xl font-serif text-primary mb-2">{item.location}</h3>
    <p className="text-secondary font-semibold mb-3">{item.type}</p>
    <p className="text-light-text mb-4 text-sm">⏱️ {item.duration} • 🌤️ Best Season: {item.season}</p>
    
    <div className="flex flex-wrap gap-2 mb-4 flex-grow">
      {item.highlights.map((highlight, i) => (
        <span key={i} className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
          {highlight}
        </span>
      ))}
    </div>
    
    <div className="flex justify-between items-center mt-4">
      <span className="text-2xl font-bold text-primary">{item.price}</span>
      <button className="bg-secondary text-primary font-bold px-5 py-2 rounded-full hover:bg-yellow-500 transition-colors">
        Plan Trip
      </button>
    </div>
  </div>
);

const Destination = ({ destinationData }) => {
  const handledItems = [
    "Venue booking", "Guest accommodation", "Transportation", "Local permits",
    "Event coordination", "Local vendors", "Guest activities", "Emergency support"
  ];
  
  return (
    <SectionWrapper
      id="destination"
      title="Dream Destination Weddings"
      subtitle="Say 'I do' in the world's most stunning locations with our all-inclusive planning."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {destinationData.map((dest, index) => (
          <DestinationCard key={index} item={dest} />
        ))}
      </div>

       <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
        <h3 className="text-3xl font-serif text-center text-primary mb-8">Complete Destination Management</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {handledItems.map((item, i) => (
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

export default Destination;