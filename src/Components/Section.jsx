import React from 'react'

const Section = () => {
  return (
    <section className="w-full bg-health-pink py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
          Why Choose Our Home Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 animate-slide-up">
            <div className="w-16 h-16 bg-health-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Professionals</h3>
            <p className="text-gray-600">
              Our certified healthcare providers bring years of experience and compassion to every visit.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 animate-slide-up">
            <div className="w-16 h-16 bg-health-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Convenient Scheduling</h3>
            <p className="text-gray-600">
              Book appointments at your convenience with our easy-to-use online system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 animate-slide-up">
            <div className="w-16 h-16 bg-health-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Care</h3>
            <p className="text-gray-600">
              Tailored healthcare solutions designed specifically for your unique needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
