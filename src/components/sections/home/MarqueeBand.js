'use client'

import { motion } from 'framer-motion'

const items = [
  'Global Freight Network',
  'Air Cargo',
  'Ocean Freight',
  'Cross Border Logistics',
  'Warehousing & Storage',
  'Real-Time Tracking',
  'Supply Chain Optimization',
  'Last Mile Delivery',
  'Cold Chain Logistics',
  'Customs Clearance',
  'Multi-Modal Coordination',
  '99.2% On-Time',
  '40+ Countries',
  'Enterprise SLAs',
  'Distribution Networks',
  'Project Cargo',
]

// Duplicate for seamless loop
const track = [...items, ...items]

export default function MarqueeBand() {
  return (
    <div className="relative bg-brand-red overflow-hidden select-none py-6">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #C1121F, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #C1121F, transparent)' }}
      />

      {/* Scrolling track */}
      <motion.div
        className="flex items-center gap-0 w-max"
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 45,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ willChange: 'transform' }}
      >
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-[12px] lg:text-[13px] font-semibold tracking-[0.2em] uppercase text-white/90 whitespace-nowrap leading-none">
              {item}
            </span>
            <span className="mx-7 lg:mx-9 text-white/40 text-[7px] leading-none" style={{ display: 'inline-block', transform: 'translateY(-0.5px)' }}>
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
