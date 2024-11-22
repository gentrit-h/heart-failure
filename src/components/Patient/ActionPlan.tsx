import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown, ChevronRight, Plus, Star } from 'lucide-react'
import { Action } from "../ActionPlan/ActionPlanDialog"
import React from "react"


type Action = {
  id: number
  type: string
  subType?: string
  status: "pending" | "in-progress" | "completed"
  date: string
  notes?: string
  priority: "low" | "medium" | "high"
}

type ActionCategory = {
  type: string
  subTypes?: string[]
}

const actionCategories: ActionCategory[] = [
  { type: "Medication Change", subTypes: ["Goal Change", "Medications"] },
  { type: "Schedule Appointment", subTypes: ["ER", "CHF Clinic", "Regular Doctor"] },
  { type: "New Test Needed", subTypes: ["Lab", "X-ray", "Echo"] },
  { type: "New Transmission", subTypes: ["CMEMS", "CIED"] },
  { type: "Patient Call" },
  { type: "Re assure patient", subTypes: ["Normal Schedules Transmission", "Triggered Transmission"] },
]

const initialActions: Action[] = [
  {
    id: 1,
    type: "Medication Change",
    subType: "Goal Change",
    status: "completed",
    date: "2023-11-15",
    priority: "high",
    notes: "Adjusted medication dosage as per patient's response"
  },
  {
    id: 2,
    type: "Schedule Appointment",
    subType: "CHF Clinic",
    status: "completed",
    date: "2023-11-16",
    priority: "medium",
    notes: "Scheduled follow-up at CHF Clinic for comprehensive review"
  },
  {
    id: 3,
    type: "New Test Needed",
    subType: "Echo",
    status: "completed",
    date: "2023-11-17",
    priority: "high",
    notes: "Echocardiogram ordered to assess cardiac function"
  },
  {
    id: 4,
    type: "Patient Call",
    subType: "",
    status: "completed",
    date: "2023-11-18",
    priority: "low",
    notes: "Routine check-in with patient, no immediate concerns"
  },
  {
    id: 5,
    type: "New Transmission",
    subType: "CMEMS",
    status: "pending",
    date: "2023-11-19",
    priority: "medium",
    notes: "Awaiting CMEMS transmission results"
  },
  {
    id: 6,
    type: "Re assure patient",
    subType: "Triggered Transmission",
    status: "pending",
    date: "2023-11-20",
    priority: "high",
    notes: "Patient needs reassurance about recent triggered transmission"
  },
  {
    id: 7,
    type: "New Test Needed",
    subType: "Lab",
    status: "pending",
    date: "2023-11-21",
    priority: "medium",
    notes: "Pending lab tests for comprehensive health assessment"
  },
  {
    id: 8,
    type: "Medication Change",
    subType: "Medications",
    status: "in-progress",
    date: "2023-11-22",
    priority: "high",
    notes: "Currently reviewing medication efficacy and potential adjustments"
  }
]


interface ActionPlanTableProps {
  actions: Action[]
}


export default function ActionPlanTable() {
  const [actions, setActions] = useState<Action[]>(initialActions)
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const [newAction, setNewAction] = useState<Partial<Action>>({})
  const [editingNote, setEditingNote] = useState<{ id: number; note: string } | null>(null)

  const handleStatusChange = (id: number) => {
    setActions(actions.map(action => {
      if (action.id === id) {
        const newStatus = action.status === "pending" ? "in-progress" :
          action.status === "in-progress" ? "completed" : "pending"
        return { ...action, status: newStatus }
      }
      return action
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500"
      case "in-progress": return "bg-blue-500"
      case "completed": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low": return "text-green-500"
      case "medium": return "text-yellow-500"
      case "high": return "text-red-500"
      default: return "text-gray-500"
    }
  }

  const isOverdue = (date: string) => {
    return new Date(date) < new Date()
  }

  const addNewAction = () => {
    if (newAction.type && newAction.date) {
      setActions([...actions, {
        ...newAction as Action,
        id: Math.max(...actions.map(a => a.id)) + 1,
        status: "pending",
        priority: newAction.priority || "medium"
      }])
      setNewAction({})
    }
  }

  const updateNote = (id: number, note: string) => {
    setActions(actions.map(action =>
      action.id === id ? { ...action, notes: note } : action
    ))
    setEditingNote(null)
  }

  const sortedActions = [...actions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto p-4">      
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button className="mb-4">
            <Plus className="mr-2 h-4 w-4" /> Add New Action
          </Button> */}

          <Button className="border rounded-md mb-4" style={{background: "#F1F5FE", borderColor: "#004DE1", color: "#004DE1", fontWeight: 500}}>
            Add Action +
            </Button>
        </DialogTrigger>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Action</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <select
              value={newAction.type || ''}
              onChange={(e) => setNewAction({
                ...newAction,
                type: e.target.value,
                subType: undefined
              })}
              className="border p-2 rounded"
            >
              <option value="">Select Action Type</option>
              {actionCategories.map(category => (
                <option key={category.type} value={category.type}>
                  {category.type}
                </option>
              ))}
            </select>

            {newAction.type && actionCategories.find(c => c.type === newAction.type)?.subTypes && (
              <select
                value={newAction.subType || ''}
                onChange={(e) => setNewAction({ ...newAction, subType: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="">Select Sub-Type</option>
                {actionCategories
                  .find(c => c.type === newAction.type)
                  ?.subTypes?.map(subType => (
                    <option key={subType} value={subType}>
                      {subType}
                    </option>
                  ))}
              </select>
            )}

            <Input
              type="date"
              value={newAction.date || ''}
              onChange={(e) => setNewAction({ ...newAction, date: e.target.value })}
            />

            <select
              value={newAction.priority || 'medium'}
              onChange={(e) => setNewAction({ ...newAction, priority: e.target.value as Action['priority'] })}
              className="border p-2 rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <Button onClick={addNewAction} className="bg-blue-600 hover:bg-blue-700">Add Action</Button>
          </div>
        </DialogContent>
      </Dialog>
<div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Action Type</TableHead>
            <TableHead>Sub-Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="text-center">Change Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedActions.map((action) => (
            <>
              <TableRow 
                key={action.id} 
                className={`hover:bg-muted/50 ${isOverdue(action.date) && action.status !== 'completed' ? 'bg-red-100' : ''}`}
              >
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedRow(expandedRow === action.id ? null : action.id)}
                  >
                    {expandedRow === action.id ? 
                      <ChevronDown className="h-4 w-4" /> : 
                      <ChevronRight className="h-4 w-4" />
                    }
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{action.type}</TableCell>
                <TableCell>{action.subType || "-"}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(action.status)}>{action.status}</Badge>
                </TableCell>
                <TableCell>{action.date}</TableCell>
                <TableCell>
                  <Star className={`h-4 w-4 ${getPriorityColor(action.priority)}`} />
                </TableCell>
                <TableCell className="text-center">
                <Button 
                  className="text-xs px-2 py-1 h-7 border rounded-md mb-2"
                  style={{  
                    background: "#F1F5FE", // Light blue background
                    borderColor: "#004DE1", // Deep blue border
                    color: "#004DE1", // Deep blue text
                    fontWeight: 500,
                    fontSize: '0.8rem'
                        }}
                      onClick={() => handleStatusChange(action.id)}
                    >
                    Update Status
                  </Button> 
                </TableCell>
              </TableRow>

              {expandedRow === action.id && (
                <TableRow>
                  <TableCell colSpan={7} className="bg-muted/50 p-4">
                    <div className="text-sm">
                    <strong>Notes:{'\n'}</strong>
                    {editingNote?.id === action.id ? (
                        <Textarea
                          value={editingNote.note}
                          onChange={(e) => setEditingNote({ ...editingNote, note: e.target.value })}
                          className="mt-2 w-full"
                        />
                      ) : (
                        action.notes || "No additional notes."
                      )}
                    </div>
                    <div className="mt-2">
                      {editingNote?.id === action.id ? (
                        <Button 
                        className="text-xs px-2 py-1 h-7 border rounded-md mb-2"
                        style={{
                          background: "#FAFAFA", // Slightly brighter gray
                          borderColor: "#A1A1AA", // Slightly lighter medium gray
                          color: "#27272A", // Almost black gray for more contrast
                          fontWeight: 500,
                          fontSize: '0.65rem'
                        }}
                        onClick={() => updateNote(action.id, editingNote.note)}
                      >
                        Save Note
                      </Button>
                      ) : (
                        <Button 
                        className="text-xs px-2 py-1 h-7  rounded-md mb-2"
                        style={{
                          background: "#F4F4F5", // Light cool gray
                          borderColor: "#71717A", // Medium gray border
                          color: "#3F3F46", // Dark gray text
                          fontWeight: 500,
                          fontSize: '0.65rem'
                        }}
                        onClick={() => setEditingNote({ id: action.id, note: action.notes || '' })}
                      >
                        {action.notes ? 'Edit Note' : 'Add Note'}
                      </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  )
}