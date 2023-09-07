type DashboardHeadingProps = {
  title: string
  description: string
  action?: React.ReactNode
}

export function DashboardHeading(props: DashboardHeadingProps) {
  const { title, description, action } = props

  return (
    <section className='flex flex-col items-center justify-between gap-6 md:flex-row'>
      <div className='flex flex-col gap-2 text-center md:text-left'>
        <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{title}</h1>
        <p className='text-muted-foreground'>{description}</p>
      </div>
      {action && action}
    </section>
  )
}
