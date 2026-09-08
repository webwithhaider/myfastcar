"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "Jaguar", logo: "/jaguar.svg" },
  { name: "Ferrari", logo: "/Ferrari.svg" },
  { name: "Bentley", logo: "/bentley.svg" },
  { name: "Buggati", logo: "/Bugatti.svg" },
  { name: "Audi", logo: "/audi.svg" },
];

const cars = [
  "/cars/car1.jpg",
  "/cars/car2.jpg",
  "/cars/car3.jpg",
  "/cars/car4.jpg",
  "/cars/car5.jpg",
];

export default function BrandsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -250 : 250;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full py-14 bg-white">
      {/* --- TOP BRAND CAROUSEL --- */}
      <div className="bg-[#d90432] py-10 relative overflow-hidden">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          Brands we Served
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        {/* Brand Logo Row */}
        <div
          ref={scrollRef}
          className="flex gap-10 md:gap-20 px-4 md:px-8 overflow-x-auto no-scrollbar"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[140px] flex flex-col items-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={80}
                height={80}
                className="object-contain"
                priority={i < 2} // boosts LCP
              />
              <span className="text-white text-sm md:text-lg mt-2 font-medium">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      {/* --- BOTTOM CAR IMAGES GRID --- */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-4 md:px-10">
        {cars.map((car, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={car}
              alt="Car"
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
