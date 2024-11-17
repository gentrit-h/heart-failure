import { LineChart } from 'lucide-react'

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

export default function CmemsHistory() {
  const data = [
    {
      status: "Connected",
      date: "dd/mm/yyyy 00:00",
      goal: "34(0)",
      systolicPap: "53 mmHg",
      diastolicPap: "19 mmHg",
      meanPap: "34 mmHg",
      pulsPressure: "34 mmHg",
      paHeartRate: "80 bpm",
    },
    {
      status: "Disconnected",
      date: "dd/mm/yyyy 00:00",
      goal: "12(-2)",
      systolicPap: "27 mmHg",
      diastolicPap: "11 mmHg",
      meanPap: "19 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "97 bpm",
    },
    {
      status: "Disconnected",
      date: "dd/mm/yyyy 00:00",
      goal: "18(+1)",
      systolicPap: "37 mmHg",
      diastolicPap: "19 mmHg",
      meanPap: "26 mmHg",
      pulsPressure: "18 mmHg",
      paHeartRate: "68 bpm",
    },
    {
      status: "Connected",
      date: "dd/mm/yyyy 00:00",
      goal: "17(+2)",
      systolicPap: "35 mmHg",
      diastolicPap: "19 mmHg",
      meanPap: "24 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "85 bpm",
    },
    {
      status: "Connected",
      date: "dd/mm/yyyy 00:00",
      goal: "PPM/SRTD",
      systolicPap: "35 mmHg",
      diastolicPap: "11 mmHg",
      meanPap: "24 mmHg",
      pulsPressure: "16 mmHg",
      paHeartRate: "85 bpm",
    },
    {
      status: "Disconnected",
      date: "dd/mm/yyyy 00:00",
      goal: "PPM/SRTD",
      systolicPap: "PPM/SRTD",
      diastolicPap: "PPM/SRTD",
      meanPap: "PPM/SRTD",
      pulsPressure: "PPM/SRTD",
      paHeartRate: "PPM/SRTD",
    },
    {
      status: "Connected",
      date: "dd/mm/yyyy 00:00",
      goal: "PPM",
      systolicPap: "PPM",
      diastolicPap: "PPM",
      meanPap: "PPM",
      pulsPressure: "PPM",
      paHeartRate: "PPM",
    },
  ]

  return (
    <div className="w-full">
      <div className="rounded-t-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] pl-[18px]">Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Goal (+/-)</TableHead>
              <TableHead>Systolic PAP</TableHead>
              <TableHead>Diastolic PAP</TableHead>
              <TableHead>Mean PAP</TableHead>
              <TableHead>Puls Pressure</TableHead>
              <TableHead>PA Heart Rate</TableHead>
              <TableHead className="w-[60px]">Waveform</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
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
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.goal}</TableCell>
                <TableCell>{row.systolicPap}</TableCell>
                <TableCell>{row.diastolicPap}</TableCell>
                <TableCell>{row.meanPap}</TableCell>
                <TableCell>{row.pulsPressure}</TableCell>
                <TableCell>{row.paHeartRate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LineChart className="h-4 w-4" />
                    <span className="sr-only">View waveform</span>
                  </Button>
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