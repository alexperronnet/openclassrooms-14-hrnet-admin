import { z } from 'zod'

const ERROR_MESSAGES = {
  email: {
    required: 'Email is required',
    format: 'Email is not valid',
    domain: 'Email must be a @wealth-health.com email',
  },
  password: {
    required: 'Password is required',
  },
}

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty(ERROR_MESSAGES.email.required)
    .email(ERROR_MESSAGES.email.format)
    .refine((value) => value.endsWith('@wealth-health.com'), ERROR_MESSAGES.email.domain),
  password: z.string().nonempty(ERROR_MESSAGES.password.required),
})
