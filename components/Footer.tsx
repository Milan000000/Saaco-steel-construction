
import React from 'react';

interface FooterProps {
  onStaffClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onStaffClick }) => {
  return (
    <footer className="bg-industrial-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-6 tracking-wider">
              SAACO <span className="text-accent">STEEL</span>
            </h3>
            <p className="text-industrial-400 mb-6 leading-relaxed">
              Leading the way in steel engineering and construction in Kaduna. Quality, integrity, and safety in every beam we lay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-industrial-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-industrial-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-industrial-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 uppercase border-b border-accent pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-industrial-400">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><button onClick={onStaffClick} className="hover:text-accent transition-colors">Staff Portal</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 uppercase border-b border-accent pb-2 inline-block">Services</h4>
            <ul className="space-y-4 text-industrial-400">
              <li>Steel Structure Design</li>
              <li>Project Execution</li>
              <li>General Civil Works</li>
              <li>Warehouse Construction</li>
              <li>Bridge Engineering</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 uppercase border-b border-accent pb-2 inline-block">Newsletter</h4>
            <p className="text-industrial-400 mb-4">Subscribe for latest engineering updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-industrial-800 border-none rounded-l px-4 py-2 w-full focus:ring-1 focus:ring-accent"
              />
              <button className="bg-accent px-4 py-2 rounded-r hover:bg-orange-600 transition-colors">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-industrial-800 text-center text-industrial-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SAACO Steel Construction Co. Ltd. All Rights Reserved.</p>
          <button onClick={onStaffClick} className="text-industrial-700 hover:text-industrial-500 text-xs">Admin Access</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
