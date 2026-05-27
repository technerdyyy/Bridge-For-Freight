'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'

const faqs = [
  {
    q: 'What does your hiring process look like, end to end?',
    a: 'Our process runs in 5 stages: initial application review, a 30-minute recruiter call, a role-specific screen, a final panel interview with your future team, and a decision — all within 10–14 business days. We don\'t run 8-round interviews or leave candidates waiting without updates after promising conversations.',
  },
  {
    q: 'Do you offer remote or hybrid working arrangements?',
    a: 'It depends on the role. Operations-facing positions are typically hybrid or on-site given the nature of real-time freight coordination. Corporate functions — technology, finance, marketing — offer flexible hybrid models. Every job listing specifies the arrangement upfront so there are no surprises.',
  },
  {
    q: 'What do you look for in candidates beyond technical skills?',
    a: 'Precision, ownership, and communication under pressure. Logistics is a high-stakes environment — missed delivery windows have real financial costs. We want people who chase the right answer, flag problems early, and take full responsibility for their scope. Cultural fit matters here more than most industries.',
  },
  {
    q: 'How quickly are speculative applications reviewed?',
    a: 'We review every speculative application personally within 3 business days. If there is no immediate match, your profile is held on file and revisited whenever a relevant role opens — we will reach out directly rather than waiting for you to reapply.',
  },
  {
    q: 'Are there opportunities for international roles or travel?',
    a: 'Yes. With active operations spanning 40+ countries, international exposure is built into many programs. Senior account management and operational leadership roles frequently involve client travel and, in some cases, temporary or permanent placement at our international hubs.',
  },
  {
    q: 'How does career progression work at Bridge For Freight?',
    a: 'We run structured promotion frameworks with quarterly performance reviews. Senior roles are filled from within wherever possible — much of our current leadership team came up through the business. Promotion timelines are transparent and tied to measurable outcomes, not tenure or internal politics.',
  },
  {
    q: 'Do you sponsor work visas?',
    a: 'We evaluate visa sponsorship on a case-by-case basis depending on role, location, and candidate profile. We have successfully sponsored visas across multiple jurisdictions. If sponsorship is a requirement, flag it in your application and we will assess feasibility early in the process.',
  },
  {
    q: 'What technology do your teams work with day to day?',
    a: 'Operations teams work across modern TMS platforms (CargoWise, MercuryGate), real-time freight visibility tools, and client-specific portals. Our in-house technology team builds proprietary operational tooling on a modern stack. We invest heavily in technology and expect our teams to learn and leverage it actively.',
  },
]

export default function CareersFaq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section-padding bg-white">
      <Container>
        {/* Header — same style as EmployeeTestimonials */}
        <ScrollReveal className="mb-14">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-brand-red" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-gray-500">
                FAQ
              </span>
              <span className="block w-8 h-px bg-brand-red" />
            </div>
            <h2
              className="font-display font-bold text-brand-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Your Questions,
              <br />
              <span className="text-brand-red">Answered Straight.</span>
            </h2>
            <p className="text-brand-gray-500 mt-4 max-w-lg text-base leading-relaxed">
              Everything you need to know about joining Bridge For Freight — before you apply.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto border-t border-brand-gray-200">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="border-b border-brand-gray-200">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left gap-6 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display font-bold text-sm md:text-base leading-snug transition-colors duration-200 ${
                        isOpen
                          ? 'text-brand-red'
                          : 'text-brand-black group-hover:text-brand-red'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? 'bg-brand-red text-white'
                          : 'bg-brand-gray-100 text-brand-gray-600 group-hover:bg-brand-black group-hover:text-white'
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-brand-gray-600 leading-relaxed pb-6 max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
