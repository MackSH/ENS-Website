<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { articles, findArticle, formatDate } from '../lib/news'
import NewsCard from '../components/NewsCard.vue'
import NotFound from './NotFoundView.vue'

const props = defineProps({ slug: String })
const router = useRouter()
const a = computed(() => findArticle(props.slug))
const related = computed(() => articles.filter((x) => x.slug !== props.slug).slice(0, 3))
const copied = ref(false)

watchEffect(() => {
  if (a.value) document.title = `${a.value.title} · ENS`
})

// Les liens internes du Markdown (ex. /fonctionnement) passent par le routeur.
function onClick(e) {
  const link = e.target.closest('a')
  const href = link?.getAttribute('href')
  if (href && href.startsWith('/') && !href.startsWith('//')) {
    e.preventDefault()
    router.push(href)
  }
}

async function share() {
  const url = location.href
  if (navigator.share) {
    try {
      await navigator.share({ title: a.value.title, url })
    } catch {
      /* annulé */
    }
    return
  }
  try {
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    /* presse-papiers indisponible */
  }
}
</script>

<template>
  <NotFound v-if="!a" />
  <article v-else>
    <header class="container art-head">
      <RouterLink to="/actualites" class="back">‹ Actualités</RouterLink>
      <span class="chip" :data-cat="a.category">{{ a.category }}</span>
      <h1 class="headline-lg">{{ a.title }}</h1>
      <p class="lead">{{ a.summary }}</p>
      <div class="meta">
        <time :datetime="a.dateISO">Publié le {{ formatDate(a.date) }}</time>
        <button class="btn btn-sm btn-secondary" @click="share">{{ copied ? 'Lien copié ✓' : 'Partager' }}</button>
      </div>
    </header>

    <div v-if="a.image" class="container-wide">
      <div class="art-img"><img :src="a.image" alt="" class="img-cover" /></div>
    </div>

    <div class="container body-wrap">
      <aside v-if="a.eventDate" class="event-box">
        <strong>📅 {{ formatDate(a.eventDate) }}</strong>
        <span v-if="a.location">📍 {{ a.location }}</span>
      </aside>
      <!-- Contenu issu des fichiers Markdown du dépôt (source de confiance). -->
      <div class="prose" @click="onClick" v-html="a.html"></div>
    </div>

    <section class="section bg-alt related">
      <div class="container">
        <h2 class="headline-md">À lire aussi.</h2>
        <div class="grid grid-3 rel-grid">
          <NewsCard v-for="r in related" :key="r.slug" :article="r" />
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.art-head {
  max-width: 820px;
  padding-top: 56px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.back {
  font-size: 14px;
}
.meta {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  color: var(--text-secondary);
  font-size: 15px;
  padding-top: 16px;
  border-top: 1px solid var(--hairline);
  width: 100%;
  justify-content: space-between;
}
.art-img {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 2 / 1;
}
@media (max-width: 680px) {
  .art-img {
    aspect-ratio: 4 / 3;
  }
}
.body-wrap {
  max-width: 820px;
  padding-top: 48px;
  padding-bottom: 96px;
}
.event-box {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  padding: 18px 22px;
  border-radius: var(--radius-sm);
  background: var(--bg-alt);
  margin-bottom: 32px;
}
.rel-grid {
  margin-top: 32px;
}
</style>
