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
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  
  export default function ClinicalInfo() {
    const medications = [
      { category: "Beta Blockers", otherDrugs: "AAD" },
      { category: "Diuretics", otherDrugs: "MISC" },
      { category: "Entresto", otherDrugs: "ADAC" },
      { category: "ACE-E / AR-B", otherDrugs: "-" },
      { category: "SGLPT", otherDrugs: "-" },
      { category: "KT supplements", otherDrugs: "-" },
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
    ]
  
    return (
      <div className="grid gap-6 md:grid-cols-[60%_40%]">
        <Card>
          <CardHeader className="h-[44px] p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Medication</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center"  style={{backgroundColor: "white"}}>Category</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Name</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Dose</TableHead>
                  <TableHead className="text-center" style={{backgroundColor: "white"}}>Other Drugs</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications.map((med, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">{med.category}</TableCell>
                    <TableCell className="flex justify-center items-center">
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Option 1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">{med.otherDrugs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
  
        <Card>
        <CardHeader className="h-[44px] p-3 border-b" style={{backgroundColor: "#FAFBFB"}}>
            <CardTitle className="text-center font-medium">Lab work</CardTitle>
          </CardHeader>
          <CardContent className="p-0 m-0">
            <div className="">
              {labWork.map((lab, index) => (
                <div key={index} className="flex border-t h-[60px]">
                  <span className="font-200 w-[40px] flex justify-center items-center">{index + 1}</span>
                  <div className="px-[10px] py-[16px]">
                    <div className="font-medium">{lab.name}</div>
                    <div className="text-sm text-muted-foreground">{lab.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }