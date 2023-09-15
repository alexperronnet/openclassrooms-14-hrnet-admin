'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@oc-wh/react-dialog'
import type { Row } from '@tanstack/react-table'
import { useAtom } from 'jotai'
import { Trash2Icon } from 'lucide-react'
import * as React from 'react'

import { employeesAtom } from '@/atoms/employee-atom'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

interface EmployeesTableRowDeletionProps {
  row: Row<Employee>
}

export function EmployeesTableRowDeletion({ row }: EmployeesTableRowDeletionProps) {
  const { id, first_name, last_name } = row.original
  const [employees, setEmployees] = useAtom(employeesAtom)

  const [open, setOpen] = React.useState(false)
  const { toast } = useToast()

  function handleDelete() {
    try {
      const updatedEmployees = employees.filter((employee) => employee.id !== id)
      setEmployees(updatedEmployees)
      setOpen(false)
      toast({ title: 'Success', description: `Employee ${first_name} ${last_name} deleted.` })
    } catch (error: any) {
      setOpen(false)
      toast({ variant: 'destructive', title: 'Error', description: error.message })
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant='ghost' className='flex h-8 w-8 p-0'>
          <Trash2Icon className='h-4 w-4' />
          <span className='sr-only'>Delete</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete {first_name} {last_name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Once you delete an employee, there is no going back. Please be certain.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant='destructive' onClick={handleDelete}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
