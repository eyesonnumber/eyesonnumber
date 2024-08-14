"use client";

import DobSelector from "@/components/common/DobSelector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychic and Destiny Number Calculator | Eyes on Number",
  description:
    "Calculate your Psychic (Mulank) and Destiny (Bhagyank) numbers using your date of birth. Understand what these numbers mean for your life path and destiny.",
  keywords:
    "psychic number, destiny number, numerology by dob, calculate psychic number, calculate destiny number",
  openGraph: {
    title: "Psychic and Destiny Number Calculator | Eyes on Number",
    description:
      "Enter your birthdate to calculate your Psychic (Mulank) and Destiny (Bhagyank) numbers. Discover their significance in your life.",
    url: "https://eyesonnumber.com/psychic-destiny",
    type: "article",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Psychic and Destiny Number Calculation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychic and Destiny Number Calculator | Eyes on Number",
    description:
      "Find out what your Psychic (Mulank) and Destiny (Bhagyank) numbers mean by entering your date of birth.",
  },
};

const PsychicDestinyPage = () => {
  return (
    <>
      <div>
        <DobSelector />
      </div>
    </>
  );
};

export default PsychicDestinyPage;
