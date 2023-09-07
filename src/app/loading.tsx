import { Loader2Icon } from 'lucide-react'

export default function LoadingPage() {
  return (
    <main className='flex h-full items-center justify-center'>
      <Loader2Icon className='h-10 w-10 animate-spin text-primary' />
      <h1 className='sr-only'>Loading content...</h1>
    </main>
  )
}
