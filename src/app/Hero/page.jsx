// src/components/HeroSection.jsx
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <section className="bg-[#101125]  text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Transforming Your Business Ideas <span className="text-blue-500">into Digital Success</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          We specialize in creating beautiful, responsive, and user-friendly web solutions that elevate your business.
          Let us build something incredible together.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="Services"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium text-lg transition duration-300"
          >
            Our Services
          </Link>
          <Link
            href="Contact"
            className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-3 px-8 rounded-lg font-medium text-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
