<script setup>
import { computed, watchEffect } from 'vue'
import departments, { findDepartment } from '../data/departments'
import images from '../data/images'
import NotFound from './NotFoundView.vue'

const props = defineProps({ slug: String })
const d = computed(() => findDepartment(props.slug))
const others = computed(() => departments.filter((x) => x.slug !== props.slug && x.family === d.value?.family).slice(0, 3))

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
        <RouterLink to="/departements" class="back">‹ Départements</RouterLink>
        <p class="eyebrow on-dark">{{ d.icon }} {{ d.family }}</p>
        <h1 class="headline-xl">{{ d.name }}</h1>
        <p class="lead">{{ d.short }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <p class="intro" v-reveal>{{ d.description }}</p>
      </div>
    </section>

    <section class="section bg-alt">
      <div class="container grid grid-2">
        <div class="card box" v-reveal>
          <h2 class="headline-sm">Ce que vous étudierez</h2>
          <ul class="checks">
            <li v-for="c in d.courses" :key="c">{{ c }}</li>
          </ul>
        </div>
        <div class="card box" v-reveal="80">
          <h2 class="headline-sm">Après le diplôme</h2>
          <ul class="checks">
            <li v-for="c in d.careers" :key="c">{{ c }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="facts" v-reveal>
          <div><strong>4 ans</strong><span>Durée de la licence</span></div>
          <div><strong>Concours</strong><span>Mode d'admission</span></div>
          <div><strong>Mémoire</strong><span>+ stage en lycée</span></div>
        </div>
        <div class="cta-row actions" v-reveal="80">
          <RouterLink to="/fonctionnement#admission" class="btn">Comment postuler</RouterLink>
          <RouterLink to="/contact" class="link-arrow">Contacter le département</RouterLink>
        </div>
      </div>
    </section>

    <section v-if="others.length" class="section bg-alt">
      <div class="container">
        <h2 class="headline-md" v-reveal>Dans le même domaine.</h2>
        <div class="grid grid-3 others">
          <RouterLink v-for="o in others" :key="o.slug" :to="`/departements/${o.slug}`" class="card other" v-reveal>
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.1));
}
.hero-text {
  position: relative;
  padding-bottom: 56px;
}
.back {
  display: inline-block;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  margin-bottom: 24px;
}
.on-dark {
  color: rgba(255, 255, 255, 0.75);
}
.hero-text .lead {
  color: rgba(255, 255, 255, 0.85);
  max-width: 640px;
  margin-top: 12px;
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
.box {
  padding: 36px 32px;
}
.checks {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
}
.checks li {
  padding: 12px 0 12px 32px;
  position: relative;
  border-top: 1px solid var(--hairline);
}
.checks li::before {
  content: '✓';
  position: absolute;
  left: 4px;
  color: var(--accent);
  font-weight: 700;
}
.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 16px;
}
.facts strong {
  display: block;
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: -0.02em;
}
.facts span {
  color: var(--text-secondary);
  font-size: 15px;
}
.actions {
  margin-top: 48px;
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
