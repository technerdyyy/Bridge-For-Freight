'use client'

import { useState } from 'react'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const serviceOptions = [
  'Freight Management',
  'Warehousing & Storage',
  'Distribution Solutions',
  'Supply Chain Optimization',
  'Last Mile Delivery',
  'Cross Border Logistics',
  'Other / General Inquiry',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    volume: '',
    message: '',
  })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-24 border border-brand-gray-200">
        <div className="w-16 h-16 bg-brand-red flex items-center justify-center mb-6">
          <CheckCircle2 size={28} className="text-white" />
        </div>
        <h3 className="font-display font-bold text-2xl text-brand-black mb-3 tracking-tight">
          Message Received
        </h3>
        <p className="text-brand-gray-600 max-w-md leading-relaxed">
          Our operations team will review your inquiry and follow up within 4 business hours.
          For urgent freight needs, call our operations line directly.
        </p>
        <a
          href="tel:+18005550199"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-red border-b border-brand-red pb-0.5 hover:text-brand-red-dark transition-colors"
        >
          <Phone size={14} />
          +1 (800) 555-0199
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-brand-gray-200 p-8 lg:p-12">
      <h3 className="font-display font-bold text-xl text-brand-black mb-1 tracking-tight">
        Request a Consultation
      </h3>
      <p className="text-sm text-brand-gray-500 mb-8">
        Tell us about your freight needs — we&apos;ll design a program around your specific requirements.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="James Caldwell"
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="james@yourcompany.com"
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
            Company <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            placeholder="Apex Commerce Inc."
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
            Service Interest <span className="text-brand-red">*</span>
          </label>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black focus:outline-none focus:border-brand-black transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
            Monthly Shipment Volume
          </label>
          <select
            name="volume"
            value={form.volume}
            onChange={handleChange}
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black focus:outline-none focus:border-brand-black transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select volume</option>
            <option>Under 50 shipments</option>
            <option>50–200 shipments</option>
            <option>200–500 shipments</option>
            <option>500–1,000 shipments</option>
            <option>1,000+ shipments</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray-600 mb-2">
          Tell Us About Your Needs <span className="text-brand-red">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your current logistics setup, key challenges, or what you'd like help with..."
          className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red text-white px-10 h-14 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors duration-200 group"
      >
        Send Request
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
