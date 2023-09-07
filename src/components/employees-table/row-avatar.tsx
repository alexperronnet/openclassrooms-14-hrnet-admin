'use client'

import type { Row } from '@tanstack/react-table'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface EmployeesTableRowAvatarProps {
  row: Row<Employee>
}

export function EmployeesTableRowAvatar({ row }: EmployeesTableRowAvatarProps) {
  const { first_name, last_name, gender } = row.original

  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage src={`/avatars/${gender.toLowerCase()}.png`} alt={`${first_name} ${last_name}`} />
      <AvatarFallback>
        {first_name.charAt(0)}
        {last_name.charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}
