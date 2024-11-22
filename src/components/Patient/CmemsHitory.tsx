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
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { WaveForm } from '../CIEDS/WaveForm'
import { getPriorityColor } from '../CIEDS/Cieds'

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
      hfIndex: "5",
      crossing: "+2",
      symptoms: "4",
      priority: "High",
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
      hfIndex: "6",
      crossing: "+1",
      symptoms: "5",
      priority: "Low",
    },
    {
      status: "Disconnected",
      date: "19/11/2024 06:00",
      goal: "18(+1)",
      systolicPap: "37 mmHg",
      diastolicPap: "17 mmHg",
      meanPap: "26 mmHg",
      pulsPressure: "18 mmHg",
      paHeartRate: "68 bpm",
      hfIndex: "8",
      crossing: "-1",
      symptoms: "6",
      priority: "Medium",
    },
    {
      status: "Connected",
      date: "18/11/2024 21:00",
      goal: "17(+2)",
      systolicPap: "35 mmHg",
      diastolicPap: "18 mmHg",
      meanPap: "24 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "85 bpm",
      hfIndex: "12",
      crossing: "-4",
      symptoms: "10",
      priority: "Medium",
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
      hfIndex: "10",
      crossing: "+1",
      symptoms: "11",
      priority: "Low",
    },
    {
      status: "Disconnected",
      date: "14/11/2024 09:00",
      goal: "12(-2)",
      systolicPap: "27 mmHg",
      diastolicPap: "17 mmHg",
      meanPap: "19 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "97 bpm",
      hfIndex: "15",
      crossing: "-5",
      symptoms: "12",
      priority: "High",
    },
  ]

  return (
    <div className="w-full">
      <div className="mb-4">
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
        </Tabs>
      </div>

      <div className="rounded-t-md border">
        <Table>
          <TableHeader>
            <TableRow className="relative">
              {/* <TableHead className="w-[120px] pl-[18px] text-center">Status</TableHead> */}
              <div className={`absolute left-0 top-0 bottom-0 w-[0.4vh] mt-[1.2vh]  mb-[1.7vh] rounded-tr-[1vh] rounded-br-[1vh]`} />
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Goal (+/-)</TableHead>
              <TableHead className="text-center">Systolic PAP</TableHead>
              <TableHead className="text-center">Diastolic PAP</TableHead>
              <TableHead className="text-center">Mean PAP</TableHead>
              <TableHead className="text-center">Puls Pressure</TableHead>
              <TableHead className="text-center">PA Heart Rate</TableHead>
              <TableHead className="text-center">HF Index</TableHead>
              <TableHead className="text-center">Threshold crossing</TableHead>
              <TableHead className="text-center">Symptoms Score (0-16)</TableHead>
              <TableHead className="w-[70px] text-center">Waveform</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="relative">
                {/* <TableCell>
                  <div className="flex items-center justify-center">
                    <Badge
                      variant="outline"
                      className={
                        row.status === "Connected"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    >
                      {row.status === "Connected"
                        ? "Connected"
                        : "Disconnected"}
                    </Badge>
                    </div>
                </TableCell> */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${getPriorityColor(row?.priority)} mt-[7px]  mb-[5px] rounded-tr-[15px] rounded-br-[15px]`} />
                <TableCell className="text-center">{row.date}</TableCell>
                <TableCell className="text-center">{row.goal}</TableCell>
                <TableCell className="text-center">{row.systolicPap}</TableCell>
                <TableCell className="text-center">
                  {row.diastolicPap}
                </TableCell>
                <TableCell className="text-center">{row.meanPap}</TableCell>
                <TableCell className="text-center">
                  {row.pulsPressure}
                </TableCell>
                <TableCell className="text-center">{row.paHeartRate}</TableCell>
                <TableCell className="text-center">{row.hfIndex}</TableCell>
                <TableCell className="text-center">{row.crossing}</TableCell>
                <TableCell className="text-center">{row.symptoms}</TableCell>
                <TableCell>
                  <Popover>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        zIndex:'100000'
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
                              zIndex:'100'
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "lightgrey")
                            } // Change color on hover
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor = "white")
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
                      sideOffset={-60}
                      alignOffset={60}
                      style={{
                        width: "29vw",
                      }}
                    >
                      <WaveForm></WaveForm>
                      <PopoverClose asChild></PopoverClose>
                    </PopoverContent>
                  </Popover>
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
  );
}