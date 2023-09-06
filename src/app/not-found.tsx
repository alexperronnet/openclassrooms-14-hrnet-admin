import { Metadata } from 'next'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '404',
}

export default function NotFoundPage() {
  return (
    <main className='flex h-full flex-col items-center justify-center gap-14'>
      <div className='flex flex-col items-center gap-6 text-center'>
        <Badge variant='destructive'>404</Badge>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Page not found</h1>
        <p className='text-xl text-muted-foreground'>
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
      </div>
      <Link href='/' className={buttonVariants({ size: 'lg' })}>
        Go back safely
      </Link>
    </main>
  )
}
