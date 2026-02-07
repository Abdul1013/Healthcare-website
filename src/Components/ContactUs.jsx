import React from 'react';

const ContactUs = () => {
  const [result, setResult] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Using your Web3Forms Access Key
    formData.append("access_key", "06640fc2-dda8-44c4-91d3-1638676b5fe4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowPopup(true);
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Details */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-[#000F38] mb-4">
                Let’s Start a <span className="text-health-pink">Conversation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're looking for care for a loved one or have questions about our medical supplies, our team is ready to assist.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center space-x-5 group">
                <div className="bg-health-pink/10 p-4 rounded-full group-hover:bg-health-pink transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-health-pink group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us Directly</p>
                  <a href="tel:+17083519445" className="text-xl font-semibold text-gray-800 hover:text-health-pink transition">+1 (708) 351-9445</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-5 group">
                <div className="bg-health-pink/10 p-4 rounded-full group-hover:bg-health-pink transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-health-pink group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Support</p>
                  <a href="mailto:simplifycareinc@gmail.com" className="text-xl font-semibold text-gray-800 hover:text-health-pink transition">Info@simplifycareinc.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-5 group">
                <div className="bg-health-pink/10 p-4 rounded-full group-hover:bg-health-pink transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-health-pink group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Main Office</p>
                  <p className="text-xl font-semibold text-gray-800">133 Blackhawk drive park forest IL 60466</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input name="first_name" type="text" placeholder="First Name" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-health-pink outline-none transition bg-white text-black" required />
                <input name="last_name" type="text" placeholder="Last Name" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-health-pink outline-none transition bg-white text-black" required />
              </div>
              <input name="email" type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-health-pink outline-none transition bg-white text-black" required />
              <textarea name="message" rows="4" placeholder="How can we help you?" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-health-pink outline-none transition bg-white text-black" required></textarea>
              
              <button disabled={result === "Sending...."} className="w-full bg-health-pink py-4 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-health-pink/30 transition-all flex items-center justify-center space-x-3 disabled:bg-gray-400">
                <span>{result === "Sending...." ? "Sending..." : "Send Message"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#000F38] mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button 
              onClick={() => {setShowPopup(false); setResult("");}}
              className="w-full bg-health-pink text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition shadow-lg shadow-health-pink/20"
            >
              OKAY
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;