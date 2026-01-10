
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent/10 -z-10 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
              alt="Construction Site"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 bg-industrial-900 p-8 rounded-lg shadow-xl hidden md:block z-20">
              <p className="text-accent text-4xl font-bold font-heading">15+</p>
              <p className="text-white font-semibold">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-industrial-900 mb-6 uppercase">
              Building the Future of Kaduna with Strong Steel Roots
            </h2>
            <p className="text-industrial-600 mb-6 text-lg leading-relaxed">
              SAACO Steel Construction Co. Ltd is a premier engineering firm based in Kaduna, Nigeria. 
              We specialize in complex steel construction projects that demand the highest levels of 
              technical expertise and structural integrity.
            </p>
            <p className="text-industrial-600 mb-8 text-lg leading-relaxed">
              Our reputation is built on reliability, precision, and an unwavering commitment to quality. 
              From initial design to final execution, we handle every aspect of the construction 
              process with professional rigor and local expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-industrial-100 p-3 rounded-full text-accent">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-industrial-900">Safety First</h4>
                  <p className="text-sm text-industrial-500">Rigorous safety standards on every site.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-100 p-3 rounded-full text-accent">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-industrial-900">Quality Materials</h4>
                  <p className="text-sm text-industrial-500">Only the highest grade steel and supplies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-100 p-3 rounded-full text-accent">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-industrial-900">Expert Team</h4>
                  <p className="text-sm text-industrial-500">Certified engineers and technicians.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-100 p-3 rounded-full text-accent">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-industrial-900">Timely Delivery</h4>
                  <p className="text-sm text-industrial-500">Commitment to project timelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
