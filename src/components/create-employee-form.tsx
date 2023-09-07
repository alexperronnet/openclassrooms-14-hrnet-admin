'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/components/ui/use-toast'
import { US_STATES } from '@/data/us-states'
import { cn } from '@/libs/utils'

const schema = z.object({
  first_name: z.string({ required_error: 'First Name is required' }).nonempty('First Name is required'),
  last_name: z.string({ required_error: 'Last Name is required' }).nonempty('Last Name is required'),
  gender: z.string({ required_error: 'Gender is required' }),
  date_of_birth: z
    .date({ required_error: 'Date of Birth is required' })
    .refine((date) => date < new Date(new Date().setFullYear(new Date().getFullYear() - 18)), {
      message: 'Employee must be at least 18 years old',
    }),
  street_address: z
    .string()
    .refine(
      (street) => {
        if (!street) return true
        return /^\d/.test(street)
      },
      { message: 'Street Address must start with a number' },
    )
    .optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip_code: z
    .string()
    .refine(
      (zip) => {
        if (!zip) return true
        return /^[0-9]{4,5}$/.test(zip)
      },
      {
        message: 'Zip code must be between 4 and 5 digits',
      },
    )
    .optional(),
  department: z.string({ required_error: 'Department is required' }),
  start_date: z.date({ required_error: 'Start Date is required' }),
})

export function CreateEmployeeForm() {
  const supabase = createClientComponentClient<Database>()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: '',
      last_name: '',
      street_address: '',
      city: '',
      zip_code: '',
    },
  })
  const [showOptionalFields, setShowOptionalFields] = React.useState(false)
  const router = useRouter()
  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof schema>) {
    const { error } = await supabase.from('employees').insert(values).select()

    if (error) {
      toast({ variant: 'destructive', title: 'Error', description: error.message })
    } else {
      toast({ title: 'Success', description: `Employee ${values.first_name} ${values.last_name} created` })
      form.reset()
      router.refresh()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-6'>
        <div className='grid gap-6 sm:grid-cols-2'>
          <FormField
            control={form.control}
            name='first_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='John' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='last_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={cn(!field.value && 'text-muted-foreground')}>
                      <SelectValue placeholder='Select a gender' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Male'>Male</SelectItem>
                    <SelectItem value='Female'>Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date_of_birth'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                      >
                        {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='end'>
                    <Calendar
                      mode='single'
                      captionLayout='dropdown'
                      fromYear={1900}
                      toYear={new Date().getFullYear()}
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='department'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={cn(!field.value && 'text-muted-foreground')}>
                      <SelectValue placeholder='Select a department' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Sales'>Sales</SelectItem>
                    <SelectItem value='Marketing'>Marketing</SelectItem>
                    <SelectItem value='Engineering'>Engineering</SelectItem>
                    <SelectItem value='Human Ressources'>Human Ressources</SelectItem>
                    <SelectItem value='Legal'>Legal</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='start_date'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                      >
                        {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='end'>
                    <Calendar mode='single' selected={field.value} onSelect={field.onChange} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Switch checked={showOptionalFields} onCheckedChange={setShowOptionalFields} />
          <Label>Show optional fields</Label>
        </div>
        {showOptionalFields && (
          <div className='grid gap-6 sm:grid-cols-4 lg:grid-cols-5'>
            <FormField
              control={form.control}
              name='street_address'
              render={({ field }) => (
                <FormItem className='sm:col-span-2'>
                  <FormLabel>Street Adress</FormLabel>
                  <FormControl>
                    <Input placeholder='1234 Main St' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem className='sm:col-span-2 lg:col-span-1'>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder='Anytown' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='state'
              render={({ field }) => (
                <FormItem className='sm:col-span-2 lg:col-span-1'>
                  <FormLabel>State</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={cn(!field.value && 'text-muted-foreground')}>
                        <SelectValue placeholder='Select a state' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position='popper'>
                      <ScrollArea className='h-56'>
                        {US_STATES.map((state) => (
                          <SelectItem key={state.code} value={state.code}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='zip_code'
              render={({ field }) => (
                <FormItem className='sm:col-span-2 lg:col-span-1'>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder='12345' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <Button type='submit' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Creating employee...' : 'Create employee'}
        </Button>
      </form>
    </Form>
  )
}
