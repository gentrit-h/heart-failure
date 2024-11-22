/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openedCardState, selectedAnalytics } from "../../state/atoms";

interface NavItemProps {
  svg: any;
  active: boolean;
  pageName?: string;
}

const NavItem: React.FC<NavItemProps> = ({ svg, active, pageName }) => {
  const location = useLocation();
  const [openedCard, setOpenedCard] = useRecoilState(openedCardState);
  const [selctedAnalyticsState,setSelectedAnalytictsState]=useRecoilState(selectedAnalytics)

  return (
    <div
      data-layername="navItemButton"
      onClick={() => {
        if (true) {
          setOpenedCard("all");
          setSelectedAnalytictsState('all')

          sessionStorage.setItem('openedCard', 'all');
        }
      }}

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
