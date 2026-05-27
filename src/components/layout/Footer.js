"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Rss, Share2 } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Freight Management", href: "/services/freight-management" },
    { label: "Warehousing", href: "/services/warehousing" },
    { label: "Distribution", href: "/services/distribution" },
    { label: "Supply Chain Optimization", href: "/services/supply-chain-optimization" },
    { label: "Last Mile Delivery", href: "/services/last-mile-delivery" },
    { label: "Cross Border Logistics", href: "/services/cross-border-logistics" },
  ],
  Industries: [
    { label: "Retail", href: "/industries/retail-logistics" },
    { label: "Manufacturing", href: "/industries/manufacturing-logistics" },
    { label: "Automotive", href: "/industries/automotive-logistics" },
    { label: "Healthcare", href: "/industries/healthcare-logistics" },
    { label: "E-Commerce", href: "/industries/ecommerce-logistics" },
    { label: "Industrial Supply", href: "/industries/industrial-supply-logistics" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/our-process" },
    { label: "Leadership", href: "/leadership" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-6 group w-fit"
            >
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M1 13h16M1 13V9a8 8 0 0 1 16 0v4M5 13V9M9 13V7M13 13V9"
                    stroke="white"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-sm text-white">
                  Bridge For Freight
                </span>
                <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-white/40">
                  Logistics Group
                </span>
              </div>
            </Link>

            <p className="text-brand-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Enterprise logistics management across freight, warehousing, and
              cross-border operations. Built for businesses that demand
              precision at scale.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:operations@bridgeforfreight.com"
                className="flex items-center gap-3 text-sm text-brand-gray-400 hover:text-white transition-colors group"
              >
                <Mail size={14} className="text-brand-red shrink-0" />
                operations@bridgeforfreight.com
              </a>
              <a
                href="tel:+18005550199"
                className="flex items-center gap-3 text-sm text-brand-gray-400 hover:text-white transition-colors group"
              >
                <Phone size={14} className="text-brand-red shrink-0" />
                +1 (800) 555-0199
              </a>
              <div className="flex items-start gap-3 text-sm text-brand-gray-400">
                <MapPin size={14} className="text-brand-red shrink-0 mt-0.5" />
                <span>
                  1400 Freight Blvd, Suite 800
                  <br />
                  Atlanta, GA 30339
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Globe, href: "#", label: "Website" },
                { Icon: Share2, href: "#", label: "LinkedIn" },
                { Icon: Rss, href: "#", label: "News Feed" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-brand-gray-800 flex items-center justify-center text-brand-gray-500 hover:text-white hover:border-brand-gray-600 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gray-500 mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-gray-400 hover:text-white transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-brand-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-display font-semibold text-white text-lg mb-1">
                Logistics Intelligence
              </h4>
              <p className="text-sm text-brand-gray-400">
                Market updates, freight insights, and operational guides for
                supply chain leaders.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-0">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 bg-brand-gray-900 border border-brand-gray-800 px-4 py-3 text-sm text-white placeholder-brand-gray-600 focus:outline-none focus:border-brand-gray-600 transition-colors"
              />
              <button
                type="submit"
                className="relative overflow-hidden bg-brand-red text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-brand-red-dark transition-colors shrink-0"
              >
                <span
                  className="shine-sweep absolute inset-y-0 left-0 w-12 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
                />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gray-800">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-brand-gray-600">
              © {new Date().getFullYear()} Bridge For Freight Logistics Group.
              All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-xs text-brand-gray-600 hover:text-brand-gray-400 transition-colors"
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
