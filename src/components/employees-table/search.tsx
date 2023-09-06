'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface EmployeesTableSearchProps<TData> {
  table: Table<TData>
}

export function EmployeesTableSearch<TData>({ table }: EmployeesTableSearchProps<TData>) {
  const isFiltered = table.getState().globalFilter !== ''

  return (
    <div className='flex items-center gap-2'>
      <Input
        placeholder='Search all columns...'
        value={table.getState().globalFilter}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className='h-8 w-36 md:w-64'
      />
      {isFiltered && (
        <Button variant='ghost' size='sm' onClick={() => table.setGlobalFilter('')}>
          <span>Reset</span>
          <Cross2Icon className='ml-2 h-4 w-4' />
        </Button>
      )}
    </div>
  )
}
