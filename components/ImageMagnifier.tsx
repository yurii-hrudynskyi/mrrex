import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function ImageMagnifier({ imgLink }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setShowMagnifier(true);
      }}
      onMouseLeave={() => {
        setShowMagnifier(false);
      }}
      onMouseMove={handleMouseOver}
    >
      <div className="w-full relative h-[700px]">
        <Image
          src={imgLink}
          fill={true}
          alt="Dress Picture"
          className="object-contain"
        />
      </div>
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 150}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="sm:hidden md:block md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
            style={{
              backgroundImage: `url(${imgLink})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
