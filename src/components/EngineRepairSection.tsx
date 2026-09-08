"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

type EngineRepairSectionProps = {
  title: string;
  description1: string;
  description2: string;
  image: string;
  services: string[];
};

export default function EngineRepairSection({
  title,
  description1,
  description2,
  image,
  services
}: EngineRepairSectionProps) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={800}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600">{description1}</p>
          <p className="text-gray-600">{description2}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 pt-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-red-600 text-xl">»</span>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
