"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (err: unknown) {
      setStatus("error");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get a free Consultation
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Items... (same as before) */}
            <ContactItem
              icon={<Phone className="text-white" size={28} />}
              title="Call now"
              text="+971 58 177 5588"
            />

            <ContactItem
              icon={<MessageCircle className="text-white" size={28} />}
              title="Whatsapp"
              text="+971 58 177 5588"
            />

            <ContactItem
              icon={<Mail className="text-white" size={28} />}
              title="Email us"
              text="myfastcarm@gmail.com"
            />

            <ContactItem
              icon={<MapPin className="text-white" size={28} />}
              title="Address"
              text="Ras Al Khor Ind. Second - Ras Al Khor Industrial Area 2 - Dubai - United Arab Emirates"
            />
          </motion.div>

          {/* RIGHT SECTION (FORM) - FIXED */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-300 p-8 rounded-xl space-y-6 shadow-md"
          >
            {/* Name + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full p-4 rounded-lg focus:outline-none bg-white"
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg focus:outline-none bg-white"
              />
            </div>

            <Input
              label="Email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg focus:outline-none bg-white"
            />

            {/* Message */}
            <div className="space-y-2">
              <label className="font-semibold">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white focus:outline-none"
              />
            </div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              transition={{ duration: 0.2 }}
              className="bg-pink-700 text-white py-3 px-10 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">
                Something went wrong. Try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// ------------------ Sub Components ------------------

interface ContactProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function ContactItem({ icon, title, text }: ContactProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 flex items-center justify-center bg-pink-700 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  name,
  placeholder,
  className,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="font-semibold">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className || "w-full p-4 rounded-lg focus:outline-none"}
      />
    </div>
  );
}