import React from 'react';
import { teamMembers } from '../data/mockData';
import { Target, Eye, Shield, Award, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      title: 'Water Integrity & Equity',
      desc: 'Ensuring that clean, safe, bacteria-free water is a reachable human right for every single school and household.',
      icon: Award
    },
    {
      title: 'Community-led Ownership',
      desc: 'All water boreholes and sanitation facilities are built together with the communities to ensure 100% local self-maintenance.',
      icon: Shield
    },
    {
      title: 'Regenerative Sustainability',
      desc: 'Integrating agroecology, rainwater harvesting, composting, and solar mechanics to cause permanent ecological improvements.',
      icon: Sparkles
    }
  ];

  const objectives = [
    'Install solar-powered deep boreholes in 50 additional water-scarce communities by 2030.',
    'Eliminate open sewage flows in municipal markets through the creation of local composting bio-digesters.',
    'Empower 500+ disadvantaged West Region youths with green vocational skills certificate courses.',
    'Distribute 2,500 household-level bio-sand purifiers paired with community water storage systems.',
    'Build fully autonomous female-led farming cooperatives that rely on rainwater drip systems.'
  ];

  return (
    <main id="about-view" className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">About the Foundation</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none">
            Our Journey. Our Mission. Our Absolute Commitment.
          </h1>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            KCTF works every day to bridge community-led growth alongside clean, safe, and easily accessible WASH (Water, Sanitation, & Hygiene) strategies in Takoradi, Ghana.
          </p>
        </div>

        {/* History / Why We Exist - Two column layout */}
        <section className="grid md:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm" id="about-history">
          <article className="md:col-span-7 space-y-5">
            <h2 className="font-display font-bold text-2.5xl text-slate-950">Our History & Why We Exist</h2>
            <div className="h-1 w-12 bg-emerald-500 rounded"></div>
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              The story of the **Korankye Community Transformation Foundation (KCTF)** began with a simple observation. While studying Applied Sciences in Takoradi, our founder, **Samuel Korankye**, witnessed the profound water-borne disease challenges, high school absenteeism, and sanitative challenges plaguing suburban villages and trade centers.
            </p>
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              Rather than waiting for faraway solutions, Samuel organized fellow youths, engineers, and community chiefs to build localized, household bio-sand filters. This grassroots initiative quickly blossomed into a professional NGO. Today, KCTF has engineered solar-powered boreholes and community agroforestry cooperatives, converting local challenges into permanent, green, and vibrant self-sustained futures.
            </p>
          </article>
          
          {/* Decorative Aside Section */}
          <aside className="md:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 rounded-2xl space-y-4" id="about-why-exist-aside">
            <BookOpen className="h-8 w-8 text-emerald-400" />
            <h3 className="font-display font-bold text-lg text-white">Why Water & Sanitation?</h3>
            <p className="text-sm text-emerald-200/90 leading-relaxed font-sans">
              "Without clean drinking water and sanitary hygiene, local health suffers, children miss classes, and community development is physically impossible. Solve the water challenge, and you immediately unleash the dynamic potential of the entire community."
            </p>
            <p className="text-xs font-mono text-emerald-400 font-medium">— Samuel Korankye, Executive Director</p>
          </aside>
        </section>

        {/* Vision & Mission Cards - Grid */}
        <section className="grid md:grid-cols-2 gap-8" id="about-vision-mission">
          <article className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <Eye className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-slate-950">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                A highly resilient, healthy, and self-sufficient Ghana where every rural and semi-urban community has permanent access to secure, potable water, proper modern bio-composting sanitation, and flourishing green economic ventures.
              </p>
            </div>
          </article>

          <article className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4" id="about-mission">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-slate-950">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                To design, build, and deploy low-cost, eco-friendly water safety boreholes and hygienic sanitation hubs, while simultaneously delivering green vocational certificates to regional youths to safeguard environmental resources and generate sustainable livelihood solutions.
              </p>
            </div>
          </article>
        </section>

        {/* Core Values Section */}
        <section className="space-y-8" id="about-core-values">
          <div className="text-center space-y-2">
            <h2 className="font-display font-bold text-2.5xl text-slate-900 tracking-tight">Our Core Anchoring Values</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">These three foundational ideals construct every decision, site survey, and project budget we deliver.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 text-center space-y-4 shadow-sm" id={`value-${idx}`}>
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-950">{val.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Objectives - Lists demonstration */}
        <section className="bg-slate-900 text-emerald-50 p-8 md:p-12 rounded-3xl" id="about-objectives">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-3">
              <h2 className="font-display font-bold text-2.5xl text-white">Strategic 2030 Objectives</h2>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">Strategic Roadmaps</p>
              <p className="text-emerald-200/80 text-sm leading-relaxed font-sans">
                KCTF is working to realize clear, quantifiable targets to support clean health, youth education, and agroforestry in Takoradi.
              </p>
            </div>
            
            <div className="md:col-span-8">
              {/* Ordered list demonstration */}
              <ol className="divide-y divide-emerald-800 font-sans text-sm sm:text-base space-y-4" id="objectives-ordered-list">
                {objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-4 pt-4 first:pt-0 items-start">
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-800/50 rounded h-7 w-7 flex items-center justify-center shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-slate-100 leading-relaxed font-sans">{obj}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Leadership or Team Section */}
        <section className="space-y-12" id="about-leadership">
          <div className="text-center space-y-2">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">Our Dedicated Team</span>
            <h2 className="font-display font-bold text-2.5xl text-slate-900 tracking-tight">KCTF Executive Secretariat</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Meet the visionary founders, geological technicians, and community leaders piloting project layouts across administrative districts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" id="team-grid">
            {teamMembers.map((member) => (
              <article key={member.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow" id={`team-${member.id}`}>
                <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="h-full w-full object-cover transform hover:scale-103 transition-transform" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-emerald-900 border border-emerald-800 text-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {member.role}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-slate-950">{member.name}</h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  {member.name === 'Samuel Korankye' && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700">
                      <span>TTU-CS Alumnus</span>
                      <span className="bg-emerald-50 px-2 py-0.5 rounded font-bold font-mono">Index: TTU-CS-2026-0428</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
