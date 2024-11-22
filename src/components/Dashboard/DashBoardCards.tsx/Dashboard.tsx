import { Bell, ChevronDown, Mail, MoreVertical, FileText, Filter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import ActivePatientsAnalytics from "./analytics/Analytics";
import Disconnected from "./analytics/Disconnected";
import CIEDAlerts from "./analytics/CIEDAlerts";
import CMEMSAlerts from "./analytics/CMEMSAlerts";
import LowBatteries from "./analytics/LowBatteries";
import "./scrollbarStyles.css";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { openedCardState, embeddedAnalyticsState, selectedPatientDashboard, selectedAnalytics } from "../../../state/atoms";


import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface Alert {
  id: string
  type: 'info' | 'warning' | 'error'
  // Add other alert properties as needed
}

interface AlertsCardHeaderProps {
  alerts: Alert[]
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import React from "react";
import { getPriorityColor } from "../../CIEDS/Cieds";

export function AlertsCardHeader({ alerts, togglePriority }: AlertsCardHeaderProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterChange = (value: string) => {
    let level=value
    if(value=='All'){
      togglePriority(['High','Medium','Low'])

    }else{
    togglePriority([value])
    }
  }

  return (
    <CardHeader className="relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <input type="checkbox" className="h-3 w-3" />
                  <CardTitle className="flex items-center gap-2">
            {/* <Bell className="h-5 w-5" /> */}
            Alerts ({alerts?.length || 0})
          </CardTitle>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {selectedFilters.length > 0 && (
                <span className="ml-1 rounded-full bg-primary w-5 h-5 text-xs flex items-center justify-center text-primary-foreground">
                  {selectedFilters.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {/* <DropdownMenuLabel>Filter by priority</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuCheckboxItem
              checked={selectedFilters.includes('High')}
              onCheckedChange={() => handleFilterChange('High')}
            >
              High
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedFilters.includes('Medium')}
              onCheckedChange={() => handleFilterChange('Medium')}
            >
              Yellow
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedFilters.includes('Low')}
              onCheckedChange={() => handleFilterChange('Low')}
            >
              Green
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedFilters.includes('All')}
              onCheckedChange={() => handleFilterChange('All')}
            >
              All
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
  )
}

const cardStyle = {
  border: "1px solid rgba(0, 0, 0, 0.06)", // Thin grey border
  borderRadius: "10px", // Rounded corners
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
  padding: "8px", // Padding
};

const cardStyleAlerts = {
  backgroundImage:
    "linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0))",
  backgroundPosition: "top",
  backgroundSize: "100% 4px", // Adjust height of the border here
  backgroundRepeat: "no-repeat",
  maxHeight: embeddedAnalyticsState ? "77vh" : "82vh",
  overflowY: "auto",
  // minWidth: "31vw",
};

const cardStyleScheduled = {
  backgroundImage: "linear-gradient(to right, #4CAF50, rgba(255, 0, 0, 0))",
  backgroundPosition: "top",
  backgroundSize: "100% 4px", // Adjust height of the border here
  backgroundRepeat: "no-repeat",
  maxHeight: embeddedAnalyticsState ? "77vh" : "82vh",
  overflowY: "auto",
  // minWidth: "31vw",
};

const cardStyleAnalytics = {
  backgroundImage: "linear-gradient(to right, #0054F6, rgba(255, 0, 0, 0))",
  backgroundPosition: "top",
  backgroundSize: "100% 4px", // Adjust height of the border here
  backgroundRepeat: "no-repeat",
  maxHeight: embeddedAnalyticsState ? "77vh" : "82vh",
  minHeight: embeddedAnalyticsState ? "77vh" : "82vh",
  overflowY: "auto",
  
};

const tableStyle = {
  borderSpacing: "0", // Remove default spacing between table elements
  borderCollapse: "separate", // Ensure separate borders
  fontSize: "5px",
};
const smallFontStyle = {
  fontSize: "12px", // Adjust the size as needed
  lineHeight: "1.5", // Optional: Adjust line height for better readability
  paddingTop: "1px", // Tighter padding
  margin: "0", // Remove margins
  paddingLeft: "0px",
};

const getSvg = (myItem) => {
  switch (myItem) {
    case "type1":
      return (
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 6H1.5M10.5 10H5.5M1.5 4.2L1.5 11.8C1.5 12.9201 1.5 13.4802 1.71799 13.908C1.90973 14.2843 2.21569 14.5903 2.59202 14.782C3.01984 15 3.57989 15 4.7 15L18.3 15C19.4201 15 19.9802 15 20.408 14.782C20.7843 14.5903 21.0903 14.2843 21.282 13.908C21.5 13.4802 21.5 12.9201 21.5 11.8V4.2C21.5 3.0799 21.5 2.51984 21.282 2.09202C21.0903 1.7157 20.7843 1.40974 20.408 1.21799C19.9802 1 19.4201 1 18.3 1L4.7 1C3.5799 1 3.01984 1 2.59202 1.21799C2.2157 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.07989 1.5 4.2Z"
            stroke="#004DE1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "type2":
      return (
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 6H1.5M10.5 10H5.5M1.5 4.2L1.5 11.8C1.5 12.9201 1.5 13.4802 1.71799 13.908C1.90973 14.2843 2.21569 14.5903 2.59202 14.782C3.01984 15 3.57989 15 4.7 15L18.3 15C19.4201 15 19.9802 15 20.408 14.782C20.7843 14.5903 21.0903 14.2843 21.282 13.908C21.5 13.4802 21.5 12.9201 21.5 11.8V4.2C21.5 3.0799 21.5 2.51984 21.282 2.09202C21.0903 1.7157 20.7843 1.40974 20.408 1.21799C19.9802 1 19.4201 1 18.3 1L4.7 1C3.5799 1 3.01984 1 2.59202 1.21799C2.2157 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.07989 1.5 4.2Z"
            stroke="#FF5355"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "type3":
      return (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "translateY(-4px)",
          }}
        >
          <path
            d="M15.5 7V4.2C15.5 3.0799 15.5 2.51984 15.282 2.09202C15.0903 1.71569 14.7843 1.40973 14.408 1.21799C13.9802 1 13.4201 1 12.3 1H4.7C3.5799 1 3.01984 1 2.59202 1.21799C2.21569 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.0799 1.5 4.2V11.8C1.5 12.9201 1.5 13.4802 1.71799 13.908C1.90973 14.2843 2.21569 14.5903 2.59202 14.782C3.01984 15 3.5799 15 4.7 15H7.5M11.5 14L13.5 16L18 11.5M10.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V10.2C21.5 9.07989 21.5 8.51984 21.282 8.09202C21.0903 7.71569 20.7843 7.40973 20.408 7.21799C19.9802 7 19.4201 7 18.3 7H10.7C9.57989 7 9.01984 7 8.59202 7.21799C8.21569 7.40973 7.90973 7.71569 7.71799 8.09202C7.5 8.51984 7.5 9.07989 7.5 10.2V17.8C7.5 18.9201 7.5 19.4802 7.71799 19.908C7.90973 20.2843 8.21569 20.5903 8.59202 20.782C9.01984 21 9.57989 21 10.7 21Z"
            stroke="#667085"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "type4":
      return (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "translateY(-4px)",
          }}
        >
          <path
            d="M15.5 7V4.2C15.5 3.0799 15.5 2.51984 15.282 2.09202C15.0903 1.71569 14.7843 1.40973 14.408 1.21799C13.9802 1 13.4201 1 12.3 1H4.7C3.5799 1 3.01984 1 2.59202 1.21799C2.21569 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.0799 1.5 4.2V11.8C1.5 12.9201 1.5 13.4802 1.71799 13.908C1.90973 14.2843 2.21569 14.5903 2.59202 14.782C3.01984 15 3.5799 15 4.7 15H7.5M11.5 14L13.5 16L18 11.5M10.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V10.2C21.5 9.07989 21.5 8.51984 21.282 8.09202C21.0903 7.71569 20.7843 7.40973 20.408 7.21799C19.9802 7 19.4201 7 18.3 7H10.7C9.57989 7 9.01984 7 8.59202 7.21799C8.21569 7.40973 7.90973 7.71569 7.71799 8.09202C7.5 8.51984 7.5 9.07989 7.5 10.2V17.8C7.5 18.9201 7.5 19.4802 7.71799 19.908C7.90973 20.2843 8.21569 20.5903 8.59202 20.782C9.01984 21 9.57989 21 10.7 21Z"
            stroke="#009520"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "type5":
      return (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 7V4.2C15.5 3.0799 15.5 2.51984 15.282 2.09202C15.0903 1.71569 14.7843 1.40973 14.408 1.21799C13.9802 1 13.4201 1 12.3 1H4.7C3.5799 1 3.01984 1 2.59202 1.21799C2.21569 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.0799 1.5 4.2V11.8C1.5 12.9201 1.5 13.4802 1.71799 13.908C1.90973 14.2843 2.21569 14.5903 2.59202 14.782C3.01984 15 3.5799 15 4.7 15H7.5M11.5 14L13.5 16L18 11.5M10.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V10.2C21.5 9.07989 21.5 8.51984 21.282 8.09202C21.0903 7.71569 20.7843 7.40973 20.408 7.21799C19.9802 7 19.4201 7 18.3 7H10.7C9.57989 7 9.01984 7 8.59202 7.21799C8.21569 7.40973 7.90973 7.71569 7.71799 8.09202C7.5 8.51984 7.5 9.07989 7.5 10.2V17.8C7.5 18.9201 7.5 19.4802 7.71799 19.908C7.90973 20.2843 8.21569 20.5903 8.59202 20.782C9.01984 21 9.57989 21 10.7 21Z"
            stroke="#009520"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      case "type6":
        return (
          <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5094 4.1969L9.67432 9.91234C10.3355 10.3752 10.6661 10.6066 11.0257 10.6962C11.3433 10.7754 11.6755 10.7754 11.9931 10.6962C12.3527 10.6066 12.6833 10.3752 13.3445 9.91234L21.5094 4.1969M6.3094 17.1969H16.7094C18.3896 17.1969 19.2296 17.1969 19.8714 16.8699C20.4359 16.5823 20.8948 16.1234 21.1824 15.5589C21.5094 14.9171 21.5094 14.0771 21.5094 12.3969V5.9969C21.5094 4.31674 21.5094 3.47666 21.1824 2.83493C20.8948 2.27044 20.4359 1.8115 19.8714 1.52388C19.2296 1.1969 18.3896 1.1969 16.7094 1.1969H6.3094C4.62924 1.1969 3.78916 1.1969 3.14743 1.52388C2.58294 1.8115 2.124 2.27044 1.83638 2.83493C1.5094 3.47666 1.5094 4.31674 1.5094 5.9969V12.3969C1.5094 14.0771 1.5094 14.9171 1.83638 15.5589C2.124 16.1234 2.58294 16.5823 3.14743 16.8699C3.78916 17.1969 4.62924 17.1969 6.3094 17.1969Z" stroke="#004DE1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
case "type7":
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3569 2.15043L20.8849 7.04364C21.1509 7.21654 21.2839 7.30299 21.3803 7.41831C21.4656 7.52039 21.5296 7.63846 21.5687 7.76561C21.6129 7.90926 21.6129 8.06789 21.6129 8.38515V15.7168C21.6129 17.397 21.6129 18.2371 21.2859 18.8788C20.9983 19.4433 20.5394 19.9022 19.9749 20.1899C19.3332 20.5168 18.4931 20.5168 16.8129 20.5168H6.41292C4.73276 20.5168 3.89268 20.5168 3.25094 20.1899C2.68646 19.9022 2.22752 19.4433 1.9399 18.8788C1.61292 18.2371 1.61292 17.397 1.61292 15.7168V8.38515C1.61292 8.06789 1.61292 7.90926 1.65709 7.76561C1.69619 7.63846 1.76026 7.52039 1.84556 7.41831C1.94193 7.30299 2.07493 7.21654 2.34093 7.04364L9.86895 2.15043M13.3569 2.15043C12.7256 1.74012 12.41 1.53496 12.0699 1.45514C11.7693 1.38458 11.4565 1.38458 11.1559 1.45514C10.8158 1.53496 10.5002 1.74012 9.86895 2.15043M13.3569 2.15043L20.581 6.84609C20.9249 7.06964 21.0969 7.18142 21.1564 7.32317C21.2085 7.44704 21.2085 7.58666 21.1564 7.71053C21.0969 7.85228 20.9249 7.96405 20.581 8.1876L13.3569 12.8833C12.7256 13.2936 12.41 13.4987 12.0699 13.5786C11.7693 13.6491 11.4565 13.6491 11.1559 13.5786C10.8158 13.4987 10.5002 13.2936 9.86895 12.8833L2.64485 8.1876C2.30092 7.96405 2.12896 7.85228 2.0694 7.71053C2.01735 7.58666 2.01735 7.44704 2.0694 7.32317C2.12896 7.18142 2.30092 7.06965 2.64485 6.84609L9.86895 2.15043" stroke="#798294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
    default:
      return (
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 6H1.5M10.5 10H5.5M1.5 4.2L1.5 11.8C1.5 12.9201 1.5 13.4802 1.71799 13.908C1.90973 14.2843 2.21569 14.5903 2.59202 14.782C3.01984 15 3.57989 15 4.7 15L18.3 15C19.4201 15 19.9802 15 20.408 14.782C20.7843 14.5903 21.0903 14.2843 21.282 13.908C21.5 13.4802 21.5 12.9201 21.5 11.8V4.2C21.5 3.0799 21.5 2.51984 21.282 2.09202C21.0903 1.7157 20.7843 1.40974 20.408 1.21799C19.9802 1 19.4201 1 18.3 1L4.7 1C3.5799 1 3.01984 1 2.59202 1.21799C2.2157 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.07989 1.5 4.2Z"
            stroke="#004DE1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
  }
};

export default function Maindashboard({alerts, patients}) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [openedCard, setOpenedCard] = useRecoilState(openedCardState);
  const [selectedPatient, setSelectedPatient] = useRecoilState(selectedPatientDashboard);

  const [alertsState, setAlertsState]=useState(alerts)
  const [alertsState0, setAlertsState0]=useState(alerts)

  const [selectedPriority, setSelectedPriority]=useState(['High','Medium','Low'])
  // Detect zoom level
  const detectZoom = () => {
    const zoom = window.devicePixelRatio * 100;
    console.log("zoom", zoom);
    setZoomLevel(zoom);
  };
  console.log("selectedPriority",selectedPriority)

  // Add event listener to detect zoom changes
  useEffect(() => {
    detectZoom();
    window.addEventListener("resize", detectZoom);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", detectZoom);
    };
  }, []);
  

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const [embeddedAnalytics, setEmbeddedAnalytics] = useRecoilState(embeddedAnalyticsState);
  const [selctedAnalyticsState,setSelectedAnalytictsState]=useRecoilState(selectedAnalytics)

  const togglePriority=((level)=>{
    console.log('level',level)
    setSelectedPriority(level)
    setAlertsState(prev=>alertsState0?.filter((item)=>{
      return level?.includes(item?.priority)
    }))
  })

  return (
    <div
      style={{
        ...(openedCard === "all" ? { minWidth: "100%" } : {}),
      }}
    >
      {/* className="flex flex-col min-h-screen px-[-10px] mt-[-15px]" */}
      {/* <header className="flex flex-col items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4 mt-2">
        <Input className="w-64" placeholder="Search for patient" type="search" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filters <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Filter 1</DropdownMenuItem>
            <DropdownMenuItem>Filter 2</DropdownMenuItem>
            <DropdownMenuItem>Filter 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
     </header> */}
      <main
        className={` ${
          openedCard != "all"
            ? "flex-1 p-0 grid gap-6 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1"
            : zoomLevel >= 125
            ? "flex-1 p-0 grid gap-6 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1"
            : "flex-1 p-0 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        }`}
        // className="flex-1 p-0 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {(openedCard == "all" || openedCard == "Alerts") && (
          <Card
            className="col-span-full md:col-span-2 lg:col-span-1 scroll-container"
            style={{
              ...cardStyleAlerts,
              maxHeight: embeddedAnalytics ? "77vh" : "87vh",
              "--scrollbar-track-color": "#F2F4F8",
              "--scrollbar-thumb-color": "#E2E4E7",
              "--scrollbar-thumb-hover-color": "#C5C8CE",
              maxWidth: openedCard == 'Alerts' ? '19vw':'100vw',
              minWidth: openedCard == 'Alerts' ? '19vw': "31vw",
            }}
          >
            <AlertsCardHeader alerts={alertsState} togglePriority={togglePriority}></AlertsCardHeader>
            <CardContent style={{cursor:'pointer'}}>
              <Table style={tableStyle}>
                <TableBody>
                  {alertsState.map((alert, index) => (
                    <TableRow key={index} className="relative">
                      <div className={`absolute left-0 top-0 bottom-0 w-[0.4vh] ${getPriorityColor(alert?.priority)} mt-[3px]  mb-[8px] rounded-tl-[1vh] rounded-bl-[1vh]`} style={{paddingLeft:'4px'}}/>
                      <TableCell
                        style={smallFontStyle}
                        onClick={() => {
                          setSelectedPatient(alert)
                          if (openedCard != "Alerts") {
                            setOpenedCard("Alerts");
                            setSelectedAnalytictsState('all')

                            sessionStorage.setItem("openedCard", "Alerts");
                          } else {
                            setSelectedAnalytictsState('all')

                            // setOpenedCard("all");
                            // setOpenedCard("all");
                            // sessionStorage.setItem("openedCard", "all");
                          }
                        }}
                      >
                        <div
                          className="flex justify-between items-start"
                          style={{...cardStyle, backgroundColor: (selectedPatient?.mrn == alert?.mrn && openedCard != "all" ? '#f5f5f5' : 'transparent')}}
                        >
                          <div
                            className="flex gap-2 mt-0"
                            style={{ maxWidth: "90%", overflow: "auto" }}
                          >
                            <input type="checkbox" className="h-6 w-3" />
                            <div>
                              <div className="flex gap-2 mt-0 cursor-pointer">
                                <div className="text-base font-medium">
                                  {alert.patientName} - {alert.sessionDate}
                                </div>
                              </div>
                              <div className="text-[10px] text-muted-foreground">
                                Remote - {alert?.manufacturer} - {alert?.mrn}
                              </div>
                              {openedCard=='all' && <div className="flex gap-1 mt-1">
                                {alert.badges.map((badge, idx) => (
                                  <Badge
                                    key={idx}
                                    variant={badge.variant}
                                    style={{
                                      ...badge.style,
                                      paddingLeft: "4px",
                                      paddingRight: "4px",
                                    }}
                                    className="text-[10px]"
                                  >
                                    {badge.text}
                                  </Badge>
                                ))}
                              </div>}
                              {openedCard=='Alerts' && <div className="flex gap-1 mt-1">
                                {alert.badges.filter((item,index)=>index<1).map((badge, idx) => (
                                  <><Badge
                                    key={idx}
                                    variant={badge.variant}
                                    style={{
                                      ...badge.style,
                                      paddingLeft: "4px",
                                      paddingRight: "4px",
                                    }}
                                    className="text-[10px]"
                                  >
                                    {badge.text}
                                  </Badge>
                                  <Badge
                                    key={idx}
                                    variant={badge.variant}
                                    style={{
                                      backgroundColor:'lightgrey',
                                      color:'black',
                                      paddingLeft: "6px",
                                      paddingRight: "6px",
                                    }}
                                    className="text-[10px]"
                                  >
                                    {'+'}
                                  </Badge>
                                  </>
                                ))}
                              </div>}
                            </div>
                          </div>
                          <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                              }}
                            >
                              <PopoverTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggle();
                                  }}
                                >
                                  <MoreVertical className="h-3 w-3" />
                                  
                                </Button>
                              </PopoverTrigger>
                              <div
                                style={{
                                  position: "absolute",
                                  top: 45,
                                  right: 7,
                                  display: "flex",
                                  flexDirection: "row"
                                }}
                              >
                                {(alert.icons || []).map((item) => {
                                  

                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: item =='type7' ? '-0.3vh' : '' 
                                      }}
                                    >
                                      <div style={{ width: "0.5vw"}}></div>
                                      {getSvg(item)}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            <PopoverContent
                              className="w-86"
                              align="end"
                              style={{
                                width: "18vw",
                              }}
                            >
                              <div>
                                <div className="flex gap-2 mt-0">
                                  <div className="text-base font-medium">
                                    {alert.patientName}
                                  </div>
                                </div>
                                {/* Horizontal line with spacing */}
                                <div className="mt-2 mb-2">
                                  <hr className="border-t border-gray-300" />
                                </div>
                              </div>

                              <div
                                className="flex items-start gap-3 "
                                style={{
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                }}
                              >
                                <div className="w-1 h-full min-h-[24px] bg-red-500 rounded-full" />
                                <div className="grid gap-0.5">
                                  <div className="text-sm">
                                    <span className="font-medium">1</span>{" "}
                                    episode of{" "}
                                    <span className="font-medium">VT</span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="flex items-start gap-3"
                                style={{ paddingBottom: "10px" }}
                              >
                                <div className="w-1 h-full min-h-[24px] bg-yellow-500 rounded-full" />
                                <div className="grid gap-0.5">
                                  <div className="text-sm">
                                    <span className="font-medium">RV</span>{" "}
                                    impedance is{" "}
                                    <span className="font-medium">1146 Ω</span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="flex items-start gap-3"
                                style={{ paddingBottom: "10px" }}
                              >
                                <div className="w-1 h-full min-h-[24px] bg-yellow-500 rounded-full" />
                                <div className="grid gap-0.5">
                                  <div className="text-sm">
                                    <span className="font-medium">10</span>{" "}
                                    episodes of{" "}
                                    <span className="font-medium">RMS</span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="flex items-start gap-3"
                                style={{ paddingBottom: "10px" }}
                              >
                                <div className="w-1 h-full min-h-[24px] bg-yellow-500 rounded-full" />
                                <div className="grid gap-0.5">
                                  <div className="text-sm">
                                    <span className="font-medium">RV</span>{" "}
                                    sensing amplitude is{" "}
                                    <span className="font-medium">1.5 V</span>
                                  </div>
                                </div>
                              </div>
                              <PopoverClose asChild>
                                <Button
                                  className="w-full"
                                  variant="default"
                                  style={{ backgroundColor: "#004DE1" }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleClose(e);
                                  }}
                                >
                                  Close
                                </Button>
                              </PopoverClose>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        {(openedCard == "all" || openedCard == "Scheduled") && (
          <Card
            className="col-span-full md:col-span-2 lg:col-span-1 scroll-container"
            style={{
              ...cardStyleScheduled,
              maxHeight: embeddedAnalytics ? "77vh" : "87vh",
              "--scrollbar-track-color": "#F2F4F8",
              "--scrollbar-thumb-color": "#E2E4E7",
              "--scrollbar-thumb-hover-color":
                "#C5C8CE" /* A slightly darker color for hover */,
                maxWidth: openedCard == 'Scheduled' ? '19vw':'100vw',
              minWidth: openedCard == 'Scheduled' ? '19vw': "31vw",
            }}
          >
            <CardHeader style={{ position: "relative" }}>
              <div className="flex gap-2 mt-0">
                <input type="checkbox" className="h-3 w-3" />
                <CardTitle>Scheduled  ({patients?.length || 0})</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table style={tableStyle}>
                <TableBody>
                  {[...patients].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell
                        style={smallFontStyle}
                        onClick={() => {
                          setSelectedPatient(_)
                          if (openedCard != "Scheduled") {
                            setOpenedCard("Scheduled");
                            setSelectedAnalytictsState('all')

                            sessionStorage.setItem("openedCard", "Scheduled");
                          } else {
                            // setOpenedCard("all");
                            setSelectedAnalytictsState('all')

                            // sessionStorage.setItem("openedCard", "all");
                          }
                        }}
                      >
                        <div
                          className="flex justify-between items-center"
                          style={{...cardStyle,
                            backgroundColor: (selectedPatient?.mrn == _?.mrn && openedCard != "all" ? '#f5f5f5' : 'transparent')}}
                        >
                          <div>
                            <div className="flex gap-2 mt-0">
                              <input type="checkbox" className="h-6 w-3" />

                              <div className="text-base font-medium cursor-pointer">
                                {_?.patientName} - {_?.mrn}
                              </div>
                            </div>
                            <div className="text-[12px] text-muted-foreground">
                              Scheduled - {_.scheduledDate} - {_?.manufacturer}
                            </div>
                          </div>
                          <div className="flex" style={{position:'relative'}}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                position:'absolute',
                                top:'-25px',
                                right:'10px'
                              }}
                            >
                               {(_.icons || []).map((item) => {
                                  

                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <div style={{ height: "0.5vh" }}></div>
                                      {getSvg(item)}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        {(openedCard == "all" || openedCard == "Analytics") && (
          <Card
            className="col-span-full md:col-span-2 lg:col-span-1 scroll-container"
            style={{
              ...cardStyleAnalytics,
              maxHeight: embeddedAnalytics ? "77vh" : "87vh",
              "--scrollbar-track-color": "#F2F4F8",
              "--scrollbar-thumb-color": "#E2E4E7",
              "--scrollbar-thumb-hover-color":
                "#C5C8CE" /* A slightly darker color for hover */,
            }}
          >
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivePatientsAnalytics />
              </div>

              <div className="my-2">
                <div className="flex gap-2 mt-0">
                  <div className="flex-1">
                    <Disconnected />
                  </div>
                  <div className="flex-1">
                    <CIEDAlerts />
                  </div>
                </div>
              </div>

              <div className="my-2">
                <div className="flex gap-2 mt-0">
                  <div className="flex-1">
                    <CMEMSAlerts />
                  </div>
                  <div className="flex-1" onClick={()=>{
                                          setSelectedAnalytictsState('LowBatteries')

                  }}>
                    <LowBatteries />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
