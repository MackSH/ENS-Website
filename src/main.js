import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reveal } from './lib/reveal'
import AppIcon from './components/AppIcon.vue'
import './assets/main.css'

createApp(App).use(router).directive('reveal', reveal).component('AppIcon', AppIcon).mount('#app')
