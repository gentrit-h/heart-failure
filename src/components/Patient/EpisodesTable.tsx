import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, Activity } from "lucide-react"
import React from "react"

export default function EpisodesTable() {
  const events = [
    {
      id: "RVAT-2112",
      hasWave: true,
      date: "Jan 01, 2024 20:28",
      type: "Other",
      details: "RV Auto",
      duration: "51 s",
      rate: "-",
      assessment: "Appropriate"
    },
    {
      id: "LVAT-2117",
      hasWave: true,
      date: "Jan 01, 2024 18:28",
      type: "Other",
      details: "LV Auto",
      duration: "13 s",
      rate: "-",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-82",
      hasWave: true,
      date: "Dec 27, 2023 12:58",
      type: "PMT - PMT",
      details: "PMT",
      duration: "1 m 5 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-81",
      hasWave: true,
      date: "Dec 27, 2023 12:29",
      type: "PMT - PMT",
      details: "PMT",
      duration: "13 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-80",
      hasWave: true,
      date: "Dec 27, 2023 11:47",
      type: "PMT - PMT",
      details: "PMT",
      duration: "41 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-79",
      hasWave: false,
      date: "Dec 27, 2023 11:47",
      type: "PMT - PMT",
      details: "PMT",
      duration: "39 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-78",
      hasWave: false,
      date: "Dec 27, 2023 10:32",
      type: "PMT - PMT",
      details: "PMT",
      duration: "2 m 4 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "RAAT-59",
      hasWave: true,
      date: "Dec 26, 2023 16:27",
      type: "Other",
      details: "RA Auto",
      duration: "1 m 42 s",
      rate: "-",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-59",
      hasWave: false,
      date: "Dec 22, 2023 12:18",
      type: "PMT - PMT",
      details: "PMT",
      duration: "40 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "PMT-56",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "PMT - PMT",
      details: "PMT",
      duration: "12 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    }
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold pl-7">Event ID</TableHead>
            <TableHead className="font-bold text-center">Date</TableHead>
            <TableHead className="font-bold text-center">Type</TableHead>
            <TableHead className="font-bold text-center">Detection Therapy Details</TableHead>
            <TableHead className="font-bold whitespace-nowrap text-center">Duration hh:mm:ss</TableHead>
            <TableHead className="font-bold text-center">Rate</TableHead>
            <TableHead className="font-bold text-center">Assessment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id} className="h-[60px]">
              <TableCell className="font-medium pl-3">
                <div className="flex items-center gap-2">
                <div className="w-4">
                  {event.hasWave && <Activity className="h-4 w-4" />}
                  </div>
                  {event.id}
                </div>
              </TableCell>
              <TableCell className="text-center">{event.date}</TableCell>
              <TableCell className="text-center">{event.type}</TableCell>
              <TableCell className="text-center">{event.details}</TableCell>
              <TableCell className="text-center">{event.duration}</TableCell>
              <TableCell className="text-center">{event.rate}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  {event.assessment}
                  <ChevronDown className="h-4 w-4" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}