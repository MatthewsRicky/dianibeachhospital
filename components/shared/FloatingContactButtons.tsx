import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {

  const whatsappMessage =
    "Welcome to DIANI BEACH HOSPITAL! 🏥\nThank you for reaching out to us. We are here to assist you with appointments, medical services, and any queries you may have.";

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex w-[80%] -translate-x-1/2 items-center justify-between gap-3 px-4 sm:bottom-8">
      {/* WhatsApp */}
      <Link
        href={`https://wa.me/254117515825?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaWhatsapp size={29} />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </Link>

      {/* Hotline */}
      <Link
        href="tel:+254700999999"
        aria-label="Call our hotline +254 700 999 999"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-navy)] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-xl"
      >
        <Phone size={23} />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Hotline: +254 700 999 999
        </span>
      </Link>
    </div>
  );
}
