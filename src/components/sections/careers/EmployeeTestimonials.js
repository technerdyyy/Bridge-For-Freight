'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { employeeTestimonials } from '@/lib/data/careers'

const CARD_GAP = 20

function getItemsPerView() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth >= 1280) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

function EmployeeCard({ person, isAlt }) {
  return (
    <div
      className={`h-full flex flex-col p-8 ${
        isAlt ? 'bg-brand-charcoal' : 'bg-brand-gray-50'
      }`}
    >
      {/* Quote mark */}
      <div
        className={`font-display font-black text-5xl leading-none mb-4 select-none ${
          isAlt ? 'text-white/18' : 'text-brand-red'
        }`}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={11}
            className={isAlt ? 'text-brand-red' : 'text-amber-400'}
            style={{ fill: 'currentColor', strokeWidth: 0 }}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className={`text-[0.875rem] leading-relaxed flex-1 mb-6 ${
          isAlt ? 'text-white/80' : 'text-brand-gray-700'
        }`}
      >
        {person.quote}
      </blockquote>

      {/* Attribution */}
      <div
        className={`border-t pt-5 flex items-center gap-3 ${
          isAlt ? 'border-white/12' : 'border-brand-gray-200'
        }`}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-brand-gray-200">
          <Image
            src={person.avatar}
            alt={person.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div
            className={`font-display font-bold text-sm leading-tight truncate ${
              isAlt ? 'text-white' : 'text-brand-black'
            }`}
          >
            {person.name}
          </div>
          <div
            className={`text-[11px] mt-0.5 ${
              isAlt ? 'text-white/55' : 'text-brand-gray-500'
            }`}
          >
            {person.role} · {person.tenure}
          </div>
        </div>
        <span
          className={`text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-1 shrink-0 whitespace-nowrap ${
            isAlt
              ? 'bg-white/12 text-white/70'
              : 'bg-brand-gray-200 text-brand-gray-600'
          }`}
        >
          {person.department}
        </span>
      </div>
    </div>
  )
}

export default function EmployeeTestimonials() {
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef(null)
  const touchStartX = useRef(0)

  const measure = useCallback(() => {
    if (!containerRef.current) return
    const w = containerRef.current.offsetWidth
    const ipv = getItemsPerView()
    setItemsPerView(ipv)
    setCardWidth((w - CARD_GAP * (ipv - 1)) / ipv)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const maxIndex = Math.max(0, employeeTestimonials.length - itemsPerView)
  const safeIndex = Math.min(index, maxIndex)
  const trackX = cardWidth > 0 ? -(safeIndex * (cardWidth + CARD_GAP)) : 0

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    else if (diff < -50) prev()
  }

  return (
    <section className="section-padding bg-white">
      <Container>
        {/* Header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-brand-red" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-gray-500">
                Team Voices
              </span>
              <span className="block w-8 h-px bg-brand-red" />
            </div>
            <h2
              className="font-display font-bold text-brand-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Hear From the People
              <br />
              <span className="text-brand-red">Who Build This.</span>
            </h2>
            <p className="text-brand-gray-500 mt-4 max-w-lg text-base leading-relaxed">
              Real perspectives from the team members who live these programs every day.
            </p>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <div className="relative flex items-center gap-4">
          <button
            onClick={prev}
            disabled={safeIndex === 0}
            aria-label="Previous"
            className="shrink-0 w-11 h-11 rounded-full border border-brand-gray-200 flex items-center justify-center text-brand-gray-500 hover:bg-brand-black hover:border-brand-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft size={17} />
          </button>

          <div
            ref={containerRef}
            className="overflow-hidden flex-1"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex items-stretch"
              animate={{ x: trackX }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ gap: CARD_GAP }}
            >
              {employeeTestimonials.map((person, i) => (
                <div
                  key={person.id}
                  style={{ width: cardWidth || '100%', flexShrink: 0 }}
                >
                  <EmployeeCard person={person} isAlt={i % 2 !== 0} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={next}
            disabled={safeIndex >= maxIndex}
            aria-label="Next"
            className="shrink-0 w-11 h-11 rounded-full border border-brand-gray-200 flex items-center justify-center text-brand-gray-500 hover:bg-brand-black hover:border-brand-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-200 rounded-full ${
                i === safeIndex
                  ? 'w-6 h-1.5 bg-brand-red'
                  : 'w-1.5 h-1.5 bg-brand-gray-300 hover:bg-brand-gray-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
