<script setup>
import { ref, computed } from 'vue'
import departments, { families } from '../data/departments'
import images from '../data/images'
import PageHero from '../components/PageHero.vue'

const active = ref('Tous')
const filters = ['Tous', ...families]
const list = computed(() => (active.value === 'Tous' ? departments : departments.filter((d) => d.family === active.value)))
</script>

<template>
  <PageHero
    eyebrow="Départements"
    title="Une discipline. Une vocation."
    lead="Lettres, langues, sciences humaines et sciences exactes : choisissez la matière que vous voulez enseigner."
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
        <RouterLink v-for="d in list" :key="d.slug" :to="`/departements/${d.slug}`" class="card dept">
          <div class="dept-img">
            <img :src="images[d.image]" alt="" loading="lazy" class="img-cover" />
          </div>
          <div class="dept-body">
            <span class="family">{{ d.icon }} {{ d.family }}</span>
            <h2 class="headline-sm">{{ d.name }}</h2>
            <p class="muted">{{ d.short }}</p>
            <span class="link-arrow">En savoir plus</span>
          </div>
        </RouterLink>
      </TransitionGroup>
    </div>
  </section>

  <section class="section bg-alt">
    <div class="container center">
      <h2 class="headline-md" v-reveal>Un tronc commun pédagogique pour tous.</h2>
      <p class="lead common" v-reveal="60">
        Quel que soit leur département, les normaliens suivent des cours de psychopédagogie, de didactique, de
        législation scolaire et effectuent un stage en établissement.
      </p>
      <RouterLink to="/fonctionnement#parcours" class="link-arrow" v-reveal="120">Voir le parcours de formation</RouterLink>
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
  min-height: 220px;
}
.dept-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.family {
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 600;
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
  margin: 16px auto 24px;
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
