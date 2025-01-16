"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-[90%] mx-auto lg:w-[70%] border-b bg-[#1a1a1a] mt-5 rounded-md shadow-lg py-4 z-40">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Link href="/" className="text-white font-semibold text-xl">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
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
        className={`md:hidden fixed inset-0 bg-[#1a1a1a] border-t border-gray-700 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
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
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-white text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Button
              variant="outline"
              className="text-lg bg-transparent text-white border-white/20 hover:bg-white/10 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in & Use
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
