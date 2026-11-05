<script setup>
import site from '../data/site'
import images from '../data/images'
import PageHero from '../components/PageHero.vue'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <PageHero
    eyebrow="L'École"
    title="Des professionnels pour Haïti."
    :lead="`Depuis ${site.founded}, l'École Normale Supérieure de l'${site.university} forme des professionnels dans sept disciplines, en sciences comme en lettres.`"
    :image="images.graduation"
  />

  <!-- Présentation -->
  <section class="section">
    <div class="container two-col">
      <div v-reveal>
        <h2 class="headline-lg">Une grande école, au cœur de l'Université.</h2>
      </div>
      <div class="text" v-reveal="100">
        <p>
          L'École Normale Supérieure (ENS) est l'une des entités de l'{{ site.university }} (UEH). Elle regroupe sept
          entités de formation : Mathématiques, Physique, Chimie / Sciences naturelles, Sciences sociales, Philosophie,
          Lettres modernes et Langues vivantes.
        </p>
        <p>
          La formation dure quatre ans : une année préparatoire pour consolider les notions apprises au secondaire, puis
          trois années de licence (L1, L2, L3). L'admission se fait sur concours, et seuls {{ site.admission.admitted }}
          candidats sont retenus par entité à chaque concours.
        </p>
        <p>
          L'ENS forme des professionnels de chaque discipline. Ses diplômés travaillent dans l'administration publique,
          les ONG, les organisations internationales, les entreprises, les médias, la recherche ou l'enseignement.
        </p>
        <RouterLink to="/debouches" class="link-arrow">Voir les débouchés</RouterLink>
      </div>
    </div>
  </section>

  <!-- Valeurs -->
  <section id="valeurs" class="section bg-alt">
    <div class="container">
      <h2 class="headline-lg center" v-reveal>Ce qui nous guide.</h2>
      <div class="grid grid-4 values">
        <div v-for="(v, i) in site.values" :key="v.title" class="card value" v-reveal="i * 80">
          <span class="v-icon"><AppIcon :name="v.icon" :size="28" /></span>
          <h3 class="headline-sm">{{ v.title }}</h3>
          <p class="muted">{{ v.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Histoire -->
  <section id="histoire" class="section bg-dark">
    <div class="container">
      <p class="eyebrow center on-dark" v-reveal>Histoire</p>
      <h2 class="headline-lg center" v-reveal="60">Plus de 75 ans d'histoire.</h2>
      <ol class="timeline">
        <li v-for="(h, i) in site.history" :key="h.year" v-reveal="i * 60">
          <span class="year">{{ h.year }}</span>
          <div>
            <h3>{{ h.title }}</h3>
            <p>{{ h.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- Photo pleine largeur -->
  <section class="section-sm">
    <div class="container-wide">
      <div class="wide-photo" v-reveal>
        <img :src="images.handsTogether" alt="Des mains réunies en signe de solidarité" class="img-cover" loading="lazy" />
        <p class="wide-caption">Une communauté de plus de 250 étudiants, enseignants et personnels.</p>
      </div>
    </div>
  </section>

  <!-- Direction -->
  <section id="direction" class="section">
    <div class="container">
      <h2 class="headline-lg center" v-reveal>La direction.</h2>
      <p class="lead center lead-narrow" v-reveal="60">L'équipe qui conduit l'École au quotidien.</p>
      <div class="grid grid-4 people">
        <div v-for="(p, i) in site.leadership" :key="p.role" class="person" v-reveal="i * 80">
          <img :src="images[p.photo]" :alt="`Portrait — ${p.role}`" loading="lazy" />
          <strong>{{ p.name }}</strong>
          <span class="muted small">{{ p.role }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Gouvernance -->
  <section class="section bg-alt">
    <div class="container">
      <h2 class="headline-lg center" v-reveal>Comment l'École est organisée.</h2>
      <div class="grid grid-3 gov">
        <div class="card gov-card" v-reveal>
          <h3 class="headline-sm">Le Décanat</h3>
          <p class="muted">Le Doyen et le Vice-Doyen dirigent l'École, coordonnent les sept entités et représentent l'ENS auprès du Rectorat de l'UEH.</p>
        </div>
        <div class="card gov-card" v-reveal="80">
          <h3 class="headline-sm">Le Conseil de l'École</h3>
          <p class="muted">Composé de la direction, des responsables d'entités, de représentants des professeurs et des étudiants, il délibère sur les grandes orientations.</p>
        </div>
        <div class="card gov-card" v-reveal="160">
          <h3 class="headline-sm">Les entités</h3>
          <p class="muted">Chaque entité, dirigée par un responsable, organise les cours, les examens et l'encadrement des mémoires de sa discipline.</p>
        </div>
      </div>
      <p class="center more" v-reveal>
        <RouterLink to="/entites" class="link-arrow">Découvrir les 7 entités</RouterLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
.two-col {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px;
}
.text .link-arrow {
  display: inline-flex;
  margin-top: 1em;
}
.text p + p {
  margin-top: 1em;
}
.text {
  font-size: 19px;
  color: var(--text-secondary);
}
@media (max-width: 760px) {
  .two-col {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
.values {
  margin-top: 48px;
}
.value {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.v-icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #e8f0fe;
  color: var(--accent);
}
.on-dark {
  color: #a1a1a6;
}
.timeline {
  list-style: none;
  max-width: 720px;
  margin: 56px auto 0;
  padding: 0;
  position: relative;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 110px;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: #424245;
}
.timeline li {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 36px;
  padding: 18px 0;
  position: relative;
}
.timeline li::before {
  content: '';
  position: absolute;
  left: 105px;
  top: 28px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--link-on-dark);
}
.year {
  font-size: 20px;
  font-weight: 600;
  color: var(--link-on-dark);
  padding-top: 2px;
}
.timeline h3 {
  font-size: 22px;
  margin-bottom: 4px;
}
.timeline p {
  color: #a1a1a6;
}
@media (max-width: 560px) {
  .timeline::before,
  .timeline li::before {
    display: none;
  }
  .timeline li {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
.wide-photo {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 21 / 9;
}
.wide-caption {
  position: absolute;
  left: 32px;
  bottom: 28px;
  right: 32px;
  color: #fff;
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 600;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}
@media (max-width: 680px) {
  .wide-photo {
    aspect-ratio: 4 / 3;
  }
}
.lead-narrow {
  margin-top: 12px;
}
.people {
  margin-top: 48px;
}
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
}
.person img {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 14px;
}
.gov {
  margin-top: 48px;
}
.gov-card {
  padding: 32px 28px;
}
.gov-card h3 {
  margin-bottom: 10px;
}
.more {
  margin-top: 40px;
}
</style>
