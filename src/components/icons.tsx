import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDarkMode, MdLightMode, MdLocationOn, MdCalendarMonth } from "react-icons/md";
import Image from "next/image";

const iconSize = 18;
const className = "text-default-500";

interface ThemedImageProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Logo = ({ className, width = 200, height = 112.5, priority = false }: ThemedImageProps) => (
  <>
    {/* When the theme is dark */}
    <Image
      src="/logo.png"
      width={width}
      height={height}
      alt="NCS LOGO"
      className={`hidden dark:block ${className}`}
      priority={priority}
    />

    {/* When the theme is light */}
    <Image
      src="/NCS-logo-color.png"
      width={width}
      height={height}
      alt="NCS LOGO"
      className={`block dark:hidden ${className}`}
      priority={priority} />
  </>
);

export const FacebookIcon = () => {
  return <FaFacebook size={iconSize} className={className} />;
};

export const InstagramIcon = () => {
  return <FaInstagram size={iconSize} className={className} />;
};

export const TwitterIcon = () => {
  return <FaXTwitter size={iconSize} className={className} />;
};

export const GithubIcon = () => {
  return <FaGithub size={iconSize} className={className} />;
};

export const LinkedinIcon = () => {
  return <FaLinkedin size={iconSize} className={className} />;
};

export const DarkModeIcon = () => {
  return <MdDarkMode size={iconSize} className={className} />;
};

export const LightModeIcon = () => {
  return <MdLightMode size={iconSize} className={className} />;
};

export const LocationPinIcon = () => {
  return <MdLocationOn size={iconSize} className={className} />;
};

export const DateIcon = () => {
  return <MdCalendarMonth size={iconSize} className={className} />;
};
