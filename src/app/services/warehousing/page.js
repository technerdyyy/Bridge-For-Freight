import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Package, Thermometer, LayoutGrid, RefreshCw, ClipboardList, Boxes } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/sections/home/CTABanner'

export const metadata = {
  title: 'Warehousing & Storage',
  description:
    'Strategically located warehouse facilities with WMS-driven inventory control and fulfillment precision. Bonded, temperature-controlled, and open storage options.',
}

const facilityTypes = [
  {
    title: 'Open Storage',
    description:
      'High-bay racking and bulk storage for ambient goods. Optimized slotting based on pick frequency and velocity.',
    specs: ['Up to 36ft clear height', 'Standard and narrow-aisle racking', 'Bulk floor storage available'],
  },
  {
    title: 'Bonded Warehouse',
    description:
      'Customs-approved bonded facilities for imported goods awaiting duty payment or re-export clearance.',
    specs: ['Customs authority certified', 'Full chain-of-custody documentation', 'Duty suspension on stored goods'],
  },
  {
    title: 'Temperature-Controlled',
    description:
      'Refrigerated and frozen chambers with continuous monitoring for food, pharma, and sensitive products.',
    specs: ['2°C to 25°C controlled zones', '24/7 temperature monitoring', 'Cold chain integrity reporting'],
  },
]

const valueAdded = [
  { icon: Package, label: 'Kitting & Assembly', description: 'Bundle multiple SKUs into finished pack configurations ready for dispatch.' },
  { icon: ClipboardList, label: 'Quality Inspection', description: 'Inbound and outbound QC checks with defect documentation and rejection handling.' },
  { icon: RefreshCw, label: 'Returns Processing', description: 'Graded returns evaluation, restocking, repackaging, and disposition reporting.' },
  { icon: LayoutGrid, label: 'Pick & Pack', description: 'Order-level picking with custom pack materials, labeling, and insert management.' },
  { icon: Boxes, label: 'Repackaging', description: 'Re-labeling, re-boxing, and reconfiguration to meet customer or channel requirements.' },
  { icon: Thermometer, label: 'Cold Chain Handling', description: 'Certified temperature-controlled pick and pack for sensitive product categories.' },
]

const wmsFeatures = [
  'Real-time inventory visibility across all locations',
  'FIFO, FEFO, and LIFO picking logic',
  'Lot, batch, and serial number tracking',
  'Automated replenishment triggers',
  'Integration with your ERP or OMS',
  'Cycle count and full stocktake management',
  'Multi-client inventory segregation',
  'Inbound ASN receiving and variance reporting',
]

export default function WarehousingPage() {
  return (
    <>
      {/* Hero — 50/50 split with dark left panel + full-height image */}
      <section className="relative min-h-screen flex">
        {/* Left content panel */}
        <div className="relative z-10 bg-brand-charcoal w-full lg:w-1/2 flex items-center pt-36 pb-20 lg:pt-28 lg:pb-20">
          <div className="px-8 md:px-12 lg:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] max-w-2xl lg:max-w-none">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                  Service
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
              >
                Warehousing &amp;
                <br />
                <span className="text-brand-red">Storage</span>
              </h1>
              <p className="text-base text-brand-gray-400 leading-relaxed mb-8 max-w-md">
                Strategically located facilities powered by WMS technology. Whether you need
                bonded storage, temperature-controlled chambers, or high-velocity fulfillment —
                we have the infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Facility specs row */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-brand-gray-800 pt-8">
              {[
                { value: '4.2M', label: 'sq ft under management' },
                { value: '18', label: 'Strategic locations' },
                { value: '99.7%', label: 'Inventory accuracy' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl text-white tracking-tight">{s.value}</div>
                  <div className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image panel */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&auto=format&fit=crop"
            alt="Modern warehouse interior"
            fill priority
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-brand-black/20" />
        </div>
      </section>

      {/* Facility types */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Facility Types"
              title="Storage Solutions for Every Product Category"
              description="From ambient bulk to bonded and cold chain — our facility network covers the full spectrum of warehousing requirements."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilityTypes.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="bg-white border border-brand-gray-200 p-8 h-full">
                  <div className="w-px h-8 bg-brand-red mb-6" />
                  <h3 className="font-display font-bold text-brand-black text-lg mb-3">{f.title}</h3>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-6">{f.description}</p>
                  <ul className="space-y-2">
                    {f.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs text-brand-gray-700">
                        <span className="w-1 h-1 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WMS capabilities */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="WMS Technology"
                title="Inventory Precision Powered by Technology"
                description="Our Warehouse Management System gives you complete, real-time visibility into every pallet, every SKU, and every movement within our facilities."
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {wmsFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 py-2.5 border-b border-brand-gray-100 last:border-0">
                    <CheckCircle2 size={13} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="text-xs text-brand-gray-700 leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-red" />
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop"
                    alt="Warehouse management system in use"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-brand-black/60 to-transparent p-6">
                    <span className="text-xs text-white/80 font-medium">WMS-Integrated Operations</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Value-added services */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}>
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Value-Added Services"
              title="More Than Storage — A Full Fulfillment Operation"
              description="Every facility in our network provides a comprehensive suite of value-added services to extend what your warehouse can do."
              className="mb-14"
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueAdded.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.label} delay={i * 0.06}>
                  <div className="relative overflow-hidden flex gap-4 p-6 bg-white/10 border border-white/20 hover:border-white/40 transition-colors">
                    <div
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                    />
                    <div className="w-9 h-9 bg-white/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-sm mb-1">{item.label}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader eyebrow="Related Services" title="Complete Your Supply Chain" className="mb-10" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Distribution', href: '/distribution', desc: 'Move goods from our facilities through your distribution network' },
              { label: 'Last Mile Delivery', href: '/last-mile-delivery', desc: 'Final delivery from our DC to your end customers' },
              { label: 'Freight Management', href: '/freight-management', desc: 'Inbound freight coordination to your storage locations' },
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
