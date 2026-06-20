import React, { useState } from 'react';
import { Sparkles, Heart, CreditCard, ChevronRight, CheckCircle, Smartphone } from 'lucide-react';

export default function Donate() {
  const [tier, setTier] = useState<string>('t2'); // default to $25 Bio-sand filter
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [payMethod, setPayMethod] = useState<'card' | 'momo'>('card');

  const donationTiers = [
    {
      id: 't1',
      amount: '$10',
      title: 'Water for a Child',
      desc: 'Provides continuous child-safe potable water supply and basic school hygiene materials to 1 child in regional Agona Nkwanta schools for a full year.'
    },
    {
      id: 't2',
      amount: '$25',
      title: 'Bio-sand Biofilter Kit',
      desc: 'Builds, delivers, and installs 1 durable gravity-fed bio-sand water filter directly to an Eshiem village household, ending bacterial water contaminants.'
    },
    {
      id: 't3',
      amount: '$100',
      title: 'Tap Stand Restoration',
      desc: 'Funds the absolute pipeline retrofits and valve parts to bring an offline village tap system back into full operational health.'
    },
    {
      id: 't4',
      amount: '$500',
      title: 'Borehole Deep Aqua Drill',
      desc: 'Fully covers structural steel pipe casing and drill components for tapping down 80m deep into pristine Ghanaian groundwater veins.'
    }
  ];

  const getActiveAmountAndTitle = () => {
    if (tier === 'custom') {
      return { amount: customAmount ? `$${customAmount}` : 'Custom Amount', title: 'Special Strategic Gift' };
    }
    const selected = donationTiers.find((t) => t.id === tier);
    return selected ? { amount: selected.amount, title: selected.title } : { amount: '', title: '' };
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorEmail.trim()) {
      alert('Please fill out your name and email parameters.');
      return;
    }
    if (tier === 'custom' && (!customAmount || Number(customAmount) <= 0)) {
      alert('Please enter a valid donation quantity.');
      return;
    }
    setIsSubmitted(true);
  };

  const activeDetails = getActiveAmountAndTitle();

  return (
    <main id="donate-view" className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header content explaining why donate */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-mono font-bold uppercase">
              <Heart className="h-4 w-4 text-emerald-600 fill-emerald-600" />
              Secure Impact Funding
            </span>
            <h1 className="font-display font-medium text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none">
              Solve the Water Challenge. <span className="text-emerald-600">Fund Transformation.</span>
            </h1>
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              Every single cedi and dollar contributed directly builds steel pipelines, deep water boreholes, and safe bio-sand filters. 100% of public donations go directly toward grassroots construction and community validation.
            </p>
            
            <div className="space-y-4 border-l-2 border-emerald-500 pl-4">
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base">Direct Local Accountability</h3>
                <p className="text-slate-500 text-sm font-sans leading-relaxed">We coordinate directly with local traditional councils and the Takoradi Municipal Assembly to guarantee maximum, efficient project alignment.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base">100% Free Public Maintenance</h3>
                <p className="text-slate-500 text-sm font-sans leading-relaxed">No village is ever charged for water usage. All tap services run on solar-powered, clean energy, making water completely democratic.</p>
              </div>
            </div>
          </div>

          {/* Right column - Multi-tier Professional Donation Card */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-lg relative" id="donation-card-hub">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6" id="donation-success-panel">
                <div className="mx-auto h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display font-heavy text-3xl text-slate-900">Thank You, Donor!</h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Excellent choice, <strong className="text-slate-950 font-bold">{donorName}</strong>. Your generous gift of <span className="text-emerald-700 font-bold underline">{activeDetails.amount}</span> targeting <strong className="text-slate-900">"{activeDetails.title}"</strong> has been simulated successfully!
                  </p>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    We have dispatched a virtual, official Tax-deductible Receipt and an impact certificate to <em className="text-slate-700">{donorEmail}</em>. This simulated test conforms to TTU criteria.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setCustomAmount('');
                      setDonorName('');
                      setDonorEmail('');
                    }}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-sans font-semibold text-xs cursor-pointer transition shadow"
                  >
                    Donate Again
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-6" id="donation-gift-form">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">Select Donation Amount</h3>
                  <p className="text-slate-500 text-xs">Pick a concrete tier or customize your support below.</p>
                </div>

                {/* Donationpreset Tiers Layout - Beautiful dynamic radio cards */}
                <div className="grid grid-cols-2 gap-4" id="donation-tiers-grid">
                  {donationTiers.map((dt) => (
                    <div 
                      key={dt.id}
                      onClick={() => setTier(dt.id)}
                      className={`p-4 rounded-xl border border-slate-200/80 cursor-pointer transition flex flex-col justify-between hover:border-emerald-400 ${
                        tier === dt.id 
                          ? 'border-emerald-600 ring-2 ring-emerald-500/10 bg-emerald-50/50' 
                          : 'bg-slate-50'
                      }`}
                      id={`tier-card-${dt.id}`}
                    >
                      <div>
                        <span className="font-mono text-xl font-bold text-emerald-800 block">{dt.amount}</span>
                        <h4 className="font-display text-xs font-bold text-slate-900 mt-1 leading-tight">{dt.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal mt-2 font-sans line-clamp-3">
                        {dt.desc}
                      </p>
                    </div>
                  ))}

                  {/* Custom option */}
                  <div 
                    onClick={() => setTier('custom')}
                    className={`p-4 rounded-xl border border-slate-200/80 cursor-pointer transition flex flex-col justify-between hover:border-emerald-400 ${
                      tier === 'custom' 
                        ? 'border-emerald-600 ring-2 ring-emerald-500/10 bg-emerald-50/50' 
                        : 'bg-slate-50'
                    }`}
                    id="tier-card-custom"
                  >
                    <div>
                      <span className="font-mono text-sm font-bold text-emerald-800 block">Custom Amount</span>
                      <h4 className="font-display text-xs font-bold text-slate-900 mt-1">Strategic Livelihood</h4>
                    </div>
                    {tier === 'custom' ? (
                      <div className="relative mt-2">
                        <span className="absolute left-2.5 top-2 font-mono text-xs text-slate-600 font-semibold">$</span>
                        <input 
                          type="number" 
                          placeholder="e.g. 100"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full pl-6 pr-2 py-1.5 bg-white border border-slate-200 text-xs rounded-lg text-emerald-950 font-bold font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    ) : (
                      <p className="text-[10px] text-slate-500 leading-normal mt-2 font-sans">
                        Input any custom quantity you choose to support KCTF.
                      </p>
                    )}
                  </div>
                </div>

                {/* Submitting Person Details Form */}
                <div className="space-y-4 border-t border-slate-100 pt-4">
                  <h4 className="font-display font-semibold text-sm text-slate-900">Your Contact Details</h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Donor Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Elizabeth Mensah"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-xs rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="elizabeth@gmail.com"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-xs rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
                      />
                    </div>
                  </div>

                  {/* Payment option selector mock */}
                  <div className="space-y-2 pt-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono block">Simulated Payment Channel</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPayMethod('card')}
                        className={`py-2 px-3 rounded-lg border text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition ${
                          payMethod === 'card'
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <CreditCard className="h-4 w-4" />
                        Credit/Debit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPayMethod('momo')}
                        className={`py-2 px-3 rounded-lg border text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition ${
                          payMethod === 'momo'
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <Smartphone className="h-4 w-4 text-amber-500" />
                        Mobile Money (Momo)
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-sm transition duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Confirm donation of {activeDetails.amount}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
