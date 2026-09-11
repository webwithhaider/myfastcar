"use client";

import { motion } from "framer-motion";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function GearboxServices() {
  const services = [
    {
      title: "Gearbox / Auto Transmission Repair",
      desc: `Are you having a tough time with your transmission system? From Manual Transmission Fluid Change to Automatic Transmission Slip Repair and everything in between, My Fast Car Auto Care Services is All You Need!`,
    },
    {
      title: "Gearbox / Auto Transmission Rebuild",
      desc: `Are you on the lookout for a reliable Transmission Rebuild Service in Dubai? Call out the Experts at My Fast Car Auto Care Services and transfer maximum engine power to the wheels for optimal acceleration!`,
    },
    {
      title: "Differential Repair & Rebuild Service",
      desc: `Is your vehicle skidding on sharp turns? You may have a damaged differential. Our expert technicians can repair or rebuild your differential to restore performance.`,
    },
    {
      title: "Clutch Repair / Replacement Service",
      desc: `Is your clutch slipping or unresponsive? Bring your vehicle for full clutch repair & replacement service ensuring smooth transmission performance.`,
    },
    {
      title: "Gearbox Oil Change Service",
      desc: `If your vehicle’s transmission is slow to respond or has sudden acceleration changes, get a professional gearbox oil replacement for smooth driving.`,
    },
    {
      title: "Gearbox / Car Transmission Repair Services in Dubai",
      desc: `Gears, bearings, and internal components wear out over time. Our complete gearbox repair can restore full performance and reliability.`,
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold mb-12"
        >
          What we Offers in Gearbox Repair Service
        </motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
