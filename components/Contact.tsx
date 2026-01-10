
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-4xl font-heading font-bold mt-2 text-industrial-900 uppercase mb-8">Let's Discuss Your Project</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-industrial-900 p-4 rounded-lg text-accent shadow-lg shrink-0">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-industrial-900">Our Office</h4>
                  <p className="text-industrial-600">No. 44B Kanfege Street, Behind KTL PLC,<br />Kabala Doki, Kaduna, Nigeria.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-industrial-900 p-4 rounded-lg text-accent shadow-lg shrink-0">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-industrial-900">Call Us</h4>
                  <p className="text-industrial-600">+234 803 311 8296</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-industrial-900 p-4 rounded-lg text-accent shadow-lg shrink-0">
                  <i className="fa-solid fa-clock text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-industrial-900">Business Hours</h4>
                  <p className="text-industrial-600">Mon – Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 rounded-lg overflow-hidden h-64 shadow-inner bg-industrial-100 grayscale hover:grayscale-0 transition-all border border-industrial-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125348.45542790757!2d7.332345579308064!3d10.512686708316103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b02008f4c2847b%3A0x960098f98d5c4b82!2sKaduna!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-industrial-50 p-10 rounded-2xl shadow-xl border border-industrial-200">
            <h3 className="text-2xl font-heading font-bold mb-8 uppercase text-industrial-900">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-industrial-700 uppercase mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-industrial-700 uppercase mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="+234 ..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-industrial-700 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-industrial-700 uppercase mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-white">
                  <option>Steel Construction</option>
                  <option>Construction Execution</option>
                  <option>General Building Works</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-industrial-700 uppercase mb-2">Project Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded transition-all uppercase shadow-lg transform hover:-translate-y-1">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
