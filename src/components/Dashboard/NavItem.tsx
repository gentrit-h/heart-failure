/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  svg: any;
  active: boolean;
  pageName?: string;
}

const NavItem: React.FC<NavItemProps> = ({ svg, active, pageName }) => {
  const location = useLocation();
  return (
    <div
      data-layername="navItemButton"
      onClick={() => {}}
      className={`flex overflow-hidden gap-10 items-center p-3 mt-2 w-12 h-12 ${
        location.pathname.startsWith('/'+pageName) ? "bg-blue-600" : "bg-blue-700"
      } rounded-md`}
    >
      <Link to={`/${pageName}`}>
        {svg(active)}
      </Link>
    </div>
  );
};

export default NavItem;
