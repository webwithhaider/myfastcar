"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white text-black shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            width={80}
            height={80}
            alt="Logo"
            className="w-20 h-20 object-cover cursor-pointer"
          />
        </Link>

        {/* Desktop Nav (now only visible on >= 1024px) */}
        <nav className="hidden lg:flex space-x-10 font-semibold text-lg items-center">

          <Link href="/" className="hover:text-pink-600">Home</Link>

          {/* Specialize In */}
          <div className="relative group cursor-pointer">
            <Link href="/specialize" className="flex items-center gap-1 hover:text-pink-600">
              Specialize In <ChevronDown size={18} />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-44 py-2 z-30">
              <Link href="/engine" className="block px-4 py-2 hover:bg-gray-100">Engine</Link>
              <Link href="/transmission" className="block px-4 py-2 hover:bg-gray-100">Transmission</Link>
              <Link href="/diagnostics" className="block px-4 py-2 hover:bg-gray-100">Diagnostics</Link>
            </div>
          </div>

          {/* Services */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-pink-600">
              Services <ChevronDown size={19} />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-44 py-2 z-30">
              <Link href="/services/car-engine-repair" className="block px-4 py-2 hover:bg-gray-100">Car Engine Repair</Link>
              <Link href="/services/car-detailing" className="block px-4 py-2 hover:bg-gray-100">Car Detailing Service</Link>
              <Link href="/inspection" className="block px-4 py-2 hover:bg-gray-100">Inspection</Link>
            </div>
          </div>

          <Link href="/gearbox" className="hover:text-pink-600">Gearbox Repair</Link>
          <Link href="/servicescontract" className="hover:text-pink-600">Service Contract</Link>
          <Link href="/contact" className="hover:text-pink-600">Contact Us</Link>
          <Link href="/blogs" className="hover:text-pink-600">Blogs</Link>
        </nav>

        {/* Mobile Menu Button (now visible below 1024px) */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow px-4 pb-4 space-y-3 text-lg font-medium animate-slideDown">

          <Link href="/" onClick={() => setIsOpen(false)} className="block">Home</Link>

          {/* Services */}
          <button
            onClick={() => toggleDropdown("services")}
            className="flex justify-between w-full py-2"
          >
            Services <ChevronDown />
          </button>
          {openDropdown === "services" && (
            <div className="ml-4 space-y-2">
              <Link href="/services/car-engine-repair" onClick={() => setIsOpen(false)}>Car Engine Repair</Link>
              <Link href="/maintenance" onClick={() => setIsOpen(false)}>Maintenance</Link>
              <Link href="/inspection" onClick={() => setIsOpen(false)}>Inspection</Link>
            </div>
          )}

          {/* Specialize In */}
          <button
            onClick={() => toggleDropdown("specialize")}
            className="flex justify-between w-full py-2"
          >
            Specialize In <ChevronDown />
          </button>
          {openDropdown === "specialize" && (
            <div className="ml-4 space-y-2">
              <Link href="/engine" onClick={() => setIsOpen(false)}>Engine</Link>
              <Link href="/transmission" onClick={() => setIsOpen(false)}>Transmission</Link>
              <Link href="/diagnostics" onClick={() => setIsOpen(false)}>Diagnostics</Link>
            </div>
          )}

          <Link href="/gearbox" onClick={() => setIsOpen(false)} className="block">Gearbox Repair</Link>
          <Link href="/servicescontract" onClick={() => setIsOpen(false)} className="block">Service Contract</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block">Contact Us</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)} className="block">Blogs</Link>
        </div>
      )}
    </header>
  );
}
