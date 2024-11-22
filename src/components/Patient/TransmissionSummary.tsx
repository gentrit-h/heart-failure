import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import React from "react"
import { ProgressBars } from "./ProgressBars"
import EpisodesTable from "./EpisodesTable"
import { ChevronDown, Heart } from "lucide-react"
import HeartFailure from "./HeartFailure"
import leads from "./Leads.png"
import atBurden from "./atBurden.png"
import vtRate from "./vtRate.png"
import pacing from "./pacing.png"
import image1 from '../../assets/crops_c6300b799af79e2122306c3d78ce45d8b9297121c45010b7bdf027ee527d3069.svg'
import image2 from '../../assets/crops_13c8b7eda7575bd80d94a293b6c0149ca9905505d265269cb93bcf720ce9b45a.svg'
import image3 from '../../assets/crops_773aa563f279edfa109a74f548f730b2659a2d16e8b25cee421555465b7faf00.svg'
import image4 from '../../assets/crops_83996df93dea66e178b7d84029e94411330c2241d0451042965c5d9dd09197ea.svg'

export default function TransmissionSummary({selectedPatient}) {
  const [pb, setPb] = React.useState(true)
  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="w-full max-w-[1600px]">
          <div className="flex items-center justify-center">
            <Button
              onClick={() => setPb(!pb)}
              variant="ghost"
              size="icon"
              className="ml-1 h-5 w-10 p-0 m-0"
            >
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                  pb ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            {pb ? <ProgressBars /> : <></>}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6 mt-6 w-full">
        <Tabs defaultValue="summary" className="w-full">
          <div className="flex justify-between items-center">
            <TabsList className="border-b w-[75%] justify-start rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="summary"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                Summary
              </TabsTrigger>
              <TabsTrigger
                value="heart-failure"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                Heart Failure
              </TabsTrigger>
              <TabsTrigger
                value="heart-rhythm"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                Heart Rhythm
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                className="border rounded-md w-full"
                style={{
                  background: "#F1F5FE",
                  borderColor: "#004DE1",
                  color: "#004DE1",
                  fontWeight: 500,
                }}
              >
                Add Note
              </Button>
              <Button
                className="border rounded-md w-full"
                style={{
                  background: "#F1F5FE",
                  borderColor: "#004DE1",
                  color: "#004DE1",
                  fontWeight: 500,
                }}
              >
                Process
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 px-7">
                Sign Off
              </Button>
            </div>
          </div>

          <TabsContent value="summary" className="mt-6">
            <div className="grid grid-cols-3 gap-6">
              <Card style={{ backgroundColor: "#FAFCFF" }}>
                <CardHeader>
                  <CardTitle className="text-blue-600 text-lg font-medium">
                    CardioMEMS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span>PAP:</span>
                      <span className="text-gray-600">Elevated</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Mean PAP:</span>
                      <span className="text-gray-600">35 mmHg</span>
                      <span className="text-sm text-gray-500">
                        (Baseline: 28 mmHg)
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Pressure trend:</span>
                      <span className="text-gray-600">
                        +25% over the past 7 days
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: "#FFFCFE" }}>
                <CardHeader>
                  <CardTitle className="text-rose-600 text-lg font-medium">
                    CIEDs (CRT-D/ICD)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span>Intrathoracic Impedance:</span>
                      <span className="text-gray-600">Decreased</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Current:</span>
                      <span className="text-gray-600">56 ohms</span>
                      <span className="text-sm text-gray-500">
                        (Baseline: 65 ohms)
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Respiratory Rate:</span>
                      <span className="text-gray-600">Elevated</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Average RR:</span>
                      <span className="text-gray-600">22 breaths/min</span>
                      <span className="text-sm text-gray-500">
                        (Baseline: 18 breaths/min)
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Resp. Trend:</span>
                      <span className="text-gray-600">
                        +22% over the past 10 days
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>HRV:</span>
                      <span className="text-gray-600">Reduced</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Current:</span>
                      <span className="text-gray-600">18 ms</span>
                      <span className="text-sm text-gray-500">
                        (Baseline: 25 ms)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: "#F7FDFF" }}>
                <CardHeader>
                  <CardTitle className="text-cyan-600 text-lg font-medium">
                    Symptom Data (Patient-Reported)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span>Shortness of Breath:</span>
                      <span className="text-gray-600">Gr.3</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Palpitations:</span>
                      <span className="text-gray-600">Gr.3</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Swelling:</span>
                      <span className="text-gray-600">Gr.3</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span>Weight Gain:</span>
                      <span className="text-gray-600">Gr. 2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="heart-failure" className="mt-6">
            <div className="flex justify-center">
              <div className="w-[65%] min-w-[1250px]">
                <HeartFailure selectedPatient={selectedPatient} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="heart-rhythm" className="mt-6">
            <div className="flex justify-center">
              <div className="w-[65%] min-w-[1250px]">
                <div>
                  <div
                    className="text-lg py-1 pl-8 rounded-md"
                    style={{
                      backgroundColor: "#E4ECFF",
                      color: "#004DE1",
                      fontWeight: 700,
                    }}
                  >
                    Atrial Burden
                  </div>
                  {selectedPatient?.patientName == "Emma Wilson"&&<div className="flex justify-center">
                    <img src={image1} className="w-[900px]" />
                  </div>}
                  {selectedPatient?.patientName == "Oliver Johnson"&&<div className="flex justify-center">
                    <img src={image3} className="w-[900px]" />
                  </div>}
                  {selectedPatient?.patientName != "Emma Wilson"&&selectedPatient?.patientName != "Oliver Johnson"&&<div className="flex justify-center">
                    <img src={atBurden} className="w-[900px]" />
                  </div>}
                </div>
                <div>
                  <div
                    className="text-lg py-1 pl-8 rounded-md"
                    style={{
                      backgroundColor: "#E4ECFF",
                      color: "#004DE1",
                      fontWeight: 700,
                    }}
                  >
                    RV Rate During AT/AF
                  </div>
                  {selectedPatient?.patientName == "Emma Wilson"&&<div className="flex justify-center">
                    <img src={image2} className="w-[900px]" />
                  </div>}
                  {selectedPatient?.patientName == "Oliver Johnson"&&<div className="flex justify-center">
                    <img src={image4} className="w-[900px]" />
                  </div>}
                  {selectedPatient?.patientName != "Emma Wilson"&&selectedPatient?.patientName != "Oliver Johnson"&&<div className="flex justify-center">
                    <img src={vtRate} className="w-[900px]" />
                  </div>}
                </div>
                {selectedPatient?.patientName != "Emma Wilson" && (
                  <div>
                    <div
                      className="text-lg py-1 pl-8 rounded-md"
                      style={{
                        backgroundColor: "#E4ECFF",
                        color: "#004DE1",
                        fontWeight: 700,
                      }}
                    >
                      Episodes Summary
                    </div>
                    <div className="w-full mt-3 mb-4">
                      <EpisodesTable />
                    </div>
                  </div>
                )}
                <div className="flex">
                  <div style={{ flex: "1", padding: "0.5rem" }}>
                    <div
                      className="text-lg py-1 pl-8 rounded-md text-center pb-2"
                      style={{
                        backgroundColor: "#E4ECFF",
                        color: "#004DE1",
                        fontWeight: 700,
                      }}
                    >
                      Pacing
                    </div>
                    <div className="flex justify-center">
                      <img src={pacing} />
                    </div>
                  </div>
                  <div style={{ flex: "1", padding: "0.5rem" }}>
                    <div
                      className="text-lg py-1 pl-8 rounded-md text-center pb-2"
                      style={{
                        backgroundColor: "#E4ECFF",
                        color: "#004DE1",
                        fontWeight: 700,
                      }}
                    >
                      Leads
                    </div>
                    <div className="flex justify-center">
                      <img src={leads} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}