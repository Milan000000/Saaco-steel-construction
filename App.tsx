
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { INITIAL_SITE_DATA } from './constants';
import { SiteData } from './types';
import LandingPage from './components/LandingPage';
import StaffPortal from './components/StaffPortal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('saaco_site_data');
    return saved ? JSON.parse(saved) : INITIAL_SITE_DATA;
  });

  useEffect(() => {
    localStorage.setItem('saaco_site_data', JSON.stringify(siteData));
  }, [siteData]);

  const updateSiteData = (newData: SiteData) => {
    setSiteData(newData);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage data={siteData} />} />
            <Route 
              path="/staff" 
              element={<StaffPortal data={siteData} onUpdate={updateSiteData} />} 
            />
          </Routes>
        </main>
        <Footer data={siteData} />
      </div>
    </HashRouter>
  );
};

export default App;
