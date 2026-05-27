"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicesNav, industriesNav } from "@/lib/data/navData";

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.14, ease: "easeIn" },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.04 + 0.08,
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

function NavDropdown({ items, label, allHref }) {
  return (
    <motion.div
      key="dropdown"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white border border-brand-gray-200 shadow-[0_16px_48px_-8px_rgba(0,0,0,0.12)] z-50"
    >
      {/* Header row */}
      {/* <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-brand-gray-100">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gray-400">
          {label}
        </span>
        <Link
          href={allHref}
          className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-brand-red hover:text-brand-red-dark transition-colors"
        >
          View all
          <ArrowRight size={11} />
        </Link>
      </div> */}

      {/* Items grid */}
      <div className="grid grid-cols-2 gap-0 p-3">
        {items.map((item) => (
          <DropdownItem key={item.href} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

function DropdownItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex items-start gap-3 px-3 py-3 transition-colors duration-150",
        isActive ? "bg-brand-gray-50" : "hover:bg-brand-gray-50",
      )}
    >
      <div
        className={cn(
          "w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors duration-150",
          isActive
            ? "bg-brand-red"
            : "bg-brand-gray-300 group-hover:bg-brand-red",
        )}
      />
      <div className="min-w-0">
        <span
          className={cn(
            "block text-sm font-semibold leading-tight mb-0.5 transition-colors duration-150",
            isActive
              ? "text-brand-red"
              : "text-brand-black group-hover:text-brand-red",
          )}
        >
          {item.label}
        </span>
        <span className="block text-xs text-brand-gray-500 leading-snug">
          {item.description}
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  const openDropdown = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 80);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isServiceActive = servicesNav.some((s) => pathname === s.href);
  const isIndustryActive = industriesNav.some((s) => pathname === s.href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-white/92 backdrop-blur-md border-b border-brand-gray-200/70 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_0_rgba(0,0,0,0.04)]",
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-18 py-2">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Bridge For Freight — Home"
              className={cn(
                "relative shrink-0 z-10 flex items-center h-10 md:h-12",
                mobileOpen ? "invisible md:visible" : "",
              )}
            >
              {/* White logo — visible on transparent/dark navbar */}
              <Image
                src="/freightLogo_white.svg"
                alt="Bridge For Freight"
                width={320}
                height={90}
                priority
                unoptimized
                className={cn(
                  "h-10 md:h-12 w-auto transition-opacity duration-300",
                  transparent && !mobileOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none",
                )}
              />
              {/* Red logo — visible on white/scrolled navbar, stacked on top */}
              <Image
                src="/freightLogo_red.svg"
                alt=""
                aria-hidden="true"
                width={320}
                height={90}
                priority
                unoptimized
                className={cn(
                  "h-10 md:h-12 w-auto absolute inset-0 transition-opacity duration-300",
                  transparent && !mobileOpen
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100",
                )}
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {/* About */}
              <Link
                href="/about"
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors duration-200 px-4 py-2 group",
                  pathname === "/about"
                    ? transparent
                      ? "text-white"
                      : "text-brand-black"
                    : transparent
                      ? "text-white/80 hover:text-white"
                      : "text-brand-gray-600 hover:text-brand-black",
                )}
              >
                About
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-px bg-brand-red transition-all duration-300",
                    pathname === "/about"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100",
                  )}
                />
              </Link>

              {/* Services dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "services"}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 px-4 py-2 group",
                    isServiceActive
                      ? transparent
                        ? "text-white"
                        : "text-brand-black"
                      : transparent
                        ? "text-white/80 hover:text-white"
                        : "text-brand-gray-600 hover:text-brand-black",
                  )}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === "services" ? "rotate-180" : "",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-px bg-brand-red transition-all duration-300",
                      isServiceActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <NavDropdown
                        items={servicesNav}
                        label="Our Services"
                        allHref="/services"
                      />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("industries")}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "industries"}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 px-4 py-2 group",
                    isIndustryActive
                      ? transparent
                        ? "text-white"
                        : "text-brand-black"
                      : transparent
                        ? "text-white/80 hover:text-white"
                        : "text-brand-gray-600 hover:text-brand-black",
                  )}
                >
                  Industries
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === "industries" ? "rotate-180" : "",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-px bg-brand-red transition-all duration-300",
                      isIndustryActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "industries" && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <NavDropdown
                        items={industriesNav}
                        label="Industries We Serve"
                        allHref="/industries"
                      />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Careers */}
              <Link
                href="/careers"
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors duration-200 px-4 py-2 group",
                  pathname === "/careers" || pathname.startsWith("/careers/")
                    ? transparent
                      ? "text-white"
                      : "text-brand-black"
                    : transparent
                      ? "text-white/80 hover:text-white"
                      : "text-brand-gray-600 hover:text-brand-black",
                )}
              >
                Careers
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-px bg-brand-red transition-all duration-300",
                    pathname === "/careers" || pathname.startsWith("/careers/")
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100",
                  )}
                />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors duration-200 px-4 py-2 group",
                  pathname === "/contact"
                    ? transparent
                      ? "text-white"
                      : "text-brand-black"
                    : transparent
                      ? "text-white/80 hover:text-white"
                      : "text-brand-gray-600 hover:text-brand-black",
                )}
              >
                Contact
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-px bg-brand-red transition-all duration-300",
                    pathname === "/contact"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100",
                  )}
                />
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "relative overflow-hidden text-sm font-semibold tracking-wide px-6 py-2.5 transition-all duration-200",
                  transparent
                    ? "bg-white text-brand-black hover:bg-brand-red hover:text-white"
                    : "bg-brand-red text-white hover:bg-brand-red-dark",
                )}
              >
                {!transparent && (
                  <span
                    className="shine-sweep absolute inset-y-0 left-0 w-12 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                    }}
                  />
                )}
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className={cn(
                "lg:hidden p-2 transition-colors duration-200",
                transparent
                  ? "text-white hover:text-white/80"
                  : "text-brand-black hover:text-brand-gray-600",
              )}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between h-18 py-4 px-6 border-b border-brand-gray-200 shrink-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/freightLogo_red.svg"
                  alt="Bridge For Freight"
                  width={320}
                  height={90}
                  unoptimized
                  className="h-9 w-auto"
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-brand-black"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile nav items */}
            <nav className="flex flex-col px-6 pt-6 pb-4 flex-1">
              {/* About */}
              <motion.div
                custom={0}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/about"
                  className={cn(
                    "flex items-center justify-between py-4 border-b border-brand-gray-100",
                    "text-base font-semibold font-display text-brand-black hover:text-brand-red transition-colors",
                    pathname === "/about" && "text-brand-red",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  About
                  <ChevronRight size={16} className="text-brand-gray-400" />
                </Link>
              </motion.div>

              {/* Services accordion */}
              <motion.div
                custom={1}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
              >
                <button
                  className={cn(
                    "w-full flex items-center justify-between py-4 border-b border-brand-gray-100",
                    "text-base font-semibold font-display text-brand-black hover:text-brand-red transition-colors",
                    (isServiceActive || mobileExpanded === "services") &&
                      "text-brand-red",
                  )}
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === "services" ? null : "services",
                    )
                  }
                  aria-expanded={mobileExpanded === "services"}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={cn(
                      "text-brand-gray-400 transition-transform duration-200",
                      mobileExpanded === "services" && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "services" && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="py-2 pl-3">
                        {servicesNav.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 py-3 border-b border-brand-gray-50 last:border-0",
                              "text-sm text-brand-gray-700 hover:text-brand-red transition-colors",
                              pathname === item.href &&
                                "text-brand-red font-semibold",
                            )}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span
                              className={cn(
                                "w-1 h-1 rounded-full shrink-0",
                                pathname === item.href
                                  ? "bg-brand-red"
                                  : "bg-brand-gray-300",
                              )}
                            />
                            {item.label}
                          </Link>
                        ))}
                        {/* <Link
                          href="/services"
                          className="flex items-center gap-1.5 pt-3 text-xs font-semibold text-brand-red hover:text-brand-red-dark"
                          onClick={() => setMobileOpen(false)}
                        >
                          View all services <ArrowRight size={11} />
                        </Link> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Industries accordion */}
              <motion.div
                custom={2}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
              >
                <button
                  className={cn(
                    "w-full flex items-center justify-between py-4 border-b border-brand-gray-100",
                    "text-base font-semibold font-display text-brand-black hover:text-brand-red transition-colors",
                    (isIndustryActive || mobileExpanded === "industries") &&
                      "text-brand-red",
                  )}
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === "industries" ? null : "industries",
                    )
                  }
                  aria-expanded={mobileExpanded === "industries"}
                >
                  Industries
                  <ChevronDown
                    size={16}
                    className={cn(
                      "text-brand-gray-400 transition-transform duration-200",
                      mobileExpanded === "industries" && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "industries" && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="py-2 pl-3">
                        {industriesNav.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 py-3 border-b border-brand-gray-50 last:border-0",
                              "text-sm text-brand-gray-700 hover:text-brand-red transition-colors",
                              pathname === item.href &&
                                "text-brand-red font-semibold",
                            )}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span
                              className={cn(
                                "w-1 h-1 rounded-full shrink-0",
                                pathname === item.href
                                  ? "bg-brand-red"
                                  : "bg-brand-gray-300",
                              )}
                            />
                            {item.label}
                          </Link>
                        ))}
                        {/* <Link
                          href="/industries"
                          className="flex items-center gap-1.5 pt-3 text-xs font-semibold text-brand-red hover:text-brand-red-dark"
                          onClick={() => setMobileOpen(false)}
                        >
                          View all industries <ArrowRight size={11} />
                        </Link> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Careers */}
              <motion.div
                custom={3}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/careers"
                  className={cn(
                    "flex items-center justify-between py-4 border-b border-brand-gray-100",
                    "text-base font-semibold font-display text-brand-black hover:text-brand-red transition-colors",
                    (pathname === "/careers" ||
                      pathname.startsWith("/careers/")) &&
                      "text-brand-red",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  Careers
                  <ChevronRight size={16} className="text-brand-gray-400" />
                </Link>
              </motion.div>

              {/* Contact */}
              <motion.div
                custom={4}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center justify-between py-4 border-b border-brand-gray-100",
                    "text-base font-semibold font-display text-brand-black hover:text-brand-red transition-colors",
                    pathname === "/contact" && "text-brand-red",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                  <ChevronRight size={16} className="text-brand-gray-400" />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile CTA */}
            <div className="px-6 pb-10 shrink-0">
              <Link
                href="/contact"
                className="relative overflow-hidden block w-full bg-brand-red text-white text-center py-4 font-semibold text-sm tracking-wide hover:bg-brand-red-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className="shine-sweep absolute inset-y-0 left-0 w-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                  }}
                />
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
