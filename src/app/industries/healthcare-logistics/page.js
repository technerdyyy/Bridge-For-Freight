import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Thermometer,
  ShieldCheck,
  FileText,
  Activity,
  HeartPulse,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Healthcare Logistics",
  description:
    "Temperature-controlled, GDP-compliant medical logistics. Certified cold chain, regulatory adherence, and absolute reliability for pharma, medical devices, and healthcare supplies.",
};

const temperatureZones = [
  {
    zone: "Deep Frozen",
    range: "−25°C to −15°C",
    desc: "Advanced biologics, certain vaccines, plasma products",
  },
  {
    zone: "Frozen",
    range: "−20°C to −15°C",
    desc: "Biologics, live vaccines, frozen pharmaceuticals",
  },
  {
    zone: "Refrigerated",
    range: "+2°C to +8°C",
    desc: "Temperature-sensitive pharmaceuticals, blood products, insulin",
  },
  {
    zone: "Controlled Ambient",
    range: "+15°C to +25°C",
    desc: "Many oral pharmaceuticals, OTC products, medical devices",
  },
];

const regulatoryFramework = [
  {
    standard: "EU GDP",
    description:
      "Full compliance with EU Guidelines for Good Distribution Practice (2013/C 343/01) across all pharmaceutical distribution activities.",
    icon: ShieldCheck,
  },
  {
    standard: "WHO GDP",
    description:
      "WHO Technical Report Series 957 Annex 5 compliance for international pharmaceutical supply chains.",
    icon: Activity,
  },
  {
    standard: "GDP-W (Wholesale)",
    description:
      "Wholesale dealer authorization across applicable jurisdictions with qualified persons responsible designated for each facility.",
    icon: FileText,
  },
  {
    standard: "ISO 13485",
    description:
      "Quality management for medical device logistics operations — covering storage, handling, and distribution of medical devices.",
    icon: HeartPulse,
  },
];

const capabilities = [
  "GDP-compliant temperature-controlled transport",
  "Continuous data logger monitoring — 24/7 alerts",
  "Qualified Person Responsible for distribution",
  "Controlled substance handling under DEA/MHRA protocols",
  "Chain-of-custody documentation for every move",
  "Hospital and clinic direct delivery with security protocols",
  "Reverse logistics and pharmaceutical recall management",
  "Serialization and track-and-trace compliance",
  "Temperature excursion response and impact assessment",
  "Vendor qualification and approved supplier management",
];

export default function HealthcareLogisticsPage() {
  return (
    <>
      {/* Hero — clean, clinical, white/light gray aesthetic (deliberately different) */}
      <section className="relative bg-brand-gray-50 pt-40 pb-24 overflow-hidden border-b border-brand-gray-200 min-h-screen flex items-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#C1121F 1px, transparent 1px), linear-gradient(90deg, #C1121F 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                  Industry
                </span>
              </div>
              <h1
                className="font-display font-bold text-brand-black leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)" }}
              >
                Healthcare
                <br />
                <span className="text-brand-red">Logistics</span>
              </h1>
              <p className="text-lg text-brand-gray-600 leading-relaxed mb-8 max-w-lg">
                Healthcare logistics requires regulatory adherence,
                chain-of-custody documentation, and absolute reliability. We
                operate GDP-certified cold chain and ambient logistics programs
                for pharma, medical devices, and healthcare supplies.
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
                  Discuss Your Requirements
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-brand-gray-300">
                {[
                  { value: "100%", label: "Regulatory compliance" },
                  { value: "GDP", label: "EU & WHO certified" },
                  { value: "24/7", label: "Temperature monitoring" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-brand-black">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop"
                    alt="Healthcare and pharmaceutical logistics"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/10" />
                </div>
                <div className="absolute -bottom-4 right-4 bg-white border border-brand-gray-200 shadow-sm p-4 flex gap-3 items-center">
                  <Thermometer size={18} className="text-brand-red" />
                  <div>
                    <div className="text-xs font-bold text-brand-black">
                      Temperature Alert
                    </div>
                    <div className="text-[10px] text-green-600 font-medium">
                      All zones within spec ✓
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Temperature zones */}
      <section className="section-padding bg-brand-black">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Cold Chain Infrastructure"
              title="Controlled Temperature Across Every Zone"
              description="Our temperature-controlled infrastructure covers the full spectrum of pharmaceutical and healthcare product requirements — from deep frozen to controlled ambient."
              light
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {temperatureZones.map((zone, i) => (
              <ScrollReveal key={zone.zone} delay={i * 0.07}>
                <div className="p-7 border-r border-white/10 last:border-0 h-full">
                  <Thermometer size={20} className="text-brand-red mb-4" />
                  <h3 className="font-display font-bold text-white text-sm mb-1">
                    {zone.zone}
                  </h3>
                  <div className="font-mono text-xs font-bold text-brand-red mb-3 bg-brand-red/20 px-2 py-1 inline-block">
                    {zone.range}
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {zone.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities list + image */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Full Capabilities"
                title="End-to-End Healthcare Supply Chain Management"
                description="From manufacturer to hospital bedside — our healthcare logistics program covers every link in the pharmaceutical and medical supply chain."
                className="mb-8"
              />
              <div className="space-y-0">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 py-3 border-b border-brand-gray-100 last:border-0"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-brand-red shrink-0"
                    />
                    <span className="text-sm text-brand-gray-700">{cap}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5">
                <div className="relative mr-4 mb-4">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-black" />
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop"
                      alt="Pharmaceutical cold chain operations"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="bg-brand-gray-50 border border-brand-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <RefreshCw size={13} className="text-brand-red" />
                    <span className="text-xs font-bold tracking-wide uppercase text-brand-black">
                      Recall Management
                    </span>
                  </div>
                  <p className="text-sm text-brand-gray-600 leading-relaxed">
                    Our reverse logistics and recall management protocols are
                    designed to move quickly and accurately — minimizing patient
                    risk exposure when product safety events occur.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Regulatory framework */}
      <section className="section-padding bg-brand-red">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Regulatory Compliance"
              title="Certified Against the Standards That Matter"
              description="Healthcare logistics is one of the most tightly regulated sectors in the supply chain. Our operations are certified and audited against each relevant framework."
              light={true}
              className="mb-14 [&_.accent-line]:bg-white"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulatoryFramework.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.standard} delay={i * 0.07}>
                  <div className="relative overflow-hidden bg-white border border-white/20 p-8 flex gap-5 hover:border-white/40 transition-colors">
                    {/* Shine sweep */}
                    <span
                      className="card-shine-sweep absolute inset-y-0 left-0 w-20 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                        animationDelay: `${i * 0.75}s`,
                      }}
                    />
                    <div className="w-12 h-12 bg-brand-red flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-black text-base mb-1">
                        {item.standard}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="Supporting Healthcare Logistics"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Warehousing & Storage",
                href: "/warehousing",
                desc: "Temperature-controlled storage with continuous monitoring",
              },
              {
                label: "Cross Border Logistics",
                href: "/cross-border-logistics",
                desc: "International pharmaceutical distribution with full compliance",
              },
              {
                label: "Freight Management",
                href: "/freight-management",
                desc: "Multi-modal freight for healthcare supply chains across road, air and sea",
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
