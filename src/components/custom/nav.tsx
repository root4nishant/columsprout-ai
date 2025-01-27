"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ProductsDropdown } from "./DropDown";
import MobileNavigation from "./MobileNav";

export default function Navbar() {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setProductsOpen(true);
  };

  return (
    <div className="w-full fixed top-0 z-20 bg-transparent font-primary">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-20 mt-4">
        <header className="bg-[#1a1a1a] w-full rounded-md shadow-lg shadow-[#707070] py-4 px-6 flex items-center justify-between">
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
            <div className="relative" onMouseEnter={handleMouseEnter}>
              <Link
                onClick={handleMouseEnter}
                href="#"
                className="text-gray-300 hover:text-white text-md font-bold hidden lg:block"
              >
                Products
              </Link>
              <ProductsDropdown
                isOpen={isProductsOpen}
                closeDrawer={() => setProductsOpen(false)}
              />
            </div>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white text-md font-bold hidden lg:block"
            >
              Pricing
            </Link>
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
              className="text-lg bg-transparent font-bold text-black rounded-sm border-white/20 hover:bg-white bg-secondary py-5 px-4"
            >
              Contact Us
            </Button>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-300 hover:text-white text-lg focus:outline-none"
          >
            ☰
          </button>
        </header>
      </div>
      {isMobileMenuOpen && (
        <MobileNavigation
          isOpen={isMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
