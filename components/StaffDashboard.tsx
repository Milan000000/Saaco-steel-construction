
import React, { useState } from 'react';

interface StaffDashboardProps {
  onExit: () => void;
}

const StaffDashboard: React.FC<StaffDashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'services' | 'analytics'>('projects');

  // Local state to simulate data management
  const [projects, setProjects] = useState([
    { id: 1, title: 'Industrial Warehouse Complex', location: 'Kaduna South' },
    { id: 2, title: 'Commercial Office Block', location: 'Kabala Doki' },
  ]);

  const handleDeleteProject = (id: number) => {
    if (confirm("Are you sure you want to remove this project?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleAddProject = () => {
    const title = prompt("Enter Project Title:");
    const location = prompt("Enter Project Location:");
    if (title && location) {
      setProjects([...projects, { id: Date.now(), title, location }]);
    }
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-white font-sans flex flex-col">
      {/* Sidebar Header */}
      <header className="bg-industrial-900 border-b border-industrial-800 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-accent font-heading font-bold text-xl tracking-widest uppercase">SAACO ADMIN</span>
          <span className="bg-industrial-800 text-industrial-400 px-2 py-1 rounded text-xs font-mono">v1.0.4</span>
        </div>
        <button 
          onClick={onExit}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 transition-colors"
        >
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar Nav */}
        <aside className="w-64 bg-industrial-900 border-r border-industrial-800 p-6 hidden lg:block">
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`w-full text-left px-4 py-3 rounded flex items-center gap-3 transition-colors ${activeTab === 'projects' ? 'bg-accent text-white' : 'hover:bg-industrial-800 text-industrial-400'}`}
            >
              <i className="fa-solid fa-list-check"></i> Manage Projects
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`w-full text-left px-4 py-3 rounded flex items-center gap-3 transition-colors ${activeTab === 'services' ? 'bg-accent text-white' : 'hover:bg-industrial-800 text-industrial-400'}`}
            >
              <i className="fa-solid fa-gears"></i> Edit Services
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`w-full text-left px-4 py-3 rounded flex items-center gap-3 transition-colors ${activeTab === 'analytics' ? 'bg-accent text-white' : 'hover:bg-industrial-800 text-industrial-400'}`}
            >
              <i className="fa-solid fa-chart-line"></i> Site Analytics
            </button>
          </nav>

          <div className="mt-auto pt-12 text-xs text-industrial-500 italic">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-heading font-bold uppercase">
                {activeTab === 'projects' && 'Project Management'}
                {activeTab === 'services' && 'Service Catalog'}
                {activeTab === 'analytics' && 'Traffic Overview'}
              </h1>
              {activeTab === 'projects' && (
                <button 
                  onClick={handleAddProject}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold flex items-center gap-2"
                >
                  <i className="fa-solid fa-plus"></i> Add New Project
                </button>
              )}
            </div>

            {activeTab === 'projects' && (
              <div className="grid gap-4">
                {projects.map(project => (
                  <div key={project.id} className="bg-industrial-900 border border-industrial-800 p-6 rounded-lg flex justify-between items-center group">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-industrial-400 text-sm"><i className="fa-solid fa-location-dot mr-2"></i>{project.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-industrial-400 hover:text-white"><i className="fa-solid fa-pen"></i></button>
                      <button onClick={() => handleDeleteProject(project.id)} className="p-2 text-industrial-400 hover:text-red-500"><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'services' && (
              <div className="bg-industrial-900 p-8 rounded-lg border border-industrial-800 text-center">
                <i className="fa-solid fa-screwdriver-wrench text-5xl text-accent mb-4"></i>
                <h3 className="text-xl font-bold">Services Module Loading</h3>
                <p className="text-industrial-400 mt-2">Connecting to Content API...</p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-industrial-900 p-6 rounded-lg border border-industrial-800">
                  <p className="text-industrial-400 text-sm uppercase">Daily Visitors</p>
                  <p className="text-4xl font-bold mt-2">1,204</p>
                  <p className="text-green-500 text-xs mt-2">+12% from last week</p>
                </div>
                <div className="bg-industrial-900 p-6 rounded-lg border border-industrial-800">
                  <p className="text-industrial-400 text-sm uppercase">Quote Requests</p>
                  <p className="text-4xl font-bold mt-2">48</p>
                  <p className="text-accent text-xs mt-2">8 Pending Review</p>
                </div>
                <div className="bg-industrial-900 p-6 rounded-lg border border-industrial-800">
                  <p className="text-industrial-400 text-sm uppercase">Uptime</p>
                  <p className="text-4xl font-bold mt-2">99.9%</p>
                  <p className="text-industrial-500 text-xs mt-2">All systems operational</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaffDashboard;
