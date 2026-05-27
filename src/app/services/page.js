import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Truck, Warehouse, Network, LineChart, MapPin, Globe } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/sections/home/CTABanner'
import { services } from '@/lib/data/services'

export const metadata = {
  title: 'Services',
  description:
    'End-to-end logistics services: freight management, warehousing, distribution, supply chain optimization, last mile delivery, and cross-border logistics.',
}

const iconMap = { Truck, Warehouse, Network, LineChart, MapPin, Globe }

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-brand-black pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=75&auto=format&fit=crop"
            alt="Freight trucks on highway"
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
                Logistics Services
              </span>
            </div>
            <h1
              className="font-display font-bold text-white leading-tight tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}
            >
              Every Service Your
              <br />
              <span className="text-brand-red">Supply Chain Needs.</span>
            </h1>
            <p className="text-lg text-brand-gray-400 max-w-xl leading-relaxed">
              From single-shipment freight to enterprise-wide logistics programs -- we manage the
              complexity so you can focus on what you produce.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Services nav */}
      <div className="bg-white border-b border-brand-gray-200 sticky top-[72px] z-30">
        <Container>
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="shrink-0 text-xs font-semibold tracking-wide uppercase text-brand-gray-500 hover:text-brand-red px-5 py-4 border-b-2 border-transparent hover:border-brand-red transition-all duration-200"
              >
                {service.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Service sections -- alternating layout */}
      <div className="divide-y divide-brand-gray-100">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Truck
          const isEven = i % 2 === 0

          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-brand-gray-50'}`}
            >
              <Container>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start ${
                    isEven ? '' : 'lg:flex lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <ScrollReveal className={isEven ? '' : 'lg:ml-auto'}>
                    <div className="relative">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-brand-black/10" />
                      </div>
                      {/* Icon badge */}
                      <div className="absolute -bottom-5 left-8 bg-brand-red text-white p-4">
                        <Icon size={22} />
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Content */}
                  <div>
                    <ScrollReveal>
                      <SectionHeader
                        eyebrow={`Service 0${i + 1}`}
                        title={service.title}
                        description={service.description}
                        className="mb-10"
                      />
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                      {/* Benefits */}
                      <ScrollReveal delay={0.08}>
                        <div>
                          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gray-500 mb-4">
                            Key Benefits
                          </h4>
                          <ul className="space-y-3">
                            {service.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-3">
                                <CheckCircle2 size={15} className="text-brand-red shrink-0 mt-0.5" />
                                <span className="text-sm text-brand-gray-700 leading-snug">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ScrollReveal>

                      {/* Process */}
                      <ScrollReveal delay={0.12}>
                        <div>
                          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gray-500 mb-4">
                            Our Process
                          </h4>
                          <ol className="space-y-3">
                            {service.process.map((step, si) => (
                              <li key={step} className="flex items-start gap-3">
                                <span className="text-[10px] font-bold text-brand-red font-display w-5 shrink-0 pt-0.5">
                                  {String(si + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm text-brand-gray-700 leading-snug">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.16}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-brand-red text-white px-7 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                      >
                        Discuss This Service
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
