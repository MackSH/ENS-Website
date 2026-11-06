<script setup>
import { ref } from 'vue'
import site from '../data/site'
import images from '../data/images'
import PageHero from '../components/PageHero.vue'
import AppIcon from '../components/AppIcon.vue'
import ExamCard from '../components/ExamCard.vue'
import departments from '../data/departments'

const { url, admitted, waitlist } = site.admission
const urlLabel = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const steps = [
  { icon: 'compass', title: 'Choisissez votre entité', text: 'Comparez les 7 entités et leurs débouchés pour choisir le domaine qui correspond à votre projet.' },
  { icon: 'monitor', title: 'Inscrivez-vous en ligne', text: `L'inscription au concours se fait sur le portail d'admission de l'UEH : ${urlLabel}.` },
  { icon: 'file-text', title: 'Passez le concours', text: 'Chaque entité a ses propres épreuves, avec des coefficients différents (voir ci-dessous).' },
  { icon: 'user-check', title: 'Consultez les résultats', text: `Dans chaque entité, ${admitted} candidats sont admis et ${waitlist} sont placés sur liste d'attente. Les résultats sont publiés dans les Actualités.` },
]

// Calendrier indicatif — À VÉRIFIER.
const calendar = [
  { period: 'Octobre', label: 'Rentrée académique et accueil des nouveaux étudiants' },
  { period: 'Janvier – février', label: 'Examens du premier semestre' },
  { period: 'Mars', label: 'Début du second semestre' },
  { period: 'Juin', label: 'Examens du second semestre' },
  { period: 'Juillet', label: 'Session de rattrapage · Soutenances de mémoires' },
  { period: 'Août – septembre', label: 'Vacances universitaires · Concours d’admission (voir les annonces)' },
]

const life = [
  { icon: 'library', title: 'Bibliothèque', text: 'Ouvrages de référence et mémoires des promotions précédentes.' },
  { icon: 'monitor', title: 'Salle informatique', text: 'Accès à Internet et aux outils numériques pour les cours et la recherche.' },
  { icon: 'users', title: 'Clubs et associations', text: 'Lecture, débat, sciences, sport : une vie associative active.' },
  { icon: 'vote', title: 'Représentation étudiante', text: 'Des délégués élus portent la voix des étudiants au Conseil de l’École.' },
]

const faq = [
  { q: 'Comment s’inscrire au concours ?', a: `L’inscription se fait en ligne sur le portail d’admission de l’Université d’État d’Haïti : ${url}. Les dates d’inscription et du concours sont annoncées dans la rubrique Actualités.` },
  { q: 'Combien de candidats sont admis ?', a: `Dans chacune des 7 entités, ${admitted} candidats sont admis et ${waitlist} sont placés sur liste d’attente. Les candidats sur liste d’attente peuvent être appelés si des places se libèrent.` },
  { q: 'Qui peut se présenter au concours ?', a: 'Toute personne titulaire du diplôme de fin d’études secondaires (Bac II / Philo) ou d’un diplôme équivalent reconnu par le Ministère de l’Éducation nationale.' },
  { q: 'Combien de temps dure la formation ?', a: 'Quatre ans : une année préparatoire, qui consolide les notions apprises au secondaire, puis trois années de licence (L1, L2, L3).' },
  { q: 'Faut-il vouloir devenir professeur pour entrer à l’ENS ?', a: 'Non. L’ENS forme des professionnels dans chacune de ses disciplines. L’enseignement est un débouché parmi d’autres : administration, ONG, entreprises, recherche, médias, organisations internationales… Consultez la page Débouchés.' },
  { q: 'Où trouver les résultats et les annonces officielles ?', a: 'Toutes les annonces sont publiées dans la rubrique Actualités de ce site, filtrable par catégorie (Admission, Résultats, Événements…).' },
]
const openFaq = ref(0)
</script>

<template>
  <PageHero
    eyebrow="Admission & formation"
    title="Comment ça marche."
    lead="Un concours d'entrée, une année préparatoire et trois années de licence. Voici tout ce qu'il faut savoir pour rejoindre l'ENS."
    :image="images.amphitheater"
  >
    <a :href="url" target="_blank" rel="noopener" class="btn">S'inscrire au concours <AppIcon name="external" :size="16" /></a>
    <a href="#faq" class="btn btn-secondary">Questions fréquentes</a>
  </PageHero>

  <!-- Chiffres du concours -->
  <section class="section-sm">
    <div class="container">
      <div class="key" v-reveal>
        <div>
          <strong>Concours</strong>
          <span>Mode d'admission</span>
        </div>
        <div>
          <strong>{{ admitted }}</strong>
          <span>Admis par entité</span>
        </div>
        <div>
          <strong>{{ waitlist }}</strong>
          <span>En liste d'attente par entité</span>
        </div>
        <div>
          <strong>4 ans</strong>
          <span>Prépa + licence</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Admission -->
  <section id="admission" class="section bg-alt">
    <div class="container">
      <p class="eyebrow center" v-reveal>Admission</p>
      <h2 class="headline-lg center" v-reveal="60">Quatre étapes pour nous rejoindre.</h2>
      <div class="grid grid-4 steps">
        <div v-for="(s, i) in steps" :key="s.title" class="card step" v-reveal="i * 80">
          <div class="step-top">
            <span class="ic"><AppIcon :name="s.icon" :size="24" /></span>
            <span class="num">{{ i + 1 }}</span>
          </div>
          <h3>{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </div>
      </div>

      <div class="portal" v-reveal>
        <div>
          <h3 class="headline-sm">Portail d'admission de l'UEH</h3>
          <p class="muted">Les inscriptions au concours se font exclusivement en ligne.</p>
        </div>
        <a :href="url" target="_blank" rel="noopener" class="btn">{{ urlLabel }} <AppIcon name="external" :size="16" /></a>
      </div>

      <p class="center more" v-reveal>
        <RouterLink :to="{ path: '/actualites', query: { categorie: 'Admission' } }" class="link-arrow">Voir les annonces d'admission</RouterLink>
      </p>
    </div>
  </section>

  <!-- Épreuves du concours -->
  <section id="epreuves" class="section">
    <div class="container">
      <p class="eyebrow center" v-reveal>Concours d'admission</p>
      <h2 class="headline-lg center" v-reveal="60">Les épreuves, entité par entité.</h2>
      <p class="lead center exams-lead" v-reveal="100">
        Chaque entité a ses propres épreuves. Le coefficient indique le poids de chaque matière dans la note finale.
      </p>
      <div class="grid grid-3 exams">
        <div v-for="(d, i) in departments" :key="d.slug" v-reveal="(i % 3) * 70">
          <ExamCard :department="d" />
        </div>
      </div>
      <p class="center small muted exams-note" v-reveal>
        Programme des épreuves, dates et lieux : consultez les
        <RouterLink :to="{ path: '/actualites', query: { categorie: 'Admission' } }">annonces d'admission</RouterLink>.
      </p>
    </div>
  </section>

  <!-- Parcours -->
  <section id="parcours" class="section">
    <div class="container">
      <div class="split">
        <div v-reveal>
          <p class="eyebrow">Parcours de formation</p>
          <h2 class="headline-lg">Quatre ans pour devenir un professionnel.</h2>
          <p class="lead split-lead">Une année préparatoire pour consolider les bases, puis trois années de licence pour se spécialiser.</p>
          <img :src="images.studentsLaptop" alt="Des étudiants travaillent ensemble" class="split-img" loading="lazy" />
        </div>
        <ol class="years">
          <li v-for="(y, i) in site.program" :key="y.code" v-reveal="i * 80">
            <span class="code" :class="{ prepa: i === 0 }">{{ y.code }}</span>
            <div>
              <h3>{{ y.title }}</h3>
              <p class="muted">{{ y.text }}</p>
            </div>
          </li>
        </ol>
      </div>
      <div class="after" v-reveal>
        <AppIcon name="briefcase" :size="28" />
        <p>
          <strong>Et après ?</strong> La licence ouvre sur l'emploi dans de nombreux secteurs ou sur un master.
          <RouterLink to="/debouches" class="link-arrow">Voir les débouchés</RouterLink>
        </p>
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
          <span class="ic big"><AppIcon :name="l.icon" :size="28" /></span>
          <h3>{{ l.title }}</h3>
          <p class="muted">{{ l.text }}</p>
        </div>
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
.key {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  text-align: center;
}
.key strong {
  display: block;
  font-size: clamp(30px, 4.5vw, 48px);
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.key span {
  color: var(--text-secondary);
  font-size: 15px;
}
@media (max-width: 680px) {
  .key {
    grid-template-columns: 1fr 1fr;
    gap: 28px 12px;
  }
}
.steps {
  margin-top: 48px;
}
.step {
  padding: 28px 24px;
}
.step-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.ic {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent);
}
.ic.big {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  margin: 0 auto;
}
.num {
  font-size: 34px;
  font-weight: 700;
  color: #d2d2d7;
}
.step h3 {
  font-size: 19px;
  margin-bottom: 8px;
}
.step p {
  font-size: 15px;
}
.portal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 32px;
  padding: 28px 32px;
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
}
.portal p {
  margin-top: 4px;
}
.more {
  margin-top: 28px;
}
.exams-lead {
  max-width: 680px;
  margin: 12px auto 0;
}
.exams {
  margin-top: 48px;
}
.exams-note {
  margin-top: 32px;
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
  display: grid;
  grid-template-columns: 76px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-top: 1px solid var(--hairline);
}
.years li:first-child {
  border-top: 0;
  padding-top: 0;
}
.code {
  display: grid;
  place-items: center;
  height: 52px;
  border-radius: 14px;
  background: var(--bg-alt);
  font-weight: 700;
  font-size: 18px;
}
.code.prepa {
  background: var(--text);
  color: #fff;
  font-size: 15px;
}
.years h3 {
  font-size: 22px;
  margin-bottom: 6px;
}
.after {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 56px;
  padding: 24px 28px;
  border-radius: var(--radius);
  background: var(--bg-alt);
  color: var(--accent);
}
.after p {
  color: var(--text);
}
.after .link-arrow {
  margin-left: 6px;
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
.life-item h3 {
  font-size: 19px;
  margin: 14px 0 6px;
}
.life-item p {
  font-size: 15px;
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
</style>
