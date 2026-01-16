import React from 'react';

// Individual Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between transition-all hover:scale-105 hover:shadow-lg animate-slide-up">
      <div>
        {/* Quote Icon */}
        <div className="text-health-pink text-4xl font-serif mb-4">"</div>
        <p className="text-gray-600 italic leading-relaxed mb-6">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-health-green/20 flex items-center justify-center text-health-green font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;