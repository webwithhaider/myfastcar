"use client";

import React, { FC } from "react";
import Link from "next/link";

const ServiceOfferSection: FC = () => {
  const minorServices: string[] = [
    "Engine oil service with oil filter",
    "Replacement factory recommended oil fully synthetic",
    "Fully conducted safety inspection",
    "All lubricants top up",
    "All tyres checkup and pressure inflation",
    "Brake pads condition checkup",
    "Computerized health checkup and service reset",
    "All filters blow up (air filter ac filter)",
    "All lights and bulbs checkup",
    "Vehicle wash & clean",
    "What is included in Minor Vehicle Service",
  ];

  const fullServices: string[] = [
    "Engine oil service with oil filter",
    "Replacement factory recommended oil fully synthetic",
    "Fully conducted safety inspection",
    "Brake system service",
    "Front and rear brake calipers greasing",
    "Parking brake adjustment",
    "Spark Plugs cleaning",
    "Air filter blows up",
    "Computerized service reset and calibration",
    "Wheels alignment",
    "Tyres rotation",
    "Vehicle wash & clean",
  ];

  const majorServices: string[] = [
    "Engine oil service with oil filter",
    "Replacement factory recommended oil fully synthetic",
    "Fully conducted safety inspection",
    "Brake system service",
    "Front and rear disc router skimming",
    "All lights and bulbs checkup",
    "Wheel alignment",
    "Air filter replacement",
    "AC cabin filter replacement",
    "Spark plugs replacement",
    "Fuel injectors flushing",
    "Complete engine tuning",
    "Automatic transmission fluid replacement",
    "Front and rear differential fluid replacement",
    "4x4 transfer case fluid replacement",
    "Power steering fluid replacement",
    "Vehicle wash & clean",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
        My Fast Car Care Special Offer
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {/* Minor Service */}
        <div className="bg-white border-t-8 border-red-600 shadow-xl rounded-2xl p-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-center mb-4 text-red-600">
            MINOR SERVICE
          </h3>
          <p className="text-sm text-gray-500 text-center mb-2">
            (After every 10,000 KM running of vehicle)
          </p>
          <div className="text-center mb-6 text-gray-800 font-medium">
            <p>4 CYLINDER 349 AED</p>
            <p>6 CYLINDER 449 AED</p>
            <p>8 CYLINDER 549 AED</p>
          </div>

          <ul className="space-y-2 flex-1 text-gray-700">
            {minorServices.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-center"
          >
            📞 Book Now
          </Link>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Additional job will be added. VAT is included in above mentioned
            prices.
          </p>
        </div>

        {/* Full Service */}
        <div className="bg-white border-t-8 border-black shadow-xl rounded-2xl p-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-center mb-4 text-black">
            FULL SERVICE
          </h3>
          <p className="text-sm text-gray-500 text-center mb-2">
            (After every 40,000 KM running of vehicle)
          </p>
          <div className="text-center mb-6 text-gray-800 font-medium">
            <p>4 CYLINDER 549 AED</p>
            <p>6 CYLINDER 749 AED</p>
            <p>8 CYLINDER 999 AED</p>
          </div>

          <ul className="space-y-2 flex-1 text-gray-700">
            {fullServices.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span> {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-center"
          >
            📞 Book Now
          </Link>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Additional job will be added. VAT is included in above mentioned
            prices.
          </p>
        </div>

        {/* Major Service */}
        <div className="bg-white border-t-8 border-red-600 shadow-xl rounded-2xl p-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-center mb-4 text-red-600">
            MAJOR SERVICE
          </h3>
          <p className="text-sm text-gray-500 text-center mb-2">
            (After every 80,000 KM running of vehicle)
          </p>
          <div className="text-center mb-6 text-gray-800 font-medium">
            <p>4 CYLINDER 1699 AED</p>
            <p>6 CYLINDER 2299 AED</p>
            <p>8 CYLINDER 2999 AED</p>
          </div>

          <ul className="space-y-2 flex-1 text-gray-700">
            {majorServices.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-center"
          >
            📞 Book Now
          </Link>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Additional job will be added. VAT is included in above mentioned
            prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferSection;