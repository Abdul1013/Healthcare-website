import React from 'react';
import { ShieldCheck, Award, Star, Activity, Check } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
      <div className="shrink-0 rounded-b-full w-12 h-12 flex items-center justify-center text-health-green bg-health-green/10 rounded-none group-hover:bg-health-green group-hover:text-white transition-all duration-500">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-1">
          {title}
        </h4>
        <p className="text-xs text-slate-500 font-light leading-relaxed max-w-[160px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="w-full bg-slate-50 py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Optional Header to set the tone */}
        <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[1px] bg-he" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
                Institutional Standards
            </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <FeatureItem
            icon={ShieldCheck}
            title="Verified Provider"
            description="Fully licensed and IDHS compliant care."
          />

          <FeatureItem
            icon={Award}
            title="3+ Year Tenure"
            description="Proven track record in CILA arrangements."
          />

          <FeatureItem
            icon={Star}
            title="Top-Tier Care"
            description="Consistently high family satisfaction rates."
          />

          <FeatureItem
            icon={Activity}
            title="24/7 Oversight"
            description="Continuous onsite clinical supervision."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;