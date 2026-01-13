'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Utiliser setTimeout pour éviter l'erreur de render cascade
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white p-6 shadow-2xl z-50 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">🍪 Gestion des cookies</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et gérer notre programme d&apos;affiliation Amazon. 
              En poursuivant votre navigation, vous acceptez l&apos;utilisation de ces cookies conformément à notre{' '}
              <Link href="/politique-confidentialite" className="text-orange-400 hover:text-orange-300 underline">
                politique de confidentialité
              </Link>
              {' '}et au RGPD.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={refuseCookies}
              className="px-6 py-2.5 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-slate-800 transition-colors font-medium whitespace-nowrap"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium whitespace-nowrap shadow-lg"
            >
              Accepter les cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
