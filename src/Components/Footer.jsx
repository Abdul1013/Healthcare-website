import React, { useState } from "react";
import NewsLetter from "./UI/NewsLetter.jsx";
import CareersModal from "./UI/CareersModal.jsx";
import BlogsModal from "./UI/BlogsModal.jsx";
// import FAQSection from './FAQSection.jsx';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showCareersModal, setShowCareersModal] = useState(false);
  const [showBlogsModal, setShowBlogsModal] = useState(false);
  return (
    <footer id="contact" className="w-full font-sans">
      {/* Newsletter Section */}
      <NewsLetter />
      <CareersModal
        isOpen={showCareersModal}
        onClose={() => setShowCareersModal(false)}
      />
      <BlogsModal
        isOpen={showBlogsModal}
        onClose={() => setShowBlogsModal(false)}
      />

      {/* Main Footer Links Section */}
      <div className="bg-gray-800 text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="Health Care Logo"
              className="h-8 w-auto mb-4"
            />
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-health-green mb-4 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li
                className="hover:text-health-green cursor-pointer transition"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </li>
              <li
                className="hover:text-health-green cursor-pointer transition"
                onClick={() => setShowCareersModal(true)}
              >
                Careers
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                Press & Media
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-health-green mb-4 uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li
                className="hover:text-health-green cursor-pointer transition"
                onClick={() => scrollToSection("services")}
              >
                Home Care
              </li>
              <li
                className="hover:text-health-green cursor-pointer transition"
                onClick={() => scrollToSection("services")}
              >
                Elderly Care
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                Medical Supplies
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-health-green mb-4 uppercase tracking-wider text-xs">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-green cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                Terms of Service
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                Cookie Policy
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-health-green mb-4 uppercase tracking-wider text-xs">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-green cursor-pointer transition">
                Help Center
              </li>
              <li
                className="hover:text-health-green cursor-pointer transition"
                onClick={() => setShowBlogsModal(true)}
              >
                Blog
              </li>
              <li
                className="hover:text-health-green cursor-pointer transition"
                onClick={() => scrollToSection("faqs")}
              >
                FAQs
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                Guides
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                Community
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-health-green mb-4 uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-green cursor-pointer transition">
                <a href="tel:+17083519445">+1(708)3519445</a>
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                <a href="mailto:simplifycareinc@gmail.com">
                  Info@simplifycareinc.com
                </a>
              </li>
              <li className="hover:text-health-green cursor-pointer transition">
                133 Blackhawk Drive Park Forest IL 60466
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-slate-200">
          <div className="bg-slate-50 p-8 rounded-2xl mb-12">
            <p className="text-[11px] leading-relaxed text-slate-500 font-light text-center">
              <strong className="text-slate-900 font-semibold uppercase tracking-tighter mr-2">
                Medical Disclaimer:
              </strong>
              The information provided on this platform is for informational
              purposes only. SimplifyCare, Inc. does not provide professional
              medical advice, diagnosis, or treatment through this website.
              Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                  Federal Entity
                </span>
                <span className="text-xs font-semibold text-slate-900">
                  EIN 33-3845177
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                  Compliance
                </span>
                <span className="text-xs font-semibold text-slate-900">
                  Licensed & Insured — Illinois
                </span>
              </div>
            </div>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em]">
              © 2026 SimplifyCare Inc. — Matteson, Illinois
            </p>
            <div className="flex gap-8">
              <a
                href="/privacy"
                className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
