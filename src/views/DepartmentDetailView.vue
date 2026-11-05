<script setup>
import { computed, watchEffect } from 'vue'
import departments, { findDepartment } from '../data/departments'
import images from '../data/images'
import site from '../data/site'
import AppIcon from '../components/AppIcon.vue'
import ExamCard from '../components/ExamCard.vue'
import NotFound from './NotFoundView.vue'

const props = defineProps({ slug: String })
const d = computed(() => findDepartment(props.slug))
const others = computed(() => departments.filter((x) => x.slug !== props.slug).slice(0, 3))

watchEffect(() => {
  if (d.value) document.title = `${d.value.name} · ENS — Université d’État d’Haïti`
})
</script>

<template>
  <NotFound v-if="!d" />
  <template v-else>
    <section class="dept-hero">
      <img :src="images[d.image]" alt="" class="img-cover bg" />
      <div class="shade"></div>
      <div class="container hero-text">
        <RouterLink to="/entites" class="back">‹ Les entités</RouterLink>
        <p class="eyebrow on-dark"><AppIcon :name="d.icon" :size="18" /> {{ d.family }}</p>
        <h1 class="headline-xl">{{ d.name }}</h1>
        <p class="lead">{{ d.short }}</p>
        <nav class="anchors" aria-label="Sur cette page">
          <a href="#debouches">Débouchés</a>
          <a href="#formation">Formation</a>
          <a href="#admission">Admission</a>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <p class="intro" v-reveal>{{ d.description }}</p>
      </div>
    </section>

    <!-- DÉBOUCHÉS (mis en avant) -->
    <section id="debouches" class="section bg-alt">
      <div class="container">
        <p class="eyebrow accent center" v-reveal>Débouchés</p>
        <h2 class="headline-lg center" v-reveal="60">Que devenir après la licence ?</h2>
        <p class="lead center sub" v-reveal="100">
          Avec une licence en {{ d.name }}, voici les métiers et secteurs qui s'ouvrent à vous.
        </p>
        <div class="grid grid-3 careers">
          <div v-for="(c, i) in d.careers" :key="c.title" class="card career" v-reveal="(i % 3) * 70">
            <span class="ic"><AppIcon :name="c.icon" :size="24" /></span>
            <h3>{{ c.title }}</h3>
            <p class="muted">{{ c.text }}</p>
          </div>
        </div>
        <div class="sectors" v-reveal>
          <span class="sectors-label">Secteurs qui recrutent :</span>
          <span v-for="s in d.sectors" :key="s" class="tag">{{ s }}</span>
        </div>
      </div>
    </section>

    <!-- FORMATION -->
    <section id="formation" class="section">
      <div class="container grid grid-2 formation">
        <div v-reveal>
          <h2 class="headline-md">Ce que vous étudierez</h2>
          <ul class="checks">
            <li v-for="c in d.courses" :key="c"><AppIcon name="check" :size="18" :stroke="2.5" /> {{ c }}</li>
          </ul>
        </div>
        <div v-reveal="80">
          <h2 class="headline-md">Les compétences acquises</h2>
          <ul class="checks">
            <li v-for="c in d.skills" :key="c"><AppIcon name="check" :size="18" :stroke="2.5" /> {{ c }}</li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="program" v-reveal>
          <div v-for="p in site.program" :key="p.code" class="step">
            <strong>{{ p.code }}</strong>
            <span>{{ p.title }}</span>
          </div>
        </div>
        <p class="center small muted">4 ans : une année préparatoire, puis trois années de licence (L1, L2, L3).</p>
      </div>
    </section>

    <!-- ADMISSION -->
    <section id="admission" class="section bg-dark">
      <div class="container center">
        <h2 class="headline-lg" v-reveal>Rejoindre l'entité {{ d.name }}.</h2>
        <p class="lead adm" v-reveal="60">
          L'admission se fait sur concours. Pour l'entité {{ d.name }}, {{ site.admission.admitted }} candidats sont admis et
          {{ site.admission.waitlist }} sont placés sur liste d'attente.
        </p>
        <div class="exam-wrap" v-reveal="100">
          <p class="exam-title">Épreuves du concours</p>
          <ExamCard :department="d" dark :link="false" />
        </div>
        <div class="cta-row" v-reveal="120">
          <a :href="site.admission.url" target="_blank" rel="noopener" class="btn">
            S'inscrire au concours <AppIcon name="external" :size="16" />
          </a>
          <RouterLink to="/admission" class="link-arrow">Tout sur l'admission</RouterLink>
        </div>
      </div>
    </section>

    <section class="section bg-alt">
      <div class="container">
        <h2 class="headline-md" v-reveal>Les autres entités.</h2>
        <div class="grid grid-3 others">
          <RouterLink v-for="o in others" :key="o.slug" :to="`/entites/${o.slug}`" class="card other" v-reveal>
            <img :src="images[o.image]" alt="" loading="lazy" />
            <div>
              <h3>{{ o.name }}</h3>
              <span class="link-arrow">Découvrir</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
.dept-hero {
  position: relative;
  min-height: min(72vh, 640px);
  display: flex;
  align-items: flex-end;
  color: #fff;
  overflow: hidden;
}
.bg {
  position: absolute;
  inset: 0;
}
.shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.1));
}
.hero-text {
  position: relative;
  padding-bottom: 48px;
}
.back {
  display: table;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  margin-bottom: 24px;
}
.on-dark {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
}
.hero-text .lead {
  color: rgba(255, 255, 255, 0.88);
  max-width: 640px;
  margin-top: 12px;
}
.anchors {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}
.anchors a {
  color: #fff;
  font-size: 14px;
  padding: 7px 16px;
  border-radius: 980px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.anchors a:hover {
  background: rgba(255, 255, 255, 0.28);
  text-decoration: none;
}
.narrow {
  max-width: 820px;
}
.intro {
  font-size: clamp(21px, 2.6vw, 28px);
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: -0.015em;
}
.sub {
  max-width: 680px;
  margin: 12px auto 0;
}
.careers {
  margin-top: 48px;
}
.career {
  padding: 30px 26px;
}
.ic {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #e8f0fe;
  color: var(--accent);
  margin-bottom: 16px;
}
.career h3 {
  font-size: 19px;
  margin-bottom: 6px;
}
.career p {
  font-size: 15px;
}
.sectors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 36px;
}
.sectors-label {
  font-size: 14px;
  font-weight: 600;
  margin-right: 4px;
}
.tag {
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 980px;
  background: #fff;
  color: var(--text-secondary);
}
.formation {
  gap: 48px;
}
.checks {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
}
.checks li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid var(--hairline);
}
.checks :deep(.icon) {
  color: var(--accent);
}
.program {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 56px 0 14px;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 18px 8px;
  border-radius: var(--radius-sm);
  background: var(--bg-alt);
  text-align: center;
}
.step:first-child {
  background: var(--text);
  color: #fff;
}
.step strong {
  font-size: 22px;
}
.step span {
  font-size: 13px;
  opacity: 0.75;
}
.adm {
  max-width: 680px;
  margin: 16px auto 28px;
}
.exam-wrap {
  max-width: 440px;
  margin: 0 auto 36px;
  text-align: left;
}
.exam-title {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #a1a1a6;
  margin-bottom: 12px;
}
.others {
  margin-top: 32px;
}
.other img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}
.other div {
  padding: 20px 22px 24px;
}
.other h3 {
  font-size: 21px;
  margin-bottom: 6px;
}
.other .link-arrow {
  font-size: 15px;
}
</style>
