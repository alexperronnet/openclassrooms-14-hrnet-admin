import { z } from 'zod'

export const createEmployeeSchema = z.object({
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

export type CreateEmployeeSchema = z.infer<typeof createEmployeeSchema>
