
import React, { useState } from 'react';
import { SiteData, Service } from '../types';
import { STAFF_PASSWORD } from '../constants';
import { generateContentAdvice } from '../services/geminiService';
import { 
  Lock, 
  Save, 
  Trash2, 
  Plus, 
  Wand2, 
  AlertCircle, 
  LogOut,
  Layout,
  MessageSquare,
  Contact,
  // Fix: Added missing ArrowRight icon import
  ArrowRight
} from 'lucide-react';

interface Props {
  data: SiteData;
  onUpdate: (newData: SiteData) => void;
}

const StaffPortal: React.FC<Props> = ({ data, onUpdate }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState<SiteData>(data);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'CONTENT' | 'SERVICES' | 'CONTACT'>('CONTENT');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === STAFF_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const handleSave = () => {
    onUpdate(formData);
    alert("Changes saved successfully!");
  };

  const handleAiImprove = async (field: string, currentText: string) => {
    setIsGenerating(true);
    const suggestion = await generateContentAdvice(field, currentText);
    if (suggestion) {
      if (field === 'heroTitle') setFormData(prev => ({ ...prev, hero: { ...prev.hero, title: suggestion } }));
      if (field === 'heroSubtitle') setFormData(prev => ({ ...prev, hero: { ...prev.hero, subtitle: suggestion } }));
      if (field === 'aboutContent') setFormData(prev => ({ ...prev, about: { ...prev.about, content: suggestion } }));
    }
    setIsGenerating(false);
  };

  const updateService = (id: string, updates: Partial<Service>) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, ...updates } : s)
    }));
  };

  const deleteService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id)
    }));
  };

  const addService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: "New Service",
      description: "Service description goes here.",
      icon: "Building"
    };
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-[32px] shadow-2xl w-full max-w-md border border-gray-100">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 p-4 rounded-3xl text-white shadow-lg shadow-blue-200">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Staff Access</h2>
          <p className="text-center text-gray-500 mb-8">Please enter credentials to manage site data.</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Security Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-center font-mono"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2">
              <span>Authenticate</span>
              <ArrowRight size={18} />
            </button>
          </form>
          <p className="mt-8 text-xs text-center text-gray-400 italic flex items-center justify-center">
            <AlertCircle size={12} className="mr-1" /> Authorized SAACO Personnel Only
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Admin Management Console</h1>
            <p className="text-gray-500 mt-2">Modify your company website content in real-time.</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="px-6 py-3 bg-white text-gray-600 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center"
            >
              <LogOut size={18} className="mr-2" /> Logout
            </button>
            <button 
              onClick={handleSave}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center"
            >
              <Save size={18} className="mr-2" /> Push Updates
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'CONTENT', label: 'Core Content', icon: Layout },
              { id: 'SERVICES', label: 'Our Services', icon: MessageSquare },
              { id: 'CONTACT', label: 'Business Info', icon: Contact },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center p-4 rounded-2xl font-bold transition-all ${
                  activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={20} className="mr-3" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Editor Area */}
          <div className="lg:col-span-3">
            {activeTab === 'CONTENT' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-white p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    Hero Section
                    <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase">Visual Anchor</span>
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Headline</label>
                        <button 
                          onClick={() => handleAiImprove('heroTitle', formData.hero.title)}
                          disabled={isGenerating}
                          className="text-blue-600 text-xs font-bold flex items-center hover:bg-blue-50 px-2 py-1 rounded"
                        >
                          <Wand2 size={12} className="mr-1" /> {isGenerating ? 'AI Thinking...' : 'AI Refine'}
                        </button>
                      </div>
                      <input 
                        type="text" 
                        value={formData.hero.title}
                        onChange={(e) => setFormData({...formData, hero: {...formData.hero, title: e.target.value}})}
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-semibold text-lg"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sub-headline</label>
                        <button 
                          onClick={() => handleAiImprove('heroSubtitle', formData.hero.subtitle)}
                          disabled={isGenerating}
                          className="text-blue-600 text-xs font-bold flex items-center hover:bg-blue-50 px-2 py-1 rounded"
                        >
                          <Wand2 size={12} className="mr-1" /> AI Refine
                        </button>
                      </div>
                      <textarea 
                        rows={3}
                        value={formData.hero.subtitle}
                        onChange={(e) => setFormData({...formData, hero: {...formData.hero, subtitle: e.target.value}})}
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-6">About Us Section</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Main Heading</label>
                      <input 
                        type="text" 
                        value={formData.about.heading}
                        onChange={(e) => setFormData({...formData, about: {...formData.about, heading: e.target.value}})}
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Corporate Narrative</label>
                        <button 
                          onClick={() => handleAiImprove('aboutContent', formData.about.content)}
                          disabled={isGenerating}
                          className="text-blue-600 text-xs font-bold flex items-center hover:bg-blue-50 px-2 py-1 rounded"
                        >
                          <Wand2 size={12} className="mr-1" /> AI Refine
                        </button>
                      </div>
                      <textarea 
                        rows={6}
                        value={formData.about.content}
                        onChange={(e) => setFormData({...formData, about: {...formData.about, content: e.target.value}})}
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'SERVICES' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Manage Capabilities</h3>
                  <button 
                    onClick={addService}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700"
                  >
                    <Plus size={18} /> <span>New Service</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {formData.services.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-6 relative group">
                      <div className="w-full md:w-1/3">
                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Service Name</label>
                         <input 
                            type="text" 
                            value={service.title}
                            onChange={(e) => updateService(service.id, { title: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 p-3 rounded-lg font-bold"
                         />
                      </div>
                      <div className="w-full md:w-1/2">
                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Description</label>
                         <textarea 
                            rows={2}
                            value={service.description}
                            onChange={(e) => updateService(service.id, { description: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 p-3 rounded-lg text-sm"
                         />
                      </div>
                      <div className="flex items-end justify-end md:w-1/6">
                        <button 
                          onClick={() => deleteService(service.id)}
                          className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'CONTACT' && (
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-8 animate-in fade-in duration-500">
                <h3 className="text-xl font-bold">Corporate Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Office Address</label>
                    <textarea 
                      rows={3}
                      value={formData.contact.address}
                      onChange={(e) => setFormData({...formData, contact: {...formData.contact, address: e.target.value}})}
                      className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                      <input 
                        type="text" 
                        value={formData.contact.phone}
                        onChange={(e) => setFormData({...formData, contact: {...formData.contact, phone: e.target.value}})}
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Operational Hours</label>
                      <input 
                        type="text" 
                        value={formData.contact.hours}
                        onChange={(e) => setFormData({...formData, contact: {...formData.contact, hours: e.target.value}})}
                        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
