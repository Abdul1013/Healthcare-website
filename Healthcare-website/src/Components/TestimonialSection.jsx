import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  // Centralized Data Object
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Family Caregiver",
      content: "The level of professionalism and genuine care provided to my father was beyond my expectations. It gave our family peace of mind."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Post-Op Patient",
      content: "Recovery at home was much smoother thanks to their dedicated nursing staff. They didn't just provide care; they provided hope."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Daughter of Client",
      content: "Transparent pricing and top-tier professionals. I highly recommend their home health services to anyone in need."
    }
  ];

  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-health-dark text-3xl md:text-4xl font-bold mb-4">
            Hear from our Customers
          </h2>
          <div className="h-1.5 w-24 bg-healing mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Real Experiences. Real Impact. Join the thousands of families who trust us with their most precious resource: health.
          </p>
        </div>

        {/* The Map Functionality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Call to Action Opportunity */}
        <div className="mt-16 text-center">
          <button className="text-health font-bold hover:text-health-dark underline underline-offset-8 decoration-healing transition-all">
            View All Success Stories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;