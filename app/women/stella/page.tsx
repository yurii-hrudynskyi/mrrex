"use client";

import { stellaCol } from "@/app/lib/collections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StellaCol() {
  return (
    <div className="container mx-auto w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 object-fit">
      {stellaCol.map((dress, key) => {
        return (
          <Link
            href={{
              pathname: `/women/stella/${dress.id}`,
              query: {
                imgLink: dress.imgLink,
                name: dress.name,
                description: dress.description,
                price: dress.price,
                details: dress.details,
                id: dress.id,
                secondImgLink: dress.secondImgLink,
              },
            }}
            key={key}
            className="hover:opacity-80 transition-all relative"
          >
            <div className="w-full relative h-[500px]">
              <Image
                fill={true}
                src={dress.imgLink}
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
