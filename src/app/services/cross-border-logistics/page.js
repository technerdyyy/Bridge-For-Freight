import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, FileText, Shield, Banknote, Languages, Package } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/sections/home/CTABanner'

export const metadata = {
  title: 'Cross Border Logistics',
  description:
    'Seamless international freight movement with full customs management and regulatory compliance. Simplify cross-border complexity into smooth, predictable movements.',
}

const tradeLanes = [
  {
    region: 'Asia Pacific',
    countries: ['China', 'Japan', 'South Korea', 'Singapore', 'Australia', 'India'],
    description: 'High-frequency ocean and air freight lanes with bonded warehouse facilities at key port gateways.',
  },
  {
    region: 'Europe',
    countries: ['Germany', 'France', 'Netherlands', 'Poland', 'Spain', 'Italy'],
    description: 'EU and non-EU import/export programs covering road, short-sea, and air modalities with Brexit-compliant customs protocols.',
  },
  {
    region: 'Americas',
    countries: ['USA', 'Canada', 'Mexico', 'Brazil', 'Colombia', 'Chile'],
    description: 'USMCA-optimized trans-border programs with Customs Trade Partnership Against Terrorism (CTPAT) certified operations.',
  },
  {
    region: 'Middle East & Africa',
    countries: ['UAE', 'Saudi Arabia', 'South Africa', 'Kenya', 'Egypt', 'Nigeria'],
    description: 'Specialized import/export handling for emerging market lanes with local customs expertise and in-country agents.',
  },
]

const customsProcess = [
  {
    step: '01',
    title: 'Export Documentation',
    description: 'Commercial invoices, packing lists, certificates of origin, and export declarations prepared and reviewed by our licensed customs brokers.',
  },
  {
    step: '02',
    title: 'HS Code Classification',
    description: 'Harmonized System code assignment and duty rate analysis performed by specialists to ensure accurate classification and minimize duty exposure.',
  },
  {
    step: '03',
    title: 'Customs Filing',
    description: 'Electronic customs declarations filed through accredited direct trader input systems. EORI registration and AEO authorization managed on your behalf.',
  },
  {
    step: '04',
    title: 'Border Coordination',
    description: 'Active management of border crossing appointments, inspection schedules, and carrier handovers to eliminate dwell time and border delays.',
  },
  {
    step: '05',
    title: 'Import Clearance',
    description: 'Destination customs clearance including duty payment, import VAT handling, regulatory compliance checks, and release notification.',
  },
]

const complianceCapabilities = [
  'Licensed customs brokerage (multiple jurisdictions)',
  'AEO / CTPAT authorized economic operator status',
  'Trade sanctions and denied party screening',
  'Dual-use goods and export control compliance',
  'Phytosanitary and product certification management',
  'Free Trade Agreement (FTA) preferential origin management',
  'Drawback and duty relief scheme administration',
  'In-country customs agent network (47 countries)',
]

export default function CrossBorderLogisticsPage() {
  return (
    <>
      {/* Hero — aerial/port imagery, global aesthetic */}
      <section className="relative bg-brand-black pt-36 pb-28 overflow-hidden min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=1600&q=75&auto=format&fit=crop"
            alt="Aerial view of container port"
            fill priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black/95 via-brand-black/70 to-brand-black/30" />
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-linear-to-l from-brand-black/60 to-transparent" />

        <Container className="relative z-10 pb-4">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">Service</span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)' }}
              >
                Cross Border
                <br />
                <span className="text-brand-red">Logistics</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-xl">
                Moving goods across borders requires expertise in trade compliance, customs
                documentation, and international carrier networks. We turn cross-border complexity
                into smooth, predictable, documented movements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 border-t border-brand-gray-800 pt-8">
                {[
                  { value: '47', label: 'Countries covered' },
                  { value: '120+', label: 'Customs brokers & agents' },
                  { value: '99.6%', label: 'Clearance success rate' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-white tracking-tight">{s.value}</div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Trade lanes */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Global Coverage"
              title="Active Trade Lanes Across Four Continents"
              description="Our international logistics network spans the world's most critical trade corridors — with in-country customs expertise in each region."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeLanes.map((lane, i) => (
              <ScrollReveal key={lane.region} delay={i * 0.07}>
                <div className="bg-white border border-brand-gray-200 p-8 h-full hover:border-brand-gray-300 transition-colors">
                  <div className="flex items-start gap-3 mb-4">
                    <Globe size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <h3 className="font-display font-bold text-brand-black text-base">{lane.region}</h3>
                  </div>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-5">{lane.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {lane.countries.map((c) => (
                      <span key={c} className="text-[10px] font-semibold bg-brand-gray-100 text-brand-gray-600 px-2.5 py-1 uppercase tracking-wide">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Customs process */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Customs Process"
                title="Every Document. Every Declaration. Handled."
                description="Customs clearance failure is one of the leading causes of supply chain disruption. Our licensed brokers ensure every shipment clears — first time."
                className="mb-10"
              />
              <div className="relative">
                <div className="absolute left-[21px] top-0 bottom-0 w-px bg-brand-gray-200" />
                <div className="space-y-8">
                  {customsProcess.map((step) => (
                    <div key={step.step} className="relative flex gap-5">
                      <div className="relative z-10 w-11 h-11 bg-brand-red flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-xs text-white">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-black text-sm mb-1.5">{step.title}</h4>
                        <p className="text-sm text-brand-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="relative mr-4 mb-4">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-red" />
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80&auto=format&fit=crop"
                      alt="Customs documentation and cargo handling"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-brand-black/15" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="bg-brand-gray-50 border border-brand-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={14} className="text-brand-red" />
                    <span className="text-xs font-bold tracking-wide uppercase text-brand-black">Trade Compliance</span>
                  </div>
                  <ul className="space-y-2">
                    {complianceCapabilities.slice(0, 5).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-brand-gray-700">
                        <CheckCircle2 size={12} className="text-brand-red shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance capabilities */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Regulatory Compliance"
                title="Licensed. Certified. Compliant."
                description="Our customs and trade compliance team holds active licenses and certifications across the jurisdictions we operate in."
                light
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: FileText, label: 'Licensed Customs Brokers', desc: 'Active broker licenses across 14 jurisdictions' },
                  { icon: Shield, label: 'AEO Authorized', desc: 'Authorized Economic Operator across EU and UK' },
                  { icon: Globe, label: 'CTPAT Certified', desc: 'US Customs Trade Partnership certified' },
                  { icon: Banknote, label: 'Duty Optimization', desc: 'FTA preference, drawback, and IP relief schemes' },
                  { icon: Languages, label: 'Multi-Language', desc: 'Documentation in 12 languages' },
                  { icon: Package, label: 'Bonded Carrier', desc: 'In-transit bonded movement authority in 23 countries' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="relative overflow-hidden flex gap-3 p-4 border border-white/20 hover:border-white/35 transition-colors">
                      <div
                        className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                      />
                      <Icon size={15} className="text-white shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white text-xs mb-0.5">{item.label}</div>
                        <div className="text-[10px] text-white/60">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-black" />
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=900&q=80&auto=format&fit=crop"
                    alt="Container port operations"
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
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader eyebrow="Related Services" title="Build the Complete Program" className="mb-10" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Freight Management', href: '/freight-management', desc: 'Multi-modal freight coordination for your international lanes' },
              { label: 'Warehousing & Storage', href: '/warehousing', desc: 'Bonded storage and deferred duty solutions' },
              { label: 'Supply Chain Optimization', href: '/supply-chain-optimization', desc: 'Optimize total landed cost across your import programs' },
            ].map((item) => (
              <ScrollReveal key={item.href}>
                <Link href={item.href} className="group block card-premium p-7">
                  <h4 className="font-display font-bold text-brand-black text-sm mb-2 group-hover:text-brand-red transition-colors">{item.label}</h4>
                  <p className="text-xs text-brand-gray-500 mb-4">{item.desc}</p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-brand-red">
                    Learn more <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
