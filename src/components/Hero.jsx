"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* 🔹 Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgfirst.jpg" // Replace with your background image
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      {/* 🔹 Content Wrapper */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* 🔸 Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            My Fast Car
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mt-3">
            AUTO CARE
          </h2>
          <p className="mt-5 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
            Premium detailing & auto care services in Dubai.
          </p>
        </motion.div>

        {/* 🔸 Right Car Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl flex justify-center"
        >
          <Image
            src="/car.png" // Replace with your car image
            alt="Car"
            width={800}
            height={600}
            priority
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </div>

      {/* 🔹 Floating Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
      >
        <a
          href="tel:+971 58 177 5588"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-xl text-black hover:scale-110 transition"
        >
          📞
        </a>

        <a
          href="https://wa.me/+971 58 177 5588"
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl text-white hover:scale-110 transition"
        >
          💬
        </a>
      </motion.div>
    </section>
  );
}
