import React from 'react'

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Text and Image Row */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="flex-1 animate-slide-up">
            <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Health Care, we are dedicated to providing exceptional home healthcare services with compassion and professionalism. Our team of verified professionals brings over 3 years of experience to ensure your well-being at home.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We prioritize your health and comfort, offering quick and reliable care tailored to your needs. Trust us for a 100% satisfaction guarantee.
            </p>
          </div>
          <div className="flex-1 animate-slide-up">
            <img src="/about.jpg" alt="About Health Care" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Our Mission Block */}
        <div className="animate-slide-up">
          <div className="bg-health-green rounded-lg p-8 text-white text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg">
              To deliver accessible, high-quality healthcare services right to your doorstep, fostering a healthier community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

