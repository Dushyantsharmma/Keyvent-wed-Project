import React from 'react';
import { MapPin, Camera, Palette, Sparkles, Music, Gift, ArrowRight } from 'lucide-react';

const Home = ({ setActiveSection }) => {
  const services = [
    { title: "Premium Venues", desc: "Handpicked locations for your day.", icon: MapPin, action: () => setActiveSection('venues') },
    { title: "Photography", desc: "Capture every precious moment.", icon: Camera, action: () => setActiveSection('photography') },
    { title: "Decorations", desc: "Transform your space beautifully.", icon: Palette, action: () => setActiveSection('decorators') },
    { title: "Makeover Artists", desc: "Look absolutely stunning.", icon: Sparkles, action: () => setActiveSection('makeover') },
    { title: "Entertainment", desc: "Keep your guests delighted.", icon: Music, action: () => setActiveSection('entertainers') },
    { title: "Return Gifts", desc: "Thoughtful gifts for your guests.", icon: Gift, action: () => setActiveSection('gifts') }
  ];

  const stats = [
    { number: "500+", label: "Happy Couples", icon: "💕" },
    { number: "50+", label: "Premium Venues", icon: "🏰" },
    { number: "5★", label: "Client Rating", icon: "⭐" },
    { number: "24/7", label: "Dedicated Support", icon: "🤝" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4LTMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjRDRBRjM3IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block">
            <h1 className="font-serif text-6xl md:text-8xl font-black text-primary mb-6 relative">
              <span className="relative inline-block">
                Events with Elegance
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-light-text mb-10 max-w-3xl mx-auto">
            Crafting magical moments and unforgettable celebrations with bespoke wedding planning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-4 bg-secondary text-primary rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-secondary-dark transform transition-all duration-300"
            >
              Plan Your Wedding
            </button>
            <button
              onClick={() => setActiveSection('specials')}
              className="px-8 py-4 bg-white/50 backdrop-blur border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="group text-center p-6 rounded-lg hover:bg-white/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <div className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">{stat.number}</div>
                <div className="text-light-text font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4LTMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjRDRBRjM3IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-light-text max-w-3xl mx-auto">
              From venues to entertainment, we handle every detail to make your wedding perfect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                onClick={service.action}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-secondary/10 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                  <p className="text-light-text mb-4">{service.desc}</p>
                  <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                    Explore <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;