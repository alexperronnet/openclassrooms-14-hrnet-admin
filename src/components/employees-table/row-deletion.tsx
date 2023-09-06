'use client'

import { TrashIcon } from '@radix-ui/react-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Row } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

interface EmployeesTableRowDeletionProps {
  row: Row<Employee>
}

export function EmployeesTableRowDeletion({ row }: EmployeesTableRowDeletionProps) {
  const { id, first_name, last_name } = row.original

  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { toast } = useToast()

  async function handleDelete() {
    setLoading(true)

    const { error } = await supabase.from('employees').delete().eq('id', id)

    if (error) {
      setOpen(false)
      setLoading(false)
      toast({ variant: 'destructive', title: 'Error', description: error.message })
    } else {
      setOpen(false)
      setLoading(false)
      toast({ title: 'Success', description: `Employee ${first_name} ${last_name} deleted.` })
      router.refresh()
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant='ghost' className='flex h-8 w-8 p-0'>
          <TrashIcon className='h-4 w-4' />
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
          <Button variant='destructive' disabled={loading} onClick={handleDelete}>
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
