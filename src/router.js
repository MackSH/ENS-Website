import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/ecole', name: 'ecole', component: () => import('./views/AboutView.vue'), meta: { title: "L'École" } },
  { path: '/entites', name: 'entites', component: () => import('./views/DepartmentsView.vue'), meta: { title: 'Entités' } },
  { path: '/entites/:slug', name: 'entite', component: () => import('./views/DepartmentDetailView.vue'), props: true },
  { path: '/debouches', name: 'debouches', component: () => import('./views/CareersView.vue'), meta: { title: 'Débouchés' } },
  { path: '/admission', name: 'admission', component: () => import('./views/HowItWorksView.vue'), meta: { title: 'Admission & formation' } },
  // Anciennes adresses
  { path: '/departements', redirect: '/entites' },
  { path: '/departements/:slug', redirect: (to) => `/entites/${to.params.slug}` },
  { path: '/fonctionnement', redirect: (to) => ({ path: '/admission', hash: to.hash }) },
  { path: '/actualites', name: 'actualites', component: () => import('./views/NewsView.vue'), meta: { title: 'Actualités' } },
  { path: '/actualites/:slug', name: 'actualite', component: () => import('./views/NewsDetailView.vue'), props: true },
  { path: '/publier', name: 'publier', component: () => import('./views/PublishView.vue'), meta: { title: 'Publier une information' } },
  { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('./views/NotFoundView.vue'), meta: { title: 'Page introuvable' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    const samePage = to.path === from.path
    // Recherche / filtres : on ne bouge pas la page.
    if (samePage && to.hash === from.hash) return false
    if (to.hash) {
      // Laisse le temps à la transition de page de se terminer.
      const wait = samePage ? 0 : 320
      return new Promise((resolve) =>
        setTimeout(() => resolve({ el: to.hash, top: 64, behavior: samePage ? 'smooth' : 'auto' }), wait),
      )
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'ENS — Université d’État d’Haïti'
  if (to.meta.title) document.title = `${to.meta.title} · ${base}`
  else if (to.name === 'home') document.title = base
})

export default router
