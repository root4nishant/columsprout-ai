"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ProductsDropdown } from "./DropDown";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  // const [isDown, setDown] = useState(false);

  const toggleProducts = () => {
    setProductsOpen(!isProductsOpen);
  };

  // const handleProductsMouseEnter = () => {
  //   setProductsOpen(true);
  // };

  const handleProductsMouseLeave = () => {
    setProductsOpen(false);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <header className="fixed top-0 left-0 w-full z-40 mt-4 lg:px-20 px-4">
        <div className="bg-[#1a1a1a] w-full rounded-md shadow-lg shadow-[#707070] py-4 px-6 flex items-center justify-between">
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
            <div
              className=""
              // onMouseEnter={handleProductsMouseEnter}
              // onMouseLeave={handleProductsMouseLeave}
            >
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-md font-bold hidden lg:block"
                onClick={(e) => {
                  e.preventDefault();
                  toggleProducts();
                }}
              >
                Products
              </Link>
              <ProductsDropdown isOpen={isProductsOpen} />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-300 hover:text-white text-md font-bold"
            >
              Start for free
            </Link>
            <Button
              variant="default"
              className="text-lg bg-transparent font-bold text-black rounded-sm border-white/20 hover:bg-white bg-gray-300 py-5 px-4"
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
                onClick={(e) => {
                  e.preventDefault();
                  toggleProducts();
                  setMobileMenuOpen(false);
                }}
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

        {/* Products Dropdown for Mobile */}
        <div className="lg:hidden" onMouseLeave={handleProductsMouseLeave}>
          <ProductsDropdown isOpen={isProductsOpen} />
        </div>
      </header>
    </div>
  );
}
