import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { Sparkles, Droplet, Users, Filter, Navigation, CheckCircle } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'water' | 'community'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <main id="projects-view" className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">Active Interventions</span>
            <h1 className="font-display font-medium text-4xl text-slate-900 tracking-tight leading-none">
              Projects & Environmental Programs
            </h1>
            <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl">
              We operate structural development pipelines across communities in West Ghana. Explore our six primary programs in community development and water sanitation.
            </p>
          </div>

          {/* Functional Filters */}
          <div className="flex items-center gap-2 self-start py-1" id="projects-filter-toolbar">
            <Filter className="h-4 w-4 text-slate-400 mr-1" />
            {(['all', 'water', 'community'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-emerald-600'
                }`}
              >
                {cat === 'all' ? 'All (6)' : cat === 'water' ? 'Water & WASH' : 'Community'}
              </button>
            ))}
          </div>
        </div>

        {/* Six Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-listings-grid">
          {filteredProjects.map((proj) => (
            <article 
              key={proj.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              id={`project-card-${proj.id}`}
            >
              <div className="space-y-4">
                {/* Responsive Image Card Design */}
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden group">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="h-full w-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Status Overlay Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider shadow border ${
                    proj.status === 'Completed' 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                      : proj.status === 'Ongoing'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-sky-50 text-sky-800 border-sky-200'
                  }`}>
                    {proj.status}
                  </div>
                </div>

                {/* Content Box */}
                <div className="px-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500">
                    {proj.category === 'water' ? (
                      <span className="flex items-center gap-1 text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                        <Droplet className="h-3 w-3 text-sky-500 fill-sky-500" />
                        WATER & SANITATION
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                        <Users className="h-3 w-3 text-emerald-500" />
                        COMMUNITY DEVELOPMENT
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-lg text-slate-900 line-clamp-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed line-clamp-4">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Status and locations */}
              <div className="p-6 pt-4 mt-4 border-t border-slate-100 bg-slate-50/50 space-y-3 font-sans text-xs">
                <div className="flex items-start gap-2 text-slate-600">
                  <Navigation className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 font-semibold block">Locality</strong>
                    <span>{proj.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 font-semibold block">Verified Impact & Metrics</strong>
                    <span className="font-medium text-slate-700">{proj.impact}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
