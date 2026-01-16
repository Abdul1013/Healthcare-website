import React from 'react';
import NewsLetter from './UI/NewsLetter.jsx';

const Footer = () => {
  return (
    <footer id="contact" className="w-full font-sans">
      {/* Newsletter Section */}
    <NewsLetter/>

      {/* Main Footer Links Section */}
      <div className="bg-gray-800 text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.png" alt="Health Care Logo" className="h-8 w-auto mb-4" />
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-pink cursor-pointer transition">About Us</li>
              <li className="hover:text-health-pink cursor-pointer transition">Careers</li>
              <li className="hover:text-health-pink cursor-pointer transition">Press & Media</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-health-pink mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-health-pink cursor-pointer transition">Home Care</li>
              <li className="hover:text-health-pink cursor-pointer transition">Elderly Care</li>
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
              <li className="hover:text-health-pink cursor-pointer transition">Contact Us</li>
              <li className="hover:text-health-pink cursor-pointer transition">FAQs</li>
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