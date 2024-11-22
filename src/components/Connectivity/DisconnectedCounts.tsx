"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { type: "ILR", count: 4, fill: "var(--color-ILR)" },
  { type: "ICD", count: 2, fill: "var(--color-ICD)" },
  { type: "PPM", count: 5, fill: "var(--color-PPM)" },
  { type: "other", count: 8, fill: "var(--color-other)" },
];

const chartConfig = {
  count: {
    label: "count",
  },
  ILR: {
    label: "ILR",
    color: "#3378FE",
  },
  ICD: {
    label: "ICD",
    color: "#72A2FF",
  },
  PPM: {
    label: "PPM",
    color: "#0054F6",
  },

  other: {
    label: "Other",
    color: "#0BA5EC",
  },
} satisfies ChartConfig;

export default function DisconnectedCount() {
  const totalcount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <Card className="flex flex-col" style={{ height: "100%" }}>
      <CardHeader
        className="items-center pb-0"
        style={{
          paddingTop: "0.5rem",
          paddingRight: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "0.5rem",
        }}
      >
        <CardTitle className="text-sm">Disconnected</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="type"
              innerRadius={"60%"}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalcount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {/* count */}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
        </div>
      </CardFooter>
    </Card>
  );
}
