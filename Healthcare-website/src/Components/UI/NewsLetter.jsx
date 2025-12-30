  import React from "react";

  const NewsLetter = () => {
    return(

  
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

        )
  }