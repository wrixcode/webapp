// src/components/ServicesSection.jsx
import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaServer, FaPaintBrush } from 'react-icons/fa';

function Services() {
  return (
    <section className="bg-[#101125] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Our Services
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 px-4">
          We provide a range of services to help you establish and grow your online presence. From design to development, we are here to bring your digital vision to life.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Web Development Service */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <FaLaptopCode className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-400">
            Custom, scalable websites that enhance user experience and drive engagement. Our web development services ensure high performance and reliability.
          </p>
        </div>

        {/* Mobile Development Service */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <FaMobileAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
          <p className="text-gray-400">
            Responsive and optimized mobile applications designed for both Android and iOS, enabling you to reach users on any device.
          </p>
        </div>

        {/* SEO & Marketing Service */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <FaSearch className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">SEO & Marketing</h3>
          <p className="text-gray-400">
            Effective SEO and digital marketing strategies to enhance visibility and drive organic traffic, ensuring your business reaches its target audience.
          </p>
        </div>

        {/* Backend Development Service */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <FaServer className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
          <p className="text-gray-400">
            Secure, scalable, and reliable backend solutions to support your digital products and provide seamless data management and API integrations.
          </p>
        </div>

        {/* UI/UX Design Service */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <FaPaintBrush className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
          <p className="text-gray-400">
            Crafting intuitive and aesthetically pleasing interfaces to ensure user satisfaction and engagement, turning visitors into loyal customers.
          </p>
        </div>

        {/* Custom Solutions Service */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <FaLaptopCode className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
          <p className="text-gray-400">
            Tailor-made solutions designed to meet the unique needs of your business, from integrations to complete custom-built applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
