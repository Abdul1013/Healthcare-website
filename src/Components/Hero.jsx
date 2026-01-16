import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div id="hero" className="w-full min-h-[92vh] bg-cover bg-center flex items-center px-10 animate-fade-in relative" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="max-w-xl animate-slide-up">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            GET INSTANT HOME <br />
            HEALTH CARE <br />
            SERVICES FROM TOP <br />
            PROFESSIONALS
          </h1>
          <p className="text-white mt-4 text-lg">
            Trusted healthcare at your doorstep. Book now for personalized care.
          </p>
        </div>

        <div className="flex gap-6 animate-slide-up">
          <Button
            text="Subscribe"
            className="bg-health-pink hover:bg-pink-500 text-white transform hover:scale-105 transition-transform"
          />

          <Button
            text="Get Started"
            className="bg-health-orange hover:bg-orange-500 text-white transform hover:scale-105 transition-transform"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
