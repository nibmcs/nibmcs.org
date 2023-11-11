'use client';

import { siteConfig } from "@/config/site";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className={`w-full flex items-center justify-center py-3 ${pathname.startsWith("/studio") ? "hidden" : ""}`}>
      <p className="text-default-600">
        © 2023 {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
