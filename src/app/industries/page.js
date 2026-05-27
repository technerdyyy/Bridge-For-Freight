import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/sections/home/CTABanner'
import { industries } from '@/lib/data/industries'

export const metadata = {
  title: 'Industries',
  description:
    'Industry-specific logistics programs for retail, manufacturing, automotive, healthcare, e-commerce, and industrial supply operations.',
}

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-brand-black pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1565515636038-f2d01e22a06b?w=1600&q=75&auto=format&fit=crop"
            alt="Industrial manufacturing logistics"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/85 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 w-32 h-1 bg-brand-red" />
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-red" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                Industries
              </span>
            </div>
            <h1
              className="font-display font-bold text-white leading-tight tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}
            >
              Logistics Shaped to
              <br />
              <span className="text-brand-red">Your Industry.</span>
            </h1>
            <p className="text-lg text-brand-gray-400 max-w-xl leading-relaxed">
              Generic logistics programs fail industry-specific requirements. We build programs around
              your sector&apos;s compliance demands, customer expectations, and operational cadence.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Industries nav */}
      <div className="bg-white border-b border-brand-gray-200 sticky top-[72px] z-30">
        <Container>
          <div className="flex items-center gap-0 overflow-x-auto">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="shrink-0 text-xs font-semibold tracking-wide uppercase text-brand-gray-500 hover:text-brand-red px-5 py-4 border-b-2 border-transparent hover:border-brand-red transition-all duration-200"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Industry sections */}
      <div className="divide-y divide-brand-gray-100">
        {industries.map((industry, i) => {
          const isEven = i % 2 === 0

          return (
            <section
              key={industry.id}
              id={industry.id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-brand-gray-50'}`}
            >
              <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start`}>
                  {/* Image -- alternating position */}
                  <ScrollReveal
                    className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                        />
                        <div className="absolute inset-0 bg-brand-black/15" />
                      </div>

                      {/* Stat badge */}
                      <div className="absolute bottom-0 right-0 bg-brand-red text-white px-6 py-5">
                        <div className="stat-number text-2xl mb-0.5">{industry.stat}</div>
                        <div className="text-[10px] font-medium text-white/70 leading-tight max-w-[120px]">
                          {industry.statLabel}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Content */}
                  <div
                    className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <ScrollReveal>
                      <SectionHeader
                        eyebrow={industry.title}
                        title={industry.subtitle}
                        description={industry.description}
                        className="mb-10"
                      />
                    </ScrollReveal>

                    {/* Capabilities */}
                    <ScrollReveal delay={0.08}>
                      <div className="mb-10">
                        <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gray-500 mb-5">
                          Our Capabilities
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {industry.capabilities.map((cap) => (
                            <div key={cap} className="flex items-start gap-3">
                              <CheckCircle2 size={14} className="text-brand-red shrink-0 mt-0.5" />
                              <span className="text-sm text-brand-gray-700 leading-snug">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Insight box */}
                    <ScrollReveal delay={0.12}>
                      <div className="bg-brand-gray-50 border-l-4 border-brand-red p-6 mb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp size={14} className="text-brand-red" />
                          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-red">
                            Industry Insight
                          </span>
                        </div>
                        <p className="text-sm text-brand-gray-700 leading-relaxed">
                          {industry.title === 'Retail' &&
                            'Retail logistics programs that lack surge capacity regularly fail during peak season -- often costing brands 15-30% of potential holiday revenue in lost sales and expedite fees.'}
                          {industry.title === 'Manufacturing' &&
                            'A single unplanned production line stoppage costs an average manufacturer $260,000 per hour. JIT inbound logistics programs are among the most cost-effective insurance available.'}
                          {industry.title === 'Automotive' &&
                            'OEM and tier-1 automotive suppliers operate with sequencing tolerances measured in minutes. A logistics partner that cannot meet those tolerances is a supply chain liability.'}
                          {industry.title === 'Healthcare' &&
                            'GDP compliance in pharmaceutical logistics is non-negotiable -- and increasingly audited. Organizations using non-specialized carriers face growing exposure in product liability and regulatory review.'}
                          {industry.title === 'E-Commerce' &&
                            'Research shows that 87% of consumers will not purchase again from a brand after a late or inaccurate delivery. Last-mile execution is a core retention strategy, not an afterthought.'}
                          {industry.title === 'Industrial Supply' &&
                            'Project cargo logistics failures -- missed windows, permitting delays, or equipment damage -- regularly cause downstream project cost overruns of 2-5x the logistics budget itself.'}
                        </p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.16}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-brand-red text-white px-7 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                      >
                        Build Your {industry.title} Program
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              </Container>
            </section>
          )
        })}
      </div>

      <CTABanner />
    </>
  )
}
