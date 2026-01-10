
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  onStaffClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onStaffClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-industrial-900 shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-white font-heading text-2xl font-bold tracking-wider">
              SAACO <span className="text-accent">STEEL</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-industrial-100 hover:text-accent px-3 py-2 text-sm font-semibold tracking-wide transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onStaffClick}
                className="text-industrial-400 hover:text-white px-3 py-2 text-sm font-semibold uppercase transition-colors"
              >
                Staff
              </button>
              <a
                href="#contact"
                className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded text-sm font-bold uppercase transition-all shadow-lg"
              >
                Request Quote
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-industrial-900 border-t border-industrial-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-industrial-800 block px-3 py-4 text-base font-medium border-b border-industrial-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { setIsOpen(false); onStaffClick(); }}
              className="text-white w-full text-left hover:bg-industrial-800 block px-3 py-4 text-base font-medium border-b border-industrial-800"
            >
              Staff Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
