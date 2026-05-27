import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  Shield,
  BarChart3,
  Clock,
  AlertCircle,
  Globe,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Freight Management",
  description:
    "End-to-end freight coordination across road, air, and sea with real-time visibility at every checkpoint. Bridge For Freight manages your freight complexity so your supply chain does not have to.",
};

const capabilities = [
  {
    icon: Truck,
    title: "Multi-Modal Coordination",
    description:
      "Unified management across road, rail, air, and ocean freight under a single operational layer.",
  },
  {
    icon: BarChart3,
    title: "Rate Benchmarking",
    description:
      "Continuous carrier rate analysis and negotiation to ensure you never overpay for freight capacity.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description:
      "Automated documentation, regulatory compliance, and carrier vetting built into every shipment.",
  },
  {
    icon: Clock,
    title: "Real-Time Visibility",
    description:
      "GPS-enabled tracking and status updates at every checkpoint from origin to delivery confirmation.",
  },
  {
    icon: AlertCircle,
    title: "Exception Management",
    description:
      "Proactive exception detection with immediate escalation protocols and recovery coordination.",
  },
  {
    icon: Globe,
    title: "Global Carrier Network",
    description:
      "Access to a vetted network of over 2,400 carriers across domestic and international lanes.",
  },
];

const process = [
  {
    step: "01",
    title: "Intake & Analysis",
    description:
      "We receive your shipment requirements and immediately analyze load characteristics, origin, destination, and service constraints to build the optimal routing plan.",
  },
  {
    step: "02",
    title: "Carrier Selection",
    description:
      "From our vetted carrier network, we select the best-fit provider based on lane performance data, rate benchmarks, capacity availability, and service level alignment.",
  },
  {
    step: "03",
    title: "Load Planning",
    description:
      "Shipments are consolidated, scheduled, and optimized for cost and transit efficiency. Documentation is prepared and compliance checks are completed before dispatch.",
  },
  {
    step: "04",
    title: "In-Transit Oversight",
    description:
      "Our operations team actively monitors every shipment in real time. Any exception — delay, damage, or deviation — is flagged and resolved before it impacts your schedule.",
  },
  {
    step: "05",
    title: "Confirmation & Review",
    description:
      "Proof of delivery is captured digitally. Every shipment feeds back into performance reporting so carrier ratings, transit times, and cost data continuously improve.",
  },
];

const metrics = [
  { value: "98.6%", label: "On-time delivery rate" },
  { value: "2,400+", label: "Vetted carrier partners" },
  { value: "47", label: "Countries with active lanes" },
  { value: "< 2hr", label: "Average exception response" },
];

export default function FreightManagementPage() {
  return (
    <>
      {/* Hero — dark with image overlay, left-aligned */}
      <section className="relative bg-brand-black overflow-hidden min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=75&auto=format&fit=crop"
            alt="Freight trucks on highway"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/80 to-brand-black/40" />
        </div>
        <div className="absolute top-0 left-0 w-40 h-1 bg-brand-red" />

        <div className="relative z-10 flex-1 flex items-center pt-28 lg:pt-36 pb-8 lg:pb-10">
          <Container>
            <div className="max-w-2xl">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-8 h-px bg-brand-red" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                    Service
                  </span>
                </div>
                <h1
                  className="font-display font-bold text-white leading-tight tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.85rem, 5vw, 4rem)" }}
                >
                  Freight Management
                  <br />
                  <span className="text-brand-red">That Never Misses.</span>
                </h1>
                <p className="text-base text-brand-gray-300 leading-relaxed mb-7 max-w-xl">
                  End-to-end freight coordination across every mode — road, air,
                  and sea — with real-time visibility at every checkpoint. We
                  manage the complexity so your supply chain delivers without
                  disruption.
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
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>
                  {/* <Link
                    href="/services"
                    className="inline-flex items-center gap-2 border border-brand-gray-700 text-white px-8 h-13 font-semibold text-sm tracking-wide hover:border-brand-gray-500 hover:bg-white/5 transition-all"
                  >
                    All Services
                  </Link> */}
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </div>

        <div className="relative z-10 bg-brand-red">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-red-700/40 divide-y lg:divide-y-0">
              {metrics.map((m) => (
                <div key={m.label} className="px-4 py-4 lg:px-8 lg:py-7 text-white">
                  <div className="font-display font-bold text-lg lg:text-3xl tracking-tight mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-[10px] lg:text-xs font-medium text-red-200 uppercase tracking-wide">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Capabilities"
              title="Everything Your Freight Program Needs"
              description="From carrier selection to proof of delivery, our freight management platform covers every operational touchpoint."
              className="mb-16"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gray-200">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={i * 0.05}>
                  <div className="bg-white p-8 hover:bg-brand-gray-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-brand-red flex items-center justify-center mb-5">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-brand-black text-base mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-brand-gray-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process — vertical timeline */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Our Process"
                title="From Intake to Confirmation — Managed Precisely"
                description="Every shipment follows a structured five-stage process designed to eliminate variability and deliver consistent, predictable outcomes."
              />
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red text-white px-7 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                >
                  Discuss Your Freight Program
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-brand-gray-200" />
              <div className="space-y-0">
                {process.map((p, i) => (
                  <ScrollReveal key={p.step} delay={i * 0.07}>
                    <div className="relative flex gap-6 pb-10 last:pb-0">
                      <div className="relative z-10 w-11 h-11 bg-white border-2 border-brand-gray-200 flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-xs text-brand-red">
                          {p.step}
                        </span>
                      </div>
                      <div className="pt-2">
                        <h4 className="font-display font-bold text-brand-black text-sm mb-2">
                          {p.title}
                        </h4>
                        <p className="text-sm text-brand-gray-600 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Split feature — technology */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Technology Platform"
                title="Visibility You Can Act On"
                description="Our freight management platform gives operations, procurement, and finance teams a shared, real-time view of every active shipment."
                light
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Live GPS tracking with ETA recalculation",
                  "Automated carrier performance scoring",
                  "Integrated documentation and POD capture",
                  "Cost-per-lane benchmarking dashboard",
                  "Proactive delay and exception alerts",
                  "Custom reporting and KPI exports",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={14}
                      className="text-white/70 shrink-0"
                    />
                    <span className="text-sm text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-black" />
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80&auto=format&fit=crop"
                    alt="Freight operations control center"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/20" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="Extend Your Logistics Program"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Warehousing & Storage",
                href: "/services/warehousing",
                desc: "WMS-driven inventory control at scale",
              },
              {
                label: "Distribution",
                href: "/services/distribution",
                desc: "Hub-and-spoke networks for precision delivery",
              },
              {
                label: "Cross Border Logistics",
                href: "/services/cross-border-logistics",
                desc: "International freight with customs management",
              },
            ].map((item) => (
              <ScrollReveal key={item.href}>
                <Link
                  href={item.href}
                  className="group block card-premium p-7 hover:border-brand-red/30 transition-all"
                >
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
