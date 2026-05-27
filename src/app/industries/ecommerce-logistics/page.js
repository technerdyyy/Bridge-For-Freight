import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  RotateCcw,
  Truck,
  Globe,
  Package,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "E-Commerce Logistics",
  description:
    "Fulfillment infrastructure built for digital-first commerce. Multi-carrier parcel management, same-day and next-day programs, and returns management for D2C and marketplace brands.",
};

const speedMetrics = [
  {
    value: "2.1 days",
    label: "Avg. fulfillment-to-door",
    context: "Across D2C client base",
  },
  {
    value: "99.3%",
    label: "Same-day cut-off adherence",
    context: "4pm cut-off compliance rate",
  },
  {
    value: "48hr",
    label: "Returns processing time",
    context: "Receipt to restocked inventory",
  },
  {
    value: "8+",
    label: "Carrier options",
    context: "Per parcel, optimized at checkout",
  },
];

const fulfillmentFlow = [
  {
    step: "01",
    label: "Order Received",
    desc: "Order syncs from your platform via API or EDI integration. Appears in our WMS within 30 seconds of customer purchase.",
  },
  {
    step: "02",
    label: "Pick & Pack",
    desc: "SKU location optimized for pick efficiency. Kitting, gift wrapping, and insert management handled per order instructions.",
  },
  {
    step: "03",
    label: "Carrier Selection",
    desc: "Carrier and service level selected based on destination, weight, dimensions, and delivery promise — lowest cost for required service.",
  },
  {
    step: "04",
    label: "Dispatch & Tracking",
    desc: "Label generated, shipment scanned out, tracking number pushed to your platform and customer confirmation email triggered.",
  },
  {
    step: "05",
    label: "Delivery",
    desc: "Customer receives live tracking. Delivery confirmed via POD. Any exception flagged and escalated within 2 hours.",
  },
];

const platformIntegrations = [
  "Shopify & Shopify Plus",
  "WooCommerce",
  "Magento 2",
  "BigCommerce",
  "Amazon Seller Central",
  "Amazon Vendor Central",
  "eBay",
  "Zalando & ASOS",
  "Custom API / Webhooks",
  "EDI (850/856/810)",
];

const capabilities = [
  {
    icon: Zap,
    label: "Same-Day Fulfillment",
    desc: "Orders received before 4pm dispatched the same day. Cut-off extension available for key accounts.",
  },
  {
    icon: Package,
    label: "Multi-SKU Management",
    desc: "Unlimited SKU capacity with velocity-based slotting and automated replenishment triggers.",
  },
  {
    icon: Globe,
    label: "International Shipping",
    desc: "DDP and DDU shipping to 80+ countries with customs documentation handled automatically.",
  },
  {
    icon: BarChart3,
    label: "Inventory Analytics",
    desc: "Real-time dashboards showing stock levels, velocity, forecasting, and reorder recommendations.",
  },
  {
    icon: RotateCcw,
    label: "Returns Portal",
    desc: "Branded returns portal with self-service RMA, return label generation, and live return status.",
  },
  {
    icon: Truck,
    label: "Carrier Optimization",
    desc: "Dynamic carrier selection at label creation optimizes cost against your delivery SLA requirements.",
  },
];

export default function EcommerceLogisticsPage() {
  return (
    <>
      {/* Hero — energetic, speed-focused, dark with orange-red energy */}
      <section className="relative bg-brand-black pt-36 pb-0 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&q=75&auto=format&fit=crop"
            alt="E-commerce fulfillment center"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-black/80 via-brand-black/45 to-brand-black/75" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

        <Container className="relative z-10 pb-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                  Industry
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                E-Commerce
                <br />
                <span className="text-brand-red">Logistics</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-2xl">
                E-commerce brands live and die by speed and accuracy. We provide
                the fulfillment infrastructure, carrier network, and returns
                management to support high-volume D2C and marketplace operations
                that can&apos;t afford to miss a delivery promise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-brand-red text-white px-8 h-13 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                >
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                  />
                  Get a Fulfillment Quote
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                {/* <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 border border-brand-gray-700 text-white px-8 h-13 font-semibold text-sm tracking-wide hover:border-brand-gray-500 hover:bg-white/5 transition-all"
                >
                  All Industries
                </Link> */}
              </div>
            </ScrollReveal>
          </div>

          {/* Speed metrics bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-14 border border-brand-gray-800 bg-brand-gray-900/60">
            {speedMetrics.map((m) => (
              <div
                key={m.label}
                className="px-8 py-7 border-r border-brand-gray-800 last:border-0"
              >
                <div className="font-display font-bold text-2xl text-brand-red tracking-tight mb-0.5">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-white mb-0.5">
                  {m.label}
                </div>
                <div className="text-[10px] text-brand-gray-600">
                  {m.context}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fulfillment flow */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Fulfillment Process"
              title="Order In. Package Out. Customer Happy."
              description="Our fulfillment process is designed for speed and accuracy — from order receipt to dispatch in under 4 hours for most SKU profiles."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-brand-gray-200">
            {fulfillmentFlow.map((f, i) => (
              <ScrollReveal key={f.step} delay={i * 0.07}>
                <div className="p-7 border-r border-brand-gray-200 last:border-0 h-full">
                  <div className="w-10 h-10 bg-brand-red flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-xs text-white">
                      {f.step}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-brand-black text-sm mb-2">
                    {f.label}
                  </h4>
                  <p className="text-xs text-brand-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
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
            "linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)",
        }}
      >
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Capabilities"
              title="Built for Digital-First Commerce"
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

      {/* Platform integrations + returns — full-bleed 50/50 split */}
      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Left panel — white */}
          <div className="w-full lg:w-1/2 bg-white py-24 lg:py-32 px-8 md:px-12 lg:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] lg:pr-16">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Platform Integrations"
                title="Plug Into Any Commerce Stack"
                description="We connect to your commerce platform out of the box — no development work required for major platforms. Custom API integrations are typically live within 5 business days."
                className="mb-8"
              />
              <div className="grid grid-cols-2 gap-2">
                {platformIntegrations.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2.5 py-2.5 border-b border-brand-gray-100 last:border-0"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-brand-red shrink-0"
                    />
                    <span className="text-xs text-brand-gray-700">{p}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right panel — image + red overlay, full height */}
          <div className="w-full lg:w-1/2 relative py-24 lg:py-32 px-8 md:px-12 lg:pr-[max(3rem,calc((100vw-1280px)/2+3rem))] lg:pl-16 flex items-center">
            {/* Background image */}
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop"
              alt="Returns and warehouse operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Red overlay — fades from solid at bottom to transparent at top */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(193,18,31,0.78) 0%, rgba(193,18,31,0.45) 45%, rgba(193,18,31,0.12) 75%, transparent 100%)",
              }}
            />
            <ScrollReveal delay={0.1} className="relative z-10 w-full">
              <div className="flex items-center gap-2 mb-6">
                <RotateCcw size={15} className="text-white" />
                <span className="text-xs font-bold tracking-widest uppercase text-white/80">
                  Returns Management
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-4">
                Returns Done Right.
                <br />
                Not Done Poorly.
              </h3>
              <p className="text-sm text-white/90 leading-relaxed mb-6">
                E-commerce return rates of 20–40% make returns management a
                profit-and-loss issue, not just an operational one. Our
                returns platform recovers maximum value from every return.
              </p>
              <ul className="space-y-3">
                {[
                  "Branded self-service returns portal for customers",
                  "Pre-paid return labels generated on demand",
                  "Returns receipt, grading, and condition photography",
                  "Same-day restocking for grade-A returns",
                  "Liquidation and write-off channel management",
                  "Returns analytics by reason code and SKU",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={12}
                      className="text-white shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-white/90 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related"
              title="For E-Commerce Operations"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Last Mile Delivery",
                href: "/services/last-mile-delivery",
                desc: "Consumer-grade delivery with live tracking and flexible windows",
              },
              {
                label: "Warehousing & Storage",
                href: "/services/warehousing",
                desc: "WMS-integrated fulfillment centers for high-volume e-commerce",
              },
              {
                label: "Retail Logistics",
                href: "/industries/retail-logistics",
                desc: "Marketplace and retailer DC fulfillment programs",
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
