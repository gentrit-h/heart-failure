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
import { openedCardState,embeddedAnalyticsState } from "../../../state/atoms";

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
  maxHeight: embeddedAnalyticsState?"77vh":"82vh",
  overflowY: "auto",
};

const cardStyleScheduled = {
  backgroundImage: "linear-gradient(to right, #4CAF50, rgba(255, 0, 0, 0))",
  backgroundPosition: "top",
  backgroundSize: "100% 4px", // Adjust height of the border here
  backgroundRepeat: "no-repeat",
  maxHeight: embeddedAnalyticsState?"77vh":"82vh",
  overflowY: "auto",
};

const cardStyleAnalytics = {
  backgroundImage: "linear-gradient(to right, #0054F6, rgba(255, 0, 0, 0))",
  backgroundPosition: "top",
  backgroundSize: "100% 4px", // Adjust height of the border here
  backgroundRepeat: "no-repeat",
  maxHeight: embeddedAnalyticsState?"77vh":"82vh",
  minHeight: embeddedAnalyticsState?"77vh":"82vh",
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
      ...(openedCard === 'all' ? { minWidth: '100%' } : {})
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
              '--scrollbar-track-color': 'lightgray',
              '--scrollbar-thumb-color': 'rgba(255, 0, 0, 0.3)',
              '--scrollbar-thumb-hover-color': 'gray',
            }}          >
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
                      <TableCell style={smallFontStyle}
                      onClick={() => {
                        if (openedCard != "Alerts") {
                          setOpenedCard("Alerts");
                          sessionStorage.setItem('openedCard', 'Alerts');
                        } else {
                          setOpenedCard("all");
                          sessionStorage.setItem('openedCard', 'all');
            
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
          style={{
            ...cardStyleScheduled,
            '--scrollbar-track-color': 'lightgray',
            '--scrollbar-thumb-color': 'rgba(76, 175, 80, 0.3)',
            '--scrollbar-thumb-hover-color': 'gray',
          }}           className="scroll-container">
            <CardHeader>
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
                      <TableCell style={smallFontStyle}
                      onClick={() => {
                        if (openedCard != "Scheduled") {
                          setOpenedCard("Scheduled");
                          sessionStorage.setItem('openedCard', 'Scheduled');
                        } else {
                          setOpenedCard("all");
                          sessionStorage.setItem('openedCard', 'all');
            
                        }
                      }}
                      >
                        <div
                          className="flex justify-between items-center"
                          style={cardStyle}
                        >
                          <div>
                            <div className="flex gap-2 mt-1">
                              <input type="checkbox" className="mr-2" />
                              <div className="text-base font-medium">
                                Patient Name - CMEMS/CIED
                              </div>
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              Scheduled - 01/06/24
                            </div>
                          </div>
                          <div className="flex">
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Mail className="h-4 w-4" />
                            </Button>
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
              '--scrollbar-track-color': 'lightgray',
              '--scrollbar-thumb-color': 'rgba(0, 84, 246, 0.3)',
              '--scrollbar-thumb-hover-color': 'gray',
            }}           >
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
