'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import ProductModal from '@/components/ProductModal';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import AmazonDisclosure from '@/components/AmazonDisclosure';

export default function DeskScene() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Détecter si on est en mode mobile ou tablette
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // md breakpoint
      setIsTablet(width >= 768 && width < 1024); // Entre md et lg
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-100/50 via-amber-50/50 to-orange-50/50"></div>
      
      {/* Floating shapes - more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circle 1 - Top left */}
        <div className="absolute w-[500px] h-[500px] bg-linear-to-br from-orange-300/30 to-amber-300/30 rounded-full blur-3xl -top-32 -left-32 animate-float-slow"></div>
        {/* Circle 2 - Bottom right */}
        <div className="absolute w-[500px] h-[500px] bg-linear-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl -bottom-32 -right-32 animate-float-slow" style={{ animationDelay: '2s', animationDirection: 'reverse' }}></div>
        {/* Circle 3 - Top right */}
        <div className="absolute w-[350px] h-[350px] bg-linear-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-2xl top-20 right-20 animate-float-medium"></div>
        {/* Circle 4 - Bottom left */}
        <div className="absolute w-[400px] h-[400px] bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl bottom-20 left-20 animate-float-medium" style={{ animationDelay: '3s', animationDirection: 'reverse' }}></div>
        {/* Additional small circles */}
        <div className="absolute w-[200px] h-[200px] bg-orange-400/15 rounded-full blur-xl top-1/3 left-1/2 animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[250px] h-[250px] bg-amber-400/15 rounded-full blur-xl bottom-1/3 right-1/3 animate-float-medium" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} />
      <SkipLink />
      
      {/* Header */}
      <header 
        className="absolute top-0 left-0 right-0 z-20 p-3 sm:p-4 md:p-5 flex justify-between items-center bg-gradient-to-b from-white/60 via-white/30 to-transparent backdrop-blur-lg border-b border-white/20"
        role="banner"
      >
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
          <div 
            className="w-10 h-10 md:w-11 md:h-11 bg-linear-to-br from-orange-400 via-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 ring-1 ring-white/20"
            role="img" 
            aria-label="Logo Bureaulink"
          >
            <span className="text-white text-xl md:text-2xl" aria-hidden="true">📋</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900">Bureaulink</h1>
            <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Votre espace de travail idéal</p>
          </div>
        </div>
        <nav className="flex gap-3 md:gap-6 items-center" aria-label="Navigation principale">
          <Link
            href="/a-propos"
            className="text-gray-700 hover:text-orange-500 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded cursor-pointer text-sm sm:text-base"
            aria-label="À propos de Bureaulink"
          >
            À propos
          </Link>
        </nav>
      </header>

      {/* Desk Scene Container */}
      <div 
        id="main-content"
        className="relative w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 pt-16 sm:pt-20 md:pt-20 pb-4 sm:pb-6 md:pb-8"
        role="main"
      >
        
        {/* Title Section */}
        <div className="text-center px-3 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-4 lg:mb-5 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-1.5 sm:mb-2 md:mb-3 leading-tight tracking-tight">
            Découvrez chaque produit en contexte
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-orange-500 text-xl md:text-2xl">👆</span>
            <span>Cliquez sur les</span>
            <span className="inline-flex items-center justify-center w-5 h-5 bg-orange-500 text-white rounded-full text-xs animate-bounce">
              +
            </span>
            <span>pour découvrir</span>
          </p>
        </div>

        {/* Background Desk Image */}
        <div className="relative w-full max-w-7xl flex-1 mx-auto flex items-center justify-center">
          <div className="relative w-full h-full max-h-[calc(100vh-220px)] sm:max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-180px)]">
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
                 style={{
                   background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(251,146,60,0.3), rgba(251,191,36,0.2), transparent)'
                 }}>
            </div>

            {/* Image avec bordures magnifiques */}
            <div className="absolute inset-0 shadow-[0_20px_60px_-15px_rgba(251,146,60,0.3)]"
                 style={{
                   WebkitMaskImage: 'radial-gradient(ellipse 96% 94% at 50% 50%, black 65%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.4) 92%, transparent 100%)',
                   maskImage: 'radial-gradient(ellipse 96% 94% at 50% 50%, black 65%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.4) 92%, transparent 100%)'
                 }}>
              <div className="relative w-full h-full">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 pointer-events-none"
                     style={{
                       background: 'radial-gradient(ellipse at center, transparent 50%, rgba(255,255,255,0.1) 100%)',
                       mixBlendMode: 'overlay'
                     }}>
                </div>
                
                {/* Image verticale pour mobile et petite tablette */}
                <Image 
                  src="/desk-vertical.jpg" 
                  alt="Bureau avec produits" 
                  fill
                  className="object-contain md:hidden"
                  priority
                  sizes="100vw"
                />
                {/* Image horizontale pour tablette et desktop */}
                <Image 
                  src="/desk.jpg" 
                  alt="Bureau avec produits" 
                  fill
                  className="object-contain hidden md:block"
                  priority
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1400px"
                />

                {/* Product Hotspots - Mobile */}
                <div className="md:hidden absolute inset-0">
                  {products.map((product) => {
                    const pos = product.positionMobile || product.position;
                    return (
                      <button
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className="absolute group cursor-pointer z-10 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 rounded-full"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        aria-label={`Découvrir ${product.name}`}
                        role="button"
                        tabIndex={0}
                      >
                        {/* Pulsing Ring Outer */}
                        <div className="absolute inset-0 -m-1">
                          <div className="w-8 h-8 rounded-full bg-orange-400/25 animate-ping" />
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0">
                          <div className={`w-7 h-7 rounded-full bg-linear-to-br from-orange-300 to-amber-400 blur-lg transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-70 scale-110' : 'opacity-40 scale-100'}`} />
                        </div>

                        {/* Hotspot Circle */}
                        <div className={`
                          relative w-6 h-6 rounded-full 
                          bg-linear-to-br from-orange-400 via-orange-500 to-amber-500
                          flex items-center justify-center
                          shadow-[0_4px_14px_0_rgba(251,146,60,0.4)]
                          transition-all duration-200 ease-out
                          ${hoveredProduct === product.id ? 'scale-125 shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] ring-2 ring-white/60' : 'scale-100'}
                          active:scale-90 active:shadow-[0_2px_10px_0_rgba(251,146,60,0.8)]
                          animate-pulse-slow
                          cursor-pointer
                          before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity
                        `}>
                          <span 
                            className={`text-white text-base font-light transition-transform duration-200 ${hoveredProduct === product.id ? 'rotate-90' : 'rotate-0'}`}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </div>

                        {/* Ripple Effect */}
                        <div className={`
                          absolute inset-0 rounded-full 
                          bg-orange-400 opacity-30
                          transition-all duration-500
                          ${hoveredProduct === product.id ? 'scale-150 opacity-0' : 'scale-100'}
                        `} />
                      </button>
                    );
                  })}
                </div>

                {/* Product Hotspots - Tablette */}
                <div className="hidden md:block lg:hidden absolute inset-0">
                  {products.map((product) => {
                    const pos = product.positionTablet || product.position;
                    return (
                      <button
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className="absolute group cursor-pointer z-10 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 rounded-full"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        aria-label={`Découvrir ${product.name}`}
                        role="button"
                        tabIndex={0}
                      >
                        {/* Pulsing Ring Outer */}
                        <div className="absolute inset-0 -m-1.5">
                          <div className="w-9 h-9 rounded-full bg-orange-400/25 animate-ping" />
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0">
                          <div className={`w-8 h-8 rounded-full bg-linear-to-br from-orange-300 to-amber-400 blur-lg transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-70 scale-110' : 'opacity-40 scale-100'}`} />
                        </div>

                        {/* Hotspot Circle */}
                        <div className={`
                          relative w-7 h-7 rounded-full 
                          bg-linear-to-br from-orange-400 via-orange-500 to-amber-500
                          flex items-center justify-center
                          shadow-[0_4px_14px_0_rgba(251,146,60,0.4)]
                          transition-all duration-200 ease-out
                          ${hoveredProduct === product.id ? 'scale-125 shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] ring-2 ring-white/60' : 'scale-100'}
                          hover:scale-125 hover:shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] hover:ring-2 hover:ring-white/60
                          active:scale-95 active:shadow-[0_2px_10px_0_rgba(251,146,60,0.8)]
                          animate-pulse-slow
                          cursor-pointer
                          before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity
                        `}>
                          <span 
                            className={`text-white text-base font-light transition-transform duration-200 ${hoveredProduct === product.id ? 'rotate-90' : 'rotate-0'}`}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </div>

                        {/* Tooltip on Hover */}
                        {hoveredProduct === product.id && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl whitespace-nowrap shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/10 z-30 animate-fade-in">
                            {product.name}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 ring-1 ring-white/10"></div>
                          </div>
                        )}

                        {/* Ripple Effect */}
                        <div className={`
                          absolute inset-0 rounded-full 
                          bg-orange-400 opacity-30
                          transition-all duration-500
                          ${hoveredProduct === product.id ? 'scale-150 opacity-0' : 'scale-100'}
                        `} />
                      </button>
                    );
                  })}
                </div>

                {/* Product Hotspots - iPad Pro */}
                <div className="hidden lg:block xl:hidden absolute inset-0">
                  {products.map((product) => {
                    const pos = product.positionIpadPro || product.position;
                    return (
                      <button
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className="absolute group cursor-pointer z-10 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 rounded-full"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        aria-label={`Découvrir ${product.name}`}
                        role="button"
                        tabIndex={0}
                      >
                        {/* Pulsing Ring Outer */}
                        <div className="absolute inset-0 -m-2">
                          <div className="w-10 h-10 rounded-full bg-orange-400/25 animate-ping" />
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0">
                          <div className={`w-9 h-9 rounded-full bg-linear-to-br from-orange-300 to-amber-400 blur-lg transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-70 scale-110' : 'opacity-40 scale-100'}`} />
                        </div>

                        {/* Hotspot Circle */}
                        <div className={`
                          relative w-8 h-8 rounded-full 
                          bg-linear-to-br from-orange-400 via-orange-500 to-amber-500
                          flex items-center justify-center
                          shadow-[0_4px_14px_0_rgba(251,146,60,0.4)]
                          transition-all duration-200 ease-out
                          ${hoveredProduct === product.id ? 'scale-140 shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] ring-2 ring-white/60' : 'scale-100'}
                          hover:scale-140 hover:shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] hover:ring-2 hover:ring-white/60
                          active:scale-95 active:shadow-[0_2px_10px_0_rgba(251,146,60,0.8)]
                          animate-pulse-slow
                          cursor-pointer
                          before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity
                        `}>
                          <span 
                            className={`text-white text-lg font-light transition-transform duration-200 ${hoveredProduct === product.id ? 'rotate-90' : 'rotate-0'}`}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </div>

                        {/* Tooltip on Hover */}
                        {hoveredProduct === product.id && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl whitespace-nowrap shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/10 z-30 animate-fade-in">
                            {product.name}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 ring-1 ring-white/10"></div>
                          </div>
                        )}

                        {/* Ripple Effect */}
                        <div className={`
                          absolute inset-0 rounded-full 
                          bg-orange-400 opacity-30
                          transition-all duration-500
                          ${hoveredProduct === product.id ? 'scale-150 opacity-0' : 'scale-100'}
                        `} />
                      </button>
                    );
                  })}
                </div>

                {/* Product Hotspots - Desktop */}
                <div className="hidden xl:block absolute inset-0">
                  {products.map((product) => {
                    const pos = product.position;
                    return (
                      <button
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className="absolute group cursor-pointer z-10 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 rounded-full"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        aria-label={`Découvrir ${product.name}`}
                        role="button"
                        tabIndex={0}
                      >
              {/* Pulsing Ring Outer */}
              <div className="absolute inset-0 -m-1 sm:-m-1.5 md:-m-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-orange-400/25 animate-ping" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br from-orange-300 to-amber-400 blur-lg transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-70 scale-110' : 'opacity-40 scale-100'}`} />
              </div>

              {/* Hotspot Circle */}
              <div className={`
                relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full 
                bg-linear-to-br from-orange-400 via-orange-500 to-amber-500
                flex items-center justify-center
                shadow-[0_4px_14px_0_rgba(251,146,60,0.4)]
                transition-all duration-200 ease-out
                ${hoveredProduct === product.id ? 'scale-125 md:scale-150 shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] ring-2 ring-white/60' : 'scale-100'}
                hover:scale-125 md:hover:scale-150 hover:shadow-[0_8px_24px_0_rgba(251,146,60,0.6)] hover:ring-2 hover:ring-white/60
                active:scale-95 active:shadow-[0_2px_10px_0_rgba(251,146,60,0.8)]
                animate-pulse-slow
                cursor-pointer
                before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity
              `}>
                <span 
                  className={`text-white text-base md:text-lg font-light transition-transform duration-200 ${hoveredProduct === product.id ? 'rotate-90' : 'rotate-0'}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              {/* Tooltip on Hover */}
              {hoveredProduct === product.id && (
                <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl whitespace-nowrap shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/10 z-30 animate-fade-in">
                  {product.name}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 ring-1 ring-white/10"></div>
                </div>
              )}

              {/* Ripple Effect on Click */}
              <div className={`
                absolute inset-0 rounded-full 
                bg-orange-400 opacity-30
                transition-all duration-500
                ${hoveredProduct === product.id ? 'scale-150 opacity-0' : 'scale-100'}
              `} />
              </button>
            );
          })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="-mt-2 sm:mt-6 md:mt-8 mb-8 sm:mb-0 flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-white/90 backdrop-blur-md px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/5 hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-orange-400 rounded-full animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">{products.length} produits à explorer</span>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Amazon Affiliation Disclosure - Obligatoire RGPD */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-4">
        <AmazonDisclosure />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
