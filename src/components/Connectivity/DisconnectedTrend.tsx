"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts";
import { Bell, ChevronDown, Mail, MoreVertical, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

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

let chartData1 = {
  MDT: [
    { month: "Monday", ICD: 8, ILR: 8, PPM: 5, Other: 7, total: 28 },
    { month: "Tuesday", ICD: 8, ILR: 9, PPM: 5, Other: 7, total: 29 },
    { month: "Wednesday", ICD: 8, ILR: 9, PPM: 5, Other: 7, total: 30 },
    { month: "Thursday", ICD: 8, ILR: 10, PPM: 5, Other: 7, total: 32 },
    { month: "Friday", ICD: 9, ILR: 12, PPM: 5, Other: 7, total: 34 },
    { month: "Saturday", ICD: 9, ILR: 12, PPM: 6, Other: 7, total: 35 },
    { month: "Sunday", ICD: 8, ILR: 9, PPM: 5, Other: 7, total: 30 },

  ],
  BIO: [
    { month: "Monday", ICD: 4, ILR: 5, PPM: 5, Other: 7, total: 21 },
    { month: "Tuesday", ICD: 7, ILR: 5, PPM: 5, Other: 7, total: 25 },
    { month: "Wednesday", ICD: 7, ILR: 5, PPM: 5, Other: 7, total: 26 },
    { month: "Thursday", ICD: 7, ILR: 5, PPM: 5, Other: 7, total: 26 },
    { month: "Friday", ICD: 7, ILR: 6, PPM: 5, Other: 7, total: 27 },
    { month: "Saturday", ICD: 7, ILR: 6, PPM: 6, Other: 7, total: 27 },
    { month: "Sunday", ICD: 7, ILR: 5, PPM: 5, Other: 7, total: 26 },
  
],
  BSX: [
    { month: "Monday", ICD: 8, ILR: 8, PPM: 5, Other: 7, total: 28 },
    { month: "Tuesday", ICD: 8, ILR: 9, PPM: 5, Other: 7, total: 29 },
    { month: "Wednesday", ICD: 8, ILR: 9, PPM: 5, Other: 7, total: 30 },
    { month: "Thursday", ICD: 8, ILR: 10, PPM: 5, Other: 7, total: 32 },
    { month: "Friday", ICD: 9, ILR: 12, PPM: 5, Other: 7, total: 34 },
    { month: "Saturday", ICD: 9, ILR: 12, PPM: 6, Other: 8, total: 36 },
    { month: "Sunday", ICD: 8, ILR: 9, PPM: 5, Other: 7, total: 30 },
  
],
  STJ: [
    { month: "Monday", ICD: 5, ILR: 7, PPM: 5, Other: 7, total: 24 },
    { month: "Tuesday", ICD: 5, ILR: 7, PPM: 5, Other: 7, total: 24 },
    { month: "Wednesday", ICD: 5, ILR: 8, PPM: 5, Other: 7, total: 26 },
    { month: "Thursday", ICD: 5, ILR: 8, PPM: 5, Other: 7, total: 27 },
    { month: "Friday", ICD: 6, ILR: 9, PPM: 5, Other: 7, total: 28 },
    { month: "Saturday", ICD: 6, ILR: 10, PPM: 6, Other: 7, total: 30 },
    { month: "Sunday", ICD: 5, ILR: 8, PPM: 5, Other: 7, total: 26 },
  
],
  total: [
    { month: "Monday", ICD: 31, ILR: 28, PPM: 20, Other: 28, total: 108 },
    {
      month: "Tuesday",
      ICD: 29,
      ILR: 30,
      PPM: 21,
      Other: 28,
      total: 110,
    },
    { month: "Wednesday", ICD: 31, ILR: 32, PPM: 22, Other: 29, total: 114 },
    { month: "Thursday", ICD: 31, ILR: 34, PPM: 23, Other: 30, total: 122 },
    { month: "Friday", ICD: 32, ILR: 39, PPM: 23, Other: 31, total: 126 },
    { month: "Saturday", ICD: 32, ILR: 38, PPM: 23, Other: 31, total: 125 },
    { month: "Sunday", ICD: 31, ILR: 32, PPM: 22, Other: 29, total: 114 },
  
],
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
} satisfies ChartConfig;

export default function DisconnectedTrend() {
  const [selectedFilter, setSelectedFilter] = useState("total");
  return (
    <Card >
      <CardHeader >
        <div className="flex" style={{ height: "100%", paddingBottom:'5px' }}>
          <CardTitle>Disconnected Patients </CardTitle>
          {/* <CardDescription>Monday - Saturday 2024</CardDescription> */}
          <div className="flex-1"></div>
          <div>
            {selectedFilter != "x" ? "Selected: " + selectedFilter : ""}
          </div>
          <div className="flex-1"></div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Filter <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedFilter("MDT")}>
                MDT
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("BIO")}>
                BIO
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("BSX")}>
                BSX
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("STJ")}>
                STJ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("total")}>
                x
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={chartData1?.[selectedFilter]} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel={false} />} />
            <ChartLegend content={<ChartLegendContent />}  />
            <Bar
              dataKey="ICD"
              stackId="a"
              fill="var(--color-ICD)"
              radius={[0, 0, 4, 4]}
            >
              {/* <LabelList
                dataKey="ICD"
                position="top"
                style={{ fontSize: "12px", fontWeight: "bold", fill: "#333" }}
              />          */}
            </Bar>
            <Bar
              dataKey="ILR"
              stackId="a"
              fill="var(--color-ILR)"
              radius={[0, 0, 0, 0]}
            >
              {/* <LabelList
              dataKey="ILR"
              position="top"
              style={{ fontSize: "12px", fontWeight: "bold", fill: "#333" }}
            />          */}
            </Bar>
            <Bar
              dataKey="PPM"
              stackId="a"
              fill="var(--color-PPM)"
              radius={[0, 0, 0, 0]}
            >
              {/* <LabelList
              dataKey="PPM"
              position="top"
              style={{ fontSize: "12px", fontWeight: "bold", fill: "#333" }}
            />          */}
            </Bar>
            <Bar
              dataKey="Other"
              stackId="a"
              fill="var(--color-Other)"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                dataKey="total"
                position="top"
                style={{ fontSize: "12px", fontWeight: "bold", fill: "#333", minHeight:'20px' }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  );
}
