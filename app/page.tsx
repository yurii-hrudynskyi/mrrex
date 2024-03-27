import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr. Rex Shop",
  description: "...",
};

export default function Home() {
  return (
    <main className="mx-auto relative">
      <video
        autoPlay
        loop
        muted
        poster="/women/alpha/5.jpeg"
        className="w-full lg:w-[1600px] lg:mx-auti md:max-h-[650px] object-cover"
      >
        <source src="/women/alpha/8.mov" type="video/mp4" />
      </video>
      <div className="absolute w-[150px] h-[50px] pt-2 m-auto text-xl text-bold left-0 right-0 top-[700px] md:top-[350px] bottom-0 bg-white text-center hover:bg-black hover:text-white transition-all cursor-pointer opacity-70 hover:opacity-90">
        <Link href={`/women/alpha`}>Watch Now</Link>
      </div>
    </main>
  );
}
