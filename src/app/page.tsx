import React from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-4xl font-bold">{siteConfig.name}</div>
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="mt-10"
      />
      <div className="text-center text-xl font-normal mt-10">Home Page</div>
    </div>
  );
}
