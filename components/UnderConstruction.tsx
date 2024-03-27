import React from "react";
import { MrRexIcon } from "./Icons";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="flex items-center justify-center p-[20px] md:p-[200px] flex-col">
      <MrRexIcon />
      <p>Coming Soon</p>
      <Link
        href={`/`}
        className="bg-slate-600 p-3 hover:bg-black text-white transition-all mt-7"
      >
        Back to Main Page
      </Link>
    </div>
  );
}
