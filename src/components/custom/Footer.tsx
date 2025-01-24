import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d6ceb3] border-t border-gray-300  mx-auto">
      <div className=" mx-auto flex flex-col lg:max-w-[1400px] md:max-w-[900px] w-full px-6 lg:px-20 sm:flex-row items-center justify-between py-4">
        <div className="flex items-center space-x-6 lg:flex-row flex-col">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="w-10 "
            width={20}
            height={10}
          />
          <span className="text-md text-gray-800">
            &copy; {new Date().getFullYear()} Columnspro AI Inc.
          </span>
        </div>
        <div className="flex justify-end items-center lg:flex-row flex-col gap-2 lg:gap-8">
          <div className=" space-x-4 lg:mt-4 mt-0">
            <Link href="/privacyPolicy" className="text-md text-gray-800">
              Privacy Policy
            </Link>
            <Link href="/termsAndService" className="text-md  text-gray-800">
              Terms of Service
            </Link>
          </div>

          <div className="lg:mt-4 mt-0">
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
