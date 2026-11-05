<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles, CATEGORIES, upcomingEvents, formatDate } from '../lib/news'
import NewsCard from '../components/NewsCard.vue'

const route = useRoute()
const router = useRouter()

const q = ref(route.query.q?.toString() ?? '')
const cat = ref(route.query.categorie?.toString() ?? 'Toutes')

watch(
  () => route.query,
  (query) => {
    q.value = query.q?.toString() ?? ''
    cat.value = query.categorie?.toString() ?? 'Toutes'
  },
)
watch([q, cat], () => {
  const query = {}
  if (q.value) query.q = q.value
  if (cat.value !== 'Toutes') query.categorie = cat.value
  router.replace({ query, hash: route.hash })
})

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const filtered = computed(() => {
  const terms = norm(q.value).split(/\s+/).filter(Boolean)
  return articles.filter((a) => {
    if (cat.value !== 'Toutes' && a.category !== cat.value) return false
    if (!terms.length) return true
    const hay = norm(`${a.title} ${a.summary} ${a.text} ${a.category}`)
    return terms.every((t) => hay.includes(t))
  })
})

const isDefault = computed(() => !q.value && cat.value === 'Toutes')
const featured = computed(() => (isDefault.value ? articles.find((a) => a.pinned) ?? articles[0] : null))
const rest = computed(() => filtered.value.filter((a) => a !== featured.value))
const events = computed(() => upcomingEvents())
const usedCategories = computed(() => CATEGORIES.filter((c) => articles.some((a) => a.category === c)))
</script>

<template>
  <section class="news-hero">
    <div class="container center">
      <p class="eyebrow accent" v-reveal>Actualités</p>
      <h1 class="headline-xl" v-reveal="60">Restez informé.</h1>
      <p class="lead" v-reveal="120">Annonces officielles, admissions, résultats et événements de l'École.</p>

      <form class="search" role="search" @submit.prevent v-reveal="180">
        <svg width="18" height="18" viewBox="0 0 15 15" aria-hidden="true"><path fill="currentColor" d="M14.7 13.3l-3.6-3.6A6 6 0 1 0 9.7 11l3.6 3.6a1 1 0 0 0 1.4-1.4zM2 6a4 4 0 1 1 4 4 4 4 0 0 1-4-4z"/></svg>
        <label for="q" class="sr-only">Rechercher</label>
        <input id="q" v-model="q" type="search" placeholder="Rechercher : concours, résultats, rentrée…" autocomplete="off" />
      </form>

      <div class="cats" v-reveal="220">
        <button :class="{ on: cat === 'Toutes' }" @click="cat = 'Toutes'">Toutes</button>
        <button v-for="c in usedCategories" :key="c" :class="{ on: cat === c }" @click="cat = c">{{ c }}</button>
      </div>
    </div>
  </section>

  <section class="section list">
    <div class="container">
      <div v-if="featured" class="featured" v-reveal>
        <NewsCard :article="featured" large />
      </div>

      <p v-if="!isDefault" class="count muted">
        {{ filtered.length }} résultat{{ filtered.length > 1 ? 's' : '' }}
        <template v-if="cat !== 'Toutes'"> dans « {{ cat }} »</template>
        <template v-if="q"> pour « {{ q }} »</template>
        · <button class="reset" @click="(q = ''), (cat = 'Toutes')">Réinitialiser</button>
      </p>

      <div v-if="rest.length" class="grid grid-3">
        <NewsCard v-for="a in rest" :key="a.slug" :article="a" />
      </div>
      <div v-else-if="!featured" class="empty">
        <p class="headline-sm">Aucun résultat.</p>
        <p class="muted">Essayez un autre mot-clé ou une autre catégorie.</p>
      </div>
    </div>
  </section>

  <section id="agenda" class="section bg-alt">
    <div class="container">
      <h2 class="headline-lg" v-reveal>Agenda.</h2>
      <p class="lead agenda-lead" v-reveal="60">Les prochains rendez-vous à ne pas manquer.</p>
      <div v-if="events.length" class="grid grid-3">
        <RouterLink v-for="e in events" :key="e.slug" :to="`/actualites/${e.slug}`" class="card event" v-reveal>
          <span class="event-date">{{ formatDate(e.eventDate) }}</span>
          <h3>{{ e.title }}</h3>
          <span v-if="e.location" class="muted small">📍 {{ e.location }}</span>
        </RouterLink>
      </div>
      <p v-else class="muted">Aucun événement à venir pour le moment.</p>
    </div>
  </section>

  <section class="section-sm">
    <div class="container center">
      <p class="muted small">
        Vous faites partie de l'administration de l'ENS ?
        <RouterLink to="/publier">Publier une information</RouterLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
.news-hero {
  padding: 80px 0 24px;
}
.lead {
  margin-top: 14px;
}
.search {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 560px;
  margin: 36px auto 0;
  padding: 0 18px;
  height: 56px;
  border-radius: 16px;
  background: var(--bg-alt);
  color: var(--text-secondary);
  transition: box-shadow 0.2s, background 0.2s;
}
.search:focus-within {
  background: #fff;
  box-shadow: 0 0 0 1px var(--border), 0 8px 30px rgba(0, 0, 0, 0.08);
}
.search input {
  flex: 1;
  border: 0;
  background: transparent;
  font-size: 18px;
  outline: none;
  color: var(--text);
  min-width: 0;
}
.cats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
.cats button {
  border: 0;
  background: var(--bg-alt);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 980px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.cats button:hover {
  background: #e8e8ed;
}
.cats button.on {
  background: var(--text);
  color: #fff;
}
.list {
  padding-top: 48px;
}
.featured {
  margin-bottom: 20px;
}
.count {
  margin-bottom: 24px;
  font-size: 15px;
}
.reset {
  border: 0;
  background: none;
  color: var(--link);
  cursor: pointer;
  padding: 0;
  font-size: 15px;
}
.empty {
  text-align: center;
  padding: 48px 0;
}
.agenda-lead {
  margin: 8px 0 36px;
}
.event {
  padding: 28px 26px;
  display: flex !important;
  flex-direction: column;
  gap: 8px;
}
.event-date {
  font-size: 14px;
  font-weight: 600;
  color: var(--haiti-red);
}
.event h3 {
  font-size: 20px;
  line-height: 1.25;
}
</style>
