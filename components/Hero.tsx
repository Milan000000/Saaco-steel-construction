
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-accent font-heading font-bold uppercase tracking-widest mb-4 animate-fade-in">
            Established Excellence in Kaduna
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight uppercase">
            Precision Steel <br />
            <span className="text-accent">Engineering</span> Solutions
          </h1>
          <p className="text-xl text-industrial-200 mb-10 leading-relaxed max-w-2xl">
            SAACO Steel Construction Co. Ltd delivers world-class structural steel solutions, 
            expert construction execution, and comprehensive general building works for 
            Nigeria's growing infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded font-bold text-center transition-all transform hover:scale-105 uppercase"
            >
              View Our Projects
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white hover:bg-white hover:text-industrial-900 px-8 py-4 rounded font-bold text-center transition-all uppercase"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <i className="fa-solid fa-chevron-down text-3xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
