'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/configs/site'

export function SiteHeader() {
  const pathname = usePathname()
  const session = true // TODO: Replace this with a real session check

  return (
    <header className='border-b'>
      <div className='container flex h-20 items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <Icons.Component1 className='mr-2 h-6 w-6' />
          <span className='font-bold'>{siteConfig.title}</span>
        </Link>
        {session && (
          <Button variant='destructive' size='sm'>
            Logout
          </Button>
        )}
        {!session && pathname !== '/' && (
          <Link href='/' className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
            <Icons.ChevronLeft className='mr-2 h-4 w-4' />
            <span>Back</span>
          </Link>
        )}
      </div>
    </header>
  )
}
