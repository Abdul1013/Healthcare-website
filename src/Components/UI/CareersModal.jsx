import React from 'react';

const CareersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center m-4 ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-health-pink text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-health-pink">Careers Application</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          {/* <div>
            <label className="block text-sm font-medium mb-1">Resume (URL)</label>
            <input type="url" className="w-full border rounded px-3 py-2" required />
          </div> */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows="3" required></textarea>
          </div>
          <button type="submit" className="bg-health-green text-white px-4 py-2 rounded hover:bg-green-600 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CareersModal;
