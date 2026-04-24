import React, { useState } from 'react';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg overflow-hidden shadow-2xl rounded-2xl">

        {/* Header */}
        <div className="bg-health-green px-8 py-6 flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Book an Appointment</h3>
            <p className="text-white/70 text-sm mt-1">We'll get back to you within 24 hours.</p>
          </div>
          <button onClick={handleClose} className="text-white/60 hover:text-white transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-health-green/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">✓</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900">Request Received</h4>
            <p className="text-slate-500 font-light">
              Thank you, <span className="font-medium text-slate-700">{form.name}</span>. Our team will contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2 bg-health-green text-white rounded-lg font-medium hover:bg-health-green/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Select Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health-green outline-none text-slate-700 bg-white"
              >
                <option value="" disabled>Choose a service...</option>
                <option value="homecare">Homecare Services</option>
                <option value="cila">CILA Services</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health-green outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@email.com"
                  required
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health-green outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health-green outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Additional Notes
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit about your needs..."
                rows={3}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health-green outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-health-green hover:bg-health-green/90 text-white font-bold py-4 rounded-lg transition-colors"
            >
              Submit Request
            </button>

            <p className="text-center text-xs text-slate-400">
              No payment required. We will call to confirm.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
