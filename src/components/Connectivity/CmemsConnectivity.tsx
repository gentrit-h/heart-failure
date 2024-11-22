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
import "../Dashboard/DashBoardCards.tsx/scrollbarStyles.css";
import { embeddedAnalyticsState } from "../../state/atoms";
import React from "react";


interface Patient {
    serialNumber?:any;
    readings90?:any;
  id?: string;
  name?: string;
  subId?: string;
  age?: number;
  mrn?: string;
  gender?: string;
  dob?: string;
  epPhy?: string;
  phone?: string;
  status?: string;
  cmems?: string;
  cied?: string;
  batteryStatus?: string;
  enrollDate?: string;
  deviceInfo:string;
  lastTransmission:string;
  lastConnection:string;
  monitoring:string;
  communicationHistory:any;
  note:any;
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

export default function CmemsConnectivity() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

 const patients: Patient[] = [
  {
    id: "124398594",
    name: "Ermal Ismajli",
    serialNumber:'X83CBA',
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "15/05/2023",
    lastConnection: "14/05/2023",
    monitoring: "Synopse",
    communicationHistory: true,
    note: false,
    readings90:5,
  },
  {
    id: "124398595",
    name: "Jane Smith",
    serialNumber:'X83CBA',
    deviceInfo: "BSX - PPM",
    status: "Disconnected",
    lastTransmission: "14/05/2023",
    lastConnection: "13/05/2023",
    monitoring: "Synopse",
    communicationHistory: false,
    note: true,    readings90:3,

  },
  {
    id: "124398596",
    name: "John Doe",
    serialNumber:'X83CBA',
    deviceInfo: "BIO - CRT",
    status: "Connected",
    lastTransmission: "01/06/2023",
    lastConnection: "31/05/2023",
    monitoring: "RemoteView",
    communicationHistory: true,
    note: true,    readings90:6,
  },
  {
    id: "124398597",
    name: "Alice Johnson",
    deviceInfo: "STJ - ILR",
    status: "Disconnected",
    serialNumber:'X83CBA',
    lastTransmission: "20/04/2023",
    lastConnection: "19/04/2023",
    monitoring: "RemoteView",
    communicationHistory: false,
    note: false,    readings90:8,
  },
  {
    id: "124398598",
    name: "Robert Brown",
    deviceInfo: "MDT - PPM",
    status: "Connected",
    serialNumber:'X83CBA',
    lastTransmission: "17/07/2023",
    lastConnection: "16/07/2023",
    monitoring: "CardioMonitor",
    communicationHistory: true,
    note: true,    readings90:5,
  },
  {
    id: "124398599",
    name: "Laura White",
    deviceInfo: "BSX - ICD",
    status: "Disconnected",
    lastTransmission: "05/08/2023",
    lastConnection: "04/08/2023",
    monitoring: "Synopse",
    serialNumber:'X83CBA',
    communicationHistory: false,
    note: true,    readings90:5,
  },
  {
    id: "124398600",
    name: "David Green",
    deviceInfo: "BIO - PPM",
    status: "Connected",
    lastTransmission: "10/09/2023",
    lastConnection: "09/09/2023",
    serialNumber:'S83CBA',
    monitoring: "CardioMonitor",
    communicationHistory: true,
    note: false,    readings90:7,
  },
  {
    id: "124398601",
    name: "Emma Blue",
    deviceInfo: "STJ - CRT",
    status: "Disconnected",
    lastTransmission: "21/05/2023",
    lastConnection: "20/05/2023",
    serialNumber:'X83SBA',
    monitoring: "RemoteView",
    communicationHistory: false,
    note: false,    readings90:5,
  },
  {
    id: "124398602",
    name: "Michael Taylor",
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "11/06/2023",
    serialNumber:'H8BCBA',
    lastConnection: "10/06/2023",
    monitoring: "Synopse",
    communicationHistory: true,
    note: false,    readings90:6,
  },
  {
    id: "124398603",
    name: "Sarah Brown",
    deviceInfo: "BSX - ILR",
    serialNumber:'WW3CBA',
    status: "Connected",
    lastTransmission: "07/07/2023",
    lastConnection: "06/07/2023",
    monitoring: "CardioMonitor",
    communicationHistory: false,
    note: true,    readings90:5,
  },
  {
    id: "124398604",
    name: "Chris Black",
    deviceInfo: "BIO - CRT",
    status: "Disconnected",
    lastTransmission: "15/05/2023",serialNumber:'W83CBA',
    lastConnection: "14/05/2023",
    monitoring: "RemoteView",
    communicationHistory: true,
    note: true,    readings90:6,
  },
  {
    id: "124398605",
    name: "Nancy Gray",
    deviceInfo: "STJ - PPM",
    status: "Connected",
    lastTransmission: "02/04/2023",
    lastConnection: "01/04/2023",
    monitoring: "Synopse",
    communicationHistory: false,serialNumber:'W53CBA',
    note: false,    readings90:5,
  },
  {
    id: "124398606",
    name: "Peter Clark",
    deviceInfo: "MDT - ICD",
    status: "Disconnected",serialNumber:'X33CCC',
    lastTransmission: "18/08/2023",
    lastConnection: "17/08/2023",
    monitoring: "CardioMonitor",
    communicationHistory: true,
    note: false,    readings90:5,
  },
  {
    id: "124398607",
    name: "Julia King",
    deviceInfo: "BSX - CRT",
    status: "Connected",
    lastTransmission: "19/09/2023",
    lastConnection: "18/09/2023",serialNumber:'V83CBA',
    monitoring: "RemoteView",
    communicationHistory: false,
    note: true,    readings90:5,
  },
  {
    id: "124398608",
    name: "Matthew Harris",
    deviceInfo: "BIO - ICD",
    status: "Disconnected",
    lastTransmission: "12/07/2023",
    lastConnection: "11/07/2023",serialNumber:'X93CBA',
    monitoring: "Synopse",
    communicationHistory: true,
    note: true,    readings90:8,
  },
  
];

const [currentTab, setCurrentTab] = React.useState("Cmems");


  return (

<div
      className="w-full scroll-container"
      style={{ 
        height: "83vh", 
        overflow: "auto",
        maxWidth:'60vw',
        minWidth:'60vw',
        overflowX:'auto',
        overflowY:'auto' 
    }}
    >
      {/* Original table view */}
      <div
        className="rounded-md border scroll-container"
        style={{ 
          maxHeight:"77vh", 
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
              <TableHead>Patient</TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Billing Cycle Reset Date</TableHead>
              <TableHead>Last Reading Date</TableHead>
              <TableHead>Total Readings (90d)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='scroll-container'>
            {patients.reverse().map((patient) => (
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
                <TableCell>{patient.serialNumber}</TableCell>
                <TableCell>
                  <span className={(patient.status =="Disconnected") ? "inline-flex rounded-md px-2 py-1 text-xs font-medium bg-red-50 text-red-700":'inline-flex rounded-md px-2 py-1 text-xs font-medium bg-green-50 text-green-700'}>
                    {patient.status}
                  </span>
                </TableCell>
                <TableCell>{patient.lastTransmission}</TableCell>
                <TableCell>{patient.lastConnection}</TableCell>
                <TableCell>{patient.readings90}</TableCell>
                
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
        <Button variant="outline" size="sm" disabled={true}>
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">Page 1 of 1</span>
        <Button variant="outline" size="sm" disabled={true}>
          Next
        </Button>
      </div>
    </div>
    
  );
}
