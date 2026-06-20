import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Volunteer from './components/Volunteer';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Trigger page scroll reset when activeTab transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'gallery':
        return <Gallery />;
      case 'volunteer':
        return <Volunteer />;
      case 'donate':
        return <Donate />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div id="full-app-root" className="min-h-screen flex flex-col justify-between bg-slate-50 overflow-x-hidden selection:bg-emerald-500 selection:text-white font-sans text-slate-800">
      
      {/* Dynamic Header Navbar with index ID stamp */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Transitional View Wrapper with smooth animation */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            id="animated-content-wrapper"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sustainable footer navigation including credits */}
      <Footer setActiveTab={setActiveTab} />
      
    </div>
  );
}
