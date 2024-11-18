import { Bell, ChevronDown, Mail, MoreVertical, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { openedCardState, embeddedAnalyticsState } from "../../../state/atoms";

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
  minWidth: "26vw",
};

const cardStyleScheduled = {
  backgroundImage: "linear-gradient(to right, #4CAF50, rgba(255, 0, 0, 0))",
  backgroundPosition: "top",
  backgroundSize: "100% 4px", // Adjust height of the border here
  backgroundRepeat: "no-repeat",
  maxHeight: embeddedAnalyticsState ? "77vh" : "82vh",
  overflowY: "auto",
  minWidth: "26vw",
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

export default function Maindashboard() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [openedCard, setOpenedCard] = useRecoilState(openedCardState);

  // Detect zoom level
  const detectZoom = () => {
    const zoom = window.devicePixelRatio * 100;
    console.log("zoom", zoom);
    setZoomLevel(zoom);
  };

  // Add event listener to detect zoom changes
  useEffect(() => {
    detectZoom();
    window.addEventListener("resize", detectZoom);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", detectZoom);
    };
  }, []);

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
              "--scrollbar-track-color": "#F2F4F8",
              "--scrollbar-thumb-color": "#E2E4E7",
              "--scrollbar-thumb-hover-color":
                "#C5C8CE" /* A slightly darker color for hover */,
            }}
          >
            <CardHeader style={{ position: "relative" }}>
              <div className="flex gap-2 mt-0">
                <input type="checkbox" className="h-3 w-3" />
                <CardTitle>Alerts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table style={tableStyle}>
                <TableBody>
                  {[...Array(20)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell
                        style={smallFontStyle}
                        onClick={() => {
                          if (openedCard != "Alerts") {
                            setOpenedCard("Alerts");
                            sessionStorage.setItem("openedCard", "Alerts");
                          } else {
                            setOpenedCard("all");
                            sessionStorage.setItem("openedCard", "all");
                          }
                        }}
                      >
                        <div
                          className="flex justify-between items-start"
                          style={cardStyle}
                        >
                          <div className="flex gap-2 mt-0">
                            <input type="checkbox" className="h-6 w-3" />
                            <div>
                              <div className="flex gap-2 mt-0">
                                <div className="text-base font-medium">
                                  Patient Name - CMEMS
                                </div>{" "}
                                {/* Reduced further */}
                              </div>
                              <div className="text-[10px] text-muted-foreground">
                                Scheduled - 01/06/24
                              </div>{" "}
                              {/* Tiny font */}
                              <div className="flex gap-1 mt-1">
                                <Badge
                                  variant="destructive"
                                  className="text-[9px]"
                                >
                                  Shock is true
                                </Badge>{" "}
                                {/* Smaller */}
                                <Badge
                                  variant="destructive"
                                  className="text-[9px]"
                                >
                                  ATP is true
                                </Badge>{" "}
                                {/* Smaller */}
                                <Badge
                                  style={{
                                    backgroundColor: "rgba(255, 165, 0, 0.7)",
                                  }}
                                  className="text-[9px]"
                                >
                                  Type VT - Untreated only
                                </Badge>{" "}
                                {/* Smaller */}
                                <Badge
                                  style={{
                                    backgroundColor: "rgba(245, 245, 245, 0.7)",
                                    color: "black",
                                  }}
                                  className="text-[9px]"
                                >
                                  10 Event(s)
                                </Badge>{" "}
                                {/* Smaller */}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-3 w-3" />{" "}
                            {/* Smaller icon */}
                          </Button>
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
              "--scrollbar-track-color": "#F2F4F8",
              "--scrollbar-thumb-color": "#E2E4E7",
              "--scrollbar-thumb-hover-color":
                "#C5C8CE" /* A slightly darker color for hover */,
            }}
          >
            <CardHeader style={{ position: "relative" }}>
              <div className="flex gap-2 mt-0">
                <input type="checkbox" className="h-3 w-3" />
                <CardTitle>Scheduled</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table style={tableStyle}>
                <TableBody>
                  {[...Array(20)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell
                        style={smallFontStyle}
                        onClick={() => {
                          if (openedCard != "Scheduled") {
                            setOpenedCard("Scheduled");
                            sessionStorage.setItem("openedCard", "Scheduled");
                          } else {
                            setOpenedCard("all");
                            sessionStorage.setItem("openedCard", "all");
                          }
                        }}
                      >
                        <div
                          className="flex justify-between items-center"
                          style={cardStyle}
                        >
                          <div>
                            <div className="flex gap-2 mt-0">
                              <input type="checkbox" className="h-6 w-3" />

                              <div className="text-base font-medium">
                                Patient Name - CMEMS/CIED
                              </div>
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              Scheduled - 01/06/24
                            </div>
                          </div>
                          <div className="flex">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div>
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22.608 10.1969H2.60803M11.608 14.1969H6.60803M2.60803 8.3969L2.60803 15.9969C2.60803 17.117 2.60803 17.6771 2.82602 18.1049C3.01777 18.4812 3.32373 18.7872 3.70005 18.9789C4.12787 19.1969 4.68793 19.1969 5.80803 19.1969L19.408 19.1969C20.5281 19.1969 21.0882 19.1969 21.516 18.9789C21.8923 18.7872 22.1983 18.4812 22.39 18.1049C22.608 17.6771 22.608 17.117 22.608 15.9969V8.3969C22.608 7.2768 22.608 6.71674 22.39 6.28892C22.1983 5.9126 21.8923 5.60663 21.516 5.41489C21.0882 5.1969 20.5281 5.1969 19.408 5.1969L5.80803 5.1969C4.68793 5.1969 4.12788 5.1969 3.70005 5.41489C3.32373 5.60663 3.01777 5.91259 2.82602 6.28892C2.60803 6.71674 2.60803 7.27679 2.60803 8.3969Z"
                                    stroke="#004DE1"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>

                              <div>
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.5094 7.1969L10.6743 12.9123C11.3355 13.3752 11.6661 13.6066 12.0257 13.6962C12.3433 13.7754 12.6755 13.7754 12.9931 13.6962C13.3527 13.6066 13.6833 13.3752 14.3445 12.9123L22.5094 7.1969M7.3094 20.1969H17.7094C19.3896 20.1969 20.2296 20.1969 20.8714 19.8699C21.4359 19.5823 21.8948 19.1234 22.1824 18.5589C22.5094 17.9171 22.5094 17.0771 22.5094 15.3969V8.9969C22.5094 7.31674 22.5094 6.47666 22.1824 5.83493C21.8948 5.27044 21.4359 4.8115 20.8714 4.52388C20.2296 4.1969 19.3896 4.1969 17.7094 4.1969H7.3094C5.62924 4.1969 4.78916 4.1969 4.14743 4.52388C3.58294 4.8115 3.124 5.27044 2.83638 5.83493C2.5094 6.47666 2.5094 7.31674 2.5094 8.9969V15.3969C2.5094 17.0771 2.5094 17.9171 2.83638 18.5589C3.124 19.1234 3.58294 19.5823 4.14743 19.8699C4.78916 20.1969 5.62924 20.1969 7.3094 20.1969Z"
                                    stroke="#004DE1"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
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
                  <div className="flex-1">
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
