import '@/styles/globals.css'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/configs/site'
import { fontSans } from '@/libs/fonts'
import { cn } from '@/libs/utils'

export const dynamic = 'force-dynamic'

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

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex flex-col', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <SiteHeader session={data.session} />
          <div className='container grow py-14'>{children}</div>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
