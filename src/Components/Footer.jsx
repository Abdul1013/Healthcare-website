import React, { useState } from 'react';
import NewsLetter from './UI/NewsLetter.jsx';
import CareersModal from './UI/CareersModal.jsx';
import BlogsModal from './UI/BlogsModal.jsx';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
   
  };


  const [showCareersModal, setShowCareersModal] = useState(false);
  const [showBlogsModal, setShowBlogsModal] = useState(false);
  return (
    <footer id="contact" className="w-full font-sans">
      {/* Newsletter Section */}
      <NewsLetter/>
      <CareersModal isOpen={showCareersModal} onClose={() => setShowCareersModal(false)} />
      <BlogsModal isOpen={showBlogsModal} onClose={() => setShowBlogsModal(false)} />

      {/* Main Footer Links Section */}
      <div className="bg-gray-800 text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">

          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Health Care Logo" className="h-8 w-auto mb-4" />
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-pink cursor-pointer transition" onClick={() => scrollToSection('about')}>About Us</li>
              <li className="hover:text-health-pink cursor-pointer transition" onClick={() => setShowCareersModal(true)}>Careers</li>
              <li className="hover:text-health-pink cursor-pointer transition">Press & Media</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-pink cursor-pointer transition" onClick={() => scrollToSection('services')}>Home Care</li>
              <li className="hover:text-health-pink cursor-pointer transition" onClick={() => scrollToSection('services')}>Elderly Care</li>
              <li className="hover:text-health-pink cursor-pointer transition">Medical Supplies</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-pink cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-health-pink cursor-pointer transition">Terms of Service</li>
              <li className="hover:text-health-pink cursor-pointer transition">Cookie Policy</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-pink cursor-pointer transition">Help Center</li>
              <li className="hover:text-health-pink cursor-pointer transition" onClick={() => setShowBlogsModal(true)}>Blog</li>
              <li className="hover:text-health-pink cursor-pointer transition">FAQs</li>
              <li className="hover:text-health-pink cursor-pointer transition">Guides</li>
              <li className="hover:text-health-pink cursor-pointer transition">Community</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
           <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
           <ul className="space-y-2 text-sm text-gray-300">
             <li className="hover:text-health-pink cursor-pointer transition"><a href="tel:+17083519445">+1(708)3519445</a></li>
             <li className="hover:text-health-pink cursor-pointer transition"><a href="mailto:simplifycareinc@gmail.com">simplifycareinc@gmail.com</a></li>
             <li className="hover:text-health-pink cursor-pointer transition"></li>
           </ul>
         </div> 
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-xs text-gray-400 space-y-4">
            <p>© 2025 HealthCare Inc. All rights reserved.</p>
            <p className="leading-relaxed">
              Medical information provided on this platform is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;