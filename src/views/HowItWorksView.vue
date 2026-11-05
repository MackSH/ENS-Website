<script setup>
import { ref } from 'vue'
import site from '../data/site'
import images from '../data/images'
import PageHero from '../components/PageHero.vue'

// ⚠️ Contenus indicatifs — À VÉRIFIER et modifier selon le règlement de l'ENS.
const steps = [
  { n: '1', title: 'Préparez votre dossier', text: 'Diplôme de fin d’études secondaires (Bac II), acte de naissance, pièce d’identité et photos.' },
  { n: '2', title: 'Inscrivez-vous', text: 'Déposez votre dossier au secrétariat de l’ENS pendant la période d’inscription et choisissez votre département.' },
  { n: '3', title: 'Passez le concours', text: 'Épreuves écrites de culture générale, de langue et de la discipline choisie, puis entretien éventuel.' },
  { n: '4', title: 'Consultez les résultats', text: 'La liste des admis est publiée sur ce site, dans la rubrique Actualités, et affichée à l’École.' },
]

const years = [
  { y: '1re année', title: 'Fondamentaux', text: 'Bases de la discipline, méthodologie du travail universitaire, langues (créole, français), introduction aux sciences de l’éducation.' },
  { y: '2e année', title: 'Approfondissement', text: 'Cours disciplinaires avancés, psychologie de l’enfant et de l’adolescent, initiation à la didactique.' },
  { y: '3e année', title: 'Pédagogie', text: 'Didactique de la discipline, évaluation des apprentissages, observation de classes en lycée.' },
  { y: '4e année', title: 'Pratique & mémoire', text: 'Stage d’enseignement encadré en établissement, séminaire de recherche et soutenance du mémoire de licence.' },
]

const calendar = [
  { period: 'Octobre', label: 'Rentrée académique et accueil des nouveaux étudiants' },
  { period: 'Novembre – janvier', label: 'Inscriptions au concours d’admission' },
  { period: 'Janvier – février', label: 'Examens du premier semestre' },
  { period: 'Février', label: 'Concours d’admission' },
  { period: 'Mars', label: 'Début du second semestre · Publication des admis' },
  { period: 'Juin', label: 'Examens du second semestre' },
  { period: 'Juillet', label: 'Session de rattrapage · Soutenances de mémoires' },
  { period: 'Août – septembre', label: 'Vacances universitaires' },
]

const life = [
  { icon: '📚', title: 'Bibliothèque', text: 'Ouvrages de référence, manuels scolaires et mémoires des promotions précédentes.' },
  { icon: '💻', title: 'Salle informatique', text: 'Accès à Internet et aux outils numériques pour préparer cours et recherches.' },
  { icon: '🎭', title: 'Clubs & associations', text: 'Lecture, débat, théâtre, sciences, sport : la vie associative est riche.' },
  { icon: '🗳️', title: 'Représentation étudiante', text: 'Des délégués élus portent la voix des étudiants au Conseil de l’École.' },
]

const faq = [
  { q: 'Qui peut se présenter au concours ?', a: 'Toute personne titulaire du diplôme de fin d’études secondaires (Bac II / Philo) ou d’un diplôme équivalent reconnu par le Ministère de l’Éducation nationale.' },
  { q: 'Les études sont-elles payantes ?', a: 'L’ENS fait partie de l’université publique : les frais de scolarité sont modestes. Seuls des frais d’inscription et de dossier sont demandés. Les montants exacts sont communiqués chaque année dans l’annonce du concours.' },
  { q: 'Peut-on changer de département ?', a: 'Un changement est possible en fin de première année, sur demande motivée et selon les places disponibles, après avis des deux chefs de département concernés.' },
  { q: 'Les cours ont-ils lieu le matin ou l’après-midi ?', a: 'La plupart des cours ont lieu en journée, du lundi au vendredi. Les horaires détaillés sont affichés au secrétariat de chaque département au début de chaque semestre.' },
  { q: 'Quel diplôme obtient-on ?', a: 'Une licence d’enseignement dans la discipline choisie, délivrée par l’Université d’État d’Haïti, qui permet d’enseigner au secondaire et de poursuivre en master.' },
  { q: 'Où trouver les résultats et les annonces officielles ?', a: 'Toutes les annonces sont publiées dans la rubrique Actualités de ce site, que vous pouvez filtrer par catégorie (Admission, Résultats, Événements…).' },
]
const openFaq = ref(0)
</script>

<template>
  <PageHero
    eyebrow="Admission & fonctionnement"
    title="Comment ça marche."
    lead="Du concours d'entrée jusqu'au diplôme, voici tout ce qu'il faut savoir pour étudier à l'ENS."
    :image="images.amphitheater"
  >
    <a href="#admission" class="btn">Postuler</a>
    <a href="#faq" class="btn btn-secondary">Questions fréquentes</a>
  </PageHero>

  <!-- Admission -->
  <section id="admission" class="section bg-alt">
    <div class="container">
      <p class="eyebrow center" v-reveal>Admission</p>
      <h2 class="headline-lg center" v-reveal="60">Quatre étapes pour nous rejoindre.</h2>
      <div class="grid grid-4 steps">
        <div v-for="(s, i) in steps" :key="s.n" class="card step" v-reveal="i * 80">
          <span class="num">{{ s.n }}</span>
          <h3>{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </div>
      </div>
      <div class="cta-row admission-cta" v-reveal>
        <RouterLink :to="{ path: '/actualites', query: { categorie: 'Admission' } }" class="btn">Voir les annonces d'admission</RouterLink>
        <a :href="`mailto:${site.contact.admissionsEmail}`" class="link-arrow">Écrire au service des admissions</a>
      </div>
    </div>
  </section>

  <!-- Parcours -->
  <section id="parcours" class="section">
    <div class="container">
      <div class="split">
        <div v-reveal>
          <p class="eyebrow">Parcours de formation</p>
          <h2 class="headline-lg">Quatre ans pour devenir enseignant.</h2>
          <p class="lead split-lead">Une licence qui unit maîtrise de la discipline et savoir-faire pédagogique.</p>
          <img :src="images.boyStudying" alt="Un élève en classe" class="split-img" loading="lazy" />
        </div>
        <ol class="years">
          <li v-for="(y, i) in years" :key="y.y" v-reveal="i * 80">
            <span class="y">{{ y.y }}</span>
            <h3>{{ y.title }}</h3>
            <p class="muted">{{ y.text }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Calendrier -->
  <section id="calendrier" class="section bg-dark">
    <div class="container">
      <p class="eyebrow center on-dark" v-reveal>Calendrier académique</p>
      <h2 class="headline-lg center" v-reveal="60">Une année à l'ENS.</h2>
      <div class="cal-table" v-reveal="120">
        <div v-for="c in calendar" :key="c.period" class="cal-row">
          <span class="period">{{ c.period }}</span>
          <span>{{ c.label }}</span>
        </div>
      </div>
      <p class="center small on-dark cal-note">Les dates exactes sont publiées chaque année dans les <RouterLink to="/actualites">actualités</RouterLink>.</p>
    </div>
  </section>

  <!-- Vie étudiante -->
  <section id="vie" class="section">
    <div class="container">
      <p class="eyebrow center" v-reveal>Vie étudiante</p>
      <h2 class="headline-lg center" v-reveal="60">Apprendre, et bien plus.</h2>
      <div class="grid grid-4 life">
        <div v-for="(l, i) in life" :key="l.title" class="life-item" v-reveal="i * 80">
          <span class="l-icon">{{ l.icon }}</span>
          <h3>{{ l.title }}</h3>
          <p class="muted">{{ l.text }}</p>
        </div>
      </div>
      <div class="life-photo" v-reveal>
        <img :src="images.studentsLaptop" alt="Des étudiants travaillent ensemble" class="img-cover" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="section bg-alt">
    <div class="container faq-wrap">
      <h2 class="headline-lg center" v-reveal>Questions fréquentes.</h2>
      <div class="faq" v-reveal="80">
        <div v-for="(f, i) in faq" :key="f.q" class="faq-item" :class="{ open: openFaq === i }">
          <button :aria-expanded="openFaq === i" @click="openFaq = openFaq === i ? -1 : i">
            <span>{{ f.q }}</span>
            <span class="plus" aria-hidden="true">+</span>
          </button>
          <div class="answer" :hidden="openFaq !== i">
            <p>{{ f.a }}</p>
          </div>
        </div>
      </div>
      <p class="center more">Vous ne trouvez pas votre réponse ? <RouterLink to="/contact">Contactez-nous</RouterLink>.</p>
    </div>
  </section>
</template>

<style scoped>
.steps {
  margin-top: 48px;
}
.step {
  padding: 32px 26px;
}
.num {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--text);
  color: #fff;
  font-weight: 600;
  margin-bottom: 18px;
}
.step h3 {
  font-size: 19px;
  margin-bottom: 8px;
}
.step p {
  font-size: 15px;
}
.admission-cta {
  margin-top: 48px;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}
.split-lead {
  margin: 16px 0 28px;
}
.split-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-lg);
}
.years {
  list-style: none;
  margin: 0;
  padding: 0;
}
.years li {
  padding: 28px 0;
  border-top: 1px solid var(--hairline);
}
.years li:first-child {
  border-top: 0;
  padding-top: 0;
}
.y {
  font-size: 14px;
  font-weight: 600;
  color: var(--haiti-red);
}
.years h3 {
  font-size: 24px;
  margin: 4px 0 8px;
}
@media (max-width: 833px) {
  .split {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.on-dark {
  color: #a1a1a6;
}
.cal-table {
  max-width: 760px;
  margin: 48px auto 0;
  border-radius: var(--radius);
  background: var(--bg-dark-alt);
  overflow: hidden;
}
.cal-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  padding: 18px 24px;
  border-top: 1px solid #333336;
}
.cal-row:first-child {
  border-top: 0;
}
.period {
  font-weight: 600;
  color: var(--link-on-dark);
}
@media (max-width: 560px) {
  .cal-row {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
.cal-note {
  margin-top: 20px;
}

.life {
  margin-top: 48px;
}
.life-item {
  text-align: center;
}
.l-icon {
  font-size: 40px;
}
.life-item h3 {
  font-size: 19px;
  margin: 10px 0 6px;
}
.life-item p {
  font-size: 15px;
}
.life-photo {
  margin-top: 56px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 21 / 9;
}
@media (max-width: 680px) {
  .life-photo {
    aspect-ratio: 4 / 3;
  }
}

.faq-wrap {
  max-width: 820px;
}
.faq {
  margin-top: 40px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.faq-item + .faq-item {
  border-top: 1px solid var(--hairline);
}
.faq-item button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  text-align: left;
  background: none;
  border: 0;
  padding: 22px 26px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.plus {
  font-size: 26px;
  font-weight: 300;
  color: var(--text-secondary);
  transition: transform 0.3s var(--ease);
}
.open .plus {
  transform: rotate(45deg);
}
.answer {
  padding: 0 26px 24px;
  color: var(--text-secondary);
}
.more {
  margin-top: 28px;
}
</style>
