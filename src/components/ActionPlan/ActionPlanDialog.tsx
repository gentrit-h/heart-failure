import * as React from "react"
import { Plus } from 'lucide-react'
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

export type Action = {
  id: number
  type: string
  subType?: string
  status: "pending" | "in-progress" | "completed"
  date: string
  notes?: string
  priority: "low" | "medium" | "high"
}

export type ActionCategory = {
  type: string
  subTypes?: string[]
}

export const actionCategories: ActionCategory[] = [
  { type: "Medication Change", subTypes: ["Goal Change", "Medications"] },
  { type: "Schedule Appointment", subTypes: ["ER", "CHF Clinic", "Regular Doctor"] },
  { type: "New Test Needed", subTypes: ["Lab", "X-ray", "Echo"] },
  { type: "New Transmission", subTypes: ["CMEMS", "CIED"] },
  { type: "Patient Call" },
  { type: "Re assure patient", subTypes: ["Normal tsm schedules", "Triggered"] },
]

interface ActionPlanDialogProps {
  onActionAdd: (action: Action) => void
  buttonClassName?: string
  buttonStyle?: React.CSSProperties
  existingActions?: Action[]
}

export function ActionPlanDialog({ 
  onActionAdd, 
  buttonClassName = "", 
  buttonStyle = {},
  existingActions = []
}: ActionPlanDialogProps) {
  const [newAction, setNewAction] = React.useState<Partial<Action>>({})
  const [isOpen, setIsOpen] = React.useState(false)

  const addNewAction = () => {
    if (newAction.type && newAction.date) {
      const action: Action = {
        ...newAction as Action,
        id: existingActions.length ? Math.max(...existingActions.map(a => a.id)) + 1 : 1,
        status: "pending",
        priority: newAction.priority || "medium"
      }
      onActionAdd(action)
      setNewAction({})
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={buttonClassName}
          style={buttonStyle}
        >
          Action Plan +
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

          <Textarea
            placeholder="Add notes (optional)"
            value={newAction.notes || ''}
            onChange={(e) => setNewAction({ ...newAction, notes: e.target.value })}
          />

          <Button onClick={addNewAction}>Add Action</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 