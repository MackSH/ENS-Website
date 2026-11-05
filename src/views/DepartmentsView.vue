<script setup>
import { ref, computed } from 'vue'
import departments, { families } from '../data/departments'
import images from '../data/images'
import PageHero from '../components/PageHero.vue'
import AppIcon from '../components/AppIcon.vue'

const active = ref('Toutes')
const filters = ['Toutes', ...families]
const list = computed(() => (active.value === 'Toutes' ? departments : departments.filter((d) => d.family === active.value)))
</script>

<template>
  <PageHero
    eyebrow="Les 7 entités"
    title="Choisissez votre domaine."
    lead="Sciences exactes, sciences humaines, lettres et langues : sept entités qui forment des professionnels, avec des débouchés bien au-delà de l'enseignement."
  />

  <section class="section-sm filters-wrap">
    <div class="container">
      <div class="segmented" role="tablist" aria-label="Filtrer par domaine">
        <button
          v-for="f in filters"
          :key="f"
          role="tab"
          :aria-selected="active === f"
          :class="{ on: active === f }"
          @click="active = f"
        >
          {{ f }}
        </button>
      </div>
    </div>
  </section>

  <section class="section list-section">
    <div class="container">
      <TransitionGroup name="fade" tag="div" class="grid grid-2">
        <RouterLink v-for="d in list" :key="d.slug" :to="`/entites/${d.slug}`" class="card dept">
          <div class="dept-img">
            <img :src="images[d.image]" alt="" loading="lazy" class="img-cover" />
          </div>
          <div class="dept-body">
            <span class="family"><AppIcon :name="d.icon" :size="16" /> {{ d.family }}</span>
            <h2 class="headline-sm">{{ d.name }}</h2>
            <p class="muted">{{ d.short }}</p>
            <ul class="mini-careers">
              <li v-for="c in d.careers.slice(0, 3)" :key="c.title"><AppIcon name="arrow-right" :size="14" /> {{ c.title }}</li>
            </ul>
            <span class="link-arrow">Formation et débouchés</span>
          </div>
        </RouterLink>
      </TransitionGroup>
    </div>
  </section>

  <section class="section bg-alt">
    <div class="container center">
      <h2 class="headline-md" v-reveal>Pas sûr de votre choix ?</h2>
      <p class="lead common" v-reveal="60">
        Comparez les métiers auxquels prépare chaque entité, puis découvrez comment se déroulent les 4 années de
        formation : une année préparatoire et trois années de licence.
      </p>
      <div class="cta-row" v-reveal="120">
        <RouterLink to="/debouches" class="btn">Explorer les débouchés</RouterLink>
        <RouterLink to="/admission#parcours" class="link-arrow">Voir le parcours de formation</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filters-wrap {
  padding-top: 0;
  padding-bottom: 0;
}
.segmented {
  display: flex;
  gap: 4px;
  padding: 4px;
  margin: 0 auto;
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;
  background: var(--bg-alt);
  border-radius: 980px;
}
.segmented button {
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  padding: 8px 18px;
  border-radius: 980px;
  font-size: 14px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: background 0.2s, color 0.2s;
}
.segmented button.on {
  background: #fff;
  color: var(--text);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}
.list-section {
  padding-top: 48px;
}
.dept {
  display: grid !important;
  grid-template-columns: 200px 1fr;
}
.dept-img {
  min-height: 240px;
}
.dept-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.family {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--accent);
  font-weight: 600;
}
.mini-careers {
  list-style: none;
  margin: 4px 0 8px;
  padding: 0;
  font-size: 14px;
  color: var(--text);
}
.mini-careers li {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 0;
}
.mini-careers :deep(.icon) {
  color: var(--text-tertiary);
}
.dept-body .link-arrow {
  margin-top: auto;
  font-size: 15px;
}
@media (max-width: 520px) {
  .dept {
    grid-template-columns: 1fr;
  }
  .dept-img {
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
}
.common {
  max-width: 720px;
  margin: 16px auto 28px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s var(--ease);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
.fade-leave-active {
  position: absolute;
  visibility: hidden;
}
</style>
