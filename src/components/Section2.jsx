"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section2() {
  const services = [
    { title: "Car Inspection", icon: "/carinspect.webp" },
    { title: "Car Wrapping", icon: "/car2.webp" },
    { title: "Minor & Major Service", icon: "/major.webp" },
    { title: "Auto Body Shop", icon: "/Auto.webp" },
    { title: "Service Contract", icon: "/service.webp" },
    { title: "Road Side Assistance", icon: "/road.webp" },
    { title: "Car Repair Service", icon: "/repair.webp" },
    { title: "Auto Spa Service", icon: "/spa.webp" },
    { title: "Car Upholstery", icon: "/seat.webp" },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#E40054]">
            My Fast Car
          </h1>

          <h2 className="mt-4 text-3xl font-extrabold">
            Best Car Garage Dubai
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg leading-relaxed">
            We will inspect your car for free, ensuring that we identify any
            issues accurately. Our expert car repair services guarantee your
            vehicle receives the best care possible, keeping it running smoothly
            and efficiently.
          </p>

          <button className="mt-8 bg-[#E40054] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c90048] transition flex items-center gap-2 w-fit">
            📞 Call Now
          </button>
        </motion.div>

        {/* RIGHT SIDE - SERVICES GRID */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-xl transition cursor-pointer"
            >
                <Image
  src={service.icon}
  alt={service.title}
  width={48}
  height={48}
  priority={false}
/>

              <p className="font-semibold text-center">{service.title}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
