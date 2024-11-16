'use client'

import * as React from "react"
import { Calendar as CalendarIcon, ChevronDown, Link, Search } from "lucide-react"
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

interface Patient {
  id: string
  name: string
  transmissionDate: string
  deviceType: string
  connectivity: string
  cmems1: string
  cmems2: string
  activities: string
  status: "new" | "confirmed" | "dismissed"
  priority: "high" | "medium" | "low"
}

const patients: Patient[] = [
  {
    id: "124398594",
    name: "John Doe",
    transmissionDate: "15/05/2023 10:30",
    deviceType: "PPM",
    connectivity: "Connected",
    cmems1: "-",
    cmems2: "New Data",
    activities: "Activities for the last hour",
    status: "new",
    priority: "high"
  },
  {
    id: "124398595",
    name: "Jane Smith",
    transmissionDate: "14/05/2023 14:45",
    deviceType: "PPM/SRTD",
    connectivity: "Disconnected",
    cmems1: "-",
    cmems2: "-",
    activities: "Activities for the last hour",
    status: "confirmed",
    priority: "medium"
  },
  // Add more sample data to have at least 20 patients for pagination demonstration
  ...[...Array(18)].map((_, index) => ({
    id: `12439${8596 + index}`,
    name: `Patient ${index + 3}`,
    transmissionDate: `${15 - (index % 7)}/05/2023 ${10 + index}:${30 + index}`,
    deviceType: index % 2 === 0 ? "PPM" : "PPM/SRTD",
    connectivity: index % 3 === 0 ? "Connected" : "Disconnected",
    cmems1: index % 4 === 0 ? "New Data" : "-",
    cmems2: index % 5 === 0 ? "New Data" : "-",
    activities: "Activities for the last hour",
    status: ["new", "confirmed", "dismissed"][index % 2] as "new" | "confirmed" | "dismissed",
    priority: ["high", "medium", "low"][index % 3] as "high" | "medium" | "low"
  }))
]

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
  const patientsPerPage = 9
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage)

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
    <div className="w-full space-y-4">
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
        <div className="flex items-center justify-between">
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
        </div>
      </div>

      <div className="rounded-md border">
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
              <TableHead>Transmission Date</TableHead>
              <TableHead>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-full justify-start pl-[0px]">
                      Device Type
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {["PPM", "PPM/SRTD"].map((type) => (
                      <DropdownMenuCheckboxItem
                        key={type}
                        checked={filters.deviceType.includes(type)}
                        onCheckedChange={(checked) => {
                          setFilters({
                            ...filters,
                            deviceType: checked
                              ? [...filters.deviceType, type]
                              : filters.deviceType.filter((t) => t !== type),
                          })
                        }}
                      >
                        {type}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableHead>
              <TableHead>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-full justify-start pl-[0px]">
                      Connectivity
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {["Connected", "Disconnected"].map((status) => (
                      <DropdownMenuCheckboxItem
                        key={status}
                        checked={filters.connectivity.includes(status)}
                        onCheckedChange={(checked) => {
                          setFilters({
                            ...filters,
                            connectivity: checked
                              ? [...filters.connectivity, status]
                              : filters.connectivity.filter((s) => s !== status),
                          })
                        }}
                      >
                        {status}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableHead>
              <TableHead>CMEMS</TableHead>
              <TableHead>CMEMS</TableHead>
              <TableHead>Activities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getCurrentPagePatients().map((patient) => (
              <TableRow key={patient.id} className="h-[60px] relative">
                <div className={`absolute left-0 top-0 bottom-0 w-[5px] ${getPriorityColor(patient.priority)} mt-[6px]  mb-[6px] rounded-tr-[6px] rounded-br-[6px]`} />
                <TableCell>
                  <Checkbox 
                    className="ml-[5px]"
                    checked={selectedPatients.includes(patient.id)}
                    onCheckedChange={() => togglePatient(patient.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-muted-foreground">{patient.id}</div>
                </TableCell>
                <TableCell>{patient.transmissionDate}</TableCell>
                <TableCell>{patient.deviceType}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      patient.connectivity === "Connected"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {patient.connectivity}
                  </span>
                </TableCell>
                <TableCell>
                  {patient.cmems1 === "New Data" ? (
                    <Link href="#" className="text-blue-600 hover:underline">
                      New Data
                    </Link>
                  ) : (
                    patient.cmems1
                  )}
                </TableCell>
                <TableCell>
                  {patient.cmems2 === "New Data" ? (
                    <Link href="#" className="text-blue-600 hover:underline">
                      New Data
                    </Link>
                  ) : (
                    patient.cmems2
                  )}
                </TableCell>
                <TableCell>{patient.activities}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4 border-b border-l border-r mt-0 pl-3 pr-3" style={{ marginTop: 0 }}>
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
  )
}