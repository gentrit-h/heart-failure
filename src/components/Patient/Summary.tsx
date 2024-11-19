"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { FileText, LineChartIcon } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import React from "react";
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBars } from "./ProgressBars";

// Sample data for the trend graphs
const trendData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 9, 18 + i).toLocaleDateString(),
  paSystolic: Math.random() * 20 + 10,
  paMean: Math.random() * 20 + 30,
  paDiastolic: Math.random() * 20 + 50,
  heartRate: Math.random() * 20 + 70,
}))

const symptomData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 9, 18 + i).toLocaleDateString(),
  shortness: Math.random() * 2,
  palpitations: Math.random() * 2 + 1,
  weightGain: Math.random() * 2 + 2,
  swelling: Math.random() * 2 + 3,
}))

const medications = [
    { category: "Beta Blockers", otherDrugs: "AAD" },
    { category: "Diuretics", otherDrugs: "MISC" },
    { category: "Entresto", otherDrugs: "ADAC" },
    { category: "ACE-E / AR-B", otherDrugs: "-" },
    { category: "SGLPT", otherDrugs: "-" },
    { category: "KT supplements", otherDrugs: "-" },
  ]

export default function Summary() {
  function SelectModified() {
    return (<><Select>
              <SelectTrigger className="w-32 mt-2">
                <SelectValue placeholder="Option 1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select></>)
  }
  return (
    <div className="flex items-center justify-center">
    <div className="pr-3  max-w-[1600px]">
    <div className="space-y-6">
      {/* Measurements Grid */}
      <div className="flex items-center justify-center">
<ProgressBars />
      </div>
      <div className="rounded-md border">
      <Table>
  <TableHeader>
    <TableRow  className="">
      <TableHead className="text-center">Last Measurement</TableHead>
      <TableHead className="text-center">Goal</TableHead>
      <TableHead className="text-center">Last Systolic PAP</TableHead>
      <TableHead className="text-center">Last Diastolic PAP</TableHead>
      <TableHead className="text-center">Last Mean PAP</TableHead>
      <TableHead className="text-center">Pulse Pressure</TableHead>
      <TableHead className="text-center">PA Heart Rate</TableHead>
      <TableHead className="text-center">Waveform</TableHead>
      <TableHead className="text-center">Note</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="h-[60px] hover:bg-transparent">
      <TableCell className="text-center">19/11/2024</TableCell>
      <TableCell className="text-center">15 mmHg</TableCell>
      <TableCell className="text-center">25 mmHg</TableCell>
      <TableCell className="text-center">30 mmHg</TableCell>
      <TableCell className="text-center">19 mmHg</TableCell>
      <TableCell className="text-center">5 mmHg</TableCell>
      <TableCell className="text-center">80 bpm</TableCell>
      <TableCell>
        <div className="flex justify-center">
        <LineChartIcon className="h-5 w-5 text-blue-500" />
        </div>
      </TableCell>
      <TableCell>
        <div className="flex justify-center items-center">
      <FileText className="h-5 w-5 text-blue-500" />
      </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="rounded-md border">
<Table>
  <TableHeader>
    <TableRow  className="h-[44px]">
      <TableHead className="pl-5">Trend Graph</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="hover:bg-transparent">
      <TableCell className="text-center px-3 py-2">
        <div className=" flex justify-center items-center ">
      <div className="w-full max-w-[1400px] aspect-[1385/240]">
  <img src={img3} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
</div>
</div>
        {/* <img src={img3} className="w-[100%] cursor-pointer" style={{height: addPixelsForBiggerScreens>0 ? "400px":""}} alt="placeholder" /> */}
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="w-full aspect-[1438/319]">
  <img src={img2} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
</div>
        <div>
        <Card>
          <CardHeader className="p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Medication</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <Table>
              <TableHeader>
                <TableRow className="h-[60px]">
                  <TableHead className="text-center border-r"  style={{backgroundColor: "#F9FAFB"}}>Category</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Beta Blockers</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Diuretics</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>ARNIs</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>ACEi / ARBs</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>SGLT2 Inhibitors</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Ivabradine</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Other Drugs</TableHead>
                </TableRow>
                <TableRow className="h-[60px]">
                  <TableHead className="text-center border-r"  style={{backgroundColor: "#F9FAFB"}}>Name</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                    <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                    </TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                  <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                  </TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                  <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                  </TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                  <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                  </TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                  <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                  </TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                  <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                  </TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>
                  <div className="flex items-center justify-center">
                    <SelectModified />
                    </div>
                  </TableHead>
                </TableRow>
                <TableRow className="h-[60px]">
                  <TableHead className="text-center border-r"  style={{backgroundColor: "#F9FAFB"}}>Dose</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>-</TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </CardContent>
        </Card>
        </div>
    </div>
    </div>
    </div>
  )
}