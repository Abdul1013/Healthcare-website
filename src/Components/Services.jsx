import React from 'react'

const ServiceItem = ({ icon, title, description }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow animate-slide-up">
      <div className="w-16 h-16 bg-health-green rounded-full flex items-center justify-center text-white text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

const StepItem = ({ step, title, description }) => {
  return (
    <article className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl text-center animate-slide-up border border-health-green">
      <div className="w-12 h-12 bg-health-orange rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
        {step}
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className="w-full py-16">
      {/* Our Services Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              We are committed to providing quality health services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceItem
              icon="🏥"
              title="Home Visits"
              description="Professional healthcare visits at your home for convenience."
            />
            <ServiceItem
              icon="💊"
              title="Medication Management"
              description="Expert guidance on medications and health routines."
            />
            <ServiceItem
              icon="🩺"
              title="Health Monitoring"
              description="Regular check-ups and vital sign monitoring."
            />
            <ServiceItem
              icon="🤝"
              title="Personal Care"
              description="Compassionate personal care services."
            />
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How it Works</h2>
            <h3 className="font-bold text-health-green mb-4">Simple. Secure. Designed Around You.</h3>
            <p className="text-gray-600 text-lg">
              Our booking system is built with simplicity at its core, prioritizing ease of use, clarity, and accessibility for every user.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <StepItem
              step="1"
              title="Choose a Service"
              description="Select the service that suits your needs."
            />
            <StepItem
              step="2"
              title="Book Appointment"
              description="Schedule your appointment easily online."
            />
            <StepItem
              step="3"
              title="Receive Care"
              description="Professional care delivered to your doorstep."
            />
            <StepItem
              step="4"
              title="Follow Up"
              description="Continuous support and follow-up care."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

