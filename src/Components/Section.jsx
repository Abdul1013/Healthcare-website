import React from 'react'
import { Award, Layers, HeartPulse, ArrowUpRight } from 'lucide-react'

const SelectionCard = ({ icon: Icon, number, title, description }) => (
  <div className="group rounded-2xl mx-2 relative bg-white p-10 border border-slate-100 hover:border-health-green transition-all duration-500">
    {/* Subtle Background Number */}
    <span className="absolute top-4 right-8 text-6xl font-bold text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
      {number}
    </span>
    
    <div className="w-12 h-12 text-health-green mb-8">
      <Icon size={40} strokeWidth={1} />
    </div>

    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
      {title}
    </h3>
    
    <p className="text-slate-500 font-light leading-relaxed text-sm">
      {description}
    </p>

    <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-health-green opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
      View Protocol <ArrowUpRight size={14} />
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="w-full  bg-health-green py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── HEADER: The Strategic Frame */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white block mb-4">
            Operational Excellence
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-none mb-8">
            Why SimplifyCare <br /> 
            <span className="italic font-serif font-light text-white/70">Stands Apart</span>
          </h2>
          <p className="text-white text-lg font-light">
            We don't just provide staffing; we build integrated support ecosystems that prioritize dignity, safety, and community participation.
          </p>
        </div>

        {/* ── THE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10px ">
          <SelectionCard
            icon={Award}
            number="01"
            title="Clinical Expertise"
            description="Our providers undergo rigorous state-mandated training and clinical vetting to ensure the highest standard of residential care."
          />
          <SelectionCard
            icon={Layers}
            number="02"
            title="Integrated Coordination"
            description="We manage the complex intersection of medical needs, state agency compliance, and family communication seamlessly."
          />
          <SelectionCard
            icon={HeartPulse}
            number="03"
            title="Person-Centered Focus"
            description="Care plans are not templated. We adapt every daily-living skill coaching session to the unique goals of the individual."
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs