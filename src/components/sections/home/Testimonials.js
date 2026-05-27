"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/data/testimonials";

const CARD_GAP = 20; // px

function getItemsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1280) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function StarRow({ isAlt }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={isAlt ? "text-white" : "text-amber-400"}
          style={{ fill: "currentColor", strokeWidth: 0 }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ review, isAlt }) {
  return (
    <div
      className={`h-full flex flex-col p-6 md:p-8 lg:p-9 ${
        isAlt ? "bg-brand-red" : "bg-brand-gray-50"
      }`}
    >
      {/* Quote mark */}
      <div
        className={`font-display font-black text-5xl leading-none mb-4 select-none ${
          isAlt ? "text-white/22" : "text-brand-red"
        }`}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="mb-4">
        <StarRow isAlt={isAlt} />
      </div>

      {/* Quote */}
      <blockquote
        className={`text-[0.875rem] leading-relaxed flex-1 mb-6 ${
          isAlt ? "text-white/88" : "text-brand-gray-700"
        }`}
      >
        {review.quote}
      </blockquote>

      {/* Attribution */}
      <div
        className={`border-t pt-5 flex items-center gap-3 ${
          isAlt ? "border-white/15" : "border-brand-gray-200"
        }`}
      >
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-brand-gray-200">
          <Image
            src={review.avatar}
            alt={review.author}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name + role */}
        <div className="min-w-0 flex-1">
          <div
            className={`font-display font-bold text-sm leading-tight truncate ${
              isAlt ? "text-white" : "text-brand-black"
            }`}
          >
            {review.author}
          </div>
          <div
            className={`text-[11px] mt-0.5 truncate ${
              isAlt ? "text-white/60" : "text-brand-gray-500"
            }`}
          >
            {review.role} · {review.company}
          </div>
        </div>

        {/* Industry badge */}
        <span
          className={`text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-1 shrink-0 ${
            isAlt
              ? "bg-white/15 text-white"
              : "bg-brand-gray-200 text-brand-gray-600"
          }`}
        >
          {review.industry}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const ipv = getItemsPerView();
    setItemsPerView(ipv);
    setCardWidth((w - CARD_GAP * (ipv - 1)) / ipv);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);
  const safeIndex = Math.min(index, maxIndex);
  const trackX = cardWidth > 0 ? -(safeIndex * (cardWidth + CARD_GAP)) : 0;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "clamp(5rem, 9vw, 8rem)",
        paddingBottom: "clamp(5rem, 9vw, 8rem)",
      }}
    >
      <Container>
        {/* ── HEADER ── */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-brand-red" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-gray-500">
                Client Outcomes
              </span>
              <span className="block w-8 h-px bg-brand-red" />
            </div>
            <h2
              className="font-display font-bold text-brand-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Results That Speak
              <br />
              <span className="text-brand-red">to the Work.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── SLIDER + SIDE ARROWS ── */}
        <div>
          <div className="flex items-center gap-4">
            {/* Prev button — desktop only */}
            <button
              onClick={prev}
              disabled={safeIndex === 0}
              aria-label="Previous testimonials"
              className="hidden md:flex shrink-0 w-11 h-11 rounded-full border border-brand-gray-200 items-center justify-center text-brand-gray-500 hover:bg-brand-black hover:border-brand-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={17} />
            </button>

            {/* Slider track */}
            <div
              ref={containerRef}
              className="overflow-hidden flex-1"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex items-stretch"
                animate={{ x: trackX }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ gap: CARD_GAP }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.id}
                    style={{ width: cardWidth || "100%", flexShrink: 0 }}
                  >
                    <TestimonialCard review={t} isAlt={i % 2 !== 0} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Next button — desktop only */}
            <button
              onClick={next}
              disabled={safeIndex >= maxIndex}
              aria-label="Next testimonials"
              className="hidden md:flex shrink-0 w-11 h-11 rounded-full border border-brand-gray-200 items-center justify-center text-brand-gray-500 hover:bg-brand-black hover:border-brand-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={17} />
            </button>
          </div>

          {/* Mobile controls: arrows flanking dots, shown below slider */}
          <div className="flex md:hidden items-center gap-3 mt-6">
            <button
              onClick={prev}
              disabled={safeIndex === 0}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-brand-gray-200 flex items-center justify-center text-brand-gray-500 hover:bg-brand-black hover:border-brand-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex-1 flex items-center justify-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-200 rounded-full ${
                    i === safeIndex
                      ? "w-6 h-1.5 bg-brand-red"
                      : "w-1.5 h-1.5 bg-brand-gray-300 hover:bg-brand-gray-400"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={safeIndex >= maxIndex}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-brand-gray-200 flex items-center justify-center text-brand-gray-500 hover:bg-brand-black hover:border-brand-black hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
