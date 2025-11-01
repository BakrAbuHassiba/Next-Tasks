import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-red-600">Contact Us</h1>

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-red-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-red-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-red-500"
        />

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
