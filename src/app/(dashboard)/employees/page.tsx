import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { UserPlusIcon } from 'lucide-react'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { DashboardHeading } from '@/components/dashboard-heading'
import { EmployeesTable } from '@/components/employees-table'
import { employeesTableColumns } from '@/components/employees-table/columns'
import { PreferDesktop } from '@/components/prefer-desktop'
import { buttonVariants } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Employees',
}

export default async function EmployeePage() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: employees } = await supabase.from('employees').select('*').order('created_at', { ascending: false })

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
        <EmployeesTable columns={employeesTableColumns} data={employees ?? []} />
      </PreferDesktop>
    </main>
  )
}
