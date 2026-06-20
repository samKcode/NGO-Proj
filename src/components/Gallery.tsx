import React, { useState } from 'react';
import { galleryItems } from '../data/mockData';
import { GalleryItem } from '../types';
import { Camera, Eye, X, HelpCircle, Droplet, Users, Heart } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'water' | 'community' | 'outreach'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <main id="gallery-view" className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-mono font-bold uppercase">
            <Camera className="h-4 w-4 text-emerald-600" />
            Field Snapshot Logger
          </div>
          <h1 className="font-display font-medium text-4xl text-slate-900 tracking-tight leading-none">
            Our Operations and Impact Gallery
          </h1>
          <p className="font-sans text-slate-600 text-sm sm:text-base">
            Browse through real photos of water quality tests, community cooperative mapping, borehole projects, and green vocational schools in West Ghana.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2" id="gallery-filter-toolbar">
          {(['all', 'water', 'community', 'outreach'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All Activities' : cat === 'water' ? 'Water Projects' : cat === 'community' ? 'Community Development' : 'Outreach Classes'}
            </button>
          ))}
        </div>

        {/* Professional HTML CSS Grid Image Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer relative"
              id={`gallery-fig-${item.id}`}
            >
              {/* Image box with overlay */}
              <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transform scale-102 group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro hover feedback banner */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/40">
                    <Eye className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <figcaption className="p-4 space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                  {item.category === 'water' ? 'Water Project' : item.category === 'community' ? 'Community' : 'Outreach'}
                </span>
                <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-sans line-clamp-2">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Frame */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4" 
          onClick={() => setLightboxItem(null)}
          id="gallery-lightbox"
        >
          <button 
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
            id="close-lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div 
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-content-box"
          >
            {/* Left Image column */}
            <div className="md:w-3/5 bg-black flex items-center justify-center aspect-video md:aspect-auto">
              <img 
                src={lightboxItem.image} 
                alt={lightboxItem.title} 
                className="max-h-[70vh] object-contain max-w-full"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Information panel */}
            <div className="md:w-2/5 p-8 text-white space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  {lightboxItem.category === 'water' ? 'Water Project' : lightboxItem.category === 'community' ? 'Community Service' : 'Outreach Instruction'}
                </div>
                <h3 className="font-display font-medium text-2xl text-white">{lightboxItem.title}</h3>
                <p className="text-slate-300 font-sans text-sm leading-relaxed">
                  {lightboxItem.description}
                </p>
              </div>

              {/* Extra context details */}
              <div className="pt-6 border-t border-slate-800 space-y-3 font-sans text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-emerald-400" />
                  <span>KCTF Clean Water Security Pipeline verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-400" />
                  <span>100% Shared Village Custody System active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
