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
  return (
    <div className="pr-3">
    <div className="space-y-6">
      {/* Measurements Grid */}
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
      <TableHead></TableHead> {/* Empty cell for the icons */}
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="h-[60px] hover:bg-transparent">
      <TableCell className="text-center">dd/mm/yyyy</TableCell>
      <TableCell className="text-center">15 mmHg</TableCell>
      <TableCell className="text-center">25 mmHg</TableCell>
      <TableCell className="text-center">30 mmHg</TableCell>
      <TableCell className="text-center">19 mmHg</TableCell>
      <TableCell className="text-center">5 mmHg</TableCell>
      <TableCell className="text-center">80 bpm</TableCell>
      <TableCell>
        <div className="flex gap-4 items-end">
          <LineChartIcon className="h-5 w-5 text-blue-500" />
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
      <div className="w-full aspect-[1385/240]">
  <img src={img3} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
</div>
        {/* <img src={img3} className="w-[100%] cursor-pointer" style={{height: addPixelsForBiggerScreens>0 ? "400px":""}} alt="placeholder" /> */}
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
        {/* <img src={img2} className="w-[100%] h-[319px] cursor-pointer" alt="placeholder" /> */}
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
                <TableRow>
                  <TableHead className="pl-[100px]"  style={{backgroundColor: "white"}}>Category</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Name</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Dose</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Other Drugs</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications.map((med, index) => (
                  <TableRow key={index} className="h-[60px]">
                    <TableCell className="pl-[100px]">{med.category}</TableCell>
                    <TableCell className="flex justify-center items-center">
                      <Select>
                        <SelectTrigger className="w-32 mt-2">
                          <SelectValue placeholder="Option 1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">{med.otherDrugs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        </div>
    </div>
    </div>
  )
}