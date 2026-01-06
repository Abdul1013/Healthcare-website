import React from 'react';

// Individual Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
      <div>
        {/* Empathy Pink Quote Icon */}
        <div className="text-empathy text-4xl font-serif mb-4">“</div>
        <p className="text-slate-600 italic leading-relaxed mb-6">
          {testimonial.content}
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-health-light/20 flex items-center justify-center text-health font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-health-dark">{testimonial.name}</h4>
          <p className="text-xs text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;