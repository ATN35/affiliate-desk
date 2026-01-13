'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="absolute bottom-0 left-0 right-0 z-10"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <div className="w-full px-3 sm:px-6 md:px-8 py-2 sm:py-3">
        <div className="flex flex-row justify-between items-center text-[9px] sm:text-xs">
          {/* Copyright - Left edge */}
          <p className="text-gray-400/70 whitespace-nowrap">
            © {currentYear} Bureaulink
          </p>

          {/* Links - Right edge */}
          <nav className="flex gap-2 sm:gap-4 md:gap-6" aria-label="Navigation légale">
            <Link 
              href="/mentions-legales" 
              className="text-gray-400/70 hover:text-orange-400 active:scale-95 transition-all whitespace-nowrap"
            >
              Mentions légales
            </Link>
            <Link 
              href="/politique-confidentialite" 
              className="text-gray-400/70 hover:text-orange-400 active:scale-95 transition-all whitespace-nowrap"
            >
              Confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
