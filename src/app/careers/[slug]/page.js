import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  Wifi,
  DollarSign,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ApplyForm from '@/components/sections/careers/ApplyForm'
import { jobs } from '@/lib/data/careers'

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const job = jobs.find((j) => j.slug === slug)
  if (!job) return {}
  return {
    title: `${job.title} — Careers at Bridge For Freight`,
    description: job.description,
  }
}

const modeColors = {
  Remote: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Hybrid: 'bg-blue-50 text-blue-700 border-blue-200',
  Onsite: 'bg-amber-50 text-amber-700 border-amber-200',
}

export default async function JobDetailPage({ params }) {
  const { slug } = await params
  const job = jobs.find((j) => j.slug === slug)
  if (!job) notFound()

  const relatedJobs = jobs.filter((j) => j.slug !== job.slug && j.department === job.department).slice(0, 2)

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-charcoal pt-36 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: 'linear-gradient(#C1121F 1px, transparent 1px), linear-gradient(90deg, #C1121F 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-gray-500 mb-8">
            <Link href="/careers" className="hover:text-brand-red transition-colors">
              Careers
            </Link>
            <ChevronRight size={12} />
            <span className="text-brand-gray-400">{job.department}</span>
            <ChevronRight size={12} />
            <span className="text-white/70">{job.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left: main heading */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-px bg-brand-red" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                    {job.department}
                  </span>
                </div>
                <h1
                  className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                >
                  {job.title}
                </h1>
                <p className="text-base text-brand-gray-400 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Right: meta card */}
            <ScrollReveal delay={0.1}>
              <div className="bg-brand-black/50 border border-white/10 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-brand-red shrink-0" />
                  <div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-widest font-semibold">Location</div>
                    <div className="text-sm text-white font-medium">{job.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={14} className="text-brand-red shrink-0" />
                  <div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-widest font-semibold">Type</div>
                    <div className="text-sm text-white font-medium">{job.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi size={14} className="text-brand-red shrink-0" />
                  <div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-widest font-semibold">Work Mode</div>
                    <div className={`inline-block mt-0.5 text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 border ${modeColors[job.mode] || 'bg-brand-gray-100 text-brand-gray-600 border-brand-gray-200'}`}>
                      {job.mode}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign size={14} className="text-brand-red shrink-0" />
                  <div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-widest font-semibold">Compensation</div>
                    <div className="text-sm text-white font-bold">{job.salary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={14} className="text-brand-red shrink-0" />
                  <div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-widest font-semibold">Posted</div>
                    <div className="text-sm text-brand-gray-400">{job.posted}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <a
                    href="#apply"
                    className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors duration-200 group"
                  >
                    <span
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                    />
                    Apply for This Role
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ─── JOB DETAIL ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="accent-line" />
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-red">
                      Overview
                    </span>
                  </div>
                  <p className="text-base text-brand-gray-700 leading-relaxed">
                    {job.overview}
                  </p>
                </div>
              </ScrollReveal>

              {/* Responsibilities */}
              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="accent-line" />
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-red">
                      Responsibilities
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-brand-red flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white font-bold text-[8px]">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <span className="text-sm text-brand-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Requirements */}
              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="accent-line" />
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-red">
                      What We&apos;re Looking For
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="text-brand-red shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Preferred */}
              {job.preferred && job.preferred.length > 0 && (
                <ScrollReveal>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="accent-line" />
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-red">
                        Preferred Qualifications
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {job.preferred.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gray-400 shrink-0 mt-1.5" />
                          <span className="text-sm text-brand-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills tags */}
              <ScrollReveal delay={0.05}>
                <div className="border border-brand-gray-200 p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-500 mb-4">
                    Skills & Tags
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold bg-brand-gray-100 text-brand-gray-700 px-3 py-1.5 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What we offer */}
              <ScrollReveal delay={0.08}>
                <div className="border border-brand-gray-200 p-6 bg-brand-gray-50">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-500 mb-4">
                    What We Offer
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Competitive base salary',
                      'Performance bonus scheme',
                      'Comprehensive health coverage',
                      '$2,000 annual learning budget',
                      'Flexible working arrangements',
                      '25 days PTO + federal holidays',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-brand-gray-700">
                        <CheckCircle2 size={11} className="text-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* CTA card */}
              <ScrollReveal delay={0.1}>
                <div className="bg-brand-black p-6 text-center">
                  <div className="font-display font-bold text-white text-base mb-2">
                    Ready to Apply?
                  </div>
                  <p className="text-xs text-brand-gray-400 leading-relaxed mb-5">
                    Applications reviewed within 3 business days.
                  </p>
                  <a
                    href="#apply"
                    className="relative overflow-hidden block w-full text-center bg-brand-red text-white px-4 py-3 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                  >
                    <span
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                    />
                    Apply Now
                  </a>
                  <Link
                    href="/careers"
                    className="mt-3 flex items-center justify-center gap-1 text-xs text-brand-gray-500 hover:text-brand-gray-300 transition-colors"
                  >
                    <ArrowLeft size={11} />
                    Back to all roles
                  </Link>
                </div>
              </ScrollReveal>

              {/* Related roles */}
              {relatedJobs.length > 0 && (
                <ScrollReveal delay={0.12}>
                  <div className="border border-brand-gray-200 p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-500 mb-4">
                      Other {job.department} Roles
                    </div>
                    <div className="space-y-3">
                      {relatedJobs.map((rj) => (
                        <Link
                          key={rj.slug}
                          href={`/careers/${rj.slug}`}
                          className="group flex items-start justify-between gap-2 py-2 border-b border-brand-gray-100 last:border-0"
                        >
                          <div>
                            <div className="text-sm font-semibold text-brand-black group-hover:text-brand-red transition-colors">
                              {rj.title}
                            </div>
                            <div className="text-[10px] text-brand-gray-500 mt-0.5">{rj.location} · {rj.mode}</div>
                          </div>
                          <ArrowRight size={13} className="text-brand-gray-400 group-hover:text-brand-red shrink-0 mt-0.5 transition-colors" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/careers#open-roles"
                      className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-red hover:text-brand-red-dark transition-colors"
                    >
                      View all open roles <ArrowRight size={11} />
                    </Link>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── APPLY FORM ──────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}
        id="apply"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-white/50" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
                  Apply
                </span>
              </div>
              <h2
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)' }}
              >
                Apply for
                <br />
                {job.title}
              </h2>
              <p className="text-base text-white/75 leading-relaxed mb-8 max-w-md">
                Every application is reviewed by a real person. You&apos;ll hear from us
                within 3 business days of submitting.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Department', value: job.department },
                  { label: 'Location', value: job.location },
                  { label: 'Work Mode', value: job.mode },
                  { label: 'Compensation', value: job.salary },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-white/12">
                    <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">
                      {item.label}
                    </span>
                    <span className="text-sm text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ApplyForm defaultRole={job.title} />
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  )
}
