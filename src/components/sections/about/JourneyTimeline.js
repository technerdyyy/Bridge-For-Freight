'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const EASE = [0.25, 0.1, 0.25, 1]

const stepImages = [
  {
    src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=75&auto=format&fit=crop',
    alt: 'Freight trucks on open highway at dusk',
  },
  {
    src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=75&auto=format&fit=crop',
    alt: 'Warehouse interior with active forklift',
  },
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=75&auto=format&fit=crop',
    alt: 'Container shipping port aerial view',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=75&auto=format&fit=crop',
    alt: 'Logistics operations technology center',
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=75&auto=format&fit=crop',
    alt: 'Aerial view of freight distribution center',
  },
  {
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=75&auto=format&fit=crop',
    alt: 'Global logistics operations at scale',
  },
]

function TimelineStep({ item, index, total, img }) {
  const [expanded, setExpanded] = useState(false)

  // Even index (0,2,4) = step 01,03,05: image slides LEFT → content reveals RIGHT
  // Odd index (1,3,5)  = step 02,04,06: image slides RIGHT → content reveals LEFT
  const slidesLeft = index % 2 === 0
  const stepNum = String(index + 1).padStart(2, '0')

  const ContentBlock = (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="block w-5 h-px bg-white/40" />
        <span className="text-[9px] font-bold tracking-[0.38em] uppercase text-white/55">
          {stepNum}
        </span>
      </div>
      <div
        className="font-display font-black text-white leading-none mb-3 tracking-tight"
        style={{ fontSize: 'clamp(1.65rem, 2.4vw, 2.2rem)' }}
      >
        {item.year}
      </div>
      <h3
        className="font-display font-bold text-white leading-tight tracking-tight mb-3"
        style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
      >
        {item.title}
      </h3>
      <p className="text-white/80 leading-relaxed" style={{ fontSize: '0.8125rem', maxWidth: '22rem' }}>
        {item.description}
      </p>
      <button
        onClick={() => setExpanded(false)}
        className="flex items-center gap-1.5 mt-5 text-white/55 hover:text-white transition-colors cursor-pointer group"
      >
        <ArrowLeft size={9} className="transition-transform group-hover:-translate-x-0.5" />
        <span className="text-[9px] font-bold tracking-[0.32em] uppercase">See Less</span>
      </button>
    </div>
  )

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 'clamp(340px, 36vw, 460px)' }}
    >
      {/* Row separator */}
      {index < total - 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/6 z-40 pointer-events-none" />
      )}

      {/* Large ghost step number — background depth */}
      <div
        className="absolute top-1/2 -translate-y-1/2 font-display font-black text-white/[0.038] select-none pointer-events-none z-2 leading-none"
        style={{
          fontSize: 'clamp(9rem, 17vw, 17rem)',
          [slidesLeft ? 'right' : 'left']: '-0.04em',
        }}
      >
        {stepNum}
      </div>

      {/* ── IMAGE — clickable when not expanded ── */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{
          pointerEvents: expanded ? 'none' : 'auto',
          cursor: expanded ? 'default' : 'pointer',
        }}
        onClick={() => setExpanded(true)}
      >
        <motion.div
          className="relative overflow-hidden"
          style={{ width: '60%', aspectRatio: '16/9' }}
          animate={{
            x: expanded ? (slidesLeft ? '-33%' : '33%') : '0%',
            scale: expanded ? 0.975 : 1,
          }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 60vw, 740px"
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-brand-black/30" />
          {/* Inner vignette */}
          <div
            className="absolute inset-0"
            style={{ boxShadow: 'inset 0 0 50px rgba(17,17,17,0.55)' }}
          />
          {/* Year watermark — fades out when expanded */}
          <motion.span
            className="absolute font-display font-black text-white select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', bottom: '0.75rem', right: '0.9rem' }}
            animate={{ opacity: expanded ? 0 : 0.22 }}
            transition={{ duration: 0.4 }}
          >
            {item.year}
          </motion.span>
          {/* "Know More" pill — fades out when expanded */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 pointer-events-none"
            animate={{ opacity: expanded ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-white/90 whitespace-nowrap">
              Know More
            </span>
            <ArrowRight size={8} className="text-white/70 shrink-0" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── CONTENT RIGHT (slides-left items: 01, 03, 05) ── */}
      <motion.div
        className="absolute right-0 top-0 h-full z-20 flex items-center"
        style={{
          width: '34%',
          paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
          pointerEvents: slidesLeft && expanded ? 'auto' : 'none',
        }}
        animate={{
          opacity: slidesLeft && expanded ? 1 : 0,
          x: slidesLeft && expanded ? 0 : 18,
        }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
      >
        {ContentBlock}
      </motion.div>

      {/* ── CONTENT LEFT (slides-right items: 02, 04, 06) ── */}
      <motion.div
        className="absolute left-0 top-0 h-full z-20 flex items-center"
        style={{
          width: '34%',
          paddingLeft: 'clamp(1.5rem, 3vw, 3rem)',
          pointerEvents: !slidesLeft && expanded ? 'auto' : 'none',
        }}
        animate={{
          opacity: !slidesLeft && expanded ? 1 : 0,
          x: !slidesLeft && expanded ? 0 : -18,
        }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
      >
        {ContentBlock}
      </motion.div>

      {/* ── STEP HINT — always visible, fades when expanded ── */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-20 select-none pointer-events-none"
        style={{ [slidesLeft ? 'right' : 'left']: 'clamp(0.75rem, 2.5vw, 2rem)' }}
        animate={{ opacity: expanded ? 0 : 0.35 }}
        transition={{ duration: 0.3 }}
      >
        <span
          className="font-display font-bold text-white leading-none"
          style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)' }}
        >
          {stepNum}
        </span>
      </motion.div>

      {/* ── SPINE DOT ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <motion.div
          className="rounded-full"
          animate={{
            width: expanded ? '11px' : '7px',
            height: expanded ? '11px' : '7px',
            backgroundColor: expanded ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.35)',
            boxShadow: expanded
              ? '0 0 12px 3px rgba(255,255,255,0.25)'
              : '0 0 0px transparent',
          }}
          transition={{ duration: 0.35, ease: EASE }}
        />
      </div>
    </div>
  )
}

export default function JourneyTimeline({ items }) {
  return (
    <>
      {/* ── DESKTOP & TABLET (md+) ── */}
      <div className="hidden md:block relative">

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />

        {/* Vertical spine line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-px pointer-events-none z-5"
          style={{
            width: '1px',
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.09) 6%, rgba(255,255,255,0.09) 94%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {items.map((item, i) => (
          <TimelineStep
            key={item.year}
            item={item}
            index={i}
            total={items.length}
            img={stepImages[i] ?? stepImages[0]}
          />
        ))}
      </div>

      {/* ── MOBILE — stacked, white-on-red ── */}
      <div className="md:hidden border-l-2 border-white/20 pl-8 ml-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.year} delay={i * 0.07}>
            <div className="pb-10 relative">
              <div className="absolute -left-10.25 top-1 w-4 h-4 bg-white/80" />
              <div
                className="font-display font-black text-white mb-1.5 leading-none"
                style={{ fontSize: '1.75rem', letterSpacing: '-0.03em' }}
              >
                {item.year}
              </div>
              <h4 className="font-display font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  )
}
