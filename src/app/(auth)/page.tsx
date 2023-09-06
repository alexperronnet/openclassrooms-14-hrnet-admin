import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { CommandIcon } from 'lucide-react'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { LoginForm } from '@/components/login-form'
import { siteConfig } from '@/configs/site'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Login',
}

export default async function LoginPage() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) redirect('/employees')

  return (
    <main className='mx-auto flex h-full max-w-sm flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <CommandIcon className='h-6 w-6' />
        <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{siteConfig.title} Admin</h1>
        <p className='text-sm text-muted-foreground'>Enter your credentials to access the admin panel</p>
      </div>
      <LoginForm />
    </main>
  )
}
