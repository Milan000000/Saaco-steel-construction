
import React from 'react';
import { SiteData } from '../types';
import { 
  ArrowRight, 
  Settings, 
  Construction, 
  Shield, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2,
  HardHat,
  Factory
} from 'lucide-react';

interface Props {
  data: SiteData;
}

const LandingPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/445/1920/1080" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            alt="Steel construction background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-600/30">
              <Shield size={14} />
              <span>Registered Engineering Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/20 flex items-center justify-center">
                {data.hero.cta}
                <ArrowRight className="ml-2" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Our Projects
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:flex items-center justify-center">
           <div className="grid grid-cols-2 gap-4 animate-pulse duration-[4000ms]">
              <div className="bg-blue-600 w-32 h-32 rounded-3xl opacity-20"></div>
              <div className="bg-gray-100 w-32 h-32 rounded-3xl opacity-10 mt-12"></div>
              <div className="bg-gray-100 w-32 h-32 rounded-3xl opacity-10"></div>
              <div className="bg-blue-600 w-32 h-32 rounded-3xl opacity-20 -mt-12"></div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
            <p className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Core Capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <div 
                key={service.id} 
                className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon === 'Building' && <Factory size={28} />}
                  {service.icon === 'Hammer' && <HardHat size={28} />}
                  {service.icon === 'Pencil' && <Settings size={28} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              <img 
                src="https://picsum.photos/id/357/600/500" 
                alt="Construction site" 
                className="rounded-[40px] shadow-2xl relative z-10 object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl text-white shadow-xl z-20">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm font-semibold opacity-80">Years Experience</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 leading-tight text-gray-900">{data.about.heading}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {data.about.content}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "ISO Certified Standards", 
                  "On-time Delivery", 
                  "Skilled Manpower", 
                  "High-Grade Materials"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-gray-800 font-medium">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get in touch with SAACO</h2>
                <p className="text-gray-400 mb-8 max-w-md">
                  Have a project in mind? Our expert team is ready to provide consultation and detailed quotes.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-2xl"><MapPin className="text-blue-400" /></div>
                    <div>
                      <h4 className="font-bold">Main Office</h4>
                      <p className="text-gray-400">{data.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-2xl"><Phone className="text-blue-400" /></div>
                    <div>
                      <h4 className="font-bold">Call Us</h4>
                      <p className="text-gray-400">{data.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-2xl"><Clock className="text-blue-400" /></div>
                    <div>
                      <h4 className="font-bold">Business Hours</h4>
                      <p className="text-gray-400">{data.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-gray-900">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                  <input type="text" placeholder="Project Type" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                  <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none resize-none"></textarea>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
