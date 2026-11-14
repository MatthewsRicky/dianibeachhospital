import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const exploreLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: "/services/" },
  { label: "Speciality Centres", href: "/specialization/" },
  { label: "Our Branches", href: "/branches/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Careers", href: "/careers/" },
];

const quickLinks = [
  { label: "Book an Appointment", href: "/appointment-booking/" },
  { label: "Health Packages", href: "/health-packages/" },
  { label: "Latest Articles", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];

const currentDate = "2026"
export default function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy-dark)] text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Hospital introduction */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Diani Beach Hospital homepage"
              className="relative block h-14 w-24 sm:w-32 md:w-56 bg-white rounded-md mb-4"
            >
              <Image
                src="/images/branding/Asset-2@3x.svg"
                alt="Diani Beach Hospital"
                fill
                priority
                className="object-contain object-left px-3 py-2"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Professional healthcare with a personal touch. Committed to
              delivering quality healthcare through professional service and
              personalised patient care.
            </p>

            <Link
              href="/about-us/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)] transition-colors hover:text-white"
            >
              Discover our hospital
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-base font-semibold text-white">Explore</h2>

            <ul className="mt-6 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--brand-gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-semibold text-white">Quick Links</h2>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--brand-gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-semibold text-white">Get in Touch</h2>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+254700999999"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[var(--brand-gold)]"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-xs text-white/50">
                    Hospital Hotline
                  </span>
                  <span className="mt-1 block text-sm text-white/80 transition-colors group-hover:text-[var(--brand-gold)]">
                    +254 700 999 999
                  </span>
                </span>
              </a>

              <a
                href="mailto:contact@dbh.co.ke"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-[var(--brand-gold)]"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-xs text-white/50">Email</span>
                  <span className="mt-1 block break-all text-sm text-white/80 transition-colors group-hover:text-[var(--brand-gold)]">
                    contact@dbh.co.ke
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[var(--brand-gold)]"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-xs text-white/50">
                    Postal Address
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/80">
                    Box 5074,
                    <br />
                    Diani Beach, Ukunda,
                    <br />
                    Kenya, 80401
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/15 pt-7">
          <div className="flex flex-col gap-3 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>© {currentDate} Diani Beach Hospital. All rights reserved.</p>

            <p>Professional Healthcare with a Personal Touch.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
