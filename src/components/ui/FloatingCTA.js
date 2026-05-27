"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const pathname = usePathname();

  // Hide on the contact page itself
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulsing ring */}
      <span
        className="absolute inset-0 animate-ping bg-brand-red opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      <Link
        href="/contact"
        aria-label="Get a Quote"
        className="relative flex items-center gap-2.5 bg-brand-red text-white px-5 h-12 font-semibold text-sm tracking-wide shadow-2xl hover:bg-brand-red-dark transition-colors duration-200 group overflow-hidden"
      >
        {/* Shine sweep */}
        <span
          className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
          }}
        />

        {/* Bridge icon (same as favicon / navbar mark) */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M1 13h16M1 13V9a8 8 0 0 1 16 0v4M5 13V9M9 13V7M13 13V9"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
