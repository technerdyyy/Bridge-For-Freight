import { cn } from '@/lib/utils'

export default function Container({ children, className, narrow = false }) {
  return (
    <div
      className={cn(
        'container-site',
        narrow && 'max-w-4xl',
        className
      )}
    >
      {children}
    </div>
  )
}
