"use client";

import { stellaManCol } from "@/app/lib/collections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StellaMenCol() {
  return (
    <div className="container mx-auto w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      {stellaManCol.map((suit, key) => {
        return (
          <Link
            href={{
              pathname: `/men/stella/${suit.id}`,
              query: {
                imgLink: suit.imgLink,
                name: suit.name,
                description: suit.description,
                price: suit.price,
                details: suit.details,
                id: suit.id,
                secondImgLink: suit.secondImgLink || suit.imgLink,
              },
            }}
            key={key}
            className="hover:opacity-80 transition-all relative"
          >
            <div className="w-full relative h-[400px]">
              <Image
                fill={true}
                src={suit.imgLink}
                alt="dress picture"
                className="object-contain"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
