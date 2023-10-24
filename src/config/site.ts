export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NIBM Computing Society",
  description:
    "We are a student community organization for the NIBM - Sri Lanka, established with the aim of enabling us to learn, share, and build our professions.",
  navItems: [
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Membership",
      href: "/membership",
    },
  ],
  links: {
    facebook: "https://facebook.com/nibmcs",
    instagram: "https://instagram.com/nibmcs",
    twitter: "https://twitter.com/nibmcs",
    linkedin: "https://linkedin.com/company/nibmcs",
    github: "https://github.com/nibmcs",
  },
};
