import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-brand-700 text-brand-600 p-4 w-full fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Link href="/">
          <div className="text-xl font-bold text-brand-200 hover:text-brand-50">
            Eyes on Number
          </div>
        </Link>
        <div>
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
            className=" text-brand-200 hover:text-brand-50"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
