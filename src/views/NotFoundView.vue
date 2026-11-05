<template>
  <section class="section nf">
    <div class="container center">
      <p class="eyebrow">Erreur 404</p>
      <h1 class="headline-lg">Cette page est introuvable.</h1>
      <p class="lead">Elle a peut-être été déplacée ou supprimée.</p>
      <div class="cta-row">
        <RouterLink to="/" class="btn">Retour à l'accueil</RouterLink>
        <RouterLink to="/actualites" class="link-arrow">Rechercher une information</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nf {
  min-height: 60vh;
  display: grid;
  place-items: center;
}
.lead {
  margin: 14px 0 28px;
}
</style>
