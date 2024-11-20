"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "0", desktop: 20,  },
  { date: "0.25", desktop: 15, },
  { date: "0.5", desktop: 7, },
  { date: "0.75", desktop: 35,},
  { date: "1", desktop: 30,  },
  { date: "1", desktop: 28,  },
  { date: "1", desktop: 20,  },
  { date: "1", desktop: 15,  },
  { date: "2", desktop: 11,  },
  { date: "2", desktop: 38,  },
  { date: "2", desktop: 28,  },
  { date: "2", desktop: 20, },
  { date: "2", desktop: 19,  },
  { date: "3", desktop: 11,  },
  { date: "3", desktop: 38,  },
  { date: "3", desktop: 18,  },
  { date: "3", desktop: 30,  },
  { date: "4", desktop: 15,  },
  { date: "4", desktop: 11,  },
  { date: "4", desktop: 36, },
  { date: "4", desktop: 18,  },
  { date: "5", desktop: 35, },
  { date: "5", desktop: 14,  },
  { date: "5", desktop: 38,  },
  { date: "5", desktop: 30,  },
  { date: "6", desktop: 18,  },
  { date: "6", desktop: 20,  },
  { date: "6", desktop: 15,  },
  { date: "6", desktop: 11,  },
  { date: "7", desktop: 38,  },
  { date: "7", desktop: 18,  },
  { date: "7", desktop: 29,  },
  { date: "7", desktop: 15,  },
  { date: "8", desktop: 11,  },
  { date: "8", desktop: 33,  },
  { date: "8", desktop: 28,  },
  { date: "8", desktop: 20,  },
  { date: "9", desktop: 15,  },
  { date: "9", desktop: 11,  },
  { date: "9", desktop: 37,  },
  { date: "9", desktop: 17,  },
  { date: "10", desktop: 20,  },
  { date: "10", desktop: 35,  },
  { date: "10", desktop: 11,  },
  { date: "10", desktop: 36,  },
  { date: "11", desktop: 18,  },
  { date: "11", desktop: 30,  },
  { date: "11", desktop: 15,  },
  { date: "11", desktop: 11,  },
  { date: "12", desktop: 39,  },
  { date: "12", desktop: 20,  },
  { date: "12", desktop: 35,  },
  { date: "12", desktop: 15,  },
  { date: "13", desktop: 11,  },
  { date: "13", desktop: 35,  },
  { date: "13", desktop: 21,  },
  { date: "13", desktop: 39,  },
  { date: "14", desktop: 25,  },
  { date: "14", desktop: 11,  },
  { date: "14", desktop: 36,  },
  { date: "14", desktop: 17,  },
  { date: "15", desktop: 34,  },
  { date: "15", desktop: 15,  },
  { date: "15", desktop: 11,  },
  { date: "15", desktop: 30,  },
  { date: "16", desktop: 28,  },
  { date: "16", desktop: 20,  },
  { date: "16", desktop: 15,  },
  { date: "16", desktop: 11,  },
  { date: "17", desktop: 30,  },
  { date: "17", desktop: 28,  },
  { date: "17", desktop: 20,  },
  { date: "17", desktop: 15,  },
  { date: "18", desktop: 11,  },
  { date: "18", desktop: 38,  },
  { date: "18", desktop: 18,  },
  { date: "18", desktop: 34,  },
  { date: "19", desktop: 15,  },
  { date: "19", desktop: 11,  },
  { date: "19", desktop: 30,  },
]

const chartConfig = {
  views: {
    label: "mmHg",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function WaveForm() {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("desktop");
  
    const yAxisTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  
    return (
      <Card>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Wave Form</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
            <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                minTickGap={32}
                interval={3}
                tickFormatter={(value) => value}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                ticks={yAxisTicks}
                tickCount={yAxisTicks.length}
                domain={[0, 100]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => value}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  }
      
  
