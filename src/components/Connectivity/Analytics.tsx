"use client"

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis,LabelList } from "recharts";
import { Bell, ChevronDown, Mail, MoreVertical, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useState } from 'react';



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Disconnected from "../Dashboard/DashBoardCards.tsx/analytics/Disconnected";
import CIEDAlerts from "../Dashboard/DashBoardCards.tsx/analytics/CIEDAlerts";
import CMEMSAlerts from "../Dashboard/DashBoardCards.tsx/analytics/CMEMSAlerts";
import LowBatteries from "../Dashboard/DashBoardCards.tsx/analytics/LowBatteries";
import ActivePatientsAnalytics from "../Dashboard/DashBoardCards.tsx/analytics/Analytics";
import NoNewReadings from "./NoNewReadings";
import BillingReset from "./BillingReset";
import DisconnectedTrend from "./DisconnectedTrend";
import DisconnectedCount from "./DisconnectedCounts";


let chartData1 = {
    MDT: [
        { month: "January", ICD: 86, ILR: 80, PPM: 50, Other: 70, total: 286 },
        { month: "February", ICD: 86, ILR: 90, PPM: 52, Other: 71, total: 299 },
        { month: "March", ICD: 89, ILR: 91, PPM: 56, Other: 72, total: 308 },
        { month: "April", ICD: 89, ILR: 100, PPM: 58, Other: 76, total: 323 },
        { month: "May", ICD: 92, ILR: 120, PPM: 59, Other: 78, total: 349 },
        { month: "June", ICD: 92, ILR: 125, PPM: 62, Other: 75, total: 354 },
    ],
    BIO: [
        { month: "January", ICD: 43, ILR: 56, PPM: 50, Other: 70, total: 219 },
        { month: "February", ICD: 70, ILR: 58, PPM: 52, Other: 71, total: 251 },
        { month: "March", ICD: 76, ILR: 58, PPM: 56, Other: 72, total: 262 },
        { month: "April", ICD: 77, ILR: 58, PPM: 58, Other: 76, total: 269 },
        { month: "May", ICD: 77, ILR: 60, PPM: 59, Other: 74, total: 270 },
        { month: "June", ICD: 77, ILR: 61, PPM: 62, Other: 78, total: 278 },
    ],
    BSX: [
        { month: "January", ICD: 86, ILR: 80, PPM: 50, Other: 70, total: 286 },
        { month: "February", ICD: 86, ILR: 90, PPM: 52, Other: 71, total: 299 },
        { month: "March", ICD: 89, ILR: 91, PPM: 56, Other: 72, total: 308 },
        { month: "April", ICD: 89, ILR: 100, PPM: 58, Other: 76, total: 323 },
        { month: "May", ICD: 92, ILR: 120, PPM: 59, Other: 78, total: 349 },
        { month: "June", ICD: 92, ILR: 125, PPM: 62, Other: 85, total: 364 },
    ],
    STJ: [
        { month: "January", ICD: 56, ILR: 70, PPM: 50, Other: 70, total: 246 },
        { month: "February", ICD: 56, ILR: 70, PPM: 52, Other: 71, total: 249 },
        { month: "March", ICD: 59, ILR: 81, PPM: 56, Other: 72, total: 268 },
        { month: "April", ICD: 59, ILR: 85, PPM: 58, Other: 76, total: 278 },
        { month: "May", ICD: 62, ILR: 90, PPM: 59, Other: 78, total: 289 },
        { month: "June", ICD: 62, ILR: 105, PPM: 62, Other: 75, total: 304 },
    ],
            total:[
                { month: "January", ICD: 311, ILR: 286, PPM: 206, Other: 280, total: 1083 },
                { month: "February", ICD: 298, ILR: 308, PPM: 212, Other: 289, total: 1107 },
                { month: "March", ICD: 310, ILR: 320, PPM: 224, Other: 292, total: 1146 },
                { month: "April", ICD: 314, ILR: 343, PPM: 230, Other: 304, total: 1221 },
                { month: "May", ICD: 328, ILR: 390, PPM: 235, Other: 310, total: 1263 },
                { month: "June", ICD: 323, ILR: 381, PPM: 239, Other: 313, total: 1256 }
            ]
    }
    const cardStyleAnalytics = {
        backgroundImage: "linear-gradient(to right, #0054F6, rgba(255, 0, 0, 0))",
        backgroundPosition: "top",
        backgroundSize: "100% 4px", // Adjust height of the border here
        backgroundRepeat: "no-repeat",
        maxHeight: true ? "77vh" : "82vh",
        minHeight: true ? "77vh" : "82vh",
        overflowY: "auto",
        
      };


const chartConfig = {
    ICD: {
      label: "ICD",
      color: "#0054F6",
    },
    ILR: {
        label: "ILR",
        color: "#3378FE",
      },
      PPM: {
        label: "PPM",
        color: "#72A2FF",
      },
      Other: {
        label: "Other",
        color: "#0BA5EC",
      },
  } satisfies ChartConfig

export default function ConnectivityAnalytics() {
    const [selectedFilter,setSelectedFilter]=useState('total')
  return (
    <Card
            className="col-span-full md:col-span-2 lg:col-span-1 scroll-container"
            style={{
              ...cardStyleAnalytics,
              maxHeight: "82.4vh",
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
                <DisconnectedTrend />
              </div>

              <div className="my-2">
                <div className="flex gap-2 mt-0">
                  <div className="flex-1">
                    <NoNewReadings />
                  </div>
                  <div className="flex-1">
                    <BillingReset />
                  </div>
                </div>
              </div>

              <div className="my-2">
                <div className="flex gap-2 mt-0">
                  <div className="flex-1">
                    <DisconnectedCount />
                  </div>
                  <div className="flex-1">
                    {/* <LowBatteries /> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
  )
}
