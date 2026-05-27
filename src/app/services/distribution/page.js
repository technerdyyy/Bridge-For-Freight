import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  MapPin,
  Repeat2,
  TrendingUp,
  Layers,
  Clock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Distribution Solutions",
  description:
    "Precision distribution networks built to move goods efficiently from origin to final destination. Hub-and-spoke architecture with regional and national reach.",
};

const networkHighlights = [
  { value: "34", label: "Hub facilities" },
  { value: "280+", label: "Delivery routes" },
  { value: "99.2%", label: "On-time outbound" },
  { value: "48hr", label: "Max network transit" },
];

const distributionModels = [
  {
    icon: Layers,
    title: "Hub-and-Spoke",
    description:
      "Consolidate inbound volume at central hubs before distributing via optimized spoke routes. Ideal for high-volume, multi-destination programs requiring consistent frequency.",
  },
  {
    icon: Network,
    title: "Direct Distribution",
    description:
      "Point-to-point movement for time-sensitive or high-value shipments that cannot tolerate hub consolidation delays. Dedicated lanes with guaranteed windows.",
  },
  {
    icon: Repeat2,
    title: "Cross-Docking",
    description:
      "Inbound freight transfers directly to outbound vehicles with zero storage time. Designed for retailers and manufacturers with synchronized delivery windows.",
  },
  {
    icon: MapPin,
    title: "Regional Distribution",
    description:
      "Territory-based distribution programs covering specific geographic zones with dedicated capacity, driver pools, and service-level commitments.",
  },
];

const routeOptimization = [
  "Dynamic routing based on volume and time windows",
  "Multi-stop sequencing to maximize vehicle utilization",
  "Traffic and road condition integration",
  "Fuel and emissions optimization",
  "Real-time route deviation and re-sequencing",
  "Delivery window compliance monitoring",
];

export default function DistributionPage() {
  return (
    <>
      {/* Hero — dark with image gradient background */}
      <section className="relative bg-brand-black overflow-hidden min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
            alt="Distribution logistics operations"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-black/65" />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black/80 to-brand-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/20 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

        <div className="relative z-10 flex-1 flex items-center pt-36 pb-10">
          <Container>
            <div className="max-w-2xl">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-px bg-brand-red" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                    Service
                  </span>
                </div>
                <h1
                  className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)" }}
                >
                  Distribution
                  <br />
                  <span className="text-brand-red">Built to Scale.</span>
                </h1>
                <p className="text-lg text-brand-gray-300 leading-relaxed mb-8 max-w-lg">
                  Precision distribution networks that connect manufacturers,
                  retailers, and consumers through optimized hub infrastructure
                  and carrier partnerships — designed to minimize transit time and
                  maximize reliability.
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
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </div>

        <div className="relative z-10 bg-brand-gray-900/80 backdrop-blur-sm border-t border-white/10">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0">
              {networkHighlights.map((m) => (
                <div key={m.label} className="px-4 py-4 lg:px-8 lg:py-7 text-white">
                  <div className="font-display font-bold text-lg lg:text-3xl tracking-tight text-white mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-[10px] lg:text-xs text-brand-gray-400 uppercase tracking-wide">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Distribution models */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Distribution Models"
              title="The Right Architecture for Your Volume"
              description="Not every distribution program is the same. We design network architectures that match your volume, geography, and service level requirements."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {distributionModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <ScrollReveal key={model.title} delay={i * 0.07}>
                  <div className="flex gap-5 p-8 border border-brand-gray-200 hover:border-brand-red/30 hover:shadow-sm transition-all group">
                    <div className="w-12 h-12 bg-brand-black group-hover:bg-brand-red flex items-center justify-center shrink-0 transition-colors duration-200">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-black text-base mb-2">
                        {model.title}
                      </h3>
                      <p className="text-sm text-brand-gray-600 leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Route optimization split */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow="Route Intelligence"
                  title="Routes That Learn and Improve"
                  description="Our route planning engine combines historical lane data with live traffic and operational variables to consistently optimize delivery performance."
                />
                <div className="space-y-0 mt-8">
                  {routeOptimization.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 py-3 border-b border-brand-gray-200 last:border-0"
                    >
                      <span className="font-display font-bold text-[10px] text-brand-red w-5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-brand-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="h-full">
              <div className="relative h-full min-h-96 mr-4 mb-4">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-red" />
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80&auto=format&fit=crop"
                    alt="Aerial view of logistics network"
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

      {/* Fleet integration */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal className="lg:col-span-1">
              <SectionHeader
                eyebrow="Fleet & Carrier"
                title="Own Fleet + Carrier Partner Network"
                description="Flexibility to move any volume, any time — backed by both owned fleet assets and a managed carrier network."
                light
              />
              <Link
                href="/contact"
                className="relative overflow-hidden inline-flex items-center gap-2 bg-white text-brand-red mt-8 px-6 h-11 text-sm font-semibold hover:bg-brand-gray-100 transition-colors group"
              >
                <span
                  className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)" }}
                />
                Discuss Fleet Options
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </ScrollReveal>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Rigid Fleet",
                  desc: "Curtain-side, flatbed, and enclosed rigid vehicles for regional distribution programs.",
                },
                {
                  icon: Network,
                  title: "Artic Fleet",
                  desc: "High-capacity articulated vehicles for long-haul trunk routes and hub transfers.",
                },
                {
                  icon: Clock,
                  title: "Dedicated Contract",
                  desc: "Vehicles allocated exclusively to your account with guaranteed availability.",
                },
                {
                  icon: MapPin,
                  title: "Carrier Partners",
                  desc: "450+ vetted carrier partners for surge capacity, specialist moves, and overflow demand.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.06}>
                    <div className="relative overflow-hidden p-6 border border-white/20 hover:border-white/40 transition-colors">
                      <div
                        className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                      />
                      <Icon size={18} className="text-white mb-3" />
                      <h4 className="font-display font-bold text-white text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/65 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Related Services"
              title="Extend the Operation"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Warehousing & Storage",
                href: "/services/warehousing",
                desc: "Upstream storage feeding your distribution network",
              },
              {
                label: "Last Mile Delivery",
                href: "/services/last-mile-delivery",
                desc: "Consumer-grade final delivery from DC to door",
              },
              {
                label: "Freight Management",
                href: "/services/freight-management",
                desc: "Inbound freight coordination into your distribution hubs",
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
