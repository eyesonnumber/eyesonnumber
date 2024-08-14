"use client";

import NameCalculator from "@/components/common/NameCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Name Numerology Calculator | Eyes on Number",
  description:
    "Discover the numerology behind your name. Calculate your name number and understand its influence on your personality and destiny.",
  keywords:
    "name numerology, calculate name number, numerology by name, name number meaning",
  openGraph: {
    title: "Name Numerology Calculator | Eyes on Number",
    description:
      "Enter your name to calculate its numerology number and learn how it influences your life.",
    url: "https://eyesonnumber.com/name-calculator",
    type: "article",
    images: [
      {
        url: "/assets/logo.png",
        height: 630,
        alt: "Name Numerology Calculation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Name Numerology Calculator | Eyes on Number",
    description:
      "Find out what your name number means by entering your name into our numerology calculator.",
  },
};

const NameCalculatorPage = () => {
  return (
    <>
      <NameCalculator />
    </>
  );
};

export default NameCalculatorPage;
