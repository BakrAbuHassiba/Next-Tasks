"use client"; 

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
