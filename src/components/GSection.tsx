"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GearboxSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <Image
            src="/mnt/data/Screenshot_4.png"   // Your uploaded image path
            alt="Gearbox Repair"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            My Fast Car  Auto Care Offer Best <br />
            <span className="text-red-600">Transmission / Gearbox Repair Service in Dubai</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            My Fast Car Auto Care provides high quality Transmission and Gearbox Repair Service in Dubai.
            We specialize in gearbox inspection, automatic & manual gearbox repair, gearbox rebuilding,
            gearbox oil changes, overheating issues, gearbox noise repair and more.
          </motion.p>

          {/* TAGS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="flex flex-wrap gap-3"
          >
            {[
              "New Gearbox", "Gearbox", "Transmission Rebuild", "Valve Body Assemblies",
              "Gearbox Parts", "Diagnostic Checks", "Torque Converter",
              "Automatic Transmissions", "Transmission Oil & Fluids",
              "Clutches", "Gearbox Repair Dubai"
            ].map((item, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
                className="px-4 py-2 bg-red-600 text-white text-sm rounded-full shadow-sm cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CALL BUTTON */}
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            href="tel:+9710000000"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium hover:bg-red-700 transition"
          >
            📞 Call Service Advisor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
