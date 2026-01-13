'use client';

import { useEffect } from 'react';
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
        className="relative bg-white rounded-t-2xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scale-in max-h-[95vh] sm:max-h-[90vh] md:max-h-none sm:my-4 md:my-0 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/90 sm:bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
          aria-label="Fermer la fenêtre de détails du produit"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-900" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0 overflow-y-auto">
          {/* Image Section */}
          <div className="relative bg-linear-to-br from-orange-100 to-amber-100 p-8 md:p-12 flex items-center justify-center min-h-64 md:min-h-100">
            <div className="relative w-full aspect-square max-w-sm">
              {/* Placeholder image - remplacer par vos vraies images */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-200 to-amber-200 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-5xl md:text-6xl opacity-50">📦</span>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-gray-700 shadow-lg">
                {product.category}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 
                id="modal-title" 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
              >
                {product.name}
              </h2>
              
              <p 
                id="modal-description" 
                className="text-base md:text-lg text-gray-600 mb-5 md:mb-6 leading-relaxed"
              >
                {product.description}
              </p>

              {/* Features List */}
              <div className="mb-6 md:mb-8 space-y-2 md:space-y-3" role="list" aria-label="Points forts du produit">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3">Points forts :</h3>
                <div className="flex items-start gap-2 md:gap-3" role="listitem">
                  <span className="text-orange-500 mt-1" aria-hidden="true">✓</span>
                  <span className="text-sm md:text-base text-gray-600">Design moderne et élégant</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3" role="listitem">
                  <span className="text-orange-500 mt-1" aria-hidden="true">✓</span>
                  <span className="text-sm md:text-base text-gray-600">Qualité professionnelle</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3" role="listitem">
                  <span className="text-orange-500 mt-1" aria-hidden="true">✓</span>
                  <span className="text-sm md:text-base text-gray-600">Recommandé par notre équipe</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-linear-to-r from-orange-500 to-amber-500 text-white text-center py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2"
                aria-label={`Voir ${product.name} sur Amazon - Nouvelle fenêtre`}
              >
                Voir le prix sur Amazon →
              </a>

              <p className="text-xs text-gray-600 text-center mt-3 md:mt-4 font-medium" role="note">
                ✨ Je m&apos;engage à comparer et vous trouver les meilleurs produits possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
