'use client'

import Header from "@/components/common/Header";
import "../../styles/globals.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import numerologyBg from '@/src/app/assets/images/astrology-circle-orance-dots.png'
import { cn } from "@/lib/utils";


const Home = () => {
 const router = useRouter()
  return (
    <div style={{backgroundImage: `url(${numerologyBg}) !important`}} className={cn("flex flex-col items-center min-h-screen p-4 bg-cover bg-center " )}>
      <Header />
      <div className="text-5xl font-extrabold ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-800">
          Eyes on Number
        </span>
      </div>

      
      <div className="flex flex-col gap-8 p-8 font-light text-brand-700">
        <text className="w-[80dvw]">
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
        <div className="flex gap-4">
          <Button onClick={() => router.push('/psychic-destiny')} className="bg-brand-600 text-brand-50 hover:scale-105 transform transition duration-300 ease-in-out">Mulank/Bhagyank Calculator</Button>
          <Button onClick={() => router.push('/name-calculator')} className="bg-brand-600 text-brand-50 hover:scale-105 transform transition duration-300 ease-in-out">Name calculator</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
