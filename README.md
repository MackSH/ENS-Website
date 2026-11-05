# Site de l'École Normale Supérieure — Université d'État d'Haïti

Site vitrine de l'ENS (Vue 3 + Vite), au design inspiré d'apple.com, hébergé gratuitement sur **GitHub Pages**.

## Pages

| Page | Adresse | Contenu |
| --- | --- | --- |
| Accueil | `/` | Présentation, chiffres clés, départements, actualités, agenda |
| L'École | `/ecole` | Mission, valeurs, histoire, direction, organisation |
| Départements | `/departements` | Liste filtrable + une page par département |
| Admission & fonctionnement | `/fonctionnement` | Concours, parcours sur 4 ans, calendrier, vie étudiante, FAQ |
| Actualités | `/actualites` | Recherche, filtres par catégorie, agenda des événements |
| Publier | `/publier` | Formulaire pour rédiger et publier une annonce |
| Contact | `/contact` | Coordonnées, formulaire, carte |

## Modifier le contenu (aucune compétence technique requise)

Tous les textes se modifient directement sur GitHub (bouton ✏️ sur chaque fichier) :

- **`src/data/site.js`** — nom, adresse, téléphone, e-mail, réseaux sociaux, chiffres clés, direction, histoire, valeurs.
- **`src/data/departments.js`** — les départements (description, cours, débouchés).
- **`src/data/images.js`** — toutes les photos du site. Les photos actuelles sont des illustrations libres de droits (Unsplash) à remplacer : déposez vos photos dans `public/images/` puis remplacez l'URL par `` `${base}images/ma-photo.jpg` ``.
- Les textes des pages se trouvent dans `src/views/`.

> ⚠️ Les informations marquées « À VÉRIFIER » dans les fichiers sont des valeurs indicatives.

## Publier une actualité

Chaque annonce est un fichier Markdown dans **`src/content/actualites/`**.

**Méthode simple :** allez sur la page **/publier** du site, remplissez le formulaire, puis cliquez sur
« Publier sur GitHub ». GitHub s'ouvre avec le fichier prérempli : cliquez sur **Commit changes**.
Le site se met à jour automatiquement en 1 à 2 minutes.

**Méthode manuelle :** créez un fichier `AAAA-MM-JJ-titre.md` dans ce dossier :

```markdown
---
titre: Résultats du concours 2027
date: 2027-03-15
categorie: Résultats
resume: La liste des admis est disponible.
image: graduation
epingle: true
evenement: 2027-03-20
lieu: Auditorium de l'ENS
---

Texte de l'annonce en **Markdown**…
```

Catégories : `Annonce`, `Admission`, `Événement`, `Résultats`, `Vie étudiante`, `Recherche`.
`image`, `epingle`, `evenement` et `lieu` sont facultatifs. Pour supprimer une annonce, supprimez son fichier.

## Mise en ligne sur GitHub Pages

1. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
2. Chaque modification poussée sur la branche `main` redéploie le site (workflow `.github/workflows/deploy.yml`).
3. Le site est disponible à l'adresse `https://<utilisateur>.github.io/ENS-Website/`.

Domaine personnalisé (ex. `ens.ueh.edu.ht`) : ajoutez-le dans Settings → Pages, créez un fichier `public/CNAME`
contenant le domaine, et remplacez `BASE_PATH` par `/` dans le workflow.

## Développement local

```bash
npm install
npm run dev      # http://localhost:5173/ENS-Website/
npm run build    # génère le dossier dist/
```
