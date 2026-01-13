# DeskPick - Site d'affiliation avec bureau interactif

## 🎨 Installation de l'image du bureau

Pour que le site fonctionne correctement, vous devez placer votre image du bureau :

1. Sauvegardez l'image du bureau fournie sous le nom `desk.jpg`
2. Placez-la dans le dossier `public/` à la racine du projet
3. Le chemin final devrait être : `public/desk.jpg`

## 🚀 Lancement du projet

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

## 📍 Ajustement des positions des hotspots

Si vous souhaitez ajuster la position des boutons "+" sur les produits :

1. Ouvrez le fichier `data/products.ts`
2. Modifiez les valeurs `x` et `y` dans la propriété `position` de chaque produit
3. Les valeurs sont en pourcentage (0-100) par rapport à la taille de l'image

Exemple :
```typescript
position: { x: 50, y: 60 } // Centre horizontal, 60% du haut
```

## 🔗 Configuration des liens d'affiliation

Pour ajouter vos vrais liens d'affiliation Amazon :

1. Ouvrez `data/products.ts`
2. Remplacez les valeurs `affiliateLink` par vos liens réels
3. Mettez à jour les prix, descriptions et catégories selon vos besoins

## 🎯 Structure du projet

```
affiliate-desk/
├── app/
│   ├── page.tsx          # Page principale
│   ├── layout.tsx        # Layout de l'app
│   └── globals.css       # Styles globaux + animations
├── components/
│   ├── DeskScene.tsx     # Scène interactive du bureau
│   └── ProductModal.tsx  # Modal de détail produit
├── data/
│   └── products.ts       # Liste des produits affiliés
├── types/
│   └── product.ts        # Types TypeScript
└── public/
    └── desk.jpg          # ⚠️ À placer ici !
```

## ✨ Fonctionnalités

- ✅ Bureau interactif avec hotspots cliquables
- ✅ Modal de détail pour chaque produit
- ✅ Design moderne avec palette orange/ambre
- ✅ Animations fluides et transitions
- ✅ Responsive design
- ✅ Liens d'affiliation Amazon
- ✅ Divulgation de commission

## 🎨 Personnalisation

### Changer les couleurs

Les couleurs principales sont définies avec Tailwind CSS :
- `orange-400` à `orange-500` : Couleur principale
- `amber-400` à `amber-500` : Couleur secondaire

Modifiez dans `components/DeskScene.tsx` et `components/ProductModal.tsx`

### Ajouter/Supprimer des produits

Éditez simplement le tableau dans `data/products.ts`
