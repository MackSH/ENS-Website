// ============================================================================
//  LES 7 ENTITÉS DE L'ENS
//  Pour modifier une entité, changez les valeurs du bloc { ... } correspondant.
//  - `image` : clé du fichier images.js
//  - `icon`  : nom d'une icône du composant AppIcon.vue
//  - `careers` : les débouchés (titre, description, icône)
//  - `sectors` : les secteurs qui recrutent
// ============================================================================

export const departments = [
  {
    slug: 'mathematiques',
    name: 'Mathématiques',
    family: 'Sciences exactes',
    icon: 'sigma',
    image: 'whiteboardMath',
    short: 'Raisonner, modéliser, calculer : les outils qui font tourner la science, l’économie et le numérique.',
    description:
      "L'entité de Mathématiques forme des spécialistes du raisonnement rigoureux et de la modélisation. Algèbre, analyse, géométrie, probabilités, statistiques et informatique donnent aux diplômés une boîte à outils recherchée partout où il faut analyser des données, prendre des décisions chiffrées ou résoudre des problèmes complexes.",
    courses: ['Algèbre et algèbre linéaire', 'Analyse réelle et complexe', 'Géométrie', 'Probabilités et statistiques', 'Algorithmique et programmation', 'Recherche opérationnelle'],
    skills: ['Raisonnement logique et abstraction', 'Analyse et traitement de données', 'Modélisation de problèmes réels', 'Programmation de base'],
    careers: [
      { icon: 'chart', title: 'Statisticien · analyste de données', text: 'Collecter, analyser et interpréter des données pour des institutions publiques, des ONG ou des entreprises.' },
      { icon: 'coins', title: 'Banque, assurance et finance', text: 'Analyse de risques, calcul actuariel, contrôle de gestion et analyse financière.' },
      { icon: 'code', title: 'Informatique et numérique', text: 'Développement, bases de données, data science : les maths sont la base des métiers du numérique.' },
      { icon: 'landmark', title: 'Planification et statistique publique', text: 'Ministères, institut de statistique, collectivités : suivi des indicateurs et aide à la décision.' },
      { icon: 'microscope', title: 'Recherche et études supérieures', text: 'Master puis doctorat en mathématiques pures ou appliquées, en Haïti ou à l’étranger.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur de mathématiques au secondaire ou chargé de cours à l’université.' },
    ],
    sectors: ['Banques et assurances', 'Institutions publiques', 'ONG et organismes internationaux', 'Entreprises technologiques', 'Enseignement et recherche'],
  },
  {
    slug: 'physique',
    name: 'Physique',
    family: 'Sciences exactes',
    icon: 'atom',
    image: 'technician',
    short: 'Comprendre la matière et l’énergie pour concevoir, mesurer et innover.',
    description:
      "L'entité de Physique allie théorie et expérimentation : mécanique, électricité, optique, thermodynamique, physique moderne. Les diplômés savent mesurer, expérimenter et résoudre des problèmes techniques — des compétences clés pour l'énergie, l'industrie, l'environnement et la recherche.",
    courses: ['Mécanique', 'Électricité et électromagnétisme', 'Optique et ondes', 'Thermodynamique', 'Physique moderne', 'Électronique et instrumentation'],
    skills: ['Démarche expérimentale', 'Mesure et instrumentation', 'Résolution de problèmes techniques', 'Modélisation physique'],
    careers: [
      { icon: 'zap', title: 'Énergie et énergies renouvelables', text: 'Installation et dimensionnement de systèmes solaires, électricité, efficacité énergétique.' },
      { icon: 'factory', title: 'Industrie et maintenance', text: 'Contrôle qualité, maintenance d’équipements, instrumentation dans l’industrie.' },
      { icon: 'globe', title: 'Météorologie et environnement', text: 'Observation du climat, prévention des risques naturels (cyclones, séismes).' },
      { icon: 'microscope', title: 'Laboratoires et métrologie', text: 'Technicien ou responsable de laboratoire, mesures et essais.' },
      { icon: 'award', title: 'Recherche et études supérieures', text: 'Master puis doctorat en physique, géophysique, sciences de l’ingénieur.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur de physique au secondaire ou chargé de travaux pratiques à l’université.' },
    ],
    sectors: ['Énergie et électricité', 'Industrie', 'Environnement et climat', 'Télécommunications', 'Enseignement et recherche'],
  },
  {
    slug: 'chimie-sciences-naturelles',
    name: 'Chimie / Sciences naturelles',
    family: 'Sciences exactes',
    icon: 'flask',
    image: 'womanTech',
    short: 'Chimie, biologie, géologie et écologie : la science du vivant et de la matière.',
    description:
      "L'entité de Chimie / Sciences naturelles couvre la chimie générale, organique et analytique ainsi que la biologie, la géologie et l'écologie. Une large place est faite aux enjeux d'Haïti : qualité de l'eau, santé, agriculture, biodiversité et protection de l'environnement.",
    courses: ['Chimie générale et organique', 'Chimie analytique', 'Biologie cellulaire et physiologie', 'Géologie', 'Écologie et environnement', 'Sécurité et techniques de laboratoire'],
    skills: ['Techniques de laboratoire', 'Analyse chimique et biologique', 'Rigueur et sécurité', 'Démarche scientifique'],
    careers: [
      { icon: 'microscope', title: 'Laboratoires d’analyse', text: 'Analyses médicales, contrôle de l’eau, des sols et des aliments.' },
      { icon: 'factory', title: 'Industrie agroalimentaire et pharmaceutique', text: 'Contrôle qualité, production, normes d’hygiène et de sécurité.' },
      { icon: 'leaf', title: 'Environnement et ressources naturelles', text: 'Gestion de l’eau, reboisement, études d’impact, protection de la biodiversité.' },
      { icon: 'heart-pulse', title: 'Santé publique', text: 'Programmes de prévention, épidémiologie, éducation à la santé.' },
      { icon: 'award', title: 'Recherche et études supérieures', text: 'Master puis doctorat en chimie, biologie, agronomie ou sciences de l’environnement.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur de chimie ou de sciences naturelles au secondaire.' },
    ],
    sectors: ['Laboratoires', 'Agroalimentaire', 'Santé', 'Environnement et ONG', 'Enseignement et recherche'],
  },
  {
    slug: 'sciences-sociales',
    name: 'Sciences sociales',
    family: 'Sciences humaines',
    icon: 'users',
    image: 'handsTogether',
    short: 'Sociologie, économie, anthropologie et science politique pour comprendre et transformer la société.',
    description:
      "L'entité de Sciences sociales offre une lecture rigoureuse de la société haïtienne à travers la sociologie, l'économie, l'anthropologie, la science politique et les méthodes d'enquête. Les diplômés savent mener une étude de terrain, analyser une situation sociale et concevoir des projets de développement.",
    courses: ['Sociologie générale', 'Économie', 'Anthropologie', 'Science politique', 'Méthodes d’enquête qualitatives et quantitatives', 'Statistiques sociales'],
    skills: ['Enquête de terrain', 'Analyse sociale et économique', 'Gestion de projets', 'Rédaction de rapports'],
    careers: [
      { icon: 'heart', title: 'ONG et développement', text: 'Chargé de projets, suivi-évaluation, développement communautaire.' },
      { icon: 'landmark', title: 'Administration publique', text: 'Ministères, mairies, collectivités : politiques sociales et planification.' },
      { icon: 'chart', title: 'Études et recherche sociale', text: 'Enquêtes, sondages, études de marché et diagnostics sociaux.' },
      { icon: 'globe', title: 'Organisations internationales', text: 'Agences des Nations unies, coopération, programmes humanitaires.' },
      { icon: 'newspaper', title: 'Journalisme et communication', text: 'Analyse de l’actualité sociale, économique et politique.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur de sciences sociales et d’économie au secondaire.' },
    ],
    sectors: ['ONG', 'Administration publique', 'Organisations internationales', 'Bureaux d’études', 'Médias'],
  },
  {
    slug: 'philosophie',
    name: 'Philosophie',
    family: 'Sciences humaines',
    icon: 'lightbulb',
    image: 'manThinking',
    short: 'Penser clairement, argumenter avec rigueur, questionner le monde.',
    description:
      "L'entité de Philosophie développe l'esprit critique, l'argumentation et l'expression écrite. Histoire de la philosophie, logique, éthique, épistémologie, philosophie politique et pensée haïtienne forment des esprits capables d'analyser, de conseiller et de décider.",
    courses: ['Histoire de la philosophie', 'Logique et argumentation', 'Éthique et philosophie politique', 'Épistémologie', 'Pensée haïtienne et caribéenne', 'Philosophie du droit'],
    skills: ['Esprit critique', 'Argumentation écrite et orale', 'Analyse de textes complexes', 'Réflexion éthique'],
    careers: [
      { icon: 'scale', title: 'Droit, éthique et conseil', text: 'Comités d’éthique, conseil aux institutions, poursuite d’études en droit.' },
      { icon: 'landmark', title: 'Administration et diplomatie', text: 'Fonction publique, relations internationales, analyse des politiques publiques.' },
      { icon: 'newspaper', title: 'Journalisme, édition et écriture', text: 'Éditorialiste, essayiste, rédacteur, chroniqueur.' },
      { icon: 'users', title: 'Ressources humaines et médiation', text: 'Gestion des personnes, médiation, communication interne.' },
      { icon: 'award', title: 'Recherche et enseignement supérieur', text: 'Master puis doctorat, carrière universitaire.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur de philosophie au secondaire.' },
    ],
    sectors: ['Administration publique', 'Médias et édition', 'Organisations internationales', 'Entreprises', 'Enseignement et recherche'],
  },
  {
    slug: 'lettres-modernes',
    name: 'Lettres modernes',
    family: 'Lettres & langues',
    icon: 'pen',
    image: 'womanProfile',
    short: 'Littérature, linguistique et maîtrise de l’écrit : l’art de comprendre et de bien communiquer.',
    description:
      "L'entité de Lettres modernes forme des spécialistes de la langue et des textes : littérature française, francophone et haïtienne, linguistique, grammaire, analyse du discours. Les diplômés maîtrisent parfaitement l'écrit et l'oral, une compétence recherchée dans les médias, l'édition, la communication et l'administration.",
    courses: ['Littérature haïtienne', 'Littératures françaises et francophones', 'Linguistique générale', 'Grammaire et stylistique', 'Analyse du discours', 'Créole et bilinguisme'],
    skills: ['Excellente maîtrise de l’écrit', 'Analyse de textes', 'Communication orale', 'Correction et révision'],
    careers: [
      { icon: 'newspaper', title: 'Journalisme et médias', text: 'Rédacteur, journaliste, présentateur, chroniqueur culturel.' },
      { icon: 'book-open', title: 'Édition et correction', text: 'Éditeur, correcteur, réviseur, rédacteur de manuels.' },
      { icon: 'megaphone', title: 'Communication et relations publiques', text: 'Chargé de communication, rédaction de contenus, attaché de presse.' },
      { icon: 'library', title: 'Culture et patrimoine', text: 'Bibliothèques, centres culturels, organisation d’événements littéraires.' },
      { icon: 'award', title: 'Recherche', text: 'Master puis doctorat en littérature, linguistique ou sciences du langage.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur de français et de littérature au secondaire.' },
    ],
    sectors: ['Médias', 'Édition', 'Communication', 'Culture', 'Enseignement et recherche'],
  },
  {
    slug: 'langues-vivantes',
    name: 'Langues vivantes',
    family: 'Lettres & langues',
    icon: 'languages',
    image: 'womanYellow',
    short: 'Anglais et espagnol : langue, civilisation et traduction pour travailler avec le monde.',
    description:
      "L'entité de Langues vivantes propose l'anglais et l'espagnol. La formation associe maîtrise de la langue, civilisations du monde anglophone et hispanophone, traduction et interprétation. Dans un pays voisin de la République dominicaine et des États-Unis, ces compétences ouvrent de nombreuses portes.",
    courses: ['Phonétique et expression orale', 'Grammaire et rédaction', 'Civilisations anglophones et hispanophones', 'Traduction', 'Interprétation', 'Littératures étrangères'],
    skills: ['Maîtrise de deux langues étrangères', 'Traduction écrite', 'Communication interculturelle', 'Interprétation'],
    careers: [
      { icon: 'languages', title: 'Traduction et interprétation', text: 'Traducteur, interprète de conférence ou de liaison, sous-titrage.' },
      { icon: 'globe', title: 'Relations internationales et diplomatie', text: 'Ambassades, consulats, organisations internationales.' },
      { icon: 'briefcase', title: 'Commerce international', text: 'Import-export, assistance commerciale, relations avec les partenaires étrangers.' },
      { icon: 'compass', title: 'Tourisme et hôtellerie', text: 'Guide, accueil, agences de voyage, hôtellerie.' },
      { icon: 'message', title: 'Centres d’appels et services clients', text: 'Service client multilingue, supervision d’équipes.' },
      { icon: 'graduation-cap', title: 'Enseignement', text: 'Professeur d’anglais ou d’espagnol, écoles de langues.' },
    ],
    sectors: ['Organisations internationales', 'Tourisme', 'Commerce', 'Services', 'Enseignement'],
  },
]

export const families = [...new Set(departments.map((d) => d.family))]

export const findDepartment = (slug) => departments.find((d) => d.slug === slug)

export default departments
