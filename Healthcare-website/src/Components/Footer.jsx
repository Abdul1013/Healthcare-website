import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* Newsletter Section */}
      <div className="bg-[#2D9CDB] py-12 px-6 flex flex-col items-center text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
          Stay Informed. Stay Healthy.
        </h2>
        <p className="text-blue-50 text-sm md:text-base mb-6 max-w-lg">
          Get the latest health tips and updates delivered straight to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="bg-[#F2994A] hover:bg-[#e88a36] text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-blue-100 text-xs mt-4">
          By subscribing, you agree to our privacy policy and terms.
        </p>
      </div>

      {/* Main Footer Links Section */}
      <div className="bg-[#0B3D59] text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Health Care</h3>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-pink-300 mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Press & Media</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-pink-300 mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition">Home Care</li>
              <li className="hover:text-white cursor-pointer transition">Elderly Care</li>
              <li className="hover:text-white cursor-pointer transition">Medical Supplies</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-pink-300 mb-4 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition">Cookie Policy</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-pink-300 mb-4 uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition">Help Center</li>
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition">FAQs</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-800">
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