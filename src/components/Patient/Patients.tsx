/* eslint-disable */
'use client'

import * as React from "react"
import { Calendar as CalendarIcon, ChevronDown, Link, Search, Clock, FileText, X } from "lucide-react"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


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
  manufacturer: string
}

const patients: Patient[] = [
  {
    id: "124398594",
    name: "Ermal Ismajli",
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "15/05/2023",
    lastConnection: "14/05/2023",
    monitoring: "Palpitations",
    communicationHistory: true,
    note: false,
    manufacturer: "MDT"
  },
  {
    id: "124398595",
    name: "Jane Smith",
    deviceInfo: "BSX - PPM",
    status: "Disconnected",
    lastTransmission: "14/05/2023",
    lastConnection: "13/05/2023",
    monitoring: "Palpitations",
    communicationHistory: false,
    note: true,
    manufacturer: "BSX"
  },
  {
    id: "124398596",
    name: "John Doe",
    deviceInfo: "BIO - CRT",
    status: "Connected",
    lastTransmission: "01/06/2023",
    lastConnection: "31/05/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: true,
    manufacturer: "BIO"
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
    note: false,
    manufacturer: "STJ"
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
    note: true,
    manufacturer: "MDT"
  },
  {
    id: "124398599",
    name: "Laura White",
    deviceInfo: "BSX - ICD",
    status: "Disconnected",
    lastTransmission: "05/08/2023",
    lastConnection: "04/08/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: true,
    manufacturer: "BSX"
  },
  {
    id: "124398600",
    name: "David Green",
    deviceInfo: "BIO - PPM",
    status: "Connected",
    lastTransmission: "10/09/2023",
    lastConnection: "09/09/2023",
    monitoring: "Post AF Ablation",
    communicationHistory: true,
    note: false,
    manufacturer: "BIO"
  },
  {
    id: "124398601",
    name: "Emma Blue",
    deviceInfo: "STJ - CRT",
    status: "Disconnected",
    lastTransmission: "21/05/2023",
    lastConnection: "20/05/2023",
    monitoring: "Syncope",
    communicationHistory: false,
    note: false,
    manufacturer: "STJ"
  },
  {
    id: "124398602",
    name: "Michael Taylor",
    deviceInfo: "MDT - ICD",
    status: "Connected",
    lastTransmission: "11/06/2023",
    lastConnection: "10/06/2023",
    monitoring: "Palpitations",
    communicationHistory: true,
    note: false,
    manufacturer: "MDT"
  },
  {
    id: "124398603",
    name: "Sarah Brown",
    deviceInfo: "BSX - ILR",
    status: "Connected",
    lastTransmission: "07/07/2023",
    lastConnection: "06/07/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: true,
    manufacturer: "BSX"
  },
  {
    id: "124398604",
    name: "Chris Black",
    deviceInfo: "BIO - CRT",
    status: "Disconnected",
    lastTransmission: "15/05/2023",
    lastConnection: "14/05/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: true,
    manufacturer: "BIO"
  },
  {
    id: "124398605",
    name: "Nancy Gray",
    deviceInfo: "STJ - PPM",
    status: "Connected",
    lastTransmission: "02/04/2023",
    lastConnection: "01/04/2023",
    monitoring: "Syncope",
    communicationHistory: false,
    note: false,
    manufacturer: "STJ"
  },
  {
    id: "124398606",
    name: "Peter Clark",
    deviceInfo: "MDT - ICD",
    status: "Disconnected",
    lastTransmission: "18/08/2023",
    lastConnection: "17/08/2023",
    monitoring: "Ventricular Tachycardia",
    communicationHistory: true,
    note: false,
    manufacturer: "MDT"
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
    note: true,
    manufacturer: "BSX"
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
    note: true,
    manufacturer: "BIO"
  },
  {
    id: "124398609",
    name: "Evelyn Green",
    deviceInfo: "STJ - ILR",
    status: "Connected",
    lastTransmission: "08/05/2023",
    lastConnection: "07/05/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: false,
    manufacturer: "STJ"
  },
  {
    id: "124398610",
    name: "Oliver Brown",
    deviceInfo: "MDT - PPM",
    status: "Disconnected",
    lastTransmission: "25/05/2023",
    lastConnection: "24/05/2023",
    monitoring: "Syncope",
    communicationHistory: true,
    note: true,
    manufacturer: "MDT"
  },
  {
    id: "124398611",
    name: "Sophia White",
    deviceInfo: "BSX - CRT",
    status: "Connected",
    lastTransmission: "14/06/2023",
    lastConnection: "13/06/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: false,
    manufacturer: "BSX"
  },
  {
    id: "124398612",
    name: "Lucas Brown",
    deviceInfo: "BIO - ILR",
    status: "Disconnected",
    lastTransmission: "23/03/2023",
    lastConnection: "22/03/2023",
    monitoring: "Ventricular Tachycardia",
    communicationHistory: true,
    note: true,
    manufacturer: "BIO"
  },
  {
    id: "124398613",
    name: "Grace Scott",
    deviceInfo: "STJ - ICD",
    status: "Connected",
    lastTransmission: "30/07/2023",
    lastConnection: "29/07/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: false,
    note: true,
    manufacturer: "STJ"
  },
  {
    id: "124398614",
    name: "Daniel Turner",
    deviceInfo: "MDT - PPM",
    status: "Disconnected",
    lastTransmission: "04/09/2023",
    lastConnection: "03/09/2023",
    monitoring: "Post AF Ablation",
    communicationHistory: true,
    note: false,
    manufacturer: "MDT"
  },
  {
    id: "124398615",
    name: "Victoria Reed",
    deviceInfo: "BSX - ICD",
    status: "Connected",
    lastTransmission: "12/05/2023",
    lastConnection: "11/05/2023",
    monitoring: "Palpitations",
    communicationHistory: false,
    note: true,
    manufacturer: "BSX"
  },
  {
    id: "124398616",
    name: "Adam Morris",
    deviceInfo: "BIO - PPM",
    status: "Disconnected",
    lastTransmission: "03/10/2023",
    lastConnection: "02/10/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: true,
    manufacturer: "BIO"
  },
  {
    id: "124398617",
    name: "Chloe James",
    deviceInfo: "STJ - ILR",
    status: "Connected",
    lastTransmission: "21/04/2023",
    lastConnection: "20/04/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: false,
    note: false,
    manufacturer: "STJ"
  },
  {
    id: "124398618",
    name: "Henry Hill",
    deviceInfo: "MDT - CRT",
    status: "Disconnected",
    lastTransmission: "10/11/2023",
    lastConnection: "09/11/2023",
    monitoring: "AF Management",
    communicationHistory: true,
    note: false,
    manufacturer: "MDT"
  },
  {
    id: "124398619",
    name: "Isabella Adams",
    deviceInfo: "BSX - ICD",
    status: "Connected",
    lastTransmission: "25/12/2023",
    lastConnection: "24/12/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: false,
    note: true,
    manufacturer: "BSX"
  },
  {
    id: "124398620",
    name: "Ryan Stewart",
    deviceInfo: "BIO - CRT",
    status: "Disconnected",
    lastTransmission: "15/08/2023",
    lastConnection: "14/08/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: true,
    note: true,
    manufacturer: "BIO"
  },
  {
    id: "124398621",
    name: "Mia Taylor",
    deviceInfo: "STJ - PPM",
    status: "Connected",
    lastTransmission: "05/03/2023",
    lastConnection: "04/03/2023",
    monitoring: "AF Management",
    communicationHistory: false,
    note: false,
    manufacturer: "STJ"
  },
  {
    id: "124398622",
    name: "Noah Evans",
    deviceInfo: "MDT - ICD",
    status: "Disconnected",
    lastTransmission: "28/09/2023",
    lastConnection: "27/09/2023",
    monitoring: "AF Management",
    communicationHistory: true,
    note: true,
    manufacturer: "MDT"
  },
  {
    id: "124398623",
    name: "Ella Green",
    deviceInfo: "BSX - ILR",
    status: "Connected",
    lastTransmission: "16/10/2023",
    lastConnection: "15/10/2023",
    monitoring: "Cryptogenic Stroke",
    communicationHistory: false,
    note: true,
    manufacturer: "BSX"
  }
];

export default function Patients() {
  const [selectedPatients, setSelectedPatients] = React.useState<string[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [filteredPatients, setFilteredPatients] = React.useState(patients)
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 6),
    to: new Date(2022, 0, 13),
  });
  const parentRef = React.useRef(null);
  const [parentHeight, setParentHeight] = React.useState(0);

  React.useEffect(() => {
    if (parentRef.current) {
      setParentHeight(parentRef.current.offsetHeight);
    }
  }, []);
  const patientsPerPage = parentHeight > 0 ? Math.floor((parentHeight - 105) / 72) : 9;
  const addPixelsForBiggerScreens = parentHeight > 0 ? patientsPerPage * 72 - 9*72 : 0;
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage)

  const [currentTab, setCurrentTab] = React.useState("all")
  const [hidePatientInfo, setHidePatientInfo] = React.useState(false)
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
    <div className="w-full space-y-4 h-[88vh]"  ref={parentRef}>
      <div className="rounded-md border">
      <div className="flex flex-row">
      <div className={` ${selectedPatient ? "w-[273px]" : "w-full"}`}>        
        <Table>
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
                  <TableCell style={{backgroundColor: (selectedPatient && selectedPatient?.patient?.id == patient?.id ? '#f5f5f5' : 'transparent')}}>
                    <Checkbox 
                      className="ml-[5px]"
                      checked={selectedPatients.includes(patient.id)}
                      onCheckedChange={() => togglePatient(patient.id)}
                    />
                  </TableCell>
                  <TableCell className="cursor-pointer" onClick={() => setSelectedPatient({...{patient}})}
                    style={{backgroundColor: (selectedPatient && selectedPatient?.patient?.id == patient?.id ? '#f5f5f5' : 'transparent')}}
                    >
                    <div
                      className="font-medium"
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
              </Button>            
              </div>
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
      <PatientInfo defaultTab={'summary'} selectedPatient={selectedPatient?.patient} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={addPixelsForBiggerScreens} />
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
