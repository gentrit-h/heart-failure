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

export default function ActivePatientsAnalytics() {
    const [selectedFilter,setSelectedFilter]=useState('total')
  return (
    <Card>
      <CardHeader>
        <div className="flex" style={{height:"100%"}}>
        <CardTitle>Active Patients </CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
        <div className="flex-1"></div>
        <div>{selectedFilter!='x' ? 'Selected: '+ selectedFilter:''}</div>
        <div className="flex-1"></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedFilter("MDT")}>MDT</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("BIO")}>BIO</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("BSX")}>BSX</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("STJ")}>STJ</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("total")}>x</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData1?.[selectedFilter]}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel={false} />} />
            <ChartLegend content={<ChartLegendContent />} />
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
              style={{ fontSize: "12px", fontWeight: "bold", fill: "#333" }}
            />         
          </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
