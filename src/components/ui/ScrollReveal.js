'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export default function ScrollReveal({
  children,
  variants,
  className,
  delay = 0,
  once = true,
  threshold = 0.15,
  as = 'div',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const defaultVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  }

  const Tag = motion[as] || motion.div

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={cn(className)}
    >
      {children}
    </Tag>
  )
}
