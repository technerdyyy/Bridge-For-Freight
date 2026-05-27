"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Truck,
  Warehouse,
  Network,
  LineChart,
  MapPin,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data/services";

const iconMap = { Truck, Warehouse, Network, LineChart, MapPin, Globe };
const EASE = [0.22, 1, 0.36, 1];

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Truck;
  const router = useRouter();

  return (
    <ScrollReveal delay={index * 0.055}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="relative overflow-hidden group cursor-pointer"
        style={{ height: "clamp(310px, 31vw, 400px)" }}
        onClick={() => router.push(service.href)}
      >
        {/* ── IMAGE ── */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* ── OVERLAYS ── */}
        <div className="absolute inset-0 bg-brand-red/5" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(193,18,31,0.38) 0%, rgba(193,18,31,0.12) 46%, transparent 100%)",
          }}
        />

        {/* ── CONTENT ── */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {/* Top: icon + step number */}
          <div className="flex items-start justify-between p-7 lg:p-8">
            <div className="w-9 h-9 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white">
              <Icon
                size={15}
                className="text-white group-hover:text-brand-red transition-colors duration-300"
              />
            </div>
            <span className="font-display text-[10px] font-bold text-white/25 tracking-[0.3em] leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Bottom: animated red strip + text */}
          <div className="relative overflow-hidden">
            {/* Red strip — fades in on hover */}
            <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-50 transition-opacity duration-400 ease-out" />

            <div className="relative px-7 pb-7 pt-5 lg:px-8 lg:pb-8">
              <h3
                className="font-display font-bold text-white leading-tight tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5"
                style={{ fontSize: "clamp(1rem, 1.55vw, 1.175rem)" }}
              >
                {service.title}
              </h3>

              {/* Description — reveals on hover */}
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white/90 text-[0.8rem] leading-relaxed pt-2.5 pb-3">
                  {service.shortDescription}
                </p>
              </div>

              {/* CTA — visual only, whole card is clickable */}
              <div className="inline-flex items-center gap-1.5 mt-2.5">
                <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                  Explore
                </span>
                <ArrowUpRight
                  size={11}
                  className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function ServicesOverview() {
  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "clamp(4.5rem, 8vw, 7rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 7rem)",
      }}
    >
      <Container>
        {/* ── HEADER ── */}
        <ScrollReveal className="mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-brand-red" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-gray-500">
              Our Services
            </span>
          </div>
          <h2
            className="font-display font-bold text-brand-black leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Every link in your
            <br />
            <span className="text-brand-red">supply chain.</span>
          </h2>
        </ScrollReveal>

        {/* ── CARD GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
