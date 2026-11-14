import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import LanguageSelector from "./LanguageSelector";
import MainNavigation from "./MainNavigation";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dianibeach.hospital/",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/diani-beach-hospital/",
    icon: FaLinkedin,
  },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Branding row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          aria-label="Diani Beach Hospital homepage"
          className="relative block h-14 w-24 sm:w-32 md:w-56"
        >
          <Image
            src="/images/branding/Asset-2@3x.svg"
            alt="Diani Beach Hospital"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <LanguageSelector />

          <div className="hidden h-6 w-px bg-slate-200 sm:block" />

          <div className="hidden items-center gap-3 sm:flex">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                className="text-slate-500 transition-colors hover:text-[var(--brand-navy)]"
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Primary navigation */}
      <MainNavigation />
    </header>
  );
}