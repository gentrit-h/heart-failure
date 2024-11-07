/**
 * This code was generated by Builder.io
 */
import React from "react";
import NavItem from "./NavItem";
import { useLocation } from 'react-router-dom';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const navItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d3fe385f0e2f8376eac693fbd079f83c9dea616e4859d144815a7402392d9b9?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee",
      active: true,
      pageName: "dashboard",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73758f10d633a5a2c8b5a462b775f8dc85b11f2a84fd2c080f5687c76ee4de3d?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee",
      active: false,
      pageName: "patients",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa3cda5516030dee38e8e90110a61d7540f826b3ce0f936daf6aa02047c68260?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee",
      active: false,
      pageName: "analytics",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2cc8e42a686e98c5704311b3144ecef02854f81de662af7ccb4ba6e4aeb93669?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee",
      active: false,
      isFooter: true,
    },
  ];


  return (
    <aside
      data-layername="sidebarNavigation"
      className="flex flex-col justify-between h-screen bg-blue-700 w-[82px] max-md:hidden"
    >
      <div data-layername="content" className="flex flex-col items-center w-full">
        <nav data-layername="nav" className="flex flex-col pt-8 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3559b7849b3414619bc3d3569642ca894caf8507be4f1fe626303e5b807e8a?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee"
            alt=""
            className="object-contain self-center aspect-[0.97] w-[31px]"
          />
          <div data-layername="navigation" className="flex flex-col px-4 mt-6 w-full">
            {navItems.slice(0, 3).map((item, index) => (
              <NavItem key={index} src={item.src} active={location.pathname.includes('/heart-failure/page1')} pageName={item.pageName || ""} />
            ))}
          </div>
        </nav>
      </div>
      <footer data-layername="footer" className="flex flex-col items-center px-4 pb-6 w-full">
        <NavItem src={navItems[3].src} active={navItems[3].active} />
        <div data-layername="divider" className="flex mt-6 w-full bg-blue-400 min-h-[1px]" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68eb5bdf8e1c94a568b8fac98fce96879319282e39639a4c2761f13314c9571?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee"
          alt="User avatar"
          className="object-contain mt-6 w-12 aspect-square min-h-[48px] rounded-[200px]"
        />
      </footer>
    </aside>
  );
};

export default Sidebar;
