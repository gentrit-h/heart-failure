/* eslint-disable */
'use client'

import * as React from "react"
import { Calendar as CalendarIcon, ChevronDown, Link, Search, Clock, FileText } from "lucide-react"
import { format } from "date-fns"

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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import PatientInfo from "./PatientInfo"

interface Patient {
  id: string
  name: string
  deviceInfo: string
  status: string
  lastTransmission: string
  lastConnection: string
  monitoring: string
  communicationHistory: boolean
  note: boolean
}

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
  // Additional patients for pagination demonstration...
  ...[...Array(18)].map((_, index) => ({
    id: `12439${8596 + index}`,
    name: `Patient ${index + 3}`,
    deviceInfo: index % 2 === 0 ? "MDT - ICD" : "BSX - PPM",
    status: index % 3 === 0 ? "Connected" : "Disconnected",
    lastTransmission: `${15 - (index % 7)}/05/2023`,
    lastConnection: `${14 - (index % 7)}/05/2023`,
    monitoring: "Synopse",
    communicationHistory: index % 2 === 0,
    note: index % 2 !== 0
  }))
]

export default function Patients() {
  const [selectedPatients, setSelectedPatients] = React.useState<string[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [filteredPatients, setFilteredPatients] = React.useState(patients)
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 6),
    to: new Date(2022, 0, 13),
  })
  const patientsPerPage = 9;
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage)

  const [currentTab, setCurrentTab] = React.useState("all")
  const [filters, setFilters] = React.useState({
    search: "",
    deviceInfo: [] as string[],
    status: [] as string[],
  })
  const [selectedPatient, setSelectedPatient] = React.useState<any>(null)

  const togglePatient = (patientId: string) => {
    setSelectedPatients(prev =>
      prev.includes(patientId)
        ? prev.filter(id => id !== patientId)
        : [...prev, patientId]
    )
  }

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
      const deviceInfoMatch = filters.deviceInfo.length === 0 || filters.deviceInfo.includes(patient.deviceInfo)
      const statusMatch = filters.status.length === 0 || filters.status.includes(patient.status)
      const tabMatch = currentTab === "all" || patient.status === currentTab
      return searchMatch && deviceInfoMatch && statusMatch && tabMatch
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



  return (
    <div className="w-full space-y-4">
      {/* <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 flex-1">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for patient"
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
            className="w-full max-w-sm"
          />
        </div>
      </div> */}

      <div className="rounded-md border flex">
      <div className={` ${selectedPatient ? "w-[273px]" : "w-full"}`}>        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  className="ml-[5px]"
                  checked={getCurrentPagePatients().every(patient => selectedPatients.includes(patient.id))}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Patient Name</TableHead>
              {!selectedPatient && (
                <>
              <TableHead>Device Info</TableHead>
              <TableHead>
                <div className="flex justify-center">Status</div></TableHead>
              <TableHead>Last Transmission</TableHead>
              <TableHead>Last Connection</TableHead>
              <TableHead>Monitoring</TableHead>
              <TableHead>
              <div className="flex justify-center">
              Communication History
              </div></TableHead>
              <TableHead>
              <div className="flex justify-center pr-5">
              Note</div></TableHead>
              </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {getCurrentPagePatients().map((patient) => (
                <TableRow key={patient.id} className="h-[72px] relative">
                  <TableCell>
                    <Checkbox 
                      className="ml-[5px]"
                      checked={selectedPatients.includes(patient.id)}
                      onCheckedChange={() => togglePatient(patient.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div
                      className="font-medium cursor-pointer"
                      onClick={() => setSelectedPatient({...{patient}})}
                    >
                      {patient.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{patient.id}</div>
                  </TableCell>
                  {!selectedPatient && (
                <>
                  <TableCell>{patient.deviceInfo}</TableCell>
                  <TableCell className='pr-5'>
                    <div className="flex justify-center">
                    <span
                        className="inline-flex px-[12px] py-[4px] text-xs border rounded-[6px] font-semibold"
                        style={{
                          backgroundColor: patient.status === "Connected" ? '#ECFDF3' : '#F700001A',
                          color: patient.status === "Connected" ? '#067647' : '#F70000',
                          borderColor: patient.status === "Connected" ? '#067647' : '#F70000',
                          width: patient.status === "Connected" ? "86px":"104px",
                          height: patient.status === "Connected" ? "26px": "26px"
                        }}
                    >
                      {patient.status}
                    </span>
                    </div>
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
                  </>
                )}
                </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={`flex items-center border-t justify-between space-x-2 py-4  mt-0 pl-3 pr-3`} style={{ marginTop: 0 }}>
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
    <div className=" mx-auto p-6" style={{ minWidth: '1300px' }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">{selectedPatient?.patient?.name}</h1>
          <span className="text-xl">- Age 63</span>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>
        <div onClick={() => setSelectedPatient(null)} className="cursor-pointer">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 14.25L19 23.75L28.5 14.25" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <PatientInfo selectedPatient={selectedPatient} />
      </div>
      </div>
      {/* Add patient details content here */}
    </div>
  )}
  
</div>      

    </div>
  )
}
