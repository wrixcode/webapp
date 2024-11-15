'use client'
// src/components/ContactUs.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <section className="bg-[#101125] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 px-4">
          Have a question? Our team is ready to help.
        </p>
      </div>

      
      {/* Contact Information */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-400">wrixcode@gmail.com</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-400">+91 8129780845</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-400">Kondotty,malappuram</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400">Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

    
    </section>
  );
}

export default Contact;
