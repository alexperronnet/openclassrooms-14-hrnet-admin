'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { loginFormSchema } from '@/libs/validations/login-form-schema'

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: LoginFormData) {
    const { error } = await supabase.auth.signInWithPassword(values)

    if (error) {
      toast({
        duration: 2000,
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      })
    }

    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='email' placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='password' placeholder='Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <Icons.Reload className='mr-2 h-4 w-4 animate-spin' />}
          <span>Sign in</span>
        </Button>
      </form>
    </Form>
  )
}
