"use client";

import { motion } from "framer-motion";

export default function ServicesSection2() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
        >
          Cost-effective alternative to dealership service contracts – maintain
          your car with confidence through our recommended service packages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          Keep your car in optimal condition with regular maintenance through
          our comprehensive service contracts and packages. My Fast Car Care
          offers tailored service packages for all American, German, European,
          exotic, luxury, and classic cars in Dubai, ensuring top-quality
          periodic maintenance that meets the highest standards.
        </motion.p>
      </div>
    </section>
  );
}
