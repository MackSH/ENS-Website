<script setup>
import { ref, computed } from 'vue'
import departments from '../data/departments'
import images from '../data/images'
import PageHero from '../components/PageHero.vue'
import AppIcon from '../components/AppIcon.vue'

// Grands secteurs ouverts aux diplômés (vue d'ensemble).
const sectors = [
  { icon: 'landmark', title: 'Administration publique', text: 'Ministères, collectivités, institutions de l’État.' },
  { icon: 'heart', title: 'ONG et développement', text: 'Projets sociaux, humanitaires et environnementaux.' },
  { icon: 'globe', title: 'Organisations internationales', text: 'Coopération, diplomatie, agences internationales.' },
  { icon: 'coins', title: 'Banque, finance, entreprises', text: 'Analyse, gestion, commerce, services.' },
  { icon: 'factory', title: 'Industrie et laboratoires', text: 'Énergie, agroalimentaire, contrôle qualité.' },
  { icon: 'newspaper', title: 'Médias, édition, culture', text: 'Journalisme, communication, patrimoine.' },
  { icon: 'microscope', title: 'Recherche', text: 'Master, doctorat, carrière scientifique.' },
  { icon: 'graduation-cap', title: 'Enseignement', text: 'Secondaire, université, formation d’adultes.' },
]

const active = ref(departments[0].slug)
const current = computed(() => departments.find((d) => d.slug === active.value))
</script>

<template>
  <PageHero
    eyebrow="Débouchés"
    title="Une licence. Beaucoup de chemins."
    lead="L'ENS forme des professionnels dans chacune de ses disciplines. Enseigner est une possibilité parmi beaucoup d'autres : découvrez ce que deviennent nos diplômés pour mieux choisir votre entité."
    :image="images.graduation"
  />

  <!-- Secteurs -->
  <section class="section bg-alt">
    <div class="container">
      <h2 class="headline-lg center" v-reveal>Où travaillent nos diplômés.</h2>
      <p class="lead center sub" v-reveal="60">Les compétences acquises à l'ENS sont recherchées dans tous ces secteurs.</p>
      <div class="grid grid-4 sectors">
        <div v-for="(s, i) in sectors" :key="s.title" class="card sector" v-reveal="(i % 4) * 60">
          <span class="ic"><AppIcon :name="s.icon" :size="26" /></span>
          <h3>{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Explorateur par entité -->
  <section class="section">
    <div class="container">
      <h2 class="headline-lg center" v-reveal>Débouchés par entité.</h2>
      <p class="lead center sub" v-reveal="60">Choisissez une entité pour voir les métiers auxquels elle prépare.</p>

      <div class="picker" role="tablist" aria-label="Choisir une entité" v-reveal="100">
        <button
          v-for="d in departments"
          :key="d.slug"
          role="tab"
          :aria-selected="active === d.slug"
          :class="{ on: active === d.slug }"
          @click="active = d.slug"
        >
          <AppIcon :name="d.icon" :size="18" />
          {{ d.name }}
        </button>
      </div>

      <Transition name="swap" mode="out-in">
        <div :key="current.slug" class="explorer">
          <div class="exp-head">
            <img :src="images[current.image]" alt="" class="exp-img" />
            <div>
              <p class="eyebrow">{{ current.family }}</p>
              <h3 class="headline-md">{{ current.name }}</h3>
              <p class="muted exp-short">{{ current.short }}</p>
              <div class="tags">
                <span v-for="s in current.sectors" :key="s" class="tag">{{ s }}</span>
              </div>
            </div>
          </div>
          <div class="grid grid-3 careers">
            <div v-for="c in current.careers" :key="c.title" class="career">
              <span class="ic sm"><AppIcon :name="c.icon" :size="22" /></span>
              <h4>{{ c.title }}</h4>
              <p class="muted">{{ c.text }}</p>
            </div>
          </div>
          <RouterLink :to="`/entites/${current.slug}`" class="link-arrow">Tout savoir sur l'entité {{ current.name }}</RouterLink>
        </div>
      </Transition>
    </div>
  </section>

  <!-- Poursuite d'études -->
  <section class="section bg-dark">
    <div class="container center">
      <p class="eyebrow on-dark" v-reveal>Et après la licence ?</p>
      <h2 class="headline-lg" v-reveal="60">Travailler, ou continuer d'apprendre.</h2>
      <p class="lead narrow" v-reveal="120">
        La licence de l'ENS permet d'entrer directement dans la vie professionnelle, ou de poursuivre en master puis en
        doctorat, en Haïti comme à l'étranger.
      </p>
      <div class="grid grid-3 paths" v-reveal="160">
        <div class="path">
          <AppIcon name="briefcase" :size="32" />
          <h3>Insertion professionnelle</h3>
          <p>Secteur public, privé, ONG ou organisations internationales.</p>
        </div>
        <div class="path">
          <AppIcon name="award" :size="32" />
          <h3>Master et doctorat</h3>
          <p>Poursuite d'études et carrières de recherche.</p>
        </div>
        <div class="path">
          <AppIcon name="graduation-cap" :size="32" />
          <h3>Enseignement</h3>
          <p>Au secondaire comme à l'université.</p>
        </div>
      </div>
      <div class="cta-row cta" v-reveal>
        <RouterLink to="/admission" class="btn">Comment postuler</RouterLink>
        <RouterLink to="/entites" class="link-arrow">Voir les 7 entités</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sub {
  margin: 12px auto 0;
  max-width: 680px;
}
.sectors {
  margin-top: 48px;
}
.sector {
  padding: 28px 24px;
}
.ic {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #e8f0fe;
  color: var(--accent);
  margin-bottom: 16px;
}
.ic.sm {
  width: 44px;
  height: 44px;
  border-radius: 12px;
}
.sector h3 {
  font-size: 18px;
  margin-bottom: 6px;
}
.sector p {
  font-size: 15px;
}
.picker {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 36px 0 40px;
}
.picker button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: var(--bg-alt);
  padding: 10px 18px;
  border-radius: 980px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.picker button:hover {
  background: #e8e8ed;
}
.picker button.on {
  background: var(--text);
  color: #fff;
}
.explorer {
  background: var(--bg-alt);
  border-radius: var(--radius-lg);
  padding: 40px;
}
.exp-head {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 36px;
}
.exp-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius);
}
.exp-short {
  margin: 8px 0 16px;
  font-size: 19px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 980px;
  background: #fff;
  color: var(--text-secondary);
}
.careers {
  margin-bottom: 32px;
}
.career {
  background: #fff;
  border-radius: var(--radius);
  padding: 24px;
}
.career h4 {
  font-size: 18px;
  margin: 0 0 6px;
}
.career p {
  font-size: 15px;
}
@media (max-width: 680px) {
  .explorer {
    padding: 24px 18px;
  }
  .exp-head {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .exp-img {
    aspect-ratio: 16 / 9;
  }
}
.on-dark {
  color: #a1a1a6;
}
.narrow {
  max-width: 720px;
  margin: 16px auto 0;
}
.paths {
  margin-top: 56px;
  text-align: center;
}
.path {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--link-on-dark);
}
.path h3 {
  color: #f5f5f7;
  font-size: 21px;
}
.path p {
  color: #a1a1a6;
}
.cta {
  margin-top: 56px;
}
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.25s, transform 0.25s var(--ease);
}
.swap-enter-from,
.swap-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
