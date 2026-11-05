<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a href="#contenu" class="skip">Aller au contenu</a>
  <NavBar />
  <main id="contenu">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <SiteFooter />
</template>

<style>
main {
  min-height: 60vh;
}
.skip {
  position: absolute;
  left: -9999px;
  top: 8px;
  z-index: 10000;
  background: #fff;
  padding: 8px 16px;
  border-radius: 8px;
}
.skip:focus {
  left: 8px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
