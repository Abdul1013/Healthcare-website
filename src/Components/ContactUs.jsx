import React from 'react';

const inputClass =
  "w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-health-pink focus:ring-offset-1 outline-none transition bg-white text-black";
const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5";

const ContactUs = () => {
  const [result, setResult] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const [descLength, setDescLength] = React.useState(0);
  const [contactMethod, setContactMethod] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setShowPopup(true);
      setResult("");
      setDescLength(0);
      setContactMethod('');
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Contact Details */}
          <div className="space-y-10  my-auto">
            <div>
              <h2 className="text-4xl font-bold text-[#000F38] mb-4">
                Let's Start a <span className="text-health-green">Conversation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're looking for care for a loved one or have questions about our services, our team is ready to assist.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-5 group">
                <div className="bg-health-green/10 p-4 rounded-full group-hover:bg-health-green transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-health-green group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us Directly</p>
                  <a href="tel:+17083519445" className="text-xl font-semibold text-gray-800 hover:text-health-green transition focus:outline-none focus:ring-2 focus:ring-health-green focus:ring-offset-2 rounded">
                    +1 (708) 351-9445
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="bg-health-green/10 p-4 rounded-full group-hover:bg-health-green transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-health-green group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Support</p>
                  <a href="mailto:simplifycareinc@gmail.com" className="text-xl font-semibold text-gray-800 hover:text-health-green transition focus:outline-none focus:ring-2 focus:ring-health-green focus:ring-offset-2 rounded">
                    Info@simplifycareinc.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="bg-health-green/10 p-4 rounded-full group-hover:bg-health-green transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-health-green group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Main Office</p>
                  <p className="text-xl font-semibold text-gray-800">133 Blackhawk Drive, Park Forest, IL 60466</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Request an Appointment</h3>
            <p className="text-sm text-gray-500 mb-6">Fields marked <span className="text-health-green font-bold">*</span> are required.</p>

            <form onSubmit={onSubmit} className="space-y-5" noValidate>

              {/* Full Name */}
              <div>
                <label htmlFor="full_name" className={labelClass}>
                  Full Name <span aria-hidden="true" className="text-health-green">*</span>
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  placeholder="Enter full name"
                  className={inputClass}
                  required
                  aria-required="true"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span aria-hidden="true" className="text-health-green">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Best contact number"
                    className={inputClass}
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span aria-hidden="true" className="text-health-green">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className={inputClass}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Insurance ID */}
              <div>
                <label htmlFor="insurance_id" className={labelClass}>
                  Member Humana ID / Insurance ID{' '}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="insurance_id"
                  name="insurance_id"
                  type="text"
                  placeholder="Insurance ID"
                  className={inputClass}
                />
              </div>

              {/* Preferred Date + Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="preferred_date" className={labelClass}>
                    Preferred Date <span aria-hidden="true" className="text-health-green">*</span>
                  </label>
                  <input
                    id="preferred_date"
                    name="preferred_date"
                    type="date"
                    className={inputClass}
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Requested <span aria-hidden="true" className="text-health-green">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={inputClass}
                    required
                    aria-required="true"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service…</option>
                    <option value="homecare">Homecare Services</option>
                    <option value="cila">CILA Services</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className={labelClass}>
                  Brief Description of Needs <span aria-hidden="true" className="text-health-green">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  maxLength={500}
                  placeholder="Short summary of your care needs…"
                  className={`${inputClass} resize-none`}
                  required
                  aria-required="true"
                  aria-describedby="desc-count"
                  onChange={(e) => setDescLength(e.target.value.length)}
                />
                <p id="desc-count" className="text-xs text-gray-400 text-right mt-1" aria-live="polite">
                  {descLength}/500
                </p>
              </div>

              {/* Preferred Contact Method */}
              <fieldset>
                <legend className={labelClass}>
                  Preferred Contact Method <span aria-hidden="true" className="text-health-green">*</span>
                </legend>
                <div className="flex gap-8 mt-1">
                  {['Phone', 'Email'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="contact_method"
                        value={method.toLowerCase()}
                        checked={contactMethod === method.toLowerCase()}
                        onChange={() => setContactMethod(method.toLowerCase())}
                        required
                        className="w-4 h-4 accent-health-green focus:ring-2 focus:ring-health-green focus:ring-offset-1 cursor-pointer"
                      />
                      <span className="text-sm text-slate-700">{method}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  aria-required="true"
                  className="mt-0.5 w-4 h-4 shrink-0 accent-health-green focus:ring-2 focus:ring-health-green focus:ring-offset-1 cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                  I consent to SimplifyCare contacting me about services.
                </label>
              </div>

              {result && result !== "Sending...." && (
                <p role="alert" className="text-sm text-red-500">{result}</p>
              )}

              <button
                type="submit"
                disabled={result === "Sending...."}
                className="w-full bg-health-green py-4 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-health-green/30 transition-all flex items-center justify-center space-x-3 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-health-green focus:ring-offset-2"
              >
                <span>{result === "Sending...." ? "Sending…" : "Submit Request"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Success popup */}
      {showPopup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-999 p-4"
        >
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 id="success-title" className="text-2xl font-bold text-[#000F38] mb-2">Request Submitted!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you. A SimplifyCare representative will contact you within 2 business days.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              autoFocus
              className="w-full bg-health-green text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition shadow-lg shadow-health-green/20 focus:outline-none focus:ring-2 focus:ring-health-pink focus:ring-offset-2"
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
