// ============================================================================
//  INFORMATIONS GÉNÉRALES DE L'ÉCOLE
//  Les informations marquées « À VÉRIFIER » sont des valeurs indicatives.
//  Modifiez-les librement : tout le site se met à jour automatiquement.
// ============================================================================

export const site = {
  name: 'École Normale Supérieure',
  shortName: 'ENS',
  university: "Université d'État d'Haïti",
  universityShort: 'UEH',
  tagline: 'Des professionnels pour faire avancer Haïti.',
  founded: 1947, // À VÉRIFIER

  // Dépôt GitHub (utilisé par la page « Publier une information »)
  github: {
    owner: 'MackSH',
    repo: 'ENS-Website',
    branch: 'main',
    newsFolder: 'src/content/actualites',
  },

  // Admission
  admission: {
    url: 'https://admission.ueh.edu.ht/',
    admitted: 25, // par entité
    waitlist: 5, // par entité
  },

  // Formation : 1 année préparatoire + 3 années de licence
  program: [
    { code: 'Prépa', title: 'Année préparatoire', text: 'Consolider les notions acquises au secondaire, mettre tout le monde à niveau et acquérir les méthodes du travail universitaire.' },
    { code: 'L1', title: 'Licence 1', text: 'Fondamentaux de la discipline, premiers cours de spécialité, méthodologie de la recherche documentaire.' },
    { code: 'L2', title: 'Licence 2', text: 'Approfondissement disciplinaire, cours appliqués, choix d’orientation selon le projet professionnel.' },
    { code: 'L3', title: 'Licence 3', text: 'Spécialisation, stage ou projet professionnel, mémoire de fin d’études et préparation à l’insertion.' },
  ],

  contact: {
    address: '10, Rue Canapé-Vert, Port-au-Prince, Haïti',
    phone: '+509 2222-0000', // À VÉRIFIER
    email: 'contact@ens.ueh.edu.ht', // À VÉRIFIER
    hours: 'Lundi – vendredi, 8 h 00 – 16 h 00', // À VÉRIFIER
    mapQuery: '10 Rue Canapé-Vert, Port-au-Prince, Haïti',
  },

  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'YouTube', url: 'https://www.youtube.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],

  // Chiffres clés (page d'accueil)
  stats: [
    { value: '7', label: 'Entités de formation' },
    { value: '4 ans', label: '1 année préparatoire + licence' },
    { value: '25', label: 'Admis par entité' },
    { value: '250+', label: 'Membres de la communauté' },
  ],

  // Direction (page L'École) — À VÉRIFIER
  leadership: [
    { name: 'Nom du Doyen', role: 'Doyen', photo: 'manGlasses' },
    { name: 'Nom du Vice-Doyen', role: 'Vice-Doyen aux affaires académiques', photo: 'womanPortrait' },
    { name: 'Nom du Secrétaire', role: 'Secrétaire général', photo: 'manPortrait' },
    { name: 'Nom de la Responsable', role: 'Responsable de la recherche', photo: 'womanYellow' },
  ],

  // Valeurs (page L'École)
  values: [
    { icon: 'award', title: 'Excellence', text: 'Une formation exigeante et sélective, au niveau des meilleures écoles.' },
    { icon: 'briefcase', title: 'Professionnalisation', text: 'Des diplômés prêts à travailler dans leur domaine : public, privé, ONG, recherche ou enseignement.' },
    { icon: 'microscope', title: 'Recherche', text: 'Produire du savoir utile au développement d’Haïti dans chacune de nos disciplines.' },
    { icon: 'globe', title: 'Ouverture', text: 'Le créole et le français au cœur de la formation, avec une ouverture sur le monde.' },
  ],

  // Grandes étapes (page L'École) — À VÉRIFIER
  history: [
    { year: '1947', title: 'Fondation', text: "Création de l'École Normale Supérieure." },
    { year: '1960', title: 'Intégration universitaire', text: "L'ENS devient l'une des entités de l'Université d'Haïti, devenue Université d'État d'Haïti." },
    { year: '2010', title: 'Reconstruction', text: "Après le séisme du 12 janvier, l'École poursuit sa mission et reconstruit ses espaces." },
    { year: "Aujourd'hui", title: 'Sept entités, de nombreux métiers', text: 'Une formation en 4 ans tournée vers la diversité des débouchés professionnels.' },
  ],
}

export default site
