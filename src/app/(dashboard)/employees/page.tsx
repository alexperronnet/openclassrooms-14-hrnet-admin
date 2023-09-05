import { Metadata } from 'next'
import Link from 'next/link'

import { DashboardHeading } from '@/components/dashboard-heading'
import { Icons } from '@/components/icons'
import { PreferDesktop } from '@/components/prefer-desktop'
import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Employees',
}

export default function EmployeePage() {
  return (
    <main className='flex flex-col gap-10'>
      <PreferDesktop>
        <DashboardHeading
          title='Employees'
          description='See and manage all employees.'
          action={
            <Link href='/create-employee' className={buttonVariants()}>
              <Icons.Plus className='mr-2 h-4 w-4' />
              <span>Create employee</span>
            </Link>
          }
        />
        <Skeleton className='h-96 w-full' />
      </PreferDesktop>
    </main>
  )
}