import { Metadata } from 'next'
import Link from 'next/link'

import { DashboardHeading } from '@/components/dashboard-heading'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Create Employee',
}

export default function CreateEmployeePage() {
  return (
    <main className='flex flex-col gap-10'>
      <DashboardHeading
        title='Create employee'
        description='Fill out the form below to create a new employee.'
        action={
          <Link href='/employees' className={buttonVariants()}>
            <Icons.Person className='mr-2 h-4 w-4' />
            <span>See all employees</span>
          </Link>
        }
      />
    </main>
  )
}
