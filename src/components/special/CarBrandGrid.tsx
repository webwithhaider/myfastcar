"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CarBrand {
  name: string;
  logo: string;
  link: string;
}

const carBrands: CarBrand[] = [
  { name: "Audi Repair", logo: "/brands/audi.png", link: "/audi-repair" },
  { name: "BMW Repair", logo: "/brands/bmw.png", link: "/bmw-repair" },
  { name: "Mercedes Repair", logo: "/brands/mercedes.png", link: "/mercedes-repair" },
  { name: "Lamborghini Repair", logo: "/brands/lamborghini.png", link: "/lamborghini-repair" },

  { name: "GMC Repair", logo: "/brands/gmc.png", link: "/gmc-repair" },
  { name: "Hyundai Repair", logo: "/brands/hyundai.png", link: "/hyundai-repair" },
  { name: "Rolls Royce Repair", logo: "/brands/rollsroyce.png", link: "/rolls-royce-repair" },
  { name: "Bentley Repair", logo: "/brands/bentley.png", link: "/bentley-repair" },
];

export default function CarBrandGrid() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Car Brands We Repair
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carBrands.map((brand, index) => (
            <motion.a
              key={index}
              href={brand.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center transition-all"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </motion.div>

              <p className="mt-4 text-lg font-semibold text-black underline hover:text-red-600 transition-colors">
                {brand.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
