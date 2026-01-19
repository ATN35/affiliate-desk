'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-3 md:p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        className="relative bg-white rounded-t-2xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scale-in max-h-[95vh] sm:max-h-[90vh] my-0 sm:my-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        {/* Close Button - Fixed on Mobile */}
        <button
          onClick={onClose}
          className="fixed sm:absolute top-3 right-3 sm:top-3 sm:right-3 md:top-4 md:right-4 z-50 w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors group shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
          aria-label="Fermer la fenêtre de détails du produit"
        >
          <svg 
            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-900" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0 overflow-hidden h-full">
          {/* Image Section - Balanced Proportions */}
          <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50/50 p-4 pt-12 sm:pt-6 md:p-10 flex items-center justify-center overflow-hidden h-[40vh] sm:min-h-[450px] md:min-h-[500px]">
            {/* Category Badge - Clean positioning */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 sm:top-4 sm:left-4 sm:translate-x-0 md:top-6 md:left-6 bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-xs sm:text-xs font-semibold uppercase tracking-wide shadow-lg z-10">
              {product.category}
            </div>
            
            {/* Product Image with Sunburst Effect - Optimized Size */}
            <div className="relative w-full max-w-[240px] sm:max-w-md aspect-square flex items-center justify-center">
              {/* Sunburst rays background - Rounded */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden">
                <div className="absolute w-full h-full opacity-30 rounded-full" style={{
                  background: `repeating-conic-gradient(
                    from 0deg,
                    transparent 0deg 3deg,
                    rgba(249, 115, 22, 0.15) 3deg 6deg,
                    transparent 6deg 9deg,
                    rgba(251, 191, 36, 0.1) 9deg 12deg
                  )`,
                  animation: 'spin 20s linear infinite'
                }}></div>
              </div>
              
              {/* Glowing center circle */}
              <div className="absolute inset-10 sm:inset-16 rounded-full bg-gradient-to-br from-orange-300/20 via-amber-200/20 to-orange-400/20 blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              
              {/* Additional radial glow */}
              <div className="absolute inset-0 rounded-full bg-radial-gradient from-orange-400/10 via-transparent to-transparent"></div>
              
              {/* Product Image */}
              <div className="relative w-full h-full p-5 sm:p-8 md:p-12 z-10">
                <div className="relative w-full h-full transition-transform duration-500 hover:scale-105">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(249, 115, 22, 0.3)) drop-shadow(0 10px 25px rgba(251, 191, 36, 0.25))'
                    }}
                    sizes="(max-width: 768px) 90vw, 45vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Better Spacing */}
          <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between h-[60vh] sm:h-auto overflow-y-auto sm:overflow-visible">
            <div className="space-y-3 sm:space-y-4">
              <h2 
                id="modal-title" 
                className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight line-clamp-2"
              >
                {product.name}
              </h2>
              
              <p 
                id="modal-description" 
                className="text-xs sm:text-base md:text-lg text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none"
              >
                {product.description}
              </p>

              {/* Features List - Better Spacing */}
              <div className="space-y-2 sm:space-y-2 md:space-y-3" role="list" aria-label="Points forts du produit">
                <h3 className="font-semibold text-gray-900 text-xs sm:text-base">Points forts :</h3>
                <div className="flex items-start gap-2 sm:gap-2 md:gap-3" role="listitem">
                  <span className="text-orange-500 text-sm sm:text-base shrink-0" aria-hidden="true">✓</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600">Design moderne et élégant</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2 md:gap-3" role="listitem">
                  <span className="text-orange-500 text-sm sm:text-base shrink-0" aria-hidden="true">✓</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600">Qualité professionnelle</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2 md:gap-3" role="listitem">
                  <span className="text-orange-500 text-sm sm:text-base shrink-0" aria-hidden="true">✓</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600">Recommandé par notre équipe</span>
                </div>
              </div>
            </div>

            {/* CTA - Proper Spacing */}
            <div className="mt-4 space-y-2 sm:space-y-3">
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-linear-to-r from-orange-500 to-amber-500 text-white text-center py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2"
                aria-label={`Voir ${product.name} sur Amazon - Nouvelle fenêtre`}
              >
                Voir le prix sur Amazon →
              </a>

              <button 
                onClick={onClose}
                className="text-xs sm:text-sm text-gray-600 text-center font-medium hover:text-orange-500 transition-colors w-full cursor-pointer" 
                aria-label="Retour à la page d'accueil"
              >
                ← Retour à l&apos;accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
