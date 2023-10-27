import React from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-4xl font-bold">{siteConfig.name}</div>
      <Logo className="mt-10" priority={true} />
      <div className="text-center text-xl font-normal mt-10">Home Page</div>
    </div>
  );
}
