import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <p className="text-default-600">
        © 2023 {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
