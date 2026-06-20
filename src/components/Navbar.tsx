import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Droplet, Leaf, Menu, X, GraduationCap, Award } from 'lucide-react';
import { localLogo } from '../data/mockData';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Projects/Programs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'donate', label: 'Donate' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm" id="main-header">
      {/* Student Academic Submission Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1 px-4 flex flex-wrap justify-between items-center gap-2" id="ttu-submission-banner">
        <div className="flex items-center gap-2 font-mono">
          <GraduationCap className="h-4 w-4 text-emerald-400" />
          <span>Takoradi Technical University — Computer Science Department</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-emerald-400 font-medium">
          <Award className="h-4 w-4" />
          <span>Student: <strong className="text-white">Samuel Korankye</strong> | Index No: <strong className="text-white">TTU-CS-2026-0428</strong></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & NGO Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')} id="logo-action-container">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-emerald-100 bg-emerald-50 flex items-center justify-center shadow-inner">
              <img 
                src={localLogo} 
                alt="KCTF Logo" 
                className="h-full w-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg tracking-tight text-slate-900 leading-none">KCTF</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-sans tracking-wide uppercase leading-tight font-semibold mt-0.5 max-w-[200px] sm:max-w-none">
                Korankye Community Transformation Foundation
              </p>
            </div>
          </div>

          {/* Desktop Navigation Link Entries */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-navbar">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setActiveTab('donate')}
              className="ml-4 px-4.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold transition-all duration-200 shadow-sm flex items-center gap-1.5"
            >
              <Droplet className="h-4 w-4 text-emerald-200 fill-emerald-200 animate-pulse" />
              Support KCTF
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-50"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white" id="mobile-navbar">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button
                onClick={() => {
                  setActiveTab('donate');
                  setIsOpen(false);
                }}
                className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-center font-sans font-semibold shadow flex items-center justify-center gap-2"
              >
                <Droplet className="h-5 w-5 fill-emerald-200 text-emerald-200" />
                Support KCTF
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
