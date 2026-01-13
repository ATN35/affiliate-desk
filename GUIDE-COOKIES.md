# 🍪 Guide Gestion des Cookies - DeskPick

## 📋 Ce qui est déjà en place

### 1. Bannière de consentement (`components/CookieBanner.tsx`)
- ✅ S'affiche au premier visiteur
- ✅ Boutons "Accepter" / "Refuser"
- ✅ Stockage du choix dans `localStorage`

### 2. Respect du consentement
- Si **accepté** : `localStorage.cookieConsent = 'accepted'`
- Si **refusé** : `localStorage.cookieConsent = 'refused'`

---

## 🎯 Comment utiliser les cookies (3 niveaux)

### **Niveau 1 : Tracking simple (LocalStorage uniquement)**

Le plus simple pour démarrer. Déjà implémenté dans `utils/analytics.ts` :

```typescript
import { trackAffiliateClick } from '@/utils/analytics';

// Dans ProductModal.tsx, sur le bouton Amazon
onClick={() => trackAffiliateClick(product.id, product.name)}
```

**Avantages :**
- ✅ Pas de configuration externe
- ✅ Gratuit
- ✅ Respecte le RGPD
- ✅ Fonctionne hors ligne

**Limites :**
- ❌ Données stockées uniquement côté client
- ❌ Perdues si l'utilisateur vide son cache

---

### **Niveau 2 : Google Analytics 4 (GA4)** ⭐ RECOMMANDÉ

Pour des stats professionnelles gratuites.

**Installation :**

1. **Créer un compte Google Analytics**
   - Aller sur [analytics.google.com](https://analytics.google.com)
   - Créer une propriété GA4
   - Récupérer votre ID (format: `G-XXXXXXXXXX`)

2. **Ajouter le script dans `app/layout.tsx`**

```tsx
import Script from 'next/script';

// Ajouter juste après <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-VOTRE-ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VOTRE-ID', {
      anonymize_ip: true
    });
  `}
</Script>
```

**Stats disponibles :**
- 📊 Nombre de visiteurs
- 📱 Appareil utilisé (mobile/desktop)
- 🌍 Pays/ville
- ⏱️ Temps passé sur le site
- 🔗 Clics sur liens Amazon

---

## 🚀 Comment activer le tracking

### Dans `components/ProductModal.tsx` :

```tsx
import { trackAffiliateClick } from '@/utils/analytics';

<a
  href={product.affiliateLink}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackAffiliateClick(product.id, product.name)}
  className="..."
>
  Voir le prix sur Amazon →
</a>
```

---

## 📊 Cookies Amazon (automatiques)

### Quand un visiteur clique sur votre lien :

1. **Amazon dépose un cookie** (automatique, pas votre responsabilité)
2. **Durée : 24 heures** (programme partenaires Amazon)
3. **Si achat dans les 24h** : Vous touchez la commission
4. **Même si autre produit** : Commission sur tout le panier

### Vous n'avez rien à faire !
Amazon gère automatiquement le tracking via vos liens affiliés avec votre tag `?tag=VOTRE-TAG-21`

---

## 🔒 Conformité RGPD - Déjà respecté ✅

1. **Consentement obligatoire** : Bannière avant tracking
2. **Opt-out facile** : Bouton "Refuser"
3. **Données minimales** : Seulement ID produit + timestamp
4. **Droit à l'effacement** : Fonction `clearTrackingData()`
5. **Pas de données personnelles** : Aucun nom/email collecté

---

## 💡 FAQ

**Q : Les cookies Amazon suffisent ?**
R : Oui ! Amazon track automatiquement. Vos cookies sont **optionnels** pour VOS stats (savoir quel produit est populaire).

**Q : Dois-je payer pour Google Analytics ?**
R : Non, GA4 est 100% gratuit jusqu'à 10 millions d'événements/mois.

**Q : Si l'utilisateur refuse les cookies ?**
R : Le tracking est désactivé. Amazon track quand même (leur responsabilité), mais vous ne voyez pas VOS stats.

**Q : C'est légal RGPD ?**
R : Oui, si vous respectez le consentement (déjà fait avec votre bannière).
