import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Industrial Supply Logistics",
  description:
    "Heavy-freight logistics for industrial operations. Over-dimensional cargo, heavy lift coordination, and site delivery for demanding industrial supply chains.",
};

const oogCapabilities = [
  { dimension: "Max Width", value: "6.5m", context: "With permit and escort" },
  {
    dimension: "Max Height",
    value: "5.2m",
    context: "Declared route survey required",
  },
  {
    dimension: "Max Length",
    value: "40m",
    context: "Extended trailer configurations",
  },
  {
    dimension: "Max Weight",
    value: "500T",
    context: "Heavy lift to 500 metric tonnes",
  },
];

const projectPhases = [
  {
    phase: "01",
    title: "Feasibility & Survey",
    description:
      "Route survey, bridge assessment, overhead clearance checks, and regulatory permit requirements identified before any commitment is made. Feasibility report provided within 5 working days.",
  },
  {
    phase: "02",
    title: "Engineering & Planning",
    description:
      "Lifting calculations, load-spreading design, lashing schemes, and transport method engineering completed by our in-house team. Reviewed and approved by independent chartered engineers where required.",
  },
  {
    phase: "03",
    title: "Permit Acquisition",
    description:
      "All required movement permits, police notifications, and escort arrangements organized. Utility and infrastructure notifications managed across the route.",
  },
  {
    phase: "04",
    title: "Execution",
    description:
      "Managed movement with qualified load supervisors on-site. Police and pilot escort coordination, real-time monitoring, and contingency management throughout the move.",
  },
  {
    phase: "05",
    title: "Site Delivery & Handover",
    description:
      "Final site positioning, off-load coordination, and delivery documentation completed. Installation support coordination available where required.",
  },
];

const industrialSectors = [
  {
    label: "Oil & Gas",
    desc: "Pressure vessels, heat exchangers, drilling equipment, and modular process plant",
  },
  {
    label: "Power Generation",
    desc: "Transformers, generators, turbines, and switchgear across all power generation types",
  },
  {
    label: "Mining & Quarrying",
    desc: "Mining equipment, conveyors, crushing plant, and process machinery",
  },
  {
    label: "Construction",
    desc: "Steel structures, pre-cast elements, bridge sections, and modular buildings",
  },
  {
    label: "Wind Energy",
    desc: "Turbine blades, nacelles, tower sections, and foundation components",
  },
  {
    label: "Chemical Processing",
    desc: "Reactors, columns, storage tanks, and process vessels",
  },
];

export default function IndustrialSupplyLogisticsPage() {
  return (
    <>
      {/* Hero — heavy, dramatic, industrial site imagery */}
      <section className="relative bg-brand-black pt-36 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=75&auto=format&fit=crop"
            alt="Heavy industrial logistics and equipment"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black/98 via-brand-black/75 to-brand-black/30" />
        </div>
        <div className="absolute top-0 left-0 w-40 h-1 bg-brand-red" />
        <div className="absolute top-0 left-40 right-0 h-px bg-brand-gray-900" />

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
                Industrial Supply
                <br />
                <span className="text-brand-red">Logistics</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-xl">
                Industrial supply chains move large, heavy, and time-critical
                equipment across demanding terrain and compressed project
                timelines. We specialize in project cargo, over-dimensional
                freight, and industrial site delivery where standard logistics
                providers stop.
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
                  Discuss Your Project
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* OOG specs — red-text counters inside hero */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 border-t border-brand-gray-800 bg-brand-gray-900/60 divide-y lg:divide-y-0 lg:divide-x divide-brand-gray-800">
            <div className="px-8 py-8 lg:col-span-1 flex flex-col justify-center">
              <div className="text-[10px] font-bold tracking-widest uppercase text-brand-gray-500 mb-3">
                OOG Specifications
              </div>
              <p className="text-xs text-brand-gray-600 leading-relaxed">
                Maximum dimensions for over-dimensional cargo movement under
                permit.
              </p>
            </div>
            {oogCapabilities.map((cap) => (
              <div key={cap.dimension} className="px-8 py-8 text-center">
                <div className="font-display font-bold text-2xl text-brand-red tracking-tight mb-1">
                  {cap.value}
                </div>
                <div className="text-xs font-semibold text-white mb-0.5">
                  {cap.dimension}
                </div>
                <div className="text-[10px] text-brand-gray-600">
                  {cap.context}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project cargo phases */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Project Cargo Methodology"
              title="Five Phases. No Surprises."
              description="Every complex industrial move follows our structured five-phase methodology — from feasibility to handover — so every decision is documented, every risk mitigated, and every outcome predictable."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="space-y-4">
            {projectPhases.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-5 bg-white border border-brand-gray-200 hover:border-brand-gray-300 transition-colors">
                  <div className="p-7 flex items-center gap-4 lg:border-r border-brand-gray-200">
                    <span className="font-display font-bold text-4xl text-brand-red/15 leading-none">
                      {phase.phase}
                    </span>
                    <h4 className="font-display font-bold text-brand-black text-sm">
                      {phase.title}
                    </h4>
                  </div>
                  <div className="p-7 lg:col-span-4">
                    <p className="text-sm text-brand-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Industrial sectors */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Sectors We Serve"
                title="Specialist Experience Across Industrial Markets"
                description="Our project cargo and heavy freight teams have delivered equipment to some of the most challenging project sites and market sectors in the world."
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industrialSectors.map((sector) => (
                  <div
                    key={sector.label}
                    className="p-5 border border-brand-gray-200 hover:border-brand-gray-300 transition-colors"
                  >
                    <h4 className="font-display font-bold text-brand-black text-xs mb-1">
                      {sector.label}
                    </h4>
                    <p className="text-xs text-brand-gray-500 leading-snug">
                      {sector.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop"
                    alt="Heavy industrial freight transport"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/15" />
                </div>
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex w-full items-center justify-center gap-2 bg-brand-red text-white px-8 h-14 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                >
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)" }}
                  />
                  Discuss Your Project
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Equipment capabilities */}
      <section className="section-padding bg-brand-red">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Equipment & Assets"
                title="The Right Assets for the Toughest Moves"
                description="Our fleet and partner network provides access to specialist transport equipment for any industrial cargo requirement."
                light
                className="mb-8 [&_.accent-line]:bg-white"
              />
              <div className="space-y-3">
                {[
                  "Low-loader and step-frame trailers (to 100T capacity)",
                  "Modular SPMT (Self-Propelled Modular Transporter) platforms",
                  "Heavy haulage tractors (4-axle and 5-axle)",
                  "Abnormal load escort vehicles",
                  "Mobile cranes (to 600T capacity through partners)",
                  "Barge and roll-on/roll-off sea transport",
                  "Air freight charter for urgent components",
                  "Lashing, blocking, and dunnage equipment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-1">
                    <Wrench size={12} className="text-white/70 shrink-0" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-black" />
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
                    alt="Industrial equipment transport"
                    fill
                    className="object-cover"
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
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="Supporting Industrial Operations"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Freight Management",
                href: "/services/freight-management",
                desc: "Multi-modal freight coordination for industrial supply chains",
              },
              {
                label: "Cross Border Logistics",
                href: "/services/cross-border-logistics",
                desc: "International project cargo with customs management",
              },
              {
                label: "Manufacturing Logistics",
                href: "/industries/manufacturing-logistics",
                desc: "Component inbound logistics for production facilities",
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
