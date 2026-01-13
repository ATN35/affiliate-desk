import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
          <p className="text-gray-700 mb-2">
            <strong>URL :</strong> bureautique.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Responsable de publication :</strong> Particulier
          </p>
          <p className="text-gray-700 mb-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <strong>📧 Contact :</strong> <a href="mailto:contact@bureautique.com" className="text-orange-500 hover:underline">contact@bureautique.com</a>
            <br />
            <span className="text-sm text-gray-600 mt-2 block">
              Conformément à la loi pour la confiance dans l&apos;économie numérique (LCEN), 
              les coordonnées complètes de l&apos;éditeur sont disponibles auprès de l&apos;hébergeur 
              sur demande des autorités compétentes.
            </span>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
          <p className="text-gray-700 mb-2">
            <strong>Hébergeur :</strong> Vercel Inc.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Programme d&apos;affiliation Amazon</h2>
          <p className="text-gray-700 mb-4">
            En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
          </p>
          <p className="text-gray-700 text-sm">
            DeskPick participe au Programme Partenaires d&apos;Amazon EU, un programme d&apos;affiliation permettant 
            de percevoir une rémunération grâce aux liens vers Amazon.fr.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-700">
            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Données personnelles</h2>
          <p className="text-gray-700 mb-4">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression 
            de vos données personnelles.
          </p>
          <p className="text-gray-700">
            Ce site collecte uniquement des données de navigation anonymisées via cookies. 
            Pour toute demande : <a href="mailto:contact@bureautique.com" className="text-orange-500 hover:underline">contact@bureautique.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
          <p className="text-gray-700">
            Ce site utilise des cookies pour le fonctionnement et le suivi d&apos;affiliation Amazon. 
            Une bannière de consentement s&apos;affiche lors de votre première visite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Responsabilité</h2>
          <p className="text-gray-700">
            Les informations de ce site sont fournies à titre indicatif. DeskPick ne peut être tenu 
            responsable des inexactitudes ou changements de prix/disponibilité des produits.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
