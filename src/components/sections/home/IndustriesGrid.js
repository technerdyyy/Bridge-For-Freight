import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Factory,
  Car,
  HeartPulse,
  ShoppingCart,
  Settings,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industries } from "@/lib/data/industries";

const iconMap = {
  ShoppingBag,
  Factory,
  Car,
  HeartPulse,
  ShoppingCart,
  Settings,
};

export default function IndustriesGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Industries"
              title="Logistics Built Around Your Sector"
              description="Every industry has its own rhythm, compliance requirements, and customer expectations. We build logistics programs that match."
            />
          </ScrollReveal>
          {/* <ScrollReveal delay={0.1}>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black border-b border-brand-black pb-0.5 hover:text-brand-red hover:border-brand-red transition-colors group shrink-0"
            >
              All Industries
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Settings;
            return (
              <ScrollReveal key={industry.id} delay={i * 0.06}>
                <Link
                  href={industry.href}
                  className="group block relative overflow-hidden h-72"
                >
                  {/* Background image */}
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-black/90 via-brand-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-brand-red" />
                      <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/60">
                        {industry.title}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-1 tracking-tight">
                      {industry.subtitle}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-red mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
