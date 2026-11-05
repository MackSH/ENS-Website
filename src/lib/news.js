// ============================================================================
//  ACTUALITÉS
//  Chaque fichier .md du dossier src/content/actualites/ devient un article.
//  Format :
//    ---
//    titre: Mon titre
//    date: 2026-11-05
//    categorie: Annonce        (Annonce | Admission | Événement | Résultats | Vie étudiante | Recherche)
//    resume: Une phrase de résumé.
//    image: https://...        (facultatif — URL ou clé de images.js)
//    epingle: true             (facultatif — mis en avant en haut de la page)
//    evenement: 2026-12-01     (facultatif — date de l'événement, pour l'agenda)
//    lieu: Auditorium de l'ENS (facultatif)
//    ---
//    Texte de l'article en Markdown…
// ============================================================================
import { marked } from 'marked'
import images from '../data/images'

export const CATEGORIES = ['Annonce', 'Admission', 'Événement', 'Résultats', 'Vie étudiante', 'Recherche']

const files = import.meta.glob('../content/actualites/*.md', { query: '?raw', import: 'default', eager: true })

function parseValue(v) {
  v = v.trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
  if (v === 'true') return true
  if (v === 'false') return false
  return v
}

export function parseFrontmatter(raw) {
  const m = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const data = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) data[line.slice(0, i).trim()] = parseValue(line.slice(i + 1))
  }
  return { data, body: m[2] }
}

function resolveImage(img) {
  if (!img) return null
  if (images[img]) return images[img]
  if (/^https?:\/\//.test(img)) return img
  return import.meta.env.BASE_URL + img.replace(/^\//, '')
}

export function toArticle(slug, raw) {
  const { data, body } = parseFrontmatter(raw)
  const date = data.date ? new Date(`${data.date}T12:00:00`) : new Date(0)
  return {
    slug,
    title: data.titre || data.title || slug,
    date,
    dateISO: data.date || '',
    category: data.categorie || data.category || 'Annonce',
    summary: data.resume || data.summary || body.replace(/[#*_>\[\]()`]/g, '').trim().slice(0, 160),
    image: resolveImage(data.image),
    pinned: data.epingle === true || data.pinned === true,
    eventDate: data.evenement ? new Date(`${data.evenement}T12:00:00`) : null,
    location: data.lieu || '',
    html: marked.parse(body),
    text: body,
  }
}

export const articles = Object.entries(files)
  .map(([path, raw]) => toArticle(path.split('/').pop().replace(/\.md$/, ''), raw))
  .sort((a, b) => b.date - a.date)

export const findArticle = (slug) => articles.find((a) => a.slug === slug)

export const upcomingEvents = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return articles.filter((a) => a.eventDate && a.eventDate >= today).sort((a, b) => a.eventDate - b.eventDate)
}

const fmt = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
export const formatDate = (d) => (d && d.getTime() ? fmt.format(d) : '')

export function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70)
}
