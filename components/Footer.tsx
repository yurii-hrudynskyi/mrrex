import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./Icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black w-full md:flex">
      <div className="w-full flex text-slate-100 p-10 lg:px-[10%] justify-between">
        <section className="mb-5">
          <h4 className="pb-4">Mr.Rex</h4>
          <div>
            Lagja Emshir, Pa numer <br />
            Prishtine, Kosovo <br />
            10000
          </div>
          <br />
          <div>
            Phone:<i>+383 44 956 390</i> <br />
            Email: <i>info@mrrexshop.com</i>
          </div>
        </section>
        <section className="mb-5 mr-3 w-[140px] lg:w-[300px]">
          <h4 className="pb-4 text-center lg:pl-[70px] lg:text-left">
            Social Media
          </h4>
          <div className="flex flex-wrap justify-left">
            <Link href="https://www.instagram.com/mrrex_fashion/">
              <InstagramIcon />
            </Link>
            <Link href="https://www.tiktok.com/@mrrexfashion">
              <TikTokIcon />
            </Link>
            <Link href="https://www.youtube.com/@MrRexFashion">
              <YouTubeIcon />
            </Link>
            <Link href="https://www.facebook.com/MrRexFashion/">
              <FacebookIcon />
            </Link>
            <Link href="https://www.pinterest.de/pin/handmade-luxury-fashion-mrrex_fashion-instagram-photos-and-videos--730779477037846715/">
              <PinterestIcon />
            </Link>
          </div>
        </section>
        <section className="mb-5">
          <Image
            src="/qrcode.png"
            alt="WatsApp QR Code"
            width={90}
            height={90}
          />
        </section>
        {/* <section className="mb-5">
          <h4 className="pb-4">Join our news letter</h4>
          <form action="###">
            <input
              type="email"
              name="email"
              className="text-black block mb-2 p-1 rounded"
            />
            <button className="hover:bg-white hover:text-black rounded transition-all p-2">
              Subscribe
            </button>
          </form>
        </section> */}
      </div>
    </footer>
  );
}
