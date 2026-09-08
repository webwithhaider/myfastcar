"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are committed to providing the best services and building strong
              relationships with our clients.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-blue-500 outline-none"
                required
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-blue-500 outline-none"
                required
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-blue-500 outline-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: myfastcarm@gmail.com</li>
              <li>Phone: +971 58 177 5588</li>
              <li>Address: Ras Al Khor Ind. Second - Ras Al Khor Industrial Area 2 - Dubai - United Arab Emirates</li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
