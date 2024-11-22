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
import CmemsConnectivity from "./CmemsConnectivity";
import CIEDConnectivity from "./CIEDsConnectivity";
import ConnectivityAnalytics from "./Analytics";


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

export default function CmemsCon() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

 const patients: Patient[] = [
  {
    id: "124398594",
    name: "Ermal Ismajli",
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "15/05/2023",
    lastConnection: "14/05/2023",
    monitoring: "Synopse",
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
    monitoring: "Synopse",
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
    monitoring: "RemoteView",
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
    monitoring: "RemoteView",
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
    monitoring: "CardioMonitor",
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
    monitoring: "Synopse",
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
    monitoring: "CardioMonitor",
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
    monitoring: "RemoteView",
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
    monitoring: "Synopse",
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
    monitoring: "CardioMonitor",
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
    monitoring: "RemoteView",
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
    monitoring: "Synopse",
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
    monitoring: "CardioMonitor",
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
    monitoring: "RemoteView",
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
    monitoring: "Synopse",
    communicationHistory: true,
    note: true
  }
];


const [currentTab, setCurrentTab] = React.useState("Cmems");


  return (
    <div style={{display:'flex', flexDirection:'row'}}>
        <div>
        <div className="flex space-x-1 border-b">
          {["Cmems", "Cied"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium ${
                currentTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {currentTab=='Cmems'&&<CmemsConnectivity></CmemsConnectivity>}
        {currentTab=='Cied'&&<CIEDConnectivity></CIEDConnectivity>}
        </div>
        <div style={{width:'1vw'}}></div>
        <div style={{width:'33vw', paddingTop:'36px'}}>
        <ConnectivityAnalytics></ConnectivityAnalytics>
        </div>
    </div>
    
  );
}
