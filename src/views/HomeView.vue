<script setup>
import { computed } from 'vue'
import site from '../data/site'
import images from '../data/images'
import departments from '../data/departments'
import { articles, upcomingEvents, formatDate } from '../lib/news'
import NewsCard from '../components/NewsCard.vue'
import AppIcon from '../components/AppIcon.vue'

const outcomes = [
  { icon: 'landmark', label: 'Administration publique' },
  { icon: 'heart', label: 'ONG et développement' },
  { icon: 'globe', label: 'Organisations internationales' },
  { icon: 'coins', label: 'Banque et entreprises' },
  { icon: 'factory', label: 'Industrie et laboratoires' },
  { icon: 'newspaper', label: 'Médias et culture' },
  { icon: 'microscope', label: 'Recherche' },
  { icon: 'graduation-cap', label: 'Enseignement' },
]

const latest = computed(() => articles.slice(0, 3))
const events = computed(() => upcomingEvents().slice(0, 3))
const pinned = computed(() => articles.find((a) => a.pinned))

const day = (d) => d.getDate()
const month = (d) => d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')
</script>

<template>
  <!-- Bandeau d'annonce épinglée -->
  <RouterLink v-if="pinned" :to="`/actualites/${pinned.slug}`" class="ribbon">
    {{ pinned.title }} <span class="link-arrow">En savoir plus</span>
  </RouterLink>

  <!-- HERO -->
  <section class="hero">
    <div class="container center">
      <p class="eyebrow" v-reveal>{{ site.university }}</p>
      <h1 class="headline-xl" v-reveal="80">École Normale<br />Supérieure</h1>
      <p class="hero-tag gradient-text" v-reveal="160">{{ site.tagline }}</p>
      <div class="cta-row" v-reveal="240">
        <RouterLink to="/ecole" class="btn">Découvrir l'École</RouterLink>
        <RouterLink to="/entites" class="link-arrow">Voir les 7 entités</RouterLink>
      </div>
    </div>
    <div class="container-wide" v-reveal="300">
      <div class="hero-media">
        <img :src="images.hero" alt="Une formatrice devant sa classe" class="img-cover" fetchpriority="high" />
      </div>
    </div>
  </section>

  <!-- TUILES 2 COLONNES (façon apple.com) -->
  <section class="tiles container-wide">
    <RouterLink to="/admission" class="tile tile-dark" v-reveal>
      <div class="tile-text">
        <p class="eyebrow on-dark">Admission</p>
        <h2 class="headline-md">Devenez normalien.</h2>
        <p class="tile-lead">Admission sur concours, inscription en ligne : {{ site.admission.admitted }} places par entité.</p>
        <span class="link-arrow">Comment postuler</span>
      </div>
      <img :src="images.graduation" alt="Des diplômés lancent leur toque" class="tile-img" loading="lazy" />
    </RouterLink>
    <RouterLink to="/actualites" class="tile tile-light" v-reveal="100">
      <div class="tile-text">
        <p class="eyebrow accent">Actualités</p>
        <h2 class="headline-md">Toujours au courant.</h2>
        <p class="tile-lead">Annonces, résultats, événements : toute l'information officielle, au même endroit.</p>
        <span class="link-arrow">Voir les actualités</span>
      </div>
      <img :src="images.studentsLaptop" alt="Des étudiants travaillent ensemble" class="tile-img" loading="lazy" />
    </RouterLink>
  </section>

  <!-- CHIFFRES -->
  <section class="section">
    <div class="container center">
      <h2 class="headline-lg" v-reveal>Plus de 75 ans<br /><span class="muted">au service d'Haïti.</span></h2>
      <div class="stats" v-reveal="100">
        <div v-for="s in site.stats" :key="s.label" class="stat">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- DÉPARTEMENTS — galerie horizontale -->
  <section class="section bg-alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <h2 class="headline-lg">Explorez nos 7 entités.</h2>
        <RouterLink to="/entites" class="link-arrow">Toutes les entités</RouterLink>
      </div>
    </div>
    <div class="gallery" v-reveal="100">
      <RouterLink v-for="d in departments" :key="d.slug" :to="`/entites/${d.slug}`" class="g-card">
        <img :src="images[d.image]" :alt="''" loading="lazy" class="img-cover" />
        <div class="g-overlay">
          <span class="g-family">{{ d.family }}</span>
          <h3>{{ d.name }}</h3>
          <p>{{ d.short }}</p>
        </div>
      </RouterLink>
    </div>
  </section>

  <!-- DÉBOUCHÉS -->
  <section class="section outcomes-sec">
    <div class="container center">
      <p class="eyebrow accent" v-reveal>Débouchés</p>
      <h2 class="headline-lg" v-reveal="60">Bien plus que l'enseignement.</h2>
      <p class="lead outcomes-lead" v-reveal="120">
        Chaque entité forme des professionnels de son domaine. Voici où travaillent nos diplômés.
      </p>
      <div class="outcomes" v-reveal="160">
        <div v-for="o in outcomes" :key="o.label" class="outcome">
          <span class="o-ic"><AppIcon :name="o.icon" :size="26" /></span>
          <span>{{ o.label }}</span>
        </div>
      </div>
      <div class="cta-row" v-reveal>
        <RouterLink to="/debouches" class="btn">Explorer les débouchés</RouterLink>
        <RouterLink to="/entites" class="link-arrow">Comparer les entités</RouterLink>
      </div>
    </div>
  </section>

  <!-- MISSION — section sombre -->
  <section class="section bg-dark mission">
    <div class="container">
      <div class="mission-grid">
        <div v-reveal>
          <p class="eyebrow on-dark">Notre mission</p>
          <h2 class="headline-lg">Former des professionnels dans chaque discipline.</h2>
          <p class="lead mission-lead">
            L'ENS forme, en quatre ans, des spécialistes en mathématiques, physique, chimie et sciences naturelles, sciences
            sociales, philosophie, lettres et langues. Nos diplômés travaillent dans l'administration, les ONG, les entreprises,
            la recherche, les médias ou l'enseignement.
          </p>
          <RouterLink to="/debouches" class="link-arrow">Découvrir les débouchés</RouterLink>
        </div>
        <div class="mission-photos" v-reveal="120">
          <img :src="images.childrenWriting" alt="Des élèves écrivent en classe" loading="lazy" />
          <img :src="images.boyStudying" alt="Un élève concentré" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- ACTUALITÉS -->
  <section class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <h2 class="headline-lg">Les dernières nouvelles.</h2>
        <RouterLink to="/actualites" class="link-arrow">Toutes les actualités</RouterLink>
      </div>
      <div class="grid grid-3">
        <div v-for="(a, i) in latest" :key="a.slug" v-reveal="i * 80">
          <NewsCard :article="a" />
        </div>
      </div>
    </div>
  </section>

  <!-- AGENDA -->
  <section v-if="events.length" class="section-sm bg-alt">
    <div class="container">
      <h2 class="headline-md" v-reveal>À l'agenda.</h2>
      <ul class="agenda" v-reveal="80">
        <li v-for="e in events" :key="e.slug">
          <RouterLink :to="`/actualites/${e.slug}`" class="agenda-item">
            <div class="cal">
              <span class="cal-m">{{ month(e.eventDate) }}</span>
              <span class="cal-d">{{ day(e.eventDate) }}</span>
            </div>
            <div class="agenda-text">
              <strong>{{ e.title }}</strong>
              <span class="muted small">{{ formatDate(e.eventDate) }}<template v-if="e.location"> · {{ e.location }}</template></span>
            </div>
            <span class="chev" aria-hidden="true">›</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>

  <!-- TÉMOIGNAGE -->
  <section class="section">
    <div class="container">
      <figure class="quote" v-reveal>
        <img :src="images.womanPortrait" alt="Portrait d'une ancienne étudiante" loading="lazy" />
        <blockquote>
          <p>« L'ENS m'a appris à aimer enseigner. Aujourd'hui, je transmets à mes élèves la même exigence et la même passion. »</p>
          <figcaption>
            <strong>Nom de l'ancienne étudiante</strong>
            <span class="muted">Promotion 2015 · Lettres modernes · Professeure à Port-au-Prince</span>
          </figcaption>
        </blockquote>
      </figure>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="section-sm">
    <div class="container-wide">
      <div class="cta-final" v-reveal>
        <h2 class="headline-lg">Une question ?<br />La réponse est ici.</h2>
        <p class="lead">Admission, horaires, résultats, événements : tout ce que vous cherchez sur l'ENS.</p>
        <div class="cta-row">
          <RouterLink to="/actualites" class="btn">Rechercher une information</RouterLink>
          <RouterLink to="/contact" class="link-arrow">Nous contacter</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ribbon {
  display: block;
  background: var(--bg-alt);
  text-align: center;
  padding: 14px var(--gutter);
  font-size: 14px;
  color: var(--text);
}
.ribbon:hover {
  text-decoration: none;
}
.ribbon .link-arrow {
  font-size: 14px;
  margin-left: 6px;
}

.hero {
  padding: 72px 0 24px;
}
.hero-tag {
  font-size: clamp(24px, 3.4vw, 36px);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 14px 0 28px;
  display: inline-block;
}
.hero-media {
  margin-top: 56px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 2 / 1;
}
@media (max-width: 680px) {
  .hero-media {
    aspect-ratio: 4 / 5;
  }
}

/* Tuiles */
.tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding-top: 12px;
}
.tile {
  display: flex;
  flex-direction: column;
  min-height: 580px;
  text-align: center;
  color: inherit;
}
.tile:hover {
  text-decoration: none;
}
.tile-dark {
  background: #000;
  color: #f5f5f7;
}
.tile-dark .link-arrow {
  color: var(--link-on-dark);
}
.tile-text {
  padding: 48px 32px 24px;
}
.tile-lead {
  font-size: 19px;
  margin: 10px 0 14px;
  opacity: 0.8;
}
.tile-img {
  margin-top: auto;
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 1s var(--ease);
}
.tile:hover .tile-img {
  transform: scale(1.04);
}
.on-dark {
  color: #a1a1a6;
}
@media (max-width: 833px) {
  .tiles {
    grid-template-columns: 1fr;
  }
  .tile {
    min-height: 520px;
  }
}

/* Chiffres */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 56px;
}
.stat strong {
  display: block;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.stat span {
  color: var(--text-secondary);
  font-size: 15px;
}
@media (max-width: 680px) {
  .stats {
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
  }
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
}

/* Galerie horizontale */
.gallery {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 8px max(var(--gutter), calc((100vw - var(--max)) / 2)) 24px;
  scrollbar-width: none;
}
.gallery::-webkit-scrollbar {
  display: none;
}
.g-card {
  position: relative;
  flex: 0 0 auto;
  width: min(372px, 80vw);
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-lg);
  overflow: hidden;
  scroll-snap-align: center;
  color: #fff;
  box-shadow: var(--shadow);
}
.g-card:hover {
  text-decoration: none;
}
.g-card img {
  transition: transform 0.8s var(--ease);
}
.g-card:hover img {
  transform: scale(1.05);
}
.g-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
  padding: 28px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.1) 55%, transparent 100%);
}
.g-family {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.8;
}
.g-overlay h3 {
  font-size: 28px;
}
.g-overlay p {
  font-size: 15px;
  opacity: 0.9;
}

/* Débouchés */
.outcomes-lead {
  max-width: 640px;
  margin: 14px auto 0;
}
.outcomes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 48px 0 40px;
}
.outcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 28px 12px;
  border-radius: var(--radius);
  background: var(--bg-alt);
  font-size: 15px;
  font-weight: 600;
}
.o-ic {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #fff;
  color: var(--accent);
  box-shadow: var(--shadow);
}
@media (max-width: 680px) {
  .outcomes {
    grid-template-columns: 1fr 1fr;
  }
}

/* Mission */
.mission-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}
.mission-lead {
  margin: 20px 0 24px;
}
.mission-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.mission-photos img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius);
}
.mission-photos img:last-child {
  transform: translateY(40px);
}
@media (max-width: 833px) {
  .mission-grid {
    grid-template-columns: 1fr;
  }
  .mission-photos img:last-child {
    transform: none;
  }
}

/* Agenda */
.agenda {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.agenda li + li {
  border-top: 1px solid var(--hairline);
}
.agenda-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 22px;
  color: inherit;
}
.agenda-item:hover {
  text-decoration: none;
  background: #fbfbfd;
}
.cal {
  flex: 0 0 56px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: inset 0 0 0 1px var(--hairline);
}
.cal-m {
  background: var(--accent);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2px 0;
}
.cal-d {
  flex: 1;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
}
.agenda-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}
.chev {
  font-size: 24px;
  color: var(--text-tertiary);
}

/* Témoignage */
.quote {
  margin: 0;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 56px;
  align-items: center;
}
.quote img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}
.quote blockquote {
  margin: 0;
}
.quote p {
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.quote figcaption {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
@media (max-width: 760px) {
  .quote {
    grid-template-columns: 1fr;
    gap: 28px;
    text-align: center;
  }
  .quote img {
    width: 180px;
    margin: 0 auto;
  }
}

.cta-final {
  text-align: center;
  background: var(--bg-alt);
  border-radius: var(--radius-lg);
  padding: 80px 24px;
}
.cta-final .lead {
  margin: 16px auto 28px;
  max-width: 640px;
}
</style>
