'use client'

import React from "react";
import Link from "next/link";
import { useWindowDimensions } from '@/src/app/hooks/useWindowDimension.hook'

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width !== undefined && width <= 768;

  return (
    <header
      className={`bg-brand-700 text-brand-600 p-4 w-full fixed top-0 left-0 z-50 ${
        isMobile ? "p-2" : "md:text-lg"
      }`}
    >
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <Link href="/">
          <div
            className={`font-bold text-brand-200 hover:text-brand-50 ${
              isMobile ? "text-lg" : "md:text-xl"
            }`}
          >
            Eyes on Number
          </div>
        </Link>
        <div className={`mt-4 md:mt-0 ${isMobile ? "" : "md:text-base"}`}>
          <Link href="/" className="mr-4 text-brand-200 hover:text-brand-50">
            Home
          </Link>
          <Link
            href="/about"
            className="mr-4 text-brand-200 hover:text-brand-50"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="text-brand-200 hover:text-brand-50"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
