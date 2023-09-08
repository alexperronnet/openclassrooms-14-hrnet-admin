'use client'

import { Table } from '@tanstack/react-table'
import { XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface EmployeesTableSearchProps<TData> {
  table: Table<TData>
}

export function EmployeesTableSearch<TData>({ table }: EmployeesTableSearchProps<TData>) {
  const isFiltered = table.getState().globalFilter !== ''

  return (
    <div className='flex w-full items-center gap-4'>
      <Input
        placeholder='Search all columns...'
        value={table.getState().globalFilter}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className='h-8 w-full md:w-64'
      />
      {isFiltered && (
        <Button variant='ghost' size='sm' className='h-8' onClick={() => table.setGlobalFilter('')}>
          <span>Reset</span>
          <XIcon className='ml-2 h-4 w-4' />
        </Button>
      )}
    </div>
  )
}
