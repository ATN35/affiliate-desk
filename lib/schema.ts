export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bureaulink",
  "url": "https://bureaulink.com",
  "description": "Découvrez les meilleurs produits pour votre bureau dans leur contexte réel",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://bureaulink.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bureaulink",
  "url": "https://bureaulink.com",
  "logo": "https://bureaulink.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact.atn35@gmail.com",
    "contactType": "Customer Service"
  }
};

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "category": product.category,
    "image": `https://deskpick.com${product.image}`,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://deskpick.com"
    }
  };
}
