import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav>
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
