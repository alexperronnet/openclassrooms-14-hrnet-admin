import '@/styles/globals.css'

import type { Metadata } from 'next'

import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
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
    <html lang='en' suppressHydrationWarning>
      <body className={cn('', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
