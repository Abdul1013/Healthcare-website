import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of home healthcare services including home care and elderly care."
  },
  {
    question: "How do I book a service?",
    answer: "You can book a service through our website by clicking the 'Get Started' button or by contacting us directly."
  },
  {
    question: "Are your healthcare professionals certified?",
    answer: "Yes, all our healthcare professionals are certified and have undergone thorough background checks."
  },
  {
    question: "Can I request urgent care?",
    answer: "Yes, we offer urgent care services. Please contact us directly for immediate assistance."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team via the contact form, email, or phone number provided in the Contact Us section."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-16 bg-health-green bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg bg-white shadow-sm">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center text-lg font-medium text-gray-800 hover:text-health-pink transition"
                onClick={() => toggleFAQ(idx)}
              >
                {faq.question}
                <span className="ml-4 text-health-pink">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
