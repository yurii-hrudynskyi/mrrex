"use client";

import React, { useState } from "react";

import Link from "next/link";
import { womenColNames } from "../lib/collections";
import Image from "next/image";

export default function WomenColletionsPage() {
  return (
    <>
      <h1 className="text-center text-[1.5rem] border-t-2 border-gray-300">
        COLLECTIONS
      </h1>
      <div className="container mx-auto lg:max-w-[90%]">
        <section className="grid grid-cols-1 px-5 md:grid-cols-2 gap-8 container mx-auto mb-10">
          {womenColNames.map((col, key) => {
            return (
              <article key={key}>
                <Link href={`/women/${col.name.toLowerCase()}`}>
                  <h2 className="text-center py-5 text-2xl hover:font-bold">
                    {col.name.toUpperCase()}
                  </h2>
                  <div className="w-full relative h-[700px]">
                    <Image
                      fill={true}
                      className="hover:opacity-90 transition-all object-cover"
                      src={col.coverLink}
                      alt={`A dress from the ${col.name} collection`}
                    />
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}
