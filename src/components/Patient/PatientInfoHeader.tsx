import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Battery, Signal, ExternalLink, FileText } from 'lucide-react'
import React from "react"

export default function PatientInfoHeader({hidePatientInfo, selectedPatient}) {
  return ( hidePatientInfo ? <></> :
    <div className="px-4 pb-6 pt-4 border-t">
 <div className="grid gap-y-2 divide-x" style={{ gridTemplateColumns: '16% 16% 16% 21% 24% 7%' }}>

<div className="space-y-1.5">
  <div className="flex gap-2">
    <span>MRN:</span>
    <span className="text-gray-500">{selectedPatient?.id || selectedPatient?.mrn}</span>
  </div>
  <div className="flex gap-2">
    <span>Gender:</span>
    <span className="text-gray-500">Male</span>
  </div>
  <div className="flex gap-2">
    <span>DOB:</span>
    <span className="text-gray-500">Jun 12, 1961</span>
  </div>
</div>

<div className="space-y-2 px-4">
  <div className="flex gap-2">
    <span>Phone:</span>
    <span className="text-gray-500">(858) 488-8524</span>
  </div>
  <div className="flex gap-2">
    <span>Ep Phy:</span>
    <span className="text-gray-500">Dr. John doe</span>
  </div>
  <div className="flex gap-2">
    <span>CMEMS/CIED Patient</span>
  </div>
</div>

<div className="space-y-2 px-4">
<div className="gap-2">
    <div >Reason For Monitoring:</div>
    <div className="text-gray-500 text-center">Post Ablation</div>
  </div>
  <div className="flex gap-2">
    <span>Ejection Fraction:</span>
    <span className="text-gray-500">40%</span>
  </div>
</div>
<div className="flex items-center">
<div className="gap-2 justify-center pl-4">
    <div className="flex flex-row items-center mb-4">
          <div className="mr-2">
            <svg width="30" height="16" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1254 13.5L15.3477 9.5H10.0143L12.2365 5.5M28.0143 10.8333V8.16667M7.74766 17.5H17.6143C19.8545 17.5 20.9746 17.5 21.8303 17.064C22.5829 16.6805 23.1949 16.0686 23.5783 15.316C24.0143 14.4603 24.0143 13.3402 24.0143 11.1V7.9C24.0143 5.65979 24.0143 4.53969 23.5783 3.68404C23.1949 2.93139 22.5829 2.31947 21.8303 1.93597C20.9746 1.5 19.8545 1.5 17.6143 1.5H7.74766C5.50745 1.5 4.38734 1.5 3.53169 1.93597C2.77905 2.31947 2.16712 2.93139 1.78363 3.68404C1.34766 4.53969 1.34766 5.65979 1.34766 7.9V11.1C1.34766 13.3402 1.34766 14.4603 1.78363 15.316C2.16712 16.0686 2.77905 16.6805 3.53169 17.064C4.38734 17.5 5.50745 17.5 7.74766 17.5Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Battery Status:</span>
            <span className="text-gray-500">OK</span>
            </div>
            </div>
            <div className="flex flex-row items-center">

            <div className="mr-2 ml-1">
            <svg width="18" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51436 9.35205C5.83517 8.70238 8.81071 11.6789 8.16198 15.9997M1.51436 5.1982C8.12917 4.54854 12.9656 9.38496 12.3159 15.9998M1.51436 1.04343C10.4241 0.3947 17.1195 7.09013 16.4708 15.9999M3.18083 16C2.26054 16 1.51416 15.2536 1.51416 14.3333C1.51416 13.413 2.26054 12.6667 3.18083 12.6667C4.10111 12.6667 4.84749 13.413 4.84749 14.3333C4.84749 15.2536 4.10111 16 3.18083 16Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="ml-2 mr-2">Enroll Date:</span>
            <span className="text-gray-500">Oct 12, 2024</span>
            </div>
            </div>
            </div>
            </div>

            <div className="flex items-center">
<div className="gap-2 justify-center pl-4">
    <div className="flex flex-row items-center mb-4">
          <div className="mr-2">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.60938 11.0458C4.47093 11.2529 6.20663 12.0872 7.53106 13.4116C8.8555 14.7361 9.68983 16.4718 9.89687 18.3333M2.60938 14.7583C3.49019 14.938 4.29874 15.3727 4.93439 16.0083C5.57004 16.644 6.00474 17.4525 6.18437 18.3333M2.60938 18.3333H2.61854M13.6094 19.25H16.5427C18.0829 19.25 18.8529 19.25 19.4412 18.9503C19.9586 18.6866 20.3793 18.2659 20.643 17.7485C20.9427 17.1602 20.9427 16.3901 20.9427 14.85V7.15C20.9427 5.60986 20.9427 4.83978 20.643 4.25153C20.3793 3.73408 19.9586 3.31338 19.4412 3.04973C18.8529 2.75 18.0829 2.75 16.5427 2.75H7.00937C5.46923 2.75 4.69916 2.75 4.1109 3.04973C3.59346 3.31338 3.17276 3.73408 2.90911 4.25153C2.60938 4.83978 2.60938 5.60986 2.60938 7.15V7.33333" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Connection Status:</span>
            <span className="text-gray-500">Connected</span>
            </div>
            </div>
            <Button className="border rounded-md w-full" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
            Connection History
            </Button>
            </div>
            </div>

<div className="flex justify-center items-center space-y-2 pl-2">
  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.77588 3.49998H5.57588C3.89572 3.49998 3.05564 3.49998 2.41391 3.82696C1.84942 4.11458 1.39048 4.57353 1.10286 5.13801C0.775879 5.77975 0.775879 6.61983 0.775879 8.29998V16.7C0.775879 18.3801 0.775879 19.2202 1.10286 19.862C1.39048 20.4264 1.84942 20.8854 2.41391 21.173C3.05564 21.5 3.89572 21.5 5.57588 21.5H13.9759C15.656 21.5 16.4961 21.5 17.1378 21.173C17.7023 20.8854 18.1613 20.4264 18.4489 19.862C18.7759 19.2202 18.7759 18.3801 18.7759 16.7V12.5M6.77585 15.5H8.4504C8.93958 15.5 9.18417 15.5 9.41434 15.4447C9.61842 15.3957 9.8135 15.3149 9.99245 15.2053C10.1943 15.0816 10.3672 14.9086 10.7131 14.5627L20.2759 4.99998C21.1043 4.17156 21.1043 2.82841 20.2759 1.99998C19.4475 1.17156 18.1043 1.17155 17.2759 1.99998L7.71311 11.5627C7.36721 11.9086 7.19426 12.0816 7.07057 12.2834C6.96092 12.4624 6.88011 12.6574 6.83111 12.8615C6.77585 13.0917 6.77585 13.3363 6.77585 13.8255V15.5Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>

</div>
      
      {/* <div className="grid grid-cols-6 gap-y-4 text-sm mb-4">
        <div>
          <span className="text-gray-500">MRN: </span>
          <span>{mrn}</span>
        </div>
        <div>
          <span className="text-gray-500">Phone: </span>
          <span>{phone}</span>
        </div>
        <div>
          <span className="text-gray-500">Active: </span>
          <span>{activeDate}</span>
        </div>
        <div>
          <span className="text-gray-500">Gender: </span>
          <span>{gender}</span>
        </div>
        <div>
          <span className="text-gray-500">Ep Phy: </span>
          <span>{doctor}</span>
        </div>
        <div>
          <span className="text-gray-500">CMEMS Patient: </span>
          <span>{cmems ? "Yes" : "No"}</span>
        </div>
        <div>
          <span className="text-gray-500">DOB: </span>
          <span>{dob}</span>
        </div>
        <div>
          <span className="text-gray-500">Status: </span>
          <span>{status}</span>
        </div>
        <div>
          <span className="text-gray-500">CIED Patient: </span>
          <span>{cied ? "Yes" : "No"}</span>
        </div>
      </div> */}

      {/* <div className="flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Battery className="h-4 w-4" />
            <span className="text-gray-500">Battery Status:</span>
            <span>{batteryStatus}</span>
          </div>
          <div className="flex items-center gap-2">
            <Signal className="h-4 w-4" />
            <span className="text-gray-500">Connection Status:</span>
            <span>{connectionStatus}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-gray-300"
            onClick={onHistory}
          >
            Connection History
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div> */}
    </div>
  )
}