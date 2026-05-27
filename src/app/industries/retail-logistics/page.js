import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  TrendingUp,
  Calendar,
  RotateCcw,
  Tag,
  Store,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Retail Logistics",
  description:
    "Demand-driven logistics for modern retail. We synchronize inbound replenishment, DC operations, and store-level delivery to keep shelves stocked and customers satisfied.",
};

const retailChallenges = [
  {
    challenge: "Seasonal Demand Peaks",
    description:
      "Black Friday, holiday, and promotional events can triple shipment volumes overnight. Retail logistics must flex without failing.",
    solution:
      "Pre-built surge capacity contracts with carrier partners, dedicated overflow warehouse space, and demand-signal-triggered activation protocols.",
  },
  {
    challenge: "Store-Level Precision",
    description:
      "Retail delivery windows are strict. Miss a delivery window and you face OTIF penalties, stock-outs, and lost sales.",
    solution:
      "Dedicated store delivery programs with time-window compliance monitoring, real-time rescheduling, and OTIF performance reporting by account.",
  },
  {
    challenge: "Returns Volume",
    description:
      "Retail returns rates of 15–30% create a reverse logistics burden that most supply chains are not designed to handle efficiently.",
    solution:
      "Structured returns programs with collection, grading, and restocking processes that recover maximum value from returned inventory.",
  },
];

const capabilities = [
  {
    icon: Calendar,
    label: "Promotional Event Logistics",
    desc: "Pre-positioned stock, temporary DC activation, and carrier capacity secured in advance of major retail events.",
  },
  {
    icon: Store,
    label: "Store Replenishment",
    desc: "Scheduled multi-drop delivery programs with store-level tracking and compliance documentation for major retailers.",
  },
  {
    icon: TrendingUp,
    label: "Supplier Consolidation",
    desc: "Merge multiple supplier shipments at our network hubs before onward delivery — reducing your inbound cost significantly.",
  },
  {
    icon: Tag,
    label: "Allocation Logistics",
    desc: "Allocation and distribution support for new product launches and seasonal range changeovers.",
  },
  {
    icon: ShoppingBag,
    label: "Omnichannel Fulfillment",
    desc: "Unified inventory management supporting both retail store replenishment and D2C e-commerce fulfillment.",
  },
  {
    icon: RotateCcw,
    label: "Returns Management",
    desc: "End-to-end reverse logistics from consumer returns to disposition — graded, restocked, or liquidated.",
  },
];

export default function RetailLogisticsPage() {
  return (
    <>
      {/* Hero — 50/50 split with dark left panel + full-height image */}
      <section className="relative min-h-screen flex">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red z-10" />

        {/* Left content panel */}
        <div className="relative z-10 bg-brand-charcoal w-full lg:w-1/2 flex items-center pt-36 pb-20 lg:pt-28 lg:pb-20">
          <div className="px-8 md:px-12 lg:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] max-w-2xl lg:max-w-none">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                  Industry
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                Retail Logistics
                <br />
                <span className="text-brand-red">Built for Volume.</span>
              </h1>
              <p className="text-base text-brand-gray-400 leading-relaxed mb-8 max-w-md">
                Retail supply chains demand speed, accuracy, and scalability —
                especially when demand spikes. We synchronize inbound, DC
                operations, and store delivery so shelves stay stocked and OTIF
                penalties stay at zero.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 h-14 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors duration-200 group"
                >
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                    }}
                  />
                  Build Your Retail Program
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-brand-gray-800 pt-8">
              {[
                { value: "99.1%", label: "Order accuracy" },
                { value: "2,000+", label: "Store locations served" },
                { value: "±15min", label: "Delivery window precision" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image panel */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop"
            alt="Retail store with product displays"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-brand-black/20" />
          <div className="absolute bottom-8 left-8 bg-brand-red text-white px-5 py-4">
            <div className="font-display font-bold text-xl">
              Seasonal Surge Ready
            </div>
            <div className="text-xs text-red-200 mt-0.5">
              3× volume capacity on demand
            </div>
          </div>
        </div>
      </section>

      {/* Retail challenges section */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Industry Challenges"
              title="The Challenges Retail Logistics Gets Wrong"
              description="Retail supply chains face a distinct set of pressures that generic logistics providers are not built to handle. We are."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="space-y-6">
            {retailChallenges.map((item, i) => (
              <ScrollReveal key={item.challenge} delay={i * 0.07}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white border border-brand-gray-200 p-8">
                  <div>
                    <div className="font-display font-bold text-brand-black text-base mb-2">
                      {item.challenge}
                    </div>
                    <p className="text-sm text-brand-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2 flex gap-3 items-start bg-brand-gray-50 p-5">
                    <div className="w-1 h-full min-h-[2rem] bg-brand-red shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-brand-red mb-1.5">
                        Our Solution
                      </div>
                      <p className="text-sm text-brand-gray-700 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Seasonal / omnichannel split */}
      <section className="section-padding bg-brand-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&q=80&auto=format&fit=crop"
                  alt="Retail warehouse fulfillment"
                  fill
                  className="object-cover opacity-75"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <SectionHeader
                eyebrow="Omnichannel Readiness"
                title="One Network for All Channels"
                description="Whether you're replenishing stores, fulfilling online orders, or shipping to marketplace DCs — a single integrated logistics program serves every channel from shared inventory."
                light
                className="mb-8"
              />
              <ul className="space-y-3">
                {[
                  "Unified inventory across retail and e-commerce channels",
                  "Retailer EDI and ASN compliance managed on your behalf",
                  "OTIF and SQEP compliance documentation",
                  "Multi-retailer routing guide adherence",
                  "Dedicated retail account management team",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={13}
                      className="text-brand-red shrink-0"
                    />
                    <span className="text-sm text-brand-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)",
        }}
      >
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Capabilities"
              title="Everything a Retail Supply Chain Requires"
              className="mb-14"
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.label} delay={i * 0.06}>
                  <div className="relative overflow-hidden p-7 bg-white/10 border border-white/20 hover:border-white/40 transition-all">
                    <div
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                      }}
                    />
                    <Icon size={20} className="text-white mb-4" />
                    <h4 className="font-display font-bold text-white text-sm mb-2">
                      {cap.label}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="Services for Retail Operations"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Warehousing & Storage",
                href: "/services/warehousing",
                desc: "DC operations and fulfillment at scale for retail programs",
              },
              {
                label: "Distribution",
                href: "/services/distribution",
                desc: "Multi-drop store delivery and hub-to-store network design",
              },
              {
                label: "Last Mile Delivery",
                href: "/services/last-mile-delivery",
                desc: "D2C and click-and-collect delivery for retail e-commerce",
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
