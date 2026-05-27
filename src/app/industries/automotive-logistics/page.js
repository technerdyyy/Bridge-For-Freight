import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  ScanLine,
  ShieldCheck,
  Gauge,
  Repeat2,
  Wrench,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Automotive Logistics",
  description:
    "Sequenced logistics for complex automotive supply chains. Line-side delivery, zero-defect component handling, and the documentation to match.",
};

const precisionMetrics = [
  {
    value: "99.4%",
    label: "Sequencing accuracy",
    sub: "Across tier-1 automotive clients",
  },
  {
    value: "< 15min",
    label: "Line-side delivery window",
    sub: "Tolerance on JIS programs",
  },
  {
    value: "Zero",
    label: "Line stoppages",
    sub: "Attributable to our operations in 2024",
  },
  {
    value: "ISO/IATF",
    label: "Operational standards",
    sub: "Full automotive quality compliance",
  },
];

const sequencingCapabilities = [
  {
    title: "JIS Delivery (Just-In-Sequence)",
    description:
      "Components delivered to the production line in the exact sequence they will be fitted. Preparation at our sequencing center with documented delivery order matching production run.",
    standard: "JIS/JIT Standard",
  },
  {
    title: "JIT Inbound Programs",
    description:
      "High-frequency timed deliveries coordinated to production call-off schedules. Buffer inventory managed at our nearby facilities to absorb demand variation without line exposure.",
    standard: "JIT Standard",
  },
  {
    title: "Line-Side Management",
    description:
      "Dedicated driver and vehicle teams managing line-side delivery to production bays. Real-time coordination with line managers on sequence changes, volume adjustments, and shift events.",
    standard: "Dock & Line Protocol",
  },
  {
    title: "Quality Gate Support",
    description:
      "First-article and in-process inspection support at our facilities before components enter the production supply chain. Non-conformance documentation and rejection quarantine.",
    standard: "PPAP / APQP",
  },
];

const traceabilityFeatures = [
  "Lot and batch number capture at receipt",
  "Serial number tracking through supply chain",
  "FIFO / FEFO picking enforcement",
  "Full chain-of-custody documentation per shipment",
  "Non-conformance event logging and escalation",
  "Integration with OEM traceability platforms",
  "Component history reports on demand",
  "Recall and containment support protocols",
];

export default function AutomotiveLogisticsPage() {
  return (
    <>
      {/* Hero — premium dark/charcoal, automotive imagery */}
      <section className="relative bg-brand-black pt-36 pb-0 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=75&auto=format&fit=crop"
            alt="Automotive production line"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black/98 via-brand-black/80 to-brand-black/20" />
        </div>
        {/* Precision accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
        <div className="absolute bottom-0 left-0 w-64 h-px bg-brand-red/40" />

        <Container className="relative z-10 pb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                  Industry
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)" }}
              >
                Automotive
                <br />
                <span className="text-brand-red">Logistics</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-xl">
                Automotive logistics demands precision sequencing, line-side
                delivery, and zero-defect handling of high-value components. We
                operate to automotive production standards — with the
                traceability and documentation that OEMs require.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-brand-red text-white px-8 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                >
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                  />
                  Build Your Automotive Program
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Precision metrics — inside hero, within screen width */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-t border-brand-gray-800 bg-brand-gray-900/60 divide-y lg:divide-y-0 lg:divide-x divide-brand-gray-800">
            {precisionMetrics.map((m) => (
              <div key={m.label} className="px-8 py-8 text-center">
                <div className="font-display font-bold text-2xl lg:text-3xl text-white tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-brand-gray-300 mb-0.5">
                  {m.label}
                </div>
                <div className="text-[10px] text-brand-gray-600">{m.sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sequencing capabilities */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Sequencing Programs"
              title="The Precision Automotive Supply Chains Demand"
              description="Automotive OEMs and tier-1 suppliers operate to sequencing standards that require specialized logistics capability. We have built those capabilities from the ground up."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sequencingCapabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.07}>
                <div className="p-8 border border-brand-gray-200 hover:border-brand-gray-300 transition-colors h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display font-bold text-brand-black text-base">
                      {cap.title}
                    </h3>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-red bg-brand-red/10 px-2 py-1 shrink-0">
                      {cap.standard}
                    </span>
                  </div>
                  <p className="text-sm text-brand-gray-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Traceability */}
      <section className="section-padding bg-brand-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <ScrollReveal className="flex flex-col justify-center">
              <SectionHeader
                eyebrow="Traceability"
                title="Every Component. Every Movement. Documented."
                description="Automotive quality standards require full traceability across the supply chain. Our systems capture, record, and report on every material movement — from supplier to production line."
                light
                className="mb-8"
              />
              <div className="space-y-0">
                {traceabilityFeatures.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0"
                  >
                    <ScanLine size={13} className="text-brand-red shrink-0" />
                    <span className="text-sm text-white/80">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="h-full">
              <div className="relative h-full min-h-[400px] mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-red" />
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80&auto=format&fit=crop"
                    alt="Automotive components in controlled storage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/15" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Aftermarket + standards */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)",
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal className="lg:col-span-1 flex flex-col gap-8">
              <SectionHeader
                eyebrow="Standards & Compliance"
                title="We Operate to Your Quality System"
                description="Our operations are audited and certified to automotive industry quality and logistics standards."
                light
              />
              <div>
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-white text-brand-red px-7 h-12 font-semibold text-sm tracking-wide hover:bg-brand-gray-100 transition-colors group"
                >
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                    }}
                  />
                  Discuss Compliance
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "IATF 16949 Aware",
                  desc: "Operations aligned to automotive quality management standard requirements.",
                },
                {
                  icon: Gauge,
                  title: "PPAP Support",
                  desc: "Production Part Approval Process documentation support for new component launches.",
                },
                {
                  icon: ScanLine,
                  title: "APQP Integration",
                  desc: "Advanced Product Quality Planning logistics involvement from concept to production.",
                },
                {
                  icon: Repeat2,
                  title: "AIAG Compliance",
                  desc: "Container management, labeling, and EDI protocols aligned to AIAG standards.",
                },
                {
                  icon: Wrench,
                  title: "Aftermarket Division",
                  desc: "Dedicated aftermarket parts distribution program for service and replacement parts networks.",
                },
                {
                  icon: Car,
                  title: "OEM Relations",
                  desc: "Active logistics partnerships with tier-1 suppliers to 8 major automotive OEMs.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title}>
                    <div className="relative overflow-hidden flex gap-3 p-5 bg-white/10 border border-white/20 hover:border-white/40 transition-all">
                      <div
                        className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                        }}
                      />
                      <Icon
                        size={16}
                        className="text-white shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="font-semibold text-white text-xs mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/70 leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="Programs for Manufacturing Operations"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Manufacturing Logistics",
                href: "/industries/manufacturing-logistics",
                desc: "JIT inbound programs for production continuity",
              },
              {
                label: "Warehousing & Storage",
                href: "/services/warehousing",
                desc: "Sequencing centers and buffer stock facilities",
              },
              {
                label: "Freight Management",
                href: "/services/freight-management",
                desc: "Multi-modal freight for healthcare supply chains",
              },
            ].map((item) => (
              <ScrollReveal key={item.href}>
                <Link href={item.href} className="group block card-premium p-7">
                  <h4 className="font-display font-bold text-brand-black text-sm mb-2 group-hover:text-brand-red transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-brand-gray-500 mb-4">
                    {item.desc}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-brand-red">
                    Learn more{" "}
                    <ArrowRight
                      size={11}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
