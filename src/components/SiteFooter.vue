<script setup>
import site from '../data/site'
import departments from '../data/departments'
const year = new Date().getFullYear()

const columns = [
  {
    title: "L'École",
    links: [
      { to: '/ecole', label: 'Présentation' },
      { to: '/ecole#histoire', label: 'Histoire' },
      { to: '/ecole#direction', label: 'Direction' },
      { to: '/ecole#valeurs', label: 'Mission et valeurs' },
    ],
  },
  {
    title: 'Départements',
    links: departments.slice(0, 6).map((d) => ({ to: `/departements/${d.slug}`, label: d.name })).concat({ to: '/departements', label: 'Tous les départements' }),
  },
  {
    title: 'Étudier à l’ENS',
    links: [
      { to: '/fonctionnement#admission', label: 'Concours d’admission' },
      { to: '/fonctionnement#parcours', label: 'Parcours de formation' },
      { to: '/fonctionnement#calendrier', label: 'Calendrier académique' },
      { to: '/fonctionnement#vie', label: 'Vie étudiante' },
      { to: '/fonctionnement#faq', label: 'Questions fréquentes' },
    ],
  },
  {
    title: 'Restez informé',
    links: [
      { to: '/actualites', label: 'Actualités' },
      { to: '/actualites?categorie=Admission', label: 'Annonces d’admission' },
      { to: '/actualites?categorie=Résultats', label: 'Résultats' },
      { to: '/actualites#agenda', label: 'Agenda' },
      { to: '/publier', label: 'Publier une information' },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="note">
        L'École Normale Supérieure est une entité de l'{{ site.university }}. Certaines informations présentées sur ce site
        sont indicatives et peuvent évoluer ; pour toute démarche officielle, contactez le secrétariat de l'École.
      </p>
      <div class="cols">
        <div v-for="c in columns" :key="c.title" class="col">
          <h3>{{ c.title }}</h3>
          <ul>
            <li v-for="l in c.links" :key="l.to + l.label">
              <RouterLink :to="l.to">{{ l.label }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <h3>Contact</h3>
          <ul>
            <li>{{ site.contact.address }}</li>
            <li><a :href="`tel:${site.contact.phone.replace(/\s/g, '')}`">{{ site.contact.phone }}</a></li>
            <li><a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a></li>
            <li v-for="s in site.social" :key="s.label"><a :href="s.url" target="_blank" rel="noopener">{{ s.label }}</a></li>
          </ul>
        </div>
      </div>
      <div class="legal">
        <span>Copyright © {{ year }} {{ site.name }} — {{ site.university }}. Tous droits réservés.</span>
        <span class="legal-links">
          <RouterLink to="/contact">Nous contacter</RouterLink>
          <RouterLink to="/publier">Espace de publication</RouterLink>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-alt);
  color: var(--text-secondary);
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.01em;
  padding: 24px 0 20px;
}
.note {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.cols {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;
  padding: 24px 0;
}
h3 {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 10px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
a {
  color: var(--text-secondary);
}
a:hover {
  color: var(--text);
}
.legal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
.legal-links {
  display: flex;
  gap: 16px;
}
@media (max-width: 833px) {
  .cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 480px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
</style>
