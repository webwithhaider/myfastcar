"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  highlight: string;
  description: string;
  phone: string;
  buttonText: string;
  image: string;
}

export default function GearboxHero({
  title,
  highlight,
  description,
  phone,
  buttonText,
  image,
}: HeroProps) {
  return (
    <section className="w-full bg-gradient-to-r from-black via-black to-[#c0164f] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            {title} <br />
            <span className="text-pink-400">“{highlight}”</span>
          </h1>

          <p className="text-lg opacity-90">{description}</p>

          <motion.a
            href={`tel:${phone}`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
          >
            <span className="text-2xl">📞</span> {buttonText}
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src={image}
            alt="Hero Image"
            width={900}
            height={500}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
