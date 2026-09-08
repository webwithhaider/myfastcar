"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

type ServiceItem = {
  title: string;
  icon: string; // SVG icon from public folder
};

const services: ServiceItem[] = [
  { title: "General Repair", icon: "/icons/general.svg" },
  { title: "Auto Body Shop", icon: "/icons/body.svg" },
  { title: "Brakes Service", icon: "/icons/brake.svg" },
  { title: "Auto Spa Service", icon: "/icons/spa.svg" },
  { title: "AC Service", icon: "/icons/ac.svg" },
  { title: "Engine Repair", icon: "/icons/engine.svg" },
  { title: "Tyres Shop", icon: "/icons/tyre.svg" },
  { title: "Oil Change", icon: "/icons/oil.svg" },
  { title: "Steering Repair", icon: "/icons/steering.svg" },
  { title: "Gearbox Repair", icon: "/icons/gearbox.svg" },
  { title: "Car Inspection", icon: "/icons/inspection.svg" },
  { title: "Injectors Repair", icon: "/icons/injector.svg" },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SMain2() {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Our Services
        </h2>

        {/* Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-between hover:shadow-lg duration-300 cursor-pointer"
            >
              {/* Icon */}
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-4">
                {service.title}
              </h3>

              {/* View Detail Button */}
              <div className="flex items-center text-pink-600 font-medium">
                View Detail <FiArrowRight className="ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
