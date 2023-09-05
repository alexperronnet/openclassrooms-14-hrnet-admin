import { Metadata } from 'next'

import { Icons } from '@/components/icons'
import { LoginForm } from '@/components/login-form'
import { siteConfig } from '@/configs/site'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <main className='mx-auto flex h-full max-w-sm flex-col items-center justify-center gap-6 py-10'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <Icons.Component1 className='h-6 w-6' />
        <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{siteConfig.title} Admin</h1>
        <p className='text-sm text-muted-foreground'>Enter your credentials to access the admin panel</p>
      </div>
      <LoginForm />
    </main>
  )
}
