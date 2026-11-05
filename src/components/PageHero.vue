<script setup>
defineProps({ eyebrow: String, title: String, lead: String, image: String, dark: Boolean })
</script>

<template>
  <section class="page-hero" :class="{ dark, 'with-image': image }">
    <div class="container center">
      <p v-if="eyebrow" class="eyebrow accent" v-reveal>{{ eyebrow }}</p>
      <h1 class="headline-xl" v-reveal="80">{{ title }}</h1>
      <p v-if="lead" class="lead" v-reveal="160">{{ lead }}</p>
      <div class="actions" v-reveal="220"><slot /></div>
    </div>
    <div v-if="image" class="container-wide" v-reveal="250">
      <div class="hero-img">
        <img :src="image" alt="" class="img-cover" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding: 80px 0 72px;
  overflow: hidden;
}
.page-hero.dark {
  background: #000;
  color: var(--text-on-dark);
}
.page-hero.dark .lead {
  color: #a1a1a6;
}
.lead {
  max-width: 720px;
  margin: 18px auto 0;
}
.actions:empty {
  display: none;
}
.actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}
.hero-img {
  margin-top: 56px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 21 / 9;
}
@media (max-width: 680px) {
  .page-hero {
    padding: 56px 0;
  }
  .hero-img {
    aspect-ratio: 4 / 3;
    margin-top: 36px;
  }
}
</style>
