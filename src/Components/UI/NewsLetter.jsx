import React from "react";

const NewsLetter = () => {
  return (
    <div id="newsletter" className="bg-health-pink py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
        Stay Informed. Stay Healthy.
      </h2>
      <p className="text-white text-sm md:text-base mb-6 max-w-lg">
        Get the latest health tips and updates delivered straight to your inbox.
      </p>

      <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="grow border-2 rounded-full border-health-orange px-4 py-3 focus:outline-none focus:ring-2 focus:ring-health-pink"
          required
        />
        <button
          type="submit"
          className="bg-health-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>

      <p className="text-white text-xs mt-4">
        By subscribing, you agree to our privacy policy and terms.
      </p>
    </div>
  );
};

export default NewsLetter;
