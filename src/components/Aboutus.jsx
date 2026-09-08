"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ==== LEFT CONTENT ==== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-red-500 font-semibold tracking-wide">About Us</h4>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              Welcome to My Fast Car Garage:
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We are glad to be a leading Auto Garage Dubai. We deal in every luxury car
              and fulfill all your requirements for the cars. Small things make significant
              changes same goes for the vehicle; if the small wear and tear are done timely
              and well-maintained, it helps consistency in the vehicle’s performance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We deal in Luxury cars, American & German car brands like 
              <span className="text-red-600 font-semibold"> Lamborghini</span>,
              <span className="text-red-600 font-semibold"> Ferrari</span>,
              <span className="text-red-600 font-semibold"> Mercedes</span>,
              <span className="text-red-600 font-semibold"> Rolls Royce</span>, etc.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We facilitate Car Repair Dubai Service in compliance with the client’s
              feasibility. Every day, we start with a clear goal in mind and strive to
              deliver quality services to our valued customers.
            </p>

            <p className="text-gray-700 leading-relaxed">
              My Fast Car Workshop Dubai has the best qualified and experienced auto repair
              technicians. They provide all valuable services at a reputable Luxury Car
              Repair Dubai.
            </p>

            <a
              href="tel:+971 58 177 5588"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-full font-semibold transition"
            >
              Call Experts
            </a>
          </motion.div>

          {/* ==== RIGHT IMAGE ==== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/garage.jpeg"   // change path to your image
                alt="Luxury Cars in Protone Garage Dubai"
                width={900}
                height={600}
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
