import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "NIBM Computing Society",
  description:
    "We are a student community organization for the NIBM - Sri Lanka, established with the aim of enabling us to learn, share, and build our professions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
