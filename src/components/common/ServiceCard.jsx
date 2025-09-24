import React from 'react';
import { Star } from 'lucide-react';

const ServiceCard = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col group">
      {/* Top section with image and rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{item.image}</div>
        {item.rating && (
          <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1.5" />
            <span>{item.rating}</span>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-serif text-primary mb-2">{item.name || item.location || item.category}</h3>
        <p className="text-secondary font-semibold mb-3">{item.speciality || item.type || item.style}</p>
        <p className="text-light-text text-sm mb-4">{item.experience || item.capacity}</p>
      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold text-primary">{item.price || item.priceRange}</span>
        <button className="bg-secondary text-primary font-bold px-5 py-2 rounded-full hover:bg-secondary-dark transition-colors duration-300">
          Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;