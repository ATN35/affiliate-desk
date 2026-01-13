/**
 * Utilitaires pour le tracking et analytics
 * Respecte le consentement cookies RGPD
 */

/**
 * Vérifie si l'utilisateur a accepté les cookies
 */
export function hasConsentedToCookies(): boolean {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookieConsent');
  return consent === 'accepted';
}

/**
 * Tracker un clic sur un lien affilié Amazon
 * N'envoie des données que si le consentement est donné
 */
export function trackAffiliateClick(productId: string, productName: string) {
  if (!hasConsentedToCookies()) {
    console.log('Tracking ignoré - Pas de consentement cookies');
    return;
  }

  // 1. Stocker le clic dans localStorage (simple)
  const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
  clicks.push({
    productId,
    productName,
    timestamp: new Date().toISOString(),
    referrer: document.referrer || 'direct'
  });
  
  // Garder seulement les 100 derniers clics
  if (clicks.length > 100) clicks.shift();
  localStorage.setItem('affiliateClicks', JSON.stringify(clicks));

  // 2. Optionnel : Envoyer à Google Analytics (si installé)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      product_id: productId,
      product_name: productName,
      event_category: 'Amazon',
      event_label: productName
    });
  }

  // 3. Optionnel : Envoyer à votre propre API
  // fetch('/api/track-click', {
  //   method: 'POST',
  //   body: JSON.stringify({ productId, productName })
  // });

  console.log(`✅ Clic affilié tracké: ${productName}`);
}

/**
 * Obtenir les statistiques des clics
 */
export function getAffiliateStats() {
  if (!hasConsentedToCookies()) return null;
  
  const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
  
  // Compter par produit
  const productCounts: Record<string, number> = {};
  clicks.forEach((click: any) => {
    productCounts[click.productName] = (productCounts[click.productName] || 0) + 1;
  });

  return {
    totalClicks: clicks.length,
    productCounts,
    recentClicks: clicks.slice(-10)
  };
}

/**
 * Nettoyer toutes les données de tracking (RGPD - droit à l'effacement)
 */
export function clearTrackingData() {
  localStorage.removeItem('affiliateClicks');
  localStorage.removeItem('cookieConsent');
  console.log('✅ Données de tracking supprimées');
}
