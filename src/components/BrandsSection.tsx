"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Brand {
  name: string;
  image: string;
}

const brands: Brand[] = [
  { name: "Ferrari Repair", image: "/ferrari.webp" },
  { name: "Porsche Repair", image: "/porsche.webp" },
  { name: "Lamborghini Repair", image: "/lambo.webp" },
  { name: "Rolls Royce Repair", image: "/rolls.webp" },
  { name: "Audi Repair", image: "/audi.webp" },
  { name: "Bentley Repair", image: "/bently.jpg" },
  { name: "Aston Martin Repair", image: "/Astorn martin.webp" },
  { name: "All Brands", image: "/all.webp" },
];

// ✅ Motion Variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 },
  },
};

const BrandsSection: FC = () => {
  return (
    <section className="py-14 px-6 md:px-12 bg-white text-center">
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      >
        Every Brands we Service & Repairs
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            variants={cardVariant}
            whileHover="hover"
            className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center hover:bg-white transition"
          >
            <div className="w-28 h-20 relative">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-sm md:text-base font-semibold text-gray-800">
              {brand.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BrandsSection;
