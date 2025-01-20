import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d6ceb3] border-t border-gray-300  px-6 lg:px-24">
      <div className=" mx-auto flex flex-col sm:flex-row items-center justify-between py-4">
        <div className="flex items-center space-x-6 lg:flex-row flex-col">
          <Image
            src="/logo2.png"
            alt="Logo"
            className="w-72 "
            width={200}
            height={50}
          />
          <span className="text-md font-semibold text-gray-800">
            &copy; 2024 Columnsprout AI, Inc.
          </span>
        </div>
        <div className="flex justify-end items-center lg:flex-row flex-col gap-2 lg:gap-8">
          <div className=" space-x-4 mt-4 sm:mt-0">
            <Link
              href="/privacyPolicy"
              className="text-md font-semibold text-gray-800 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsAndService"
              className="text-md font-semibold text-gray-800 hover:underline"
            >
              Terms of Service
            </Link>
          </div>

          <div className="mt-4 sm:mt-0">
            <Link
              href="https://www.linkedin.com/company/columsprout-ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
