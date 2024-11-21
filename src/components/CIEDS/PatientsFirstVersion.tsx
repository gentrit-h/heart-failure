/* eslint-disable */
"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Clock, FileText, Battery, Wifi, ArrowUpRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface Patient {
  id: string
  name: string
  subId: string
  age: number
  mrn: string
  gender: string
  dob: string
  epPhy: string
  phone: string
  status: string
  cmems: string
  cied: string
  batteryStatus: string
  enrollDate: string
}

export default function Cieds() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

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
      hasNote: false
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
      hasNote: true
    },
    // Add more sample data to have at least 20 patients for pagination demonstration
    ...[...Array(18)].map((_, index) => ({
      id: `12439${8596 + index}`,
      name: `Patient ${index + 3}`,
      transmissionDate: `${15 - (index % 7)}/10/2024 ${10 + index}:${30 + index}`,
      deviceType: index % 2 === 0 ? "PPM" : "PPM/SRTD",
      manufacturer: "MDT",
      connectivity: index % 3 === 0 ? "Connected" : "Disconnected",
      monitoring: "Activities for the last hour",
      communicationHistory: true,
      hasNote: true
    }))
  ]

  if (selectedPatient) {
    return (
      <div className="flex h-[100%]">
        {/* Left sidebar */}
        <div className="w-[240px] border bg-background">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <Checkbox />
              <span className="text-sm font-medium">Patients</span>
            </div>
          </div>
          <div className="divide-y">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`p-4 cursor-pointer hover:bg-muted ${
                  selectedPatient.id === patient.id ? "bg-muted" : ""
                }`}
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <div>
                    <div className="font-medium">{patient.name}</div>
                    <div className="text-sm text-muted-foreground">{patient.subId}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">
                {selectedPatient.name} - Age {selectedPatient.age}
              </h1>
              <Button variant="ghost" size="icon" onClick={() => setSelectedPatient(null)}>
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>

            {/* Patient details grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">MRN:</div>
                <div>{selectedPatient.mrn}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Phone:</div>
                <div>{selectedPatient.phone}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Active:</div>
                <div>{selectedPatient.status}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Gender:</div>
                <div>{selectedPatient.gender}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Ep Phy:</div>
                <div>{selectedPatient.epPhy}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">CMEMS Patient:</div>
                <div>{selectedPatient.cmems}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">DOB:</div>
                <div>{selectedPatient.dob}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Status:</div>
                <div>{selectedPatient.status}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">CIED Patient:</div>
                <div>{selectedPatient.cied}</div>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between mb-6 bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Battery className="h-4 w-4" />
                <span className="text-sm">Battery Status: {selectedPatient.batteryStatus}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4" />
                <span className="text-sm">Enroll Date: {selectedPatient.enrollDate}</span>
              </div>
              <Button>Contact Patient</Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="summary">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="transmission">Transmission History</TabsTrigger>
                <TabsTrigger value="cmems">CMEMS History</TabsTrigger>
                <TabsTrigger value="clinical">
                  Clinical Info
                  <Badge variant="secondary" className="ml-2">2</Badge>
                </TabsTrigger>
                <TabsTrigger value="symptoms">
                  Symptoms History
                  <Badge variant="secondary" className="ml-2">4</Badge>
                </TabsTrigger>
                <TabsTrigger value="dynamic">*Dynamic Tabs (CMEMS Summary + CIED Summary)*</TabsTrigger>
              </TabsList>
              <TabsContent value="summary">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Last Measurement</TableHead>
                      <TableHead>Goal</TableHead>
                      <TableHead>Last Systolic PAP</TableHead>
                      <TableHead>Last Diastolic PAP</TableHead>
                      <TableHead>Last Mean PAP</TableHead>
                      <TableHead>Pulse Pressure</TableHead>
                      <TableHead>PA Heart Rate</TableHead>
                      <TableHead>Waveform</TableHead>
                      <TableHead>Note</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>dd/mm/yyyy</TableCell>
                      <TableCell>15 mmHg</TableCell>
                      <TableCell>25 mmHg</TableCell>
                      <TableCell>30 mmHg</TableCell>
                      <TableCell>19 mmHg</TableCell>
                      <TableCell>5 mmHg</TableCell>
                      <TableCell>80 bpm</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Original table view */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
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
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} className="cursor-pointer" onClick={() => setSelectedPatient(patient)}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{patient.name}</span>
                    <span className="text-sm text-muted-foreground">{patient.subId}</span>
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
      <div className="flex items-center justify-between px-2 py-4">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">Page 1 of 10</span>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )

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
            <TableHead>Last Transmission</TableHead>
            <TableHead>Last Connection</TableHead>
            <TableHead>Monitoring</TableHead>
            <TableHead>Communication History</TableHead>
            <TableHead>Note</TableHead>
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
              <TableCell>{patient.lastTransmission}</TableCell>
              <TableCell>{patient.lastConnection}</TableCell>
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