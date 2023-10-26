import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDarkMode, MdLightMode, MdLocationOn, MdCalendarMonth } from "react-icons/md";
import Image from "next/image";

const iconSize = 18;
const className = "text-default-500";

export const Logo = () => (
  <Image alt="NIBM CS Logo" src="/logo.png" priority height={45} width={80} />
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
