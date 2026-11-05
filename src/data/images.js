// ============================================================================
//  IMAGES DU SITE
//  Toutes les photos sont centralisées ici pour être faciles à remplacer.
//  Ce sont des photos libres de droits (Unsplash) servant d'illustration
//  temporaire. Remplacez-les par de vraies photos de l'ENS :
//    1. déposez vos fichiers dans le dossier /public/images/
//    2. remplacez l'URL par le chemin, ex. : `${base}images/facade.jpg`
// ============================================================================

const base = import.meta.env.BASE_URL
const u = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const local = (path) => `${base}${path.replace(/^\//, '')}`

export const images = {
  // Accueil
  hero: u('1632215861513-130b66fe97f4', 2000), // enseignante en salle de classe
  graduation: u('1627556704290-2b1f5853ff78', 2000), // remise des diplômes
  studentsLaptop: u('1531482615713-2afd69097998'), // étudiants au travail
  childrenWriting: u('1529390079861-591de354faf5'), // élèves qui écrivent
  boyStudying: u('1588072432836-e10032774350'), // élève en classe
  library: u('1427504494785-3a9ca7044f45'), // bibliothèque
  classroom: u('1580582932707-520aed937b7b'), // salle de classe vide
  amphitheater: u('1606761568499-6d2451b23c66'), // amphithéâtre
  handsTogether: u('1531206715517-5c0ba140b2b8'), // solidarité
  whiteboardMath: u('1596495577886-d920f1fb7238'), // tableau, mathématiques
  womanProfile: u('1589156280159-27698a70f29e'),
  womanPortrait: u('1531123897727-8f129e1688ce', 800),
  womanYellow: u('1611432579402-7037e3e2c1e4'),
  womanTech: u('1573164713988-8665fc963095'),
  manThinking: u('1566492031773-4f4e44671857'),
  manGlasses: u('1531384441138-2736e62e0919', 800),
  manSmiling: u('1506277886164-e25aa3f4ef7f', 800),
  manPortrait: u('1522529599102-193c0d76b5b6', 800),
  technician: u('1621905251189-08b45d6a269e'),
}

export default images
