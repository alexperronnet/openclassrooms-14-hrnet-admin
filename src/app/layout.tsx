import '@/styles/globals.css'

import type { Metadata } from 'next'

import { siteConfig } from '@/configs/site'
import { fontSans } from '@/libs/fonts'
import { cn } from '@/libs/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.title}`,
  },
  description: siteConfig.description,
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={cn('', fontSans.variable)}>{children}</body>
    </html>
  )
}
