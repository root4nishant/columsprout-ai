import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d6ceb3] border-t border-gray-300">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-6">
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-6"
            width={50}
            height={50}
          />
          <span className="text-sm text-gray-800">
            &copy; 2024 Columnsprout AI, Inc.
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="/privacy-policy"
            className="text-sm text-gray-800 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm text-gray-800 hover:underline"
          >
            Terms of Service
          </a>
        </div>

        <div className="mt-4 sm:mt-0">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
