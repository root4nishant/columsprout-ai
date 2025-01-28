import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d6ceb3] border-t border-gray-300  mx-auto">
      <div className=" mx-auto flex lg:max-w-[1400px] md:max-w-[900px] w-full px-6 lg:px-20 flex-row items-center justify-between py-4">
        <div className="flex items-center lg:space-x-6 space-x-2 md:flex-row flex-col">
          <Image
            loading="lazy"
            src="/logo.svg"
            alt="Logo"
            className="w-10 "
            width={20}
            height={10}
          />
          <span className="text-xs lg:text-md text-gray-800">
            &copy; {new Date().getFullYear()} Columspro AI Inc.
          </span>
        </div>
        <div className="flex justify-center lg:items-center md:items-center items-start gap-2 lg:gap-8">
          <div className=" md:space-x-4 lg:space-x-4 flex lg:flex-row md:flex-row flex-col text-left">
            <Link
              href="/privacyPolicy"
              className="lg:text-md text-xs text-gray-800"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsAndService"
              className="lg:text-md text-xs  text-gray-800"
            >
              Terms of Service
            </Link>
          </div>

          <div className="">
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
