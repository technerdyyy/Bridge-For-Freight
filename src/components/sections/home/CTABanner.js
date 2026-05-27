import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-24 lg:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=75&auto=format&fit=crop"
          alt="Freight port aerial"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
      </div>

      {/* Red accent top-left */}
      <div className="absolute top-0 left-0 w-48 h-1 bg-brand-red" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-red" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                Ready to Bridge the Gap
              </span>
            </div>

            <h2
              className="font-display font-bold text-white leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Your Supply Chain Deserves
              <br />
              <span className="text-brand-red">Logistics That Performs.</span>
            </h2>

            <p className="text-lg text-brand-gray-400 leading-relaxed mb-10 max-w-xl">
              Let our operations team assess your current freight program and
              identify immediate opportunities for cost reduction and service
              improvement.
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
                Start the Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              {/* <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-gray-700 text-white px-8 h-14 font-semibold text-sm tracking-wide hover:border-brand-gray-500 hover:bg-white/5 transition-all duration-200"
              >
                Explore Our Services
              </Link> */}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
