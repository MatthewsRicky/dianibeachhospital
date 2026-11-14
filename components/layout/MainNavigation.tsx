"use client";

import Link from "next/link";
import { useState } from "react";
import { appointmentHref, navigationItems } from "@/data/navigation";

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              className="text-sm font-medium text-slate-700 transition-colors hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Appointment action */}
        <Link
          href={appointmentHref}
          className="hidden rounded-md bg-teal-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900 lg:inline-flex"
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
          className="ml-auto flex items-center gap-2 rounded-md hover:bg-teal-700 hover-text-white border-slate-200 border-2 px-4 py-2 text-sm font-medium text-slate-800 lg:hidden "
        >
          <span aria-hidden="true" className="text-lg">
            {menuOpen ? "×" : "☰"}
          </span>
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
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-600 py-3 text-sm font-medium text-slate-700 hover:text-white hover:bg-teal-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={appointmentHref}
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-md bg-teal-800 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-teal-600"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
