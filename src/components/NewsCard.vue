<script setup>
import { formatDate } from '../lib/news'
import images from '../data/images'
defineProps({ article: { type: Object, required: true }, large: Boolean })
</script>

<template>
  <RouterLink :to="`/actualites/${article.slug}`" class="card news-card" :class="{ large }">
    <div class="media">
      <img :src="article.image || images.classroom" :alt="''" loading="lazy" class="img-cover" />
    </div>
    <div class="body">
      <span class="chip" :data-cat="article.category">{{ article.category }}</span>
      <h3>{{ article.title }}</h3>
      <p class="summary">{{ article.summary }}</p>
      <time class="date" :datetime="article.dateISO">{{ formatDate(article.date) }}</time>
    </div>
  </RouterLink>
</template>

<style scoped>
.news-card {
  display: flex !important;
  flex-direction: column;
  height: 100%;
}
.media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-alt);
}
.media img {
  transition: transform 0.8s var(--ease);
}
.news-card:hover .media img {
  transform: scale(1.04);
}
.body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px 24px 26px;
  flex: 1;
}
.chip {
  align-self: flex-start;
}
h3 {
  font-size: 21px;
  line-height: 1.2;
}
.summary {
  font-size: 15px;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.date {
  margin-top: auto;
  font-size: 13px;
  color: var(--text-tertiary);
}
.large {
  display: grid !important;
  grid-template-columns: 1.3fr 1fr;
}
.large .media {
  aspect-ratio: auto;
  min-height: 340px;
}
.large .body {
  justify-content: center;
  padding: 40px;
}
.large h3 {
  font-size: clamp(26px, 3vw, 34px);
}
.large .summary {
  font-size: 17px;
  -webkit-line-clamp: 4;
}
.large .date {
  margin-top: 8px;
}
@media (max-width: 760px) {
  .large {
    display: flex !important;
  }
  .large .media {
    min-height: 0;
    aspect-ratio: 16 / 10;
  }
  .large .body {
    padding: 22px 24px 26px;
  }
}
</style>
