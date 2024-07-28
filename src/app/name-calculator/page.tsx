"use client";

import NameCalculator from "@/components/common/NameCalculator";
import Head from "next/head";

const NameCalculatorPage = () => {
  return (
    <>
      <Head>
        <title>Calculate Your Numerology Name Number | Name Calculator</title>
        <meta
          name="description"
          content="Discover your Numerology Name Number using our Name Calculator. Enter your name to find out your name number and uncover significant details about your personality and life path."
        />
        <meta
          name="keywords"
          content="calculate my name number, numerology name calculator, name numerology, name number, numerology by name, name number calculation, personality number"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eyes on Number" />
        <meta
          property="og:title"
          content="Calculate Your Numerology Name Number | Name Calculator"
        />
        <meta
          property="og:description"
          content="Use our Name Calculator to find out your Numerology Name Number. Discover significant details about your personality and life path through numerology."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.eyesonnumber.com/name-calculator"
        />
        <meta
          property="og:image"
          content="https://www.eyesonnumber.com/path-to-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Calculate Your Numerology Name Number | Name Calculator"
        />
        <meta
          name="twitter:description"
          content="Use our Name Calculator to find out your Numerology Name Number. Discover significant details about your personality and life path through numerology."
        />
        <meta
          name="twitter:image"
          content="https://www.eyesonnumber.com/path-to-image.jpg"
        />
      </Head>
      <div>
        <NameCalculator />
      </div>
    </>
  );
};

export default NameCalculatorPage;
