'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, ArrowRight, Briefcase, SlidersHorizontal } from 'lucide-react'
import { jobs } from '@/lib/data/careers'
import Container from '@/components/ui/Container'

const DEPARTMENTS = ['All', 'Operations', 'Technology', 'Strategy & Analytics', 'Fleet', 'Warehousing', 'International', 'Client Services']
const MODES = ['All', 'Onsite', 'Hybrid', 'Remote']
const TYPES = ['All', 'Full-time', 'Internship']

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-200 ${
        active
          ? 'bg-brand-black text-white'
          : 'bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200 hover:text-brand-black'
      }`}
    >
      {label}
    </button>
  )
}

function JobCard({ job }) {
  const modeColors = {
    Remote: 'bg-emerald-50 text-emerald-700',
    Hybrid: 'bg-blue-50 text-blue-700',
    Onsite: 'bg-amber-50 text-amber-700',
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/careers/${job.slug}`} className="group block">
        <div className="relative bg-white border border-brand-gray-200 hover:border-brand-gray-400 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
          {/* Top hover accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gray-200 group-hover:bg-brand-red transition-colors duration-300" />

          <div className="p-7">
            {/* Meta row */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="text-[10px] font-black tracking-[0.18em] uppercase text-brand-red">
                {job.department}
              </span>
              <span className="text-brand-gray-300 select-none">·</span>
              <span className="text-[10px] font-semibold tracking-wide uppercase text-brand-gray-500">
                {job.type}
              </span>
              <span
                className={`ml-1 text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 ${modeColors[job.mode] || 'bg-brand-gray-100 text-brand-gray-500'}`}
              >
                {job.mode}
              </span>
            </div>

            {/* Title + salary */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display font-bold text-brand-black text-lg leading-tight group-hover:text-brand-red transition-colors duration-200">
                {job.title}
              </h3>
              <span className="text-sm font-bold text-brand-gray-700 shrink-0 text-right leading-tight pt-0.5">
                {job.salary}
              </span>
            </div>

            {/* Location + posted */}
            <div className="flex items-center gap-4 text-xs text-brand-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <MapPin size={11} className="shrink-0" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={11} className="shrink-0" />
                {job.posted}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-brand-gray-600 leading-relaxed mb-5 line-clamp-2">
              {job.description}
            </p>

            {/* Tags + CTA */}
            <div className="flex items-end justify-between gap-4 pt-4 border-t border-brand-gray-100">
              <div className="flex flex-wrap gap-1.5">
                {job.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold bg-brand-gray-100 text-brand-gray-600 px-2.5 py-1 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-brand-red transition-all duration-200">
                View Role
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function JobListings() {
  const [dept, setDept] = useState('All')
  const [mode, setMode] = useState('All')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (dept !== 'All' && j.department !== dept) return false
      if (mode !== 'All' && j.mode !== mode) return false
      if (type !== 'All' && j.type !== type) return false
      return true
    })
  }, [dept, mode, type])

  const hasFilters = dept !== 'All' || mode !== 'All' || type !== 'All'

  return (
    <section className="section-padding bg-white" id="open-roles">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-red">
                Open Positions
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight leading-tight">
              Find Your Role at
              <br />
              Bridge For Freight
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-gray-500 shrink-0">
            <Briefcase size={15} className="text-brand-gray-400" />
            <span className="font-semibold text-brand-black">{filtered.length}</span>
            <span>open position{filtered.length !== 1 ? 's' : ''}</span>
            {hasFilters && (
              <button
                onClick={() => { setDept('All'); setMode('All'); setType('All') }}
                className="ml-2 text-xs text-brand-red hover:text-brand-red-dark font-semibold underline underline-offset-2"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 space-y-3 border border-brand-gray-200 p-5 bg-brand-gray-50">
          <div className="flex items-start gap-3 flex-wrap">
            <div className="flex items-center gap-1 shrink-0 pt-1.5">
              <SlidersHorizontal size={12} className="text-brand-gray-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 w-14">
                Dept
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((d) => (
                <FilterPill key={d} label={d} active={dept === d} onClick={() => setDept(d)} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 w-[4.75rem] shrink-0">
              Mode
            </span>
            <div className="flex flex-wrap gap-2">
              {MODES.map((m) => (
                <FilterPill key={m} label={m} active={mode === m} onClick={() => setMode(m)} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray-400 w-[4.75rem] shrink-0">
              Type
            </span>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <FilterPill key={t} label={t} active={type === t} onClick={() => setType(t)} />
              ))}
            </div>
          </div>
        </div>

        {/* Job Cards Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((job) => <JobCard key={job.slug} job={job} />)
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:col-span-2 py-20 text-center border border-dashed border-brand-gray-300"
              >
                <div className="w-12 h-12 bg-brand-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={20} className="text-brand-gray-400" />
                </div>
                <p className="font-display font-bold text-brand-black mb-1">No matching roles</p>
                <p className="text-sm text-brand-gray-500">
                  Try adjusting your filters or{' '}
                  <button
                    onClick={() => { setDept('All'); setMode('All'); setType('All') }}
                    className="text-brand-red font-semibold hover:underline"
                  >
                    clear all
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-brand-gray-500">
          Don&apos;t see your role?{' '}
          <Link href="/contact" className="text-brand-red font-semibold hover:text-brand-red-dark transition-colors">
            Send us a speculative application
          </Link>{' '}
          — we hire for talent.
        </p>
      </Container>
    </section>
  )
}
