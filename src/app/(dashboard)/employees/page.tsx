import { UserPlusIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { DashboardHeading } from '@/components/dashboard-heading'
import { EmployeesTable } from '@/components/employees-table'
import { employeesTableColumns } from '@/components/employees-table/columns'
import { PreferDesktop } from '@/components/prefer-desktop'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Employees',
}

export default function EmployeePage() {
  return (
    <main className='flex flex-col gap-14'>
      <PreferDesktop>
        <DashboardHeading
          title='Employees'
          description='See and manage all employees.'
          action={
            <Link href='/create-employee' className={buttonVariants()}>
              <UserPlusIcon className='mr-2 h-4 w-4' />
              <span>Create employee</span>
            </Link>
          }
        />
        <EmployeesTable columns={employeesTableColumns} />
      </PreferDesktop>
    </main>
  )
}
