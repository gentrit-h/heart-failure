/**
 * This code was generated by Builder.io
 */
import React from "react";

interface NavItemButtonProps {
  src: string;
  alt: string;
}

const NavItemButton: React.FC<NavItemButtonProps> = ({ src, alt }) => {
  return (
    <button className="flex overflow-hidden gap-10 items-center p-2.5 w-10 h-10 bg-white rounded-md">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain w-5 aspect-square"
      />
    </button>
  );
};

export default NavItemButton;
