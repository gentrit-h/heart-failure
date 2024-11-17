'use client'

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from 'react'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import img7 from './img7.png'
import img8 from './img8.png'


export default function SymptomsHistory() {
  return (
    <div className="w-full mx-auto p-4 space-y-6">

      <Card className="p-7 flex items-center w-full h-[80px] justify-center divide-x">
  <div className="flex items-center gap-2 flex-1 justify-center">
    <Heart className="w-5 h-5 text-primary" />
    <div>
      <div className="text-sm font-medium text-center">Patient Activity</div>
      <div className="text-sm text-muted-foreground text-center">1 h 50 m / day</div>
    </div>
  </div>
  <div className="flex items-center gap-2 flex-1 justify-center">
    <div className="text-right">
      <div className="text-sm font-medium text-center">Latest Symptom Log</div>
      <div className="text-sm text-muted-foreground text-center">Nov 14, 2024</div>
    </div>
  </div>
  <div className="flex items-center justify-center flex-1">
    <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
      Ask for a log
    </Button>
  </div>
</Card>


      {/* Graphs Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className='border rounded-md'>
            <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className="">Shortness of breath</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow key={1} className=''>
                  <TableCell className=" text-center">
                  <div className="w-full] aspect-[670.88/240]">
                    <img src={img5} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
                  </div>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </div>
        <div className='border rounded-md'>
            <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className="">Palpitations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow key={1} className=''>
                  <TableCell className=" text-center">
                  <div className="w-full aspect-[670.88/240]">
                    <img src={img6} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
                  </div>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </div>
        <div className='border rounded-md'>
            <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className="">Weight Gain</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow key={1} className=''>
                  <TableCell className=" text-center">
                  <div className="w-full aspect-[670.88/240]">
                    <img src={img7} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
                  </div>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </div>
          <div className='border rounded-md'>
            <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className="">Swelling</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow key={1} className=''>
                  <TableCell className="text-center">
                  <div className="w-full aspect-[670.88/240]">
                    <img src={img8} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
                  </div>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </div>
      </div>

      <div className='border rounded-md'>
            <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className="text-center">CIED - 17/Nov/2024</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow key={1} className=''>
                  <TableCell className="flex justify-center items-center py-4">
                  <div className="w-[80%] aspect-[1171.6/156]">
                    <img src={img4} className="w-full h-full object-cover cursor-pointer" alt="placeholder" />
                  </div>
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </div>
    </div>
  )
}