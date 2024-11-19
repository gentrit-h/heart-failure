'use client'

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from 'react'
import img4 from './img4.png'
import img5 from './img5.png'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function SymptomsHistory() {
  const symptoms = [
    { date: "21/11/2024", breath: "0", palp: "3", weight: "1", swelling: "4" },
    { date: "20/11/2024", breath: "2", palp: "2", weight: "0", swelling: "3" },
    { date: "16/11/2024", breath: "2", palp: "2", weight: "0", swelling: "3" },
    { date: "01/11/2024", breath: "2", palp: "2", weight: "1", swelling: "3" },
    { date: "15/10/2024", breath: "2", palp: "2", weight: "1", swelling: "4" },
  ]
  return (
    <div className="w-full mx-auto p-4 space-y-6">

      <Card className="p-7 flex items-center w-full h-[80px] justify-center divide-x">
  <div className="flex items-center gap-2 flex-1 justify-center">
    <Heart className="w-5 h-5 text-primary" />
    <div>
      <div className="text-sm font-medium text-center">Patient Activity</div>
      <div className="text-sm text-muted-foreground text-center">1 h 50 m / day</div>
    </div>
  </div>
  <div className="flex items-center gap-2 flex-1 justify-center">
    <div className="text-right">
      <div className="text-sm font-medium text-center">Latest Symptom Log</div>
      <div className="text-sm text-muted-foreground text-center">Nov 14, 2024</div>
    </div>
  </div>
  <div className="flex items-center justify-center flex-1">
    <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
      Ask for a log
    </Button>
  </div>
</Card>

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
          <div className="w-full max-w-[1400px] aspect-[1360/240]">
            <img src={img5} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
          </div>
        </div>
        {/* <img src={img3} className="w-[100%] cursor-pointer" style={{height: addPixelsForBiggerScreens>0 ? "400px":""}} alt="placeholder" /> */}
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>

<Card className=''>
          <CardHeader className=" p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Medication</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <div className="w-full">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center"  style={{backgroundColor: "white"}}>Date</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Shortness of breath</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Palpitations</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Weight Gain</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Swelling</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {symptoms.map((symp, index) => (
                  <TableRow key={index} className="h-[60px]">
                    <TableCell className="text-center">{symp.date}</TableCell>
                    <TableCell className="text-center">{symp.breath}</TableCell>
                    <TableCell className="text-center">{symp.palp}</TableCell>
                    <TableCell className="text-center">{symp.weight}</TableCell>
                    <TableCell className="text-center">{symp.swelling}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className={`flex items-center border-t justify-between space-x-2 py-3 mt-0 pl-3 pr-3`} style={{ marginTop: 0 }}>
        <Button
          variant="outline"
          size="sm"
          disabled={true}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page 1 of 4
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={false}
        >
          Next
        </Button>
      </div>
            </div>
          </CardContent>
        </Card>
            </div>
  )
}