import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Clock,
  AlertTriangle,
  BarChart3,
  Layers,
  Boxes,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Manufacturing Logistics",
  description:
    "Precision inbound logistics for production continuity. Bridge For Freight builds JIT programs that treat your production schedule as the non-negotiable constraint.",
};

const jitPrinciples = [
  {
    number: "01",
    title: "Production Schedule Integration",
    description:
      "We integrate directly with your production planning system or MRP to receive call-off schedules and build delivery sequences around your actual line requirements — not fixed delivery windows.",
  },
  {
    number: "02",
    title: "Supplier Lead Time Management",
    description:
      "Upstream supplier performance is actively monitored. When a supplier flags a delay, our team responds within the hour — sourcing alternatives, adjusting schedules, and protecting your line.",
  },
  {
    number: "03",
    title: "Inbound Sequencing",
    description:
      "High-frequency, small-batch delivery programs designed to eliminate line-side inventory and deliver components in the sequence they are consumed by production.",
  },
  {
    number: "04",
    title: "Buffer Stock Management",
    description:
      "Strategic buffer stock held at our local facilities eliminates the need for large on-site inventory while providing immediate cover for supply disruption events.",
  },
];

const costOfDowntime = [
  {
    value: "$22,000",
    label: "Average cost per hour",
    context: "of unplanned automotive line downtime",
  },
  {
    value: "68%",
    label: "Of line stoppages",
    context: "are caused by inbound logistics failures",
  },
  {
    value: "4.7 hrs",
    label: "Average recovery time",
    context: "without dedicated logistics escalation",
  },
];

const capabilities = [
  {
    icon: Clock,
    label: "Just-In-Time Programs",
    desc: "Timed delivery schedules synchronized to production call-off, eliminating line-side inventory accumulation.",
  },
  {
    icon: Layers,
    label: "Kanban Support",
    desc: "Physical and electronic Kanban systems supported with dedicated transport loops and minimum-cycle delivery.",
  },
  {
    icon: BarChart3,
    label: "MRP Integration",
    desc: "Direct integration with SAP, Oracle, and custom MRP/ERP systems for automated order generation and tracking.",
  },
  {
    icon: Boxes,
    label: "Inbound Consolidation",
    desc: "Multi-supplier inbound flows consolidated at our facilities before timed delivery to your production gate.",
  },
  {
    icon: AlertTriangle,
    label: "Escalation Protocols",
    desc: "Defined escalation procedures with response SLAs for any supply event that threatens your production schedule.",
  },
  {
    icon: Factory,
    label: "Finished Goods Distribution",
    desc: "Outbound logistics for finished product from manufacturing sites to customers, DCs, and export ports.",
  },
];

export default function ManufacturingLogisticsPage() {
  return (
    <>
      {/* Hero — dark industrial, production-floor aesthetic */}
      <section className="relative bg-brand-charcoal pt-36 pb-0 overflow-hidden min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=75&auto=format&fit=crop"
            alt="Manufacturing production floor"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-charcoal/95 via-brand-charcoal/60 to-brand-charcoal/20" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red z-10" />

        <Container className="relative z-10 pb-0 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-end pb-12 pt-4">
            <div className="lg:col-span-3">
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
                  Manufacturing
                  <br />
                  <span className="text-brand-red">Logistics</span>
                </h1>
                <p className="text-lg text-brand-gray-400 leading-relaxed mb-8 max-w-lg">
                  Manufacturing runs on tight tolerances. A delayed component
                  halts a production line. We build inbound logistics programs
                  that treat your production schedule as the one non-negotiable
                  constraint.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="relative overflow-hidden inline-flex items-center gap-2 bg-brand-red text-white px-8 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                  >
                    <span
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                      }}
                    />
                    Design Your JIT Program
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Downtime cost panel — hidden below lg breakpoint */}
            <div className="hidden lg:block lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div
                  className="relative overflow-hidden p-8"
                  style={{ background: "rgba(193,18,31,0.50)" }}
                >
                  {/* Shine sweep */}
                  <span
                    className="card-shine-sweep absolute inset-y-0 left-0 w-24 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                    }}
                  />
                  <div className="text-[10px] font-bold tracking-widest uppercase text-red-200 mb-5">
                    The Cost of Getting It Wrong
                  </div>
                  <div className="space-y-5">
                    {costOfDowntime.map((item) => (
                      <div
                        key={item.label}
                        className="border-b border-red-700/50 pb-5 last:border-0 last:pb-0"
                      >
                        <div className="font-display font-bold text-white text-2xl tracking-tight">
                          {item.value}
                        </div>
                        <div className="text-sm font-semibold text-red-100 mt-0.5">
                          {item.label}
                        </div>
                        <div className="text-xs text-red-300 mt-0.5">
                          {item.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Key metrics strip — inside hero */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-gray-800 divide-y lg:divide-y-0 border-t border-brand-gray-800 bg-brand-black/60 backdrop-blur-sm">
            {[
              { value: "98.7%", label: "On-time inbound rate" },
              { value: "< 1hr", label: "Supply event response" },
              { value: "340+", label: "Manufacturing clients" },
              { value: "24/7", label: "Operations desk coverage" },
            ].map((m) => (
              <div key={m.label} className="px-8 py-7">
                <div className="font-display font-bold text-2xl text-white tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-brand-gray-500 uppercase tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* JIT program detail */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="JIT Methodology"
              title="Production Schedule Is the Master Document"
              description="Our JIT programs are built from your production schedule out — not from standard delivery windows in. Every decision optimizes for line continuity."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jitPrinciples.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.07}>
                <div className="bg-white border border-brand-gray-200 p-8 hover:border-brand-gray-300 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <span className="font-display font-bold text-3xl text-brand-red/20 leading-none shrink-0">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-brand-black text-base mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-brand-gray-600 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, #8B0D16 0%, #C1121F 55%, #9E0F1A 100%)",
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Capabilities"
                title="Built for Complexity"
                description="Manufacturing logistics is operationally demanding. Our capability set is designed for the complexity of multi-supplier, multi-site, multi-shift production environments."
                light
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.label} className="flex gap-3 items-start">
                      <Icon
                        size={15}
                        className="text-white/80 shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="font-semibold text-white text-xs mb-0.5">
                          {cap.label}
                        </div>
                        <div className="text-xs text-white/65 leading-snug">
                          {cap.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="h-full">
              {/* Thick black offset block — right + bottom */}
              <div className="relative h-full min-h-90 mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-black" />
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&auto=format&fit=crop"
                    alt="Factory logistics operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/10" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="Extend Your Manufacturing Program"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Freight Management",
                href: "/freight-management",
                desc: "Multi-modal inbound freight coordination for your production sites",
              },
              {
                label: "Warehousing & Storage",
                desc: "Buffer stock facilities adjacent to manufacturing locations",
                href: "/warehousing",
              },
              {
                label: "Automotive Logistics",
                href: "/automotive-logistics",
                desc: "Specialist sequencing programs for automotive and OEM manufacturers",
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
