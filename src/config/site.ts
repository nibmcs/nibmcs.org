export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'NIBM Computing Society',
  description:
    'We are a student community organization for the NIBM - Sri Lanka, established with the aim of enabling us to learn, share, and build our professions.',
  navItems: [
    {
      label: 'Events',
      href: '/events',
      active: false,
    },
    {
      label: 'Leaderboard',
      href: '/leaderboard',
      active: false,
    },
    {
      label: 'Blog',
      href: '/blog',
      active: false,
    },
    {
      label: 'About',
      href: '/about',
      active: false,
    },
    {
      label: 'Contact',
      href: '/contact',
      active: false,
    },
  ],
  // links: {
  //   facebook: 'https://facebook.com/nibmcs',
  //   instagram: 'https://instagram.com/nibmcs',
  //   twitter: 'https://twitter.com/nibmcs',
  //   linkedin: 'https://linkedin.com/company/nibmcs',
  //   github: 'https://github.com/nibmcs',
  // },
};
