import React from 'react';
import { ActiveTab } from '../types';
import { localLogo } from '../data/mockData';
import { Heart, Github, Twitter, Linkedin, Facebook, GraduationCap, Award } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800" id="main-footer">
      
      {/* Upper Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo and Slogan Pillar */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 border border-slate-700 bg-slate-800 flex items-center justify-center">
                <img 
                  src={localLogo} 
                  alt="KCTF Logo" 
                  className="h-full w-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-none tracking-tight block">KCTF NGO</span>
                <span className="text-[9px] uppercase font-mono text-emerald-400 font-bold tracking-widest mt-0.5 block">Ghana Community Action</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-sans">
              Korankye Community Transformation Foundation (KCTF) is an environmental NGO piloting professional Community Development and Water & Clean Sanitation infrastructure in West Africa.
            </p>
            
            {/* Social media connections */}
            <div className="flex gap-4 pt-2" id="footer-social-panel">
              <a href="#facebook" className="h-8 w-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition flex items-center justify-center border border-slate-700" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#twitter" className="h-8 w-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition flex items-center justify-center border border-slate-700" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#linkedin" className="h-8 w-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition flex items-center justify-center border border-slate-700" aria-label="Linkedin">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigational map Columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Quick Navigations</h4>
            <ul className="text-xs sm:text-sm space-y-2.5">
              {(['home', 'about', 'projects', 'gallery'] as const).map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => setActiveTab(tab)}
                    className="hover:text-emerald-400 transition cursor-pointer text-left capitalize"
                  >
                    {tab === 'about' ? 'About Us' : tab === 'projects' ? 'Programs' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Support Registries</h4>
            <ul className="text-xs sm:text-sm space-y-2.5">
              {(['volunteer', 'donate', 'contact'] as const).map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => setActiveTab(tab)}
                    className="hover:text-emerald-400 transition cursor-pointer text-left capitalize"
                  >
                    {tab === 'volunteer' ? 'Become a Volunteer' : tab === 'donate' ? 'Donate / Support Us' : 'Contact Support'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Academic Submission Footer Banner (Takoradi Technical University) */}
      <div className="bg-slate-950 text-slate-500 py-6 text-xs font-mono border-t border-slate-800/60" id="academic-grading-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center md:text-left">
            <GraduationCap className="h-5 w-5 text-slate-400 shrink-0" />
            <div>
              <p className="text-slate-300 font-semibold leading-tight">Takoradi Technical University, Western Region, Ghana</p>
              <p className="text-slate-500 text-[10px] mt-0.5">Faculty of Applied Sciences — Computer Science Department (Mid Sem Website Exam Project)</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2.5 rounded-xl font-mono text-[10px] sm:text-xs">
            <Award className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300">Submitted by:</span>
            <strong className="text-white font-heavy">Samuel Korankye</strong>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Index:</span>
            <strong className="text-white font-heavy">TTU-CS-2026-0428</strong>
          </div>

        </div>
      </div>

      {/* Basic legal terms summary */}
      <div className="bg-slate-950/40 text-center py-4 text-[10px] text-slate-600 border-t border-slate-800/30">
        <p>© {currentYear} Korankye Community Transformation Foundation (KCTF) NGO. Fictional Academic Model for Demonstration.</p>
      </div>

    </footer>
  );
}
