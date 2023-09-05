'use client'

import { useTheme } from 'next-themes'

import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const menuItems = [
  { label: 'Light', icon: Icons.Sun, value: 'light' },
  { label: 'Dark', icon: Icons.Moon, value: 'dark' },
  { label: 'System', icon: Icons.Laptop, value: 'system' },
]

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({ variant: 'ghost', size: 'icon', className: 'overflow-hidden relative' })}
      >
        <Icons.Sun className='h-5 w-5 translate-x-0 transition-transform dark:-translate-x-10' />
        <Icons.Moon className='absolute h-5 w-5 translate-x-10 transition-transform dark:translate-x-0' />
        <span className='sr-only'>Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {menuItems.map((item, index) => {
          const { value, label, icon: Icon } = item

          return (
            <DropdownMenuItem key={index} onClick={() => setTheme(value)}>
              <Icon className='mr-2 h-4 w-4' />
              <span>{label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
