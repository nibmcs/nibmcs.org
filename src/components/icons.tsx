import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from 'react-icons/ri';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Image from 'next/image';

const iconSize = 18;
const className = 'text-default-500 hover:text-[#1E50FF] transition-all duration-300 ease-in-out';

interface ThemedImageProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Logo = ({
  className,
  width = 200,
  height = 112.5,
  priority = false,
}: ThemedImageProps) => (
  <>
    {/* When the theme is dark */}
    <Image
      src='/logo.png'
      width={width}
      height={height}
      alt='NCS LOGO'
      className={`hidden dark:block ${className}`}
      priority={priority}
    />

    {/* When the theme is light */}
    <Image
      src='/NCS-logo-color.png'
      width={width}
      height={height}
      alt='NCS LOGO'
      className={`block dark:hidden ${className}`}
      priority={priority}
    />
  </>
);

export const FacebookIcon = () => {
  return <RiFacebookLine size={iconSize} className={className} />;
};

export const InstagramIcon = () => {
  return <RiInstagramLine size={iconSize} className={className} />;
};

export const TwitterIcon = () => {
  return <RiTwitterXLine size={iconSize} className={className} />;
};

export const GithubIcon = () => {
  return <RiGithubLine size={iconSize} className={className} />;
};

export const LinkedinIcon = () => {
  return <RiLinkedinLine size={iconSize} className={className} />;
};

export const DarkModeIcon = () => {
  return <MdDarkMode size={iconSize} className={className} />;
};

export const LightModeIcon = () => {
  return <MdLightMode size={iconSize} className={className} />;
};
