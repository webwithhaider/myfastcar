"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Blog {
  title: string;
  image: string;
}

const blogPosts: Blog[] = [
  {
    title: "Top Bentley Services in UAE You Can Trust",
    image: "/Bentley-ppf.jpg",
  },
  {
    title: "Dodge Challenger Brakes and Suspension Works",
    image: "/Dodgerepair.jpeg",
  },
  {
    title: "Jetour T2 Painting & Denting Service in Dubai",
    image: "/rolls.jpeg",
  },
  {
    title: "Luxury Car Ceramic Coating Experts in Dubai",
    image: "/ceramic.jpeg",
  },
];

export default function LatestBlogs() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      slides: {
        perView: 3,
        spacing: 24,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(max-width: 640px)": {
          slides: { perView: 1, spacing: 12 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3500);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-gray-900"
      >
        Latest Blogs
      </motion.h2>

      <div className="relative mt-16 px-6 md:px-12 lg:px-20">
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {blogPosts.map((blog, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-80 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
                <h3 className="absolute bottom-6 left-6 right-6 text-lg md:text-xl font-semibold text-white leading-snug">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => instanceRef.current?.prev()}
            className="pointer-events-auto bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-black transition"
          >
            ❮
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => instanceRef.current?.next()}
            className="pointer-events-auto bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-black transition"
          >
            ❯
          </motion.button>
        </div>
      </div>
    </section>
  );
}
