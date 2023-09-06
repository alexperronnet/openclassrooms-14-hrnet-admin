'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { EmployeesTableColumnHeader } from '@/components/employees-table/column-header'
import { EmployeesTableRowAvatar } from '@/components/employees-table/row-avatar'
import { EmployeesTableRowDeletion } from '@/components/employees-table/row-deletion'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/libs/utils'

export const employeesTableColumns: ColumnDef<Employee>[] = [
  {
    id: 'avatar',
    cell: ({ row }) => <EmployeesTableRowAvatar row={row} />,
  },
  {
    accessorKey: 'first_name',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='First Name' />,
  },
  {
    accessorKey: 'last_name',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='Last Name' />,
  },
  {
    accessorKey: 'date_of_birth',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='Date of Birth' />,
    cell: ({ row }) => formatDate(row.original.date_of_birth),
  },
  {
    accessorKey: 'street_address',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='Street Adress' />,
  },
  {
    accessorKey: 'city',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='City' />,
  },
  {
    accessorKey: 'state',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='State' />,
  },
  {
    accessorKey: 'zip_code',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='Zip Code' />,
  },
  {
    accessorKey: 'department',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='Department' />,
    cell: ({ row }) => <Badge variant='secondary'>{row.original.department}</Badge>,
  },
  {
    accessorKey: 'start_date',
    header: ({ column }) => <EmployeesTableColumnHeader column={column} title='Start Date' />,
    cell: ({ row }) => formatDate(row.original.start_date),
  },
  {
    id: 'actions',
    cell: ({ row }) => <EmployeesTableRowDeletion row={row} />,
  },
]
