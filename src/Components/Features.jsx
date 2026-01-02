import React from 'react'

const FeatureItem = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-24 h-24 rounded-full bg-green-500 border-4 border-yellow-300 flex items-center justify-center text-white text-3xl">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-700 max-w-37.5">
        {title}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="w-full bg-blue-100 py-14">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16">

        <FeatureItem
          icon=""
          title="Verified care provider"
        />

        <FeatureItem
          icon=""
          title="Over 3 years of experience"
        />

        <FeatureItem
          icon=""
          title="100% satisfaction rate"
        />

        <FeatureItem
          icon=""
          title="Quick satisfaction rate"
        />

      </div>
    </section>
  );
};

export default Features;

