import React from 'react';
import { ActiveTab } from '../types';
import { localHero, localCommunity, projects, statistics, testimonials, sponsors } from '../data/mockData';
import { Leaf, Droplet, ArrowRight, Heart, Users, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  // Take two projects to feature here
  const featured = projects.slice(0, 2);

  return (
    <main id="home-view" className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24" id="hero-banner-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Column 1 - Copy */}
            <article className="lg:col-span-6 space-y-6" id="hero-marketing-copy">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider font-mono">
                <Leaf className="h-3 w-3 text-emerald-600 animate-spin-slow" />
                Community & Sanitation NGO
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-none">
                Empowering Lives. <br />
                <span className="text-emerald-600">Preserving Water.</span>
              </h1>
              <p className="font-sans text-slate-600 text-lg sm:text-xl max-w-lg leading-relaxed">
                KCTF is committed to establishing sustainable water safety grids and clean sanitation infrastructure, promoting life-changing community development in Takoradi and regional West Ghana.
              </p>
              
              {/* Call-To-Action buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('volunteer')}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
                  id="cta-join-volunteer"
                >
                  Join as Volunteer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => setActiveTab('donate')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-sans font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  id="cta-donate-support"
                >
                  <Heart className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                  Support Our Mission
                </button>
              </div>
            </article>

            {/* Column 2 - Responsive Graphic Banner */}
            <div className="lg:col-span-6 relative" id="hero-image-wrapper">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10]">
                <img 
                  src={localHero} 
                  alt="KCTF Solar Powered Clean Water Project Ghana" 
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Highlight Overlay Badge - Semantic ASIDE element demonstration */}
              <aside className="absolute -bottom-6 -left-6 bg-slate-950 text-white p-4 rounded-xl shadow-xl border border-slate-800 hidden sm:flex items-center gap-3 max-w-[280px]" id="hero-aside-badge">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Droplet className="h-6 w-6 stroke-2" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-display">12,000+ Daily Impact</h4>
                  <p className="text-xs text-slate-400">Accessing sterile clean drinking taps in Takoradi villages.</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Slogan Banner */}
      <section className="bg-emerald-900 text-emerald-50 py-12" id="vision-slogan-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-semibold">Our Unwavering Core Creed</p>
          <q className="block text-xl sm:text-2xl md:text-3xl font-display font-semibold italic text-white max-w-4xl mx-auto leading-snug">
            "We believe that clean water is not a luxury, but the absolute foundational spark for health, self-reliance, education, and ultimate community development."
          </q>
          <cite className="block text-emerald-300 font-sans text-sm font-semibold mt-2">— Samuel Korankye, Founder of KCTF</cite>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 bg-white" id="intro-environmental-focus-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-video">
            <img 
              src={localCommunity} 
              alt="Community workshop spearheaded by Samuel Korankye" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-5">
            <h2 className="font-display font-heavy text-3xl text-slate-900 tracking-tight">
              Why Korankye Community Transformation Foundation Exists
            </h2>
            <div className="w-16 h-1 rounded bg-emerald-500"></div>
            <p className="text-slate-600 leading-relaxed font-sans">
              Founded in Takoradi, KCTF works at the intersection of local community empowerment and public healthcare sanitation. Clean water shortages burden hundreds of schoolgoing children and mothers. By executing localized hydro-geological water well projects and building modern agro-cooperative centers, we secure robust clean-drinking and financial futures.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Water & Sanitation</h4>
                  <p className="text-xs text-slate-500">Eco-toilet systems and borehole filtration hubs.</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Community Development</h4>
                  <p className="text-xs text-slate-500">Green vocational centers and women agroecology.</p>
                </div>
              </div>
            </div>
            <div>
              <button 
                onClick={() => setActiveTab('about')}
                className="text-emerald-600 hover:text-emerald-700 font-sans font-semibold text-sm inline-flex items-center gap-1 group cursor-pointer"
              >
                Read our detailed history and vision
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section Demonstrating a Semantic HTML Table */}
      <section className="py-16 bg-slate-50" id="statistics-table-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
              Verified Achievements & Regional Impact Log
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              The following audit logs denote community transformations executed and monitored in cooperation with the Takoradi Municipal Assembly.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden" id="analytics-table-container">
            <table className="w-full text-left border-collapse" id="impact-statistics-table">
              <thead>
                <tr className="bg-emerald-800 text-emerald-50 text-xs tracking-wider uppercase font-mono">
                  <th className="py-4 px-6 font-semibold">Transformative Indicator</th>
                  <th className="py-4 px-6 font-semibold">Projected target</th>
                  <th className="py-4 px-6 font-semibold">Current Verified Value</th>
                  <th className="py-4 px-6 font-semibold text-right">Progress Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-sm text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">Total Solar-Powered Boreholes commissioned</td>
                  <td className="py-4 px-6">12 Borehole Wells</td>
                  <td className="py-4 px-6 font-mono text-emerald-600 font-semibold bg-emerald-50/50">18 System Sites</td>
                  <td className="py-4 px-6 text-right"><span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">Exceeded</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">Daily Clean Water Treated & Distributed</td>
                  <td className="py-4 px-6">10,000 Liters</td>
                  <td className="py-4 px-6 font-mono text-emerald-600 font-semibold bg-emerald-50/50">15,000 Liters</td>
                  <td className="py-4 px-6 text-right"><span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">Exceeded</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">Bio-sand Filters installed and monitored</td>
                  <td className="py-4 px-6 font-medium">400 Families</td>
                  <td className="py-4 px-6 font-mono text-emerald-600 font-semibold bg-emerald-50/50">500 Households</td>
                  <td className="py-4 px-6 text-right"><span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">Exceeded</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">Vocational Youth Training graduates</td>
                  <td className="py-4 px-6">100 Candidates</td>
                  <td className="py-4 px-6 font-mono text-emerald-600 font-semibold bg-emerald-50/50">180 Graduated</td>
                  <td className="py-4 px-6 text-right"><span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">Exceeded</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">Takoradi Public market complex coverage</td>
                  <td className="py-4 px-6">1 Sanitation Hub</td>
                  <td className="py-4 px-6 font-mono text-amber-600 font-semibold bg-amber-50/50">Ongoing Construct</td>
                  <td className="py-4 px-6 text-right"><span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">On Track</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16 bg-white border-y border-slate-100" id="featured-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="space-y-2">
              <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">Field Operations</span>
              <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">Our Highlighted Core Projects</h2>
              <p className="text-slate-600 max-w-xl text-sm">Discover how we implement concrete, sustainable programs in local municipalities to solve real water and community gaps.</p>
            </div>
            <button
              onClick={() => setActiveTab('projects')}
              className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-500 font-sans text-sm font-semibold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              See All Six Projects
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8" id="featured-projects-grid">
            {featured.map((proj) => (
              <article key={proj.id} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300" id={`featured-${proj.id}`}>
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="h-full w-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm shadow px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    {proj.status}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-xs uppercase font-semibold font-mono tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                    {proj.category === 'water' ? 'Water & Clean Sanitation' : 'Community Development'}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">{proj.title}</h3>
                  <p className="text-slate-600 font-sans text-sm line-clamp-3 leading-relaxed">{proj.description}</p>
                  <div className="pt-2 border-t border-slate-200/60 flex flex-col gap-1.5 text-xs">
                    <p className="text-slate-500"><strong className="text-slate-800">Location:</strong> {proj.location}</p>
                    <p className="text-slate-500"><strong className="text-emerald-700">Impact Outcomes:</strong> {proj.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials or Success Stories */}
      <section className="py-16 bg-slate-50" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">Triumphant Testimonies</span>
            <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">Stories of Growth & Restoration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8" id="testimonials-grid">
            {testimonials.map((testi, idx) => (
              <blockquote key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative space-y-6" id={`testimonial-${idx}`}>
                <Quote className="absolute top-6 left-6 h-10 w-10 text-emerald-100 -z-0 stroke-2" />
                <div className="relative z-10 space-y-4">
                  <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed">
                    "{testi.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold font-mono">
                      {testi.name[0]}
                    </div>
                    <div>
                      <cite className="not-italic font-display font-semibold text-sm text-slate-950 block">{testi.name}</cite>
                      <p className="text-xs text-slate-500">{testi.role}</p>
                    </div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Supporters Section */}
      <section className="py-12 bg-white border-t border-slate-100" id="partners-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 font-mono">
            Proudly Collaborating with Credible Organizations & Municipalities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80" id="partners-flex">
            {sponsors.map((spons, idx) => (
              <div key={idx} className="flex items-center gap-2" id={`sponsor-${idx}`}>
                <div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center">
                  {spons.logoLetter}
                </div>
                <span className="font-display text-sm font-semibold text-slate-700 tracking-tight">{spons.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
