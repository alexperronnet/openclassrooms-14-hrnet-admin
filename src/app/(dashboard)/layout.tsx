import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import * as React from 'react'

import type { Database } from '@/types/database'

export const dynamic = 'force-dynamic'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) redirect('/')

  return <React.Fragment>{children}</React.Fragment>
}
