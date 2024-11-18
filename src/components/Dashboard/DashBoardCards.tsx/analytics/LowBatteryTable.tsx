/* eslint-disable */
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDown,
  Clock,
  FileText,
  Battery,
  Wifi,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "../scrollbarStyles.css";
import { embeddedAnalyticsState } from "../../../../state/atoms";


interface Patient {
  id: string;
  name: string;
  subId: string;
  age: number;
  mrn: string;
  gender: string;
  dob: string;
  epPhy: string;
  phone: string;
  status: string;
  cmems: string;
  cied: string;
  batteryStatus: string;
  enrollDate: string;
}

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default function Cieds() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const patients: any[] = [
    {
      id: "124398594",
      name: "John Doe",
      lastTransmission: "15/05/2024 10:30",
      lastConnection: "15/05/2024 10:30",
      deviceType: "PPM",
      manufacturer: "MDT",
      connectivity: "Connected",
      monitoring: "Activities for the last hour",
      communicationHistory: true,
      hasNote: false,
    },
    {
      id: "124398595",
      name: "Jane Smith",
      lastTransmission: "15/05/2024 10:30",
      lastConnection: "15/05/2024 10:30",
      deviceType: "PPM/SRTD",
      manufacturer: "MDT",
      connectivity: "Disconnected",
      monitoring: "Activities for the last hour",
      communicationHistory: true,
      hasNote: true,
    },
    // Add more sample data to have at least 20 patients for pagination demonstration
    ...[...Array(18)].map((_, index) => ({
      id: `12439${8596 + index}`,
      name: `Patient ${index + 3}`,
      transmissionDate: `${15 - (index % 7)}/10/2024 ${10 + index}:${
        30 + index
      }`,
      deviceType: index % 2 === 0 ? "PPM" : "PPM/SRTD",
      manufacturer: "MDT",
      connectivity: index % 3 === 0 ? "Connected" : "Disconnected",
      monitoring: "Activities for the last hour",
      communicationHistory: true,
      hasNote: true,
    })),
  ];

  return (
    <div
      className="w-full scroll-container"
      style={{ 
        height: "82vh", 
        maxHeight: embeddedAnalyticsState?"77vh":"82vh",
        overflow: "auto" }}
    >
      {/* Original table view */}
      <div
        className="rounded-md border scroll-container"
        style={{ height: "76vh", 
          maxHeight: embeddedAnalyticsState?"71vh":"76vh", 
          overflow: "auto" }}
      >
        <Table className='scroll-container'>
          <TableHeader
            style={{
              height: "4vh",
              maxHeight: "4vh",
              overflow: "auto",
              paddingTop: "0vh",
              paddingBottom: "0vh",
            }}
          >
            <TableRow className='scroll-container'>
              <TableHead className="w-[50px] scroll-container">
                <Checkbox />
              </TableHead>
              <TableHead>Patients</TableHead>
              <TableHead>Device Info</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Transmission</TableHead>
              <TableHead>Last Connection</TableHead>
              <TableHead>Monitoring</TableHead>
              <TableHead>Communication History</TableHead>
              <TableHead>Note</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='scroll-container'>
            {patients.map((patient) => (
              <TableRow
                key={patient.id}
                className="cursor-pointer"
                onClick={() => setSelectedPatient(patient)}
              >
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{patient.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {patient.subId}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{patient.deviceInfo}</TableCell>
                <TableCell>
                  <span className="inline-flex rounded-md px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                    Connected
                  </span>
                </TableCell>
                <TableCell>dd/mm/yyyy 00:00</TableCell>
                <TableCell>dd/mm/yyyy 00:00</TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Clock className="h-4 w-4 text-blue-500" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4 text-blue-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div
        className="flex items-center justify-between px-2 py-4"
        style={{
          height: "6vh",
          maxHeight: "6vh",
          overflow: "auto",
          paddingTop: "0vh",
          paddingBottom: "0vh",
        }}
      >
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">Page 1 of 10</span>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
