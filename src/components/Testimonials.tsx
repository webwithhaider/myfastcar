"use client";

import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  monthsAgo: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Stefano Salzano",
    review: "Very good experience at Protone Auto Care. The team performed the car service excellently...",
    rating: 5,
    monthsAgo: "6 months ago",
    avatar: "/avatars/1.png"
  },
  {
    name: "Malik Farhan",
    review: "Good service",
    rating: 5,
    monthsAgo: "7 months ago",
    avatar: "/avatars/2.png"
  },
  {
    name: "Dalia Henderson",
    review: "Very pleased with the service, great team...",
    rating: 5,
    monthsAgo: "8 months ago",
    avatar: "/avatars/3.png"
  }
];

export default function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 24 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 16 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 12 } },
    }
  });

  return (
    <section className="py-20 bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-gray-600 tracking-widest uppercase">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold mt-2">What Our Client Says</h2>
        <motion.div
          className="h-1 w-28 bg-red-500 mx-auto mt-3"
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <div className="mt-14 relative">
        <div ref={sliderRef} className="keen-slider px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide rounded-3xl p-6 bg-gray-50 shadow-lg border hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={55}
                  height={55}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="opacity-60 text-sm">{testimonial.monthsAgo}</p>
                </div>
                <Image src="/google.png" alt="Google" width={20} height={20} />
              </div>

              <div className="flex gap-1 mt-3 text-yellow-400 text-xl">
                {"⭐".repeat(testimonial.rating)}
              </div>

              <p className="mt-4 text-gray-700 line-clamp-3">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-6 bg-white shadow-lg p-3 rounded-full"
        >
          ➤
        </button>
      </div>

      {/* Verified badge */}
      <div className="mt-8 text-center">
        <Image src="/trustbadge.png" alt="verified" width={180} height={40} />
      </div>
    </section>
  );
}
 