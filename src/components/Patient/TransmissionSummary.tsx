import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import React from "react"
import { ProgressBars } from "./ProgressBars"
import EpisodesTable from "./EpisodesTable"

export default function TransmissionSummary() {
  return (
    <div className="">
        <ProgressBars />

      <div className="flex justify-between items-center mb-6 mt-6 w-full">
        <Tabs defaultValue="summary" className="w-full">
        <div className="flex justify-between items-center">
        <TabsList className="border-b w-[75%] justify-start rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger value="summary" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Summary
            </TabsTrigger>
            <TabsTrigger value="heart-failure" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Heart Failure
            </TabsTrigger>
            <TabsTrigger value="heart-rhythm" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Heart Rhythm
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
          <Button className="border rounded-md w-full" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
          Add Note
        </Button>
          <Button className="border rounded-md w-full" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
          Process
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 px-7">
        Sign Off
        </Button>
        </div>
        </div>

        <TabsContent value="summary" className="mt-6">
      <div className="grid grid-cols-3 gap-6">
        <Card style={{backgroundColor: '#FAFCFF'}}>
          <CardHeader>
            <CardTitle className="text-blue-600 text-lg font-medium">CardioMEMS</CardTitle>
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
                <span className="text-sm text-gray-500">(Baseline: 28 mmHg)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>Pressure trend:</span>
                <span className="text-gray-600">+25% over the past 7 days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card style={{backgroundColor: '#FFFCFE'}}>
          <CardHeader>
            <CardTitle className="text-rose-600 text-lg font-medium">CIEDs (CRT-D/ICD)</CardTitle>
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
                <span className="text-sm text-gray-500">(Baseline: 65 ohms)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>Respiratory Rate:</span>
                <span className="text-gray-600">Elevated</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>Average RR:</span>
                <span className="text-gray-600">22 breaths/min</span>
                <span className="text-sm text-gray-500">(Baseline: 18 breaths/min)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>Resp. Trend:</span>
                <span className="text-gray-600">+22% over the past 10 days</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>HRV:</span>
                <span className="text-gray-600">Reduced</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>Current:</span>
                <span className="text-gray-600">18 ms</span>
                <span className="text-sm text-gray-500">(Baseline: 25 ms)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card style={{backgroundColor: '#F7FDFF'}}>
          <CardHeader>
            <CardTitle className="text-cyan-600 text-lg font-medium">Symptom Data (Patient-Reported)</CardTitle>
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
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Failure Index</div>
                <div className="w-full"></div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Thoracic Impedance</div>
                <div className="w-full"></div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Resp. Rate</div>
                <div className="w-full"></div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Rate Variability</div>
                <div className="w-full"></div>
            </div>
        </TabsContent>

        <TabsContent value="heart-rhythm" className="mt-6">
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Atrial Burden</div>
                <div className="w-full"></div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>RV Rate During AT/AF</div>
                <div className="w-full"></div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Episodes Summary</div>
                <div className="w-full mt-3 mb-4">
                    <EpisodesTable />
                </div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md text-center" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Pacing</div>
                <div className="w-full"></div>
            </div>
            <div>
                <div className="text-lg py-1 pl-8 rounded-md text-center" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Leads</div>
                <div className="w-full"></div>
            </div>
        </TabsContent>
        </Tabs>
      </div>


    </div>
  )
}