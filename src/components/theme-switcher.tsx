'use client'

import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const menuItems = [
  { label: 'Light', icon: SunIcon, value: 'light' },
  { label: 'Dark', icon: MoonIcon, value: 'dark' },
  { label: 'System', icon: LaptopIcon, value: 'system' },
]

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='relative overflow-hidden'>
          <SunIcon className='h-5 w-5 translate-x-0 transition-transform dark:-translate-x-10' />
          <MoonIcon className='absolute h-5 w-5 translate-x-10 transition-transform dark:translate-x-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
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
