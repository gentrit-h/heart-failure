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

export default function DisconnectedTable() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

 const patients: Patient[] = [
  {
    id: "124398594",
    name: "Ermal Ismajli",
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "15/05/2023",
    lastConnection: "14/05/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: false
  },
  {
    id: "124398595",
    name: "Jane Smith",
    deviceInfo: "BSX - PPM",
    status: "Disconnected",
    lastTransmission: "14/05/2023",
    lastConnection: "13/05/2023",
    monitoring: "Post AF Ablation",
    communicationHistory: false,
    note: true
  },
  {
    id: "124398596",
    name: "John Doe",
    deviceInfo: "BIO - CRT",
    status: "Connected",
    lastTransmission: "01/06/2023",
    lastConnection: "31/05/2023",
    monitoring: "AF Management",
    communicationHistory: true,
    note: true
  },
  {
    id: "124398597",
    name: "Alice Johnson",
    deviceInfo: "STJ - ILR",
    status: "Disconnected",
    lastTransmission: "20/04/2023",
    lastConnection: "19/04/2023",
    monitoring: "Syncope",
    communicationHistory: false,
    note: false
  },
  {
    id: "124398598",
    name: "Robert Brown",
    deviceInfo: "MDT - PPM",
    status: "Connected",
    lastTransmission: "17/07/2023",
    lastConnection: "16/07/2023",
    monitoring: "Ventricular Tachycardia",
    communicationHistory: true,
    note: true
  },
  {
    id: "124398599",
    name: "Laura White",
    deviceInfo: "BSX - ICD",
    status: "Disconnected",
    lastTransmission: "05/08/2023",
    lastConnection: "04/08/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: false,
    note: true
  },
  {
    id: "124398600",
    name: "David Green",
    deviceInfo: "BIO - PPM",
    status: "Connected",
    lastTransmission: "10/09/2023",
    lastConnection: "09/09/2023",
    monitoring: "Palpitations",
    communicationHistory: true,
    note: false
  },
  {
    id: "124398601",
    name: "Emma Blue",
    deviceInfo: "STJ - CRT",
    status: "Disconnected",
    lastTransmission: "21/05/2023",
    lastConnection: "20/05/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: false
  },
  {
    id: "124398602",
    name: "Michael Taylor",
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "11/06/2023",
    lastConnection: "10/06/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: false
  },
  {
    id: "124398603",
    name: "Sarah Brown",
    deviceInfo: "BSX - ILR",
    status: "Connected",
    lastTransmission: "07/07/2023",
    lastConnection: "06/07/2023",
    monitoring: "Ventricular Tachycardia",
    communicationHistory: false,
    note: true
  },
  {
    id: "124398604",
    name: "Chris Black",
    deviceInfo: "BIO - CRT",
    status: "Disconnected",
    lastTransmission: "15/05/2023",
    lastConnection: "14/05/2023",
    monitoring: "AF Management",
    communicationHistory: true,
    note: true
  },
  {
    id: "124398605",
    name: "Nancy Gray",
    deviceInfo: "STJ - PPM",
    status: "Connected",
    lastTransmission: "02/04/2023",
    lastConnection: "01/04/2023",
    monitoring: "Post AF Ablation",
    communicationHistory: false,
    note: false
  },
  {
    id: "124398606",
    name: "Peter Clark",
    deviceInfo: "MDT - ICD",
    status: "Disconnected",
    lastTransmission: "18/08/2023",
    lastConnection: "17/08/2023",
    monitoring: "Palpitations",
    communicationHistory: true,
    note: false
  },
  {
    id: "124398607",
    name: "Julia King",
    deviceInfo: "BSX - CRT",
    status: "Connected",
    lastTransmission: "19/09/2023",
    lastConnection: "18/09/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: true
  },
  {
    id: "124398608",
    name: "Matthew Harris",
    deviceInfo: "BIO - ICD",
    status: "Disconnected",
    lastTransmission: "12/07/2023",
    lastConnection: "11/07/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: true
  }
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
                  <span className="inline-flex rounded-md px-2 py-1 text-xs font-medium bg-red-50 text-red-700">
                    Disconnected
                  </span>
                </TableCell>
                <TableCell>{patient.lastTransmission}</TableCell>
                <TableCell>{patient.lastConnection}</TableCell>
                <TableCell>{patient.monitoring}</TableCell>
                <TableCell>
                  <div className="flex justify-center cursor-pointer">
                  {/* <Button variant="ghost" size="icon"> */}
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 5V11L15.5 13M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z" stroke={patient?.note ? "#004DE1" : "#D1D2D5"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                  {/* </Button> */}
                </TableCell>
                <TableCell>
                <div className="flex justify-center pr-5 cursor-pointer">
                    {/* <Button variant="ghost" size="icon"> */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z" stroke={patient?.communicationHistory ? "#004DE1" : "#D1D2D5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </div>
                    {/* </Button> */}
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
