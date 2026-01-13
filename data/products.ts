import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'monitor',
    name: 'Écran 4K Ultrawide',
    description: 'Moniteur professionnel 34 pouces avec résolution 4K, parfait pour le multitâche et le travail créatif.',
    category: 'Écrans',
    affiliateLink: 'https://amzn.to/example-monitor',
    image: '/products/monitor.jpg',
    position: { x: 40, y: 34 },
    positionMobile: { x: 38, y: 29 },
    positionTablet: { x: 42, y: 38 },
    positionIpadPro: { x: 40, y: 38 }
  },
  {
    id: 'keyboard',
    name: 'Clavier Mécanique Premium',
    description: 'Clavier mécanique sans fil avec switches tactiles, rétroéclairage RGB et batterie longue durée.',
    category: 'Périphériques',
    affiliateLink: 'https://amzn.to/example-keyboard',
    image: '/products/keyboard.jpg',
    position: { x: 50, y: 64 },
    positionMobile: { x: 52, y: 48 },
    positionTablet: { x: 52, y: 56 },
    positionIpadPro: { x: 50, y: 58 }
  },
  {
    id: 'headphones',
    name: 'Casque Audio Bluetooth',
    description: 'Casque sans fil avec réduction de bruit active, autonomie 30h et qualité sonre exceptionnelle.',
    category: 'Audio',
    affiliateLink: 'https://amzn.to/example-headphones',
    image: '/products/headphones.jpg',
    position: { x: 18, y: 75 },
    positionMobile: { x: 14, y: 56 },
    positionTablet: { x: 14, y: 68 },
    positionIpadPro: { x: 16, y: 69 }
  },
  {
    id: 'lamp',
    name: 'Lampe de Bureau LED',
    description: 'Lampe design avec luminosité réglable, température de couleur ajustable et port USB intégré.',
    category: 'Éclairage',
    affiliateLink: 'https://amzn.to/example-lamp',
    image: '/products/lamp.jpg',
    position: { x: 74, y: 30 },
    positionMobile: { x: 88, y: 30 },
    positionTablet: { x: 76, y: 28 },
    positionIpadPro: { x: 74, y: 30 }
  },
  {
    id: 'mouse',
    name: 'Souris Ergonomique',
    description: 'Souris sans fil ergonomique pour réduire la fatigue, précision 16000 DPI.',
    category: 'Périphériques',
    affiliateLink: 'https://amzn.to/example-mouse',
    image: '/products/mouse.jpg',
    position: { x: 66, y: 56 },
    positionMobile: { x: 73, y: 44 },
    positionTablet: { x: 68, y: 54 },
    positionIpadPro: { x: 68, y: 52 }
  },
  {
    id: 'plant',
    name: 'Plante Décorative',
    description: 'Petite plante grasse artificielle pour décoration de bureau, sans entretien.',
    category: 'Décoration',
    affiliateLink: 'https://amzn.to/example-plant',
    image: '/products/plant.jpg',
    position: { x: 62, y: 38 },
    positionMobile: { x: 69, y: 37 },
    positionTablet: { x: 64, y: 40 },
    positionIpadPro: { x: 64, y: 42 }
  },
  {
    id: 'notebook',
    name: 'Carnet de Notes',
    description: 'Carnet à spirale avec papier de qualité supérieure, 200 pages lignées.',
    category: 'Papeterie',
    affiliateLink: 'https://amzn.to/example-notebook',
    image: '/products/notebook.jpg',
    position: { x: 36, y: 78 },
    positionMobile: { x: 36, y: 59 },
    positionTablet: { x: 34, y: 68 },
    positionIpadPro: { x: 36, y: 68 }
  },
  {
    id: 'coffee-mug',
    name: 'Mug Isotherme',
    description: 'Tasse isotherme en acier inoxydable gardant les boissons chaudes 6h.',
    category: 'Accessoires',
    affiliateLink: 'https://amzn.to/example-mug',
    image: '/products/mug.jpg',
    position: { x: 30, y: 90 },
    positionMobile: { x: 20, y: 63 },
    positionTablet: { x: 26, y: 76 },
    positionIpadPro: { x: 28, y: 72 }
  },
  {
    id: 'phone',
    name: 'smartphone',
    description: 'Support de bureau ajustable pour smartphone avec chargeur sans fil intégré.',
    category: 'Accessoires',
    affiliateLink: 'https://amzn.to/example-phone',
    image: '/products/phone.jpg',
    position: { x: 52, y: 82 },
    positionMobile: { x: 58, y: 58 },
    positionTablet: { x: 52, y: 70 },
    positionIpadPro: { x: 52, y: 68 }
  }
];
