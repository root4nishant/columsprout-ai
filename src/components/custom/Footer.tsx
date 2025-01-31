import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d6ceb3] border-t border-gray-300 w-full mx-auto">
      <div className=" mx-auto flex lg:max-w-[1400px] md:max-w-[900px] w-full px-6 lg:px-20 lg:flex-row md:flex-row flex-col items-center lg:justify-between justify-center py-4 space-y-3">
        <div className="flex items-center lg:space-x-6 space-x-2 flex-row lg:w-full md:w-full">
          <Image
            loading="lazy"
            src="/logo.svg"
            alt="Logo"
            className="w-10 "
            width={20}
            height={10}
          />
          <span className="text-xs lg:text-sm text-gray-800">
            &copy; {new Date().getFullYear()} Columspro AI Inc.
          </span>
        </div>
        <div className="flex md:w-full items-center lg:justify-end justify-between gap-10 lg:gap-8">
          <div className="space-x-4 flex items-center lg:justify-end md:justify-end justify-between  text-left w-full">
            <Link
              href="/privacyPolicy"
              className="lg:text-lg text-sm text-gray-800"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsAndService"
              className="lg:text-lg text-sm  text-gray-800"
            >
              Terms of Service
            </Link>
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
