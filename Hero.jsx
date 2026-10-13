import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-blue-50 py-16 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Build Something <span className="text-blue-600">Awesome</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple React JS website created using reusable React components and Tailwind CSS, featuring real-time BMKG Earthquake data.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#features"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Lihat Info Gempa
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;