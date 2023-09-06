import { ReloadIcon } from '@radix-ui/react-icons'

export default function LoadingPage() {
  return (
    <main className='flex h-full items-center justify-center'>
      <ReloadIcon className='h-10 w-10 animate-spin' />
      <h1 className='sr-only'>Loading content...</h1>
    </main>
  )
}
