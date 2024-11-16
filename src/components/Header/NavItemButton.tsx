/* eslint-disable */
import React from "react";

interface NavItemButtonProps {
  svg: any;
  alt: string;
}

const NavItemButton: React.FC<NavItemButtonProps> = ({ svg, alt }) => {
  return (
    <button className="flex overflow-hidden gap-10 items-center bg-white rounded-md">
      {svg}
    </button>
  );
};

export default NavItemButton;
