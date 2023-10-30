'use client';

import { useEffect, useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/react';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/icons';

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NextUINavbar
      maxWidth='lg'
      position='sticky'
      className={`${
        scrolling
          ? 'bg-black  backdrop-blur data-[menu-open=false]:backdrop-blur backdrop-saturate-50 p-5'
          : 'bg-background/0'
      } backdrop-blur-none data-[menu-open=true]:backdrop-blur-none backdrop-saturate-1000 p-5 transition-all duration-500 ease-in-out`}
    >
      <NavbarContent className='md:basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex items-center justify-start pt-2' href='/'>
            <Logo priority={true} height={45} width={80} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex md:basis-1/5 sm:basis-full'
        justify='center'
      >
        <ul className='justify-start hidden ml-4 gap-x-8 md:flex'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem as='li' key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  `text-[#ADB9C7l] hover:opacity-100 hover:text-white hover:after:absolute hover:after:inset-x-2 hover:after:bottom-[-6px] hover:after:h-0.5 hover:after:bg-[#1E50FF] hover:after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom hover:after:transition-transform hover:after:duration-300 hover:after:ease-in-out ${
                    pathname.startsWith(item.href)
                      ? 'after:absolute after:inset-x-2 after:bottom-[-6px] after:h-0.5 after:bg-[#1E50FF] after:transform after:scale-x-100 after:origin-bottom text-white'
                      : ''
                  }`
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex md:basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem as='li'>
          <Button
            as={Link}
            href='/membership'
            className='border border-[#1E50FF] bg-transparent hover:opacity-80'
          >
            Membership
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='pl-4 md:hidden basis-1' justify='end'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='flex flex-col gap-4 mx-4 mt-10'>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                color='foreground'
                className={`text-[20px] hover:after:absolute hover:after:inset-x-2 hover:after:bottom-[-6px] hover:after:h-0.5 hover:after:bg-[#1E50FF] hover:after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom hover:after:transition-transform hover:after:duration-300 hover:after:ease-in-out ${
                  pathname.startsWith(item.href)
                    ? 'after:absolute after:inset-x-2 after:bottom-[-6px] after:h-0.5 after:bg-[#1E50FF] after:transform after:scale-x-100 after:origin-bottom text-white'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem>
            <Link
              href='/membership'
              color='foreground'
              className='text-[20px] hover:after:absolute hover:after:inset-x-2 hover:after:bottom-[-6px] hover:after:h-0.5 hover:after:bg-[#1E50FF] hover:after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom hover:after:transition-transform hover:after:duration-300 hover:after:ease-in-out'
            >
              Membership
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
