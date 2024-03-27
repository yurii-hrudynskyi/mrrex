"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowIcon, CameraIcon, PlayIcon } from "@/components/Icons";
import ImageMagnifier from "@/components/ImageMagnifier";
import Link from "next/link";
import { alphaCol } from "@/app/lib/collections";
import Image from "next/image";

export default function ItemPage() {
  const [openDetails, setOpenDetails] = useState(false);
  const [openDelivery, setOpenDelivery] = useState(false);
  const [video, setVideo] = useState(false);

  const query = useSearchParams();
  const params = {
    imgLink: query.get("imgLink"),
    name: query.get("name"),
    description: query.get("description"),
    price: query.get("price"),
    details: query.getAll("details"),
    id: query.get("id"),
  };

  function shuffle(array: Array<DressItem>) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const colDubl = [...alphaCol];
  const ranArray = shuffle(colDubl);

  return (
    <>
      <article className="w-[90%] box-border md:w-[68%] mx-auto mb-4 overflow-y-scroll flex max-w-[470px] md:max-w-[740px] md:min-w-[740px]">
        <div className="md:flex">
          <div className="md:w-[70%] overflow-hidden relative">
            {!video ? (
              <ImageMagnifier imgLink={params.imgLink}></ImageMagnifier>
            ) : (
              <video
                autoPlay
                loop
                muted
                poster="/public/women/alpha/1.mov"
                className="w-full object-cover"
              >
                <source
                  src={`/women/alpha/${params.id}.mov`}
                  type="video/mp4"
                />
              </video>
            )}

            <div
              onClick={() => {
                setVideo(!video);
                setTimeout(() => {
                  setVideo(!video), 3000;
                });
              }}
            >
              {" "}
              {!video ? <PlayIcon /> : <CameraIcon />}
            </div>
          </div>

          <div className="flex md:w-[40%] justify-around md:flex-col border-2 py-5 px-5 md:justify-between overflow-hidden">
            <div className="flex flex-col">
              <h4 className="text-center pb-5 text-2xl">{params.name}</h4>
              <p className="">{params.description}</p>
              <h4 className="inline-block pt-3 text-2xl mb-3 font-semibold">
                €{params.price}
              </h4>
              <span> Size: XS, S, M, L , XL</span>
              <div className="my-3 mb-5 md:mt-[30%] flex flex-col items-center md:items-start">
                <span className="align-center mb-[-10px]">Contact Us:</span>
                <br />

                <Image src="/qrcode.png" alt="QR Code" width={90} height={90} />
              </div>
              <ul className="cursor-pointer flex flex-col items-center overflow-y-scroll max-h-[20%] md:items-start">
                <li
                  onClick={() => {
                    setOpenDetails(!openDetails);
                  }}
                >
                  <div>
                    <div className="flex">
                      <h4>Details</h4> <ArrowIcon arr={openDetails} />
                    </div>
                    <ul
                      className={`text-sm ${
                        openDetails ? `dispaly` : "hidden"
                      }`}
                    >
                      <p>
                        For further details, please scan the QR code to directly
                        get in touch with us.
                      </p>
                    </ul>
                  </div>
                </li>

                <li
                  onClick={() => {
                    setOpenDelivery(!openDelivery);
                  }}
                >
                  <div className="flex">
                    <h4>Delivery </h4> <ArrowIcon arr={openDelivery} />
                  </div>
                  <p
                    className={`text-sm ${openDelivery ? `dispaly` : "hidden"}`}
                  >
                    For further details, please scan the QR code to directly get
                    in touch with us.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <h2 className="p-0 text-center text-2xl mb-10 mt-10">Recomended</h2>
      <div className="w-[90%] mx-auto flex mb-10">
        {ranArray.map((col, key) => {
          const count = 3;
          if (key + 1 === 3) {
            return;
          }
          if (key <= 3) {
            return (
              <div className="w-[30%] mx-auto mb-5" key={key}>
                <Link
                  href={{
                    pathname: `/women/alpha/${col.id}`,
                    query: {
                      imgLink: col.imgLink,
                      name: col.name,
                      description: col.description,
                      price: col.price,
                      details: col.details,
                      id: col.id,
                    },
                  }}
                  className="hover:opacity-80 transition-all relative"
                >
                  <div className="w-full relative h-[300px] md:h-[400px]">
                    <Image
                      fill={true}
                      src={col.imgLink}
                      alt="dress picture"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
