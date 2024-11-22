"use client";

import * as React from "react"
import { ArrowUpRight, Badge, Calendar as CalendarIcon, ChevronDown, Download, Info, Link, MoreVertical, Printer, Search, X } from "lucide-react"
import { DateRange } from "react-day-picker"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import PatientInfo from "../Patient/PatientInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PopoverClose } from "@radix-ui/react-popover";
import { WaveForm } from "./WaveForm";
import opened from "./opened.svg"
import unopened from "./unopened.svg"

const patients = [
  {
    id: '1123523',
    name: "John Doe",
    status: "New",
    transmissionDate: "11/20/2024",
    dateReviewed: "11/20/2024",
    deviceType: "ICD",
    transmissionType: "Remote",
    manufacturer: "BSX",
    read: true,
    priority: "red",
    alert: ['Has shock', 'ATP is true']
  },
  {
    id: '1123524',
    name: "Ermal Ismajli",
    status: "Archived",
    transmissionDate: "11/19/2024",
    dateReviewed: "11/20/2024",
    deviceType: "ICD",
    transmissionType: "Remote",
    manufacturer: "MDT",
    read: true,
    priority: "green",
    alert: ['Has shock', 'ATP is true']
  },
  {
    id: '1123525',
    name: "Hashim Thaqi",
    status: "Reviewed",
    transmissionDate: "11/20/2024",
    dateReviewed: "11/20/2024",
    deviceType: "PPM",
    transmissionType: "Remote",
    manufacturer: "BIO",
    read: false,
    priority: "yellow",
    alert: ['ATP is true']
  },
  {
    id: '1123526',
    name: "Jane Smith",
    status: "Archived",
    transmissionDate: "11/18/2024",
    dateReviewed: "11/20/2024",
    deviceType: "CRT-D",
    transmissionType: "InClinic",
    manufacturer: "STJ",
    read: false,
    priority: "green",
    alert: ['Lead impedance high']
  },
  {
    id: '1123527',
    name: "Peter Parker",
    status: "Reviewed",
    transmissionDate: "11/20/2024",
    dateReviewed: "11/20/2024",
    deviceType: "ICD",
    transmissionType: "Remote",
    manufacturer: "MDT",
    read: true,
    priority: "green",
    alert: []
  },
  {
    id: '1123528',
    name: "Bruce Wayne",
    status: "Reviewed",
    transmissionDate: "11/19/2024",
    dateReviewed: "11/19/2024",
    deviceType: "ILR",
    transmissionType: "InClinic",
    manufacturer: "BSX",
    read: false,
    priority: "yellow",
    alert: ['Battery low']
  },
  {
    id: '1123529',
    name: "Clark Kent",
    status: "Archived",
    transmissionDate: "11/17/2024",
    dateReviewed: "11/18/2024",
    deviceType: "PPM",
    transmissionType: "Remote",
    manufacturer: "BIO",
    read: true,
    priority: "red",
    alert: ['Has shock']
  },
  {
    id: '1123530',
    name: "Diana Prince",
    status: "New",
    transmissionDate: "11/16/2024",
    dateReviewed: "11/19/2024",
    deviceType: "CRT-P",
    transmissionType: "InClinic",
    manufacturer: "STJ",
    read: true,
    priority: "green",
    alert: []
  },
  {
      id: '1123531',
      name: "Alice Wonderland",
      status: "Reviewed",
      transmissionDate: "11/20/2024",
      dateReviewed: "11/20/2024",
      deviceType: "CRT-D",
      transmissionType: "InClinic",
      manufacturer: "MDT",
      read: false,
      priority: "red",
      alert: ['High pacing threshold', 'Arrhythmia detected']
    },
    {
      id: '1123532',
      name: "Bob Marley",
      status: "New",
      transmissionDate: "11/15/2024",
      dateReviewed: "11/16/2024",
      deviceType: "ILR",
      transmissionType: "Remote",
      manufacturer: "STJ",
      read: false,
      priority: "green",
      alert: []
    },
    {
      id: '1123533',
      name: "Charlie Chaplin",
      status: "Reviewed",
      transmissionDate: "11/14/2024",
      dateReviewed: "11/16/2024",
      deviceType: "ICD",
      transmissionType: "InClinic",
      manufacturer: "BSX",
      read: true,
      priority: "green",
      alert: ['Noise detected']
    },
    {
      id: '1123534',
      name: "Debbie Downer",
      status: "Archived",
      transmissionDate: "11/12/2024",
      dateReviewed: "11/13/2024",
      deviceType: "PPM",
      transmissionType: "InClinic",
      manufacturer: "BIO",
      read: false,
      priority: "yellow",
      alert: ['No issues']
    },
    {
      id: '1123535',
      name: "Ethan Hunt",
      status: "Reviewed",
      transmissionDate: "11/11/2024",
      dateReviewed: "11/13/2024",
      deviceType: "CRT-P",
      transmissionType: "Remote",
      manufacturer: "MDT",
      read: true,
      priority: "red",
      alert: ['Battery low']
    },
    {
      id: '1123536',
      name: "Fiona Frost",
      status: "New",
      transmissionDate: "11/10/2024",
      dateReviewed: "11/12/2024",
      deviceType: "ILR",
      transmissionType: "InClinic",
      manufacturer: "STJ",
      read: false,
      priority: "green",
      alert: ['Arrhythmia detected']
    },
    {
      id: '1123537',
      name: "George Orwell",
      status: "Archived",
      transmissionDate: "11/09/2024",
      dateReviewed: "11/10/2024",
      deviceType: "CRT-D",
      transmissionType: "Remote",
      manufacturer: "BSX",
      read: true,
      priority: "yellow",
      alert: ['Lead impedance high']
    },
    {
      id: '1123538',
      name: "Hannah Montana",
      status: "Reviewed",
      transmissionDate: "11/08/2024",
      dateReviewed: "11/08/2024",
      deviceType: "ICD",
      transmissionType: "InClinic",
      manufacturer: "BIO",
      read: false,
      priority: "green",
      alert: ['No issues detected']
    }  ,
    {
      id: '1123527',
      name: "Peter Parker",
      status: "New",
      transmissionDate: "11/20/2024",
      dateReviewed: "11/20/2024",
      deviceType: "ICD",
      transmissionType: "Remote",
      manufacturer: "MDT",
      read: true,
      priority: "green",
      alert: []
    },
    {
      id: '1123528',
      name: "Bruce Wayne",
      status: "Reviewed",
      transmissionDate: "11/19/2024",
      dateReviewed: "11/19/2024",
      deviceType: "ILR",
      transmissionType: "InClinic",
      manufacturer: "BSX",
      read: false,
      priority: "yellow",
      alert: ['Battery low']
    },
    {
      id: '1123529',
      name: "Clark Kent",
      status: "Archived",
      transmissionDate: "11/17/2024",
      dateReviewed: "11/18/2024",
      deviceType: "PPM",
      transmissionType: "Remote",
      manufacturer: "BIO",
      read: true,
      priority: "red",
      alert: ['Has shock']
    },
    {
      id: '1123530',
      name: "Diana Prince",
      status: "New",
      transmissionDate: "11/16/2024",
      dateReviewed: "11/19/2024",
      deviceType: "CRT-P",
      transmissionType: "InClinic",
      manufacturer: "STJ",
      read: true,
      priority: "green",
      alert: []
    },
    {
      id: '1123533',
      name: "Charlie Chaplin",
      status: "Reviewed",
      transmissionDate: "11/14/2024",
      dateReviewed: "11/16/2024",
      deviceType: "ICD",
      transmissionType: "InClinic",
      manufacturer: "BSX",
      read: true,
      priority: "green",
      alert: ['Noise detected']
    },
    {
      id: '1123534',
      name: "Debbie Downer",
      status: "Archived",
      transmissionDate: "11/12/2024",
      dateReviewed: "11/13/2024",
      deviceType: "PPM",
      transmissionType: "InClinic",
      manufacturer: "BIO",
      read: false,
      priority: "yellow",
      alert: ['Battery low']
    },
    {
      id: '1123535',
      name: "Ethan Hunt",
      status: "New",
      transmissionDate: "11/11/2024",
      dateReviewed: "11/13/2024",
      deviceType: "CRT-P",
      transmissionType: "Remote",
      manufacturer: "MDT",
      read: true,
      priority: "red",
      alert: ['Battery low']
    },
]
export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "red":
      return "bg-red-500"
    case "High":
      return "bg-red-500"
    case "yellow":
      return "bg-yellow-500"
    case "Medium":
      return "bg-yellow-500"
    case "green":
      return "bg-green-500"
    case "Low":
      return "bg-green-500"
    default:
      return "bg-green-500";
  }
};


export default function Cieds() {
  const [selectedPatients, setSelectedPatients] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filteredPatients, setFilteredPatients] = React.useState(patients);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 6),
    to: new Date(2022, 0, 13),
  });
  const [currentTab, setCurrentTab] = React.useState("all");
  const [filters, setFilters] = React.useState({
    search: "",
    deviceType: [] as string[],
    connectivity: [] as string[],
    status: [] as string[],
  })
  const parentRef = React.useRef(null);
  const [parentHeight, setParentHeight] = React.useState(0);

  React.useEffect(() => {
    if (parentRef.current) {
      setParentHeight(parentRef.current.offsetHeight);
    }
  }, []);
  const patientsPerPage =
    parentHeight > 0 ? Math.floor((parentHeight - 155) / 72) : 7;
  const addPixelsForBiggerScreens =
    parentHeight > 0 ? patientsPerPage * 72 - 7 * 72 : 0;
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);
  const [hidePatientInfo, setHidePatientInfo] = React.useState(false);

  const togglePatient = (patientId: string) => {
    setSelectedPatients((prev) =>
      prev.includes(patientId)
        ? prev.filter((id) => id !== patientId)
        : [...prev, patientId]
    );
  };
  const [selectedPatient, setSelectedPatient] = React.useState<any>(null);

  const toggleAll = () => {
    const currentPagePatients = getCurrentPagePatients();
    const allSelected = currentPagePatients.every((patient) =>
      selectedPatients.includes(patient.id)
    );
    if (allSelected) {
      setSelectedPatients((prev) =>
        prev.filter(
          (id) => !currentPagePatients.some((patient) => patient.id === id)
        )
      );
    } else {
      setSelectedPatients((prev) => [
        ...new Set([
          ...prev,
          ...currentPagePatients.map((patient) => patient.id),
        ]),
      ]);
    }
  };

  const applyFilters = () => {
    setFilteredPatients(patients.filter(patient => {
      const searchMatch = patient.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          patient.id.includes(filters.search)
      const deviceTypeMatch = filters.deviceType.length === 0 || filters.deviceType.includes(patient.deviceType)
      // const connectivityMatch = filters.connectivity.length === 0 || filters.connectivity.includes(patient.connectivity)
      const statusMatch = filters.status.length === 0 || filters.status.includes(patient.status)
      const tabMatch = currentTab === "all" || patient.status === currentTab
      return searchMatch && deviceTypeMatch && statusMatch && tabMatch
    }))
    setCurrentPage(1) // Reset to first page when filters change
  }

  React.useEffect(() => {
    applyFilters();
  }, [filters, currentTab]);

  const getCurrentPagePatients = () => {
    const startIndex = (currentPage - 1) * patientsPerPage;
    const endIndex = startIndex + patientsPerPage;
    return filteredPatients.slice(startIndex, endIndex);
  };



  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="w-full space-y-4 h-[88vh]" ref={parentRef}>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-1 border-b">
          {["all", "New", "Reviewed", "Archived"].map((tab) => (
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
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-1">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for patient"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
              className="w-full max-w-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL d, yyyy")} - {format(date.to, "LLL d, yyyy")}
                      </>
                    ) : (
                      format(date.from, "LLL d, yyyy")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
            <Button variant="outline">
              Filters
            </Button>
          </div>
        </div> */}
      </div>

      <div className="rounded-t-md border">
      <div className="flex flex-row">

      <div className={` ${selectedPatient ? "w-[273px]" : "w-full"}`}>        
        <Table>
          <TableHeader>
            <TableRow>
            <div className={`absolute left-0 top-0 bottom-0 w-[5px] mt-[6px] mb-[6px] rounded-tr-[6px] rounded-br-[6px]`} />
              <TableHead className="w-12">
                <Checkbox
                  className="ml-[5px]"
                  checked={getCurrentPagePatients().every(patient => selectedPatients.includes(patient.id))}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead className="pl-8">Patients</TableHead>
              {!selectedPatient && (
                <>
              <TableHead className="text-center">Read</TableHead>
              <TableHead className="text-center">Processed</TableHead>
              <TableHead className="text-center">Transmission Date</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Date Reviewed</TableHead>
              <TableHead className="text-center">Device Type</TableHead>
              <TableHead className="text-center">Transmission Type</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
              </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {getCurrentPagePatients().map((patient) => (
              <TableRow key={patient.id} className="h-[72px] relative">
                <div className={`absolute left-0 top-0 bottom-0 w-[5px] ${getPriorityColor(patient.priority)} mt-[6px]  mb-[6px] rounded-tr-[6px] rounded-br-[6px]`} />
                <TableCell style={{backgroundColor: (selectedPatient && selectedPatient?.patient?.id == patient?.id ? '#f5f5f5' : 'transparent')}}>
                  <Checkbox 
                    className="ml-[5px]"
                    checked={selectedPatients.includes(patient.id)}
                    onCheckedChange={() => togglePatient(patient.id)}
                  />
                </TableCell>
                <TableCell className="cursor-pointer pl-7" onClick={() => setSelectedPatient({...{patient}})} style={{backgroundColor: (selectedPatient && selectedPatient?.patient?.id == patient?.id ? '#f5f5f5' : 'transparent')}}>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-muted-foreground">{patient.id}</div>
                </TableCell>
                {!selectedPatient && (
                <>
                <TableCell>
                  <div className="flex justify-center cursor-pointer gap-3">
                  {patient.alert.length>1 ? <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{color: "#357ABD"}}
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg> : <></>}
                  {patient.read ? 
                  <div className="">
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9955 1.75218L22.2763 7.12803C22.5689 7.31799 22.7152 7.41297 22.8212 7.53966C22.9151 7.65181 22.9856 7.78153 23.0286 7.92122C23.0771 8.07903 23.0771 8.25331 23.0771 8.60186V16.6567C23.0771 18.5026 23.0771 19.4255 22.7175 20.1306C22.4011 20.7507 21.8963 21.255 21.2753 21.5709C20.5694 21.9302 19.6453 21.9302 17.7971 21.9302H6.35715C4.50898 21.9302 3.58489 21.9302 2.87898 21.5709C2.25804 21.255 1.75321 20.7507 1.43683 20.1306C1.07715 19.4255 1.07715 18.5026 1.07715 16.6567V8.60186C1.07715 8.25331 1.07715 8.07903 1.12574 7.92122C1.16875 7.78153 1.23923 7.65181 1.33306 7.53966C1.43906 7.41297 1.58536 7.31799 1.87797 7.12803L10.1588 1.75218M13.9955 1.75218C13.3011 1.3014 12.954 1.07601 12.5799 0.988314C12.2492 0.910796 11.9051 0.910796 11.5744 0.988314C11.2003 1.07601 10.8532 1.3014 10.1588 1.75218M13.9955 1.75218L20.8069 6.17409C21.5635 6.66529 21.9419 6.91089 22.0729 7.22235C22.1874 7.49454 22.1874 7.8013 22.0729 8.07349C21.9419 8.38495 21.5635 8.63055 20.8069 9.12175L13.9955 13.5437C13.3011 13.9944 12.954 14.2198 12.5799 14.3075C12.2492 14.385 11.9051 14.385 11.5744 14.3075C11.2003 14.2198 10.8532 13.9944 10.1588 13.5437L3.3474 9.12175C2.59076 8.63055 2.21245 8.38495 2.08142 8.07349C1.96691 7.8013 1.96691 7.49454 2.08142 7.22235C2.21245 6.91089 2.59076 6.66529 3.3474 6.17409L10.1588 1.75218M22.5271 19.7329L15.22 13.1411M8.93425 13.1411L1.62715 19.7329" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                    </div>                   
                    : 
                    <div className="pt-[2px]">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4302 15.8052L15.1231 9.43018M8.83737 9.43018L1.53026 15.8052M1.10519 4.26709L9.96164 10.1903C10.6889 10.6821 11.0526 10.928 11.4481 11.0232C11.7975 11.1073 12.1629 11.1073 12.5123 11.0232C12.9079 10.928 13.2715 10.6821 13.9988 10.1903L22.6205 4.26709M6.26022 17.9302H17.7002C19.5484 17.9302 20.4725 17.9302 21.1784 17.5828C21.7993 17.2772 22.3042 16.7895 22.6205 16.1898C22.9802 15.5079 22.9802 14.6153 22.9802 12.8302V6.03018C22.9802 4.24501 22.9802 3.35242 22.6205 2.67058C22.3042 2.07081 21.7993 1.58319 21.1784 1.27759C20.4725 0.930176 19.5484 0.930176 17.7002 0.930176H6.26022C4.41205 0.930176 3.48796 0.930176 2.78206 1.27759C2.16112 1.58319 1.65629 2.07081 1.3399 2.67058C0.980225 3.35242 0.980225 4.24501 0.980225 6.03018V12.8302C0.980225 14.6153 0.980225 15.5079 1.3399 16.1898C1.65629 16.7895 2.16112 17.2772 2.78206 17.5828C3.48796 17.9302 4.41205 17.9302 6.26022 17.9302Z" stroke="#28AC62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                  }
                </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                <Checkbox style={{backgroundColor: (patient.status == "Reviewed" || patient.priority == "red" ? "#4A90E2" : ""), border: (patient.status == "Reviewed" || patient.priority == "red" ? "none" : "")}} checked={patient.status == "Reviewed" || patient.priority == "red"} />
                </div>
              </TableCell>
              <TableCell className="text-center">{patient.transmissionDate}</TableCell>
              <TableCell className="text-center">{patient.status}</TableCell>
              <TableCell className="text-center">{patient.dateReviewed}</TableCell>
              <TableCell className="text-center">{patient.manufacturer} - {patient.deviceType}</TableCell>
              <TableCell className="text-center">{patient.transmissionType}</TableCell>
              <TableCell>
                <div className="flex space-x-3">
                  <Download className="h-5 w-5 text-gray-500 cursor-pointer" />
                  <Printer className="h-5 w-5 text-gray-500 cursor-pointer" />
                </div>
              </TableCell>
                </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={`flex items-center border-t justify-between space-x-2 py-3 mt-0 pl-3 pr-3`} style={{ marginTop: 0 }}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      </div>

      {selectedPatient && (
    <div className="w-[calc(100%-273px)] border-l">
      {/* Right-side div for patient data */}
      <div style={{overflowX: 'auto', height: '100%'}}>
    <div className=" mx-auto px-6 pt-4 pb-3" style={{ minWidth: '1370px' }}>
    <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="Patient avatar" src={'./er.png'} />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">{selectedPatient.patient.name}</span>
              <Button onClick={()=>setHidePatientInfo(!hidePatientInfo)} variant="ghost" size="icon" className="ml-1 h-10 w-10">
                <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${hidePatientInfo ? 'rotate-180' : 'rotate-0'}`} />
              </Button>            </div>
            <div className="text-sm text-gray-500">Age 21</div>
          </div>
        </div>
        <div className=" pt-1 flex items-center justify-center">
        {/* <Button className="border rounded-md w-full mr-3" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
        Action Plan
        </Button> */}
        <Button className="bg-blue-600 hover:bg-blue-700 px-7">
          Contact Patient
        </Button>
        <span>
        <Button onClick={()=>setSelectedPatient(null)} variant="ghost" size="icon" className="ml-4 h-10 w-10">
         <X />
        </Button>
        </span>

      </div>

      </div>
      <PatientInfo isCmemsOrCieds={true} selectedPatient={selectedPatient?.patient} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={addPixelsForBiggerScreens} />
      </div>
      </div>
      {/* Add patient details content here */}
    </div>
  )}
</div>

      </div>
    </div>
  );
}
