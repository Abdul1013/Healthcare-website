import React, { useEffect } from "react";
import {
  Home,
  Building2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Users,
  HeartHandshake,
  Pill,
  Car,
  Sparkles,
  CalendarClock,
  MessageCircle,
  Activity,
  CheckCircle2,
} from "lucide-react";
import Services from "./Services.jsx";

const Eyebrow = ({ children }) => (
  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-health-green block mb-4">
    {children}
  </span>
);

const SectionHeading = ({ eyebrow, line1, line2, kicker, align = "left" }) => (
  <div className={align === "center" ? "text-center" : ""}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[0.95]">
      {line1}
      {line2 && (
        <>
          {" "}
          <br />
          <span className="italic font-serif font-light text-slate-400">
            {line2}
          </span>
        </>
      )}
    </h2>
    {kicker && (
      <p className="mt-6 text-slate-500 text-lg font-light leading-relaxed max-w-2xl">
        {kicker}
      </p>
    )}
  </div>
);

const DetailCard = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <article className="group bg-white p-8 border border-slate-100 hover:border-health-green/60 transition-all duration-300 hover:shadow-md rounded-2xl">
      <div className="w-12 h-12 rounded-xl bg-health-green/10 text-health-green flex items-center justify-center mb-6 group-hover:bg-health-green group-hover:text-white transition-colors duration-300">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h4 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
        {title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed font-light">
        {description}
      </p>
    </article>
  );
};

const cilaDetails = [
  {
    icon: Building2,
    title: "What is CILA?",
    description:
      "Community Integrated Living Arrangements are licensed residential homes where adults with intellectual and developmental disabilities live with the daily support they need to thrive within their community.",
  },
  {
    icon: Home,
    title: "Our Residential Model",
    description:
      "Small, home-style residences in welcoming neighborhoods. Each home is purpose-designed for comfort, accessibility, and a true sense of belonging — not an institutional feel.",
  },
  {
    icon: Clock,
    title: "24/7 Support Overview",
    description:
      "Trained Direct Support Professionals are onsite around the clock — overnight awake staffing, scheduled wellness checks, and immediate response to any need that arises.",
  },
  {
    icon: Sparkles,
    title: "Daily Living Skills Training",
    description:
      "Person-centered coaching in cooking, hygiene, money management, and household routines — practical skills that build independence one day at a time.",
  },
  {
    icon: Pill,
    title: "Health & Medication Oversight",
    description:
      "Medication administration, appointment scheduling, and care coordination with primary providers, specialists, and behavioral health partners.",
  },
  {
    icon: Users,
    title: "Community Integration",
    description:
      "Active participation in social events, day programs, employment, faith communities, and recreation — because belonging is part of the care plan.",
  },
  {
    icon: Car,
    title: "Transportation & Appointments",
    description:
      "Reliable transportation to medical appointments, work, day programs, and community activities, accompanied by trained staff when needed.",
  },
  {
    icon: ShieldCheck,
    title: "Safety, Staffing & Compliance",
    description:
      "State-licensed and fully insured. Background-checked staff, ongoing training, documented care plans, and rigorous compliance with Illinois DHS standards.",
  },
];

const homecareDetails = [
  {
    icon: HeartHandshake,
    title: "Overview of Homecare Support",
    description:
      "Compassionate, in-home assistance tailored to each individual's routine — designed to preserve independence, dignity, and the comfort of familiar surroundings.",
  },
  {
    icon: Activity,
    title: "Personal Care Assistance",
    description:
      "Help with bathing, grooming, dressing, mobility, and toileting — delivered respectfully by trained caregivers who put dignity first.",
  },
  {
    icon: Home,
    title: "Homemaker Services",
    description:
      "Light housekeeping, laundry, meal preparation, nutrition support, and home safety monitoring — keeping the home a healthy, livable space.",
  },
  {
    icon: Clock,
    title: "Respite Care",
    description:
      "Short-term relief for family caregivers. Whether a few hours or several days, we step in so loved ones can rest, recover, or simply recharge.",
  },
  {
    icon: Users,
    title: "Companionship & Social Support",
    description:
      "Conversation, shared activities, walks, and outings that combat isolation and nurture emotional wellbeing.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "Hourly, overnight, weekend, and 24-hour options. Scale up or down as needs evolve — no rigid contracts, just care that fits.",
  },
  {
    icon: MessageCircle,
    title: "Family Support & Communication",
    description:
      "Transparent care notes, regular check-ins, and a single point of contact — so families always know how their loved one is doing.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Caregivers",
    description:
      "Every caregiver is licensed, background-checked, and continuously trained. We match personalities and skills carefully so trust comes naturally.",
  },
];

const ComparisonRow = ({ label, cila, homecare }) => (
  <div className="grid grid-cols-3 gap-6 py-5 border-b border-slate-100 last:border-b-0">
    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 self-center">
      {label}
    </div>
    <div className="text-sm text-slate-700 font-light leading-relaxed">
      {cila}
    </div>
    <div className="text-sm text-slate-700 font-light leading-relaxed">
      {homecare}
    </div>
  </div>
);

const AudienceCard = ({ icon, title, description, points, accent }) => {
  const Icon = icon;
  return (
    <article
      className={`flex flex-col p-10 rounded-3xl border ${accent === "green" ? "border-health-green/30 bg-white" : "border-slate-200 bg-slate-50"}`}
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${accent === "green" ? "bg-health-green text-white" : "bg-slate-900 text-white"}`}
      >
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-slate-500 font-light leading-relaxed mb-8">
        {description}
      </p>
      <ul className="space-y-3 mt-auto">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm text-slate-700 font-light"
          >
            <CheckCircle2
              size={18}
              className={`shrink-0 mt-0.5 ${accent === "green" ? "text-health-green" : "text-slate-900"}`}
              strokeWidth={1.75}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const ServicesPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const goGetStarted = () => {
    if (typeof onNavigate === "function") {
      onNavigate("home", "contact-us");
    }
  };

  return (
    <main className="bg-white">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-36 pb-24 md:pt-44 md:pb-32 border-b border-slate-100">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-health-green/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[24rem] h-[24rem] rounded-full bg-health-pink/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400 mb-10"
          >
            <button
              onClick={() => onNavigate && onNavigate("home")}
              className="hover:text-health-green transition-colors"
            >
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900">Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Our Services</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.92]">
                Care that fits <br />
                <span className="italic font-serif font-light text-slate-500">
                  every life stage.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                From around-the-clock residential support to flexible in-home
                assistance, SimplifyCare delivers professional, compassionate
                care across Matteson and Illinois.
              </p>
              <button
                onClick={goGetStarted}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border-b-2 border-health-green pb-1 hover:gap-4 transition-all"
              >
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview (existing component) */}
      <Services onGetStarted={goGetStarted} />

      {/* Quick Comparison */}
      <section
        id="comparison"
        className="w-full py-24 md:py-32 bg-slate-50 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <SectionHeading
              eyebrow="At a glance"
              line1="CILA vs. Homecare,"
              line2="side by side."
              kicker="Both services are licensed, person-centered, and built around individual goals. The right fit depends on the level of support, setting, and routine that works best."
            />
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-3 gap-6 px-8 py-6 bg-slate-900 text-white">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Dimension
              </div>
              <div className="flex items-center gap-2 text-sm font-bold tracking-tight">
                <Building2 size={16} className="text-health-green" />
                CILA Services
              </div>
              <div className="flex items-center gap-2 text-sm font-bold tracking-tight">
                <Home size={16} className="text-health-green" />
                Homecare Services
              </div>
            </div>
            <div className="px-8">
              <ComparisonRow
                label="Setting"
                cila="Licensed residential home in the community."
                homecare="The individual's own home or family residence."
              />
              <ComparisonRow
                label="Support Level"
                cila="24/7 onsite supervision and overnight awake staff."
                homecare="Hourly, daily, overnight, or 24-hour as needed."
              />
              <ComparisonRow
                label="Best Suited For"
                cila="Adults with IDD who benefit from full-time residential structure."
                homecare="Individuals and families seeking flexible support at home."
              />
              <ComparisonRow
                label="Daily Routine"
                cila="Skill-building, community outings, shared meals, and group life."
                homecare="Tailored to existing routines — household, errands, social time."
              />
              <ComparisonRow
                label="Medical Oversight"
                cila="Onsite medication administration and care coordination."
                homecare="Medication reminders and wellness check-ins as scheduled."
              />
              <ComparisonRow
                label="Family Role"
                cila="Active partner in care planning and visits."
                homecare="Hands-on partner; we share daily care notes."
              />
              <ComparisonRow
                label="Commitment"
                cila="Long-term placement with personalized plan."
                homecare="Flexible — scale up or down as needs evolve."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Each Is For */}
      <section className="w-full py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <SectionHeading
              eyebrow="Who it's for"
              line1="Find the right fit"
              line2="for your loved one."
              kicker="A short read on who each service is designed for — so you can choose with confidence."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AudienceCard
              icon={Building2}
              title="CILA Services"
              description="Designed for adults with intellectual and developmental disabilities who thrive with the structure, companionship, and around-the-clock support of a licensed residential home."
              accent="green"
              points={[
                "Adults 18+ with intellectual or developmental disabilities.",
                "Individuals who benefit from 24/7 supervision and routine.",
                "Families seeking a long-term, community-based placement.",
                "Anyone needing onsite medication administration and care coordination.",
              ]}
            />
            <AudienceCard
              icon={Home}
              title="Homecare Services"
              description="Designed for individuals — including seniors, adults with disabilities, and those recovering from illness — who want to stay in their own homes with reliable, flexible support."
              accent="slate"
              points={[
                "Seniors who want to age in place comfortably.",
                "Adults recovering from surgery, illness, or hospitalization.",
                "Family caregivers who need respite or weekly relief.",
                "Anyone needing help with daily living, errands, or companionship.",
              ]}
            />
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-10 bg-slate-900 rounded-3xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                Not sure which fits?
              </h3>
              <p className="text-slate-300 font-light max-w-xl">
                A 15-minute conversation with our care team is usually all it
                takes. We'll listen, ask the right questions, and recommend an
                honest path forward.
              </p>
            </div>
            <button
              onClick={goGetStarted}
              className="inline-flex items-center gap-2 bg-health-green text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-health-green/30 transition-all whitespace-nowrap"
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CILA Deep Dive */}
      <section id="cila" className="w-full py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="CILA Services"
                line1="Residential support,"
                line2="thoughtfully delivered."
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Our CILA program offers 24/7 residential support in
                comfortable, community-based homes designed to promote
                independence and belonging.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cilaDetails.map((item) => (
              <DetailCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-10 bg-white border border-slate-100 rounded-3xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-health-green mb-2">
                Ready to take the next step?
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Apply for CILA Placement
              </h3>
            </div>
            <button
              onClick={goGetStarted}
              className="group inline-flex items-center gap-2 bg-slate-900 text-white font-semibold py-4 px-7 rounded-xl hover:bg-health-green transition-colors"
            >
              Begin Application
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Homecare Deep Dive */}
      <section id="homecare" className="w-full py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Homecare Services"
                line1="Support that comes"
                line2="home with you."
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Licensed homecare for individuals who prefer to remain in the
                comfort of their own homes — flexible, dignified, and tailored
                to each person's routine.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homecareDetails.map((item) => (
              <DetailCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-10 bg-health-green rounded-3xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
                Ready when you are
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Request Homecare Services
              </h3>
            </div>
            <button
              onClick={goGetStarted}
              className="group inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-4 px-7 rounded-xl hover:bg-slate-900 hover:text-white transition-colors"
            >
              Request a Visit
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full py-24 md:py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Eyebrow>One care team. Two paths.</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-8">
            Let's build a care plan
            <br />
            <span className="italic font-serif font-light text-slate-400">
              around your life.
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Talk with our team about goals, routines, and the support that
            actually fits. No pressure — just honest guidance.
          </p>
          <button
            onClick={goGetStarted}
            className="inline-flex items-center gap-2 bg-health-green text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-health-green/30 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
