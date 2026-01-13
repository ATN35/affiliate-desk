import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
        <p className="text-lg text-gray-600 mb-8 italic">
          Votre vie privée est importante. Cette page explique simplement quelles données nous collectons et comment nous les protégeons.
        </p>

        <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
          <p className="text-green-800 font-medium">
            ✓ Aucune donnée personnelle identifiable collectée (nom, email, adresse, etc.)
          </p>
          <p className="text-green-700 text-sm mt-2">
            ✓ Uniquement des statistiques anonymes de navigation<br/>
            ✓ Vous gardez le contrôle total sur vos cookies
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
          <p className="text-gray-700 mb-4">
            Bureaulink collecte uniquement les données nécessaires au fonctionnement du site et à 
            l&apos;amélioration de nos services.
          </p>
          <p className="text-gray-700">
            <strong>Données collectées :</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-2">
            <li>Données de navigation (pages visitées, durée de visite)</li>
            <li>Données techniques (type de navigateur, système d&apos;exploitation)</li>
            <li>Clics sur les liens d&apos;affiliation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
          <p className="text-gray-700 mb-2">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
            <li>Améliorer l&apos;expérience utilisateur</li>
            <li>Analyser le trafic du site</li>
            <li>Suivre les performances des liens d&apos;affiliation</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies et technologies similaires</h2>
          <p className="text-gray-700 mb-4">
            Nous utilisons des cookies pour améliorer votre expérience et comprendre l&apos;utilisation de notre site. 
            <strong>Votre consentement est demandé lors de votre première visite.</strong>
          </p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type de cookie</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Finalité</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Cookies de consentement</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Mémoriser votre choix d&apos;acceptation/refus des cookies</td>
                  <td className="px-4 py-3 text-sm text-gray-700">13 mois</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Cookies d&apos;analyse</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Statistiques anonymes de visite (pages vues, durée)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Selon service utilisé</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Cookies d&apos;affiliation Amazon</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Suivre les achats pour rémunération (gérés par Amazon)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">24 heures</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 text-sm bg-amber-50 p-3 rounded-lg">
            <strong>Comment les gérer ?</strong> Vous pouvez à tout moment modifier ou supprimer vos cookies dans les paramètres de votre navigateur. 
            Attention : refuser certains cookies peut limiter certaines fonctionnalités du site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage des données</h2>
          <p className="text-gray-700 mb-4">
            Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec :
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
            <li>Amazon (dans le cadre du programme d&apos;affiliation)</li>
            <li>Services d&apos;analyse web (anonymisées)</li>
            <li>Autorités légales si requis par la loi</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vos droits (RGPD)</h2>
          <p className="text-gray-700 mb-6">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits sur vos données :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 Droit d&apos;accès</h3>
              <p className="text-sm text-gray-700">Connaître les données que nous détenons sur vous</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">✏️ Droit de rectification</h3>
              <p className="text-sm text-gray-700">Corriger des informations inexactes ou incomplètes</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">🗑️ Droit à l&apos;effacement</h3>
              <p className="text-sm text-gray-700">Demander la suppression de vos données (« droit à l&apos;oubli »)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">⛔ Droit d&apos;opposition</h3>
              <p className="text-sm text-gray-700">Vous opposer au traitement de vos données à tout moment</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p className="text-blue-900 font-medium mb-2">📌 Dans la pratique pour ce site :</p>
            <p className="text-blue-800 text-sm">
              Ce site ne collecte <strong>aucune donnée personnelle identifiable</strong> (nom, email, adresse, etc.). 
              Seuls des cookies anonymes de navigation sont utilisés.
            </p>
            <p className="text-blue-800 text-sm mt-2">
              <strong>Pour exercer vos droits :</strong> Supprimez simplement les cookies de votre navigateur ou le localStorage du site. 
              Aucune demande formelle n&apos;est nécessaire puisqu&apos;aucune donnée personnelle n&apos;est stockée sur nos serveurs.
            </p>
          </div>

          <p className="text-gray-700">
            Pour toute question ou demande : <a href="mailto:contact.atn35@gmail.com" className="text-orange-500 hover:underline font-medium">contact.atn35@gmail.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Gestion du consentement</h2>
          <p className="text-gray-700 mb-4">
            Conformément au RGPD, nous recueillons votre consentement avant de déposer des cookies 
            non essentiels. Vous pouvez à tout moment :
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
            <li>Retirer votre consentement en supprimant les cookies de votre navigateur</li>
            <li>Modifier vos préférences via les paramètres de votre navigateur</li>
            <li>Supprimer le localStorage du site pour réinitialiser vos choix</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Durée de conservation</h2>
          <p className="text-gray-700 mb-3">
            Les données sont conservées pendant la durée strictement nécessaire à leur finalité :
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
            <li>Cookies de consentement : <strong>13 mois maximum</strong></li>
            <li>Statistiques de navigation : <strong>Anonymisées après 13 mois</strong></li>
            <li>Données de clics d&apos;affiliation : <strong>Conservation locale uniquement</strong></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Liens externes et affiliation Amazon</h2>
          <p className="text-gray-700 mb-3">
            Ce site contient des liens vers Amazon.fr dans le cadre du Programme Partenaires Amazon. 
            Lorsque vous cliquez sur ces liens :
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-4">
            <li>Vous êtes redirigé vers le site Amazon.fr</li>
            <li>Amazon dépose un cookie de suivi (durée : 24 heures)</li>
            <li>Ce cookie permet de nous rémunérer si vous effectuez un achat</li>
            <li>Votre navigation sur Amazon est soumise à leur propre politique de confidentialité</li>
          </ul>
          <p className="text-gray-700 text-sm bg-orange-50 p-3 rounded-lg">
            <strong>Important :</strong> Une fois sur Amazon, leurs conditions générales et politique de confidentialité s&apos;appliquent. 
            Nous n&apos;avons aucun contrôle sur les données collectées par Amazon.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Sécurité</h2>
          <p className="text-gray-700 mb-3">
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
            pour protéger vos données contre tout accès non autorisé, perte ou destruction.
          </p>
          <p className="text-gray-700">
            <strong>Mesures appliquées :</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-2">
            <li>Hébergement sécurisé via Vercel (certificat SSL/TLS)</li>
            <li>Chiffrement HTTPS de toutes les communications</li>
            <li>Absence de base de données personnelle (minimisation du risque)</li>
            <li>Stockage local uniquement dans votre navigateur (sous votre contrôle)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications de cette politique</h2>
          <p className="text-gray-700 mb-4">
            Cette politique de confidentialité peut être mise à jour pour refléter des changements dans nos pratiques 
            ou des évolutions législatives. Nous vous encourageons à la consulter régulièrement.
          </p>
          <p className="text-gray-700">
            En cas de modification substantielle, nous vous en informerons via une notification sur le site.
          </p>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-900 font-semibold">📅 Dernière mise à jour : <span className="text-orange-500">12 janvier 2026</span></p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
            <Link 
              href="/mentions-legales" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Voir aussi : Mentions légales →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
