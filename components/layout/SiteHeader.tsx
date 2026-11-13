import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import MainNavigation from "./MainNavigation";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Branding row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          aria-label="Diani Beach Hospital homepage"
          className="relative block h-14 w-56"
        >
          <Image
            src="/images/branding/Asset-2@3x.svg"
            alt="Diani Beach Hospital"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <LanguageSelector />
      </div>

      {/* Primary navigation */}
      <MainNavigation />
    </header>
  );
}
