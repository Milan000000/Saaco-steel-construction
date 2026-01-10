
import React from 'react';

const services = [
  {
    icon: 'fa-solid fa-bridge',
    title: 'Steel Construction',
    description: 'Design, fabrication, and erection of structural steel for industrial, commercial, and residential projects.'
  },
  {
    icon: 'fa-solid fa-helmet-safety',
    title: 'Construction Execution',
    description: 'Full-scale project management and technical oversight to ensure blueprints are brought to life perfectly.'
  },
  {
    icon: 'fa-solid fa-building',
    title: 'General Building Works',
    description: 'Comprehensive civil engineering and building services including foundation, masonry, and finishing.'
  },
  {
    icon: 'fa-solid fa-drafting-table',
    title: 'Engineering Design',
    description: 'Expert structural analysis and engineering blueprints tailored to specific project requirements.'
  },
  {
    icon: 'fa-solid fa-trowel-bricks',
    title: 'Site Preparation',
    description: 'Professional earthworks, land clearing, and foundation preparation for large-scale developments.'
  },
  {
    icon: 'fa-solid fa-warehouse',
    title: 'Warehouse Solutions',
    description: 'Specialized large-span steel structures for storage, logistics, and industrial manufacturing.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-industrial-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl font-heading font-bold mt-2 uppercase">Professional Engineering Services</h2>
          <div className="h-1 w-24 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-industrial-800 border border-industrial-700 rounded-lg hover:border-accent transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-accent text-4xl mb-6 group-hover:scale-110 transition-transform">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-industrial-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
