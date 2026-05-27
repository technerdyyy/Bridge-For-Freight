import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  Zap,
  Users,
  DollarSign,
  BookOpen,
  Clock,
  Award,
  Sun,
  Heart,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import JobListings from '@/components/sections/careers/JobListings'
import CareersFaq from '@/components/sections/careers/CareersFaq'
import ApplyForm from '@/components/sections/careers/ApplyForm'
import { hiringSteps, cultureValues, benefits } from '@/lib/data/careers'

export const metadata = {
  title: 'Careers — Build the Future of Freight',
  description:
    'Join a team that operates global supply chains for the world\'s most demanding industries. We\'re looking for ambitious, precise, and driven professionals.',
}

const benefitIcons = {
  dollar: DollarSign,
  trending: TrendingUp,
  heart: Heart,
  book: BookOpen,
  clock: Clock,
  award: Award,
  sun: Sun,
  users: Users,
}

const heroMetrics = [
  { value: '280+', label: 'Team Members' },
  { value: '12', label: 'Countries' },
  { value: 'Fortune 500', label: 'Client Partners' },
  { value: '97%', label: 'Team Retention' },
]

const whyWorkHere = [
  {
    icon: Zap,
    title: 'Operate at Real Scale',
    desc: 'You\'ll work on programs that move millions of tonnes of freight annually for some of the world\'s most complex supply chains — not sandbox simulations.',
  },
  {
    icon: TrendingUp,
    title: 'Career Paths That Move',
    desc: 'Structured promotion frameworks, quarterly performance reviews, and a culture that fills senior roles from within. Ambition isn\'t just tolerated here — it\'s expected.',
  },
  {
    icon: Globe,
    title: 'Technology-First Operations',
    desc: 'Modern TMS platforms, real-time analytics, carrier API integrations, and a dedicated technology team building the tools that run our operations.',
  },
  {
    icon: Users,
    title: 'Enterprise Impact',
    desc: 'Work directly with procurement, supply chain, and operations leaders at Fortune 500 companies on mission-critical logistics programs.',
  },
]

export default function CareersPage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-black min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80&auto=format&fit=crop"
            alt="Bridge For Freight operations command center"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black/95 via-brand-black/70 to-brand-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-brand-black/40" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center pt-36 pb-10">
          <Container>
            <div className="max-w-3xl">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-px bg-brand-red" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                    Careers
                  </span>
                </div>
                <h1
                  className="font-display font-bold text-white leading-[1.0] tracking-tight mb-6"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
                >
                  Build the Future
                  <br />
                  <span className="text-brand-red">of Freight.</span>
                </h1>
                <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-2xl">
                  We run supply chains where a missed window costs $22,000 per hour.
                  We work with the people who understand exactly what that means — and
                  choose to show up anyway. Join a team that moves the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#open-roles"
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 h-14 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors duration-200 group"
                  >
                    <span
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                    />
                    View Open Roles
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#culture"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 h-14 font-semibold text-sm tracking-wide hover:border-white/60 hover:bg-white/8 transition-all duration-200"
                  >
                    Our Culture
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </div>

        {/* Metrics bar */}
        <div className="relative z-10 border-t border-white/10 bg-brand-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0">
              {heroMetrics.map((m) => (
                <div key={m.label} className="px-8 py-7">
                  <div className="font-display font-bold text-3xl text-white tracking-tight mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-xs text-brand-gray-400 uppercase tracking-wide">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ─── JOB LISTINGS (CLIENT COMPONENT) ─────────────────────────────── */}
      <JobListings />

      {/* ─── WHY WORK WITH US ──────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #8B0D16 0%, #C1121F 55%, #9E0F1A 100%)' }}
      >
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Bridge For Freight"
              title="Where Ambitious People Do Their Best Work"
              description="We don't offer ping pong tables and cold brew. We offer real operational scale, genuine career growth, and work that actually matters."
              light
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyWorkHere.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="group relative overflow-hidden flex gap-5 p-8 border border-white/20 hover:border-white/50 bg-white/8 hover:bg-white/12 transition-all duration-300">
                    {/* Shine sweep */}
                    <span
                      className="card-shine-sweep absolute inset-y-0 left-0 w-20 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
                        animationDelay: `${i * 0.75}s`,
                      }}
                    />
                    <div className="w-12 h-12 bg-white/20 group-hover:bg-white flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon size={20} className="text-white group-hover:text-brand-red transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─── CULTURE ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-black overflow-hidden" id="culture">
        {cultureValues.map((val, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={val.title}
              className="section-padding border-b border-white/8 last:border-0"
            >
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <ScrollReveal className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="block w-8 h-px bg-brand-red" />
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                        Culture
                      </span>
                    </div>
                    <h3
                      className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
                    >
                      {val.title}
                    </h3>
                    <p className="text-base text-brand-gray-400 leading-relaxed mb-8 max-w-lg">
                      {val.desc}
                    </p>
                    <div className="inline-block border border-brand-gray-800 px-6 py-4">
                      <div className="font-display font-bold text-2xl text-brand-red tracking-tight">
                        {val.stat.value}
                      </div>
                      <div className="text-[10px] text-brand-gray-500 uppercase tracking-widest mt-0.5">
                        {val.stat.label}
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1} className={!isEven ? 'lg:order-1' : ''}>
                    <div className={`relative ${isEven ? 'mr-4 mb-4' : 'ml-4 mb-4'}`}>
                      {/* Red border frame — behind the image, no fill */}
                      <div
                        className={`absolute inset-0 border-2 border-brand-red z-0 ${
                          isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'
                        }`}
                      />
                      <div className="relative aspect-[4/3] overflow-hidden z-10">
                        <Image
                          src={val.image}
                          alt={val.imageAlt}
                          fill
                          className="object-cover opacity-80"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-brand-black/20" />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </Container>
            </div>
          )
        })}
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Benefits & Perks"
              title="We Invest in the People Who Drive Us Forward"
              description="Competitive compensation and a comprehensive benefits package designed for the people who run elite logistics operations."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[b.icon] || Zap
              return (
                <ScrollReveal key={b.title} delay={i * 0.05}>
                  <div className="group bg-white border border-brand-gray-200 p-6 hover:border-brand-gray-400 hover:shadow-sm transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-brand-gray-100 group-hover:bg-brand-red flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon size={17} className="text-brand-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-display font-bold text-brand-black text-sm mb-2">
                      {b.title}
                    </h4>
                    <p className="text-xs text-brand-gray-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─── HIRING PROCESS ───────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-charcoal">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Hiring Process"
              title="Clear, Fast, and Respectful of Your Time"
              description="We don't run 8-round interviews. We run a focused, transparent process that respects your time and gets to the right answer quickly."
              light
              className="mb-14"
            />
          </ScrollReveal>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block relative mb-12">
            <div className="absolute top-[22px] left-[calc(100%/10)] right-[calc(100%/10)] h-px bg-white/15" />
            <div className="grid grid-cols-5 gap-6">
              {hiringSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-11 h-11 bg-brand-red flex items-center justify-center mb-5 shrink-0">
                      <span className="font-display font-bold text-white text-xs">
                        {step.step}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-gray-500 mb-1">
                      {step.time}
                    </span>
                    <h4 className="font-display font-bold text-white text-sm mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-brand-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stacked */}
          <div className="lg:hidden relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/15" />
            <div className="space-y-8">
              {hiringSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.06}>
                  <div className="relative flex gap-5 pl-0">
                    <div className="relative z-10 w-11 h-11 bg-brand-red flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-white text-xs">
                        {step.step}
                      </span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[9px] font-bold tracking-widest uppercase text-brand-gray-500 block mb-0.5">
                        {step.time}
                      </span>
                      <h4 className="font-display font-bold text-white text-sm mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-brand-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FAQ ACCORDION (CLIENT COMPONENT) ────────────────────────────── */}
      <CareersFaq />

      {/* ─── APPLY SECTION ────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}
        id="apply"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left: copy */}
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-white/50" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
                  General Application
                </span>
              </div>
              <h2
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Don&apos;t See Your Role?
                <br />
                Apply Anyway.
              </h2>
              <p className="text-base text-white/75 leading-relaxed mb-8 max-w-md">
                We hire for talent and mindset, not just open headcount. If you
                believe you belong at Bridge For Freight, send us your details —
                we review every speculative application personally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Every application reviewed by a real person',
                  'Response within 3 business days',
                  'Your data is kept confidential',
                  'Considered for future openings automatically',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 size={14} className="text-white/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/15 pt-8">
                <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-3">
                  Or explore open roles
                </p>
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/40 pb-0.5 hover:border-white/80 transition-colors"
                >
                  View all open positions <ArrowRight size={13} />
                </a>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal delay={0.1}>
              <ApplyForm />
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  )
}
