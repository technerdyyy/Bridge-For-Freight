import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FlaskConical, Gauge, TrendingDown, Database } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/sections/home/CTABanner'

export const metadata = {
  title: 'Supply Chain Optimization',
  description:
    'Data-driven supply chain engineering that reduces cost, improves velocity, and eliminates operational drag. Diagnostic frameworks and proven methodology.',
}

const phases = [
  {
    number: '01',
    title: 'Diagnostic Assessment',
    description:
      'We conduct a structured analysis of your current supply chain — mapping flows, identifying cost drivers, benchmarking performance, and surfacing hidden inefficiencies that internal teams miss.',
    duration: '2–3 weeks',
  },
  {
    number: '02',
    title: 'Data Collection & Mapping',
    description:
      'Transactional, operational, and financial data is collected and modeled. We build a complete picture of your supply chain cost-to-serve, vendor performance, and inventory behavior.',
    duration: '1–2 weeks',
  },
  {
    number: '03',
    title: 'Redesign Modeling',
    description:
      'Using simulation and optimization tools, we model alternative network configurations, carrier mixes, and inventory strategies — quantifying the impact of each option before any change is made.',
    duration: '3–4 weeks',
  },
  {
    number: '04',
    title: 'Pilot Implementation',
    description:
      'Selected improvements are implemented in a controlled pilot environment. We measure results against baseline, validate assumptions, and refine the model based on live operational data.',
    duration: '4–8 weeks',
  },
  {
    number: '05',
    title: 'Full Rollout & Governance',
    description:
      'Validated changes are scaled across the full operation. We establish a KPI framework, reporting cadence, and continuous improvement process to sustain and build on initial gains.',
    duration: 'Ongoing',
  },
]

const outcomes = [
  { stat: '18–34%', label: 'Average freight cost reduction', context: 'Across clients in year one' },
  { stat: '2.4×', label: 'Inventory turn improvement', context: 'Post-optimization average' },
  { stat: '94%', label: 'On-time delivery uplift', context: 'From baseline to optimized state' },
  { stat: '60 days', label: 'Time to measurable results', context: 'Pilot to validated outcome' },
]

const whatWeOptimize = [
  'Network design and facility footprint',
  'Carrier mix and contract structure',
  'Inventory positioning and safety stock levels',
  'Vendor lead times and order frequencies',
  'Mode selection and consolidation logic',
  'Transportation lane assignments',
  'Returns and reverse logistics flows',
  'Procurement and sourcing strategies',
]

export default function SupplyChainOptimizationPage() {
  return (
    <>
      {/* Hero — analytical/data aesthetic, dark with grid */}
      <section className="relative bg-brand-black min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(193,18,31,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=75&auto=format&fit=crop"
            alt="Supply chain operations center"
            fill priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-black/75 via-brand-black/55 to-brand-black/90" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                  Service
                </span>
                <span className="block w-8 h-px bg-brand-red" />
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.25rem)' }}
              >
                Supply Chain
                <br />
                <span className="text-brand-red">Optimization</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                Most supply chains operate with 20–35% unnecessary cost built in. We find it,
                model the fix, prove the outcome, and implement the change — with data, not guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 h-14 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors duration-200 group"
                >
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                  />
                  Request a Quote
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Outcome stats within hero */}
        <Container className="relative z-10 mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gray-800/50">
            {outcomes.map((o) => (
              <div key={o.label} className="bg-brand-black/60 px-8 py-7 text-center">
                <div className="font-display font-bold text-3xl text-brand-red tracking-tight mb-1">{o.stat}</div>
                <div className="text-xs font-semibold text-white mb-1">{o.label}</div>
                <div className="text-[10px] text-brand-gray-600">{o.context}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we optimize */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Scope of Work"
                title="Every Layer of Your Supply Chain"
                description="Supply chain optimization is not a single-dimension exercise. We work across network, procurement, inventory, and transportation simultaneously."
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {whatWeOptimize.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-brand-gray-100 last:border-0">
                    <CheckCircle2 size={13} className="text-brand-red shrink-0" />
                    <span className="text-sm text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-red" />
                <div className="relative">
                  <div className="aspect-4/3 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop"
                      alt="Supply chain data analysis"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-brand-black/15" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white border border-brand-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingDown size={16} className="text-brand-red" />
                      <span className="font-display font-bold text-brand-black text-sm">Typical cost reduction</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-brand-red">18–34%</div>
                    <div className="text-xs text-brand-gray-500 mt-0.5">In year one across client portfolio</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Why choose us for SCO */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Our Advantage"
                title="Operators Who Optimize — Not Just Consultants"
                description="Unlike advisory firms who hand over a report, we implement the changes ourselves. Our team has operated the systems they optimize."
                light
              />
              <div className="mt-8 space-y-5">
                {[
                  { icon: Database, title: 'Data-First Methodology', desc: 'Every recommendation is built on operational data, not assumptions or benchmarks alone.' },
                  { icon: FlaskConical, title: 'Pilot Before Scale', desc: 'We prove each change works in a controlled pilot before full rollout — zero-risk deployment.' },
                  { icon: Gauge, title: 'Operator-Grade Execution', desc: 'Our team includes former logistics operations leaders who have implemented change at scale.' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-9 h-9 border border-white/30 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-white/65 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/40 text-white px-8 h-14 font-semibold text-sm tracking-wide hover:border-white/70 hover:bg-white/10 transition-all duration-200 group"
                >
                  Start Your Optimization
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden bg-white/10 border border-white/20 p-8">
                {/* Persistent shine sweep */}
                <div
                  className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                />
                <blockquote className="text-base text-white/85 leading-relaxed mb-6 italic">
                  &ldquo;Bridge For Freight reduced our total logistics spend by 26% in twelve months while
                  improving our carrier on-time performance from 81% to 97%. They didn&apos;t just find the
                  savings — they implemented everything.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-black/40 border border-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xs">VP</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">VP Supply Chain</div>
                    <div className="text-xs text-white/55">Fortune 500 Consumer Goods Company</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Methodology phases */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Methodology"
              title="A Structured Path to Measurable Outcomes"
              description="Our optimization methodology is built on a five-phase framework that moves from diagnosis to full implementation — with measurable proof of value at every gate."
              align="center"
              className="mb-16 mx-auto"
            />
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-13 left-[10%] right-[10%] h-px bg-brand-gray-200" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {phases.map((phase, i) => (
                <ScrollReveal key={phase.number} delay={i * 0.08}>
                  <div className="relative">
                    <div className="w-14 h-14 bg-white border-2 border-brand-gray-200 flex items-center justify-center mx-auto lg:mx-0 mb-6 relative z-10">
                      <span className="font-display font-bold text-sm text-brand-red">{phase.number}</span>
                    </div>
                    <h4 className="font-display font-bold text-brand-black text-sm mb-2 text-center lg:text-left">{phase.title}</h4>
                    <p className="text-xs text-brand-gray-600 leading-relaxed mb-3 text-center lg:text-left">{phase.description}</p>
                    <span className="block text-[10px] font-bold text-brand-red uppercase tracking-wide text-center lg:text-left">{phase.duration}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
