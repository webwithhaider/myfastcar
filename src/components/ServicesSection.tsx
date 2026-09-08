"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Car Battery Replacement",
      icon: "/battery.png",
      desc: "Computerized battery tests Auto battery services Battery cable tests Electrical check",
    },
    {
      title: "Car Oil Change",
      icon: "/oil.png",
      desc: "Premium oil change Oil filter change Oil flushing 360-degree health check",
    },
    {
      title: "Car Service Dubai",
      icon: "/service2.png",
      desc: "Mechanical repairs Electrical repairs 360-degree health check Car diagnostics",
    },
    {
      title: "Car Engine Repair",
      icon: "/repair2.png",
      desc: "Engine tuning Engine detailing Engine diagnosis Complete engine overhaul",
    },
    {
      title: "Transmission Repair",
      icon: "/gears.png",
      desc: "Basic service Full service Major service Car Garage Dubai",
    },
    {
      title: "Car AC Repair",
      icon: "/goal.png",
      desc: "AC diagnostics AC leak test AC gas refill AC compressor repair AC system flushing",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h4 className="text-red-600 font-semibold underline underline-offset-4">
          Services
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Services we offer
        </h2>
      </div>

      {/* GRID OF CARDS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition cursor-pointer"
          >
            <div className="mb-4 flex justify-center">
              <Image src={service.icon} alt={service.title} width={45} height={45} />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-center">{service.title}</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed">{service.desc}</p>

            <p className="mt-5 text-red-600 font-semibold text-center flex justify-center items-center gap-2 hover:text-red-700">
              View Detail ➜
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer button */}
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2"
        >
          ✖ View all Services
        </a>
      </div>
    </section>
  );
}
