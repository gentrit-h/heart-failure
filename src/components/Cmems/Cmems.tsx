'use client'

import * as React from "react"
import { Calendar as CalendarIcon, ChevronDown, Info, Link, MoreVertical, Search, X } from "lucide-react"
import { DateRange } from "react-day-picker"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import PatientInfo from "../Patient/PatientInfo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { WaveForm } from "../CIEDS/WaveForm"
import { PopoverClose } from "@radix-ui/react-popover"

const patients = [
  {
    id: "124398594",
    name: "Alice Johnson",
    source: "Home",
    date: "01/11/2024 08:30",
    goal: "34(2)",
    systolicPAP: "53 mmHg",
    diastolicPAP: "19 mmHg",
    meanPAP: "34 mmHg",
    pulsePressure: "34 mmHg",
    paHeartRate: "80 bpm",
    waveform: true,
    status: "new",
    priority: "high"
  },
  {
    id: "124398595",
    name: "Bob Smith",
    source: "Clinic",
    date: "01/11/2024 10:15",
    goal: "40(1)",
    systolicPAP: "57 mmHg",
    diastolicPAP: "21 mmHg",
    meanPAP: "36 mmHg",
    pulsePressure: "36 mmHg",
    paHeartRate: "75 bpm",
    waveform: false,
    status: "dismissed",
    priority: "low",
    manufacturer: "BIO"
  },
  {
    id: "124398596",
    name: "Catherine Lee",
    source: "Hospital",
    date: "02/11/2024 14:05",
    goal: "42(0)",
    systolicPAP: "60 mmHg",
    diastolicPAP: "22 mmHg",
    meanPAP: "38 mmHg",
    pulsePressure: "38 mmHg",
    paHeartRate: "78 bpm",
    waveform: true,
    status: "confirmed",
    priority: "medium",
    manufacturer: "MDT"
  },
  {
    id: "124398597",
    name: "David Brown",
    source: "Home",
    date: "03/11/2024 09:45",
    goal: "38(1)",
    systolicPAP: "55 mmHg",
    diastolicPAP: "20 mmHg",
    meanPAP: "35 mmHg",
    pulsePressure: "35 mmHg",
    paHeartRate: "82 bpm",
    waveform: true,
    status: "new",
    priority: "low",
    manufacturer: "BIO"
  },
  {
    id: "124398598",
    name: "Emma Wilson",
    source: "Clinic",
    date: "03/11/2024 12:30",
    goal: "39(3)",
    systolicPAP: "54 mmHg",
    diastolicPAP: "19 mmHg",
    meanPAP: "33 mmHg",
    pulsePressure: "35 mmHg",
    paHeartRate: "77 bpm",
    waveform: false,
    status: "dismissed",
    priority: "high",
    manufacturer: "STJ"
  },
  {
    id: "124398599",
    name: "Frank Miller",
    source: "Hospital",
    date: "04/11/2024 16:00",
    goal: "36(2)",
    systolicPAP: "58 mmHg",
    diastolicPAP: "20 mmHg",
    meanPAP: "37 mmHg",
    pulsePressure: "38 mmHg",
    paHeartRate: "83 bpm",
    waveform: true,
    status: "confirmed",
    priority: "low",
    manufacturer: "BSX"
  },
  {
    id: "124398600",
    name: "Grace Davis",
    source: "Home",
    date: "05/11/2024 11:20",
    goal: "37(0)",
    systolicPAP: "56 mmHg",
    diastolicPAP: "19 mmHg",
    meanPAP: "36 mmHg",
    pulsePressure: "37 mmHg",
    paHeartRate: "81 bpm",
    waveform: true,
    status: "new",
    priority: "low",
    manufacturer: "MDT"
  },
  {
    id: "124398601",
    name: "Henry Adams",
    source: "Clinic",
    date: "06/11/2024 08:15",
    goal: "35(1)",
    systolicPAP: "59 mmHg",
    diastolicPAP: "21 mmHg",
    meanPAP: "38 mmHg",
    pulsePressure: "38 mmHg",
    paHeartRate: "79 bpm",
    waveform: false,
    status: "dismissed",
    priority: "high",
    manufacturer: "STJ"
  },
  {
    id: "124398602",
    name: "Isabel Moore",
    source: "Hospital",
    date: "06/11/2024 15:45",
    goal: "33(2)",
    systolicPAP: "61 mmHg",
    diastolicPAP: "22 mmHg",
    meanPAP: "39 mmHg",
    pulsePressure: "39 mmHg",
    paHeartRate: "76 bpm",
    waveform: true,
    status: "confirmed",
    priority: "medium",
    manufacturer: "BSX"
  },
  {
    id: "124398603",
    name: "Jack Taylor",
    source: "Home",
    date: "07/11/2024 07:30",
    goal: "34(3)",
    systolicPAP: "54 mmHg",
    diastolicPAP: "20 mmHg",
    meanPAP: "34 mmHg",
    pulsePressure: "34 mmHg",
    paHeartRate: "78 bpm",
    waveform: true,
    status: "new",
    priority: "high",
    manufacturer: "BIO"
  },
  {
    id: "124398604",
    name: "Katherine White",
    source: "Clinic",
    date: "07/11/2024 09:20",
    goal: "40(1)",
    systolicPAP: "57 mmHg",
    diastolicPAP: "21 mmHg",
    meanPAP: "36 mmHg",
    pulsePressure: "36 mmHg",
    paHeartRate: "75 bpm",
    waveform: false,
    status: "dismissed",
    priority: "medium",
    manufacturer: "STJ"
  },
  {
    id: "124398605",
    name: "Liam Harris",
    source: "Hospital",
    date: "08/11/2024 14:10",
    goal: "42(0)",
    systolicPAP: "60 mmHg",
    diastolicPAP: "22 mmHg",
    meanPAP: "38 mmHg",
    pulsePressure: "38 mmHg",
    paHeartRate: "78 bpm",
    waveform: true,
    status: "confirmed",
    priority: "low",
    manufacturer: "MDT"
  },
  {
    id: "124398606",
    name: "Maria Clark",
    source: "Home",
    date: "08/11/2024 15:30",
    goal: "38(1)",
    systolicPAP: "55 mmHg",
    diastolicPAP: "20 mmHg",
    meanPAP: "35 mmHg",
    pulsePressure: "35 mmHg",
    paHeartRate: "82 bpm",
    waveform: true,
    status: "new",
    priority: "medium",
    manufacturer: "BSX"
  },
  {
    id: "124398607",
    name: "Nathan Robinson",
    source: "Clinic",
    date: "09/11/2024 12:05",
    goal: "39(3)",
    systolicPAP: "54 mmHg",
    diastolicPAP: "19 mmHg",
    meanPAP: "33 mmHg",
    pulsePressure: "35 mmHg",
    paHeartRate: "77 bpm",
    waveform: false,
    status: "dismissed",
    priority: "high",
    manufacturer: "MDT"
  },
  {
    id: "124398608",
    name: "Olivia Scott",
    source: "Hospital",
    date: "10/11/2024 16:40",
    goal: "36(2)",
    systolicPAP: "58 mmHg",
    diastolicPAP: "20 mmHg",
    meanPAP: "37 mmHg",
    pulsePressure: "38 mmHg",
    paHeartRate: "83 bpm",
    waveform: true,
    status: "confirmed",
    priority: "high",
    manufacturer: "BIO"
  },
  {
    id: "124398609",
    name: "Paul King",
    source: "Home",
    date: "11/11/2024 11:00",
    goal: "37(0)",
    systolicPAP: "56 mmHg",
    diastolicPAP: "19 mmHg",
    meanPAP: "36 mmHg",
    pulsePressure: "37 mmHg",
    paHeartRate: "81 bpm",
    waveform: true,
    status: "new",
    priority: "high",
    manufacturer: "STJ"
  },
  {
    id: "124398610",
    name: "Quinn Baker",
    source: "Clinic",
    date: "11/11/2024 09:00",
    goal: "35(1)",
    systolicPAP: "59 mmHg",
    diastolicPAP: "21 mmHg",
    meanPAP: "38 mmHg",
    pulsePressure: "38 mmHg",
    paHeartRate: "79 bpm",
    waveform: false,
    status: "dismissed",
    priority: "medium",
    manufacturer: "BSX"
  },
  {
    id: "124398611",
    name: "Rachel Turner",
    source: "Hospital",
    date: "12/11/2024 16:50",
    goal: "33(2)",
    systolicPAP: "61 mmHg",
    diastolicPAP: "22 mmHg",
    meanPAP: "39 mmHg",
    pulsePressure: "39 mmHg",
    paHeartRate: "76 bpm",
    waveform: true,
    status: "confirmed",
    priority: "low",
    manufacturer: "MDT"
  },
  {
    id: "124398612",
    name: "Sam Anderson",
    source: "Home",
    date: "12/11/2024 08:25",
    goal: "34(3)",
    systolicPAP: "54 mmHg",
    diastolicPAP: "20 mmHg",
    meanPAP: "34 mmHg",
    pulsePressure: "34 mmHg",
    paHeartRate: "78 bpm",
    waveform: true,
    status: "new",
    priority: "high",
    manufacturer: "BIO"
  },
  {
    id: "124398613",
    name: "Tina Carter",
    source: "Clinic",
    date: "13/11/2024 10:10",
    goal: "40(1)",
    systolicPAP: "57 mmHg",
    diastolicPAP: "21 mmHg",
    meanPAP: "36 mmHg",
    pulsePressure: "36 mmHg",
    paHeartRate: "75 bpm",
    waveform: false,
    status: "dismissed",
    priority: "medium",
    manufacturer: "STJ"
  }
];


export default function Cmems() {
  const [selectedPatients, setSelectedPatients] = React.useState<string[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [filteredPatients, setFilteredPatients] = React.useState(patients)
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 6),
    to: new Date(2022, 0, 13),
  })
  const [currentTab, setCurrentTab] = React.useState("all")
  const [filters, setFilters] = React.useState({
    search: "",
    deviceType: [] as string[],
    connectivity: [] as string[],
  })
  const parentRef = React.useRef(null);
  const [parentHeight, setParentHeight] = React.useState(0);

  React.useEffect(() => {
    if (parentRef.current) {
      setParentHeight(parentRef.current.offsetHeight);
    }
  }, []);
  const patientsPerPage = parentHeight > 0 ? Math.floor((parentHeight - 155) / 72) : 7;
  const addPixelsForBiggerScreens = parentHeight > 0 ? patientsPerPage * 72 - 7*72 : 0;
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage)
  const [hidePatientInfo, setHidePatientInfo] = React.useState(false)

  const togglePatient = (patientId: string) => {
    setSelectedPatients(prev =>
      prev.includes(patientId)
        ? prev.filter(id => id !== patientId)
        : [...prev, patientId]
    )
  }
  const [selectedPatient, setSelectedPatient] = React.useState<any>(null)

  const toggleAll = () => {
    const currentPagePatients = getCurrentPagePatients()
    const allSelected = currentPagePatients.every(patient => selectedPatients.includes(patient.id))
    if (allSelected) {
      setSelectedPatients(prev => prev.filter(id => !currentPagePatients.some(patient => patient.id === id)))
    } else {
      setSelectedPatients(prev => [...new Set([...prev, ...currentPagePatients.map(patient => patient.id)])])
    }
  }

  const applyFilters = () => {
    setFilteredPatients(patients.filter(patient => {
      const searchMatch = patient.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          patient.id.includes(filters.search)
      const deviceTypeMatch = filters.deviceType.length === 0 || filters.deviceType.includes(patient.deviceType)
      const connectivityMatch = filters.connectivity.length === 0 || filters.connectivity.includes(patient.connectivity)
      const statusMatch = currentTab === "all" || patient.status === currentTab
      return searchMatch && deviceTypeMatch && connectivityMatch && statusMatch
    }))
    setCurrentPage(1) // Reset to first page when filters change
  }

  React.useEffect(() => {
    applyFilters()
  }, [filters, currentTab])

  const getCurrentPagePatients = () => {
    const startIndex = (currentPage - 1) * patientsPerPage
    const endIndex = startIndex + patientsPerPage
    return filteredPatients.slice(startIndex, endIndex)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="w-full space-y-4 h-[88vh]" ref={parentRef}>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-1 border-b">
          {["all", "new", "confirmed", "dismissed"].map((tab) => (
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
              <TableHead>Patients</TableHead>
              {!selectedPatient && (
                <>
              <TableHead className="text-center">Source</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Goal (+/-)</TableHead>
              <TableHead className="text-center">Systolic PAP</TableHead>
              <TableHead className="text-center">Diastolic PAP</TableHead>
              <TableHead className="text-center">Mean PAP</TableHead>
              <TableHead className="text-center">Pulse Pressure</TableHead>
              <TableHead className="text-center">PA Heart Rate</TableHead>
              <TableHead className="text-center">Waveform</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">View</TableHead>
              <TableHead className="w-[100px]"></TableHead>
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
                <TableCell className="cursor-pointer" onClick={() => setSelectedPatient({...{patient}})} style={{backgroundColor: (selectedPatient && selectedPatient?.patient?.id == patient?.id ? '#f5f5f5' : 'transparent')}}>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-muted-foreground">{patient.id}</div>
                </TableCell>
                {!selectedPatient && (
                <>
                <TableCell className="text-center">{patient.source}</TableCell>
                <TableCell className="text-center">{patient.date}</TableCell>
                <TableCell className="text-center">{patient.goal}</TableCell>
                <TableCell className="text-center">{patient.systolicPAP}</TableCell>
                <TableCell className="text-center">{patient.diastolicPAP}</TableCell>
                <TableCell className="text-center">{patient.meanPAP}</TableCell>
                <TableCell className="text-center">{patient.pulsePressure}</TableCell>
                <TableCell className="text-center">{patient.paHeartRate}</TableCell>
                <TableCell>
                <Popover>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
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
                                  }}
                                  onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                      "lightgrey")
                                  } // Change color on hover
                                  onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                      "white")
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
                              style={{
                                width: "29vw",
                              }}
                            >
                              <WaveForm></WaveForm>
                              <PopoverClose asChild>
                              </PopoverClose>
                            </PopoverContent>
                          </Popover>
                </TableCell>
                <TableCell>
                <div className="flex justify-center">
                  <Select>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="dismissed">Dismissed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                  <Button onClick={() => {setSelectedPatient({...{patient}})}} className="border rounded-md w-full mr-3" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
                    View Summary
                  </Button>
                  </div>
                  </TableCell>
                <TableCell>
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Export data</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
      <PatientInfo defaultTab={"summary"} isCmemsOrCieds={true} selectedPatient={selectedPatient?.patient} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={addPixelsForBiggerScreens} />
      </div>
      </div>
      {/* Add patient details content here */}
    </div>
  )}
</div>

      </div>
    </div>
  )
}