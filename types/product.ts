export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  affiliateLink: string;
  image: string;
  position: {
    x: number; // Position en pourcentage
    y: number; // Position en pourcentage
  };
  positionMobile?: {
    x: number; // Position mobile en pourcentage
    y: number; // Position mobile en pourcentage
  };
  positionTablet?: {
    x: number; // Position tablette en pourcentage
    y: number; // Position tablette en pourcentage
  };
  positionIpadPro?: {
    x: number; // Position iPad Pro en pourcentage
    y: number; // Position iPad Pro en pourcentage
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
}
