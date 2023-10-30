import React from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-bold text-center">{siteConfig.name}</div>
      <Logo className="mt-10" priority={true} />
      <div className="mt-10 text-xl font-normal text-center">Home Page</div>
    </div>
  );
}
