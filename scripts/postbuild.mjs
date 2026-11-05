// GitHub Pages ne connaît pas les routes de l'application :
// on copie index.html en 404.html pour que les liens directs fonctionnent.
import { copyFileSync, writeFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
writeFileSync('dist/.nojekyll', '')
console.log('404.html et .nojekyll générés.')
