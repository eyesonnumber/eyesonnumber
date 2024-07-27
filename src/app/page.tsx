import Link from "next/link";
import "../../styles/globals.css";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-bold">Eyes on Number</h1>
      <div className="flex flex-col gap-4 p-8 font-light">
        <text>
          Welcome to eyesonnumber, where the mystical world of numerology and
          astrology comes alive! Discover your Mulank (Birth Number) and
          Bhagyank (Destiny Number) to unlock the secrets of your personality
          and life path. Delve into the significance of numerology and
          astrology, ancient sciences that reveal the cosmic patterns
          influencing your destiny. Whether seeking insight into your future,
          understanding your strengths and challenges, or simply exploring the
          universe's mysteries, our comprehensive tools and expert
          interpretations will guide you on your spiritual journey. Embark on a
          path to self-discovery and cosmic harmony today!
        </text>
        <div className="flex gap-8">
          <Link
            href="/psychic-destiny"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-60 text-center font-bold hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Go to DOB Calculator
          </Link>
          <Link
            href="/name-calculator"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-60 text-center font-bold hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Go to Name calculator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
