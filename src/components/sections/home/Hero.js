"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroHeadline, heroSub, heroCTA, heroStats } from "@/lib/animations";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 18400, suffix: "+", label: "Annual Shipments" },
  { value: 40, suffix: "+", label: "Countries" },
  { value: 99.2, suffix: "%", label: "On-Time Delivery", isDecimal: true },
  { value: 15, suffix: "+", label: "Years Operating" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85&auto=format&fit=crop"
          alt="Cargo freight terminal aerial view"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site pb-24 pt-48">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.05,
            }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-10 h-px bg-brand-red" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60">
              Enterprise Logistics Group
            </span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            variants={heroHeadline}
            initial="hidden"
            animate="visible"
            className="font-display font-bold text-white leading-[1.05] tracking-tight mb-7"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
          >
            Freight Coordinated.
            <br />
            <span className="text-brand-red">Delivered</span> with Precision.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={heroSub}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl font-body"
          >
            Bridge For Freight connects your supply chain end-to-end -- with
            real-time coordination, carrier-grade SLAs, and the operational
            infrastructure modern enterprises demand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroCTA}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Stats bar — animated counters */}
      <motion.div
        variants={heroStats}
        initial="hidden"
        animate="visible"
        className="relative z-10 border-t border-white/10 bg-brand-black/60 backdrop-blur-sm"
      >
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => {
              // On mobile reorder: 18400+(1st) → 99.2%(2nd) → 40+(3rd) → 15+(4th)
              // DOM order:           0             2             1            3
              const mobileOrder = ['order-1', 'order-3 md:order-2', 'order-2 md:order-3', 'order-4']
              return (
              <div key={stat.label} className={`py-6 px-8 first:pl-0 last:pr-0 ${mobileOrder[i]}`}>
                <div className="stat-number text-2xl md:text-3xl text-white mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                    duration={1700}
                    delay={820 + i * 140}
                  />
                </div>
                <div className="text-xs font-medium tracking-wider text-white/50 uppercase">
                  {stat.label}
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
