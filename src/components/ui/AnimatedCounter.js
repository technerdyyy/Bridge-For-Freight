'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', isDecimal = false, duration = 2000, delay = 0 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isInView || startedRef.current) return

    const timeoutId = setTimeout(() => {
      startedRef.current = true
      const startTime = performance.now()

      function tick(now) {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = (value) * eased

        setDisplay(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))

        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          setDisplay(value)
        }
      }

      requestAnimationFrame(tick)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [isInView, value, duration, isDecimal, delay])

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(1) : display.toLocaleString()}
      {suffix}
    </span>
  )
}
