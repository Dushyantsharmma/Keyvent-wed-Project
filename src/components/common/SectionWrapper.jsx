import React from 'react';

const SectionWrapper = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            {title}
          </h1>
          <p className="text-xl text-light-text max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;