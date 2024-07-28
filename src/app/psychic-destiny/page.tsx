"use client";

import DobSelector from "@/components/common/DobSelector";
import Head from "next/head";

const PsychicDestinyPage = () => {
  return (
    <>
      <Head>
        <title>
          Calculate Your Mulank and Bhagyank Numbers | Psychic Destiny
          Calculator
        </title>
        <meta
          name="description"
          content="Calculate your Mulank (Psychic) and Bhagyank (Destiny) numbers based on your birthdate. Discover significant details about your life path and destiny through our Psychic Destiny Calculator."
        />
        <meta
          name="keywords"
          content="calculate my bhagyank mulank by dob, driver conductor or psychic destiny, get my future by dob, numerology by dob, Mulank, Bhagyank, psychic number, destiny number, life path number"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eyes on Number" />
        <meta
          property="og:title"
          content="Calculate Your Mulank and Bhagyank Numbers | Psychic Destiny Calculator"
        />
        <meta
          property="og:description"
          content="Use our Psychic Destiny Calculator to find out your Mulank (Psychic) and Bhagyank (Destiny) numbers based on your birthdate. Uncover significant details about your life path and destiny."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.eyesonnumber.com/psychic-destiny"
        />
        <meta
          property="og:image"
          content="https://www.eyesonnumber.com/path-to-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Calculate Your Mulank and Bhagyank Numbers | Psychic Destiny Calculator"
        />
        <meta
          name="twitter:description"
          content="Use our Psychic Destiny Calculator to find out your Mulank (Psychic) and Bhagyank (Destiny) numbers based on your birthdate. Uncover significant details about your life path and destiny."
        />
        <meta
          name="twitter:image"
          content="https://www.eyesonnumber.com/path-to-image.jpg"
        />
      </Head>
      <div>
        <DobSelector />
      </div>
    </>
  );
};

export default PsychicDestinyPage;
