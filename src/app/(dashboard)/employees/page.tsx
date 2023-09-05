import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { DashboardHeading } from '@/components/dashboard-heading'
import { Icons } from '@/components/icons'
import { PreferDesktop } from '@/components/prefer-desktop'
import { buttonVariants } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Employees',
}

export default async function EmployeePage() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: employees } = await supabase.from('employees').select()

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
        <pre className='rounded-md bg-muted p-4 text-xs text-muted-foreground'>
          <code>{JSON.stringify(employees, null, 2)}</code>
        </pre>
      </PreferDesktop>
    </main>
  )
}
