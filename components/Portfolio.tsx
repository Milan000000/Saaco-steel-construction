
import React from 'react';

const projects = [
  {
    title: 'Industrial Warehouse Complex',
    location: 'Kaduna South',
    category: 'Steel Structure',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Commercial Office Block',
    location: 'Kabala Doki',
    category: 'General Building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Steel Communication Tower',
    location: 'Zaria Road',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Modern Residential Villa',
    location: 'Barnawa Estate',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-industrial-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="text-accent font-bold uppercase tracking-widest">Our Portfolio</span>
            <h2 className="text-4xl font-heading font-bold mt-2 text-industrial-900 uppercase">Featured Projects</h2>
          </div>
          <button className="text-industrial-900 font-bold hover:text-accent transition-colors flex items-center gap-2">
            View All Projects <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 p-6 text-white w-full">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-bold mb-1 leading-tight">{project.title}</h3>
                <p className="text-sm text-industrial-300 flex items-center gap-1">
                  <i className="fa-solid fa-location-dot text-xs"></i> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
