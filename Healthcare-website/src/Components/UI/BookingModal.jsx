import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-health-dark/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-health p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Book a Health Professional</h3>
            <p className="text-blue-100 text-sm">Takes less than 2 minutes</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white text-2xl">×</button>
        </div>

        {/* Modal Body */}
        <form className="p-8 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Select Service</label>
            <select className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health outline-none transition">
              <option>Home Nursing</option>
              <option>Elderly Care</option>
              <option>Physical Therapy</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Date</label>
              <input type="date" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Time</label>
              <input type="time" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-health outline-none" />
          </div>

          {/* Action Button - Using Action Orange */}
          <button 
            type="submit" 
            className="w-full bg-action hover:bg-action-hover text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
          >
            Confirm Booking
          </button>
          
          <p className="text-center text-xs text-slate-400">
            No payment required today. We will call to confirm.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;