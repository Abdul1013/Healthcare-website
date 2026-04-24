import { Home, Building2, ArrowRight } from 'lucide-react';

const ServiceItem = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <article className="group bg-white p-10 border border-health-green hover:border-health-green/50 transition-all duration-300 shadow-sm hover:shadow-md rounded-none">
      <div className="w-14 h-14 rounded-full text-health-green flex items-center justify-center mb-8 group-hover:bg-health-green/50 group-hover:text-white transition-colors duration-500">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-light mb-6">
        {description}
      </p>
    </article>
  );
};

const StepItem = ({ step, title, description, onClick }) => {
  const isClickable = !!onClick;
  const Tag = isClickable ? 'button' : 'div';
  return (
    <Tag
      onClick={onClick}
      className={`relative flex-1 p-8 bg-slate-50 border-l-2 border-black/10 rounded-lg text-left w-full ${isClickable ? 'hover:bg-white hover:border-health-green hover:shadow-md transition-all duration-200 cursor-pointer group' : ''}`}
    >
      <span className="absolute -top-4 left-8 bg-black/50 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
        Phase 0{step}
      </span>
      <h4 className="text-lg font-bold text-slate-900 mb-2 mt-2 flex items-center gap-2">
        {title}
        {isClickable && <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-health-green" />}
      </h4>
      <p className="text-sm text-slate-500 leading-relaxed font-light">{description}</p>
    </Tag>
  );
};

const scrollToContact = () =>
  document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });

const Services = () => {
  return (
    <section id="services" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-health-green block mb-4">
              Our Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900">
              Specialized <br /> <span className="italic font-serif font-light text-slate-400">Support Models</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We provide a spectrum of care ranging from intermittent home visits to 24/7 community integrated living arrangements, all centered around individual growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 overflow-hidden">
          <ServiceItem
            icon={Home}
            title="Homecare Services"
            description="Intermittent professional support designed to maintain independence within your own residence. Includes medication management and daily living coaching."
          />
          <ServiceItem
            icon={Building2}
            title="CILA Services"
            description="Our Community Integrated Living Arrangements offer 24/7 onsite supervision and person-centered residential support for total community integration."
          />
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-health-green rounded-[2rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-health-green/10 rounded-full blur-3xl -mr-48 -mt-48" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">The Care Protocol</h2>
              <p className="text-black font-light max-w-xl mx-auto">
                Our onboarding process is rigorous, ensuring every individual is matched with the right care model and support team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepItem
                step="1"
                title="Choose a Service"
                description="Select the service that suits your needs and schedule your appointment easily online"
                onClick={scrollToContact}
              />
              <StepItem
                step="2"
                title="Follow Up"
                description="Continuous support and follow-up care."
              />
              <StepItem
                step="3"
                title="Receive Care"
                description="Professional care delivered to your doorstep."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;