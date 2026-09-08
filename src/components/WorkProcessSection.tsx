"use client";

import { motion } from "framer-motion";
import { Truck, Wrench, UserCheck, Car } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <UserCheck className="w-12 h-12 text-red-600" />,
    title: "BOOK A SERVICE",
    desc: "Call us for booking & free inspection.",
  },
  {
    id: "02",
    icon: <Truck className="w-12 h-12 text-red-600" />,
    title: "FREE PICKUP",
    desc: "We pick up your car from your home, office or shopping mall.",
  },
  {
    id: "03",
    icon: <Wrench className="w-12 h-12 text-red-600" />,
    title: "REPAIR & FIX",
    desc: "We repair your car, perform road test & quality control.",
  },
  {
    id: "04",
    icon: <Car className="w-12 h-12 text-red-600" />,
    title: "DELIVER BACK",
    desc: "We wash the car, clean from inside & deliver it back to you!",
  },
];

export default function WorkProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-sm text-gray-600 uppercase tracking-wider">
          Process
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our Work Process
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-5xl font-extrabold text-gray-200">{step.id}</h3>
            <h4 className="text-lg font-semibold text-gray-900 mt-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
