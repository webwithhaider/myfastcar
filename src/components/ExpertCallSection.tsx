"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function ExpertCallSection({
  title,
  phoneNumber,
  backgroundImage,
}: ExpertCallSectionProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <motion.a
          href={`tel:${phoneNumber}`}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg font-medium shadow-lg transition"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </motion.a>
      </div>
    </section>
  );
}
interface ExpertCallSectionProps {
  title: string;
  phoneNumber: string;
  backgroundImage: string;
}