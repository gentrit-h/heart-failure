/**
 * This code was generated by Builder.io
 */
import React, { useEffect, useState } from "react";
import ActivePatients from "./ActivePatients";
import TotalPatients from "./TotalPatients";
import PatientsTable from "./PatientsTable";
import MainDashboard from "./DashBoardCards.tsx/Dashboard";
import { useRecoilState } from "recoil";
import { embeddedAnalyticsState, openedCardState } from "../../state/atoms";
import LowBatteryTable from "./DashBoardCards.tsx/analytics/LowBatteryTable";
import Component from "./DashBoardCards.tsx/embeddedAnalytics/EmbeddedAnalytics";
import PatientInfo from "../Patient/PatientInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Battery, Signal, ExternalLink, FileText, X } from 'lucide-react'
import { Button } from "@/components/ui/button"




interface MainContentProps {}

const Dashboard: React.FC<MainContentProps> = () => {
  const [openedCard, setOpenedCard] = useRecoilState(openedCardState);
  const [embeddedAnalytics, setEmbeddedAnalytics]=useRecoilState(embeddedAnalyticsState)
  const [hidePatientInfo, setHidePatientInfo] = useState(false);
  console.log("embeddedAnalyticsState",embeddedAnalyticsState)

  useEffect(() => {
    const helper = sessionStorage.getItem("openedCard");
    if (helper) {
      setOpenedCard(helper);
    }
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {embeddedAnalytics&&
      <div style={{paddingBottom:'1vh'}}>
        <Component></Component>
      </div>}
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          ...(openedCard === "all" ? { minWidth: "100%" } : {}),
        }}
      >
        <MainDashboard />
        {(openedCard == "Analytics" ||
          sessionStorage.getItem("openedCard") == "Analytics") && (
          <LowBatteryTable />
        )}
        {(openedCard == "Alerts" ||
          sessionStorage.getItem("openedCard") == "Alerts") && (
            <div style={{position:'relative'}}>
 <div className="w-full"
 style={{width:'73.6vw', position:'absolute', right:0}}>
      {/* Right-side div for patient data */}
      <div style={{overflowX: 'auto', height: '100%'}}>
    <div className=" mx-auto px-6 pt-4 pb-3" style={{ minWidth: '1350px' }}>
    <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="Patient avatar" src={'./er.png'} />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">{'Ermal Ismajli'}</span>
              <Button onClick={()=>setHidePatientInfo(!hidePatientInfo)} variant="ghost" size="icon" className="ml-1 h-10 w-10">
                <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${hidePatientInfo ? 'rotate-180' : 'rotate-0'}`} />
              </Button>            </div>
            <div className="text-sm text-gray-500">Age 21</div>
          </div>
        </div>
        <div className=" pt-1 flex items-center justify-center">
        <Button className="border rounded-md w-full mr-3" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
        Action Plan
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 px-7">
          Notify Patient
        </Button>
        <span>
        <Button onClick={() => {
          setOpenedCard("all");
          sessionStorage.setItem("openedCard", "all");
        }} variant="ghost" size="icon" className="ml-4 h-10 w-10">
         <X />
        </Button>
        </span>

      </div>

      </div>
      <PatientInfo isDashboard={true} selectedPatient={'Ermal Ismajli'} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={0} />
      </div>
      </div>
      {/* Add patient details content here */}
    </div>
          </div>
        )}
        {(openedCard == "Scheduled" ||
          sessionStorage.getItem("openedCard") == "Scheduled") && (
            <div style={{position:'relative'}}>
 <div className="w-full"
 style={{width:'73.6vw', position:'absolute', right:0}}>
      {/* Right-side div for patient data */}
      <div style={{overflowX: 'auto', height: '100%'}}>
    <div className=" mx-auto px-6 pt-4 pb-3" style={{ minWidth: '1350px' }}>
    <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="Patient avatar" src={'./er.png'} />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">{'Ermal Ismajli'}</span>
              <Button onClick={()=>setHidePatientInfo(!hidePatientInfo)} variant="ghost" size="icon" className="ml-1 h-10 w-10">
                <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${hidePatientInfo ? 'rotate-180' : 'rotate-0'}`} />
              </Button>            </div>
            <div className="text-sm text-gray-500">Age 21</div>
          </div>
        </div>
        <div className=" pt-1 flex items-center justify-center">
        <Button className="border rounded-md w-full mr-3" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
        Action Plan
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 px-7">
          Notify Patient
        </Button>
        <span>
        <Button onClick={() => {
          setOpenedCard("all");
          sessionStorage.setItem("openedCard", "all");
        }} variant="ghost" size="icon" className="ml-4 h-10 w-10">
         <X />
        </Button>
        </span>

      </div>

      </div>
      <PatientInfo selectedPatient={'Ermal Ismajli'} isDashboard={true} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={0} />
      </div>
      </div>
      {/* Add patient details content here */}
    </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DashboardWrapper: React.FC = () => {
  return (
      <Dashboard />
  );
};

export default DashboardWrapper;