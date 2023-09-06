import { LaptopIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type PreferDesktopProps = {
  children: React.ReactNode
}

export function PreferDesktop({ children }: PreferDesktopProps) {
  return (
    <React.Fragment>
      <Alert variant='destructive' className='md:hidden'>
        <LaptopIcon className='h-4 w-4' />
        <AlertTitle>Recommendation!</AlertTitle>
        <AlertDescription>
          It&apos;s look like you are using a mobile device. For better experience we recommend to use a desktop device.
        </AlertDescription>
      </Alert>
      {children}
    </React.Fragment>
  )
}
