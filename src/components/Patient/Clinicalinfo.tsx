import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"
  
  export default function ClinicalInfo() {
const medications = [
    {
      "name": "ARNIs",
      "meds": ["Entresto"],
      "doses": ["24/26mg"]
    },
    {
      "name": "ACEi",
      "meds": ["Enalapril", "Lisinopril", "Ramipril"],
      "doses": ["2.5mg", "2.5mg", "1.25mg"]
    },
    {
      "name": "ARBs",
      "meds": ["Losartan", "Valsartan", "Candesartan"],
      "doses": ["25mg", "40mg", "4mg"]
    },
    {
      "name": "Beta blockers",
      "meds": ["Carvedilol", "Metoprolol Succinate", "Bisoprolol"],
      "doses": ["3.125mg", "25mg", "1.25mg"]
    },
    {
      "name": "SGLT2",
      "meds": ["Dapaglifozin", "Empaglifozin"],
      "doses": ["10mg", "10mg"]
    },
    {
      "name": "Diuretics",
      "meds": ["Dapaglifozin", "Empaglifozin"],
      "doses": ["20mg", "12.5mg"]
    },
    {
      "name": "Ivabradine",
      "meds": ["Ivabradine"],
      "doses": ["5mg"]
    }
  ]
  
    const labWork = [
      {
        name: "Creatinine:",
        value: "0.74-1.35 mg/dL (65.4-119.3 μmol/L)",
      },
      {
        name: "Blood Urea Nitrogen (BUN):",
        value: "7-20 mg/dL (2.5-7.1 mmol/L)",
      },
      {
        name: "B-type Natriuretic Peptide (BNP):",
        value: "100 pg/mL",
      },
      {
        name: "Potassium (K+):",
        value: "3.5-5.0 mEq/L (3.5-5.0 mmol/L)",
      },
      {
        name: "Magnesium (Mg++):",
        value: "1.7-2.2 mg/dL (0.70-0.95 mmol/L)",
      },
      {
        name: "Troponin:",
        value: "0-14 ng/L",
      },
      {
        name: "LDH:",
        value: "125/220 U/L",
      },
    ]
  
    return (
      <div className="grid gap-6 md:grid-cols-[49%_37%_10%]">
        <Card className=''>
          <CardHeader className=" p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Medication</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <div className="h-[433px] w-full overflow-y-auto">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center"  style={{backgroundColor: "white"}}>Category</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Name</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Dose</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {medications.map((med, index) => (
                  <TableRow key={index} className="h-[60px]">
                    <TableCell className="text-center">{med.name}</TableCell>
                    <TableCell className="flex justify-center items-center">
                      <Select>
                        <SelectTrigger className="w-32 mt-2">
                          <SelectValue placeholder={med?.meds?.[0]} />
                        </SelectTrigger>
                        <SelectContent>
                        {med?.meds?.map((e) => (
                          <SelectItem value={e}>{e}</SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-center">{med?.doses?.[0]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          </CardContent>
        </Card>
  
        <Card className="h-[475px]">
        <CardHeader className="p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Lab work</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <div>
              {labWork.map((lab, index) => (
                <div key={index} className="flex border-t">
                  <span className="font-200 w-[40px] flex justify-center items-center">{index + 1}</span>
                  <div className="px-[10px] py-[8px]">
                    <div className="font-medium">{lab.name}</div>
                    <div className="text-sm text-muted-foreground">{lab.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="h-[475px]">
        <CardHeader className="p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Imaging</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <div>
              {labWork.map((lab, index) => (
                <div key={index} className="flex justify-center border-t ">
                  <div className="cursor-pointer py-[19px]">
                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 1.26953V5.40007C11.5 5.96012 11.5 6.24015 11.609 6.45406C11.7049 6.64222 11.8578 6.7952 12.046 6.89108C12.2599 7.00007 12.5399 7.00007 13.1 7.00007H17.2305M11.5 1H6.3C4.61984 1 3.77976 1 3.13803 1.32698C2.57354 1.6146 2.1146 2.07354 1.82698 2.63803C1.5 3.27976 1.5 4.11984 1.5 5.8V16.2C1.5 17.8802 1.5 18.7202 1.82698 19.362C2.1146 19.9265 2.57354 20.3854 3.13803 20.673C3.77976 21 4.61984 21 6.3 21H12.7C14.3802 21 15.2202 21 15.862 20.673C16.4265 20.3854 16.8854 19.9265 17.173 19.362C17.5 18.7202 17.5 17.8802 17.5 16.2V7L11.5 1ZM9.49726 10.8306C8.69752 9.9216 7.3639 9.67708 6.36188 10.5094C5.35986 11.3418 5.21879 12.7335 6.00568 13.7179C6.79257 14.7024 9.49726 17 9.49726 17C9.49726 17 12.2019 14.7024 12.9888 13.7179C13.7757 12.7335 13.6519 11.3331 12.6326 10.5094C11.6134 9.68584 10.297 9.9216 9.49726 10.8306Z" stroke="#004DE1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }