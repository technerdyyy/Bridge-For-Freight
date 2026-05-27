import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Users, BarChart3, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";
import { processSteps } from "@/lib/data/process";

export const metadata = {
  title: "Our Process | Bridge For Freight",
  description:
    "A structured five-stage logistics methodology built to eliminate variability and deliver consistent, predictable outcomes for every shipment.",
};

const principles = [
  {
    icon: Clock,
    title: "Proactive, Not Reactive",
    description:
      "Every exception is anticipated before it disrupts your supply chain. Our operations team monitors shipments in real time and resolves issues before they reach you.",
  },
  {
    icon: Users,
    title: "Dedicated Operations Teams",
    description:
      "You are never routed to a call center. Assigned operations leads manage your account and know your freight program inside out.",
  },
  {
    icon: BarChart3,
    title: "Data at Every Stage",
    description:
      "From intake to delivery confirmation, every touchpoint generates performance data that feeds back into improving your next shipment.",
  },
  {
    icon: Shield,
    title: "Compliance Built In",
    description:
      "Regulatory requirements, carrier certifications, and documentation standards are embedded into the process — never an afterthought.",
  },
];

const outcomes = [
  { value: "99.2%", label: "On-time delivery rate" },
  { value: "< 2hr", label: "Exception response time" },
  { value: "18,400+", label: "Annual shipments managed" },
  { value: "40+", label: "Countries of operation" },
];

export default function OurProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-36 pb-28 overflow-hidden min-h-[560px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=75&auto=format&fit=crop"
            alt="Logistics operations"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/85 to-brand-black/50" />
        </div>
        <div className="absolute top-0 left-0 w-40 h-1 bg-brand-red" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                  About
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                How We Move
                <br />
                <span className="text-brand-red">Your Freight Forward.</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-xl">
                A structured five-stage methodology applied to every shipment — designed to eliminate variability and deliver consistent, measurable outcomes across your entire logistics program.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-8 h-13 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
              >
                Start a Conversation
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Outcome metrics strip */}
      <section className="bg-brand-red">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-red-700/40 divide-y lg:divide-y-0">
            {outcomes.map((m) => (
              <div key={m.label} className="px-8 py-7 text-white">
                <div className="font-display font-bold text-3xl tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-red-200 uppercase tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process steps — alternating layout */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Process"
              title="Five Stages. Zero Surprises."
              description="Every engagement follows the same proven methodology — regardless of shipment size, mode, or destination."
              className="mb-20"
            />
          </ScrollReveal>

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.06}>
                <div
                  className={[
                    "grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-brand-gray-100 last:border-b-0",
                    i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* Number side */}
                  <div
                    className={[
                      "flex items-center justify-center p-16 lg:p-20",
                      i % 2 === 0 ? "bg-brand-gray-50" : "bg-brand-black",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span
                      className={[
                        "font-display font-bold leading-none select-none",
                        i % 2 === 0
                          ? "text-brand-gray-200 text-[8rem] lg:text-[10rem]"
                          : "text-white/10 text-[8rem] lg:text-[10rem]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      style={{ fontSize: "clamp(6rem, 15vw, 10rem)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content side */}
                  <div className="flex items-center p-10 lg:p-16">
                    <div className="max-w-md">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-brand-red flex items-center justify-center shrink-0">
                          <span className="text-white font-display font-bold text-xs">
                            {step.number}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                          Stage {parseInt(step.number, 10)}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-brand-black text-2xl lg:text-3xl mb-4 tracking-tight">
                        {step.title}
                      </h2>
                      <p className="text-brand-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Principles"
              title="What Sets Our Process Apart"
              description="The methodology is built around four core operating principles that shape how we handle every shipment."
              className="mb-16"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gray-200">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.title} delay={i * 0.07}>
                  <div className="bg-white p-10 hover:bg-brand-gray-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-brand-red flex items-center justify-center mb-5">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-brand-black text-lg mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-brand-gray-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Technology section */}
      <section className="section-padding bg-brand-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Technology"
                title="Visibility Across Every Stage"
                description="Our TMS and WMS integration layer gives you real-time visibility across every stage of the process — not just when something goes wrong."
                light
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Live shipment tracking from pickup to delivery",
                  "Automated status updates and milestone alerts",
                  "Digital proof of delivery with chain-of-custody records",
                  "Performance dashboards with lane-level analytics",
                  "Exception logs with resolution timelines",
                  "Custom KPI reporting for operations and finance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-brand-red shrink-0" />
                    <span className="text-sm text-brand-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop"
                  alt="Operations dashboard"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-black/30" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
