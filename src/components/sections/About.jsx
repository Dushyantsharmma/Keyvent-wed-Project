import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { Heart, Star, Users, Clock } from 'lucide-react';

const About = () => {
  const team = [
    { name: "Priya Sharma", role: "Founder & Chief Planner", emoji: "👩‍💼" },
    { name: "Rahul Gupta", role: "Creative Director", emoji: "🎨" },
    { name: "Sneha Patel", role: "Operations Head", emoji: "⚡" }
  ];

  return (
    <SectionWrapper
      id="about"
      title="Our Story"
      subtitle="The heart and passion behind Keyvent's success."
    >
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-3xl font-serif text-primary mb-4">Our Vision</h3>
          <p className="text-light-text leading-relaxed">
            Founded from a belief that every couple deserves a wedding as unique as their love story, Keyvent is dedicated to crafting beautiful, seamless, and personal celebrations. We blend passion with precision to bring your dream wedding to life, ensuring every detail is perfect.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-3xl font-serif text-primary mb-4">Our Mission</h3>
          <div className="space-y-3">
            <p className="flex items-center text-light-text"><Heart className="w-5 h-5 mr-3 text-secondary" /> Personalized approach for every couple.</p>
            <p className="flex items-center text-light-text"><Star className="w-5 h-5 mr-3 text-secondary" /> Meticulous attention to every detail.</p>
            <p className="flex items-center text-light-text"><Users className="w-5 h-5 mr-3 text-secondary" /> Experienced team of professionals.</p>
            <p className="flex items-center text-light-text"><Clock className="w-5 h-5 mr-3 text-secondary" /> Flawless execution and delivery.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-serif text-center text-primary mb-8">Meet The Team</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl border border-gray-100 transition-shadow duration-300">
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h4 className="text-xl font-bold text-primary">{member.name}</h4>
              <p className="text-secondary font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;