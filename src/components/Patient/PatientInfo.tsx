/*eslint-disable*/
"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronDown, FileText, Battery, Signal } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import ClinicalInfo from "./Clinicalinfo"
import Summary from "./Summary"
import CmemsHistory from "./CmemsHitory"
import SymptomsHistory from "./SymptomsHistory"
import PatientInfoHeader from "./PatientInfoHeader"
import React from "react"
import { ProgressBars } from "./ProgressBars"
import TransmissionSummary from "./TransmissionSummary"
import { useRecoilState } from "recoil"
import { embeddedAnalyticsState } from "../../state/atoms"
import  ActionPlanTable  from "./ActionPlan"
import TransmissionHistory from "./TransmissionHistory"

export default function PatientInfo({selectedPatient, defaultTab, hidePatientInfo, addPixelsForBiggerScreens, heightFromSummary, isCmemsOrCieds, isDashboard}: 
    {selectedPatient: any, hidePatientInfo: boolean, addPixelsForBiggerScreens: number, heightFromSummary?: number, isCmemsOrCieds?: boolean, defaultTab?: string, isDashboard?: boolean}) {
  const [embeddedAnalytics, setEmbeddedAnalytics] = useRecoilState(embeddedAnalyticsState);
  const [pb, setPb] = React.useState(true)
  return (
      <div>
        <PatientInfoHeader hidePatientInfo={hidePatientInfo} selectedPatient={selectedPatient} />
      {/* <div className="flex gap-4 mb-8">
        <Card className="flex-1 pl-6 pr-6 pb-[13.5px] pt-[13.5px] w-[60%] h-[115px]">
          <div className="grid gap-y-2 divide-x" style={{ gridTemplateColumns: '28% 32% 32% 8%' }}>

          <div className="space-y-1.5">
            <div className="flex gap-2">
              <span className="text-gray-500 ">MRN:</span>
              <span>4885478</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ">Gender:</span>
              <span>Male</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ">DOB:</span>
              <span>Jun 12, 1961</span>
            </div>
          </div>

          <div className="space-y-2 px-4">
            <div className="flex gap-2">
              <span className="text-gray-500 ">Phone:</span>
              <span>(858) 488-8524</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ">Ep Phy:</span>
              <span>Dr. John doe</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ">Status:</span>
              <span>Active</span>
            </div>
          </div>

          <div className="space-y-2 px-4">
          <div className="flex gap-2">
              <span className="text-gray-500 ">Active:</span>
              <span>Jun 12, 2000</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ">CMEMS Patient:</span>
              <div className="flex items-center gap-2">
                <span>Yes</span>
                <FileText className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ">CIED Patient:</span>
              <span>Yes</span>
            </div>
          </div>

          <div className="flex justify-center items-center space-y-2 pl-2">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77588 3.49998H5.57588C3.89572 3.49998 3.05564 3.49998 2.41391 3.82696C1.84942 4.11458 1.39048 4.57353 1.10286 5.13801C0.775879 5.77975 0.775879 6.61983 0.775879 8.29998V16.7C0.775879 18.3801 0.775879 19.2202 1.10286 19.862C1.39048 20.4264 1.84942 20.8854 2.41391 21.173C3.05564 21.5 3.89572 21.5 5.57588 21.5H13.9759C15.656 21.5 16.4961 21.5 17.1378 21.173C17.7023 20.8854 18.1613 20.4264 18.4489 19.862C18.7759 19.2202 18.7759 18.3801 18.7759 16.7V12.5M6.77585 15.5H8.4504C8.93958 15.5 9.18417 15.5 9.41434 15.4447C9.61842 15.3957 9.8135 15.3149 9.99245 15.2053C10.1943 15.0816 10.3672 14.9086 10.7131 14.5627L20.2759 4.99998C21.1043 4.17156 21.1043 2.82841 20.2759 1.99998C19.4475 1.17156 18.1043 1.17155 17.2759 1.99998L7.71311 11.5627C7.36721 11.9086 7.19426 12.0816 7.07057 12.2834C6.96092 12.4624 6.88011 12.6574 6.83111 12.8615C6.77585 13.0917 6.77585 13.3363 6.77585 13.8255V15.5Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          </div>
        </Card>

        <Card className="p-7 flex items-center w-[40%] h-[115px] justify-between divide-x">
        <div className="flex flex-row gap-2 justify-center h-[40px]">
          <div className="pt-1">
            <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1254 13.5L15.3477 9.5H10.0143L12.2365 5.5M28.0143 10.8333V8.16667M7.74766 17.5H17.6143C19.8545 17.5 20.9746 17.5 21.8303 17.064C22.5829 16.6805 23.1949 16.0686 23.5783 15.316C24.0143 14.4603 24.0143 13.3402 24.0143 11.1V7.9C24.0143 5.65979 24.0143 4.53969 23.5783 3.68404C23.1949 2.93139 22.5829 2.31947 21.8303 1.93597C20.9746 1.5 19.8545 1.5 17.6143 1.5H7.74766C5.50745 1.5 4.38734 1.5 3.53169 1.93597C2.77905 2.31947 2.16712 2.93139 1.78363 3.68404C1.34766 4.53969 1.34766 5.65979 1.34766 7.9V11.1C1.34766 13.3402 1.34766 14.4603 1.78363 15.316C2.16712 16.0686 2.77905 16.6805 3.53169 17.064C4.38734 17.5 5.50745 17.5 7.74766 17.5Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Battery Status:</span>
            </div>
            <span className="mt-1">OK</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center pl-5 h-[40px]">
          <div className="pt-1">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51436 9.35205C5.83517 8.70238 8.81071 11.6789 8.16198 15.9997M1.51436 5.1982C8.12917 4.54854 12.9656 9.38496 12.3159 15.9998M1.51436 1.04343C10.4241 0.3947 17.1195 7.09013 16.4708 15.9999M3.18083 16C2.26054 16 1.51416 15.2536 1.51416 14.3333C1.51416 13.413 2.26054 12.6667 3.18083 12.6667C4.10111 12.6667 4.84749 13.413 4.84749 14.3333C4.84749 15.2536 4.10111 16 3.18083 16Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
            <span className="text-gray-500">Enroll Date:</span>
            </div>
            <span className="mt-1">Jun 12, 2000</span>
          </div>
          </div>
          <div className="h-[40px] pl-5">
          <Button className="bg-blue-600 hover:bg-blue-700">Notify Patient</Button>
          </div>
        </Card>
      </div> */}

      <Tabs defaultValue={defaultTab ? defaultTab : "dynamic"} className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="summary"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Summary
          </TabsTrigger>
          <TabsTrigger
            value="transmission"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Transmission History
          </TabsTrigger>
          <TabsTrigger
            value="cmems"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Hemodynamics
          </TabsTrigger>
          <TabsTrigger
            value="clinical"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Clinical Info
            <Badge className="ml-2 bg-blue-100 text-blue-600 hover:bg-blue-100" style={{ borderRadius: '5px' }}>
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="symptoms"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Symptoms History
            <Badge className="ml-2 bg-blue-100 text-blue-600 hover:bg-blue-100">
              4
            </Badge>
          </TabsTrigger>

          <TabsTrigger
            value="actionplan"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            Action Plan
          </TabsTrigger>

          <TabsTrigger
            value="dynamic"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
          >
            22/11/2024 - Transmission Summary
          </TabsTrigger>
        </TabsList>
        <div
          className="overflow-y-auto pr-3"
          style={{
            height: isDashboard
              ? hidePatientInfo ? embeddedAnalytics ? "calc(74vh - 113px)" : "calc(82vh - 113px)" : embeddedAnalytics ? "calc(74vh - 242px)" : "calc(82vh - 242px)" 
              : `${460 + addPixelsForBiggerScreens + (hidePatientInfo ? 129 : 0) + (isCmemsOrCieds ? -144 : 0)}px`,
          }}
        >
        <TabsContent value="transmission" className="mt-6">
          <>
          <div className="flex justify-center items-center">
          <div className="w-full max-w-[1600px]">
      <div className="flex items-center justify-center">
        <Button onClick={()=>setPb(!pb)} variant="ghost" size="icon" className="ml-1 h-5 w-10 p-0 m-0">
          <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${pb ? 'rotate-180' : 'rotate-0'}`} />
        </Button>            
      </div>
      <div className="flex items-center justify-center">
      {pb ? <ProgressBars />:<></>}
      </div>
      </div>
        </div>
          {/* <div className="mt-6 border rounded-sm">
          <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className=" text-center w-[21%]">TSM Date</TableHead>
                <TableHead className="w-[21%] text-center">Type</TableHead>
                <TableHead className="w-[21%] text-center">Alert</TableHead>
                <TableHead className="w-[21%] text-center">Status</TableHead>
                <TableHead className="w-[16%] text-center">Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(4)].map((_, i) => (
                <TableRow key={i} className="h-[45px]">
                  <TableCell className=" text-center">1{5+i}/11/2024 0{i*2}:{i+3}0</TableCell>
                  <TableCell className=" text-center">AT/AF</TableCell>
                  <TableCell className=" text-center">
                    <div className="flex justify-center">
                    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
        style={{color: "#357ABD"}}
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg> 
                    </div>
                  </TableCell>
                  <TableCell className=" text-center">
                    <Badge
                      variant="outline"
                      className={
                        i % 2 === 0
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    >
                      {i % 2 === 0 ? "Connected" : "Disconnected"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                    <FileText className="h-5 w-5 text-gray-500" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between items-center px-5 py-2 border-t">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <span className="text-sm text-gray-500">Page 1 of 10</span>
            <Button variant="outline">Next</Button>
          </div>
          </div> */}
          <TransmissionHistory />

          </>
        </TabsContent>
        <TabsContent value="clinical" className='mt-6'>
          <ClinicalInfo />
        </TabsContent>
        <TabsContent value="summary" className='mt-6'>
          <Summary />
        </TabsContent>
        <TabsContent value="cmems" className='mt-6'>
          <CmemsHistory />
        </TabsContent>
        <TabsContent value="symptoms" className='mt-6'>
          <SymptomsHistory />
        </TabsContent>
        <TabsContent value="actionplan" className='mt-6'>
         <ActionPlanTable />
        </TabsContent>
        <TabsContent value="dynamic" className='mt-6'>
          <TransmissionSummary selectedPatient={selectedPatient} />
        </TabsContent>
        </div>
      </Tabs>
      </div>
  )
}