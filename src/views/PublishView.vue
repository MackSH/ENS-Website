<script setup>
import { computed, reactive, ref } from 'vue'
import site from '../data/site'
import images from '../data/images'
import { CATEGORIES, toArticle, slugify } from '../lib/news'
import NewsCard from '../components/NewsCard.vue'
import AppIcon from '../components/AppIcon.vue'

const today = new Date().toISOString().slice(0, 10)
const form = reactive({
  titre: '',
  categorie: 'Annonce',
  date: today,
  resume: '',
  image: 'hero',
  imageUrl: '',
  evenement: '',
  lieu: '',
  epingle: false,
  contenu: "Rédigez ici le texte de l'annonce.\n\n## Un intertitre\n\n- Un point important\n- Un autre point\n\nPour mettre un mot en **gras**, entourez-le de deux astérisques.",
})

const imageChoices = Object.keys(images)

const esc = (s) => (/[:#"']/.test(s) ? `"${s.replace(/"/g, '\\"')}"` : s)

const markdown = computed(() => {
  const lines = ['---', `titre: ${esc(form.titre || 'Titre de l’annonce')}`, `date: ${form.date}`, `categorie: ${form.categorie}`]
  if (form.resume) lines.push(`resume: ${esc(form.resume)}`)
  const img = form.imageUrl.trim() || form.image
  if (img) lines.push(`image: ${img}`)
  if (form.epingle) lines.push('epingle: true')
  if (form.evenement) lines.push(`evenement: ${form.evenement}`)
  if (form.lieu) lines.push(`lieu: ${esc(form.lieu)}`)
  lines.push('---', '', form.contenu.trim(), '')
  return lines.join('\n')
})

const filename = computed(() => `${form.date}-${slugify(form.titre) || 'annonce'}.md`)
const preview = computed(() => toArticle(filename.value.replace(/\.md$/, ''), markdown.value))

const { owner, repo, branch, newsFolder } = site.github
const githubUrl = computed(
  () =>
    `https://github.com/${owner}/${repo}/new/${branch}?filename=${encodeURIComponent(`${newsFolder}/${filename.value}`)}&value=${encodeURIComponent(markdown.value)}`,
)
const valid = computed(() => form.titre.trim().length > 3 && form.contenu.trim().length > 10)

const copied = ref(false)
async function copy() {
  try {
    await navigator.clipboard.writeText(markdown.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    /* indisponible */
  }
}
function download() {
  const blob = new Blob([markdown.value], { type: 'text/markdown;charset=utf-8' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename.value
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<template>
  <section class="pub-hero">
    <div class="container center">
      <p class="eyebrow accent">Espace de publication</p>
      <h1 class="headline-lg">Publier une information.</h1>
      <p class="lead">
        Rédigez une annonce, prévisualisez-la, puis publiez-la sur le site en un clic via GitHub. Elle apparaîtra dans les
        Actualités en une à deux minutes.
      </p>
    </div>
  </section>

  <section class="section-sm">
    <div class="container-wide pub-grid">
      <form class="card pub-form" @submit.prevent>
        <div class="field">
          <label for="titre">Titre *</label>
          <input id="titre" v-model="form.titre" class="input" placeholder="Ex. : Résultats du concours 2027" required />
        </div>
        <div class="row">
          <div class="field">
            <label for="cat">Catégorie</label>
            <select id="cat" v-model="form.categorie" class="input">
              <option v-for="c in CATEGORIES" :key="c">{{ c }}</option>
            </select>
          </div>
          <div class="field">
            <label for="date">Date de publication</label>
            <input id="date" v-model="form.date" type="date" class="input" />
          </div>
        </div>
        <div class="field">
          <label for="resume">Résumé</label>
          <input id="resume" v-model="form.resume" class="input" placeholder="Une phrase qui résume l'annonce" maxlength="200" />
        </div>
        <div class="row">
          <div class="field">
            <label for="img">Image</label>
            <select id="img" v-model="form.image" class="input">
              <option value="">Aucune</option>
              <option v-for="k in imageChoices" :key="k" :value="k">{{ k }}</option>
            </select>
          </div>
          <div class="field">
            <label for="imgurl">… ou lien d'une image</label>
            <input id="imgurl" v-model="form.imageUrl" class="input" placeholder="https://…" />
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label for="ev">Date de l'événement</label>
            <input id="ev" v-model="form.evenement" type="date" class="input" />
            <span class="hint">Facultatif — l'annonce apparaîtra dans l'agenda.</span>
          </div>
          <div class="field">
            <label for="lieu">Lieu</label>
            <input id="lieu" v-model="form.lieu" class="input" placeholder="Ex. : Auditorium de l'ENS" />
          </div>
        </div>
        <label class="toggle">
          <input v-model="form.epingle" type="checkbox" />
          <span>Épingler en haut du site (annonce importante)</span>
        </label>
        <div class="field">
          <label for="contenu">Texte de l'annonce *</label>
          <textarea id="contenu" v-model="form.contenu" class="input"></textarea>
          <span class="hint">Mise en forme : <code>## Intertitre</code>, <code>**gras**</code>, <code>- liste</code>, <code>[lien](https://…)</code></span>
        </div>

        <div class="actions">
          <a
            :href="valid ? githubUrl : undefined"
            :aria-disabled="!valid"
            :class="['btn', { disabled: !valid }]"
            target="_blank"
            rel="noopener"
          >
            Publier sur GitHub <AppIcon name="external" :size="16" />
          </a>
          <button type="button" class="btn btn-secondary" @click="copy"><AppIcon :name="copied ? 'check' : 'copy'" :size="16" /> {{ copied ? 'Copié' : 'Copier le texte' }}</button>
          <button type="button" class="btn btn-secondary" @click="download"><AppIcon name="download" :size="16" /> Télécharger (.md)</button>
        </div>
      </form>

      <div class="preview-col">
        <p class="eyebrow">Aperçu</p>
        <NewsCard :article="preview" />
        <div class="card prose-preview">
          <div class="prose" v-html="preview.html"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-alt">
    <div class="container howto">
      <h2 class="headline-md center">Comment ça marche ?</h2>
      <ol class="grid grid-3 how-steps">
        <li class="card">
          <span class="n">1</span>
          <h3>Rédigez</h3>
          <p class="muted">Remplissez le formulaire ci-dessus. L'aperçu se met à jour en direct.</p>
        </li>
        <li class="card">
          <span class="n">2</span>
          <h3>Publiez sur GitHub</h3>
          <p class="muted">
            Le bouton ouvre GitHub avec le fichier déjà rempli. Connectez-vous avec un compte autorisé sur le dépôt
            <code>{{ owner }}/{{ repo }}</code>, puis cliquez sur « Commit changes ».
          </p>
        </li>
        <li class="card">
          <span class="n">3</span>
          <h3>C'est en ligne</h3>
          <p class="muted">Le site se reconstruit automatiquement. L'annonce apparaît dans les Actualités après une à deux minutes.</p>
        </li>
      </ol>
      <p class="center small muted note">
        Pour modifier ou supprimer une annonce, ouvrez le dossier
        <a :href="`https://github.com/${owner}/${repo}/tree/${branch}/${newsFolder}`" target="_blank" rel="noopener">{{ newsFolder }}</a>
        sur GitHub et éditez le fichier correspondant.
      </p>
    </div>
  </section>
</template>

<style scoped>
.pub-hero {
  padding: 72px 0 24px;
}
.pub-hero .lead {
  max-width: 720px;
  margin: 16px auto 0;
}
.pub-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 32px;
  align-items: start;
}
.pub-form {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 0 1px var(--hairline), var(--shadow);
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  cursor: pointer;
}
.toggle input {
  width: 20px;
  height: 20px;
  accent-color: var(--accent);
}
.hint code,
.howto code {
  background: var(--bg-alt);
  padding: 1px 5px;
  border-radius: 4px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.btn.disabled {
  opacity: 0.4;
  pointer-events: none;
}
.preview-col {
  position: sticky;
  top: calc(var(--nav-h) + 20px);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.prose-preview {
  padding: 24px 28px;
  max-height: 420px;
  overflow: auto;
  box-shadow: 0 0 0 1px var(--hairline);
}
.prose-preview .prose {
  font-size: 16px;
}
@media (max-width: 900px) {
  .pub-grid {
    grid-template-columns: 1fr;
  }
  .preview-col {
    position: static;
  }
}
@media (max-width: 520px) {
  .row {
    grid-template-columns: 1fr;
  }
  .pub-form {
    padding: 22px;
  }
}
.how-steps {
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
}
.how-steps li {
  padding: 28px 26px;
}
.n {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  margin-bottom: 14px;
}
.how-steps h3 {
  font-size: 19px;
  margin-bottom: 6px;
}
.how-steps p {
  font-size: 15px;
}
.note {
  margin-top: 28px;
}
</style>
