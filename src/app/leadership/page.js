import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/home/CTABanner";
import { team, companyTimeline } from "@/lib/data/team";

export const metadata = {
  title: "Leadership | Bridge For Freight",
  description:
    "Meet the leadership team behind Bridge For Freight — logistics professionals with decades of enterprise experience across global supply chains.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-36 pb-28 overflow-hidden min-h-[540px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1600&q=75&auto=format&fit=crop"
            alt="Leadership team"
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/90 to-brand-black/60" />
        </div>
        <div className="absolute top-0 left-0 w-40 h-1 bg-brand-red" />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-400">
                  About
                </span>
              </div>
              <h1
                className="font-display font-bold text-white leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                The People Who
                <br />
                <span className="text-brand-red">Drive the Operation.</span>
              </h1>
              <p className="text-lg text-brand-gray-300 leading-relaxed mb-10 max-w-xl">
                Bridge For Freight is led by logistics professionals with decades of enterprise experience — building supply chains for manufacturers, retailers, and global brands.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-8 h-13 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
              >
                Work With Our Team
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Team grid */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Leadership"
              title="The Team Behind the Freight"
              description="Experienced operators who have built and run logistics programs at scale — from regional networks to global supply chains."
              className="mb-16"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="group flex flex-col sm:flex-row gap-6 p-8 border border-brand-gray-100 hover:border-brand-red/20 hover:shadow-lg transition-all duration-300">
                  {/* Photo */}
                  <div className="relative w-full sm:w-36 h-48 sm:h-44 shrink-0 overflow-hidden bg-brand-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, 144px"
                    />
                    <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center">
                    <div className="w-5 h-0.5 bg-brand-red mb-3" />
                    <h3 className="font-display font-bold text-brand-black text-xl mb-1 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-red mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-brand-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Company timeline */}
      <section className="section-padding bg-brand-black">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Company History"
              title="Built Over 15 Years of Operation"
              description="From a regional freight brokerage to a global logistics group — the milestones that shaped Bridge For Freight."
              light
              className="mb-16"
            />
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gray-800 -translate-x-1/2" />

            <div className="space-y-0">
              {companyTimeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.07}>
                  <div
                    className={[
                      "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 pb-12 last:pb-0",
                      i % 2 === 0 ? "" : "lg:[&>*]:flex-row-reverse",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Year side */}
                    <div
                      className={[
                        "flex",
                        i % 2 === 0
                          ? "lg:justify-end lg:text-right"
                          : "lg:order-2 lg:justify-start",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <div className="max-w-sm">
                        <span className="font-display font-bold text-brand-red text-5xl lg:text-6xl tracking-tight">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={[
                        "relative flex",
                        i % 2 === 0 ? "lg:order-2" : "lg:justify-end lg:text-right",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {/* Center dot on lg screens */}
                      <div className="hidden lg:block absolute top-3 -left-[calc(2rem+0.5px)] lg:-left-[calc(2rem+0.5px)] w-3 h-3 bg-brand-red border-2 border-brand-black rounded-full" />

                      <div className="max-w-sm">
                        <h3 className="font-display font-bold text-white text-xl mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Company stats */}
      <section className="section-padding bg-brand-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="By the Numbers"
                title="Scale That Comes From Experience"
                description="Fifteen years of continuous operation have given us the network, knowledge, and team to manage logistics at any scale."
              />
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/our-process"
                  className="inline-flex items-center gap-2 bg-brand-red text-white px-7 h-12 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors group"
                >
                  Our Process
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-brand-gray-300 text-brand-black px-7 h-12 font-semibold text-sm tracking-wide hover:border-brand-gray-500 hover:bg-brand-gray-100 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px bg-brand-gray-200">
                {[
                  { value: "2009", label: "Year founded" },
                  { value: "40+", label: "Countries of operation" },
                  { value: "200+", label: "Operations professionals" },
                  { value: "99.2%", label: "On-time delivery rate" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-8">
                    <div className="font-display font-bold text-brand-black text-3xl lg:text-4xl tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
