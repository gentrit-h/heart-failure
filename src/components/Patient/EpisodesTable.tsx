import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, Activity } from "lucide-react"
import React from "react"

export default function EpisodesTable() {
  const events = [
    {
      id: "2112",
      hasWave: true,
      date: "Jan 01, 2024 20:28",
      type: "ATAF",
      details: "Avg V Rate in ATR: 113 bpm",
      duration: "51 s",
      rate: "113 bpm",
      assessment: "Appropriate"
    },
    {
      id: "2117",
      hasWave: true,
      date: "Jan 01, 2024 18:28",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "125 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "82",
      hasWave: true,
      date: "Dec 27, 2023 12:58",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 5 s",
      rate: "128 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "81",
      hasWave: true,
      date: "Dec 27, 2023 12:29",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "80",
      hasWave: true,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "-",
      duration: "41 s",
      rate: "127 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "79",
      hasWave: false,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "Avg V Rate in ATR: 117 bpm",
      duration: "39 s",
      rate: "117 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "78",
      hasWave: false,
      date: "Dec 27, 2023 10:32",
      type: "ATAF",
      details: "Long duration",
      duration: "2 m 4 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: true,
      date: "Dec 26, 2023 16:27",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 42 s",
      rate: "119 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: false,
      date: "Dec 22, 2023 12:18",
      type: "ATAF",
      details: "-",
      duration: "40 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "56",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "ATAF",
      details: "-",
      duration: "12 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "2112",
      hasWave: true,
      date: "Jan 01, 2024 20:28",
      type: "ATAF",
      details: "Avg V Rate in ATR: 113 bpm",
      duration: "51 s",
      rate: "113 bpm",
      assessment: "Appropriate"
    },
    {
      id: "2117",
      hasWave: true,
      date: "Jan 01, 2024 18:28",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "125 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "82",
      hasWave: true,
      date: "Dec 27, 2023 12:58",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 5 s",
      rate: "128 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "81",
      hasWave: true,
      date: "Dec 27, 2023 12:29",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "80",
      hasWave: true,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "-",
      duration: "41 s",
      rate: "127 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "79",
      hasWave: false,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "Avg V Rate in ATR: 117 bpm",
      duration: "39 s",
      rate: "117 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "78",
      hasWave: false,
      date: "Dec 27, 2023 10:32",
      type: "ATAF",
      details: "Long duration",
      duration: "2 m 4 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: true,
      date: "Dec 26, 2023 16:27",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 42 s",
      rate: "119 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: false,
      date: "Dec 22, 2023 12:18",
      type: "ATAF",
      details: "-",
      duration: "40 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "56",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "ATAF",
      details: "-",
      duration: "12 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "2112",
      hasWave: true,
      date: "Jan 01, 2024 20:28",
      type: "ATAF",
      details: "Avg V Rate in ATR: 113 bpm",
      duration: "51 s",
      rate: "113 bpm",
      assessment: "Appropriate"
    },
    {
      id: "2117",
      hasWave: true,
      date: "Jan 01, 2024 18:28",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "125 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "82",
      hasWave: true,
      date: "Dec 27, 2023 12:58",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 5 s",
      rate: "128 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "81",
      hasWave: true,
      date: "Dec 27, 2023 12:29",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "80",
      hasWave: true,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "-",
      duration: "41 s",
      rate: "127 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "79",
      hasWave: false,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "Avg V Rate in ATR: 117 bpm",
      duration: "39 s",
      rate: "117 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "78",
      hasWave: false,
      date: "Dec 27, 2023 10:32",
      type: "ATAF",
      details: "Long duration",
      duration: "2 m 4 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: true,
      date: "Dec 26, 2023 16:27",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 42 s",
      rate: "119 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: false,
      date: "Dec 22, 2023 12:18",
      type: "ATAF",
      details: "-",
      duration: "40 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "56",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "ATAF",
      details: "-",
      duration: "12 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "2112",
      hasWave: true,
      date: "Jan 01, 2024 20:28",
      type: "ATAF",
      details: "Avg V Rate in ATR: 113 bpm",
      duration: "51 s",
      rate: "113 bpm",
      assessment: "Appropriate"
    },
    {
      id: "2117",
      hasWave: true,
      date: "Jan 01, 2024 18:28",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "125 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "82",
      hasWave: true,
      date: "Dec 27, 2023 12:58",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 5 s",
      rate: "128 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "81",
      hasWave: true,
      date: "Dec 27, 2023 12:29",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "80",
      hasWave: true,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "-",
      duration: "41 s",
      rate: "127 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "79",
      hasWave: false,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "Avg V Rate in ATR: 117 bpm",
      duration: "39 s",
      rate: "117 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "78",
      hasWave: false,
      date: "Dec 27, 2023 10:32",
      type: "ATAF",
      details: "Long duration",
      duration: "2 m 4 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: true,
      date: "Dec 26, 2023 16:27",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 42 s",
      rate: "119 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: false,
      date: "Dec 22, 2023 12:18",
      type: "ATAF",
      details: "-",
      duration: "40 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "56",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "ATAF",
      details: "-",
      duration: "12 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "2112",
      hasWave: true,
      date: "Jan 01, 2024 20:28",
      type: "ATAF",
      details: "Avg V Rate in ATR: 113 bpm",
      duration: "51 s",
      rate: "113 bpm",
      assessment: "Appropriate"
    },
    {
      id: "2117",
      hasWave: true,
      date: "Jan 01, 2024 18:28",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "125 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "82",
      hasWave: true,
      date: "Dec 27, 2023 12:58",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 5 s",
      rate: "128 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "81",
      hasWave: true,
      date: "Dec 27, 2023 12:29",
      type: "ATAF",
      details: "-",
      duration: "13 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "80",
      hasWave: true,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "-",
      duration: "41 s",
      rate: "127 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "79",
      hasWave: false,
      date: "Dec 27, 2023 11:47",
      type: "ATAF",
      details: "Avg V Rate in ATR: 117 bpm",
      duration: "39 s",
      rate: "117 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "78",
      hasWave: false,
      date: "Dec 27, 2023 10:32",
      type: "ATAF",
      details: "Long duration",
      duration: "2 m 4 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: true,
      date: "Dec 26, 2023 16:27",
      type: "ATAF",
      details: "Long duration",
      duration: "1 m 42 s",
      rate: "119 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "59",
      hasWave: false,
      date: "Dec 22, 2023 12:18",
      type: "ATAF",
      details: "-",
      duration: "40 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "56",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "ATAF",
      details: "-",
      duration: "12 s",
      rate: "130 bpm",
      assessment: "Not Assessed"
    },
    {
      id: "3",
      hasWave: false,
      date: "Dec 22, 2023 11:53",
      type: "VT",
      details: "-",
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
            <TableHead className="font-bold whitespace-nowrap text-center">Duration</TableHead>
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