"use client";

import "../../styles/globals.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full p-4 ">
      <h1 className="text-3xl font-bold  md:mb-4 text-bold text-brand-700 md:mt-20 mt-8">
        Eyes on Number
      </h1>
      <div className="flex flex-col gap-8 p-8 font-light text-brand-700">
        <text className="md:w-[80dvw] w-full md:p-0 px-4 text-sm md:text-lg ">
          Welcome to Eyes on Number, where the mystical world of numerology and
          astrology comes alive! Discover your Mulank (Birth Number) and
          Bhagyank (Destiny Number) to unlock the secrets of your personality
          and life path. Delve into the significance of numerology and
          astrology, ancient sciences that reveal the cosmic patterns
          influencing your destiny. Whether seeking insight into your future,
          understanding your strengths and challenges, or simply exploring the
          universe mysteries, our comprehensive tools and expert interpretations
          will guide you on your spiritual journey. Embark on a path to
          self-discovery and cosmic harmony today!
        </text>
        <div className="flex md:flex-row flex-col gap-4">
          <Button
            onClick={() => router.push("/psychic-destiny")}
            className="bg-brand-600 text-brand-50 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Mulank/Bhagyank Calculator
          </Button>
          <Button
            onClick={() => router.push("/name-calculator")}
            className="bg-brand-600 text-brand-50 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Name calculator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
