import React from 'react';

const CareersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center m-4 ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-health-green text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-health-green">Careers Application</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label htmlFor="position" className="block text-sm font-medium mb-1">Position</label>
            <select
              id="position"
              name="position"
              defaultValue=""
              required
              className="w-full border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-health-green focus:border-health-green"
            >
              <option value="" disabled>Select a position…</option>
              <option value="cna">CNA — Certified Nursing Assistant</option>
              <option value="dsp">DSP — Direct Support Professional</option>
              <option value="nurse">Nurse (RN / LPN)</option>
              <option value="qidp">QIDP — Qualified Intellectual Disabilities Professional</option>
              <option value="janitor">Janitor</option>
              <option value="receptionist">Receptionist</option>
            </select>
          </div>
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
