<script setup>
// Carte listant les épreuves du concours d'une entité (matière + coefficient).
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  department: { type: Object, required: true },
  dark: Boolean,
  link: { type: Boolean, default: true },
})
const total = computed(() => props.department.exam.reduce((n, e) => n + e.coef, 0))
</script>

<template>
  <div class="exam-card" :class="{ dark }">
    <div class="head">
      <span class="ic"><AppIcon :name="department.icon" :size="20" /></span>
      <h3>
        <RouterLink v-if="link" :to="`/entites/${department.slug}`">{{ department.name }}</RouterLink>
        <template v-else>{{ department.name }}</template>
      </h3>
    </div>
    <table>
      <thead>
        <tr>
          <th scope="col">Matière</th>
          <th scope="col" class="num">Coef.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in department.exam" :key="e.subject">
          <td>{{ e.subject }}</td>
          <td class="num"><span class="coef" :data-c="e.coef">{{ e.coef }}</span></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total des coefficients</td>
          <td class="num">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
.exam-card {
  background: #fff;
  border-radius: var(--radius);
  padding: 24px 24px 18px;
  box-shadow: var(--shadow);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.ic {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #e8f0fe;
  color: var(--accent);
}
h3 {
  font-size: 19px;
  line-height: 1.2;
}
h3 a {
  color: inherit;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}
th {
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--text-tertiary);
  padding: 0 0 8px;
}
td {
  padding: 10px 0;
  border-top: 1px solid var(--hairline);
}
.num {
  text-align: right;
  width: 64px;
}
.coef {
  display: inline-grid;
  place-items: center;
  min-width: 30px;
  height: 28px;
  border-radius: 8px;
  font-weight: 600;
  background: var(--bg-alt);
}
.coef[data-c='3'] {
  background: var(--accent);
  color: #fff;
}
.coef[data-c='2'] {
  background: #e8f0fe;
  color: var(--accent);
}
tfoot td {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
}
.dark {
  background: var(--bg-dark-alt);
  color: #f5f5f7;
  box-shadow: none;
}
.dark .ic {
  background: rgba(41, 151, 255, 0.15);
  color: var(--link-on-dark);
}
.dark td {
  border-color: #333336;
}
.dark .coef {
  background: #333336;
}
.dark .coef[data-c='2'] {
  background: rgba(41, 151, 255, 0.18);
  color: var(--link-on-dark);
}
.dark .coef[data-c='3'] {
  background: var(--accent);
  color: #fff;
}
.dark tfoot td {
  color: #a1a1a6;
}
</style>
