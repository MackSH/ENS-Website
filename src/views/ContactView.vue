<script setup>
import { reactive, computed } from 'vue'
import site from '../data/site'
import PageHero from '../components/PageHero.vue'
import AppIcon from '../components/AppIcon.vue'

const form = reactive({ nom: '', email: '', sujet: 'Admission', message: '' })
const subjects = ['Admission', 'Scolarité', 'Résultats', 'Partenariat', 'Presse', 'Autre']
const mailto = computed(
  () =>
    `mailto:${site.contact.email}?subject=${encodeURIComponent(`[${form.sujet}] Message de ${form.nom}`)}&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.nom} (${form.email})`,
    )}`,
)
const send = () => (window.location.href = mailto.value)
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&output=embed`
</script>

<template>
  <PageHero eyebrow="Contact" title="Parlons-en." lead="Une question sur l'admission, la scolarité ou un partenariat ? Notre équipe vous répond." />

  <section class="section-sm">
    <div class="container grid grid-3 infos">
      <div class="card info" v-reveal>
        <span class="i"><AppIcon name="map-pin" /></span>
        <h2>Adresse</h2>
        <p class="muted">{{ site.contact.address }}</p>
      </div>
      <div class="card info" v-reveal="80">
        <span class="i"><AppIcon name="phone" /></span>
        <h2>Téléphone</h2>
        <a :href="`tel:${site.contact.phone.replace(/\s/g, '')}`">{{ site.contact.phone }}</a>
        <p class="muted small">{{ site.contact.hours }}</p>
      </div>
      <div class="card info" v-reveal="160">
        <span class="i"><AppIcon name="mail" /></span>
        <h2>E-mail</h2>
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
        <a :href="site.admission.url" target="_blank" rel="noopener" class="small">Inscriptions : {{ site.admission.url.replace(/^https?:\/\//, '').replace(/\/$/, '') }}</a>
      </div>
    </div>
  </section>

  <section class="section bg-alt">
    <div class="container contact-grid">
      <form class="card c-form" @submit.prevent="send" v-reveal>
        <h2 class="headline-sm">Écrivez-nous</h2>
        <div class="field">
          <label for="nom">Nom complet</label>
          <input id="nom" v-model="form.nom" class="input" required />
        </div>
        <div class="field">
          <label for="email">E-mail</label>
          <input id="email" v-model="form.email" type="email" class="input" required />
        </div>
        <div class="field">
          <label for="sujet">Sujet</label>
          <select id="sujet" v-model="form.sujet" class="input">
            <option v-for="s in subjects" :key="s">{{ s }}</option>
          </select>
        </div>
        <div class="field">
          <label for="msg">Message</label>
          <textarea id="msg" v-model="form.message" class="input" required></textarea>
        </div>
        <button type="submit" class="btn">Envoyer le message</button>
        <p class="hint muted small">Le message s'ouvrira dans votre application e-mail.</p>
      </form>
      <div class="map" v-reveal="100">
        <iframe :src="mapSrc" title="Carte — localisation de l'ENS" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.infos {
  margin-top: 0;
}
.info {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 0 0 1px var(--hairline);
}
.i {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent);
}
.info h2 {
  font-size: 19px;
  margin-top: 6px;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.c-form {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
textarea.input {
  min-height: 140px;
}
.c-form .btn {
  align-self: flex-start;
}
.map {
  border-radius: var(--radius);
  overflow: hidden;
  min-height: 420px;
  background: #e8e8ed;
}
.map iframe {
  width: 100%;
  height: 100%;
  min-height: 420px;
  border: 0;
}
@media (max-width: 833px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
