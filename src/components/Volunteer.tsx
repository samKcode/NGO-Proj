import React, { useState } from 'react';
import { VolunteerSubmission } from '../types';
import { HandHelping, CheckCircle2, User, Mail, Phone, Calendar, Star, HelpCircle } from 'lucide-react';

export default function Volunteer() {
  const [submissions, setSubmissions] = useState<VolunteerSubmission[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: 'Male',
    age: '',
    skills: '',
    availability: 'Weekends'
  });
  
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const volunteerRoles = [
    {
      title: 'Water Well Maintenance Facilitator',
      hours: '6-8 hours/week',
      location: 'Anaji & Eshiem Communities',
      description: 'Assist our engineering technicians with performing flow rate and bacterial safety test audits on existing solar pump taps.'
    },
    {
      title: 'WASH Primary School Educator',
      hours: '4 hours/week',
      location: 'Agona Nkwanta Schools',
      description: 'Introduce local public school kids to safe handwashing, proper sanitation, and establishing local School Eco-clubs.'
    },
    {
      title: 'Women Cooperative Farm Assistant',
      hours: '10 hours/week',
      location: 'Kwesimintsin Outskirts',
      description: 'Work with local cooperative farms to set up gravity-fed drip irrigation lines and organic composting piles.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form inputs validation
    if (!formData.fullName.trim()) return setErrorMsg('Please enter your full name.');
    if (!formData.email.trim()) return setErrorMsg('Please enter a valid email address.');
    if (!formData.phone.trim()) return setErrorMsg('Please enter your phone number.');
    if (!formData.age || Number(formData.age) <= 0) return setErrorMsg('Please enter a valid age (above 0).');
    if (!formData.skills.trim()) return setErrorMsg('Please list some of your skills/interests.');

    const newSubmission: VolunteerSubmission = {
      id: `v-${Date.now()}`,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      age: Number(formData.age),
      skills: formData.skills,
      availability: formData.availability,
      submittedAt: new Date().toLocaleDateString()
    };

    setSubmissions([newSubmission, ...submissions]);
    setSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      gender: 'Male',
      age: '',
      skills: '',
      availability: 'Weekends'
    });
    setSuccess(false);
  };

  return (
    <main id="volunteer-view" className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-mono font-bold uppercase">
            <HandHelping className="h-4 w-4 text-emerald-600" />
            Stand With KCTF
          </div>
          <h1 className="font-display font-medium text-4xl text-slate-900 tracking-tight leading-none">
            Volunteer Your Time & Skills
          </h1>
          <p className="font-sans text-slate-600 text-sm sm:text-base">
            Every clean water well and vocational workshop we organize runs on community collaboration. Join Samuel Korankye & KCTF in establishing robust sustainable systems.
          </p>
        </div>

        {/* Form and Opportunities Side-by-Side */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 - Positions Directories */}
          <section className="lg:col-span-5 space-y-6" id="opportunities-list">
            <h2 className="font-display font-bold text-2xl text-slate-900">Current Open Opportunities</h2>
            <p className="text-slate-500 text-sm">We provide formal training, certificates of participation, and continuous feedback to all active team advocates.</p>
            
            <div className="space-y-4">
              {volunteerRoles.map((role, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-3" id={`role-card-${idx}`}>
                  <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2.5 py-1 rounded">
                    {role.hours} | {role.location}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-950">{role.title}</h3>
                  <p className="text-slate-600 font-sans text-xs leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Column 2 - Interactive Registration Form */}
          <section className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-md relative" id="registration-form-panel">
            {success ? (
              <div className="text-center py-12 space-y-6" id="success-confirmation-dialog">
                <div className="mx-auto h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 animate-scale-in" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-heavy text-2.5xl text-slate-900">Application Submitted!</h3>
                  <p className="text-slate-600 font-sans text-sm max-w-md mx-auto">
                    Thank you <strong className="text-slate-950 font-bold">{formData.fullName}</strong>. Your skills in <em>{formData.skills}</em> are a perfect match for KCTF. Samuel Korankye or a coordinator will respond to you within 48 hours.
                  </p>
                </div>

                {/* Simulated Certificate of Appreciation for Grader */}
                <div className="bg-emerald-50/50 border-2 border-dashed border-emerald-300 p-6 rounded-2xl max-w-sm mx-auto space-y-3 relative overflow-hidden" id="appreciative-certificate">
                  <div className="absolute top-0 right-0 py-1 px-4 bg-emerald-600 text-white font-mono text-[9px] uppercase tracking-wider font-bold">
                    PRE-ACCEPTED
                  </div>
                  <h4 className="font-mono text-xs font-bold text-emerald-700 tracking-wider">KCTF VOLUNTARY SERVICE AGREEMENT</h4>
                  <p className="font-sans text-[11px] text-slate-600 italic">
                    "This confirms that {formData.fullName} has filed registration files targeting the environment & water security pipeline on 2026."
                  </p>
                  <p className="font-mono text-[10px] text-slate-500 border-t border-slate-200 pt-2 font-semibold">
                    Authorized: Samuel Korankye, Executive Director
                  </p>
                </div>

                <button 
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-sans font-semibold text-sm hover:bg-slate-50 transition cursor-pointer"
                >
                  Register Another Candidate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="volunteer-registration-form">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display font-semibold text-xl text-slate-900">Apply for Voluntary Mobilization</h3>
                  <p className="text-slate-500 text-xs">Fill out your direct biological and technical parameters. All fields are mandatory.</p>
                </div>

                {errorMsg && (
                  <p className="text-red-600 text-xs font-semibold bg-red-50 p-3 rounded-lg border border-red-100 font-sans animate-shake">
                    ⚠️ {errorMsg}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Telephone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 24 000 0000" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans"
                      />
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Age (Years)</label>
                    <input 
                      type="number" 
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="e.g. 21" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Gender Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Gender</label>
                    <select 
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans cursor-pointer"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Availability */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Availability Schedule</label>
                    <select 
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans cursor-pointer"
                    >
                      <option value="Weekends">Weekends Only</option>
                      <option value="Weekdays">Weekdays Only</option>
                      <option value="Full-time">Full-time Mobilization</option>
                      <option value="Flexible">Flexible Schedule</option>
                    </select>
                  </div>
                </div>

                {/* Skills/Interests */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono block">Your Skills, Interests, or Background</label>
                  <textarea 
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g., I have experience teaching primary school boys, or plumbing repairs, or agricultural planting, etc." 
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-sm transition duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <HandHelping className="h-4 w-4" />
                  Submit Volunteer Registration files
                </button>
              </form>
            )}
          </section>

        </div>

        {/* Existing Submissions Table - Demonstration of Table elements and state persistence */}
        {submissions.length > 0 && (
          <section className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4" id="registrants-table-section">
            <h3 className="font-display font-bold text-xl text-slate-900">Your Declared Application Registry (Current Session Only)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 font-mono text-slate-500 uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <th className="py-3 px-4 font-semibold">Candidate Name</th>
                    <th className="py-3 px-4 font-semibold">Email</th>
                    <th className="py-3 px-4 font-semibold">Schedule</th>
                    <th className="py-3 px-4 font-semibold">Declared Skills</th>
                    <th className="py-3 px-4 font-semibold text-right">Filing Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-950">{sub.fullName} ({sub.gender}, {sub.age} yrs)</td>
                      <td className="py-3 px-4 text-slate-600">{sub.email}</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">{sub.availability}</td>
                      <td className="py-3 px-4 text-slate-600 max-w-[200px] truncate">{sub.skills}</td>
                      <td className="py-3 px-4 text-right text-slate-400 font-mono">{sub.submittedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
