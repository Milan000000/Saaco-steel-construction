
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StaffDashboard from './components/StaffDashboard';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'public' | 'staff'>('public');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStaffClick = () => {
    if (isAuthenticated) {
      setView('staff');
    } else {
      setShowAuthModal(true);
    }
  };

  const onAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setView('staff');
    window.scrollTo(0, 0);
  };

  if (view === 'staff') {
    return <StaffDashboard onExit={() => setView('public')} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} onStaffClick={handleStaffClick} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer onStaffClick={handleStaffClick} />
      
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onSuccess={onAuthSuccess} 
        />
      )}
    </div>
  );
};

export default App;
