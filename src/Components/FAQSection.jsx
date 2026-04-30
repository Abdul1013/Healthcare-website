import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What specific care models do you provide?",
    answer: "SimplifyCare specializes in CILA (Community Integrated Living Arrangements) and intermittent Homecare. Our models are built on IDHS standards to support adults with intellectual and developmental disabilities."
  },
  {
    question: "How is the clinical oversight structured?",
    answer: "We provide 24/7 onsite supervision. Our coordination team includes verified healthcare professionals who manage medication, daily-living skills, and state-mandated documentation."
  },
  {
    question: "Are your staff members state-certified?",
    answer: "Yes. Every member of our care team undergoes rigorous background checks, fingerprints, and state-certified training specifically tailored to developmental disability support."
  },
  {
    question: "How do we begin the eligibility assessment?",
    answer: "Contact our intake coordinator directly. We will review the medical history and behavioral needs to ensure a person-centered placement that meets Illinois state requirements."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open for UX

  return (
    <section id="faqs" className="w-full py-24 bg-health-green">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ── HEADER: Left Aligned Editorial Style */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <HelpCircle className="text-white/60" size={18} />
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/70">
               Information Protocol
             </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">
            Common <br /> <span className="italic font-serif font-light opacity-80">Inquiries</span>
          </h2>
        </div>

        {/* ── ACCORDION HUB */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`transition-all duration-500 border-b border-white/10 ${isOpen ? 'bg-white/5' : 'bg-transparent'}`}
              >
                <button
                  className="w-full text-left py-8 focus:outline-none flex justify-between items-center group"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <Plus className={`absolute transition-transform duration-500 text-white ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0'}`} size={20} />
                    <Minus className={`absolute transition-transform duration-500 text-white ${isOpen ? 'rotate-0' : '-rotate-90 opacity-0'}`} size={20} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/70 text-base leading-relaxed font-light max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;