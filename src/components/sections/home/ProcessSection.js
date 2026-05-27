'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { processSteps } from '@/lib/data/process'

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-brand-black">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Process"
            title="How We Move Your Freight"
            description="A disciplined five-stage methodology that transforms your freight requirements into reliable, repeatable execution."
            light
            className="mb-20"
          />
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <ScrollReveal className="absolute top-8 left-0 right-0 flex items-center px-16">
            <div className="h-px w-full bg-brand-gray-800 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brand-red"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative pt-0">
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 bg-brand-charcoal border border-brand-gray-800 flex items-center justify-center mb-8 mx-auto group-hover:border-brand-red transition-colors">
                    <span className="font-display font-bold text-brand-red text-sm">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="font-display font-semibold text-white text-base mb-3 text-center">
                    {step.title}
                  </h4>
                  <p className="text-xs text-brand-gray-500 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="flex gap-6 pb-10 relative">
                {/* Vertical line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-brand-gray-800" />
                )}

                {/* Step number */}
                <div className="shrink-0 w-10 h-10 bg-brand-charcoal border border-brand-gray-800 flex items-center justify-center">
                  <span className="font-display font-bold text-brand-red text-xs">
                    {step.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h4 className="font-display font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-brand-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
