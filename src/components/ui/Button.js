import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
    secondary:
      'bg-transparent border border-white text-white hover:bg-white hover:text-brand-black',
    outline:
      'bg-transparent border border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
    'outline-red':
      'bg-transparent border border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
    ghost: 'bg-transparent text-brand-red hover:text-brand-red-dark underline-offset-4 hover:underline',
    dark: 'bg-brand-black text-white hover:bg-brand-charcoal',
  }

  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-8 text-sm',
    lg: 'h-14 px-10 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
