import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200"],
  variable: "--font-oswald",
});
const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "600"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Mr. Rex",
  description: "Hight Couture Fashion",
  keywords: ["Fashion", "Mr. Rex", "Rex", "Couture", "..."],
  creator: "...What Name?",
  category: "Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${oswald.variable} ${opensans.variable} font-opensans`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
