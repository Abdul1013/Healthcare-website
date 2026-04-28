import React from "react";
import { ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-health-green block mb-4">
            Our Foundation
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
            Person-Centered <br />
            <span className="italic font-serif font-light text-slate-500">
              Care Excellence
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start mb-12">
          <div className="w-full md:w-1/2 space-y-8">
            <p className="text-2xl md:text-3xl text-slate-800 leading-tight font-medium">
              SimplifyCare Inc provides residential and home care services for
              adults with intellectual and developmental disabilities.
            </p>
            <div className="h-[1px] w-20 bg-health-green" />
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Based in Matteson, Illinois, we deliver 24/7 onsite supervision,
              daily-living skills coaching, and care coordination designed to
              promote independence and community participation. Our team brings
              clinical professionalism and human compassion to every doorstep.
            </p>
          </div>
          {/*Image*/}
          <div className="w-full md:w-1/2 animate-slide-up">
            <img
              src="/about.jpg"
              alt="About Health Care"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* MISSION*/}
        <div className="border-t border-slate-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className=" text-center text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                Our Mission
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                At SimplifyCare Inc, we are driven by a simple mission: <b>to make care easier, more accessible and more human </b>. We partner with families, providers and community organizations to ensure every individual receives the respect, support and opportunities they deserve.   Together, we are building a future where people of all abilities can live, grow and belong.
              </p>
            </div>
            <div className="md:border-x-2 border-health-green md:px-2 ">
              <h3 className=" text-center text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                Our Vision
              </h3>
              <p className="text-slate-600 font-light leading-relaxed md:text-center">
                Empowering adults with disabilities through skill-coaching and
                medication management to achieve full community participation.
              </p>
            </div>
            <div>
              <h3 className=" text-center text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                The Protocol
              </h3>
              <ul className="text-slate-600 font-light space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />{" "}
                  Medication Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />{" "}
                  Daily Living Skills
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />{" "}
                  Care Coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
