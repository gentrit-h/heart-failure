import { LineChart } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from 'react'

export default function CmemsHistory() {
  const data = [
    {
      status: "Connected",
      date: "20/11/2024 12:00",
      goal: "34(0)",
      systolicPap: "53 mmHg",
      diastolicPap: "19 mmHg",
      meanPap: "34 mmHg",
      pulsPressure: "34 mmHg",
      paHeartRate: "80 bpm",
    },
    {
      status: "Disconnected",
      date: "19/11/2024 15:00",
      goal: "12(-2)",
      systolicPap: "27 mmHg",
      diastolicPap: "11 mmHg",
      meanPap: "19 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "97 bpm",
    },
    {
      status: "Disconnected",
      date: "19/11/2024 06:00",
      goal: "18(+1)",
      systolicPap: "37 mmHg",
      diastolicPap: "19 mmHg",
      meanPap: "26 mmHg",
      pulsPressure: "18 mmHg",
      paHeartRate: "68 bpm",
    },
    {
      status: "Connected",
      date: "18/11/2024 21:00",
      goal: "17(+2)",
      systolicPap: "35 mmHg",
      diastolicPap: "19 mmHg",
      meanPap: "24 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "85 bpm",
    },
    {
      status: "Connected",
      date: "16/11/2024 14:00",
      goal: "16(+1)",
      systolicPap: "35 mmHg",
      diastolicPap: "11 mmHg",
      meanPap: "24 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "85 bpm",
    },
    {
      status: "Disconnected",
      date: "14/11/2024 09:00",
      goal: "12(-2)",
      systolicPap: "27 mmHg",
      diastolicPap: "11 mmHg",
      meanPap: "19 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "97 bpm",
    },
  ]

  return (
    <div className="w-full">
      <div className='mb-4'>
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className=" w-full justify-start rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="summary"
            className="rounded-none  border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Readings
          </TabsTrigger>
          <TabsTrigger
            value="transmission"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            History
          </TabsTrigger>
          <TabsTrigger
            value="cmems"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Billable
          </TabsTrigger>
        </TabsList>
        </ Tabs>
      </div>

      <div className="rounded-t-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] pl-[18px] text-center">Status</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Goal (+/-)</TableHead>
              <TableHead className="text-center">Systolic PAP</TableHead>
              <TableHead className="text-center">Diastolic PAP</TableHead>
              <TableHead className="text-center">Mean PAP</TableHead>
              <TableHead className="text-center">Puls Pressure</TableHead>
              <TableHead className="text-center">PA Heart Rate</TableHead>
              <TableHead className="w-[70px] text-center">Waveform</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center justify-center">
                <Badge
                      variant="outline"
                      className={
                        row.status === "Connected"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    >
                      {row.status === "Connected" ? "Connected" : "Disconnected"}
                    </Badge>
                    </div>
                </TableCell>
                <TableCell className="text-center">{row.date}</TableCell>
                <TableCell className="text-center">{row.goal}</TableCell>
                <TableCell className="text-center">{row.systolicPap}</TableCell>
                <TableCell className="text-center">{row.diastolicPap}</TableCell>
                <TableCell className="text-center">{row.meanPap}</TableCell>
                <TableCell className="text-center">{row.pulsPressure}</TableCell>
                <TableCell className="text-center">{row.paHeartRate}</TableCell>
                <TableCell>
                  <div className='flex justify-center'>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LineChart className="h-4 w-4" />
                    <span className="sr-only">View waveform</span>
                  </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border-r border-l border-b rounded-b-md flex items-center justify-between space-x-2 py-2 px-4">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">Page 1 of 10</div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}