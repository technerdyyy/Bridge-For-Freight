import { cn } from '@/lib/utils'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'flex items-center gap-3 mb-4',
            align === 'center' && 'justify-center',
            align === 'right' && 'justify-end'
          )}
        >
          <span className="accent-line" />
          <span
            className={cn(
              'text-xs font-semibold tracking-[0.18em] uppercase',
              light ? 'text-brand-gray-400' : 'text-brand-red'
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'font-display font-bold tracking-tight leading-tight mb-4',
          'text-3xl md:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-brand-black'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            light ? 'text-brand-gray-400' : 'text-brand-gray-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
