import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Zap, BarChart3, RefreshCw } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

const pillars = [
  {
    Icon: ShieldCheck,
    title: 'Operational Reliability',
    description:
      'A 99.2% on-time delivery record across 18,400+ annual shipments. We treat your schedule as the non-negotiable constraint.',
  },
  {
    Icon: Zap,
    title: 'Real-Time Coordination',
    description:
      'Live freight tracking, exception alerts, and proactive communication at every stage. No surprises.',
  },
  {
    Icon: RefreshCw,
    title: 'Scalable Infrastructure',
    description:
      'From 50 shipments a month to 5,000 -- our network scales with your demand without degrading service.',
  },
  {
    Icon: BarChart3,
    title: 'Technology-Driven',
    description:
      'Our integrated TMS/WMS platform provides visibility, analytics, and reporting that transform logistics data into business intelligence.',
  },
  {
    Icon: CheckCircle2,
    title: 'Cost Optimization',
    description:
      'Carrier consolidation, load optimization, and continuous lane analysis reduce freight spend without sacrificing reliability.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop"
                  alt="Modern logistics warehouse operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-black/10" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-brand-red text-white px-8 py-6 shadow-2xl">
                <div className="stat-number text-4xl mb-1">99.2%</div>
                <div className="text-xs font-medium tracking-wider uppercase text-white/70">
                  On-Time Delivery
                </div>
              </div>

              {/* Accent bar */}
              <div className="absolute -top-4 -left-4 w-24 h-2 bg-brand-red" />
            </div>
          </ScrollReveal>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Why Bridge For Freight"
                title="Built for Operations That Cannot Afford Disruption"
                description="We don't offer generic logistics. We build programs around your operational reality -- with the accountability, infrastructure, and expertise to execute at the highest level."
                className="mb-12"
              />
            </ScrollReveal>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 0.07}>
                  <div className="flex gap-5 group">
                    <div className="shrink-0 w-10 h-10 bg-white border border-brand-gray-200 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300">
                      <pillar.Icon
                        size={18}
                        className="text-brand-gray-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-brand-black mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-brand-gray-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
