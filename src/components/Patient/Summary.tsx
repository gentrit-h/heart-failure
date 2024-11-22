"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChevronDown, FileText, LineChartIcon } from 'lucide-react'
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
  import { Button } from "@/components/ui/button"
import { ProgressBars } from "./ProgressBars";
import { WaveForm } from "../CIEDS/WaveForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover";
import summary from "./summary.png"
import symptomsImg from "./symptom.png"
import patientActivity from "./patientActivity.png"
const symptoms = [
  { name: "Swelling", value: 4, color: "text-pink-500" },
  { name: "Weight Gain", value: 1, color: "text-purple-500" },
  { name: "Palpitations", value: 3, color: "text-green-500" },
  { name: "Shortness of breath", value: 2, color: "text-orange-500" },
]
const tGraphs = [
  { name: "Heart Rate", value: 3, color: "text-green-500" },
  { name: "PA Diastolic", value: 2, color: "text-blue-500" },
  { name: "PA Mean", value: 4, color: "text-pink-500" },
  { name: "PA Systolic", value: 1, color: "text-purple-500" },
]

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
  {
    "name": "ARNIs",
    "meds": ["Entresto"],
    "doses": ["24/26mg"]
  },
  {
    "name": "ACEi",
    "meds": ["Enalapril", "Lisinopril", "Ramipril"],
    "doses": ["2.5mg", "2.5mg", "1.25mg"]
  },
  {
    "name": "ARBs",
    "meds": ["Losartan", "Valsartan", "Candesartan"],
    "doses": ["25mg", "40mg", "4mg"]
  },
  {
    "name": "Beta blockers",
    "meds": ["Carvedilol", "Metoprolol Succinate", "Bisoprolol"],
    "doses": ["3.125mg", "25mg", "1.25mg"]
  },
  {
    "name": "SGLT2",
    "meds": ["Dapaglifozin", "Empaglifozin"],
    "doses": ["10mg", "10mg"]
  },
  {
    "name": "Diuretics",
    "meds": ["Dapaglifozin", "Empaglifozin"],
    "doses": ["20mg", "12.5mg"]
  },
  {
    "name": "Ivabradine",
    "meds": ["Ivabradine"],
    "doses": ["5mg"]
  }
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
    const [isOpen, setIsOpen] = React.useState(false)
    const [pb, setPb] = React.useState(true)
    const [isFirstImage, setIsFirstImage] = React.useState(false)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
  
    const handleMouseMove = (e: React.MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
      
    const handleMouseEnter1 = () => {
      setIsOpen(true)
      setIsFirstImage(true)
    }
    const handleMouseEnter = () => {
      setIsOpen(true)
      setIsFirstImage(false)
    }
    const handleMouseLeave = () => setIsOpen(false)
  return (
    <div className="flex items-center justify-center">
    <div className="pr-3  max-w-[1600px]">
    <div className="space-y-5">
      {/* Measurements Grid */}
      <div className="rounded-md border">
      <Table>
  <TableHeader>
    <TableRow  className="">
    <div className={`absolute left-0 top-0 bottom-0 w-[5px] mt-[46px] mb-[6px] rounded-tr-[6px] rounded-br-[6px]`} />
      <TableHead className="text-center" style={{fontSize: "15px"}}>Last Measurement</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Goal</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Last Systolic PAP</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Last Diastolic PAP</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Last Mean PAP</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Pulse Pressure</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>PA Heart Rate</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Waveform</TableHead>
      <TableHead className="text-center" style={{fontSize: "15px"}}>Note</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="h-[66px] hover:bg-transparent">
    <div className={`absolute left-0 top-0 bottom-0 w-[5px] bg-red-500 mt-[46px] mb-[6px] rounded-tr-[6px] rounded-br-[6px]`} />
      <TableCell className="text-center" style={{fontSize: "16px"}}>21/11/2024</TableCell>
      <TableCell className="text-center" style={{fontSize: "16px"}}>32(+22)</TableCell>
      <TableCell className="text-center" style={{fontSize: "16px"}}>85 mmHg</TableCell>
      <TableCell className="text-center" style={{fontSize: "16px"}}>32 mmHg</TableCell>
      <TableCell className="text-center" style={{fontWeight: 700, fontSize: "16px"}}>54 mmHg (-22)</TableCell>
      <TableCell className="text-center" style={{fontSize: "16px"}}>53 mmHg</TableCell>
      <TableCell className="text-center" style={{fontSize: "16px"}}>86 bpm</TableCell>
      <TableCell>
      <Popover>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <PopoverTrigger asChild>
          <div className="flex justify-center">
            <div
              className="flex justify-center cursor-pointer items-center"
              style={{
                transition: "background-color 0.3s ease",
                width: "32px",
                height: "32px",
                borderRadius: "5px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "lightgrey")
              } // Change color on hover
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "white")
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          </PopoverTrigger>
        </div>

        <PopoverContent
          className="w-86"
          align="end"
          style={{
            width: "29vw",
          }}
        >
          <WaveForm></WaveForm>
          <PopoverClose asChild>
          </PopoverClose>
        </PopoverContent>
      </Popover>
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
      <div className="w-full max-w-[1600px]">
      <div className="flex items-center justify-center">
        <Button onClick={()=>setPb(!pb)} variant="ghost" size="icon" className="ml-1 h-5 w-10 p-0 m-0">
          <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${pb ? 'rotate-180' : 'rotate-0'}`} />
        </Button>            
      </div>
      <div className="flex items-center justify-center">
      {pb ? <ProgressBars />:<></>}
      </div>
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
<div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-[1400px] aspect-[1385/240]">
  <img src={img3} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
</div>
          <Popover open={isOpen && isFirstImage}>
        <PopoverContent
          className="w-[220px] p-0"
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -100%)",
            margin: "0",
            marginTop: "-10px",
          }}
        >
          <Card className="p-2 border-none">
            <h3 className="font-semibold mb-3">Trend Graphs</h3>
            <div className="space-y-1">
              {tGraphs.map((symptom) => (
                <div key={symptom.name} className="flex justify-between items-center">
                  <span className={`${symptom.color}`}>
                    {symptom.name}:
                  </span>
                  <span className="">
                    {symptom.name==='PA Systolic'?(Math.random() * (20 - 0) + 0).toFixed(1):
                    symptom.name==='PA Mean'?(Math.random() * (50 - 30) + 30).toFixed(1):
                    symptom.name==='PA Diastolic'?(Math.random() * (70 - 60) + 60).toFixed(1):
                    symptom.name==='Heart Rate'?(Math.random() * (90 - 70) + 70).toFixed(1):''}
                    </span>
                </div>
              ))}
            </div>
          </Card>
        </PopoverContent>
      </Popover>
      </div>

</div>
        {/* <img src={img3} className="w-[100%] cursor-pointer" style={{height: addPixelsForBiggerScreens>0 ? "400px":""}} alt="placeholder" /> */}
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
{/* <div className="w-full aspect-[1438/319]">
  <img src={img2} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
</div> */}
      <div className="flex flex-row">
        <Card className="min-w-[790px] w-full">
        <CardHeader className="p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Symptoms</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0 h-[225px]">
          <div className="flex justify-center items-center">
          <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
          <div className="pt-[5px] h-[215px] aspect-[812/240]">
          <img src={symptomsImg} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
          </div>
          <Popover open={isOpen && !isFirstImage}>
        <PopoverContent
          className="w-[220px] p-0"
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -100%)",
            margin: "0",
            marginTop: "-10px",
          }}
        >
          <Card className="p-2 border-none">
            <h3 className="font-semibold mb-3">Symptoms</h3>
            <div className="space-y-1">
              {symptoms.map((symptom) => (
                <div key={symptom.name} className="flex justify-between items-center">
                  <span className={`${symptom.color}`}>
                    {symptom.name}:
                  </span>
                  <span className="">
                    {symptom.name==='Shortness of breath'?(Math.random() * (1 - 0) + 0).toFixed(1):
                    symptom.name==='Palpitations'?(Math.random() * (2 - 1) + 1).toFixed(1):
                    symptom.name==='Weight Gain'?(Math.random() * (3 - 2) + 2).toFixed(1):
                    symptom.name==='Swelling'?(Math.random() * (4 - 3) + 3).toFixed(1):''}
                    </span>
                </div>
              ))}
            </div>
          </Card>
        </PopoverContent>
      </Popover>
      </div>
          </div>
          </CardContent>
        </Card>
        <Card className="ml-2">
        <CardHeader className="p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Pt. Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
          <div className="h-[225px] aspect-[136/275]">
          <div className="flex justify-center items-center">
          <img src={patientActivity} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
          </div>
          </div>
          </CardContent>
        </Card>
        <Card className=" ml-2">
        <CardHeader className="p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">CIED Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
          <div className="h-[225px] aspect-[428/275]">
          <div className="flex justify-center items-center">
          <img src={summary} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
          </div>
          </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
    </div>
  )
}