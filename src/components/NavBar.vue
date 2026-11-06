<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const links = [
  { to: '/ecole', label: "L'École" },
  { to: '/entites', label: 'Entités' },
  { to: '/debouches', label: 'Débouchés' },
  { to: '/admission', label: 'Admission' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
watch(open, (v) => document.body.style.setProperty('overflow', v ? 'hidden' : ''))

const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ open, scrolled }">
    <nav class="nav-inner" aria-label="Navigation principale">
      <RouterLink to="/" class="brand" aria-label="Accueil — École Normale Supérieure">
        <span class="logo">ENS</span>
        <span class="brand-text">École Normale Supérieure</span>
      </RouterLink>

      <ul class="links">
        <li v-for="l in links" :key="l.to">
          <RouterLink :to="l.to">{{ l.label }}</RouterLink>
        </li>
      </ul>

      <RouterLink to="/actualites" class="icon-btn search" aria-label="Rechercher une information">
        <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path fill="currentColor" d="M14.7 13.3l-3.6-3.6A6 6 0 1 0 9.7 11l3.6 3.6a1 1 0 0 0 1.4-1.4zM2 6a4 4 0 1 1 4 4 4 4 0 0 1-4-4z"/></svg>
      </RouterLink>

      <button class="icon-btn burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span></span><span></span>
      </button>
    </nav>

    <Transition name="drop">
      <div v-if="open" class="mobile">
        <ul>
          <li v-for="(l, i) in links" :key="l.to" :style="{ transitionDelay: i * 30 + 'ms' }">
            <RouterLink :to="l.to">{{ l.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
  <div class="nav-spacer"></div>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: var(--nav-h);
  background: rgba(250, 250, 252, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  transition: background 0.3s, box-shadow 0.3s;
}
.nav.scrolled {
  box-shadow: 0 1px 0 var(--hairline);
}
.nav.open {
  background: #fafafc;
  height: 100dvh;
}
.nav-spacer {
  height: var(--nav-h);
}
.nav-inner {
  max-width: calc(var(--max) + var(--gutter) * 2);
  height: var(--nav-h);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: flex;
  align-items: center;
  gap: 8px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  margin-right: auto;
}
.brand:hover {
  text-decoration: none;
}
.logo {
  display: grid;
  place-items: center;
  width: 30px;
  height: 22px;
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.brand-text {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4px;
}
.links a {
  display: block;
  padding: 0 12px;
  font-size: 12px;
  line-height: var(--nav-h);
  color: rgba(0, 0, 0, 0.8);
  transition: color 0.2s;
}
.links a:hover,
.links a.router-link-active {
  color: #000;
  text-decoration: none;
}
.links a.router-link-active {
  font-weight: 600;
}
.icon-btn {
  display: grid;
  place-items: center;
  width: 36px;
  height: var(--nav-h);
  background: none;
  border: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}
.burger {
  display: none;
  position: relative;
}
.burger span {
  position: absolute;
  left: 10px;
  width: 17px;
  height: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transition: transform 0.3s var(--ease);
}
.burger span:first-child {
  transform: translateY(-3.5px);
}
.burger span:last-child {
  transform: translateY(3.5px);
}
.open .burger span:first-child {
  transform: rotate(45deg);
}
.open .burger span:last-child {
  transform: rotate(-45deg);
}
.mobile {
  padding: 16px 44px;
}
.mobile ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mobile a {
  display: block;
  padding: 8px 0;
  font-size: 28px;
  font-weight: 600;
  color: var(--text);
}
.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.3s, transform 0.3s var(--ease);
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
@media (max-width: 833px) {
  .links {
    display: none;
  }
  .burger {
    display: grid;
  }
}
@media (max-width: 380px) {
  .brand-text {
    display: none;
  }
}
</style>
