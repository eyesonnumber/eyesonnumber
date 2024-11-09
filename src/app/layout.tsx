import "../../styles/globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/common/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const rubik = Rubik({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eyes on Number - Complete Online Numerology",
  description:
    "Check your Bhagyank, Mulank, name number, and their effects on your life with our complete online numerology tool.",
  keywords: "numerology, Bhagyank, Mulank, name number, numerology online",
  openGraph: {
    title: "Eyes on Number - Complete Online Numerology",
    description:
      "Discover your Bhagyank, Mulank, name number, and their effects on your life.",
    url: "https://eyesonnumber.com/",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Numerology banner image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyes on Number - Complete Online Numerology",
    description:
      "Calculate your Bhagyank, Mulank, and name number with our online numerology tool.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4810342824101459"
     crossorigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Eyes on Number - Complete Online Numerology",
              description:
                "Check your Bhagyank, Mulank, name number, and their effects on your life with our complete online numerology tool.",
              url: "https://www.yourwebsite.com", // Update this URL
            }),
          }}
        />
      </head>
      <body className="bg-brand-50" role="main">
        <Header />
        <main className="pt-16" role="main">
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
