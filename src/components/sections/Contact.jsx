import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's start planning your dream event. We're excited to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-serif text-primary mb-6">Send us a Message</h3>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-secondary focus:ring-1 outline-none" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-secondary focus:ring-1 outline-none" />
            </div>
            <div>
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-secondary focus:ring-1 outline-none" />
            </div>
            <div>
              <input type="text" placeholder="Subject (e.g., Wedding Inquiry)" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-secondary focus:ring-1 outline-none" />
            </div>
            <div>
              <textarea placeholder="Tell us about your event..." rows="5" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-secondary focus:ring-1 outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4"><Phone className="w-6 h-6 text-primary" /></div>
                <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <p className="text-light-text">+91 98765 43210</p>
                </div>
            </div>
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4"><Mail className="w-6 h-6 text-primary" /></div>
                <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-light-text">hello@keyvent.com</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4"><MapPin className="w-6 h-6 text-primary" /></div>
                <div>
                    <h4 className="font-bold text-primary">Office</h4>
                    <p className="text-light-text">Connaught Place, New Delhi</p>
                </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
             <h4 className="font-bold text-primary mb-3">Follow Us</h4>
             <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-secondary transition-colors"><Instagram className="w-6 h-6 text-primary" /></a>
                <a href="#" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-secondary transition-colors"><Facebook className="w-6 h-6 text-primary" /></a>
                <a href="#" className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-secondary transition-colors"><Twitter className="w-6 h-6 text-primary" /></a>
             </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
