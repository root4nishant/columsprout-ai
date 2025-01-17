"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full mx-auto flex justify-center items-center lg:px-24 px-6 md:px-12  mt-2 z-40">
      <div className="w-full border-b bg-[#1a1a1a] mx-auto  rounded-md shadow-lg py-4 px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Link href="/" className="text-white font-semibold text-xl">
            <Image
              src="/logo.png"
              alt="Logo"
              className="w-40 lg:w-auto"
              width={200}
              height={200}
              loading="lazy"
            />
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white text-md font-bold hidden lg:block"
          >
            Products
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-gray-300 hover:text-white text-md font-bold"
          >
            Start for free
          </Link>
          <Button
            variant="default"
            className="text-md bg-transparent font-bold text-black rounded-sm border-white/20 hover:bg-white bg-gray-300 "
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-300 hover:text-white text-lg focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-[#1a1a1a] z-20 border-t border-gray-700 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="text-gray-300 hover:text-white text-xl focus:outline-none"
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-6">
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-white text-xl font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-white text-xl font-bold"
            >
              Start for free
            </Link>
          </li>
          <li>
            <Button
              variant="default"
              className="text-xl bg-transparent font-bold text-black rounded-sm border-white/20 hover:bg-white bg-gray-300 "
            >
              Contact Us
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
