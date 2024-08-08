import "../../styles/globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/common/Header"; // Update the path if necessary
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const rubik = Rubik({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eyes on Number",

  description:
    "Complete Online Numerology - Check your Bhagyank, Mulank, name number, and its effects on your life.",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5069018077601225"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className="bg-brand-50">
        <Header />
        <main className="pt-16">{children}</main> <SpeedInsights />
        {/* Add padding to prevent overlap */}
      </body>
    </html>
  );
}
