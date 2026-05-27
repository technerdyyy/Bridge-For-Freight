import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";
import JourneyTimeline from "@/components/sections/about/JourneyTimeline";
import { team, companyTimeline } from "@/lib/data/team";

export const metadata = {
  title: "About",
  description:
    "Bridge For Freight is an enterprise logistics group with 15+ years of operational experience in freight management, warehousing, and cross-border logistics.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── FULL-PAGE HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=85&auto=format&fit=crop"
            alt="Global freight operations"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-black/65" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black/60 to-transparent" />
        </div>

        <div className="absolute top-0 left-0 w-32 h-1 bg-brand-red" />

        <div className="relative z-10 container-site pt-24">
          <div className="max-w-3xl mb-24">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-10 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60">
                  About Bridge For Freight
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-[1.05] tracking-tight mb-7"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
              >
                Operational Excellence,
                <br />
                <span className="text-brand-red">15 Years in the Making.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Bridge For Freight was founded on a single conviction: that
                enterprise logistics should be built around the client&apos;s
                operational reality — not the logistics provider&apos;s
                convenience.
              </p>
              <div className="mt-7">
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
        </div>
      </section>

      {/* ── RED CTA STRIP ── */}
      {/* <section className="bg-brand-red py-16 lg:py-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-white/70 text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
                Enterprise Logistics Group
              </p>
              <h2
                className="font-display font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
              >
                Ready to move your freight
                <br />
                with precision?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-red px-8 h-14 font-semibold text-sm tracking-wide hover:bg-brand-black hover:text-white transition-colors duration-200 group"
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/35 text-white px-8 h-14 font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section> */}

      {/* ── STORY ── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop"
                    alt="Logistics operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 max-w-xs">
                  <p className="font-display font-bold text-lg mb-1 leading-tight">
                    &ldquo;We bridge the distance between where goods are and
                    where they need to be.&rdquo;
                  </p>
                  <p className="text-xs text-white/60 mt-2">
                    — Daniel Garrett, CEO
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <SectionHeader
                  eyebrow="Our Story"
                  title="Built From the Ground Up on Operational Discipline"
                  className="mb-8"
                />
              </ScrollReveal>

              <div className="space-y-5 text-brand-gray-600 text-base leading-relaxed">
                <ScrollReveal>
                  <p>
                    Bridge For Freight was established in 2009 as a regional
                    freight brokerage serving mid-market manufacturing clients
                    in the Southeast United States. From the beginning, our
                    approach was defined by operational rigor — carrier vetting,
                    SLA enforcement, and client-side transparency that most
                    logistics providers weren&apos;t offering.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <p>
                    Over the following decade, we expanded systematically:
                    warehousing in 2012, international operations in 2015, and
                    our proprietary TMS platform in 2018. Each expansion was
                    driven by client need, not speculative growth — and executed
                    with the same operational discipline that built our
                    reputation in domestic freight.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <p>
                    Today, Bridge For Freight manages 18,400+ annual shipments
                    across 40+ countries, serves Fortune 500 clients alongside
                    high-growth mid-market businesses, and maintains a 99.2%
                    on-time delivery record. We remain privately held and
                    operationally focused — because we believe the best
                    logistics companies are run by people who understand what it
                    costs when a shipment doesn&apos;t move on time.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section
        className="overflow-hidden relative"
        style={{
          background:
            "linear-gradient(160deg, #9E0F1A 0%, #C1121F 45%, #A8101C 75%, #8B0D16 100%)",
          paddingTop: "clamp(4rem, 8vw, 7rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        <Container>
          <ScrollReveal className="mb-14 lg:mb-20">
            <SectionHeader
              eyebrow="Our Journey"
              title="A History of Deliberate Growth"
              description="Each milestone in our history reflects a deliberate expansion of capability — always driven by what our clients needed next."
              light
            />
          </ScrollReveal>

          <JourneyTimeline items={companyTimeline} />
        </Container>
      </section>

      {/* ── LEADERSHIP ── */}
      <section id="leadership" className="section-padding bg-white">
        <Container>
          <ScrollReveal className="mb-16">
            <SectionHeader
              eyebrow="Leadership"
              title="Operators, Not Just Executives"
              description="Our leadership team has built and run logistics programs across every major industry. They understand what's at stake when freight doesn't move."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.07}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-brand-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-500 lg:grayscale lg:group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-10 bg-brand-red shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-brand-black mb-0.5">
                        {member.name}
                      </h4>
                      <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-red mb-3">
                        {member.role}
                      </div>
                      <p className="text-xs text-brand-gray-500 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
