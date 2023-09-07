import { ThemeSwitcher } from '@/components/theme-switcher'
import { siteConfig } from '@/configs/site'

const currentYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className='border-t'>
      <div className='container flex flex-col items-center gap-6 py-6 sm:h-20 sm:flex-row sm:justify-between sm:py-0'>
        <p className='text-center text-sm leading-loose text-muted-foreground sm:text-left'>
          &copy; {currentYear} {siteConfig.title} &mdash; All rights reserved.
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
