import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Building2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ContactForm from '@/components/sections/contact/ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Bridge For Freight operations team. Request a quote, logistics assessment, or long-term freight program proposal.',
}

const contactDetails = [
  {
    Icon: Phone,
    label: 'Operations Line',
    value: '+1 (800) 555-0199',
    href: 'tel:+18005550199',
    note: 'Mon-Fri, 6am - 8pm EST',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'operations@bridgeforfreight.com',
    href: 'mailto:operations@bridgeforfreight.com',
    note: 'Response within 4 business hours',
  },
  {
    Icon: MapPin,
    label: 'Headquarters',
    value: '1400 Freight Blvd, Suite 800',
    sub: 'Atlanta, GA 30339',
    note: null,
  },
]

const responsePromises = [
  { Icon: Clock, text: 'Initial response within 4 business hours' },
  { Icon: CheckCircle2, text: 'Dedicated operations contact assigned' },
  { Icon: Building2, text: 'Custom program proposal within 3-5 days' },
]

const offices = [
  {
    city: 'Atlanta, GA',
    label: 'Headquarters',
    address: '1400 Freight Blvd, Suite 800\nAtlanta, GA 30339',
    phone: '+1 (800) 555-0199',
  },
  {
    city: 'Chicago, IL',
    label: 'Midwest Hub',
    address: '200 Logistics Way, Floor 12\nChicago, IL 60601',
    phone: '+1 (800) 555-0200',
  },
  {
    city: 'Los Angeles, CA',
    label: 'West Coast Hub',
    address: '3500 Harbor Blvd, Suite 400\nLos Angeles, CA 90015',
    phone: '+1 (800) 555-0201',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1600&q=75&auto=format&fit=crop"
            alt="Logistics operations"
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-black via-brand-black/90 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 w-32 h-1 bg-brand-red" />
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-red" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-gray-500">
                Get in Touch
              </span>
            </div>
            <h1
              className="font-display font-bold text-white leading-tight tracking-tight mb-5 max-w-2xl"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}
            >
              Let&apos;s Talk About Your
              <br />
              <span className="text-brand-red">Freight Program.</span>
            </h1>
            <p className="text-lg text-brand-gray-400 max-w-lg leading-relaxed">
              Whether you need a quote, a logistics assessment, or a long-term program partner --
              our operations team is ready to listen.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Main contact area */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-2 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-brand-gray-600 text-sm mb-10 leading-relaxed">
                  Reach our operations team directly, or fill out the form and we&apos;ll be in touch within
                  4 business hours.
                </p>

                <div className="space-y-6 mb-12">
                  {contactDetails.map(({ Icon, label, value, href, sub, note }) => (
                    <div key={label} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-brand-gray-100 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300">
                        <Icon
                          size={16}
                          className="text-brand-gray-600 group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-gray-500 mb-0.5">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-brand-black hover:text-brand-red transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-brand-black">{value}</div>
                        )}
                        {sub && <div className="text-sm text-brand-gray-500">{sub}</div>}
                        {note && <div className="text-xs text-brand-gray-400 mt-0.5">{note}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-brand-gray-200 pt-8">
                  <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gray-500 mb-5">
                    What to Expect
                  </h4>
                  <div className="space-y-3">
                    {responsePromises.map(({ Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <Icon size={14} className="text-brand-red shrink-0" />
                        <span className="text-sm text-brand-gray-600">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Map placeholder */}
              <ScrollReveal delay={0.1} className="mt-10">
                <div className="relative h-52 bg-brand-gray-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70&auto=format&fit=crop"
                    alt="Atlanta office location"
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 flex items-center justify-center">
                    <div className="bg-white px-4 py-3 text-center">
                      <div className="text-xs font-semibold text-brand-black">Atlanta HQ</div>
                      <div className="text-[10px] text-brand-gray-500">1400 Freight Blvd, Suite 800</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Interactive form (client component) */}
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.08}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Regional offices */}
      <section className="py-16 bg-brand-gray-50 border-t border-brand-gray-200">
        <Container>
          <ScrollReveal className="mb-12">
            <SectionHeader
              eyebrow="Locations"
              title="Where We Operate"
              description="Operational hubs across North America, Europe, and Asia-Pacific."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-gray-200">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.08} className="bg-white p-8 lg:p-10">
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-red mb-2">
                  {office.label}
                </div>
                <h4 className="font-display font-bold text-xl text-brand-black mb-4">{office.city}</h4>
                <p className="text-sm text-brand-gray-600 mb-3 whitespace-pre-line">{office.address}</p>
                <a
                  href={`tel:${office.phone.replace(/\D/g, '')}`}
                  className="text-sm font-medium text-brand-black hover:text-brand-red transition-colors"
                >
                  {office.phone}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
