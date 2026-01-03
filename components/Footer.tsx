
import React from 'react';
import { SiteData } from '../types';
import { Hammer, Linkedin, Facebook, Twitter, MapPin } from 'lucide-react';

interface Props {
  data: SiteData;
}

const Footer: React.FC<Props> = ({ data }) => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Hammer className="text-white w-5 h-5" />
              </div>
              <span className="font-brand text-xl font-bold text-white tracking-tighter">
                SAACO <span className="text-blue-600">STEEL</span>
              </span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              SAACO Steel Construction Co. Ltd is a premier construction firm dedicated to high-quality structural steel fabrication and general engineering solutions in Kaduna and across Nigeria.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Facebook size={18} /></div>
              <div className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Twitter size={18} /></div>
              <div className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Linkedin size={18} /></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="/#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
              <li><a href="/#/staff" className="hover:text-blue-500 transition-colors">Staff Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Head Office</h4>
            <div className="flex space-x-3 items-start">
              <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                {data.contact.address}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} SAACO Steel Construction Co. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
