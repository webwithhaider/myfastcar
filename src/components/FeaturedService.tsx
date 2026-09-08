"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  PhoneCall,
  Car,
  ClipboardList,
  LogOut,
  MapPin,
  Wrench,
  Headphones,
} from "lucide-react";

const services = [
  { icon: Car, label: "Car Diagnostics" },
  { icon: ClipboardList, label: "Service Progress" },
  { icon: LogOut, label: "Service Log" },
  { icon: MapPin, label: "Live Tracking" },
  { icon: Wrench, label: "Pick Up/Drop Off" },
  { icon: Headphones, label: "Online Support" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const FeaturedService: FC = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ✅ Left Image */}
        <motion.div
          className="flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ✅ Fixed Image (added width & height) */}
          <Image
            src="/gwagon.jpeg" // make sure this file is inside /public
            alt="Featured Car"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

        {/* ✅ Right Content */}
        <motion.div
          className="text-center md:text-left space-y-6"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase">
              Featured Service
            </h3>
            <motion.div
              className="w-16 h-0.5 bg-pink-600 mt-1 mb-3 mx-auto md:mx-0"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8 }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Why Choose Protone Car
              <br />
              Garage Dubai
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              High Customer Satisfaction
            </p>
          </div>

          {/* ✅ Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="bg-gray-900 text-white rounded-xl py-6 flex flex-col items-center justify-center hover:bg-pink-700 transition"
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Icon className="w-8 h-8 mb-2" />
                <p className="font-semibold text-sm text-center">{label}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="mt-4 bg-pink-700 text-white font-semibold px-6 py-3 rounded-md flex items-center justify-center mx-auto md:mx-0 hover:bg-pink-800 transition w-fit"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Contact us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedService;