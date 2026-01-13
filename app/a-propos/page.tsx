import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Bureaulink',
  description: 'Découvrez Bureaulink, votre guide pour créer l\'espace de travail parfait avec les meilleurs produits sélectionnés.',
};

export default function APropos() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-orange-100/50 via-amber-50/50 to-orange-50/50"></div>
        
        {/* Floating shapes */}
        <div className="absolute w-[500px] h-[500px] bg-linear-to-br from-orange-300/30 to-amber-300/30 rounded-full blur-3xl -top-32 -left-32 animate-float-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-linear-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl -bottom-32 -right-32 animate-float-slow" style={{ animationDelay: '2s', animationDirection: 'reverse' }}></div>
        <div className="absolute w-[350px] h-[350px] bg-linear-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-2xl top-20 right-20 animate-float-medium"></div>
        <div className="absolute w-[400px] h-[400px] bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl bottom-40 left-40 animate-float-medium" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-[300px] h-[300px] bg-linear-to-br from-orange-300/25 to-amber-300/25 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise-about">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-about)"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 md:gap-3 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-br from-orange-400 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg sm:text-xl md:text-2xl">📋</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Bureaulink</h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 hidden sm:block">Votre espace de travail idéal</p>
            </div>
          </Link>
          <Link 
            href="/"
            className="text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base"
          >
            Retour
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-20 relative z-10 pb-20 sm:pb-24">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6 px-4 py-2 bg-orange-100/80 backdrop-blur-sm rounded-full">
            <span className="text-orange-600 font-medium text-sm sm:text-base">Notre histoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight font-playfair">
            À propos de Bureaulink
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Votre guide pour créer l&apos;espace de travail parfait
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Notre Mission */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-8 border border-gray-100">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <span className="text-3xl sm:text-4xl">🎯</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Notre Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Vous aider à découvrir les meilleurs produits pour optimiser votre espace de travail. Un bureau bien équipé transforme votre productivité et votre bien-être.
            </p>
          </div>

          {/* Notre engagement */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-8 border border-gray-100">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <span className="text-3xl sm:text-4xl">💯</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Notre engagement
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Recommander uniquement des produits de qualité et pertinents. Notre participation au programme d&apos;affiliation Amazon n&apos;influence pas nos choix.
            </p>
          </div>
        </div>

        {/* Ce que nous faisons - Full width card */}
        <div className="bg-linear-to-br from-white/90 to-orange-50/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-10 mb-8 sm:mb-12 border border-orange-100">
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl sm:text-4xl">✨</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ce que nous faisons
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
            Nous sélectionnons soigneusement des produits de qualité et les présentons dans leur contexte réel avec une approche interactive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
              <span className="text-orange-500 text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">Sélection rigoureuse de produits testés</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
              <span className="text-orange-500 text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">Présentation visuelle et contextuelle</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
              <span className="text-orange-500 text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">Descriptions détaillées et complètes</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
              <span className="text-orange-500 text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">Liens directs vers Amazon</span>
            </div>
          </div>
        </div>

        {/* Programme d'affiliation */}
        <div className="bg-linear-to-br from-orange-50 to-amber-50 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-10 border border-orange-200/50 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl sm:text-4xl">🤝</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Programme d&apos;affiliation
            </h3>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Bureaulink participe au Programme Partenaires d&apos;Amazon EU, qui nous permet de percevoir une rémunération via les liens vers Amazon.fr.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats qualifiés, sans frais supplémentaires pour vous. Cette commission aide à maintenir et améliorer Bureaulink.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-500 text-white px-10 py-4 sm:py-5 rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg"
          >
            Découvrir les produits
            <span className="text-xl">→</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-row justify-between items-center text-[9px] sm:text-xs text-gray-400/70">
            <p>© {new Date().getFullYear()} Bureaulink. Tous droits réservés.</p>
            <div className="flex gap-4 md:gap-6">
              <Link href="/mentions-legales" className="hover:text-orange-500 active:scale-95 transition-all">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-orange-500 active:scale-95 transition-all">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
