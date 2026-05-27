import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Smartphone,
  RotateCcw,
  Users,
  Star,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata = {
  title: "Last Mile Delivery",
  description:
    "Reliable, trackable last-mile delivery solutions that meet the expectations of today's end customers. Dynamic routing, live tracking, and returns management.",
};

const deliveryJourney = [
  {
    stage: "Dispatch",
    description:
      "Orders are batched, sequenced, and assigned to drivers based on zone, capacity, and delivery windows.",
    time: "D-day",
  },
  {
    stage: "Route Optimization",
    description:
      "Intelligent sequencing calculates the most efficient multi-stop route, factoring in traffic, access restrictions, and time windows.",
    time: "Pre-departure",
  },
  {
    stage: "Collection",
    description:
      "Driver collects and scans the shipment, triggering automated customer notification with estimated arrival window.",
    time: "Pickup",
  },
  {
    stage: "En Route",
    description:
      "Recipient receives live tracking link with real-time ETA. Driver location updates every 2 minutes.",
    time: "In transit",
  },
  {
    stage: "Delivery",
    description:
      "Proof of delivery captured via photo, signature, or PIN — sent automatically to sender and recipient.",
    time: "Completion",
  },
];

const deliveryFeatures = [
  {
    icon: MapPin,
    title: "Dynamic Route Planning",
    desc: "Real-time re-routing based on traffic, access events, and schedule changes throughout the delivery run.",
  },
  {
    icon: Smartphone,
    title: "Live Customer Tracking",
    desc: "Recipients receive a branded tracking link with driver location and estimated arrival window.",
  },
  {
    icon: Clock,
    title: "Flexible Delivery Windows",
    desc: "Morning, afternoon, and evening windows available with weekend deliveries support.",
  },
  {
    icon: Users,
    title: "Managed Driver Network",
    desc: "A vetted, trained, and uniformed driver pool operating to consistent service standards across every zone.",
  },
  {
    icon: Star,
    title: "Proof of Delivery",
    desc: "Electronic signature, photo capture, and PIN confirmation with instant digital records.",
  },
  {
    icon: RotateCcw,
    title: "Returns & Reverse Logistics",
    desc: "Structured returns collection from recipient locations, grading, and disposition routing back to your DC.",
  },
];

const metrics = [
  { value: "97.3%", label: "On-time delivery" },
  { value: "4.8/5", label: "Customer satisfaction score" },
  { value: "< 4hr", label: "Exception resolution time" },
  { value: "99.1%", label: "POD capture rate" },
];

export default function LastMileDeliveryPage() {
  return (
    <>
      {/* Hero — city/urban imagery, centered copy */}
      <section className="relative bg-brand-black min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1600&q=75&auto=format&fit=crop"
            alt="Last mile delivery in city"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-black/60 via-brand-black/50 to-brand-black/80" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                  Service
                </span>
                <span className="block w-8 h-px bg-brand-red" />
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)" }}
              >
                Last Mile Delivery
                <br />
                <span className="text-brand-red">Where Brands Are Made.</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
                The final mile is where customer experience is won or lost. We
                combine intelligent routing, live tracking, and trained driver
                operations to deliver on time — every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Metrics bar floating at bottom of hero */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 border border-brand-gray-700/50 bg-brand-black/60 backdrop-blur-sm">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="px-8 py-6 text-center border-r border-brand-gray-700/50 last:border-0"
              >
                <div className="font-display font-bold text-2xl text-white tracking-tight mb-0.5">
                  {m.value}
                </div>
                <div className="text-[10px] text-brand-gray-500 uppercase tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery journey — horizontal timeline */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Delivery Journey"
              title="From Dispatch to Door — Every Step Managed"
              description="A structured five-stage delivery process ensures consistency, visibility, and accountability across every last-mile movement."
              className="mb-14"
            />
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-[6%] right-[6%] h-px bg-brand-gray-200" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {deliveryJourney.map((stage, i) => (
                <ScrollReveal key={stage.stage} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="relative z-10 w-12 h-12 bg-brand-red flex items-center justify-center mb-5 shrink-0">
                      <span className="font-display font-bold text-white text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gray-400 mb-1">
                      {stage.time}
                    </span>
                    <h4 className="font-display font-bold text-brand-black text-sm mb-2">
                      {stage.stage}
                    </h4>
                    <p className="text-xs text-brand-gray-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features grid */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Service Features"
              title="Built for the Customer, Managed by Operations"
              description="Every feature of our last-mile delivery program is designed with two audiences in mind: your operations team and your end customers."
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={i * 0.06}>
                  <div className="bg-white border border-brand-gray-200 p-7 hover:border-brand-gray-300 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-brand-red flex items-center justify-center mb-5">
                      <Icon size={17} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-brand-black text-sm mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-brand-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Returns / reverse logistics */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Reverse Logistics"
                title="Returns Don't Have to Be Painful"
                description="Our structured reverse logistics program converts returned shipments from a cost center into a managed, visible, and efficient process."
                className="mb-8"
                light
              />
              <div className="space-y-4">
                {[
                  {
                    title: "Doorstep Collection",
                    desc: "Scheduled return pickups from customer addresses, coordinated with your forward delivery runs.",
                  },
                  {
                    title: "Condition Grading",
                    desc: "Returns are assessed on arrival at our facility — Grade A, B, C classification with photographic evidence.",
                  },
                  {
                    title: "Disposition Routing",
                    desc: "Sellable stock is restocked. Damaged goods are directed to repair, write-off, or liquidation channels.",
                  },
                  {
                    title: "Reporting & Analytics",
                    desc: "Full returns data by reason code, product category, and customer segment — feeding your product and fulfillment teams.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="relative overflow-hidden flex gap-4 p-4 bg-white/10 border border-white/20 hover:border-white/35 transition-colors"
                  >
                    <div
                      className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                    />
                    <CheckCircle2
                      size={15}
                      className="text-white/80 shrink-0 mt-0.5"
                    />
                    <div>
                      <h5 className="font-semibold text-white text-sm mb-0.5">
                        {item.title}
                      </h5>
                      <p className="text-xs text-white/70 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/40 text-white px-8 h-14 font-semibold text-sm tracking-wide hover:border-white/70 hover:bg-white/10 transition-all duration-200 group"
                >
                  Build Your Returns Program
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative ml-4 mb-4">
                <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-brand-black" />
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop"
                    alt="Returns management and processing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/25" />
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
              eyebrow="Related Services"
              title="Complete Your Delivery Chain"
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Distribution",
                href: "/distribution",
                desc: "Hub-to-zone distribution feeding your last-mile operations",
              },
              {
                label: "Warehousing & Storage",
                href: "/warehousing",
                desc: "DC infrastructure upstream of your last-mile delivery",
              },
              {
                label: "E-Commerce Logistics",
                href: "/ecommerce-logistics",
                desc: "Full fulfillment infrastructure for D2C and marketplace brands",
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
