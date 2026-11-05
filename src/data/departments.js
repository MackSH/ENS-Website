// ============================================================================
//  DÉPARTEMENTS / SECTIONS DE L'ENS
//  Pour ajouter un département : copiez un bloc { ... } et changez les valeurs.
//  `image` correspond à une clé du fichier images.js.
//  Les contenus (cours, débouchés…) sont indicatifs — À VÉRIFIER.
// ============================================================================

export const departments = [
  {
    slug: 'lettres-modernes',
    name: 'Lettres modernes',
    family: 'Lettres & langues',
    icon: '✍️',
    image: 'womanProfile',
    short: 'Littérature française, francophone et haïtienne, linguistique et didactique du français.',
    description:
      "Le département de Lettres modernes forme les professeurs de français du secondaire. Les étudiants explorent la littérature française, francophone et haïtienne, la linguistique, la grammaire et la didactique de la langue, avec une attention particulière à la situation de bilinguisme créole-français.",
    courses: ['Littérature haïtienne', 'Littératures francophones', 'Linguistique générale', 'Grammaire et stylistique', 'Didactique du français', 'Analyse du discours'],
    careers: ['Professeur de français au secondaire', 'Éditeur, correcteur', 'Journaliste, rédacteur', 'Recherche en littérature'],
  },
  {
    slug: 'langues-vivantes',
    name: 'Langues vivantes',
    family: 'Lettres & langues',
    icon: '🗣️',
    image: 'womanYellow',
    short: 'Anglais et espagnol : langue, civilisation, traduction et pédagogie.',
    description:
      "Le département de Langues vivantes propose deux options, anglais et espagnol. La formation associe maîtrise de la langue, civilisations du monde anglophone et hispanophone, traduction et méthodes d'enseignement des langues étrangères.",
    courses: ['Phonétique et phonologie', 'Civilisation anglophone / hispanophone', 'Traduction', 'Littératures étrangères', 'Didactique des langues', 'Expression orale'],
    careers: ["Professeur d'anglais ou d'espagnol", 'Traducteur, interprète', 'Relations internationales', 'Tourisme et communication'],
  },
  {
    slug: 'creole',
    name: 'Créole haïtien',
    family: 'Lettres & langues',
    icon: '🇭🇹',
    image: 'manSmiling',
    short: 'Linguistique créole, littérature en créole et enseignement en langue maternelle.',
    description:
      "Le créole haïtien est la langue de tous les Haïtiens. Ce département forme des spécialistes capables d'enseigner le créole et en créole, de produire des ressources pédagogiques et de mener des recherches en linguistique et en littérature créoles.",
    courses: ['Lengwistik kreyòl', 'Literati kreyòl', 'Ortograf ak gramè', 'Didaktik lang manman', 'Sociolinguistique haïtienne', 'Production de manuels'],
    careers: ['Professeur de créole', 'Concepteur de matériel pédagogique', 'Linguiste, chercheur', 'Médias en langue créole'],
  },
  {
    slug: 'philosophie',
    name: 'Philosophie',
    family: 'Sciences humaines',
    icon: '💭',
    image: 'manThinking',
    short: 'Histoire de la philosophie, logique, éthique, épistémologie et pensée haïtienne.',
    description:
      "Le département de Philosophie forme des professeurs capables d'éveiller l'esprit critique des élèves de terminale. Les étudiants abordent les grands courants de la pensée, la logique, l'éthique, l'épistémologie ainsi que la pensée caribéenne et haïtienne.",
    courses: ['Histoire de la philosophie', 'Logique', 'Éthique et philosophie politique', 'Épistémologie', 'Pensée haïtienne et caribéenne', 'Didactique de la philosophie'],
    careers: ['Professeur de philosophie', 'Recherche et enseignement supérieur', 'Éthique et conseil', 'Écriture et essai'],
  },
  {
    slug: 'histoire-geographie',
    name: 'Histoire & Géographie',
    family: 'Sciences humaines',
    icon: '🗺️',
    image: 'library',
    short: "Histoire d'Haïti et du monde, géographie physique et humaine, cartographie.",
    description:
      "De la Révolution haïtienne aux dynamiques du monde contemporain, ce département forme les professeurs d'histoire et de géographie. Il allie travail sur les sources, géographie physique et humaine, cartographie et éducation civique.",
    courses: ["Histoire d'Haïti", 'Histoire de la Caraïbe et des Amériques', 'Géographie physique', 'Géographie humaine et urbaine', 'Cartographie et SIG', 'Éducation civique'],
    careers: ["Professeur d'histoire-géographie", 'Archiviste, documentaliste', 'Patrimoine et musées', 'Aménagement du territoire'],
  },
  {
    slug: 'sciences-sociales',
    name: 'Sciences sociales',
    family: 'Sciences humaines',
    icon: '👥',
    image: 'handsTogether',
    short: 'Sociologie, économie et sciences politiques appliquées à la société haïtienne.',
    description:
      "Le département de Sciences sociales prépare à l'enseignement des sciences économiques et sociales. Il offre une lecture rigoureuse de la société haïtienne grâce à la sociologie, l'économie, l'anthropologie et la science politique.",
    courses: ['Sociologie générale', 'Économie', 'Anthropologie', 'Science politique', 'Méthodes de recherche', 'Statistiques sociales'],
    careers: ['Professeur de sciences sociales', 'Chargé de projets (ONG)', 'Analyste social', 'Administration publique'],
  },
  {
    slug: 'mathematiques',
    name: 'Mathématiques',
    family: 'Sciences',
    icon: '∑',
    image: 'whiteboardMath',
    short: 'Algèbre, analyse, géométrie, probabilités et didactique des mathématiques.',
    description:
      'Le département de Mathématiques forme des enseignants solides sur les fondamentaux — algèbre, analyse, géométrie, probabilités — et outillés pour rendre les mathématiques accessibles et vivantes en classe.',
    courses: ['Algèbre linéaire', 'Analyse réelle', 'Géométrie', 'Probabilités et statistiques', 'Informatique', 'Didactique des mathématiques'],
    careers: ['Professeur de mathématiques', 'Statisticien, analyste de données', 'Banque et assurance', 'Recherche'],
  },
  {
    slug: 'physique',
    name: 'Physique',
    family: 'Sciences',
    icon: '⚛️',
    image: 'technician',
    short: 'Mécanique, électricité, optique, thermodynamique et travaux pratiques.',
    description:
      "Le département de Physique allie théorie et expérimentation. Les étudiants apprennent à concevoir des travaux pratiques avec peu de moyens, un atout essentiel pour l'enseignement scientifique dans les lycées haïtiens.",
    courses: ['Mécanique', 'Électricité et électromagnétisme', 'Optique', 'Thermodynamique', 'Physique moderne', 'Travaux pratiques'],
    careers: ['Professeur de physique', 'Technicien de laboratoire', 'Énergies renouvelables', 'Recherche appliquée'],
  },
  {
    slug: 'chimie',
    name: 'Chimie',
    family: 'Sciences',
    icon: '🧪',
    image: 'womanTech',
    short: 'Chimie générale, organique, analytique et sécurité au laboratoire.',
    description:
      "Le département de Chimie forme des enseignants maîtrisant la chimie générale, organique et analytique, ainsi que la pratique sécurisée du laboratoire, pour faire découvrir aux élèves la chimie du quotidien.",
    courses: ['Chimie générale', 'Chimie organique', 'Chimie analytique', 'Chimie des solutions', 'Sécurité au laboratoire', 'Didactique de la chimie'],
    careers: ['Professeur de chimie', 'Laboratoires d’analyse', 'Industrie agroalimentaire', 'Contrôle qualité'],
  },
  {
    slug: 'biologie',
    name: 'Sciences naturelles',
    family: 'Sciences',
    icon: '🌿',
    image: 'studentsLaptop',
    short: "Biologie, géologie et écologie, avec un regard sur l'environnement haïtien.",
    description:
      "Le département de Sciences naturelles couvre la biologie cellulaire, la physiologie, la géologie et l'écologie. Une large place est faite aux enjeux environnementaux d'Haïti : biodiversité, reboisement, gestion de l'eau.",
    courses: ['Biologie cellulaire', 'Physiologie humaine', 'Géologie', 'Écologie et environnement', 'Botanique et zoologie', 'Didactique des SVT'],
    careers: ['Professeur de sciences naturelles', 'Environnement et ONG', 'Santé publique', 'Agronomie'],
  },
]

export const families = [...new Set(departments.map((d) => d.family))]

export const findDepartment = (slug) => departments.find((d) => d.slug === slug)

export default departments
