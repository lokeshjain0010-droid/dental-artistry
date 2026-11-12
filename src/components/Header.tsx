"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = useCallback(() => setMobileOpen((prev) => !prev), []);
  const close = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { href: "#treatments", label: "Treatments", active: true },
    { href: "#clinic", label: "The Clinic" },
    { href: "#specialists", label: "Specialists" },
    { href: "#reviews", label: "Patient Stories" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-surface/95 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant/30 shadow-xs transition-all duration-200">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-3 group active:scale-[0.99] transition-transform duration-150"
          href="#"
        >
          <Image
            alt="Dental Artistry Chandigarh Logo"
            className="h-10 w-10 object-contain rounded-lg border border-outline-variant/30 shadow-xs"
            src="/images/logo.png"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-[22px] leading-[30px] font-medium tracking-tight text-on-surface group-hover:text-primary transition-colors duration-200">
              Dental Artistry
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] leading-[14px] font-medium tracking-[0.08em] text-secondary uppercase">
              Chandigarh · Sector 27 D
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] transition-colors duration-200 ${
                link.active
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            className="hidden sm:inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] transition-colors py-2 px-3 rounded-lg hover:bg-surface-container"
            href="tel:+919876754000"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">call</span>
            <span className="font-semibold">098767 54000</span>
          </a>
          <a
            className="hidden md:inline-flex bg-primary text-on-primary hover:bg-primary-container px-5 sm:px-6 py-2.5 rounded-lg font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            href="#booking"
          >
            Book Appointment
          </a>
          {/* Mobile Hamburger */}
          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-on-surface hover:text-primary hover:bg-surface-container transition-colors focus:outline-none"
            onClick={toggle}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant/20 bg-surface/98 backdrop-blur-lg px-6 py-6 space-y-4 transition-all duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`px-3 py-2.5 rounded-lg font-sans text-[14px] leading-[20px] font-semibold tracking-[0.02em] transition-colors ${
                  link.active
                    ? "text-primary bg-surface-container/60"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
                href={link.href}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-3">
            <a
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant/50 text-on-surface font-sans text-[14px] leading-[20px] font-semibold hover:border-primary text-primary transition-colors"
              href="tel:+919876754000"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call: 098767 54000</span>
            </a>
            <a
              className="flex items-center justify-center bg-primary text-on-primary py-3.5 px-4 rounded-lg font-sans text-[14px] leading-[20px] font-semibold shadow-xs"
              href="#booking"
              onClick={close}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
