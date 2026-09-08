"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SMain1() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/E1.webp"   // 👈 put your image in public folder and rename
        alt="Car Engine"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug"
        >
          Protone Auto Care : Best car repair and <br className="hidden sm:block" />
          service center in dubai
        </motion.h1>
      </div>
    </section>
  );
}
