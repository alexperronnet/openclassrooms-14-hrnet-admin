'use client'

import { ChevronLeftIcon, Component1Icon } from '@radix-ui/react-icons'
import type { Session } from '@supabase/auth-helpers-nextjs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/configs/site'

type SiteHeaderProps = {
  session: Session | null
}

export function SiteHeader({ session }: SiteHeaderProps) {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className='sticky top-0 z-50 border-b bg-background/70 backdrop-blur'>
      <div className='container flex h-20 items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <Component1Icon className='mr-2 h-6 w-6' />
          <span className='font-bold'>{siteConfig.title}</span>
        </Link>
        {session && (
          <Button variant='ghost' size='sm' onClick={handleLogout}>
            <ChevronLeftIcon className='mr-2 h-4 w-4' />
            <span>Logout</span>
          </Button>
        )}
      </div>
    </header>
  )
}
