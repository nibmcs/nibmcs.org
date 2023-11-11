'use client';

import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const socialData = [
  { path: 'https://instagram.com/nibmcs', icon: <RiInstagramLine /> },
  { path: 'https://facebook.com/nibmcs', icon: <RiFacebookLine /> },
  { path: 'https://github.com/nibmcs', icon: <RiGithubLine /> },
  { path: 'https://linkedin.com/company/nibmcs', icon: <RiLinkedinLine /> },
  { path: 'https://twitter.com/nibmcs', icon: <RiTwitterXLine /> },
];

const Social = () => {
  return (
    <div className={`fixed md:flex md:flex-col items-center mt-auto md:justify-center gap-y-4 h-max md:right-[2%] top-3 md:top-0 hidden w-full md:w-16 md:max-w-md md:h-screen`}>
      <div className='flex items-center justify-between w-[200px] md:w-full px-2 py-0 md:py-8 text-lg md:flex-col md:justify-center gap-y-10 md:px-0 h-[80px] md:h-max md:bg-white/10 backdrop-blur-sm md:text-xl md:rounded-full'>
        {socialData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='hover:text-[#1E50FF] transition-all duration-300 ease-in-out'>
                {link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
