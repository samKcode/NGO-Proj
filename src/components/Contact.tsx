import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckSquare, MessageSquare, Heart, RefreshCw } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [allMessages, setAllMessages] = useState<{name: string, email: string, subject: string, message: string, date: string}[]>([]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert('All parameters must be validated prior to submission.');
      return;
    }
    
    const newMsg = {
      name,
      email,
      subject,
      message,
      date: new Date().toLocaleDateString()
    };
    
    setAllMessages([newMsg, ...allMessages]);
    setSubmitted(true);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <main id="contact-view" className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">Immediate Dispatch</span>
          <h1 className="font-display font-medium text-4xl text-slate-900 tracking-tight leading-none">
            Get in Contact with KCTF Support
          </h1>
          <p className="font-sans text-slate-600 text-sm sm:text-base">
            Reach out with geological survey ideas, community bore requests, or student questions. Samuel Korankye & the Takoradi committee team stand ready to facilitate.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Addresses & Office Hours (Semantic HTML Table demonstration) */}
          <section className="lg:col-span-5 space-y-6" id="contact-directory-panel">
            <h2 className="font-display font-bold text-2.5xl text-slate-950">Secretariat Locations</h2>
            
            <div className="space-y-4">
              {/* Office Address Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Physical Office Address</h4>
                  <p className="text-slate-600 font-sans text-xs sm:text-sm mt-1 leading-relaxed">
                    KCTF Secretariat Complex, Block 12, Applied Sciences Extension,<br />
                    Takoradi Technical University Campus, Western Region, Ghana
                  </p>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Direct Telephone Contacts</h4>
                  <p className="text-slate-600 font-sans text-xs sm:text-sm mt-1">
                    Secondary Line: +233 24 123 4567 <br />
                    Alternative Technical Line: +233 20 987 6543
                  </p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Electronic Mailing Inquiries</h4>
                  <p className="text-slate-600 font-sans text-xs sm:text-sm mt-1">
                    Primary: info@kctf-ngo.org <br />
                    Admissions & Voluntary: support@kctf-ngo.org
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours Table */}
            <div className="bg-slate-900 text-emerald-50 p-6 rounded-2xl shadow-md space-y-4" id="office-hours-hub">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                <h3 className="font-display font-bold text-lg text-white">Office Hour Rotations</h3>
              </div>
              
              <table className="w-full text-xs sm:text-sm text-slate-300 font-sans" id="office-hours-schedule-table">
                <thead>
                  <tr className="border-b border-emerald-800 text-emerald-400 font-mono text-[10px] uppercase tracking-wider text-left">
                    <th className="pb-2 font-semibold">Weekday</th>
                    <th className="pb-2 font-semibold">Morning Schedule</th>
                    <th className="pb-2 font-semibold">Evening Close</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800/50">
                  <tr>
                    <td className="py-2.5 font-medium text-white">Monday — Friday</td>
                    <td className="py-2.5 font-mono">08:00 AM AST</td>
                    <td className="py-2.5 font-mono">05:00 PM AST</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-white">Saturday Field Patrols</td>
                    <td className="py-2.5 font-mono">09:00 AM AST</td>
                    <td className="py-2.5 font-mono">01:00 PM AST</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-slate-400">Sunday Secretariat</td>
                    <td className="py-2.5 font-mono text-slate-400" colSpan={2}>Strictly Closed (Except Extreme Crisis)</td>
                  </tr>
                </tbody>
              </table>

              <div className="pt-2 border-t border-emerald-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Time Zone: UTC +0 GMT (Ghana)</span>
                <span className="text-emerald-400">Samuel Korankye Presiding</span>
              </div>
            </div>
          </section>

          {/* Right Column - Interactive Contact Form & Location Map Preview */}
          <section className="lg:col-span-7 space-y-6" id="contact-form-panel">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-5" id="message-success-confirmation">
                  <div className="mx-auto h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckSquare className="h-9 w-9 animate-scale-in" />
                  </div>
                  <div>
                    <h3 className="font-display font-heavy text-2.5xl text-slate-900">Dispatch Logged Successfully!</h3>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm max-w-sm mx-auto mt-2">
                      Thank you for contacting KCTF Secretariat officers. Your submission has been securely compiled into the session table database.
                    </p>
                  </div>
                  <button
                    onClick={clearForm}
                    className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-sans font-bold hover:bg-slate-50 transition cursor-pointer inline-flex items-center gap-1"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Write New Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6" id="ngo-contact-form">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-slate-900">Inquire or File a Request</h3>
                    <p className="text-slate-500 text-xs mt-1">Submit your parameters to initiate communication directly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        placeholder="john@example.com" 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Subject of Inquiry</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Clean Water borehole installation request / Partnership program" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Detailed Message Body</label>
                    <textarea 
                      required
                      rows={4}
                      value={message}
                      placeholder="Detail your request parameters comprehensively here..." 
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-sm transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Dispatch Secure Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder Design - Professional geographic rendering */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden" id="geographic-map-placeholder">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2 text-slate-900">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span className="font-display font-bold text-sm">Autonomous Location Anchor</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">Takoradi, Ghana</span>
              </div>
              
              <div className="h-64 map-gradient relative flex items-center justify-center overflow-hidden">
                {/* Simulated Grid overlay mapping to mimic a genuine map interface */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* SVG Mockup of the Takoradi Technical University coastline contour */}
                <svg className="absolute h-full w-full opacity-30 text-emerald-800" viewBox="0 0 400 200" fill="none">
                  <path d="M50 150 Q120 80, 200 130 T350 70" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
                  <path d="M10 180 Q100 110, 200 160 T390 100" stroke="currentColor" strokeWidth="1"/>
                </svg>

                {/* Animated map pin pulse */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <div className="h-10 w-10 rounded-full bg-emerald-600 border-2 border-white shadow-xl flex items-center justify-center text-white relative z-20">
                    <MapPin className="h-5 w-5 fill-white text-emerald-600" />
                  </div>
                  <div className="mt-2 text-center bg-slate-950/90 text-white rounded-lg px-2.5 py-1 text-[10px] font-mono leading-tight font-semibold border border-slate-800 shadow">
                    TTU APPLIED SCIENCES
                  </div>
                </div>
                
                {/* Bottom map coordinates panel */}
                <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-slate-900/80 backdrop-blur-sm text-slate-400 p-1.5 rounded border border-slate-800 leading-none">
                  Lat: 4.8981° N, Lon: 1.7583° W
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Local Messages registry demonstration */}
        {allMessages.length > 0 && (
          <section className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4" id="messages-table-section">
            <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-600" />
              Your Dispatched Message Records (Current Session Only)
            </h3>
            <div className="grid gap-4">
              {allMessages.map((msg, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3 text-xs sm:text-sm font-sans" id={`msg-item-${idx}`}>
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-800 shrink-0 flex items-center justify-center font-bold">
                    {msg.name[0]}
                  </div>
                  <div className="space-y-1.5 flex-1 select-text">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <span className="font-bold text-slate-950">{msg.name} (<span className="text-slate-500 font-medium font-mono">{msg.email}</span>)</span>
                      <span className="font-mono text-[10px] text-slate-400 font-semibold">{msg.date}</span>
                    </div>
                    <p className="text-slate-800 font-medium font-display leading-tight">{msg.subject}</p>
                    <p className="text-slate-600 leading-relaxed font-sans">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
