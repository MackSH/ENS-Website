// ============================================================================
//  INFORMATIONS GÉNÉRALES DE L'ÉCOLE
//  ⚠️ Certaines informations ci-dessous sont des valeurs indicatives
//  (marquées « À VÉRIFIER »). Modifiez-les librement : tout le site se met
//  à jour automatiquement.
// ============================================================================

export const site = {
  name: 'École Normale Supérieure',
  shortName: 'ENS',
  university: "Université d'État d'Haïti",
  universityShort: 'UEH',
  tagline: 'Former ceux qui forment Haïti.',
  founded: 1947, // À VÉRIFIER
  motto: 'Savoir, transmettre, servir.', // À VÉRIFIER

  // Dépôt GitHub (utilisé par la page « Publier une information »)
  github: {
    owner: 'MackSH',
    repo: 'ENS-Website',
    branch: 'main',
    newsFolder: 'src/content/actualites',
  },

  contact: {
    address: 'Avenue Christophe, Port-au-Prince, Haïti', // À VÉRIFIER
    phone: '+509 2222-0000', // À VÉRIFIER
    email: 'contact@ens.ueh.edu.ht', // À VÉRIFIER
    admissionsEmail: 'admission@ens.ueh.edu.ht', // À VÉRIFIER
    hours: 'Lundi – vendredi, 8 h 00 – 16 h 00',
    mapQuery: 'École Normale Supérieure, Port-au-Prince, Haïti',
  },

  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'YouTube', url: 'https://www.youtube.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],

  // Chiffres clés (page d'accueil)
  stats: [
    { value: '1947', label: 'Année de fondation' },
    { value: '10', label: 'Départements' },
    { value: '2 000+', label: 'Étudiants inscrits' },
    { value: '15 000+', label: 'Diplômés depuis la création' },
  ],

  // Direction (page L'École)
  leadership: [
    { name: 'Nom du Doyen', role: 'Doyen', photo: 'manGlasses' },
    { name: 'Nom du Vice-Doyen', role: 'Vice-Doyen aux affaires académiques', photo: 'womanPortrait' },
    { name: 'Nom du Secrétaire', role: 'Secrétaire général', photo: 'manPortrait' },
    { name: 'Nom de la Responsable', role: 'Responsable de la recherche', photo: 'womanYellow' },
  ],

  // Valeurs (page L'École)
  values: [
    { icon: '🎓', title: 'Excellence', text: "Une exigence académique au service d'un enseignement de qualité dans tout le pays." },
    { icon: '🤝', title: 'Service public', text: "Former des enseignants pour l'école haïtienne, en particulier le secondaire public." },
    { icon: '🔬', title: 'Recherche', text: "Produire du savoir sur l'éducation, la langue, l'histoire et les sciences en Haïti." },
    { icon: '🌍', title: 'Ouverture', text: "Le créole et le français au cœur de l'enseignement, avec une ouverture sur le monde." },
  ],

  // Grandes étapes (page L'École) — À VÉRIFIER
  history: [
    { year: '1947', title: 'Fondation', text: "Création de l'École Normale Supérieure pour former les professeurs de l'enseignement secondaire." },
    { year: '1960', title: 'Intégration universitaire', text: "L'ENS devient l'une des facultés de l'Université d'Haïti, devenue Université d'État d'Haïti." },
    { year: '1980', title: 'Nouvelles sections', text: 'Ouverture de nouveaux départements en sciences et en langues vivantes.' },
    { year: '2010', title: 'Reconstruction', text: "Après le séisme du 12 janvier, l'École poursuit sa mission et reconstruit ses espaces d'enseignement." },
    { year: "Aujourd'hui", title: 'Une école tournée vers demain', text: 'Modernisation des programmes, numérique éducatif et développement de la recherche.' },
  ],
}

export default site
