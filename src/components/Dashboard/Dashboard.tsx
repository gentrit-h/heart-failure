/**
 * This code was generated by Builder.io
 */
import React, { useEffect, useState } from "react";
import ActivePatients from "./ActivePatients";
import TotalPatients from "./TotalPatients";
import PatientsTable from "./PatientsTable";
import MainDashboard from "./DashBoardCards.tsx/Dashboard";
import { useRecoilState } from "recoil";
import { embeddedAnalyticsState, openedCardState, selectedPatientDashboard } from "../../state/atoms";
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

  const alerts = [
    {
      patientName: "Oliver Johnson",
      scheduledDate: "01/10/24",
      mrn: "MRN123456",
      badges: [
        { text: "Has shock", variant: "destructive" },
        { text: "ATP is true", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "10 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type1"],
      manufacturer: "MDT",
    },
    {
      patientName: "Emma Wilson",
      scheduledDate: "01/07/24",
      mrn: "MRN119457",
      badges: [
        { text: "ATP is true", variant: "destructive" },
        {
          text: "5 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type3", "type2"],
      manufacturer: "BSX",
    },
    {
      patientName: "Liam Davis",
      scheduledDate: "01/08/24",
      mrn: "MRN16756",
      badges: [
        { text: "Has shock", variant: "destructive" },
        { text: "ATP is true", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "15 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type2"],
      manufacturer: "BIO",
    },
    {
      patientName: "Sophia Brown",
      scheduledDate: "01/09/24",
      mrn: "MRN676456",
      badges: [
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "15 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type1"],
      manufacturer: "STJ",
    },
    {
      patientName: "James Martinez",
      scheduledDate: "01/10/24",
      mrn: "MRN679856",
      badges: [
        { text: "Has shock", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "8 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type4", "type2"],
      manufacturer: "MDT",
    },
    {
      patientName: "Ava Taylor",
      scheduledDate: "01/11/24",
      mrn: "MRN098756",
      badges: [
        { text: "Has shock", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "12 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type2"],
      manufacturer: "BSX",
    },
    {
      patientName: "William Anderson",
      scheduledDate: "01/10/24",
      mrn: "MRN786956",
      badges: [
        { text: "Has shock", variant: "destructive" },
        { text: "ATP is true", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "10 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type2"],
      manufacturer: "BIO",
    },
    {
      patientName: "Mia Thomas",
      scheduledDate: "01/07/24",
      mrn: "MRN012456",
      badges: [
        { text: "ATP is true", variant: "destructive" },
        {
          text: "5 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type4", "type2"],
      manufacturer: "STJ",
    },
    {
      patientName: "Elijah Moore",
      scheduledDate: "01/08/24",
      mrn: "MRN975456",
      badges: [
        { text: "Has shock", variant: "destructive" },
        { text: "ATP is true", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "15 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type2"],
      manufacturer: "MDT",
    },
    {
      patientName: "Isabella Harris",
      scheduledDate: "01/09/24",
      mrn: "MRN676456",
      badges: [
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "15 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type1"],
      manufacturer: "BSX",
    },
    {
      patientName: "Henry Clark",
      scheduledDate: "01/10/24",
      mrn: "MRN1216456",
      badges: [
        { text: "Has shock", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "8 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type4"],
      manufacturer: "BIO",
    },
    {
      patientName: "Charlotte Lee",
      scheduledDate: "01/11/24",
      mrn: "MRN676456",
      badges: [
        { text: "Has shock", variant: "destructive" },
        {
          text: "Type VT - Untreated only",
          style: { backgroundColor: "rgba(255, 165, 0, 0.7)" },
        },
        {
          text: "12 Event(s)",
          style: {
            backgroundColor: "rgba(245, 245, 245, 0.7)",
            color: "black",
          },
        },
      ],
      icons: ["type2"],
      manufacturer: "STJ",
    },
  ];
  

  const patients = [
    {
      patientName: "Sophia Johnson",
      scheduledDate: "01/10/24",
      mrn: "MRN853456",
      icons: ["type1", "type6"],
      manufacturer: "MDT",
    },
    {
      patientName: "Liam Martinez",
      scheduledDate: "01/07/24",
      mrn: "MRN675421",
      icons: ["type2", "type7"],
      manufacturer: "BSX",
    },
    {
      patientName: "Emma Davis",
      scheduledDate: "01/08/24",
      mrn: "MRN324235",
      icons: ["type1", "type6"],
      manufacturer: "BIO",
    },
    {
      patientName: "Noah Brown",
      mrn: "MRN123456",
      scheduledDate: "01/09/24",
      icons: ["type2", "type7"],
      manufacturer: "STJ",
    },
    {
      patientName: "Ava Wilson",
      mrn: "MRN986765",
      scheduledDate: "01/11/24",
      icons: ["type1", "type6"],
      manufacturer: "MDT",
    },
    {
      patientName: "Oliver Taylor",
      mrn: "MRN203248",
      scheduledDate: "01/10/24",
      icons: ["type1", "type6"],
      manufacturer: "BSX",
    },
    {
      patientName: "Isabella Anderson",
      mrn: "MRN109237",
      scheduledDate: "01/07/24",
      icons: ["type2", "type7"],
      manufacturer: "BIO",
    },
    {
      patientName: "Ethan White",
      mrn: "MRN130938",
      scheduledDate: "01/08/24",
      icons: ["type1", "type6"],
      manufacturer: "STJ",
    },
    {
      patientName: "Mia Thompson",
      mrn: "MRN131238",
      scheduledDate: "01/09/24",
      icons: ["type1", "type7"],
      manufacturer: "MDT",
    },
    {
      patientName: "Lucas Harris",
      mrn: "MRN031238",
      scheduledDate: "01/11/24",
      icons: ["type1", "type6"],
      manufacturer: "BSX",
    },
    {
      patientName: "Amelia Clark",
      mrn: "MRN102398",
      scheduledDate: "01/10/24",
      icons: ["type1", "type6"],
      manufacturer: "BIO",
    },
    {
      patientName: "James Hall",
      mrn: "MRN891237",
      scheduledDate: "01/07/24",
      icons: ["type2", "type7"],
      manufacturer: "STJ",
    },
    {
      patientName: "Charlotte Young",
      mrn: "MRN131238",
      scheduledDate: "01/08/24",
      icons: ["type1", "type6"],
      manufacturer: "MDT",
    },
    {
      patientName: "Benjamin King",
      mrn: "MRN831238",
      scheduledDate: "01/09/24",
      icons: ["type1", "type7"],
      manufacturer: "BSX",
    },
    {
      patientName: "Harper Scott",
      mrn: "MRN981723",
      scheduledDate: "01/11/24",
      icons: ["type1", "type6"],
      manufacturer: "BIO",
    },
  ];

  const [selectedPatient, setSelectedPatient] = useRecoilState(selectedPatientDashboard);

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
        <MainDashboard alerts={alerts} patients={patients}/>
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
              <span className="font-semibold text-lg">{selectedPatient?.patientName}</span>
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
      <PatientInfo isDashboard={true} selectedPatient={selectedPatient} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={0} />
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
              <span className="font-semibold text-lg">{selectedPatient?.patientName}</span>
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
      <PatientInfo selectedPatient={selectedPatient} isDashboard={true} hidePatientInfo={hidePatientInfo} addPixelsForBiggerScreens={0} />
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
