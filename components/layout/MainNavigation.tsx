"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { appointmentHref, navigationItems } from "@/data/navigation";

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className="border-t border-slate-100 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[var(--brand-navy)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop appointment action */}
        <Link
          href={appointmentHref}
          className="hidden rounded-md bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-navy-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-navy)] lg:inline-flex"
        >
          Book an Appointment
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-[var(--brand-navy)] transition-colors hover:bg-[var(--brand-navy-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-navy)] lg:hidden"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? (
            <X size={19} aria-hidden="true" />
          ) : (
            <Menu size={19} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[var(--brand-navy-light)] hover:text-[var(--brand-navy)] focus-visible:outline-2 focus-visible:outline-[var(--brand-navy)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={appointmentHref}
              onClick={closeMenu}
              className="mt-4 rounded-md bg-[var(--brand-navy)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-navy-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-navy)]"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
