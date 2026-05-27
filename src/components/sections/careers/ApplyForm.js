'use client'

import { useState, useRef } from 'react'
import { ArrowRight, Upload, CheckCircle2, Paperclip, X } from 'lucide-react'

export default function ApplyForm({ defaultRole = '' }) {
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const fileRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: defaultRole,
    linkedin: '',
    message: '',
  })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleFile(file) {
    if (!file) return
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (allowed.includes(file.type) || file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
      setResumeFile(file)
    }
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 border border-brand-gray-200">
        <div className="w-16 h-16 bg-brand-red flex items-center justify-center mb-6">
          <CheckCircle2 size={28} className="text-white" />
        </div>
        <h3 className="font-display font-bold text-2xl text-brand-black mb-3 tracking-tight">
          Application Received
        </h3>
        <p className="text-brand-gray-600 max-w-md leading-relaxed text-sm">
          Thank you for applying. Our talent team reviews every application and will
          be in touch within 3 business days if your background aligns.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-brand-gray-200 p-8 lg:p-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
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
        <div>
          <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
            Applying For
          </label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role title"
            className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
          LinkedIn / Portfolio URL
        </label>
        <input
          type="url"
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors"
        />
      </div>

      {/* Resume upload */}
      <div className="mb-5">
        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
          Resume / CV <span className="text-brand-red">*</span>
        </label>
        {resumeFile ? (
          <div className="flex items-center gap-3 px-4 py-3 border border-brand-gray-200 bg-brand-gray-50">
            <Paperclip size={14} className="text-brand-red shrink-0" />
            <span className="text-sm text-brand-black font-medium flex-1 truncate">
              {resumeFile.name}
            </span>
            <button
              type="button"
              onClick={() => setResumeFile(null)}
              className="text-brand-gray-400 hover:text-brand-black transition-colors"
            >
              <X size={15} />
            </button>
          </div>
        ) : (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`flex flex-col items-center justify-center gap-3 px-6 py-10 border-2 border-dashed cursor-pointer transition-all duration-200 ${
              dragOver
                ? 'border-brand-red bg-red-50'
                : 'border-brand-gray-300 hover:border-brand-gray-400 hover:bg-brand-gray-50'
            }`}
          >
            <div className={`w-10 h-10 flex items-center justify-center transition-colors ${dragOver ? 'bg-brand-red' : 'bg-brand-gray-100'}`}>
              <Upload size={18} className={dragOver ? 'text-white' : 'text-brand-gray-500'} />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-brand-black">
                {dragOver ? 'Drop file here' : 'Drag & drop or click to upload'}
              </p>
              <p className="text-xs text-brand-gray-500 mt-0.5">PDF, DOC, or DOCX — max 5MB</p>
            </div>
          </div>
        )}
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      <div className="mb-8">
        <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-brand-gray-600 mb-2">
          Cover Note <span className="text-brand-red">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your background, why Bridge For Freight, and what you'd bring to the team..."
          className="w-full bg-white border border-brand-gray-200 px-4 py-3 text-sm text-brand-black placeholder-brand-gray-400 focus:outline-none focus:border-brand-black transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red text-white px-10 h-14 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors duration-200 group"
      >
        <span
          className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
        />
        Submit Application
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
