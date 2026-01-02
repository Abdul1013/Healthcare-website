import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full min-h-[92vh] bg-linear-to-r from-green-500 to-blue-600 flex items-center px-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            GET INSTANT HOME <br />
            HEALTH CARE <br />
            SERVICES FROM TOP <br />
            PROFESSIONALS
          </h1>
        </div>

        <div className="flex gap-6">
          <Button
            text="Subscribe"
            className="bg-red-400 hover:bg-red-500 text-white"
          />

          <Button
            text="Get Started"
            className="bg-red-400 hover:bg-red-500 text-white"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
