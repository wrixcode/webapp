// src/components/AboutSection.jsx
import React from 'react';

function About() {
  return (
    <section className="bg-[#101125] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Us
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          We are a team of dedicated developers, designers, and strategists who are passionate about building 
          innovative web solutions. With years of experience in the industry, we empower businesses to achieve 
          their goals through custom-built, responsive, and scalable websites.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-400">
            Our mission is to bring ideas to life by creating stunning web applications that deliver 
            outstanding user experiences. We believe in using technology to solve real-world problems 
            and enhance digital interactions.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-400">
            We envision a future where businesses of all sizes can leverage the power of the web 
            to connect with customers and grow in meaningful ways. Our team is committed to helping 
            you navigate the digital landscape with cutting-edge solutions.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
          <p className="text-gray-400">
            We’re not just developers; we’re partners in your digital journey. From concept to launch, 
            we work closely with you to ensure every detail aligns with your vision. With a focus on 
            innovation, responsiveness, and scalability, we aim to make your online presence a powerful 
            tool for growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
